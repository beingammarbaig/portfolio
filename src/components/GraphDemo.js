import React, { useState, useRef, useEffect, useCallback } from "react";

// ── Time-slot palette ─────────────────────────────────────────────────────────
const SLOTS = [
  { id: 0, name: "Morning I", time: "9:00 – 10:30 AM", color: "#2563eb", tint: "#eff6ff" },
  { id: 1, name: "Morning II", time: "11:00 – 12:30 PM", color: "#b45309", tint: "#fef3c7" },
  { id: 2, name: "Afternoon I", time: "2:00 – 3:30 PM", color: "#b91c1c", tint: "#fef2f2" },
  { id: 3, name: "Afternoon II", time: "4:00 – 5:30 PM", color: "#6d28d9", tint: "#f5f3ff" },
  { id: 4, name: "Evening I", time: "6:00 – 7:30 PM", color: "#047857", tint: "#ecfdf5" },
  { id: 5, name: "Evening II", time: "8:00 – 9:30 PM", color: "#c2410c", tint: "#fff7ed" },
];

// ── Preset graph ──────────────────────────────────────────────────────────────
const PRESET = {
  vertices: [
    { id: 1, x: 150, y: 108, label: "Calculus" },
    { id: 2, x: 312, y: 62, label: "Lin. Algebra" },
    { id: 3, x: 458, y: 138, label: "Discrete Math" },
    { id: 4, x: 418, y: 292, label: "Num. Methods" },
    { id: 5, x: 158, y: 296, label: "Diff. Eq." },
    { id: 6, x: 296, y: 198, label: "Complex Vars" },
  ],
  edges: [
    { id: "e1", from: 1, to: 2 }, { id: "e2", from: 1, to: 5 },
    { id: "e3", from: 1, to: 6 }, { id: "e4", from: 2, to: 3 },
    { id: "e5", from: 2, to: 6 }, { id: "e6", from: 3, to: 4 },
    { id: "e7", from: 4, to: 5 }, { id: "e8", from: 5, to: 6 },
  ],
};

const EXTRA_NAMES = ["Statistics", "Topology", "Probability", "Analysis", "Logic", "Set Theory"];

