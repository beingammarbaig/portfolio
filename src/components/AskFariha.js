import React, { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaPaperPlane, FaDownload, FaEnvelope } from "react-icons/fa";
import { Link } from "react-scroll";
import farihaAiImg from "../assets/fariha_ai.png";

// ─── Knowledge base ──────────────────────────────────────────────────────────
const KB = [
  {
    id: "subjects",
    patterns: ["subjects", "courses", "teach", "taught", "calculus", "differential", "linear algebra", "discrete", "what does she teach", "what courses"],
    title: "Courses Taught",
    answer: `Fariha Ansari teaches **8 undergraduate courses** across three areas:

**Calculus & Analysis (4 courses)**
• Calculus & Analytical Geometry
• Multivariable Calculus
• Differential Equations
• Complex Variables & Integral Transforms

**Linear Algebra (2 courses)**
• Linear Algebra & Differential Equations
• Linear Algebra & Vector Analysis

**Discrete & Computational (2 courses)**
• Discrete Mathematics & Discrete Structures
• Numerical Methods for Engineers`,
    section: "Skills & Courses Taught",
    related: ["experience", "obe"],
  },
  {
    id: "experience",
    patterns: ["experience", "years", "18 years", "career", "teaching career", "background", "summarize", "history", "work history"],
    title: "18+ Years of Experience",
    answer: `Fariha Ansari has **18+ years** of academic experience at SSUET, Karachi:

• **2008–2012** — Junior Lecturer of Mathematics *(4 years)*
• **2012–Present** — Lecturer of Mathematics *(13+ years)*
• **2019–Present** — VLE Departmental Coordinator
• **2015–2024** — SAR Committee Member

She has taught **1,000+ students** across undergraduate engineering programs, consistently applying Outcome-Based Education (OBE) and modern pedagogy.`,
    section: "Education & Experience",
    related: ["subjects", "suitable"],
  },
  {
    id: "phd",
    patterns: ["phd", "research", "doctoral", "thesis", "dissertation", "graph theory", "machine learning", "scheduling", "combinatorial", "optimization", "research about", "research topic"],
    title: "PhD Research",
    answer: `**Title:** *Optimizing Scheduling Problems using Vertex Coloring and Machine Learning*

**Supervisor:** Dr. Muhammad Naseem
*(Associate Professor & Chairperson, Dept. of Software Engineering, SSUET)*

**Status:** In Progress (2022–Present) · CGPA **3.70 / 4.00**

The research integrates **graph-theoretic modeling** (vertex coloring) with **machine learning** to solve NP-Hard scheduling problems. A manuscript is currently in preparation.`,
    section: "Research",
    related: ["vertex_coloring", "qualifications"],
  },
  {
    id: "vertex_coloring",
    patterns: ["vertex coloring", "vertex", "graph coloring", "chromatic", "explain vertex", "what is vertex", "simple terms", "simply", "color"],
    title: "Vertex Coloring — Simply Explained",
    answer: `**Vertex Coloring** is a concept from Graph Theory:

🗺️ **Think of a map** where countries are *vertices* and shared borders are *edges*. You want neighboring countries to have different colors.

📅 **In scheduling:** Courses = vertices, Conflicts (same students/room/time) = edges, Time slots = colors.

🎯 **The goal:** Assign time slots to courses so no conflicting courses overlap — using the *fewest* possible slots.

This is an **NP-Hard** problem. Fariha's PhD combines vertex coloring with Machine Learning to find near-optimal solutions efficiently.`,
    section: "Research",
    related: ["phd"],
  },
  {
    id: "obe",
    patterns: ["obe", "outcome", "outcome-based", "accreditation", "sar", "curriculum", "quality", "assessment", "competencies", "obe competencies"],
    title: "OBE Competencies",
    answer: `Fariha Ansari is a recognised **OBE specialist**:

✅ **SAR Committee Member** (2015–2024) — quality assurance & accreditation
✅ OBE-aligned course files, rubrics, and assessment design
✅ Delivered **11+ faculty development workshops** on OBE, CEP/CEA, and QOBE software
✅ Trained peers in *"Do's and Don'ts of Outcome Based Assessment"*
✅ Contributed to departmental accreditation documentation

Her OBE & Assessment Design proficiency is rated **85% (Advanced)**.`,
    section: "Roles & About",
    related: ["experience", "suitable"],
  },
  {
    id: "available",
    patterns: ["available", "availability", "hire", "visiting", "faculty", "opportunity", "collaboration", "consult", "open for", "visiting faculty"],
    title: "Availability & Opportunities",
    answer: `Yes! Fariha Ansari is **Open for Collaboration**. She is available for:

✅ Research Collaboration
✅ Academic Consultation
✅ Invited & Guest Lectures
✅ OBE & Curriculum Advisory
✅ Visiting Faculty Opportunities

She typically responds within **1–2 business days**.`,
    section: "Contact",
    related: ["contact", "suitable"],
    showContact: true,
  },
  {
    id: "suitable",
    patterns: ["suitable", "why hire", "university position", "qualified", "recommend", "strengths", "why would she", "good candidate", "ideal"],
    title: "Why Fariha for a University Position?",
    answer: `Fariha Ansari is an outstanding candidate for any mathematics faculty role:

🎓 **Academic Excellence** — M.S. CGPA 3.84/4.00 · PhD CGPA 3.70/4.00
📚 **Deep Experience** — 18+ years · 1,000+ students taught
🔬 **Active Researcher** — PhD in Graph Theory + ML (manuscript in prep)
✅ **OBE Expert** — SAR committee, curriculum design, accreditation
💻 **Digital Leader** — VLE Coordinator since 2019
🎤 **Faculty Trainer** — 11+ professional development workshops
📖 **Multi-disciplinary** — 8 courses across calculus, algebra & discrete maths`,
    section: "About & Experience",
    related: ["experience", "obe", "available"],
    showContact: true,
  },
  {
    id: "contact",
    patterns: ["contact", "reach", "email", "phone", "get in touch", "message", "how to contact", "how can i"],
    title: "Contact Information",
    answer: `You can reach Fariha Ansari through:

📧 **Email:** fariha.ansari1985@gmail.com
📞 **Phone:** +92-333-3405700
🏛️ **Institution:** SSUET, Karachi, Pakistan
🔗 **Faculty Page:** ssuet.edu.pk/faculties/ms-fariha-ansari/

Or use the **Contact section** of this portfolio to send a direct message.`,
    section: "Contact",
    related: ["available"],
    showContact: true,
  },
  {
    id: "cv",
    patterns: ["cv", "resume", "download", "curriculum vitae", "download cv", "her cv"],
    title: "Download CV",
    answer: `Fariha Ansari's full academic CV is available for download. It includes:

• Complete academic qualifications & CGPA records
• 18+ years of detailed teaching history
• PhD research details & supervisor information
• OBE & quality assurance contributions
• Faculty development workshops conducted
• Digital coordination experience (VLE, LMS)`,
    section: "Banner",
    related: ["qualifications", "experience"],
    showCV: true,
  },
  {
    id: "qualifications",
    patterns: ["qualification", "degree", "education", "cgpa", "gpa", "ms degree", "msc", "bsc", "masters", "bachelor", "academic background", "academic qualifications"],
    title: "Academic Qualifications",
    answer: `Fariha Ansari's complete academic credentials:

🎓 **PhD Mathematics** — In Progress (2022–Present) · CGPA **3.70/4.00** · SSUET
🎓 **M.S. Mathematics** — 2013 · CGPA **3.84/4.00** · SSUET
🎓 **M.Sc. Mathematics** — First Division · University of Karachi
🎓 **B.Sc. (Hons.)** — First Division · Mathematics, Chemistry & Physics · University of Karachi`,
    section: "About",
    related: ["phd", "experience"],
  },
  {
    id: "intro",
    patterns: ["who is", "who is she", "who is fariha", "introduce", "tell me about", "about her", "about fariha", "tell me about fariha", "brief intro", "overview", "general", "profile", "what does she do", "what is she", "describe her", "describe fariha"],
    title: "About Fariha Ansari",
    answer: `**Fariha Ansari** is a Mathematics Lecturer and active PhD researcher based in Karachi, Pakistan.

👩‍🏫 **Role:** Lecturer of Mathematics at SSUET (Sir Syed University of Engineering & Technology)
📚 **Teaching:** 18+ years · 8 undergraduate courses · 1,000+ students
🔬 **Research:** PhD on Graph Theory & Machine Learning-based scheduling optimization
✅ **Speciality:** OBE (Outcome-Based Education) expert and curriculum designer
💻 **Digital:** VLE Departmental Coordinator since 2019
🌐 **Open to:** Research collaboration, guest lectures, visiting faculty roles`,
    section: "About",
    related: ["experience", "qualifications", "available"],
  },
  {
    id: "workplace",
    patterns: ["where does she work", "where she work", "ssuet", "university", "institution", "college", "karachi", "sir syed", "department", "where does she teach", "which university", "which institution"],
    title: "Workplace — SSUET",
    answer: `Fariha Ansari works at **Sir Syed University of Engineering & Technology (SSUET)**, Karachi, Pakistan.

🏛️ **Department:** Mathematics
📍 **Location:** Karachi, Pakistan
🔗 **Faculty Page:** ssuet.edu.pk/faculties/ms-fariha-ansari/

She has been with SSUET since **2008** — first as a Junior Lecturer (2008–2012) and then as a full Lecturer of Mathematics (2012–present). She also serves as the **VLE Departmental Coordinator** since 2019.`,
    section: "About",
    related: ["experience", "contact"],
  },
  {
    id: "skills",
    patterns: ["skills", "skill", "expertise", "proficiency", "good at", "capabilities", "strengths", "what can she do", "her abilities", "her strengths", "what is she good at", "specialization", "specialist"],
    title: "Skills & Expertise",
    answer: `Fariha Ansari's key skills and proficiency levels:

**Academic & Research (Expert)**
• Graph Theory · Vertex Coloring · Combinatorial Optimization
• Machine Learning (applied to scheduling)
• OBE & Assessment Design *(85% Advanced)*

**Teaching & Pedagogy (Expert)**
• 8 undergraduate math courses · 18+ years
• Curriculum Design & Accreditation *(90% Expert)*
• Faculty Development & Training

**Digital & Technology**
• VLE / LMS Coordination · MATLAB
• QOBE Software · MS Office Suite
• Virtual classroom management`,
    section: "Skills",
    related: ["obe", "phd", "subjects"],
  },
  {
    id: "vle",
    patterns: ["vle", "lms", "digital", "technology", "online teaching", "virtual", "coordinator", "e-learning", "digital coordinator", "online", "virtual learning", "learning management"],
    title: "VLE / Digital Coordination",
    answer: `Since **2019**, Fariha Ansari has served as the **VLE (Virtual Learning Environment) Departmental Coordinator** at SSUET.

💻 **Responsibilities:**
• Managing and maintaining the departmental LMS (Learning Management System)
• Onboarding faculty to virtual teaching tools
• Supporting online course delivery and digital content
• Coordinating virtual classrooms across the Mathematics department

This role reflects her blend of mathematical expertise with modern digital pedagogy.`,
    section: "Roles",
    related: ["experience", "obe"],
  },
  {
    id: "workshops",
    patterns: ["workshop", "training", "faculty development", "faculty training", "professional development", "seminars", "sessions", "trainer", "conducted", "delivered"],
    title: "Faculty Development Workshops",
    answer: `Fariha Ansari has conducted **11+ faculty development workshops** at SSUET, covering:

🎤 **Topics Delivered:**
• OBE (Outcome-Based Education) methodology
• CEP/CEA (Complex Engineering Problem/Activity) design
• QOBE software usage for assessment
• *"Do's and Don'ts of Outcome Based Assessment"*
• Virtual teaching and LMS tools

She is a recognised trainer among departmental peers and has contributed significantly to institutional quality assurance.`,
    section: "Roles",
    related: ["obe", "experience"],
  },
  {
    id: "personality",
    patterns: ["personality", "interests", "hobbies", "passion", "what does she like", "her passion", "motivated", "values", "teaching style", "approach", "philosophy"],
    title: "Teaching Philosophy & Passion",
    answer: `Fariha Ansari is deeply passionate about **making mathematics accessible and meaningful** for engineering students.

💡 **Teaching Philosophy:**
• Rigorous yet approachable — connecting theory to real engineering problems
• Outcome-driven — every course is aligned to student competency goals
• Continuous learner — pursuing her PhD while actively teaching full-time

🎯 **What Drives Her:**
• Solving complex NP-Hard problems through intelligent algorithms
• Mentoring 1,000+ students over nearly two decades
• Bridging pure mathematics and practical machine learning applications`,
    section: "About",
    related: ["experience", "phd"],
  },
];

