import React, { useState, useEffect, useCallback, useMemo } from "react";
import {
  Clock,
  Trophy,
  BookOpen,
  Settings,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Star,
  Target,
  Brain,
  CheckCircle,
  XCircle,
  AlertCircle,
  Code,
  Database,
  Globe,
  Smartphone,
  Server,
  Monitor,
  Layers,
  Zap,
  Coffee,
} from "lucide-react";
import techTopics from "./topics";
import { GoogleGenAI } from "@google/genai";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";

const defaultQuestionTypes = {
  mcq: 0.4,
  fill: 0.2,
  code: 0.3,
  trueorfalse: 0.1,
};

function buildGenerationPrompt(
  topicName,
  subTopicNames,
  difficulty,
  count,
  sessionSeed,
  questionTypesProbabilities // New parameter
) {
  // First, get the list of allowed types from the probabilities object
  const allowedTypes = Object.keys(questionTypesProbabilities);
  const allowedTypesString = allowedTypes.map((type) => `"${type}"`).join(", ");

  const subTopicList =
    subTopicNames.length > 0
      ? ` from the following sub-topics: ${subTopicNames.join(", ")}`
      : "";

  // This part is crucial: we tell the AI exactly what ratio to use.
  const probabilitiesString = JSON.stringify(questionTypesProbabilities);

  return `Generate exactly ${count} exam questions for topic "${topicName}"${subTopicList} (difficulty ${difficulty} on a scale of 1–10).
The questions must be a mix of the following types: ${allowedTypesString}.
The distribution of question types should closely follow the probabilities: ${probabilitiesString}. For example, if "fill" has a probability of 0.8, generate approximately 80% fill-in-the-blank questions. For "code", include a small, realistic code snippet. For "fill", leave a single blank for the answer.

Return a single valid JSON object with a top-level key "questions" that is an array of objects.
For each question, add a "tag" field with a value from the list of selected sub-topics or "general" for general questions.

Each object must follow exactly this format:
{
  "id": "string",
  "type": ${allowedTypesString},
  "q": "string",
  "difficulty": number,
  "tag": "string",
  
  "options": ["string", "string", ...],
  "answerIndex": integer,
  
  "options": ["True","False"],
  "answerIndex": 0 or 1,
  
  "answerText": "string",
  "instructions": "string",
  
  "q": "code snippet in fenced block",
  "options": ["string", "string", ...],
  "answerIndex": integer,
  "explanation": "string"
}

Rules:
- Make each question self-contained and relevant to placements
- Vary phrasing, avoid duplicates
- Use small, realistic code snippets for "code" type
- Randomize wording using seed: ${sessionSeed}
- The "tag" field MUST be one of the provided sub-topics or "general".
- ABSOLUTELY DO NOT:
  * Output markdown formatting
  * Output comments outside the JSON
  * Add explanations unless required in the "code" type
- Ensure JSON is 100% valid, syntactically correct, and parses without errors
- If unsure, prefer clarity over creativity — accuracy is priority
- Every string must escape quotes and special characters

IMPORTANT:
- Output ONLY the raw JSON object (no text before or after)
- If any formatting rule is violated, treat it as a fatal error and self-correct before final output`;
}

function buildEvaluatePrompt(questionText, canonicalAnswer, studentAnswer) {
  return `You are an unbiased grader. Evaluate whether the student's answer is correct for the following question.

Question:
${questionText}

Canonical (reference) answer:
${canonicalAnswer}

Student's answer:
${studentAnswer}

Rules:
- Compare meaning (not exact characters). If the student's answer matches the canonical meaning, mark correct: true.
- If partially correct, mark correct: false but provide constructive feedback and a confidence score.
- Be strict but fair.
- Provide both a short "feedback" summary and a longer "explanation" paragraph.
- The explanation should include:
  * Clear reasoning on correctness,
  * Background information on the main topic or keywords,
  * Related concepts to deepen understanding.
- All strings in the JSON output must escape quotes, newlines, and special characters.
- Absolutely no extra text, comments, or markdown — only valid JSON.
- If your draft output is invalid JSON, you must fix it before final output.

Output format (must be valid JSON):
{
  "correct": true|false,
  "confidence": 0-100,
  "feedback": "short 1-2 sentence summary",
  "explanation": "detailed, informative paragraph explaining correctness and background",
  "suggestions": "practical advice for improvement"
}`;
}

function buildBatchEvaluatePrompt(questionsData) {
  const questionsJson = JSON.stringify(questionsData, null, 2);

  return `You are an unbiased grader. Evaluate all student answers at once for the following questions.

Questions and Answers:
${questionsJson}

Rules:
- Compare meaning (not exact characters). If the student's answer matches the canonical meaning, mark correct: true.
- If partially correct, mark correct: false but provide constructive feedback and a confidence score.
- Be strict but fair.
- Provide both a short "feedback" summary and a longer "explanation" paragraph for each question.
- The explanation should include:
  * Clear reasoning on correctness,
  * Background information on the main topic or keywords,
  * Related concepts to deepen understanding.
- All strings in the JSON output must escape quotes, newlines, and special characters.
- Absolutely no extra text, comments, or markdown — only valid JSON.
- If your draft output is invalid JSON, you must fix it before final output.

Output format (must be valid JSON array):
[
  {
    "correct": true|false,
    "confidence": 0-100,
    "feedback": "short 1-2 sentence summary",
    "explanation": "detailed, informative paragraph explaining correctness and background",
    "suggestions": "practical advice for improvement"
  },
  ...
]`;
}

