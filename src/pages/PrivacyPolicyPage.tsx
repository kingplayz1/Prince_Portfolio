import React from 'react';
import { NavPage } from '../types';

interface PrivacyPolicyPageProps {
  onNavigate: (page: NavPage) => void;
}

export const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({
  onNavigate,
}) => {
  const lastUpdated = 'October 21, 2026';

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow"></div>
      <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full"></div>

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">
        {/* 1. HEADER */}
        <section className="pt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse"></span>
                LEGAL // PRIVACY POLICY
              </div>
              <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                LAST UPDATED: {lastUpdated}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
              Privacy Policy
            </h1>

            <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
              This policy explains how Prince Bhakta (Kingplayz / Kingplayz008) collects, uses, and protects your personal information when you visit this portfolio website.
            </p>
          </div>
        </section>

        {/* 2. POLICY CONTENT */}
        <section className="flex flex-col gap-10">
          <div className="space-y-8">
            {/* Section 1: Data Controller */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">shield</span>
                <h2 className="font-display font-bold text-xl text-white">1. Data Controller</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Prince Bhakta (operating as Kingplayz / Kingplayz008) is the data controller for this website.
                Contact: <a href="mailto:privacy@princebhakta.dev" className="text-[#a2e7ff] hover:underline">privacy@princebhakta.dev</a>
              </p>
            </article>

            {/* Section 2: Data Collected */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">database</span>
                <h2 className="font-display font-bold text-xl text-white">2. Data We Collect</h2>
              </div>
              <div className="space-y-4 text-[#c7c4d8] leading-relaxed">
                <div>
                  <h3 className="font-mono text-xs text-[#a2e7ff] uppercase tracking-wider mb-2">Automatically Collected</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>IP address (anonymized after 30 days)</li>
                    <li>Browser type, version, and language</li>
                    <li>Operating system and device type</li>
                    <li>Pages visited and time spent</li>
                    <li>Referrer URL</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-[#a2e7ff] uppercase tracking-wider mb-2">Voluntarily Provided</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Name and organization (Contact form)</li>
                    <li>Email address (Contact form)</li>
                    <li>Project scope and message content (Contact form)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-mono text-xs text-[#a2e7ff] uppercase tracking-wider mb-2">Cookies & Local Storage</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Essential: Session state, form persistence</li>
                    <li>Analytics: Only with explicit consent (GA4/Plausible)</li>
                    <li>Preferences: Cookie consent choices, theme preference</li>
                  </ul>
                </div>
              </div>
            </article>

            {/* Section 3: Purpose */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">analytics</span>
                <h2 className="font-display font-bold text-xl text-white">3. Purpose of Processing</h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-[#c7c4d8] leading-relaxed">
                <li><strong>Contact Form:</strong> Respond to inquiries about FiveM systems, web development, video production, or project commissions</li>
                <li><strong>Analytics (Consent Required):</strong> Understand site usage to improve content and user experience</li>
                <li><strong>Security:</strong> Detect and prevent abuse, spam, and malicious activity</li>
                <li><strong>Legal Compliance:</strong> Fulfill legal obligations and protect rights</li>
              </ul>
            </article>

            {/* Section 4: Legal Basis */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">gavel</span>
                <h2 className="font-display font-bold text-xl text-white">4. Legal Basis (GDPR Art. 6)</h2>
              </div>
              <ul className="list-disc list-inside space-y-3 text-[#c7c4d8] leading-relaxed">
                <li><strong>Legitimate Interest:</strong> Analytics, security, site improvement</li>
                <li><strong>Consent:</strong> Non-essential cookies, marketing communications</li>
                <li><strong>Contractual:</strong> Responding to contact form submissions</li>
                <li><strong>Legal Obligation:</strong> Data protection law compliance</li>
              </ul>
            </article>

            {/* Section 5: Data Sharing */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">share</span>
                <h2 className="font-display font-bold text-xl text-white">5. Data Sharing & Third Parties</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed mb-4">
                We do not sell your personal data. Third parties only process data on our behalf:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li><strong>Vercel:</strong> Hosting & CDN (EU/US data centers)</li>
                <li><strong>FormSubmit.co / Netlify Forms:</strong> Contact form processing (if used)</li>
                <li><strong>Analytics Provider:</strong> Only with explicit consent (Google Analytics / Plausible)</li>
                <li><strong>Legal Authorities:</strong> When required by law</li>
              </ul>
            </article>

            {/* Section 6: Data Retention */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">schedule</span>
                <h2 className="font-display font-bold text-xl text-white">6. Data Retention</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li><strong>Contact Form Data:</strong> 2 years after last correspondence</li>
                <li><strong>Analytics Data:</strong> 14 months (GA4 default) or until consent withdrawn</li>
                <li><strong>Server Logs (IP):</strong> 30 days, then anonymized</li>
                <li><strong>Cookie Preferences:</strong> 1 year from last update</li>
              </ul>
            </article>

            {/* Section 7: User Rights */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">person</span>
                <h2 className="font-display font-bold text-xl text-white">7. Your Rights (GDPR Art. 15-22)</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li><strong>Access:</strong> Request a copy of your data</li>
                <li><strong>Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Erasure:</strong> Request deletion ("right to be forgotten")</li>
                <li><strong>Restriction:</strong> Limit processing</li>
                <li><strong>Portability:</strong> Receive data in structured format</li>
                <li><strong>Objection:</strong> Object to processing (including direct marketing)</li>
                <li><strong>Withdraw Consent:</strong> At any time for consent-based processing</li>
              </ul>
              <p className="text-[#a2e7ff] mt-4 font-mono text-xs">
                Exercise rights: privacy@princebhakta.dev
              </p>
            </article>

            {/* Section 8: International Transfers */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">public</span>
                <h2 className="font-display font-bold text-xl text-white">8. International Transfers</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Your data may be processed outside the EEA (e.g., Vercel US servers). We ensure adequate protection via:
                <br /><br />
                <strong>Standard Contractual Clauses (SCCs)</strong> with all processors<br />
                <strong>Adequacy Decisions</strong> where applicable<br />
                <strong>Explicit Consent</strong> for analytics providers
              </p>
            </article>

            {/* Section 9: Security */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">security</span>
                <h2 className="font-display font-bold text-xl text-white">9. Security Measures</h2>
              </div>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li>HTTPS everywhere (TLS 1.3) via Vercel</li>
                <li>Content Security Policy headers</li>
                <li>X-Frame-Options, X-Content-Type-Options, Referrer-Policy</li>
                <li>Honeypot spam protection on forms</li>
                <li>Rate limiting on contact submissions</li>
                <li>No sensitive data stored in frontend code</li>
              </ul>
            </article>

            {/* Section 10: Children's Privacy */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">child_care</span>
                <h2 className="font-display font-bold text-xl text-white">10. Children's Privacy</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                This website is not directed at children under 16. We do not knowingly collect personal data from children.
                If you believe we have collected data from a child, contact us immediately for deletion.
              </p>
            </article>

            {/* Section 11: Changes */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">history</span>
                <h2 className="font-display font-bold text-xl text-white">11. Changes to This Policy</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                We may update this policy. Material changes will be posted here with a revised "Last Updated" date.
                Continued use after changes constitutes acceptance.
              </p>
            </article>

            {/* Section 12: Contact */}
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#c4c0ff]/40 border-2">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">mail</span>
                <h2 className="font-display font-bold text-xl text-white">12. Contact Us</h2>
              </div>
              <div className="space-y-2 text-[#c7c4d8] leading-relaxed font-mono text-sm">
                <p><strong>Email:</strong> <a href="mailto:privacy@princebhakta.dev" className="text-[#a2e7ff] hover:underline">privacy@princebhakta.dev</a></p>
                <p><strong>GitHub:</strong> <a href="https://github.com/kingplayz1" target="_blank" rel="noreferrer" className="text-[#a2e7ff] hover:underline">@kingplayz1</a></p>
                <p><strong>Discord:</strong> <span className="text-[#5ee151]">kingplayz</span></p>
                <p><strong>Data Protection Authority:</strong> You have the right to lodge a complaint with your local supervisory authority.</p>
              </div>
            </article>
          </div>
        </section>

        {/* 3. NAVIGATION */}
        <section className="w-full pt-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="px-8 py-3 bg-[#2a2a2a] hover:bg-[#353534] text-white font-mono text-xs uppercase tracking-wider rounded-lg transition-colors border border-[#464555]/40 cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to Home
            </button>
            <a
              href="#terms"
              onClick={(e) => { e.preventDefault(); onNavigate('terms'); }}
              className="px-8 py-3 bg-[#c4c0ff] hover:bg-[#b4ebff] text-[#2000a4] font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Read Terms & Conditions
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};