// ─── Urdu knowledge base ─────────────────────────────────────────────────────
const KB_UR = [
  {
    id: "subjects_ur",
    patterns: ["مضامین", "کورسز", "پڑھاتی", "تدریس", "مضمون", "کیا پڑھاتی"],
    title: "پڑھائے گئے مضامین",
    answer: `فریحہ انصاری **8 کورسز** تین شعبوں میں پڑھاتی ہیں:

**کیلکولس اور تجزیہ (4 کورسز)**
• کیلکولس اور تجزیاتی جیومیٹری
• ملٹی ویریایبل کیلکولس
• ڈفرینشل مساوات
• کمپلیکس ویریایبلز

**لینئر الجبرا (2 کورسز)**
• لینئر الجبرا اور ڈفرینشل مساوات

**ڈسکریٹ ریاضی (2 کورسز)**
• ڈسکریٹ میتھمیٹکس
• نیومیریکل میتھڈز`,
    section: "مہارتیں اور کورسز",
    related: [],
  },
  {
    id: "experience_ur",
    patterns: ["تجربہ", "سال", "کیریئر", "خلاصہ", "18 سال", "تدریسی تجربہ"],
    title: "18+ سالہ تدریسی تجربہ",
    answer: `فریحہ انصاری کو SSUET کراچی میں **18+ سال** کا تجربہ ہے:

• **2008–2012** — جونیئر لیکچرر
• **2012–حال** — لیکچرر آف میتھمیٹکس
• **2019–حال** — VLE کوآرڈینیٹر

انہوں نے **1000+ طلباء** کو پڑھایا ہے۔`,
    section: "تجربہ",
    related: [],
  },
  {
    id: "phd_ur",
    patterns: ["پی ایچ ڈی", "تحقیق", "مقالہ", "گراف", "شیڈیولنگ", "موضوع"],
    title: "پی ایچ ڈی تحقیق",
    answer: `**عنوان:** *ورٹیکس کلرنگ اور مشین لرننگ کے ذریعے شیڈیولنگ مسائل کی بہتری*

**نگران:** ڈاکٹر محمد نسیم
**حیثیت:** جاری (2022 تا حال) | CGPA **3.70/4.00**

تحقیق گراف تھیوری اور مشین لرننگ کو یکجا کرتی ہے۔ مقالہ تیاری کے مرحلے میں ہے۔`,
    section: "تحقیق",
    related: [],
  },
  {
    id: "contact_ur",
    patterns: ["رابطہ", "ای میل", "فون", "کیسے ملیں", "سے ملنا"],
    title: "رابطہ معلومات",
    answer: `📧 **ای میل:** fariha.ansari1985@gmail.com
📞 **فون:** 0333-3405700
🏛️ **ادارہ:** SSUET، کراچی، پاکستان`,
    section: "رابطہ",
    related: [],
    showContact: true,
  },
  {
    id: "available_ur",
    patterns: ["دستیاب", "مل سکتی", "ملازمت", "تعاون", "وزٹنگ", "کیا دستیاب"],
    title: "دستیابی",
    answer: `جی ہاں! فریحہ انصاری درج ذیل کے لیے دستیاب ہیں:

✅ تحقیقی تعاون
✅ علمی مشاورت
✅ مہمان لیکچر
✅ OBE مشاورت
✅ وزٹنگ فیکلٹی

وہ عام طور پر **1-2 کاروباری دنوں** میں جواب دیتی ہیں۔`,
    section: "رابطہ",
    related: [],
    showContact: true,
  },
];