export default function TechPrepApp() {
  const [currentScreen, setCurrentScreen] = useState("home");
  const [selectedTech, setSelectedTech] = useState("");
  const [difficulty, setDifficulty] = useState(5);
  const [questionCount, setQuestionCount] = useState(10);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [evaluating, setEvaluating] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [sessionHistory, setSessionHistory] = useState([]);
  const [progress, setProgress] = useState({});
  const [subTopicProgress, setSubTopicProgress] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [geminiApiKey, setGeminiApiKey] = useState(
    () => localStorage.getItem("geminiApiKey") || ""
  );
  const [forceFull, setForceFull] = useState(false);
  const [validatingKey, setValidatingKey] = useState(false);
  const [tempKey, setTempKey] = useState(geminiApiKey || "");
  const [settingsMessage, setSettingsMessage] = useState("");
  const [settingsMessageType, setSettingsMessageType] = useState("info");
  const [selectedTopics, setSelectedTopics] = useState([]);

  async function validateAndSaveKey(tempKey) {
    if (!tempKey.trim()) {
      setSettingsMessageType("error");
      setSettingsMessage("Please enter a Gemini API key.");
      return;
    }

    setValidatingKey(true);
    setSettingsMessage("");

    try {
      const testPayload = {
        contents: [{ parts: [{ text: "Hello" }] }],
        generationConfig: { maxOutputTokens: 5 },
      };

      const resp = await fetch(`${GEMINI_API_URL}?key=${tempKey}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(testPayload),
      });

      const data = await resp.json();

      if (resp.ok && data.candidates && data.candidates[0]) {
        setGeminiApiKey(tempKey);
        localStorage.setItem("geminiApiKey", tempKey);
        setSettingsMessageType("success");
        setSettingsMessage("✅ API key saved successfully!");
        setTimeout(() => setShowSettings(false), 1000);
      } else {
        setGeminiApiKey("");
        setSettingsMessageType("error");
        if (data.error && data.error.message) {
          setSettingsMessage(`❌ ${data.error.message}`);
        } else {
          setSettingsMessage("❌ Invalid API key. Please check and try again.");
        }
      }
    } catch (err) {
      console.error("Error validating API key:", err);
      setGeminiApiKey("");
      setSettingsMessageType("error");
      setSettingsMessage(
        "⚠ Error connecting to Gemini API. Check your network connection."
      );
    } finally {
      setValidatingKey(false);
    }
  }

  useEffect(() => {
    try {
      const storedProgress = JSON.parse(
        localStorage.getItem("techPrepProgress") || "{}"
      );
      const storedHistory = JSON.parse(
        localStorage.getItem("techPrepHistory") || "[]"
      );
      setProgress(storedProgress);
      setSessionHistory(storedHistory);

      const storedSubTopicProgress = JSON.parse(
        localStorage.getItem("techPrepSubTopicProgress") || "{}"
      );
      setSubTopicProgress(storedSubTopicProgress);
    } catch (error) {
      console.warn("Failed to load stored data:", error);
      setProgress({});
      setSessionHistory([]);
      setSubTopicProgress({});
    }
  }, []);

  useEffect(() => {
    let interval = null;
    if (isTimerRunning && currentScreen === "quiz" && !quizCompleted) {
      interval = setInterval(() => setTimer((t) => t + 1), 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, currentScreen, quizCompleted]);

  const saveProgress = useCallback(
    (techId, newStats) => {
      const next = {
        ...progress,
        [techId]: { ...(progress[techId] || {}), ...newStats },
      };
      setProgress(next);
      try {
        localStorage.setItem("techPrepProgress", JSON.stringify(next));
      } catch (error) {
        console.warn("Failed to save progress:", error);
      }
    },
    [progress]
  );

  const saveSubTopicProgress = useCallback((techId, subTopicId, isCorrect) => {
    setSubTopicProgress((prev) => {
      const next = { ...prev };
      if (!next[techId]) {
        next[techId] = {};
      }
      if (!next[techId][subTopicId]) {
        next[techId][subTopicId] = { correct: 0, total: 0 };
      }
      const current = next[techId][subTopicId];
      next[techId][subTopicId] = {
        correct: current.correct + (isCorrect ? 1 : 0),
        total: current.total + 1,
      };
      try {
        localStorage.setItem("techPrepSubTopicProgress", JSON.stringify(next));
      } catch (error) {
        console.warn("Failed to save sub-topic progress:", error);
      }
      return next;
    });
  }, []);

  async function callLLM(payload) {
    if (!geminiApiKey) {
      throw new Error("API Key is not set.");
    }

    const ai = new GoogleGenAI({
      apiKey: geminiApiKey,
    });

    const model = payload.model || "gemini-2.0-flash";
    const config = {
      temperature: 1.0,
      topK: 40,
      topP: 0.9,
      ...(payload.config || {}),
    };

    const contents = payload.contents;

    const response = await ai.models.generateContent({
      model,
      config,
      contents,
    });

    return response;
  }

  function extractJSONFromResponse(response) {
    let rawText = "";

    if (
      response.candidates &&
      response.candidates[0] &&
      response.candidates[0].content &&
      response.candidates[0].content.parts
    ) {
      rawText = response.candidates[0].content.parts[0].text;
    } else if (response.output_text) {
      rawText = response.output_text;
    } else if (
      response.choices &&
      response.choices[0] &&
      response.choices[0].text
    ) {
      rawText = response.choices[0].text;
    } else {
      rawText = JSON.stringify(response);
    }

    let cleanText = rawText.trim();

    if (cleanText.startsWith("```json")) {
      cleanText = cleanText.replace(/^```json\s*/, "").replace(/\s*```$/, "");
    } else if (cleanText.startsWith("```")) {
      cleanText = cleanText.replace(/^```\s*/, "").replace(/\s*```$/, "");
    }

    const jsonMatch = cleanText.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      try {
        return JSON.parse(jsonMatch[0]);
      } catch (e) {
        console.warn("Failed to parse extracted JSON:", e);
      }
    }

    try {
      return JSON.parse(cleanText);
    } catch (e) {
      throw new Error(
        `Failed to parse LLM output as JSON: ${
          e.message
        } - Raw: ${cleanText.slice(0, 500)}`
      );
    }
  }

  function buildQuestionSchema(count) {
    return {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              id: { type: "string" },
              type: {
                type: "string",
                enum: ["mcq", "truefalse", "fill", "code"],
              },
              q: { type: "string" },
              difficulty: { type: "integer" },
              tag: { type: "string" },
              options: {
                type: "array",
                items: { type: "string" },
              },
              answerIndex: { type: "integer" },
              answerText: { type: "string" },
              explanation: { type: "string" },
              instructions: { type: "string" },
            },
            required: ["id", "type", "q", "difficulty", "tag"],
          },
          minItems: count,
          maxItems: count,
        },
      },
    };
  }

  async function generateQuestionsViaLLM(
    topicName,
    subTopicNames,
    difficulty,
    count,
    questionTypesProbabilities // New parameter
  ) {
    const seed = Date.now();
    const prompt = buildGenerationPrompt(
      topicName,
      subTopicNames,
      difficulty,
      count,
      seed,
      questionTypesProbabilities
    );

    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: Math.min(0.95, 0.2 + (difficulty / 10) * 0.6),
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
        responseSchema: buildQuestionSchema(count),
      },
    };

    const resp = await callLLM(payload);
    const parsed = extractJSONFromResponse(resp);

    if (!Array.isArray(parsed.questions)) {
      throw new Error("No questions array found in response");
    }
    return parsed.questions;
  }

  async function evaluateAnswerWithLLM(
    questionText,
    canonicalAnswer,
    studentAnswer
  ) {
    const prompt = buildEvaluatePrompt(
      questionText,
      canonicalAnswer,
      studentAnswer
    );
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.0,
        maxOutputTokens: 8192,
      },
    };

    try {
      const resp = await callLLM(payload);
      const parsed = extractJSONFromResponse(resp);
      return parsed;
    } catch (err) {
      console.warn("Evaluation failed:", err);
      return {
        correct: false,
        confidence: 0,
        feedback: "Evaluation failed - marking as incorrect",
      };
    }
  }

  async function evaluateAnswersBatchWithLLM(questionsData) {
    const prompt = buildBatchEvaluatePrompt(questionsData);
    const payload = {
      contents: [{ parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.0,
        maxOutputTokens: 8192,
      },
    };

    try {
      const resp = await callLLM(payload);
      const parsed = extractJSONFromResponse(resp);

      if (!Array.isArray(parsed)) {
        console.warn(
          "Batch evaluation didn't return an array, falling back to individual evaluations"
        );
        return null;
      }

      return parsed;
    } catch (err) {
      console.warn("Batch evaluation failed:", err);
      return null;
    }
  }

  const generateQuestions = async () => {
    if (!selectedTech) {
      alert("Pick a topic first");
      return;
    }

    if (!geminiApiKey) {
      alert("Please set your Gemini API key in the settings first.");
      setShowSettings(true);
      return;
    }

    setLoading(true);
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setScore(0);
    setTimer(0);
    setQuizCompleted(false);
    setIsTimerRunning(false);

    const tech = techTopics.find((t) => t.id === selectedTech);
    const topicName = tech?.name || selectedTech;
    const subTopicNames = selectedTopics.map((id) => {
      const subTopic = tech.topics.find((t) => t.id === id);
      return subTopic ? subTopic.name : id;
    });

    // Use the topic's specific question types or the default
    const questionTypesProbabilities =
      tech?.questionTypes || defaultQuestionTypes;

    try {
      const produced = await generateQuestionsViaLLM(
        topicName,
        subTopicNames,
        difficulty,
        questionCount,
        questionTypesProbabilities
      );
      const normalized = produced.map((q, i) => {
        const tech = techTopics.find((t) => t.id === selectedTech);
        if (!tech) return q;
        let tag = q.tag?.toLowerCase();

        const match = tech.topics.find(
          (st) => st.name.toLowerCase() === tag || st.id.toLowerCase() === tag
        );
        if (match) {
          tag = match.id;
        } else if (tag !== "general") {
          tag = "general";
        }

        return {
          id: q.id || `${selectedTech}-${Date.now()}-${i}`,
          type: q.type || "mcq",
          q: q.q || q.prompt || "Untitled question",
          difficulty: q.difficulty || difficulty,
          tag,
          options:
            q.options ||
            (q.type === "truefalse" ? ["True", "False"] : ["A", "B", "C", "D"]),
          answerIndex: typeof q.answerIndex === "number" ? q.answerIndex : 0,
          answerText: q.answerText || null,
          explanation: q.explanation || "",
        };
      });

      setQuestions(normalized);
      setUserAnswers(new Array(normalized.length).fill(null));
      setCurrentQuestionIndex(0);
      setCurrentScreen("quiz");
      setIsTimerRunning(true);
    } catch (err) {
      console.log(err);
      setErrorMessage(
        "❌ Failed to generate questions. Please check your API key or try again later."
      );
      setCurrentScreen("error");
    } finally {
      setLoading(false);
    }
  };
  const handleAnswerSelect = (answer) => {
    if (evaluating) return;
    setSelectedAnswer(answer);
    const newAnswers = [...userAnswers];
    newAnswers[currentQuestionIndex] = answer;
    setUserAnswers(newAnswers);
  };

  const handleNextQuestion = () => {
    if (evaluating || loading) return;
    const current = questions[currentQuestionIndex];
    if (!current) return;

    if (current.type === "fill") {
      if (
        !selectedAnswer ||
        typeof selectedAnswer !== "string" ||
        selectedAnswer.trim() === ""
      ) {
        alert("Please type an answer before continuing.");
        return;
      }
    } else if (selectedAnswer === null) {
      alert("Select an option first");
      return;
    }

    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < questions.length) {
      setCurrentQuestionIndex(nextIndex);
      setSelectedAnswer(userAnswers[nextIndex]);
    } else {
      setForceFull(true);
      finishQuiz();
    }
  };

  const handlePrevQuestion = () => {
    if (evaluating) return;

    if (currentQuestionIndex > 0) {
      const prevIndex = currentQuestionIndex - 1;
      setCurrentQuestionIndex(prevIndex);
      setSelectedAnswer(userAnswers[prevIndex]);
    }
  };

  const finishQuiz = async () => {
    setIsTimerRunning(false);
    setEvaluating(true);

    try {
      const questionsData = questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        let studentAnswerText = "";

        if (question.type === "fill") {
          studentAnswerText =
            typeof userAnswer === "string" ? userAnswer.trim() : "";
        } else {
          studentAnswerText =
            typeof userAnswer === "number" && question.options
              ? question.options[userAnswer] || ""
              : "";
        }

        const canonicalAnswer =
          (question.answerText || question.options?.[question.answerIndex]) ??
          "";

        return {
          question: question.q,
          canonicalAnswer,
          studentAnswer: studentAnswerText || "No answer provided",
        };
      });

      let evaluations = [];

      const batchEvaluations = await evaluateAnswersBatchWithLLM(questionsData);

      if (batchEvaluations && batchEvaluations.length === questions.length) {
        evaluations = batchEvaluations;
      } else {
        console.log("Falling back to individual evaluations...");
        const individualEvaluations = [];

        for (let i = 0; i < questionsData.length; i++) {
          const data = questionsData[i];
          const evaluation = await evaluateAnswerWithLLM(
            data.question,
            data.canonicalAnswer,
            data.studentAnswer
          );
          individualEvaluations.push(evaluation);
        }

        evaluations = individualEvaluations;
      }

      const evaluatedQuestions = questions.map((question, index) => {
        const userAnswer = userAnswers[index];
        let studentAnswerText = "";

        if (question.type === "fill") {
          studentAnswerText =
            typeof userAnswer === "string" ? userAnswer.trim() : "";
        } else {
          studentAnswerText =
            typeof userAnswer === "number" && question.options
              ? question.options[userAnswer] || ""
              : "";
        }

        let evaluation = evaluations[index];

        if (!evaluation || typeof evaluation.correct === "undefined") {
          evaluation = {
            correct: false,
            confidence: 0,
            feedback: "Evaluation failed - marking as incorrect",
            explanation: "There was an issue evaluating this answer.",
            suggestions: "Please review the question and try again.",
          };
        }

        if (studentAnswerText === "") {
          evaluation = {
            correct: false,
            confidence: 100,
            feedback: "No answer provided",
            explanation: "You did not provide any answer to evaluate.",
            suggestions:
              "Review the question carefully and attempt to provide an answer next time.",
            ...evaluation,
          };
        }

        return {
          ...question,
          evaluation,
        };
      });

      const correctCount = evaluatedQuestions.filter(
        (q) => q.evaluation?.correct
      ).length;

      setQuestions(evaluatedQuestions);
      setScore(correctCount);

      const percentage = Math.round((correctCount / questions.length) * 100);
      const session = {
        id: Date.now(),
        tech: selectedTech,
        techName:
          techTopics.find((t) => t.id === selectedTech)?.name || selectedTech,
        difficulty,
        score: correctCount,
        total: questions.length,
        percentage,
        timeSpent: timer,
        date: new Date().toISOString(),
      };

      const history = [session, ...sessionHistory].slice(0, 50);
      setSessionHistory(history);
      try {
        localStorage.setItem("techPrepHistory", JSON.stringify(history));
      } catch (error) {
        console.warn("Failed to save session history:", error);
      }

      const prev = progress[selectedTech] || {
        totalQuizzes: 0,
        bestScore: 0,
        totalScore: 0,
        averageTime: 0,
      };

      const updated = {
        totalQuizzes: prev.totalQuizzes + 1,
        bestScore: Math.max(prev.bestScore || 0, percentage),
        totalScore: (prev.totalScore || 0) + percentage,
        averageTime: Math.round(
          ((prev.averageTime || 0) * (prev.totalQuizzes || 0) + timer) /
            (prev.totalQuizzes + 1)
        ),
      };

      saveProgress(selectedTech, updated);
      console.log(evaluatedQuestions);
      evaluatedQuestions.forEach((q) => {
        const tech = techTopics.find((t) => t.id === selectedTech);
        const isValidTag =
          tech?.topics.some((st) => st.id === q.tag) || q.tag === "general";
        const safeTag = isValidTag ? q.tag : "general";
        saveSubTopicProgress(selectedTech, safeTag, q.evaluation.correct);
      });
    } catch (error) {
      setErrorMessage(
        "⚠ There was an error evaluating your answers. Please try again later."
      );
      setCurrentScreen("error");
      return;
    } finally {
      setEvaluating(false);
      setQuizCompleted(true);
      setForceFull(false);
    }
  };

  function renderQuestionContent(text) {
    const renderInlineCode = (textSegment) => {
      const inlineCodeRegex = /`([^`]+)`/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = inlineCodeRegex.exec(textSegment)) !== null) {
        if (match.index > lastIndex) {
          parts.push(textSegment.slice(lastIndex, match.index));
        }

        parts.push(
          <code
            key={`inline-${match.index}`}
            className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono font-normal"
          >
            {match[1]}
          </code>
        );
        lastIndex = match.index + match[0].length;
      }

      if (lastIndex < textSegment.length) {
        parts.push(textSegment.slice(lastIndex));
      }

      return parts.length > 1 ? parts : textSegment;
    };

    const codeBlockRegex = /```(\w+)?\n?([\s\S]*?)```/g;
    const codeBlocks = [];
    let match;
    let lastIndex = 0;

    while ((match = codeBlockRegex.exec(text)) !== null) {
      codeBlocks.push({
        index: match.index,
        length: match[0].length,
        language: match[1] || "code",
        code: match[2].trim(),
        fullMatch: match[0],
      });
    }

    if (codeBlocks.length === 0) {
      const contentWithInlineCode = renderInlineCode(text);
      return (
        <div className="text-lg md:text-xl font-medium text-gray-700 mb-6 leading-relaxed font-serif tracking-normal">
          {contentWithInlineCode}
        </div>
      );
    }

    const elements = [];
    lastIndex = 0;

    codeBlocks.forEach((block, index) => {
      const beforeText = text.slice(lastIndex, block.index).trim();
      if (beforeText) {
        const contentWithInlineCode = renderInlineCode(beforeText);
        elements.push(
          <div
            key={`text-${index}`}
            className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed font-serif tracking-normal"
          >
            {contentWithInlineCode}
          </div>
        );
      }

      elements.push(
        <div
          key={`code-${index}`}
          className="relative rounded-lg overflow-hidden shadow-lg border border-gray-700 bg-[#1e1e1e]"
        >
          <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-700">
            <span className="text-xs font-medium text-gray-300">
              {block.language}
            </span>
            <span className="text-gray-500 text-xs">Snippet</span>
          </div>
          <pre className="p-4 sm:p-6 text-xs sm:text-sm md:text-base text-gray-200 leading-relaxed font-mono font-normal whitespace-pre-wrap break-words overflow-x-hidden">
            <code className="font-mono break-words">{block.code}</code>
          </pre>
        </div>
      );

      lastIndex = block.index + block.length;
    });

    const afterText = text.slice(lastIndex).trim();
    if (afterText) {
      const contentWithInlineCode = renderInlineCode(afterText);
      elements.push(
        <div
          key="text-after"
          className="text-lg md:text-xl font-medium text-gray-700 leading-relaxed font-serif tracking-normal"
        >
          {contentWithInlineCode}
        </div>
      );
    }

    return <div className="space-y-4 mb-6">{elements}</div>;
  }

  const resetQuiz = () => {
    setQuestions([]);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setUserAnswers([]);
    setScore(0);
    setTimer(0);
    setIsTimerRunning(false);
    setQuizCompleted(false);
    setCurrentScreen("setup");
  };

  const formatTime = (s) => {
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  const difficultyColor = (d) =>
    d <= 3 ? "text-green-600" : d <= 6 ? "text-yellow-600" : "text-red-600";
  const difficultyLabel = (d) => (d <= 3 ? "Easy" : d <= 6 ? "Medium" : "Hard");

  const groupedTopics = useMemo(
    () =>
      techTopics.reduce((acc, topic) => {
        if (!acc[topic.category]) {
          acc[topic.category] = [];
        }
        acc[topic.category].push(topic);
        return acc;
      }, {}),
    []
  );

  const handleSubTopicChange = (topicId) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  if (currentScreen === "error") {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-50 to-red-100 p-4 sm:p-6">
        <div className="bg-white shadow-lg rounded-xl p-4 sm:p-6 md:p-8 max-w-lg text-center border border-red-300">
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-700 mb-4">
            Something Went Wrong
          </h2>
          <p className="text-gray-700 mb-6">
            {errorMessage || "An unexpected error occurred."}
          </p>
          <button
            onClick={() => {
              setErrorMessage("");
              setCurrentScreen("home");
            }}
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow-lg"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  if (currentScreen === "home") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-2 sm:px-4 py-6 max-w-full sm:max-w-7xl space-y-8">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 text-center">
            <pre
              className="font-mono text-black text-[0.30rem] sm:text-[0.50rem] md:text-[0.50rem] overflow-x-auto"
              style={{ fontFamily: "'Fira Code', monospace" }}
            >
              {`
