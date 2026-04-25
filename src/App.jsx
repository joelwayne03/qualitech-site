import logo from "./assets/logo-header.svg";

export default function ValidationConsultingSampleSite() {
  const contactFormAction = "https://formspree.io/f/mpqknzow";
  const careersFormAction = "https://formspree.io/f/xojybqpa";

  const services = [
    {
      title: "Validation & Computer System Validation (CSV)",
      description:
        "End-to-end support across the validation lifecycle from planning and risk assessment through execution and ongoing maintenance—aligned with GAMP 5 and regulatory expectations.",
      bullets: [
        "Validation planning and strategy",
        "Risk assessments and traceability",
        "Protocol execution and reporting",
        "Validated-state maintenance",
      ],
    },
    {
      title: "Data Integrity & Remediation",
      description:
        "Comprehensive Data Integrity Risk Assessments (DIRA), gap remediation, and governance frameworks aligned with ALCOA+ principles and 21 CFR Part 11 expectations.",
      bullets: [
        "DIRA execution",
        "Audit trail and access control review",
        "Gap remediation roadmaps",
        "ALCOA+ governance support",
      ],
    },
    {
      title: "Commissioning, Qualification & Validation (CQV)",
      description:
        "Qualification support for GMP facilities, utilities, laboratory equipment, and manufacturing systems, including IOQ/PQ execution and lifecycle management.",
      bullets: [
        "Facility and equipment qualification",
        "IOQ/PQ support",
        "Lifecycle management",
        "Requalification strategy",
      ],
    },
    {
      title: "QA Validation Oversight & Compliance",
      description:
        "Oversight of validation activities, deviation management, CAPA, and change control to support sustained compliance and inspection readiness.",
      bullets: [
        "QA validation oversight",
        "Deviation and CAPA support",
        "Change control alignment",
        "Inspection readiness support",
      ],
    },
  ];

  const differentiators = [
    "Proven leadership across full validation lifecycles from concept through decommissioning",
    "Successful delivery of large scale capital projects supporting GMP facilities and laboratories",
    "Hands-on execution combined with program-level strategy, governance, and remediation",
    "Strong alignment to GAMP 5, 21 CFR Part 11, EU Annex 11, and ALCOA+ principles",
    "Flexible team model with the ability to scale resources based on project demand",
  ];

  const outcomes = [
    {
      value: "Inspection-Ready",
      label: "validation programs designed to withstand regulatory inspection pressure",
    },
    {
      value: "Data Integrity Focused",
      label: "risk-based remediation aligned with ALCOA+, Part 11, and Annex 11 expectations",
    },
    {
      value: "Full Lifecycle Support",
      label: "from planning and design through qualification, release, and sustained compliance",
    },
    {
      value: "Rapid Deployment",
      label: "scalable validation and quality resources aligned to project demand",
    },
  ];

  const engagements = [
    {
      title: "CSV Program Remediation",
      description:
        "Evaluated existing validation practices, identified procedural and documentation gaps, and helped shape a more scalable, inspection-ready validation model for regulated systems.",
    },
    {
      title: "Data Integrity Framework Build-Out",
      description:
        "Supported the development of governance, assessments, and controls for GxP computerized systems, improving oversight, consistency, and long-term compliance posture.",
    },
    {
      title: "CQV & Equipment Qualification Support",
      description:
        "Supported qualification execution for critical lab and GMP systems while coordinating with QA, Engineering, Manufacturing, QC, and external vendors.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <img 
  src={logo} 
  alt="QualiTech Validation Experts logo" 
  className="h-9 w-auto object-contain"
/>
            <div>
              <div className="text-base font-medium tracking-tight">
                QualiTech Validation Experts
              </div>
              <div className="text-xs uppercase tracking-[0.25em] text-slate-400">
                FDA Audit-Ready Validation • CSV • Data Integrity • CQV
              </div>
            </div>
          </div>

          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">
              Services
            </a>
            <a href="#about" className="transition hover:text-white">
              About
            </a>
            <a href="#engagements" className="transition hover:text-white">
              Experience
            </a>
            <a href="#careers" className="transition hover:text-white">
              Careers
            </a>
            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="rounded-xl border border-white/15 bg-white px-4 py-2 text-xs font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Request Consultation
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute left-10 top-20 h-64 w-64 rounded-full bg-cyan-400 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-blue-600 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <div>
            <div className="inline-flex rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-1 text-sm text-cyan-200">
              Specialized Validation Consulting for GMP-Regulated Environments
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Validation, CSV & Data Integrity Consulting for GMP-Regulated Environments
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-cyan-200">
              Supporting validation and compliance initiatives with a focus on data integrity,
              audit readiness, and scalable program execution.
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              We support biotech and pharmaceutical organizations in building, remediating,
              and sustaining inspection ready validation programs across laboratory,
              manufacturing, and enterprise systems.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Request Consultation
              </a>
              <a
                href="#services"
                className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Services
              </a>
            </div>

            <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {outcomes.map((item) => (
                <div
                  key={item.label}
                  className="min-h-[140px] rounded-3xl border border-white/10 bg-white/5 p-6 flex flex-col justify-start break-words"
                >
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-900/20 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">
                    Core Focus Areas
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">
                    Where We Add Immediate Value
                  </h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100">
                  GxP / FDA / EMA
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Validation program assessments and remediation roadmaps",
                  "CSV support for quality systems and regulated SaaS platforms",
                  "Data Integrity governance, procedural controls, and gap remediation",
                  "IQ/OQ/PQ and qualification support for laboratory and GMP systems",
                  "Inspection readiness support aligned to business realities and compliance expectations",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-7 text-slate-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Validation gaps become business risk when programs are not built to scale.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-6">
              <h3 className="text-xl font-semibold text-red-300">
                Common Client Challenges
              </h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Disorganized validation documentation and poor traceability</li>
                <li>• Weak Data Integrity controls and audit trail gaps</li>
                <li>• No scalable validation framework or governance</li>
                <li>• Audit exposure with unclear compliance posture</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <h3 className="text-xl font-semibold text-cyan-200">How We Solve It</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Build structured, inspection-ready validation programs</li>
                <li>• Close high-risk gaps with targeted remediation strategies</li>
                <li>• Implement scalable, risk-based validation governance</li>
                <li>• Deliver documentation and systems built for FDA scrutiny</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-white">
              Not staff augmentation. Not generic consulting. We operate as a validation
              partner accountable for outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Our Services</h2>
          <p className="mt-4 text-slate-300">
            Specialized support across validation, CSV, CQV, Data Integrity, and QA
            compliance initiatives for regulated life sciences environments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20"
            >
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {service.description}
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div
                    key={bullet}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200"
                  >
                    {bullet}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
            Additional Capabilities
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            Extended support across validation, compliance, and quality initiatives.
          </h2>
          <p className="mt-4 text-slate-300">
            In addition to our core services, we support specialized initiatives across
            strategy, CSV, Data Integrity, and CQV execution.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>🧠</span> Strategy
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Audit Readiness & Inspection Support</div>
              <div>Validation Program Build-Out</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>💻</span> CSV
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Computer Software Assurance (CSA)</div>
              <div>Vendor Selection & URS Development</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>🔒</span> Data Integrity
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Legacy System Remediation</div>
              <div>Audit Trail & Compliance Controls</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>🏗</span> CQV
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Periodic Review & CPV</div>
              <div>Requalification Strategy</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-y border-white/10 bg-white/[0.03]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">About</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              About QualiTech Validation Experts
            </h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              QualiTech Validation Experts provides specialized consulting in validation,
              CSV, CQV, and Data Integrity for life sciences organizations operating in
              GMP-regulated environments.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              Our focus is on delivering structured, compliant, and inspection-ready
              validation programs that align regulatory expectations with operational
              execution.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">
              Why Clients Partner With Us
            </div>
            <div className="mt-6 space-y-4">
              {differentiators.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="engagement-model" className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Engagement Model
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Engagement Model
            </h2>
            <p className="mt-4 text-slate-300">
              We operate as a validation partner accountable for outcomes, supporting both
              strategic and execution-level initiatives.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              "Embedded validation support (contract-based)",
              "Project-based validation and remediation",
              "Audit readiness and short-term engagements",
              "Rapid deployment of qualified resources to support critical timelines, audit readiness, and remediation efforts",
            ].map((item, index) => (
              <div
                key={item}
                className={`min-h-[160px] rounded-2xl border border-white/10 bg-white/5 p-7 text-sm leading-6 text-slate-200 flex items-start break-words ${
                  index === 3 ? "lg:col-span-2" : ""
                }`}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="engagements" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
              Experience Supporting
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Experience Supporting Regulated Life Sciences Environments
            </h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Experience supporting biotech and pharmaceutical organizations across GMP
            manufacturing, laboratory systems, regulated IT, and enterprise quality
            environments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagements.map((item) => (
            <div
              key={item.title}
              className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-900 p-8 shadow-2xl shadow-cyan-900/10 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
                Regulatory & Industry Alignment
              </p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                Aligned with the standards that drive inspection-ready execution.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                Our approach aligns with globally recognized regulatory and industry
                expectations for validation, computerized systems, and data integrity.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-7">
              <div className="space-y-4 text-sm leading-7 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  21 CFR Part 11
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  EU Annex 11
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  GAMP 5
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  ALCOA+ Data Integrity Principles
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Careers</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Join our network of validation, quality, and compliance professionals.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              As client needs grow, we may engage additional specialists across Validation,
              CSV, CQV, Data Integrity, Quality Engineering, and project-based regulatory
              support. This section provides a direct pathway for experienced professionals
              to join our consulting network and be considered for current and future client
              engagements. We selectively partner with experienced professionals who meet
              high standards of quality and execution.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>
                Ideal profiles: Validation Engineers, CSV Specialists, CQV Engineers, DI
                Consultants, QA Validation Leads
              </div>
              <div>
                Engagement types: Contract, project-based, part-time, remote, hybrid, or
                onsite support
              </div>
              <div>
                Use cases: Capital projects, remediation efforts, audit readiness, system
                validation, and resource augmentation
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
            <form action={careersFormAction} method="POST" className="relative z-10 space-y-4">
              <input type="hidden" name="form_type" value="Careers Interest" />
              <input
                type="hidden"
                name="_subject"
                value="New Careers Interest Submission - QualiTech Validation Experts"
              />
              <input
                name="full_name"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Full name"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Email"
              />
              <input
                name="expertise"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Primary area of expertise"
              />
              <input
                name="profile_link"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="LinkedIn or resume link"
              />
              <textarea
                name="background"
                required
                className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Tell us about your background, availability, industries, and the type of projects you are looking for"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Submit Interest
              </button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Let’s Discuss Your Validation Needs
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Use this section to connect for project-based consulting, remediation support,
              program assessments, audit readiness, or validation leadership.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email: info@qualitechvalidationexperts.com</div>
              <div>LinkedIn: linkedin.com/in/joelvaz</div>
              <div>Location: Greater Boston / New England / Remote Support</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
            <form action={contactFormAction} method="POST" className="relative z-10 space-y-4">
              <input type="hidden" name="form_type" value="Consultation Request" />
              <input
                type="hidden"
                name="_subject"
                value="New Consultation Request - QualiTech Validation Experts"
              />
              <input
                name="name"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Name"
              />
              <input
                name="company"
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Company"
              />
              <input
                type="email"
                name="email"
                required
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Work email"
              />
              <textarea
                name="project_details"
                required
                className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Tell us about your project, gap assessment need, audit preparation, or validation support request"
              />
              <button
                type="submit"
                className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]"
              >
                Request Consultation
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
