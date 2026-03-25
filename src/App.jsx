export default function ValidationConsultingSampleSite() {
  const services = [
    {
      title: "Validation Strategy & Program Leadership",
      description:
        "Build or mature validation frameworks for growing biotech and pharmaceutical organizations, including lifecycle governance, validation planning, risk-based execution, and inspection-ready operating models.",
      bullets: ["Validation Master Plan support", "Lifecycle SOP and template frameworks", "Risk-based validation strategy", "Cross-functional program leadership"],
    },
    {
      title: "CSV & GxP SaaS Systems",
      description:
        "Lead validation and remediation for regulated computerized systems supporting quality, clinical, manufacturing, and business operations across modern cloud and enterprise platforms.",
      bullets: ["Veeva Vault QMS & Training", "TMF and pharmacovigilance platforms", "Part 11 / Annex 11 alignment", "Traceability, protocols, and reports"],
    },
    {
      title: "Data Integrity & Compliance Remediation",
      description:
        "Assess and strengthen data integrity controls, governance, and procedural rigor using pragmatic approaches aligned to ALCOA+, FDA expectations, and GAMP 5 principles.",
      bullets: ["Data Integrity assessments", "Gap analysis and remediation roadmaps", "Audit trail and access control review", "Sustainable procedural improvements"],
    },
    {
      title: "CQV, Labs & GMP Systems",
      description:
        "Support commissioning, qualification, and validated-state management for GMP laboratories, manufacturing environments, critical equipment, and supporting infrastructure.",
      bullets: ["IQ/OQ/PQ oversight", "Lab and facility qualification support", "Equipment and system release readiness", "Requalification and lifecycle maintenance"],
    },
  ];

  const differentiators = [
    "Proven leadership across full validation lifecycles from concept through decommissioning",
    "Successful delivery of large-scale capital projects supporting GMP facilities and laboratories",
    "Experience across Astellas, Editas Medicine, Moderna, Mustang Bio, and Merck environments",
    "Hands-on execution combined with program-level strategy, governance, and remediation",
    "Strong alignment to GAMP 5, 21 CFR Part 11, EU Annex 11, and ALCOA+ principles",
  ];

  const outcomes = [
    { value: "Built for FDA Scrutiny", label: "validation programs designed to withstand regulatory inspection pressure" },
    { value: "Capital Project Leadership", label: "trusted support across high-value GMP facility and lab buildouts" },
    { value: "Full Lifecycle Ownership", label: "from concept, design, and qualification through sustained compliance" },
    { value: "Rapid Deployment", label: "ability to scale expert resources quickly based on project demand" },
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
        "Led or supported qualification execution for critical lab and GMP systems while coordinating with QA, Engineering, Manufacturing, QC, and external vendors.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div>
            <div className="text-lg font-semibold tracking-tight">QualiTech Validation Experts</div>
            <div className="text-xs uppercase tracking-[0.25em] text-slate-400">FDA Audit-Ready Validation • CSV • Data Integrity • CQV</div>
          </div>
          <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
            <a href="#services" className="transition hover:text-white">Services</a>
            <a href="#about" className="transition hover:text-white">About</a>
            <a href="#engagements" className="transition hover:text-white">Experience</a>
            <a href="#careers" className="transition hover:text-white">Careers</a>
            <a href="#contact" className="transition hover:text-white">Contact</a>
          </nav>
          <a
            href="#contact"
            className="rounded-2xl border border-white/15 bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Book a Consultation
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
              Senior Validation Leadership for Regulated Life Sciences Teams
            </div>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              We build, remediate, and lead validation programs that stand up to FDA inspection.
            </h1>
            <p className="mt-4 max-w-2xl text-sm font-semibold text-cyan-200">
              Built for FDA scrutiny. Designed to close high-risk gaps. Delivered with scalable, senior-led execution.
              {/* A/B Test Alternatives:
              1. "Audit-ready validation programs that eliminate risk and stand up to inspection."
              2. "We fix high-risk validation environments and make them inspection-ready — fast."
              3. "From fragmented systems to audit-ready programs — we lead the transformation."
              */}
            </p>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              QualiTech Validation Experts partners with life sciences organizations to deliver high-impact validation, CSV, CQV, and Data Integrity solutions. We specialize in turning fragmented or high-risk environments into structured, inspection-ready programs with measurable results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-white/10 transition hover:scale-[1.02]"
              >
                Schedule a Consultation
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
                <div key={item.label} className="rounded-3xl border border-white/10 bg-white/5 p-6 min-h-[140px] flex flex-col justify-start break-words">
                  <div className="text-2xl font-semibold text-white">{item.value}</div>
                  <div className="mt-2 text-sm leading-6 text-slate-300">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:pl-8">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-cyan-900/20 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-cyan-200">Core Focus Areas</p>
                  <h2 className="mt-2 text-2xl font-semibold">Where We Add Immediate Value</h2>
                </div>
                <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-3 py-2 text-xs text-cyan-100">
                  GxP / FDA / EMA
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  "Validation program assessments and remediation roadmaps",
                  "CSV support for Veeva, quality systems, and regulated SaaS platforms",
                  "Data Integrity governance, procedural controls, and gap remediation",
                  "IQ/OQ/PQ and qualification support for laboratory and GMP systems",
                  "Inspection readiness support aligned to business realities and compliance expectations",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 text-sm leading-7 text-slate-200">
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">The Problem</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Most validation programs fail under pressure.</h2>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-400/20 bg-red-400/5 p-6">
              <h3 className="text-xl font-semibold text-red-300">Common Challenges</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-300">
                <li>• Disorganized validation documentation and poor traceability</li>
                <li>• Weak Data Integrity controls and audit trail gaps</li>
                <li>• No scalable validation framework or governance</li>
                <li>• High audit risk with unclear compliance posture</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-cyan-400/20 bg-cyan-400/5 p-6">
              <h3 className="text-xl font-semibold text-cyan-200">How We Solve It</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-200">
                <li>• Build structured, inspection-ready validation frameworks</li>
                <li>• Close high-risk gaps with targeted remediation strategies</li>
                <li>• Implement scalable, risk-based validation programs</li>
                <li>• Deliver documentation and systems built for FDA scrutiny</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg font-semibold text-white">
              Not staff augmentation. Not generic consulting. We operate as a validation partner accountable for outcomes.
            </p>
          </div>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Services</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Focused consulting support for validation, compliance, and execution.</h2>
          <p className="mt-4 text-slate-300">
            Whether you need strategic leadership, hands-on execution, or targeted remediation, engagements can be structured around specific projects, site initiatives, or broader program support.
          </p>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          {services.map((service) => (
            <div key={service.title} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
              <h3 className="text-2xl font-semibold">{service.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{service.description}</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm text-slate-200">
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
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Additional Capabilities</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Extended support across validation, compliance, and quality initiatives.</h2>
          <p className="mt-4 text-slate-300">
            In addition to our core services, we provide structured support across specialized areas of validation and quality.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-4">
          {/* Strategy */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>🧠</span> Strategy
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Audit Readiness & Inspection Support</div>
              <div>Validation Program Build-Out</div>
            </div>
          </div>

          {/* CSV */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>💻</span> CSV
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Computer Software Assurance (CSA)</div>
              <div>Vendor Selection & URS Development</div>
            </div>
          </div>

          {/* Data Integrity */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-2 text-cyan-300 text-sm uppercase tracking-widest">
              <span>🔒</span> Data Integrity
            </div>
            <div className="mt-4 space-y-3 text-sm text-slate-200">
              <div>Legacy System Remediation</div>
              <div>Audit Trail & Compliance Controls</div>
            </div>
          </div>

          {/* CQV */}
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
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">A senior validation partner for high-accountability environments.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              We support clients who need credible validation and compliance execution in regulated environments where documentation quality, risk management, and inspection readiness matter. Our team model is anchored by senior leadership experience across biotech and pharmaceutical operations with support from a network of qualified validation and quality professionals.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300">
              We bring a practical approach: strengthen the framework, close the right gaps, improve documentation, and keep execution aligned with both business needs and regulatory expectations.
            </p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/70 p-7">
            <div className="text-sm uppercase tracking-[0.25em] text-cyan-200">Why Clients Work With Me</div>
            <div className="mt-6 space-y-4">
              {differentiators.map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm leading-7 text-slate-200">
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Engagement Model</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Flexible support designed around your program needs.</h2>
            <p className="mt-4 text-slate-300">
              We operate as a scalable validation partner, providing both senior-level leadership and flexible execution teams tailored to your project scope.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {[
              "End-to-end validation program build-out",
              "Targeted remediation and gap closure",
              "Embedded validation leadership",
              "Rapid deployment of qualified resources across validation, CSV, CQV, and quality programs",
            ].map((item, index) => (
              <div
                key={item}
                className={`rounded-2xl border border-white/10 bg-white/5 p-7 text-sm leading-6 text-slate-200 min-h-[160px] flex items-start break-words ${index === 3 ? 'lg:col-span-2' : ''}`}
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
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Representative Engagements</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Representative examples of high-impact validation and compliance engagements.</h2>
          </div>
          <p className="max-w-xl text-slate-300">
            Representative examples of validation, CSV, CQV, and Data Integrity work delivered across regulated life sciences environments.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagements.map((item) => (
            <div key={item.title} className="rounded-[2rem] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-7">
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="rounded-[2rem] border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-slate-900 p-8 shadow-2xl shadow-cyan-900/10 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-cyan-200">Who This Is For</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Support for startups, scale-ups, and established life sciences organizations.</h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
                This homepage is positioned for clients looking for a senior resource who can assess current state, identify meaningful gaps, lead remediation, and help move validation and quality programs forward without unnecessary complexity.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-7">
              <div className="space-y-4 text-sm leading-7 text-slate-200">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Companies preparing for FDA or client audits</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Teams needing CSV or Data Integrity remediation</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Sites scaling GMP operations, labs, or quality systems</div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">Organizations needing senior-level project support without a full-time headcount</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="border-t border-white/10 bg-white/[0.02]">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Careers</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Join our network of validation, quality, and compliance professionals.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              As client needs grow, we may engage additional specialists across Validation, CSV, CQV, Data Integrity, Quality Engineering, and project-based regulatory support. This section provides a direct pathway for experienced professionals to join our consulting network and be considered for current and future client engagements. We selectively partner with experienced professionals who meet high standards of quality and execution.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Ideal profiles: Validation Engineers, CSV Specialists, CQV Engineers, DI Consultants, QA Validation Leads</div>
              <div>Engagement types: Contract, project-based, part-time, remote, hybrid, or onsite support</div>
              <div>Use cases: Capital projects, remediation efforts, audit readiness, system validation, and resource augmentation</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Full name"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Email"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Primary area of expertise"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="LinkedIn or resume link"
              />
              <textarea
                className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Tell us about your background, availability, industries, and the type of projects you are looking for"
              />
              <button className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
                Submit Interest
              </button>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 bg-slate-950">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Contact</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Start a conversation about your validation, CSV, or compliance needs.</h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              Tell us about your current state, timelines, and objectives. We’ll assess fit and outline a clear path to audit-ready execution—whether that’s targeted remediation, program build-out, or embedded validation leadership.
            </p>
            <div className="mt-8 space-y-3 text-slate-300">
              <div>Email: info@qualitechvalidationexperts.com</div>
              <div>LinkedIn: linkedin.com/in/joelvaz</div>
              <div>Location: Greater Boston / New England / Remote Support</div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-lg shadow-black/20">
            <div className="space-y-4">
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Name"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Company"
              />
              <input
                className="w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Work email"
              />
              <textarea
                className="min-h-[130px] w-full rounded-2xl border border-white/10 bg-slate-900/70 px-4 py-3 text-sm outline-none placeholder:text-slate-500"
                placeholder="Tell me about your project, gap assessment need, audit preparation, or validation support request"
              />
              <button className="w-full rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.01]">
                Request Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