███████╗███████╗  ██████╗██╗  ██╗ █████╗ ██████╗ ███████╗███╗   ██╗ █████╗
╚══██╔══╝██╔════╝██╔════╝██║  ██║██╔══██╗██╔══██╗██╔════╝████╗  ██║██╔══██╗
    ██║   █████╗  ██║     ███████║███████║██████╔╝█████╗  ██╔██╗ ██║███████║
    ██║   ██╔══╝  ██║     ██╔══██║██╔══██║██╔══██╗██╔══╝  ██║╚██╗██║██╔══██║
    ██║   ███████╗╚██████╗██║  ██║██║  ██║██║  ██║███████╗██║ ╚████║██║  ██║
    ╚═╝   ╚══════╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝
`}
            </pre>

            <p className="text-gray-600 text-base md:text-lg max-w-2xl mx-auto mt-4">
              Master technical concepts with AI-powered practice sessions across
              multiple technologies
            </p>
          </div>

          {/* Heading + settings */}
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl md:text-2xl font-semibold text-gray-800">
                Choose Your Technology
              </h2>
              <button
                onClick={() => setShowSettings(!showSettings)}
                className="px-4 py-2 text-indigo-600 bg-indigo-100 rounded-full flex items-center space-x-2 hover:bg-indigo-200 transition-colors"
              >
                <Settings className="w-5 h-5" />
                <span className="font-medium">
                  {showSettings ? "Hide" : "Show"} Settings
                </span>
              </button>
            </div>

            {showSettings && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-semibold mb-4">Settings</h3>
                <div>
                  <label className="block text-sm font-medium mb-2 text-black flex items-center">
                    Gemini API Key
                    {!geminiApiKey && (
                      <span className="ml-2 text-red-500 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        Required
                      </span>
                    )}
                  </label>
                  <input
                    type="text"
                    value={tempKey}
                    onChange={(e) => setTempKey(e.target.value)}
                    placeholder="Enter your Gemini API Key here"
                    className={`w-full text-black px-4 py-2 border rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-200 ${
                      !geminiApiKey
                        ? "border-red-500 focus:border-red-500"
                        : "border-gray-300"
                    }`}
                  />

                  <button
                    onClick={() => validateAndSaveKey(tempKey)}
                    disabled={validatingKey}
                    className="mt-3 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition disabled:opacity-50 flex items-center"
                  >
                    {validatingKey && (
                      <div className="animate-spin mr-2 h-4 w-4 border-b-2 border-white rounded-full"></div>
                    )}
                    {validatingKey
                      ? "Validating..."
                      : "Validate & Save API Key"}
                  </button>
                  {settingsMessage && (
                    <p
                      className={`mt-2 text-sm ${
                        settingsMessageType === "success"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {settingsMessage}
                    </p>
                  )}

                  <p className="text-sm text-gray-500 mt-1">
                    Your key is stored locally in your browser's local storage
                    and is not sent to any server.
                  </p>
                </div>
              </div>
            )}

            {Object.entries(groupedTopics).map(([category, topics]) => (
              <div key={category} className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4 flex items-center">
                  {category === "Programming" && (
                    <Code className="w-5 h-5 mr-2" />
                  )}
                  {category === "Web" && <Globe className="w-5 h-5 mr-2" />}
                  {category === "Backend" && (
                    <Server className="w-5 h-5 mr-2" />
                  )}
                  {category === "Database" && (
                    <Database className="w-5 h-5 mr-2" />
                  )}
                  {category === "Mobile" && (
                    <Smartphone className="w-5 h-5 mr-2" />
                  )}
                  {category === "DevOps" && (
                    <Monitor className="w-5 h-5 mr-2" />
                  )}
                  {category === "Cloud" && <Globe className="w-5 h-5 mr-2" />}
                  {category === "CS Fundamentals" && (
                    <Brain className="w-5 h-5 mr-2" />
                  )}
                  {category === "OOP" && <Layers className="w-5 h-5 mr-2" />}
                  {category === "Tools" && (
                    <Settings className="w-5 h-5 mr-2" />
                  )}
                  {category}
                </h3>

                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 md:p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {topics.map((tech) => {
                      const techProgress = progress[tech.id];
                      const avg = techProgress?.totalQuizzes
                        ? Math.round(
                            (techProgress.totalScore || 0) /
                              Math.max(1, techProgress.totalQuizzes)
                          )
                        : 0;
                      return (
                        <div
                          key={tech.id}
                          onClick={() => {
                            setSelectedTech(tech.id);
                            setSelectedTopics([]);
                            setCurrentScreen("setup");
                          }}
                          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer p-4 md:p-6 border-l-4 border-transparent hover:border-indigo-500 group"
                        >
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center space-x-3 flex-1 min-w-0">
                              <div
                                className={`${tech.color} w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center text-lg md:text-2xl text-white shadow-md`}
                              >
                                {tech.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                <h3 className="font-semibold text-gray-800 truncate text-sm md:text-base">
                                  {tech.name}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-wide">
                                  {tech.id}
                                </p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-gray-400 flex-shrink-0 group-hover:text-indigo-500 transition-colors" />
                          </div>

                          {techProgress ? (
                            <div className="space-y-2">
                              <div className="flex justify-between text-xs md:text-sm">
                                <span className="text-gray-600">Quizzes:</span>
                                <span className="font-semibold">
                                  {techProgress.totalQuizzes}
                                </span>
                              </div>
                              <div className="flex justify-between text-xs md:text-sm">
                                <span className="text-gray-600">
                                  Avg Score:
                                </span>
                                <span className="font-semibold text-indigo-600">
                                  {avg}%
                                </span>
                              </div>
                              <div className="flex justify-between text-xs md:text-sm">
                                <span className="text-gray-600">Best:</span>
                                <span className="font-semibold text-green-600">
                                  {techProgress.bestScore || 0}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 rounded-full h-1 sm:h-1.5">
                                <div
                                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1.5 rounded-full transition-all duration-300"
                                  style={{ width: `${Math.min(100, avg)}%` }}
                                ></div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-2">
                              <p className="text-sm text-gray-500">
                                Start practicing!
                              </p>
                              <div className="w-full bg-gray-100 rounded-full h-1.5 mt-2">
                                <div className="bg-gray-200 h-1.5 rounded-full"></div>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Recent sessions */}
          {sessionHistory.length > 0 && (
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-semibold mb-4 flex items-center">
                <Trophy className="w-6 h-6 mr-2 text-yellow-500" />
                Recent Sessions
              </h3>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {sessionHistory.slice(0, 15).map((s) => (
                  <div
                    key={s.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div
                        className={`${
                          techTopics.find((t) => t.id === s.tech)?.color ||
                          "bg-gray-500"
                        } w-8 h-8 rounded flex items-center justify-center text-sm text-white`}
                      >
                        {techTopics.find((t) => t.id === s.tech)?.icon || "?"}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-sm truncate">
                          {s.techName}
                        </p>
                        <p className="text-xs text-gray-500">
                          {new Date(s.date).toLocaleDateString()} • Level{" "}
                          {s.difficulty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-semibold text-sm">
                        {s.score}/{s.total}
                      </p>
                      <p className="text-xs text-gray-500">
                        {formatTime(s.timeSpent)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (currentScreen === "setup") {
    const tech = techTopics.find((t) => t.id === selectedTech);
    const subTopics = tech?.topics || [];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-6 max-w-4xl">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <div
                  className={`${tech?.color} w-16 h-16 rounded-xl flex items-center justify-center text-3xl text-white shadow-lg`}
                >
                  {tech?.icon}
                </div>
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    {tech?.name}
                  </h2>
                  <p className="text-gray-600">
                    Configure your practice session
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    Category: {tech?.category}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setCurrentScreen("home")}
                className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors flex items-center space-x-1"
              >
                <ChevronRight className="w-4 h-4 rotate-180" />
                <span>Back</span>
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <label className="block text-lg font-semibold mb-4">
                  Difficulty Level: {difficulty}/10{" "}
                  <span
                    className={`${difficultyColor(difficulty)} font-medium`}
                  >
                    ({difficultyLabel(difficulty)})
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="range"
                    min="1"
                    max="10"
                    value={difficulty}
                    onChange={(e) => setDifficulty(parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-green-200 via-yellow-200 to-red-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right, #10b981 0%, #10b981 30%, #f59e0b 30%, #f59e0b 70%, #ef4444 70%, #ef4444 100%)`,
                    }}
                  />
                  <div
                    className="absolute top-0 w-6 h-6 bg-white border-2 border-indigo-500 rounded-full shadow-lg transform -translate-y-1.5 -translate-x-3 pointer-events-none"
                    style={{ left: `${((difficulty - 1) / 9) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between text-sm text-gray-500 mt-2">
                  <span>Beginner</span>
                  <span>Intermediate</span>
                  <span>Expert</span>
                </div>
              </div>

              <div>
                <label className="block text-lg font-semibold mb-4">
                  Number of Questions: {questionCount}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 md:gap-4">
                  {[5, 10, 15, 20, 25].map((c) => (
                    <button
                      key={c}
                      onClick={() => setQuestionCount(c)}
                      className={`px-3 py-3 md:px-4 md:py-4 rounded-lg transition-all text-sm md:text-base font-medium ${
                        questionCount === c
                          ? "bg-indigo-600 text-white shadow-lg transform scale-105"
                          : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:scale-102"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {subTopics.length > 0 && (
                <div>
                  <label className="block text-lg font-semibold mb-4">
                    Select Specific Topics:
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {subTopics.map((subTopic) => {
                      const isSelected = selectedTopics.includes(subTopic.id);
                      const subProgress =
                        subTopicProgress[selectedTech]?.[subTopic.id];
                      const correct = subProgress?.correct || 0;
                      const total = subProgress?.total || 0;
                      const percentage =
                        total > 0 ? (correct / total) * 100 : 0;
                      return (
                        <button
                          key={subTopic.id}
                          onClick={() => handleSubTopicChange(subTopic.id)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-all ${
                            isSelected
                              ? "bg-indigo-50 border-indigo-500 text-indigo-800 shadow-md"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300"
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-sm">
                              {subTopic.name}
                            </span>
                            {isSelected ? (
                              <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                            ) : (
                              <div className="w-5 h-5 border-2 border-gray-300 rounded-full flex-shrink-0"></div>
                            )}
                          </div>
                          <div className="mt-2 text-xs text-gray-500">
                            {total > 0
                              ? `Progress: ${correct}/${total} (${percentage.toFixed(
                                  0
                                )}%)`
                              : "No progress yet"}
                          </div>
                          {total > 0 && (
                            <div className="w-full bg-gray-200 rounded-full h-1 mt-1">
                              <div
                                className="bg-gradient-to-r from-green-500 to-indigo-500 h-1 rounded-full transition-all duration-300"
                                style={{
                                  width: `${Math.min(100, percentage)}%`,
                                }}
                              ></div>
                            </div>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {progress[selectedTech] && (
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Your Overall Progress in {tech?.name}
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-indigo-600">
                        {progress[selectedTech].totalQuizzes}
                      </p>
                      <p className="text-sm text-gray-600">Quizzes Taken</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-green-600">
                        {progress[selectedTech].bestScore}%
                      </p>
                      <p className="text-sm text-gray-600">Best Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-purple-600">
                        {Math.round(
                          progress[selectedTech].totalScore /
                            Math.max(1, progress[selectedTech].totalQuizzes)
                        )}
                        %
                      </p>
                      <p className="text-sm text-gray-600">Average Score</p>
                    </div>
                    <div className="text-center">
                      <p className="text-2xl font-bold text-orange-600">
                        {formatTime(progress[selectedTech].averageTime)}
                      </p>
                      <p className="text-sm text-gray-600">Avg Time</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="text-center pt-6">
                <button
                  onClick={generateQuestions}
                  disabled={loading || !geminiApiKey}
                  className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                      <span className="text-lg font-semibold">
                        Generating Questions...
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-6 h-6" />
                      <span className="text-lg font-semibold">
                        Start Practice Session
                      </span>
                    </>
                  )}
                </button>
                {!geminiApiKey && (
                  <p className="text-sm text-red-500 mt-3">
                    Please set your API key in the settings before starting.
                  </p>
                )}
                <p className="text-sm text-gray-500 mt-3">
                  Questions will be generated using AI based on your selected
                  difficulty level
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentScreen === "quiz") {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) {
      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading question...</p>
          </div>
        </div>
      );
    }

    if (quizCompleted) {
      const percentage = Math.round((score / questions.length) * 100);

      const tech = techTopics.find((t) => t.id === selectedTech);
      const subTopics = tech?.topics || [];
      const topicsWithProgress = subTopics.map((st) => {
        const correct = questions.filter(
          (q) => q.tag === st.id && q.evaluation?.correct
        ).length;
        const total = questions.filter((q) => q.tag === st.id).length;
        const score = total > 0 ? (correct / total) * 100 : 0;

        return { ...st, score, correct, total };
      });

      return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
          <div className="container mx-auto px-4 py-6 max-w-6xl">
            <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
              <div className="text-center mb-8">
                <div className="relative inline-block">
                  <Trophy className="w-20 md:w-24 h-20 md:h-24 text-yellow-500 mx-auto mb-4" />
                  {percentage >= 80 && (
                    <div className="absolute -top-2 -right-2">
                      <Star className="w-8 h-8 text-yellow-400 fill-current animate-pulse" />
                    </div>
                  )}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                  Quiz Completed!
                </h2>
                <p className="text-gray-600 mb-4">Here are your results</p>
                {evaluating && (
                  <div className="mt-4 flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
                    <span className="text-indigo-600">
                      Evaluating answers...
                    </span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-4 text-center">
                  <Target className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-blue-600">
                    {score}
                  </p>
                  <p className="text-sm text-gray-600">Correct</p>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-4 text-center">
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-green-600">
                    {percentage}%
                  </p>
                  <p className="text-sm text-gray-600">Score</p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-4 text-center">
                  <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-purple-600">
                    {formatTime(timer)}
                  </p>
                  <p className="text-sm text-gray-600">Time</p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-4 text-center">
                  <BookOpen className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                  <p className="text-2xl md:text-3xl font-bold text-orange-600">
                    {questions.length}
                  </p>
                  <p className="text-sm text-gray-600">Questions</p>
                </div>
              </div>

              <div className="text-center mb-8">
                {percentage >= 90 && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-800">
                      Outstanding Performance! 🎉
                    </h3>
                    <p className="text-green-700">
                      You've mastered this topic!
                    </p>
                  </div>
                )}
                {percentage >= 70 && percentage < 90 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-800">
                      Great Job! 👏
                    </h3>
                    <p className="text-blue-700">
                      You have a solid understanding of this topic.
                    </p>
                  </div>
                )}
                {percentage >= 50 && percentage < 70 && (
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-yellow-800">
                      Good Effort! 📚
                    </h3>
                    <p className="text-yellow-700">
                      Keep practicing to improve your skills.
                    </p>
                  </div>
                )}
                {percentage < 50 && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-800">
                      Keep Learning! 💪
                    </h3>
                    <p className="text-red-700">
                      Review the topics and try again.
                    </p>
                  </div>
                )}
              </div>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <AlertCircle className="w-6 h-6 mr-2 text-gray-600" />
                  Detailed Results
                </h3>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {questions.map((q, idx) => {
                    const userAnswer = userAnswers[idx];
                    const evaluation = q.evaluation;
                    const isCorrect = evaluation?.correct || false;

                    return (
                      <div
                        key={q.id}
                        className={`border-2 rounded-xl p-5 shadow-sm transition-all duration-200 ${
                          isCorrect
                            ? "border-green-300 bg-green-50"
                            : "border-red-300 bg-red-50"
                        }`}
                      >
                        <div className="flex flex-wrap items-center justify-between mb-4">
                          <div className="flex items-center space-x-2">
                            <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-lg font-semibold">
                              Q{idx + 1}
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-lg ${
                                q.type === "mcq"
                                  ? "bg-blue-100 text-blue-800"
                                  : q.type === "truefalse"
                                  ? "bg-green-100 text-green-800"
                                  : q.type === "fill"
                                  ? "bg-yellow-100 text-yellow-800"
                                  : "bg-purple-100 text-purple-800"
                              }`}
                            >
                              {q.type.toUpperCase()}
                            </span>
                            <span
                              className={`text-xs font-medium px-2 py-1 rounded-lg ${difficultyColor(
                                q.difficulty
                              )} bg-gray-100`}
                            >
                              Level {q.difficulty}
                            </span>
                          </div>
                          <span className="text-sm font-medium text-gray-500">
                            Topic: {q.tag}
                          </span>

                          <div>
                            {isCorrect ? (
                              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-6 h-6 text-green-600" />
                              </div>
                            ) : (
                              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                                <XCircle className="w-6 h-6 text-red-600" />
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="font-semibold text-gray-900 mb-4 leading-relaxed">
                          {renderQuestionContent(q.q)}
                        </div>

                        <div className="text-sm space-y-2">
                          {q.type === "fill" ? (
                            <>
                              <div className="flex">
                                <span className="font-medium text-gray-700 w-28">
                                  Your answer:
                                </span>
                                <span className="ml-2 px-2 py-1 bg-gray-100 rounded">
                                  {renderQuestionContent(userAnswer) ||
                                    "No answer provided"}
                                </span>
                              </div>
                              <div className="flex">
                                <span className="font-medium text-gray-700 w-28">
                                  Expected:
                                </span>
                                <span className="ml-2 px-2 py-1 bg-blue-100 rounded">
                                  {renderQuestionContent(q.answerText)}
                                </span>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="flex">
                                <span className="font-medium text-gray-700 w-28">
                                  Your answer:
                                </span>
                                <span
                                  className={`ml-2 px-2 py-1 rounded ${
                                    userAnswer === q.answerIndex
                                      ? "bg-green-100 text-green-800"
                                      : "bg-red-100 text-red-800"
                                  }`}
                                >
                                  {userAnswer !== null
                                    ? q.options[userAnswer]
                                    : "No answer"}
                                </span>
                              </div>
                              <div className="flex">
                                <span className="font-medium text-gray-700 w-28">
                                  Correct answer:
                                </span>
                                <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 rounded">
                                  {q.options[q.answerIndex]}
                                </span>
                              </div>
                            </>
                          )}

                          {evaluation?.feedback && (
                            <div className="bg-blue-50 p-3 rounded-md border border-blue-100">
                              <p className="font-medium text-gray-800">
                                💬 Feedback
                              </p>
                              <div className="text-gray-700 mt-1">
                                {renderQuestionContent(evaluation.feedback)}
                              </div>
                            </div>
                          )}
                          {evaluation?.explanation && (
                            <div className="bg-indigo-50 p-3 rounded-md border border-indigo-100">
                              <p className="font-medium text-gray-800">
                                📖 Explanation
                              </p>
                              <div className="text-gray-700 mt-1">
                                {renderQuestionContent(evaluation.explanation)}
                              </div>
                            </div>
                          )}
                          {evaluation?.suggestions && (
                            <div className="bg-yellow-50 p-3 rounded-md border border-yellow-100">
                              <p className="font-medium text-gray-800">
                                💡 Suggestions
                              </p>
                              <div className="text-gray-700 mt-1">
                                {renderQuestionContent(evaluation.suggestions)}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              {topicsWithProgress.length > 0 && (
                <div className="bg-gray-100 p-6 rounded-xl shadow-inner mb-8">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Layers className="w-6 h-6 mr-2 text-indigo-600" />
                    Sub-Topic Performance
                  </h3>
                  <div className="space-y-4">
                    {topicsWithProgress.map((st) =>
                      st.total > 0 ? (
                        <div
                          key={st.id}
                          className="bg-white rounded-lg p-4 border border-gray-200"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <p className="font-semibold text-gray-800">
                              {st.name}
                            </p>
                            <span className="text-sm font-medium text-gray-600">
                              {st.correct}/{st.total} Correct
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-indigo-500 to-green-500 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${st.score}%` }}
                            ></div>
                          </div>
                          <p className="text-xs text-right mt-1 text-gray-500">
                            {st.score.toFixed(0)}%
                          </p>
                        </div>
                      ) : null
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={resetQuiz}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                >
                  <RotateCcw className="w-5 h-5" />
                  <span>Try Again</span>
                </button>
                <button
                  onClick={() => setCurrentScreen("home")}
                  className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg hover:shadow-xl"
                >
                  <span>Back to Home</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-4 max-w-4xl">
          <div className="bg-white rounded-t-xl shadow-lg p-4 sm:p-6 md:p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
                  <span className="font-mono text-lg sm:text-xl font-bold text-gray-800">
                    {formatTime(timer)}
                  </span>
                  <button
                    onClick={() => setIsTimerRunning((r) => !r)}
                    className="p-1 sm:p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isTimerRunning ? (
                      <Pause className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    ) : (
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 text-gray-600" />
                    )}
                  </button>
                </div>
                <div className="text-xs sm:text-sm text-gray-600">
                  Question {currentQuestionIndex + 1} of {questions.length}
                </div>
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${difficultyColor(
                      currentQuestion.difficulty
                    )} bg-white`}
                  >
                    Level {currentQuestion.difficulty}
                  </span>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      currentQuestion.type === "mcq"
                        ? "bg-blue-100 text-blue-800"
                        : currentQuestion.type === "truefalse"
                        ? "bg-green-100 text-green-800"
                        : currentQuestion.type === "fill"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {currentQuestion.type.toUpperCase()}
                  </span>
                </div>
              </div>
              <button
                onClick={() => {
                  if (evaluating) return;
                  setCurrentScreen("home");
                }}
                className="text-gray-500 hover:text-gray-700 px-2 py-1 text-sm sm:text-base rounded transition-colors"
              >
                Exit Quiz
              </button>
            </div>

            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Progress</span>
                <span>
                  {forceFull ? (
                    "100%"
                  ) : (
                    <>
                      {Math.round(
                        (currentQuestionIndex / questions.length) * 100
                      )}
                      %
                    </>
                  )}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
                  style={{
                    width: forceFull
                      ? "100%"
                      : `${(currentQuestionIndex / questions.length) * 100}%`,
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-b-xl shadow-lg p-4 sm:p-6 md:p-8">
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-6 leading-relaxed">
                {renderQuestionContent(currentQuestion.q)}
              </h3>

              <div className="space-y-3">
                {["mcq", "truefalse", "code"].includes(currentQuestion.type) &&
                  currentQuestion.options && (
                    <div className="space-y-3">
                      {currentQuestion.options.map((opt, idx) => {
                        const isSelected = selectedAnswer === idx;
                        return (
                          <button
                            key={idx}
                            onClick={() => handleAnswerSelect(idx)}
                            className={`w-full text-left p-3 sm:p-4 md:p-5 rounded-xl border-2 transition-all duration-200 transform hover:scale-[1.02]
          border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50 hover:shadow-md
          ${
            isSelected
              ? "border-indigo-500 bg-indigo-50 text-indigo-800 shadow-lg"
              : "border-indigo-200 bg-indigo-50 text-black shadow-lg"
          }`}
                          >
                            <div className="flex items-center space-x-2 sm:space-x-3">
                              <div
                                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 flex items-center justify-center font-semibold text-xs sm:text-sm
              border-gray-300 text-gray-600
              ${
                isSelected ? "border-indigo-500 bg-indigo-500 text-white" : ""
              }`}
                              >
                                {String.fromCharCode(65 + idx)}
                              </div>
                              <span className="flex-1 text-sm sm:text-base break-words">
                                {opt}
                              </span>
                              {isSelected && (
                                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-500 flex-shrink-0" />
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}

                {currentQuestion.type === "fill" && (
                  <div className="space-y-4">
                    <div className="relative">
                      <textarea
                        value={
                          typeof selectedAnswer === "string"
                            ? selectedAnswer
                            : ""
                        }
                        onChange={(e) => handleAnswerSelect(e.target.value)}
                        placeholder="Type your answer here (be concise and specific)..."
                        className="w-full p-4 md:p-5 border-2 border-gray-200 rounded-xl min-h-[120px] resize-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition-all"
                      />
                      <div className="absolute bottom-3 right-3 text-xs text-gray-400">
                        {typeof selectedAnswer === "string"
                          ? selectedAnswer.length
                          : 0}{" "}
                        characters
                      </div>
                    </div>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                      <p className="text-sm text-blue-800 flex items-center">
                        <Brain className="w-4 h-4 mr-2" />
                        Your answer will be evaluated by AI for meaning and
                        correctness.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 pt-6 border-t border-gray-100">
              <button
                onClick={handlePrevQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-3 py-2 sm:px-4 sm:py-2 text-gray-600 hover:text-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1 text-sm sm:text-base"
              >
                <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 rotate-180" />
                <span>Previous</span>
              </button>

              <div className="flex items-center gap-2 sm:gap-3">
                <button
                  onClick={() => {
                    if (evaluating) return;
                    if (
                      window.confirm(
                        "Are you sure you want to reset the quiz? All progress will be lost."
                      )
                    ) {
                      setSelectedAnswer(null);
                      setQuestions([]);
                      setCurrentScreen("setup");
                    }
                  }}
                  className="px-3 py-2 text-gray-600 hover:text-gray-800 transition-colors text-xs sm:text-sm"
                >
                  Reset Quiz
                </button>

                <button
                  onClick={handleNextQuestion}
                  disabled={
                    currentQuestion.type === "fill"
                      ? !selectedAnswer || selectedAnswer.trim() === ""
                      : selectedAnswer === null
                  }
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg sm:rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center space-x-2 text-sm sm:text-base"
                >
                  <span className="font-semibold">
                    {currentQuestionIndex === questions.length - 1
                      ? evaluating
                        ? "Evaluating..."
                        : "Finish Quiz"
                      : "Next Question"}
                  </span>
                  {currentQuestionIndex < questions.length - 1 ? (
                    <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  ) : (
                    <Trophy className="w-3 h-3 sm:w-4 sm:h-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex justify-center mt-6 pt-4 border-t border-gray-100">
              <div className="flex flex-wrap gap-2 justify-center max-w-full">
                {questions.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (evaluating) return;
                      if (!selectedAnswer) return;
                      if (idx > currentQuestionIndex + 1) return;
                      setCurrentQuestionIndex(idx);
                      setSelectedAnswer(userAnswers[idx]);
                    }}
                    className={`w-10 h-10 sm:w-8 sm:h-8 rounded-full text-sm sm:text-xs font-medium transition-all flex-shrink-0 ${
                      idx === currentQuestionIndex
                        ? "bg-indigo-600 text-white shadow-lg"
                        : userAnswers[idx] !== null
                        ? "bg-green-100 text-green-800 border border-green-300"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