const SUGGESTIONS = {
  en: [
    "What subjects has she taught?",
    "Summarize her 18 years of experience",
    "What is her PhD research about?",
    "Explain vertex coloring simply",
    "What are her OBE competencies?",
    "Is she available for visiting faculty?",
    "Why is she suitable for a university?",
    "How can I contact her?",
    "Download her CV",
  ],
  ur: [
    "انہوں نے کون سے مضامین پڑھائے؟",
    "ان کا پی ایچ ڈی موضوع کیا ہے؟",
    "کیا وہ وزٹنگ فیکلٹی کے لیے دستیاب ہیں؟",
    "ان سے رابطہ کیسے کریں؟",
    "ان کا تجربہ بیان کریں",
  ],
};

const FALLBACK = {
  en: "I don't have specific information about that. Try asking me: **who is Fariha Ansari**, her courses, research, qualifications, skills, workplace, workshops, or how to contact her.",
  ur: "اس بارے میں مجھے مخصوص معلومات نہیں ہیں۔ فریحہ انصاری کے تجربے، تحقیق، مہارتیں، یا رابطے کے بارے میں پوچھیں۔",
};

// ─── Helpers ─────────────────────────────────────────────────────────────────
const Md = ({ text }) => {
  const html = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>")
    .replace(/\n/g, "<br/>");
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
};

