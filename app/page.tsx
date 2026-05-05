export default function Home() {
  const faqs = [
    {
      q: 'Which Discord voice message formats are supported?',
      a: 'The bot supports all native Discord voice messages recorded in channels and DMs, including OGG and WebM audio formats.'
    },
    {
      q: 'How accurate is the speaker identification?',
      a: 'Speaker identification uses Discord user metadata so each transcription is tagged with the exact Discord username — no voice fingerprinting needed.'
    },
    {
      q: 'Is my server\'s audio data stored permanently?',
      a: 'Audio files are deleted immediately after transcription. Only the text transcription and speaker tag are stored in your searchable history.'
    }
  ]

  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Accessibility Tool
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Transcribe Discord Voice Messages{' '}
          <span className="text-[#58a6ff]">Automatically</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          A Discord bot that listens for voice messages, transcribes them instantly with speaker identification, and keeps a searchable history — making your server accessible to everyone.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Get Started — $15/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. Instant bot access after payment.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-20">
        {[
          { icon: '🎙️', title: 'Auto Transcription', desc: 'Every voice message transcribed the moment it is posted.' },
          { icon: '👤', title: 'Speaker ID', desc: 'Each transcript tagged with the Discord username automatically.' },
          { icon: '🔍', title: 'Searchable History', desc: 'Full-text search across all past transcriptions in your server.' }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-2">{f.icon}</div>
            <div className="font-semibold text-white mb-1">{f.title}</div>
            <div className="text-[#8b949e] text-sm">{f.desc}</div>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$15</div>
          <div className="text-[#8b949e] mb-6">/month per server</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited voice message transcriptions',
              'Speaker identification via Discord username',
              'Searchable transcription history',
              'Web dashboard for settings & exports',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Subscribe Now
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
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs mt-20">
        &copy; {new Date().getFullYear()} Discord Voice Note Transcriber. All rights reserved.
      </footer>
    </main>
  )
}
