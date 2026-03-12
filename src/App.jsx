import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 150) {
          current = s.id;
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* HEADER */}
      <header className="doc-header">
        <div>
          <div className="eyebrow">Pavel Deep Research Engine &middot; Keboola Strategy</div>
          <h1><strong>The Simulation Moat</strong><br/>Strategy Synthesis &middot; March 2026</h1>
        </div>
        <div className="meta">
          <span>Sources: 7 repositories + founder transcripts</span>
          <span>Sessions: March 11&ndash;12, 2026</span>
          <span>Framework: Pavel Deep Research Engine</span>
          <span>Version: 1.0 final</span>
        </div>
      </header>

      {/* TOC STRIP */}
      <nav className="toc-strip">
        <a href="#thesis" className={activeSection === 'thesis' ? 'active' : ''}>Thesis</a><span className="sep">/</span>
        <a href="#truths" className={activeSection === 'truths' ? 'active' : ''}>Hidden Truths</a><span className="sep">/</span>
        <a href="#sysmap" className={activeSection === 'sysmap' ? 'active' : ''}>System Map</a><span className="sep">/</span>
        <a href="#assumptions" className={activeSection === 'assumptions' ? 'active' : ''}>Assumptions</a><span className="sep">/</span>
        <a href="#constraint" className={activeSection === 'constraint' ? 'active' : ''}>Real Constraint</a><span className="sep">/</span>
        <a href="#memory" className={activeSection === 'memory' ? 'active' : ''}>Decision Memory</a><span className="sep">/</span>
        <a href="#cfo" className={activeSection === 'cfo' ? 'active' : ''}>CFO Beachhead</a><span className="sep">/</span>
        <a href="#kids" className={activeSection === 'kids' ? 'active' : ''}>KIDS Proof Point</a><span className="sep">/</span>
        <a href="#investors" className={activeSection === 'investors' ? 'active' : ''}>Destroy Test</a><span className="sep">/</span>
        <a href="#compression" className={activeSection === 'compression' ? 'active' : ''}>Compression</a>
      </nav>

      <main className="page">

        {/* CONTEXT */}
        <section id="context" style={{ marginBottom: '56px' }}>
          <div className="section-label">Research Context</div>
          <h2>What This Document Is</h2>
          <p>This is the compressed output of a multi-session deep research engagement applying the Pavel Deep Research Engine to Keboola's AI strategy. The research began with a LinkedIn thesis on context infrastructure, traced through six founder conversation screenshots, examined four GitHub repositories in detail, reviewed the internal <em>KIDS</em> analytics project, and analyzed the Keboola Verity CFO pitch deck.</p>
          <p>Every conclusion was stress-tested through inversion. What began as a context infrastructure thesis collapsed into a sharper claim. What appeared to be a build problem turned out to be an assembly problem. What was positioned as future infrastructure was found to already exist in production.</p>

          <div className="callout callout-navy" style={{ marginTop: '32px' }}>
            <p style={{ fontSize: '16px', fontWeight: 300, lineHeight: 1.6, marginBottom: 0 }}><strong>The central finding:</strong> The simulation environment already exists inside Keboola Connection's branching infrastructure. The strategic moat is not a future build &mdash; it is a present capability that has not been named, positioned, or instrumented for decision trace capture.</p>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* THESIS */}
        <section id="thesis">
          <div className="section-label">Opening Thesis &rarr; Inversion</div>
          <h2>The Thesis <strong>&amp; Why It's Insufficient</strong></h2>

          <div className="pull-quote">
            <p>"Models are a commodity. The future AI moat is context infrastructure &mdash; not the model itself, but the layer that prepares data, context, and operational state for the model to act on."</p>
            <cite>Pavel Dvorak &middot; LinkedIn &middot; March 2026</cite>
          </div>

          <p>The thesis is correct in direction. DeepSeek proved frontier-level performance at a fraction of the cost. Open-source now accounts for ~30% of enterprise AI usage. Switching cost between model providers approaches zero. Enterprise adoption is blocked at context and trust, not at model capability.</p>

          <p>The problem with this reading: context infrastructure is also becoming a feature. RAG, retrieval, metadata graphs &mdash; all being absorbed into incumbent platforms. Snowflake has Cortex. Databricks has Unity Catalog. The layer above the model is being commoditized from below.</p>

          <div className="callout callout-blue" style={{ padding: '24px 28px', margin: '28px 0' }}>
            <h3 style={{ marginTop: 0, color: 'var(--blue)' }}>The Sharper Claim</h3>
            <p style={{ marginBottom: '8px' }}>The simulation environment is the scarce resource. The agent is the interface. The operational graph that makes simulation trustworthy is the moat.</p>
            <p style={{ marginBottom: 0 }}>Simulation requires live operational graph, deep instrumentation, and months of integration work. It cannot be approximated by a long context window. It cannot be built quickly by an incumbent whose data model treats tables but not workflows.</p>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* HIDDEN TRUTHS */}
        <section id="truths">
          <div className="section-label">Step 3 &middot; Pavel Research Engine</div>
          <h2>Hidden <strong>Truths</strong></h2>

          <div className="truth-grid">
            <div className="truth-card blue">
              <span className="number">01 / Bottleneck</span>
              <div className="claim">The bottleneck in enterprise AI is not retrieval. It is trust in proposed actions.</div>
              <div className="detail">Enterprises haven't failed to adopt AI because of poor retrieval or weak models. They've failed because the output of an AI action is an action &mdash; and no one knows what it will break before it runs. Simulation replaces "trust the agent" with "see the consequence before you commit."</div>
              <div className="confidence">Confidence: Known &middot; Direct evidence from failure patterns</div>
            </div>

            <div className="truth-card violet">
              <span className="number">02 / Memory</span>
              <div className="claim">Decision traces are more valuable than operational memory &mdash; and currently being destroyed.</div>
              <div className="detail">Operational memory records what happened. Decision memory records how the organization reasoned: agent proposed action A, simulation showed consequence B, engineer approved A-prime because of constraint C. Every day the simulation step doesn't run, decision traces that can never be recovered are permanently destroyed.</div>
              <div className="confidence">Confidence: Known &middot; Confirmed in KIDS session transcript architecture</div>
            </div>

            <div className="truth-card teal">
              <span className="number">03 / Compounding</span>
              <div className="claim">Simulation infrastructure is irreplaceable and compounds in one direction only.</div>
              <div className="detail">A competitor starting from zero cannot simulate another organization's pipelines correctly. Fidelity depends on instrumentation depth &mdash; how completely the operational infrastructure is connected. Getting to production-grade fidelity takes months to instrument and years to make reliable. The lead compounds.</div>
              <div className="confidence">Confidence: Likely &middot; Supported by instrumentation depth analysis</div>
            </div>

            <div className="truth-card orange">
              <span className="number">04 / Already Built</span>
              <div className="claim">The simulation environment is already running. It just isn't described that way.</div>
              <div className="detail">Keboola Connection development branches are full-isolation, on-demand materialized copies of the production environment. Every AI action can run inside a branch. Production is untouched until explicit merge approval. A diff view shows exactly what changes. The missing layer is the AI-native framing and the decision trace capture &mdash; not the infrastructure.</div>
              <div className="confidence">Confidence: Known &middot; Verified in Connection branching architecture</div>
            </div>

            <div className="truth-card blue">
              <span className="number">05 / KIDS</span>
              <div className="claim">The CFO product is already running in production &mdash; as Keboola's internal analytics system.</div>
              <div className="detail">The KIDS project (internal_ai_data_analyst) runs on 25+ tables across sales, HR, finance, and telemetry. It has Corporate Memory, automated Telegram alerts, and natural-language SQL access. This is Keboola Verity, with Keboola as its own first customer. The proof point exists; it has not been packaged for the sale.</div>
              <div className="confidence">Confidence: Known &middot; Confirmed in project_overview.md</div>
            </div>

            <div className="truth-card violet">
              <span className="number">06 / Real Problem</span>
              <div className="claim">The real constraint is assembly and description, not construction.</div>
              <div className="detail">Five layers exist across personal GitHub accounts, the Keboola org, and an internal GCP server. They are not described as a unified platform anywhere. The decision trace instrumentation is ~50 lines of code. What looks like a build problem is a positioning and instrumentation problem.</div>
              <div className="confidence">Confidence: Known &middot; Verified across four repo deep dives</div>
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* SYSTEM MAP */}
        <section id="sysmap">
          <div className="section-label">Step 2 &middot; System Map</div>
          <h2>The Stack <strong>That Already Exists</strong></h2>

          <p>These five layers form a coherent platform. They are scattered across a personal GitHub account, the Keboola org, and an internal server. They are not described as a unified platform anywhere.</p>

          <div className="diagram-container">
            <div className="diagram-title">Five-Layer Architecture &middot; As-Built &middot; March 2026</div>
            <svg viewBox="0 0 980 520" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: 'auto', display: 'block' }}>
              {/* Background */}
              <rect width="980" height="520" fill="#fafaf7"/>

              {/* Layer labels on left */}
              <text x="14" y="90" fontFamily="IBM Plex Mono" fontSize="9" fill="#a4aaa8" letterSpacing="1">LAYER 1</text>
              <text x="14" y="186" fontFamily="IBM Plex Mono" fontSize="9" fill="#a4aaa8" letterSpacing="1">LAYER 2</text>
              <text x="14" y="282" fontFamily="IBM Plex Mono" fontSize="9" fill="#a4aaa8" letterSpacing="1">LAYER 3</text>
              <text x="14" y="378" fontFamily="IBM Plex Mono" fontSize="9" fill="#a4aaa8" letterSpacing="1">LAYER 4</text>
              <text x="14" y="474" fontFamily="IBM Plex Mono" fontSize="9" fill="#a4aaa8" letterSpacing="1">LAYER 5</text>

              {/* LAYER 1: Data Integration */}
              <rect x="80" y="56" width="820" height="76" rx="7" fill="white" stroke="#e8e8e2" strokeWidth="1"/>
              <rect x="80" y="56" width="820" height="4" rx="2" fill="#2864dc"/>
              <text x="108" y="82" fontFamily="IBM Plex Sans" fontSize="13" fontWeight="600" fill="#1a1a2c">keboola_jdbc</text>
              <text x="108" y="97" fontFamily="IBM Plex Sans" fontSize="11" fontWeight="300" fill="#333542">Data engineers access the full operational graph from any SQL tool (DBeaver, DataGrip, VSCode)</text>
              <text x="108" y="116" fontFamily="IBM Plex Mono" fontSize="10" fill="#a4aaa8">_keboola.jobs  &middot;  _keboola.components  &middot;  _keboola.events  &middot;  _keboola.tables  &middot;  _keboola.buckets</text>
              {/* Small node indicators */}
              <circle cx="856" cy="82" r="7" fill="none" stroke="#2864dc" strokeWidth="1.5"/>
              <circle cx="878" cy="82" r="7" fill="none" stroke="#2864dc" strokeWidth="1.5"/>
              <circle cx="900" cy="82" r="7" fill="none" stroke="#2864dc" strokeWidth="1.5"/>
              <text x="846" y="116" fontFamily="IBM Plex Mono" fontSize="9" fill="#2864dc">DISTRIBUTION</text>

              {/* LAYER 2: Agent Interface */}
              <rect x="80" y="152" width="820" height="76" rx="7" fill="white" stroke="#e8e8e2" strokeWidth="1"/>
              <rect x="80" y="152" width="820" height="4" rx="2" fill="#783cdc"/>
              <text x="108" y="178" fontFamily="IBM Plex Sans" fontSize="13" fontWeight="600" fill="#1a1a2c">keboola_agent_cli</text>
              <text x="108" y="193" fontFamily="IBM Plex Sans" fontSize="11" fontWeight="300" fill="#333542">AI agents manage Keboola across projects &middot; built explicitly for Claude Code, Codex, Gemini</text>
              <text x="108" y="212" fontFamily="IBM Plex Mono" fontSize="10" fill="#a4aaa8">context  &middot;  branch (create/switch/merge)  &middot;  lineage show  &middot;  tool call  &middot;  llm export</text>
              <text x="846" y="212" fontFamily="IBM Plex Mono" fontSize="9" fill="#783cdc">AGENT SURFACE</text>

              {/* LAYER 3: Safe Execution (highlighted as THE key layer) */}
              <rect x="80" y="248" width="820" height="76" rx="7" fill="#1a1a2c" stroke="#1a1a2c" strokeWidth="1"/>
              <rect x="80" y="248" width="820" height="4" rx="2" fill="#147864"/>
              <text x="108" y="274" fontFamily="IBM Plex Sans" fontSize="13" fontWeight="600" fill="white">Keboola Connection &mdash; Production Branching</text>
              <text x="108" y="289" fontFamily="IBM Plex Sans" fontSize="11" fontWeight="300" fill="rgba(255,255,255,0.7)">Full-isolation AI execution environment &middot; on-demand materialization &middot; diff view before merge</text>
              <text x="108" y="308" fontFamily="IBM Plex Mono" fontSize="10" fill="rgba(164,170,168,0.7)">THE SIMULATION ENVIRONMENT &middot; already in production &middot; needs AI-native framing + decision trace capture</text>
              <rect x="820" y="263" width="62" height="22" rx="4" fill="none" stroke="#147864" strokeWidth="1.5"/>
              <text x="831" y="278" fontFamily="IBM Plex Mono" fontSize="9" fill="#147864">MOAT</text>

              {/* LAYER 4: Compilation */}
              <rect x="80" y="344" width="820" height="76" rx="7" fill="white" stroke="#e8e8e2" strokeWidth="1"/>
              <rect x="80" y="344" width="820" height="4" rx="2" fill="#8c503c"/>
              <text x="108" y="370" fontFamily="IBM Plex Sans" fontSize="13" fontWeight="600" fill="#1a1a2c">Osiris</text>
              <text x="108" y="385" fontFamily="IBM Plex Sans" fontSize="11" fontWeight="300" fill="#333542">Plain English &rarr; OML manifest &rarr; deterministic compiled pipeline &middot; SHA-256 fingerprinted</text>
              <text x="108" y="404" fontFamily="IBM Plex Mono" fontSize="10" fill="#a4aaa8">AIOP: Evidence &middot; Semantic &middot; Narrative &middot; Metadata  &middot;  best available decision memory substrate</text>
              <text x="810" y="404" fontFamily="IBM Plex Mono" fontSize="9" fill="#8c503c">DORMANT / 3MO GAP</text>

              {/* LAYER 5: Corporate Memory */}
              <rect x="80" y="440" width="820" height="76" rx="7" fill="white" stroke="#e8e8e2" strokeWidth="1"/>
              <rect x="80" y="440" width="820" height="4" rx="2" fill="#783cdc"/>
              <text x="108" y="466" fontFamily="IBM Plex Sans" fontSize="13" fontWeight="600" fill="#1a1a2c">KIDS &mdash; Internal AI Data Analyst</text>
              <text x="108" y="481" fontFamily="IBM Plex Sans" fontSize="11" fontWeight="300" fill="#333542">Keboola's own CFO product &middot; 25+ tables &middot; natural-language SQL &middot; Corporate Memory loop &middot; session transcripts</text>
              <text x="108" y="500" fontFamily="IBM Plex Mono" fontSize="10" fill="#a4aaa8">6 active knowledge rules  &middot;  automated Telegram alerts  &middot;  unprocessed decision traces in sessions/</text>
              <text x="816" y="500" fontFamily="IBM Plex Mono" fontSize="9" fill="#783cdc">REFERENCE CUSTOMER</text>

              {/* Vertical connector line between layers */}
              <line x1="490" y1="132" x2="490" y2="152" stroke="#a4aaa8" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="490" y1="228" x2="490" y2="248" stroke="#a4aaa8" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="490" y1="324" x2="490" y2="344" stroke="#a4aaa8" strokeWidth="1" strokeDasharray="3,3"/>
              <line x1="490" y1="420" x2="490" y2="440" stroke="#a4aaa8" strokeWidth="1" strokeDasharray="3,3"/>
            </svg>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* DECISION MEMORY */}
        <section id="memory">
          <div className="section-label">Central Strategic Observation</div>
          <h2>The Decision <strong>Memory Gap</strong></h2>

          <p>The KIDS Corporate Memory loop already demonstrates the mechanism works. What exists is operational memory &mdash; SQL gotchas, data quirks, DuckDB tips. What is missing is decision memory: the reasoning behind analytical choices, what was tried and rejected, and why a specific threshold was set.</p>

          <div className="loop-row" style={{ marginTop: '28px' }}>
            <div className="loop-step exists">
              <span className="step-num">01</span>
              <div className="step-name">Operational Trace</div>
              <div className="step-detail">AIOP in Osiris captures Evidence, Semantic, Narrative, Metadata after every run. What happened, when, by whom.</div>
              <span className="step-badge badge-exists">Exists</span>
            </div>
            <div className="loop-step exists">
              <span className="step-num">02</span>
              <div className="step-name">Session Collection</div>
              <div className="step-detail">KIDS SessionEnd hook auto-saves every conversation transcript to user/sessions/. Raw decision material exists.</div>
              <span className="step-badge badge-exists">Exists &middot; Unused</span>
            </div>
            <div className="loop-step exists">
              <span className="step-num">03</span>
              <div className="step-name">Knowledge Extraction</div>
              <div className="step-detail">Corporate Memory processes CLAUDE.local.md files every 30 min, extracts voted rules, pushes to km_*.md.</div>
              <span className="step-badge badge-exists">Exists &middot; Narrow</span>
            </div>
            <div className="loop-step missing">
              <span className="step-num">04</span>
              <div className="step-name">Decision Trace Capture</div>
              <div className="step-detail">Structured emit at branch merge: context received &rarr; action proposed &rarr; diff shown &rarr; human decision + rationale.</div>
              <span className="step-badge badge-missing">Missing &middot; ~50 lines</span>
            </div>
            <div className="loop-step missing">
              <span className="step-num">05</span>
              <div className="step-name">Decision Layer in AIOP</div>
              <div className="step-detail">Fifth AIOP layer: what was proposed, what simulation showed, what was approved or rejected and why.</div>
              <span className="step-badge badge-missing">Missing &middot; Extension</span>
            </div>
            <div className="loop-step partial">
              <span className="step-num">06</span>
              <div className="step-name">Compounding Memory</div>
              <div className="step-detail">Org-specific decision memory accumulates, making every next AI proposal more accurate for this specific environment.</div>
              <span className="step-badge badge-partial">Partial &middot; km_*.md</span>
            </div>
          </div>

          <div className="callout callout-orange" style={{ marginTop: '24px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Urgency</h3>
            <p style={{ marginBottom: 0 }}>Every day the decision trace capture is not in place, a permanent gap opens in the memory record. These traces cannot be reconstructed retroactively. Session transcripts in <code>user/sessions/</code> are being collected and sitting unused. The Corporate Memory extraction logic reads for SQL gotchas. It does not read for analytical decisions. This is a prompt engineering change to the extraction pipeline, not a new system.</p>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* MARKET ASSUMPTIONS */}
        <section id="assumptions">
          <div className="section-label">Step 4 &middot; Pavel Research Engine</div>
          <h2>Market <strong>Assumptions</strong></h2>

          <div className="assumption-row">
            <div className="assumption-name">Battle won at model or agent layer</div>
            <div className="assumption-detail">Most AI investment targets models and agent frameworks. The visible competition is between GPT-5, Claude, Gemini, and open-source alternatives. <strong>Fragility:</strong> Model capability is already sufficient for most enterprise data tasks. The constraint is integration, trust, and governance. The model layer is a commodity argument waiting to be confirmed by the next capability release.</div>
            <div className="fragility-label fragility-high">HIGH<br/>FRAGILITY</div>
          </div>

          <div className="assumption-row">
            <div className="assumption-name">Data warehouses absorb the AI workflow layer</div>
            <div className="assumption-detail">Snowflake and Databricks have scale, existing relationships, and are building AI features aggressively. <strong>Fragility:</strong> They understand tables, not workflows. A table has a schema. A workflow has lineage, ownership, runtime behavior, cost, dependencies, and blast radius. Building the workflow layer from scratch means instrumenting everything above storage &mdash; where Keboola already lives.</div>
            <div className="fragility-label fragility-high">HIGH<br/>FRAGILITY</div>
          </div>

          <div className="assumption-row">
            <div className="assumption-name">CFO teams need better analytics tooling</div>
            <div className="assumption-detail">Dashboards are slow, Excel is fragile, data is fragmented. <strong>Fragility:</strong> CFO teams don't need better analytics &mdash; they need a different operating model. Reconciliation continuous rather than periodic. Agents propose changes against real financial data. Every proposed journal entry can be reviewed against a diff before it touches the books.</div>
            <div className="fragility-label fragility-high">HIGH<br/>FRAGILITY</div>
          </div>

          <div className="assumption-row">
            <div className="assumption-name">Enterprise AI adoption is a product education problem</div>
            <div className="assumption-detail">Users need training and onboarding to adopt AI tools. <strong>Fragility:</strong> The real barrier is accountability. Nobody wants to approve an AI action they cannot trace. Simulation solves this by making the trace explicit before the action runs. This is an architecture problem, not an education problem.</div>
            <div className="fragility-label fragility-medium">MEDIUM<br/>FRAGILITY</div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* REAL CONSTRAINT */}
        <section id="constraint">
          <div className="section-label">Step 5 &middot; Pavel Research Engine</div>
          <h2>The Real <strong>Constraint</strong></h2>

          <p>The visible constraint is "building a simulation environment is complex." The root constraint is different.</p>

          <ul className="constraint-list">
            <li>
              <span className="constraint-rank">01</span>
              <span className="constraint-label">Assembly &amp; Description</span>
              <span className="constraint-detail">The pieces exist across five repositories and one internal project. The work is positioning and instrumentation, not construction. This is the primary constraint and the most immediately actionable.</span>
            </li>
            <li>
              <span className="constraint-rank">02</span>
              <span className="constraint-label">Simulation Fidelity</span>
              <span className="constraint-detail">Simulation is only trusted if it accurately predicts real consequences. A simulation wrong 10% of the time is worse than none &mdash; it creates false confidence. Fidelity is a direct function of instrumentation depth. This is the true technical constraint under the assembly problem.</span>
            </li>
            <li>
              <span className="constraint-rank">03</span>
              <span className="constraint-label">Decision Trace Capture</span>
              <span className="constraint-detail">Without structured recording of approve/reject decisions and their reasoning, the simulation runs but memory doesn't accumulate. Infrastructure to capture exists. The capture logic (~50 lines) does not.</span>
            </li>
            <li>
              <span className="constraint-rank">04</span>
              <span className="constraint-label">Founder Sequencing Alignment</span>
              <span className="constraint-detail">Petr's March priority is context graph + data apps. Our research argues simulation instrumentation must begin now or decision traces are permanently lost. Explicit alignment needed on this sequencing tension.</span>
            </li>
            <li>
              <span className="constraint-rank">05</span>
              <span className="constraint-label">Agent Reasoning Quality</span>
              <span className="constraint-detail">Most replaceable component. Listed last deliberately. The agent is the interface to the simulation environment, not the simulation environment itself. Model providers will commoditize agent reasoning. No one will commoditize your decision memory.</span>
            </li>
          </ul>
        </section>

        <hr className="section-divider"/>

        {/* CFO BEACHHEAD */}
        <section id="cfo">
          <div className="section-label">ICP Analysis &middot; CFO / Finance</div>
          <h2>The CFO <strong>Beachhead</strong></h2>

          <p>The gemini-fi.html pitch deck (Keboola Verity) is mostly correct. Good data, honest problem frame, concrete before/after scenarios. Three structural reasons the CFO is the right wedge:</p>

          <div className="truth-grid" style={{ margin: '28px 0' }}>
            <div className="truth-card teal">
              <span className="number">Buying Trigger 01</span>
              <div className="claim">The mandate is already present</div>
              <div className="detail">"CEO tells CFO to use Claude Code" &mdash; the buyer has pressure, the tool is named. Keboola's answer is: here is how Claude Code operates your financial data safely, with full auditability.</div>
            </div>
            <div className="truth-card teal">
              <span className="number">Buying Trigger 02</span>
              <div className="claim">SOX compliance makes simulation non-optional</div>
              <div className="detail">In regulated finance, human-in-the-loop is not a UX preference &mdash; it's the audit trail requirement. The branching diff + approval record is the SOX-compliant AI deployment story. No one else has it.</div>
            </div>
            <div className="truth-card teal">
              <span className="number">Buying Trigger 03</span>
              <div className="claim">The comparison is not vs. Snowflake</div>
              <div className="detail">CFO teams don't live in data warehouses. They live in NetSuite, Workday, Salesforce, Excel. The comparison is vs. Pigment, Mosaic FP&amp;A &mdash; expensive, narrow, no non-financial data context.</div>
            </div>
            <div className="truth-card orange">
              <span className="number">Missing from Deck</span>
              <div className="claim">The mechanism slide is absent</div>
              <div className="detail">The deck states "human-in-the-loop" as policy, never shows the mechanism. The missing slide: Reconciliation Agent proposes 12 journal entries &rarr; controller sees structured diff &rarr; approves subset &rarr; audit trail shows timestamp, actor, rationale. This is the slide that separates Keboola from every other AI-for-finance pitch.</div>
            </div>
          </div>

          <div className="callout callout-teal">
            <h3 style={{ marginTop: 0, color: 'var(--teal)' }}>The One-Line Positioning</h3>
            <p style={{ fontSize: '16px', marginBottom: '4px', fontStyle: 'italic' }}>"They need a data engineer between you and your data. We don't."</p>
            <p style={{ marginBottom: 0, fontSize: '13px' }}>The simulation/branching layer is what makes this claim safe. Without it, "no data engineer required" means "no guardrails." With it, it means the agent shows you exactly what will happen before it does, and every approval is on record.</p>
          </div>

          <h3>The Missing Closer</h3>
          <p>The deck ends: "The architecture for intelligent finance." It should end with the compounding argument: every close, every reconciliation, every budget variance processed makes the context graph more accurate for <em>your</em> chart of accounts, <em>your</em> contracts, <em>your</em> cost centers. That organizational specificity cannot be replicated by starting fresh on Snowflake. The data is portable. The context graph is not.</p>
        </section>

        <hr className="section-divider"/>

        {/* KIDS PROOF POINT */}
        <section id="kids">
          <div className="section-label">Internal Deployment &middot; keboola/internal_ai_data_analyst</div>
          <h2>KIDS <strong>&mdash; The Proof Point Inside the House</strong></h2>

          <p>The internal_ai_data_analyst project (KIDS) is Keboola's own use of the platform to run internal analytics. It is also &mdash; without this being stated anywhere &mdash; the working reference implementation of the CFO product you are trying to sell.</p>

          <div className="callout callout-violet" style={{ margin: '28px 0' }}>
            <p style={{ fontWeight: 400, color: 'var(--violet)', marginBottom: '8px', fontSize: '14px' }}>What KIDS has already built:</p>
            <p style={{ fontSize: '13px', marginBottom: '4px' }}>25+ tables across Salesforce, BambooHR, Keboola telemetry, Jira, and finance. Unified in DuckDB via Parquet views. Claude Code with schema.yml, metrics YAML, and data_description.md as structured context before every query. 6 automated notification agents monitoring multi-contract health, critical tickets, PAYG signups. Corporate Memory loop: analyst insight &rarr; extracted &rarr; voted on &rarr; pushed to every analyst's context automatically. Session transcripts collected at SessionEnd.</p>
            <p style={{ marginBottom: 0, fontSize: '13px' }}><strong>The metric YAML system is the most undervalued piece.</strong> It encodes institutional knowledge: total_amount &ne; MRR, contract status is "Activated" not "Active", revenue dates go to 2029. For a CFO customer, this is the chart-of-accounts logic layer that Snowflake cannot replicate without months of custom work.</p>
          </div>

          <h3>What KIDS Reveals About Decision Memory</h3>
          <p>The Corporate Memory loop currently extracts operational knowledge: SQL gotchas, DuckDB quirks, data quality patterns. The session transcripts contain something richer &mdash; the reasoning behind analytical decisions. Why was a particular threshold set? What was tried and rejected? Why do we monitor 6 health dimensions specifically, and why these 10 clients?</p>
          <p>That reasoning is in the transcripts. It is not being extracted. The extraction pipeline reads for technical gotchas. Expanding it to read for analytical decisions is a prompt engineering change.</p>

          <div className="callout callout-navy">
            <p><strong>The Sales Argument:</strong> "We built this for ourselves first. Here's what we learned. Here's what it looks like when it's been running for a year on real business data." This argument costs nothing and is impossible to fake. No competitor can say it.</p>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* INVESTOR DESTROY TEST */}
        <section id="investors">
          <div className="section-label">Step 8 &middot; Pavel Research Engine</div>
          <h2>Investor <strong>Destroy Test</strong></h2>

          <div className="qa-block">
            <div className="qa-q"><span className="q-num">Q1</span>Snowflake and Databricks will build this. You'll be competing against companies with 10x the resources and the existing customer relationship.</div>
            <div className="qa-a">They will build stack-native simulation. Snowflake will simulate within Snowflake. Databricks will simulate within the Lakehouse. Neither will build cross-stack simulation with faithful representation of heterogeneous operational graphs across NetSuite, Salesforce, Workday, Jira, and Coupa simultaneously. That requires the integration layer they don't have and won't prioritize &mdash; their business model rewards platform lock-in, not cross-stack completeness. The structural gap persists even after they ship a simulation feature. The CFO question is not "replace Snowflake" but "can this sit on top of my Snowflake?" If yes, the incumbent doesn't block the sale.
              <span className="verdict">Verdict: Structural gap is real and durable. Evidence: Snowflake Cortex scope vs. cross-system CFO data reality.</span>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-q"><span className="q-num">Q2</span>Engineers will route around it. Nobody wants an AI agent approving things in production &mdash; your simulation just adds process friction to something people will bypass.</div>
            <div className="qa-a">Real risk. The product must be genuinely excellent &mdash; blast-radius preview must prevent real incidents that engineers actually care about. "We saved you from writing to production" only matters if the near-miss is specific and visible. The KIDS notification system (Severity 1 tickets, 24-hour lookback, 6 health dimensions) is evidence that alerts work when specific enough to be actionable. The constraint is product quality, not product category.
              <span className="verdict">Verdict: Real risk with a real answer. Product quality bar is high; not a theoretical concern.</span>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-q"><span className="q-num">Q3</span>No value before the decision memory is deep. You're asking customers to instrument and wait &mdash; that's a hard sell with no immediate ROI proof.</div>
            <div className="qa-a">The simulation environment delivers value on day one. Even a shallow blast-radius preview &mdash; "this change affects 7 downstream tables and 3 pipelines" &mdash; is better than the current alternative of nothing. The value curve starts low and rises as the context graph deepens. Partial simulation is still better than no simulation. The compounding argument is for the renewal conversation, not the initial sale.
              <span className="verdict">Verdict: Day-one value exists. Compounding is the retention argument, not the entry argument.</span>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-q"><span className="q-num">Q4</span>The political problem is the real constraint, not the technical one. Engineers won't approve AI changes regardless of simulation quality because no one wants accountability for AI decisions.</div>
            <div className="qa-a">This steelman has force in consumer AI contexts. In regulated enterprise contexts, it inverts: the political problem is solved by making accountability documentable. "AI proposed, simulated against these specific consequences, these validation checks passed, this person approved at this timestamp" is an auditable record. In SOX-regulated finance, this is not optional &mdash; the audit trail is the product. The political objection dissolves when approval is documented and reasoning is traceable.
              <span className="verdict">Verdict: Strong steelman that breaks at the regulatory layer. Finance is the right entry wedge for exactly this reason.</span>
            </div>
          </div>

          <div className="qa-block">
            <div className="qa-q"><span className="q-num">Q5</span>The market window is tight. If incumbents ship a simulation feature in 18 months, you move from "we have it" to "ours is deeper" &mdash; a harder enterprise conversation.</div>
            <div className="qa-a">Accurate timing pressure. The fidelity curve must reach "trustworthy for production" before the category window closes. The answer is to use the window to accumulate instrumentation depth and decision memory &mdash; not to wait for the window to confirm itself. The 18-month clock is a reason to start decision trace instrumentation now, not a reason to defer it.
              <span className="verdict">Verdict: Real timing risk. The correct response is urgency, not dismissal. Clock starts now.</span>
            </div>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* OPPORTUNITY MATRIX */}
        <section id="opportunities">
          <div className="section-label">Step 11 &middot; Pavel Research Engine</div>
          <h2>Opportunity <strong>Matrix</strong></h2>

          <table className="matrix-table">
            <thead>
              <tr>
                <th>Opportunity</th>
                <th>Pain</th>
                <th>Urgency</th>
                <th>WTP</th>
                <th>Defensibility</th>
                <th>Time-to-Value</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><div className="opp-name">Simulation layer positioned as product surface</div>Connection branching reframed, AI-native, with decision trace capture</td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-m">Medium</span></td>
              </tr>
              <tr>
                <td><div className="opp-name">CFO / Finance vertical beachhead</div>Keboola Verity with human-in-the-loop mechanism slide + KIDS reference</td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-m">Medium</span></td>
              </tr>
              <tr>
                <td><div className="opp-name">Decision trace instrumentation</div>~50 lines in kbagent + AIOP extension + extraction logic update</td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-l">Low*</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-h">Low effort</span></td>
              </tr>
              <tr>
                <td><div className="opp-name">KIDS &rarr; packaged reference customer</div>Internal deployment reframed as first customer proof point</td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-h">Low effort</span></td>
              </tr>
              <tr>
                <td><div className="opp-name">Osiris modernization</div>LLM upgrade, state machine &rarr; Claude tool-use agent, simulation step</td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-m">Medium</span></td>
                <td><span className="pill pill-h">High</span></td>
                <td><span className="pill pill-l">High effort</span></td>
              </tr>
            </tbody>
          </table>
          <p style={{ fontSize: '12px', color: 'var(--line)', marginTop: '8px' }}>* WTP low only because category doesn't exist yet. Once named, willingness to pay is high.</p>
        </section>

        <hr className="section-divider"/>

        {/* OPEN ITEMS */}
        <section id="open">
          <div className="section-label">Pending Decisions</div>
          <h2>What Needs <strong>to Be Decided</strong></h2>

          <div className="callout callout-blue" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--blue)' }}>Strategic</h3>
            <p style={{ marginBottom: '4px' }}><strong>Infrastructure vs. Application:</strong> Is Keboola the infrastructure the agent runs on, or is Keboola the agent itself? The codebase straddles both. The CFO pitch implies the latter. The simulation moat implies the former is more defensible. This cannot remain unresolved.</p>
            <p style={{ marginBottom: 0 }}><strong>Vertical sequencing:</strong> Finance is the working hypothesis for regulated industry entry. The compliance-led sales motion (simulation + decision trace = audit infrastructure) may open doors faster than the productivity-led motion. Test this assumption explicitly.</p>
          </div>

          <div className="callout callout-orange" style={{ marginBottom: '16px' }}>
            <h3 style={{ marginTop: 0, color: 'var(--orange)' }}>Urgent</h3>
            <p style={{ marginBottom: '4px' }}><strong>Decision trace instrumentation:</strong> Who builds it, when. ~50 lines in kbagent + branch merge emit + AIOP extension. Every day this waits, traces are permanently destroyed.</p>
            <p style={{ marginBottom: 0 }}><strong>Founder sequencing:</strong> Petr's March priority (context graph + data apps) vs. our research recommendation (decision trace capture must begin now). Requires explicit alignment &mdash; not because one is wrong but because the urgency differs.</p>
          </div>

          <div className="callout callout-teal">
            <h3 style={{ marginTop: 0, color: 'var(--teal)' }}>License &amp; Distribution</h3>
            <p style={{ marginBottom: '4px' }}><strong>Apache 2.0 on Osiris:</strong> Fork risk becomes real if Osiris becomes strategically significant. The HashiCorp cautionary tale. License strategy must be decided before any OSS motion begins.</p>
            <p style={{ marginBottom: 0 }}><strong>"Verity" product name:</strong> Currently doing no work in the deck. Introduced without explanation, disappears. Decision needed before any external motion begins.</p>
          </div>
        </section>

        <hr className="section-divider"/>

        {/* EXECUTIVE COMPRESSION */}
        <section id="compression">
          <div className="section-label">Step 12 &middot; Executive Compression</div>
          <h2>One-Slide <strong>Logic</strong></h2>

          <div className="compression-grid">
            <div className="comp-cell highlight">
              <div className="cell-label">Hidden Truth</div>
              <div className="cell-content">The simulation environment already exists. Connection branching is it. The moat is present, unpositioned, and uninstrumented for decision capture.</div>
            </div>
            <div className="comp-cell">
              <div className="cell-label">Fragile Assumption</div>
              <div className="cell-content">That context infrastructure is the moat. Context infrastructure is the layer <em>below</em> the moat. The moat is the decision memory that accumulates from every simulation the organization runs.</div>
            </div>
            <div className="comp-cell highlight">
              <div className="cell-label">Real Constraint</div>
              <div className="cell-content">Not construction. Assembly and description. The pieces exist. The decision trace hook is 50 lines. The positioning frame is a document.</div>
            </div>
            <div className="comp-cell">
              <div className="cell-label">Attack Surface</div>
              <div className="cell-content">Incumbents will build stack-native simulation. They will not build cross-stack, cross-domain simulation for the CFO who needs NetSuite + Salesforce + Workday + Ironclad simultaneously. That gap is structural.</div>
            </div>
            <div className="comp-cell highlight">
              <div className="cell-label">Strategic Move</div>
              <div className="cell-content">Position simulation as the product. Add the mechanism slide to the CFO deck. Instrument decision traces now. Package KIDS as the reference customer. Unify the five layers under one name.</div>
            </div>
            <div className="comp-cell">
              <div className="cell-label">Kill Shot Risk</div>
              <div className="cell-content">Simulation fidelity takes time to be trustworthy. A 10%-wrong simulation is worse than none. The window is ~18 months before incumbents ship shallow versions. The time to accumulate depth and memory is now.</div>
            </div>
          </div>

          <div className="callout callout-navy" style={{ marginTop: '32px' }}>
            <p style={{ fontSize: '18px', fontWeight: 300, lineHeight: 1.6, marginBottom: 0 }}><strong>The argument in one sentence:</strong> Keboola has built &mdash; without naming it &mdash; the only safe execution environment for AI agents in enterprise data operations, and the only system that can make every AI-proposed change auditable, reviewable, and organization-specifically smarter over time. The work now is to say so, instrument the proof, and sell it to the CFO whose CEO already told them to use Claude Code.</p>
          </div>
        </section>

      </main>

      <footer className="doc-footer">
        <p>Pavel Deep Research Engine &middot; Keboola Strategy Synthesis &middot; March 2026</p>
        <p>Sources: Osiris &middot; keboola_agent_cli &middot; keboola_jdbc &middot; internal_ai_data_analyst &middot; Connection branching docs &middot; Verity CFO deck &middot; Founder transcripts</p>
      </footer>
    </>
  );
}

export default App;