const findAnswer = (query, lang) => {
  const q = query.toLowerCase().trim();
  const db = lang === "ur" ? KB_UR : KB;
  let best = null;
  let bestScore = 0;

  for (const item of db) {
    let score = 0;
    for (const p of item.patterns) {
      if (q.includes(p.toLowerCase())) score += p.split(" ").length;
    }
    if (score > bestScore) { bestScore = score; best = item; }
  }

  // Urdu fallback: try English KB
  if (lang === "ur" && bestScore === 0) {
    for (const item of KB) {
      let score = 0;
      for (const p of item.patterns) {
        if (q.includes(p.toLowerCase())) score += p.split(" ").length;
      }
      if (score > bestScore) { bestScore = score; best = item; }
    }
  }

  return bestScore > 0 ? best : null;
};

// ─── Component ───────────────────────────────────────────────────────────────
const GREETING = {
  en: "Hi! I'm **Fariha AI** — ask me anything about Fariha Ansari. Who she is, her teaching career, PhD research, skills, workplace, or how to get in touch.",
  ur: "السلام علیکم! میں **Fariha AI** ہوں۔ فریحہ انصاری کے بارے میں کچھ بھی پوچھیں — ان کا تعارف، تجربہ، تحقیق، مہارتیں، یا رابطہ معلومات۔",
};

