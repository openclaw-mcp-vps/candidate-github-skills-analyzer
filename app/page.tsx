export default function Home() {
  const faqs = [
    {
      q: "How does the GitHub analysis work?",
      a: "We fetch public repositories via the GitHub API, scan code files for languages and frameworks, then use AI to generate a detailed skill report."
    },
    {
      q: "What does the skill report include?",
      a: "Languages, frameworks, code quality signals, contribution patterns, and an overall technical proficiency summary ready to share with your team."
    },
    {
      q: "Can I analyze multiple candidates?",
      a: "Yes. Your $17/mo subscription gives you unlimited candidate analyses so you can screen your entire pipeline without extra costs."
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Technical Recruiters
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Analyze Coding Skills from{" "}
          <span className="text-[#58a6ff]">GitHub Profiles</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Stop guessing. Scan any candidate&apos;s GitHub repos and get an instant, AI-powered skill report — languages, frameworks, code quality, and more.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Analyzing — $17/mo
        </a>
        <p className="text-xs text-[#8b949e] mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Feature highlights */}
      <section className="grid sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: "🔍", title: "Deep Repo Scan", desc: "Parses actual code files, not just profile stats" },
          { icon: "🤖", title: "AI Skill Report", desc: "Structured summary of languages, frameworks & quality" },
          { icon: "📋", title: "Shareable PDF", desc: "Send reports directly to hiring managers" }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5 text-center">
            <div className="text-3xl mb-3">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-sm text-[#8b949e]">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited candidate analyses",
              "Full AI-generated skill reports",
              "Languages & framework detection",
              "Code quality signals",
              "Shareable PDF exports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-base transition-colors"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-sm text-[#8b949e] leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] mt-20">
        &copy; {new Date().getFullYear()} GitHub Skills Analyzer. All rights reserved.
      </footer>
    </main>
  )
}