// ── Algorithms ────────────────────────────────────────────────────────────────
function buildAdj(vertices, edges) {
  const adj = {};
  vertices.forEach(v => (adj[v.id] = []));
  edges.forEach(({ from, to }) => { adj[from]?.push(to); adj[to]?.push(from); });
  return adj;
}
function greedyColor(vertices, edges, byDegree = false) {
  if (!vertices.length) return { colorMap: {}, order: [], chromatic: 0 };
  const adj = buildAdj(vertices, edges);
  const order = byDegree
    ? [...vertices].sort((a, b) => (adj[b.id]?.length ?? 0) - (adj[a.id]?.length ?? 0))
    : [...vertices];
  const colorMap = {};
  order.forEach(v => {
    const used = new Set((adj[v.id] ?? []).map(n => colorMap[n]).filter(c => c != null));
    let c = 0; while (used.has(c)) c++;
    colorMap[v.id] = c;
  });
  return { colorMap, order: order.map(v => v.id), chromatic: new Set(Object.values(colorMap)).size };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function GraphDemo() {
  const [vertices, setVertices] = useState(PRESET.vertices);
  const [edges, setEdges] = useState(PRESET.edges);
  const [colorMap, setColorMap] = useState({});
  const [mode, setMode] = useState("none");
  const [edgeFrom, setEdgeFrom] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [highlighted, setHighlighted] = useState(null);
  const [algoStep, setAlgoStep] = useState(null);
  const [selectedModel, setSelectedModel] = useState("welsh-powell");
  const [newVId, setNewVId] = useState(null);
  const [nextVId, setNextVId] = useState(7);
  const [nextEId, setNextEId] = useState(9);

  const extraIdx = useRef(0);
  const animTimer = useRef(null);
  const dragRef = useRef(null);
  const svgRef = useRef(null);
  const verticesRef = useRef(vertices);
  const edgesRef = useRef(edges);

  useEffect(() => { verticesRef.current = vertices; }, [vertices]);
  useEffect(() => { edgesRef.current = edges; }, [edges]);
  useEffect(() => () => clearTimeout(animTimer.current), []);

  const resetColors = () => {
    setColorMap({}); setHighlighted(null); setAlgoStep(null);
  };
  const toggleMode = m => { setMode(p => p === m ? "none" : m); setEdgeFrom(null); };

  // ── Add vertex on canvas click ────────────────────────────────────────────
  const onSvgClick = useCallback((e) => {
    if (mode !== "vertex") return;
    const tag = e.target.tagName;
    if (tag === "circle" || tag === "text" || tag === "tspan") return;
    const r = svgRef.current.getBoundingClientRect();
    const x = Math.max(38, Math.min(562, ((e.clientX - r.left) / r.width) * 600));
    const y = Math.max(38, Math.min(342, ((e.clientY - r.top) / r.height) * 380));
    const label = EXTRA_NAMES[extraIdx.current++ % EXTRA_NAMES.length];
    const id = nextVId;
    setVertices(p => [...p, { id, x, y, label }]);
    setNextVId(p => p + 1);
    setNewVId(id);
    setTimeout(() => setNewVId(null), 600);
    resetColors();
  }, [mode, nextVId]); // eslint-disable-line

  // ── Drag ──────────────────────────────────────────────────────────────────
  const onVertexMouseDown = useCallback((e, vId) => {
    if (mode === "edge") return;
    e.stopPropagation();
    dragRef.current = { vId, r: svgRef.current.getBoundingClientRect() };
  }, [mode]);

  const onSvgMouseMove = useCallback((e) => {
    if (!dragRef.current) return;
    const { vId, r } = dragRef.current;
    const x = Math.max(38, Math.min(562, ((e.clientX - r.left) / r.width) * 600));
    const y = Math.max(38, Math.min(342, ((e.clientY - r.top) / r.height) * 380));
    setVertices(p => p.map(v => v.id === vId ? { ...v, x, y } : v));
  }, []);

  const onSvgMouseUp = useCallback(() => { dragRef.current = null; }, []);

  // ── Edge drawing ──────────────────────────────────────────────────────────
  const onVertexClick = useCallback((e, vId) => {
    e.stopPropagation();
    if (mode !== "edge") return;
    if (!edgeFrom) { setEdgeFrom(vId); return; }
    if (edgeFrom === vId) { setEdgeFrom(null); return; }
    const dup = edgesRef.current.some(ed =>
      (ed.from === edgeFrom && ed.to === vId) || (ed.from === vId && ed.to === edgeFrom)
    );
    if (!dup) {
      setEdges(p => [...p, { id: `e${nextEId}`, from: edgeFrom, to: vId }]);
      setNextEId(p => p + 1);
      resetColors();
    }
    setEdgeFrom(null);
  }, [mode, edgeFrom, nextEId]); // eslint-disable-line

  // ── Animated colouring ────────────────────────────────────────────────────
  const runAlgo = useCallback((optimize) => {
    const verts = verticesRef.current;
    const edgs = edgesRef.current;
    if (animating || !verts.length) return;
    resetColors();
    setAnimating(true);
    const { colorMap: cm, order } = greedyColor(verts, edgs, optimize);

    const step = i => {
      if (i >= order.length) {
        setHighlighted(null);
        setAlgoStep(null);
        setAnimating(false);
        return;
      }
      setHighlighted(order[i]);
      setAlgoStep({ current: i + 1, total: order.length });
      // Let the highlight render (220ms), then assign colour and let CSS transition handle the fill
      animTimer.current = setTimeout(() => {
        setColorMap(p => ({ ...p, [order[i]]: cm[order[i]] }));
        // Wait for fill transition (400ms) before moving on
        animTimer.current = setTimeout(() => step(i + 1), 400);
      }, 220);
    };
    step(0);
  }, [animating]); // eslint-disable-line

  const loadPreset = () => {
    setVertices(PRESET.vertices); setEdges(PRESET.edges);
    resetColors(); setNextVId(7); setNextEId(9); extraIdx.current = 0;
  };
  const clearGraph = () => {
    setVertices([]); setEdges([]); resetColors(); setMode("none");
  };

  // ── Derived ───────────────────────────────────────────────────────────────
  const coloredCount = Object.keys(colorMap).length;
  const progress = vertices.length ? Math.round((coloredCount / vertices.length) * 100) : 0;
  const isComplete = vertices.length > 0 && coloredCount === vertices.length;
  const schedule = {};
  Object.entries(colorMap).forEach(([id, ci]) => {
    if (!schedule[ci]) schedule[ci] = [];
    const v = vertices.find(v => v.id === +id);
    if (v) schedule[ci].push(v.label);
  });
  const slotsUsed = Object.keys(schedule).length;

  // ── Render ────────────────────────────────────────────────────────────────
  return (
    <section id="graph-demo" className="relative py-16 lg:py-24 bg-white dark:bg-slate-950 overflow-hidden">
      {/* Background watermark */}
      <div className="absolute top-4 right-2 select-none pointer-events-none
                      font-primary font-bold leading-none
                      text-[90px] sm:text-[140px] lg:text-[180px]
                      text-slate-100 dark:text-slate-800/30">
        GRAPH
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* ── Header ───────────────────────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="max-w-lg">
            <span className="inline-flex items-center gap-2 mb-3
                             font-secondary text-[11px] font-bold
                             text-green-600 dark:text-green-400 uppercase tracking-widest">
              <span className="w-4 h-px bg-green-500" />
              PhD Research — Interactive
            </span>
            <h2 className="font-primary font-bold leading-tight
                           text-[30px] lg:text-[42px]
                           text-slate-900 dark:text-white">
              Graph Colouring
              <span className="block text-green-600 dark:text-green-400">Visualised</span>
            </h2>
            <p className="mt-3 font-secondary text-[14px] leading-relaxed
                          text-slate-500 dark:text-slate-400">
              The scheduling problem at the core of Fariha's PhD — rendered as a
              live simulation. Each colour represents a distinct exam time slot.
            </p>
          </div>

          {/* Concept bridge */}
          <div className="flex flex-col gap-2 shrink-0">
            {[
              { a: "Course", b: "Vertex", dot: "#1e293b" },
              { a: "Shared Students", b: "Edge", dot: "#64748b" },
              { a: "Colour", b: "Time Slot", dot: "#16a34a" },
            ].map(({ a, b, dot }) => (
              <div key={a} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: dot }} />
                <span className="font-secondary text-[12px] text-slate-500 dark:text-slate-400">
                  <span className="font-semibold text-slate-800 dark:text-slate-200">{a}</span>
                  {" "}
                  <span className="text-slate-300 dark:text-slate-600 mx-1">—</span>
                  {" "}
                  {b}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ── Responsive Layout ─────────────────────────────────────────── */}
        <div className="flex flex-col gap-6 lg:gap-8">

          {/* 1. Information Row (Instructions & Research) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

            {/* Instructions */}
            <div className="lg:col-span-7 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-green-100 dark:border-green-900/40 shadow-xl shadow-green-900/5 flex flex-col h-full">
              <div className="px-6 pt-5 pb-4 border-b border-green-50 dark:border-green-900/20">
                <p className="font-secondary text-[11px] font-bold text-green-700 dark:text-green-500 uppercase tracking-wider">Instructions</p>
              </div>
              <div className="p-6 pb-2 flex-1">
                <div className="flex flex-col">
                  {[
                    { n: "01", title: "Load or build a graph", body: "Use Load Example for the preset, or add courses and conflict edges manually." },
                    { n: "02", title: "Mark shared-student conflicts", body: "Two courses sharing enrolled students cannot run in the same exam slot." },
                    { n: "03", title: "Run the algorithm", body: "Watch vertices receive colours one by one as the algorithm processes them." },
                    { n: "04", title: "Read the schedule", body: "Each colour is a distinct time slot. No two connected courses ever clash." },
                  ].map(({ n, title, body }, idx, arr) => (
                    <div key={n} className="flex relative">
                      {idx !== arr.length - 1 && (
                        <div className="absolute left-[13px] top-[28px] bottom-[-8px] w-[2px] bg-green-200 dark:bg-green-800/50" />
                      )}
                      <div className="w-7 h-7 rounded-full bg-green-50 dark:bg-green-900/40 border-2 border-green-500 flex items-center justify-center shrink-0 relative z-10 shadow-sm">
                        <span className="font-secondary text-[10px] font-bold text-green-700 dark:text-green-400">{n}</span>
                      </div>
                      <div className="ml-5 pb-6">
                        <p className="font-secondary text-[12.5px] font-bold text-slate-700 dark:text-slate-200 leading-tight pt-1.5">{title}</p>
                        <p className="font-secondary text-[11.5px] text-slate-500 dark:text-slate-400 mt-1.5 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Research note */}
            <div className="lg:col-span-5 rounded-2xl border border-green-200 dark:border-green-800/50 p-6 bg-green-50/50 dark:bg-green-900/20 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <div className="w-1.5 self-stretch rounded-full bg-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-secondary text-[11px] font-bold text-green-600 dark:text-green-400 uppercase tracking-wider mb-3">The Research Problem</p>
                  <p className="font-secondary text-[13px] text-slate-600 dark:text-slate-300 leading-relaxed">
                    Finding the <span className="font-semibold text-slate-800 dark:text-slate-100">chromatic number</span> — minimum colours needed — is <span className="font-semibold text-slate-800 dark:text-slate-100">NP-Hard</span>. No polynomial-time exact algorithm exists.
                  </p>
                  <p className="font-secondary text-[12px] text-slate-500 dark:text-slate-400 leading-relaxed mt-3">
                    Fariha's PhD combines <span className="font-medium text-slate-700 dark:text-slate-300">vertex-colouring heuristics</span> with <span className="font-medium text-slate-700 dark:text-slate-300">machine learning</span> to find near-optimal schedules efficiently.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* 2. Controls & Canvas Area */}
          <div className="flex flex-col gap-4">

            {/* Top Toolbar: Algo & Quick Demo */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white dark:bg-slate-900/80 backdrop-blur-md rounded-2xl border border-green-100 dark:border-green-900/40 shadow-sm p-3 px-5">

              <div className="flex flex-col md:flex-row md:items-center w-full gap-4">

                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto flex-1">
                  <span className="font-secondary text-[10px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider hidden md:block">
                    {isComplete ? "Run Again:" : "Model Selection:"}
                  </span>
                  <div className="flex bg-slate-50 dark:bg-slate-800/50 p-1 rounded-lg border border-slate-100 dark:border-slate-700/50 flex-1 sm:flex-none">
                    <button onClick={() => setSelectedModel("greedy")} disabled={animating}
                      className={`flex-1 sm:flex-none justify-center font-secondary text-[11.5px] font-semibold px-3 py-2 sm:py-1.5 rounded-md transition-all disabled:opacity-50 ${selectedModel === "greedy" ? "bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"}`}>
                      Greedy
                    </button>
                    <button onClick={() => setSelectedModel("welsh-powell")} disabled={animating}
                      className={`flex-1 sm:flex-none justify-center font-secondary text-[11.5px] font-semibold px-3 py-2 sm:py-1.5 rounded-md transition-all disabled:opacity-50 flex items-center gap-1.5 ${selectedModel === "welsh-powell" ? "bg-white dark:bg-slate-700 text-green-700 dark:text-green-400 shadow-sm" : "text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300"}`}>
                      Welsh-Powell <span className={`w-1.5 h-1.5 rounded-full ${selectedModel === "welsh-powell" ? "bg-green-500" : "bg-slate-300 dark:bg-slate-600"}`} />
                    </button>
                  </div>
                  <button onClick={() => runAlgo(selectedModel === "welsh-powell")} disabled={animating || !vertices.length}
                    className="w-full sm:w-auto justify-center font-secondary text-[12px] font-bold text-white bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 rounded-lg px-5 py-2.5 sm:py-2 transition-all shadow-sm shadow-green-600/20 disabled:opacity-50 flex items-center gap-2">
                    <svg width="10" height="12" viewBox="0 0 10 12" fill="none"><path d="M0 0L10 6L0 12V0Z" fill="currentColor"/></svg>
                    Run
                  </button>
                </div>
              </div>

              {/* Status/Running indicator */}
              {animating && (
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[0, 1, 2].map(i => (
                      <span key={i} className="inline-block w-1.5 h-1.5 rounded-full bg-green-500 animate-bounce" style={{ animationDelay: `${i * 120}ms` }} />
                    ))}
                  </div>
                  <span className="font-secondary text-[11px] font-semibold text-green-600 dark:text-green-400 ml-1">
                    {progress}%
                  </span>
                </div>
              )}
            </div>

            {/* Canvas Area */}
            <div className="flex flex-col gap-3">

              {/* Toolbar */}
              <div className="flex items-center gap-2 flex-wrap mb-1">
                <button onClick={() => toggleMode("vertex")}
                  className={`font-secondary text-[12px] font-semibold px-4 py-2.5 rounded-xl
                            transition-all duration-200 shadow-sm ${mode === "vertex"
                      ? "bg-gradient-to-r from-green-600 to-emerald-500 text-white border-none shadow-green-500/30"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-green-400 dark:hover:border-green-600"
                    }`}>
                  Add Course
                </button>
                <button onClick={() => toggleMode("edge")}
                  className={`font-secondary text-[12px] font-semibold px-4 py-2.5 rounded-xl
                            transition-all duration-200 shadow-sm ${mode === "edge"
                      ? "bg-slate-800 dark:bg-slate-200 text-white dark:text-slate-900 border-none"
                      : "bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-500"
                    }`}>
                  Mark Conflict
                </button>

                <div className="ml-auto flex items-center gap-3">
                  <button onClick={loadPreset}
                    className="font-secondary text-[12px] font-medium text-slate-500 dark:text-slate-400
                             hover:text-green-600 dark:hover:text-green-400 transition-colors">
                    Load Example
                  </button>
                  <span className="w-px h-4 bg-slate-200 dark:bg-slate-700" />
                  <button onClick={clearGraph}
                    className="font-secondary text-[12px] font-medium text-slate-400 dark:text-slate-500
                             hover:text-red-500 dark:hover:text-red-400 transition-colors">
                    Clear
                  </button>
                </div>

                {/* Count badge */}
                <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-xl
                              bg-green-50 dark:bg-green-900/20
                              border border-green-200 dark:border-green-800/50 text-green-800 dark:text-green-300">
                  <span className="font-secondary text-[11px]">
                    <span className="font-bold">{vertices.length}</span> courses
                  </span>
                  <span className="w-px h-3 bg-green-200 dark:bg-green-800" />
                  <span className="font-secondary text-[11px]">
                    <span className="font-bold">{edges.length}</span> conflicts
                  </span>
                </div>
              </div>

              {/* Mode instruction */}
              {mode !== "none" && (
                <div className={`px-4 py-2.5 rounded-lg border font-secondary text-[12px] ${mode === "vertex"
                  ? "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-700 dark:text-green-300"
                  : "bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300"
                  }`}>
                  {mode === "vertex" && "Click anywhere on the canvas to place a course."}
                  {mode === "edge" && !edgeFrom && "Click a course to begin drawing a conflict edge."}
                  {mode === "edge" && edgeFrom && "Click another course to mark a conflict — they will be assigned different time slots."}
                </div>
              )}

              {/* Canvas */}
              <div className="bg-white dark:bg-slate-950 rounded-2xl border-2 border-green-100 dark:border-green-900/40 shadow-xl shadow-green-900/5 overflow-hidden relative">
                <div className="absolute inset-0 pointer-events-none rounded-2xl shadow-[inset_0_0_20px_rgba(34,197,94,0.05)] dark:shadow-[inset_0_0_20px_rgba(34,197,94,0.02)]" />

                {/* Progress bar */}
                <div className="h-[3px] bg-slate-100 dark:bg-slate-800">
                  <div
                    className="h-full bg-green-500 rounded-full"
                    style={{
                      width: `${animating ? progress : isComplete ? 100 : 0}%`,
                      transition: "width 0.35s ease",
                    }}
                  />
                </div>

                {/* Status bar — only during animation */}
                {animating && algoStep && (
                  <div className="flex items-center justify-between px-5 py-2.5
                                border-b border-slate-100 dark:border-slate-800">
                    <span className="font-secondary text-[11.5px] font-medium text-slate-500 dark:text-slate-400">
                      Assigning colours
                      <span className="text-slate-800 dark:text-slate-100 font-semibold ml-1">
                        {algoStep.current} / {algoStep.total}
                      </span>
                    </span>
                    <span className="font-secondary text-[11px] font-semibold text-green-600 dark:text-green-400">
                      {progress}%
                    </span>
                  </div>
                )}

                {/* SVG */}
                <div className="relative">
                  <svg
                    ref={svgRef}
                    viewBox="0 0 600 380"
                    className={`w-full select-none block ${mode === "vertex" ? "cursor-crosshair" : ""}`}
                    style={{ minHeight: 220 }}
                    onClick={onSvgClick}
                    onMouseMove={onSvgMouseMove}
                    onMouseUp={onSvgMouseUp}
                    onMouseLeave={onSvgMouseUp}
                  >
                    <defs>
                      <pattern id="gdot" width="28" height="28" patternUnits="userSpaceOnUse">
                        <circle cx="14" cy="14" r="1" className="fill-slate-200 dark:fill-slate-700" />
                      </pattern>
                      {/* Drop shadows per slot colour */}
                      {SLOTS.map(s => (
                        <filter key={s.id} id={`ds${s.id}`} x="-50%" y="-50%" width="200%" height="200%">
                          <feDropShadow dx="0" dy="2" stdDeviation="4"
                            floodColor={s.color} floodOpacity="0.22" />
                        </filter>
                      ))}
                      {/* Glow for highlighted vertex */}
                      <filter id="ghigh" x="-50%" y="-50%" width="200%" height="200%">
                        <feDropShadow dx="0" dy="0" stdDeviation="5"
                          floodColor="#16a34a" floodOpacity="0.30" />
                      </filter>
                    </defs>

                    {/* Background */}
                    <rect width="600" height="380" className="fill-white dark:fill-slate-900" />
                    <rect width="600" height="380" fill="url(#gdot)" />

                    {/* Edges */}
                    {edges.map(({ id, from, to }) => {
                      const a = vertices.find(v => v.id === from);
                      const b = vertices.find(v => v.id === to);
                      if (!a || !b) return null;
                      const ca = colorMap[from], cb = colorMap[to];
                      const both = ca != null && cb != null;
                      return (
                        <line key={id}
                          x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                          stroke={both ? `${SLOTS[ca]?.color}40` : "#e2e8f0"}
                          strokeWidth={both ? 2 : 1.5}
                          strokeDasharray={both ? "none" : "5 4"}
                          strokeLinecap="round"
                          style={{ transition: "stroke 0.4s ease, stroke-dasharray 0.3s ease" }}
                        />
                      );
                    })}

                    {/* Source-vertex indicator for edge mode */}
                    {edgeFrom && (() => {
                      const v = vertices.find(v => v.id === edgeFrom);
                      if (!v) return null;
                      return (
                        <circle cx={v.x} cy={v.y} r={40} fill="none"
                          stroke="#94a3b8" strokeWidth={1.5} strokeDasharray="4 3" opacity={0.6} />
                      );
                    })()}

                    {/* Vertices */}
                    {vertices.map(v => {
                      const ci = colorMap[v.id];
                      const slot = ci != null ? SLOTS[ci] : null;
                      const isH = highlighted === v.id;
                      const isF = edgeFrom === v.id;
                      const isNew = newVId === v.id;
                      const words = v.label.split(" ");

                      // Fill: highlighted → light green tint; colored → slot.color; else white
                      const fill = slot ? slot.color : undefined;
                      const fillClass = slot ? "" : isH ? "fill-green-50 dark:fill-green-900/40" : "fill-white dark:fill-slate-800";
                      const stroke = slot ? "none" : undefined;
                      const strokeClass = slot ? "" : isH || isF ? "stroke-green-600 dark:stroke-green-500" : "stroke-slate-300 dark:stroke-slate-600";
                      const sw = slot ? 0 : isH || isF ? 2 : 1.5;
                      const filter = slot ? `url(#ds${ci})` : isH ? "url(#ghigh)" : "none";
                      const tFill = slot ? "white" : undefined;
                      const tFillClass = slot ? "" : isH ? "fill-green-700 dark:fill-green-400" : "fill-slate-600 dark:fill-slate-300";

                      return (
                        <g key={v.id}
                          onClick={e => { e.stopPropagation(); onVertexClick(e, v.id); }}
                          onMouseDown={e => onVertexMouseDown(e, v.id)}
                          style={{
                            cursor: mode === "edge" ? "pointer" : "grab",
                            transformOrigin: `${v.x}px ${v.y}px`,
                            animation: isNew
                              ? "vEnter 0.45s cubic-bezier(0.22,1,0.36,1) both"
                              : "none",
                          }}>

                          {/* Tint halo for coloured vertices */}
                          {slot && (
                            <circle cx={v.x} cy={v.y} r={38} fill={slot.color + "20"}
                              style={{ transition: "fill 0.4s ease" }} />
                          )}

                          {/* Main circle */}
                          <circle cx={v.x} cy={v.y} r={30}
                            fill={fill} className={`${fillClass} ${strokeClass}`} stroke={stroke} strokeWidth={sw}
                            filter={filter}
                            style={{
                              transition: "fill 0.42s ease, stroke 0.2s ease, stroke-width 0.2s ease",
                            }}
                          />

                          {/* Subtle inner ring on coloured vertices for depth */}
                          {slot && (
                            <circle cx={v.x} cy={v.y} r={24} fill="none"
                              stroke="rgba(255,255,255,0.18)" strokeWidth={1.5} />
                          )}

                          {/* Label */}
                          {words.length === 1 ? (
                            <text x={v.x} y={v.y}
                              textAnchor="middle" dominantBaseline="middle"
                              fontSize="9.5" fontWeight="700" fontFamily="Inter,system-ui,sans-serif"
                              fill={tFill} className={tFillClass} style={{ pointerEvents: "none", transition: "fill 0.4s ease" }}>
                              {v.label}
                            </text>
                          ) : (
                            <>
                              <text x={v.x} y={v.y - 6.5}
                                textAnchor="middle" dominantBaseline="middle"
                                fontSize="9" fontWeight="700" fontFamily="Inter,system-ui,sans-serif"
                                fill={tFill} className={tFillClass} style={{ pointerEvents: "none", transition: "fill 0.4s ease" }}>
                                {words[0]}
                              </text>
                              <text x={v.x} y={v.y + 6.5}
                                textAnchor="middle" dominantBaseline="middle"
                                fontSize="9" fontWeight="700" fontFamily="Inter,system-ui,sans-serif"
                                fill={tFill} className={tFillClass} style={{ pointerEvents: "none", transition: "fill 0.4s ease" }}>
                                {words.slice(1).join(" ")}
                              </text>
                            </>
                          )}
                        </g>
                      );
                    })}

                    {/* Empty-state */}
                    {!vertices.length && (
                      <>
                        <text x="300" y="172" textAnchor="middle" fontSize="13"
                          fill="#94a3b8" fontFamily="Inter,system-ui,sans-serif" fontWeight="600">
                          No graph yet
                        </text>
                        <text x="300" y="194" textAnchor="middle" fontSize="11.5"
                          fill="#cbd5e1" fontFamily="Inter,system-ui,sans-serif">
                          Load the example graph or add courses using the toolbar above
                        </text>
                      </>
                    )}

                    {/* Drag hint */}
                    {vertices.length > 0 && !animating && !isComplete && mode === "none" && (
                      <text x="300" y="370" textAnchor="middle" fontSize="10.5"
                        fill="#cbd5e1" fontFamily="Inter,system-ui,sans-serif">
                        Drag vertices to reposition
                      </text>
                    )}
                  </svg>

                </div>

                {/* Slot legend */}
                {isComplete && (
                  <div className="px-5 py-4 sm:py-3 border-t border-green-100 dark:border-green-900/40
                                flex flex-col sm:flex-row sm:flex-wrap gap-x-5 gap-y-2
                                bg-green-50/50 dark:bg-green-900/10">
                    <span className="font-secondary text-[9.5px] font-bold text-green-700 dark:text-green-500 uppercase tracking-wider mb-1 sm:mb-0 sm:self-center">
                      Legend
                    </span>
                    {Object.keys(schedule).sort((a, b) => +a - +b).map(ci => {
                      const slot = SLOTS[+ci];
                      return (
                        <div key={ci} className="flex items-center gap-2 sm:gap-1.5">
                          <div className="w-2 h-2 rounded-full flex-shrink-0"
                            style={{ backgroundColor: slot?.color }} />
                          <span className="font-secondary text-[11px] sm:text-[10.5px] text-slate-600 dark:text-slate-300">
                            <span className="font-semibold" style={{ color: slot?.color }}>
                              {slot?.name}
                            </span>
                            {" — "}{schedule[ci].join(", ")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

            </div>

            {/* 3. Stats & Timetable */}
            {isComplete && (
              <div className="flex flex-col gap-5">
                {/* Stats row */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: "Courses", val: vertices.length, hi: false },
                    { label: "Conflicts", val: edges.length, hi: false },
                    { label: "Time Slots", val: slotsUsed, hi: true },
                  ].map(({ label, val, hi }) => (
                    <div key={label} className={`bg-white dark:bg-slate-900 rounded-xl border shadow-sm py-4 text-center ${hi ? "border-green-300 dark:border-green-800" : "border-slate-200 dark:border-slate-800"}`} style={{ animation: "fadeUp 0.4s ease both" }}>
                      <p className={`font-primary text-[34px] font-bold leading-none ${hi ? "text-green-600 dark:text-green-400" : "text-slate-800 dark:text-white"}`}>{val}</p>
                      <p className="font-secondary text-[10.5px] text-slate-400 dark:text-slate-500 mt-1.5">{label}</p>
                    </div>
                  ))}
                </div>

                {/* Exam timetable (Tabular) */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden mt-2" style={{ animation: "fadeUp 0.4s ease both" }}>
                  <div className="flex items-center justify-between px-5 pt-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="font-secondary text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider">Exam Timetable</p>
                    <span className="font-secondary text-[11px] font-semibold text-green-600 dark:text-green-400">
                      {slotsUsed} slot{slotsUsed !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                      <thead>
                        <tr className="bg-slate-50 dark:bg-slate-800/30 border-b border-slate-100 dark:border-slate-800">
                          <th className="py-3 px-5 font-secondary text-[10.5px] font-bold text-slate-500 uppercase tracking-wider w-[180px]">Time Slot</th>
                          <th className="py-3 px-5 font-secondary text-[10.5px] font-bold text-slate-500 uppercase tracking-wider">Scheduled Courses</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                        {Object.keys(schedule).sort((a, b) => +a - +b).map(ci => {
                          const slot = SLOTS[+ci];
                          return (
                            <tr key={ci} className="hover:bg-slate-50 dark:hover:bg-slate-800/20 transition-colors">
                              <td className="py-4 px-5 whitespace-nowrap">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-2.5 h-2.5 rounded-full shadow-sm" style={{ backgroundColor: slot?.color }} />
                                  <span className="font-secondary text-[12px] font-bold" style={{ color: slot?.color }}>
                                    {slot?.name}
                                  </span>
                                </div>
                                <div className="font-secondary text-[10.5px] font-medium text-slate-500 dark:text-slate-400 ml-5 mt-1">
                                  {slot?.time}
                                </div>
                              </td>
                              <td className="py-4 px-5">
                                <div className="flex flex-wrap gap-2">
                                  {schedule[ci].map(course => (
                                    <span key={course} className="inline-flex items-center px-3 py-1.5 rounded-md font-secondary text-[11.5px] font-semibold"
                                      style={{ backgroundColor: slot?.color + "15", color: slot?.color }}>
                                      {course}
                                    </span>
                                  ))}
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div></div>
      {/* Keyframes */}
      <style>{`
        @keyframes vEnter {
          0%   { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1);   opacity: 1; }
        }
        @keyframes bannerIn {
          0%   { transform: translateY(-8px); opacity: 0; }
          100% { transform: translateY(0);    opacity: 1; }
        }
        @keyframes fadeUp {
          0%   { transform: translateY(6px); opacity: 0; }
          100% { transform: translateY(0);   opacity: 1; }
        }
      `}</style>
    </section>
  );
}