const makeGreeting = (lang) => ({
  id: "greeting",
  type: "bot",
  title: null,
  text: GREETING[lang],
  section: null,
  showSuggestions: true,
  related: [],
  showContact: false,
  showCV: false,
});

const AskFariha = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([makeGreeting("en")]);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);
  const triggerRef = useRef(null);

  // Close panel on outside click
  useEffect(() => {
    if (!isOpen) return;
    const handleOutside = (e) => {
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        triggerRef.current && !triggerRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutside);
    return () => document.removeEventListener("mousedown", handleOutside);
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  const sendMessage = useCallback((text) => {
    if (!text.trim()) return;
    setMessages((prev) => [...prev, { id: Date.now(), type: "user", text }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const match = findAnswer(text, lang);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          type: "bot",
          title: match?.title || (lang === "ur" ? "جواب نہیں ملا" : "Not Found"),
          text: match?.answer || FALLBACK[lang],
          section: match?.section || null,
          showSuggestions: false,
          related: match?.related || [],
          showContact: match?.showContact || false,
          showCV: match?.showCV || false,
        },
      ]);
      setIsTyping(false);
    }, 650 + Math.random() * 350);
  }, [lang]);

  const switchLang = (l) => {
    setLang(l);
    setMessages([makeGreeting(l)]);
    setInput("");
  };

  const isRtl = lang === "ur";

  return (
    <>
      {/* ── Floating trigger ── */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            key="trigger"
            initial={{ scale: 0.7, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 16 }}
            transition={{ type: "spring", stiffness: 280, damping: 22 }}
            onClick={() => setIsOpen(true)}
            title="Ask Fariha AI"
            className="fixed bottom-4 right-4 z-40 group flex flex-col items-center cursor-pointer border-none bg-transparent p-0"
          >
            {/* Glow platform under the robot */}
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-4 bg-green-400/30 blur-md rounded-full" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-2 bg-green-300/40 blur-sm rounded-full animate-pulse" />

            {/* Robot image */}
            <motion.img
              src={farihaAiImg}
              alt="Fariha AI"
              draggable={false}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="w-[90px] h-auto object-contain relative z-10 hover:drop-shadow-lg select-none"
              style={{ filter: "drop-shadow(0 8px 16px rgba(22,163,74,0.35)) drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
            />

            {/* "Ask Fariha AI" label pill below the robot */}
            <div className="relative z-10 -mt-1 flex items-center gap-1.5 bg-slate-900 text-white rounded-full pl-2 pr-3 py-1 shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
              <span className="font-secondary text-[10.5px] font-bold leading-none whitespace-nowrap">Ask Fariha AI</span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      {/* ── Chat panel ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={panelRef}
            key="panel"
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-6 right-2 sm:right-4 z-50 w-[calc(100vw-1rem)] sm:w-[390px] flex flex-col bg-white dark:bg-slate-950 rounded-2xl overflow-hidden"
            style={{ maxHeight: "min(90vh, 610px)", boxShadow: "0 32px 64px -12px rgba(0,0,0,0.30), 0 0 0 1px rgba(0,0,0,0.06)" }}
          >
            {/* ── Header ── */}
            <div className="flex-shrink-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
              {/* Green top accent */}
              <div className="h-[3px] bg-green-600" />
              <div className="px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0">
                      <div className="w-10 h-10 rounded-full overflow-hidden bg-green-600 ring-2 ring-green-500/30">
                        <img src={farihaAiImg} alt="Fariha AI" className="w-full h-auto block" />
                      </div>
                      <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border-2 border-white dark:border-slate-900" />
                    </div>
                    <div>
                      <p className="font-primary text-[14px] font-bold text-slate-800 dark:text-slate-100 leading-none">Fariha AI</p>
                      <p className="font-secondary text-[10px] text-slate-400 dark:text-slate-500 mt-0.5">Academic Profile Assistant</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex bg-slate-100 dark:bg-slate-800 rounded-full p-0.5 gap-0.5 border border-slate-200 dark:border-slate-700">
                      {["en", "ur"].map((l) => (
                        <button key={l} onClick={() => switchLang(l)}
                          className={`font-secondary text-[10px] font-bold px-2.5 py-1 rounded-full transition-all duration-200 ${lang === l
                              ? "bg-green-600 text-white shadow-sm"
                              : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
                            }`}
                        >{l.toUpperCase()}</button>
                      ))}
                    </div>
                    <button onClick={() => setIsOpen(false)}
                      className="w-7 h-7 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 transition-colors duration-150"
                    ><FaTimes className="text-[10px]" /></button>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                  <p className="font-secondary text-[9.5px] text-slate-400 dark:text-slate-500">Online · AI-powered · answers from verified portfolio data only</p>
                </div>
              </div>
            </div>

            {/* ── Messages ── */}
            <div className="flex-1 overflow-y-auto min-h-0 bg-[#f5f7fa] dark:bg-[#0d1117]" style={{ padding: "16px 14px" }}>
              <div className="space-y-4">
                {messages.map((msg) =>
                  msg.type === "user" ? (
                    <div key={msg.id} className="flex justify-end">
                      <div className="max-w-[80%] bg-gradient-to-br from-green-600 to-emerald-700 text-white rounded-2xl rounded-tr-none px-4 py-2.5 shadow-md shadow-green-700/20">
                        <p className="font-secondary text-[13px] leading-relaxed">{msg.text}</p>
                      </div>
                    </div>
                  ) : (
                    <div key={msg.id} className="flex items-start gap-2.5">
                      {/* Circular bot avatar */}
                      <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden mt-0.5 ring-2 ring-green-500/60 bg-green-600 shadow-md shadow-green-700/20">
                        <img src={farihaAiImg} alt="FA" className="w-full h-auto block" />
                      </div>
                      <div className="flex-1 min-w-0">
                        {msg.title && (
                          <p className="font-secondary text-[9px] font-bold text-green-600 dark:text-green-500 uppercase tracking-[0.1em] mb-1.5 flex items-center gap-1.5">
                            <span className="w-4 h-px bg-green-500/60" />{msg.title}
                          </p>
                        )}
                        {/* Card with left accent */}
                        <div className="bg-white dark:bg-slate-800 rounded-xl rounded-tl-none shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden flex">
                          <div className="w-[3px] flex-shrink-0 bg-green-600 rounded-l-xl" />
                          <div className="px-4 py-3 flex-1 min-w-0">
                            <p className="font-secondary text-[12.5px] text-slate-700 dark:text-slate-300 leading-relaxed" dir={isRtl ? "rtl" : "ltr"}>
                              <Md text={msg.text} />
                            </p>
                            {msg.section && (
                              <p className="font-secondary text-[9px] text-slate-400 mt-2 pt-1.5 border-t border-slate-100 dark:border-slate-700/50 flex items-center gap-1">
                                <span className="text-green-500 text-[10px]">◈</span> {msg.section}
                              </p>
                            )}
                          </div>
                        </div>

                        {(msg.showContact || msg.showCV) && (
                          <div className="flex gap-2 mt-2 flex-wrap">
                            {msg.showContact && (
                              <Link smooth to="contact" offset={-80} onClick={() => setIsOpen(false)}
                                className="cursor-pointer inline-flex items-center gap-1.5 font-secondary text-[11px] font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg px-3 py-1.5 transition-all duration-150 shadow-sm">
                                <FaEnvelope className="text-[9px]" /> Contact Fariha
                              </Link>
                            )}
                            {msg.showCV && (
                              <a href="/Fariha_Ansari_CV.pdf" download
                                className="inline-flex items-center gap-1.5 font-secondary text-[11px] font-semibold text-green-700 dark:text-green-400 bg-white dark:bg-slate-800 border border-green-300 dark:border-green-700 hover:bg-green-50 rounded-lg px-3 py-1.5 transition-colors duration-150">
                                <FaDownload className="text-[9px]" /> Download CV
                              </a>
                            )}
                          </div>
                        )}

                        {msg.showSuggestions && (
                          <div className="mt-3">
                            <p className="font-secondary text-[9.5px] font-bold text-slate-400 uppercase tracking-widest mb-2" dir={isRtl ? "rtl" : "ltr"}>
                              {isRtl ? "تجویز کردہ سوالات" : "Suggested questions"}
                            </p>
                            <div className="flex flex-col gap-1.5">
                              {SUGGESTIONS[lang].map((s, i) => (
                                <button key={i} onClick={() => sendMessage(s)}
                                  className="group font-secondary text-[12px] text-slate-600 dark:text-slate-300 bg-white dark:bg-slate-800 hover:bg-green-50 dark:hover:bg-green-900/20 hover:text-green-700 dark:hover:text-green-400 border border-slate-100 dark:border-slate-700 hover:border-green-400 rounded-xl px-3.5 py-2.5 transition-all duration-150 text-left flex items-center justify-between shadow-sm hover:shadow-md"
                                  dir={isRtl ? "rtl" : "ltr"}>
                                  <span className="flex items-center gap-2.5">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 flex-shrink-0 group-hover:scale-125 transition-transform" />
                                    {s}
                                  </span>
                                  <span className="text-slate-300 dark:text-slate-600 group-hover:text-green-400 ml-2 flex-shrink-0">›</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {msg.related && msg.related.length > 0 && (
                          <div className="mt-2.5 flex flex-wrap gap-1.5">
                            {msg.related.map((id) => {
                              const item = KB.find((k) => k.id === id);
                              if (!item) return null;
                              return (
                                <button key={id} onClick={() => sendMessage(item.title)}
                                  className="font-secondary text-[10.5px] text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 hover:bg-green-100 dark:hover:bg-green-900/40 border border-green-200 dark:border-green-800 hover:border-green-400 rounded-full px-3 py-1 transition-all duration-150 font-medium">
                                  ↗ {item.title}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </div>
                  )
                )}

                {isTyping && (
                  <div className="flex items-start gap-2.5">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden ring-2 ring-green-500/60 bg-green-600 shadow-md shadow-green-700/20">
                      <img src={farihaAiImg} alt="FA" className="w-full h-auto block" />
                    </div>
                    <div className="bg-white dark:bg-slate-800 rounded-xl rounded-tl-none shadow-sm border border-slate-200 dark:border-slate-700/60 overflow-hidden flex">
                      <div className="w-[3px] flex-shrink-0 bg-green-600 rounded-l-xl" />
                      <div className="px-4 py-3.5">
                        <div className="flex gap-1.5 items-center">
                          {[0, 160, 320].map((d) => (
                            <span key={d} className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: `${d}ms` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div ref={bottomRef} />
              </div>
            </div>

            {/* ── Input bar ── */}
            <div className="flex-shrink-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 px-3.5 pt-3 pb-3.5">
              <form onSubmit={(e) => { e.preventDefault(); sendMessage(input); }} className="flex gap-2 mb-2.5">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder={isRtl ? "سوال پوچھیں..." : "Ask a question..."}
                  dir={isRtl ? "rtl" : "ltr"}
                  disabled={isTyping}
                  className="flex-1 font-secondary text-[13px] text-slate-800 dark:text-white bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 placeholder:text-slate-400 dark:placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 dark:focus:border-green-600 transition-all duration-150 disabled:opacity-50 min-w-0"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="flex-shrink-0 w-10 h-10 bg-green-600 hover:bg-green-700 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-xl flex items-center justify-center transition-colors duration-150 shadow-md shadow-green-600/30"
                >
                  <FaPaperPlane className="text-[11px]" />
                </button>
              </form>

              <div className="flex gap-2">
                <Link smooth to="contact" offset={-80} onClick={() => setIsOpen(false)}
                  className="cursor-pointer flex-1 flex items-center justify-center gap-1.5 font-secondary text-[11.5px] font-semibold text-white bg-green-600 hover:bg-green-700 rounded-xl py-2.5 transition-colors duration-150 shadow-md shadow-green-600/25"
                >
                  <FaEnvelope className="text-[10px]" /> Contact Fariha
                </Link>
                <a
                  href="/Fariha_Ansari_CV.pdf"
                  download
                  className="flex-1 flex items-center justify-center gap-1.5 font-secondary text-[11.5px] font-semibold text-green-700 dark:text-green-400 bg-green-50 dark:bg-green-900/20 border border-green-300 dark:border-green-700 hover:bg-green-100 dark:hover:bg-green-900/40 rounded-xl py-2.5 transition-colors duration-150"
                >
                  <FaDownload className="text-[10px]" /> Download CV
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AskFariha;
