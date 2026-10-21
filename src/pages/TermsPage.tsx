import React from 'react';
import { NavPage } from '../types';

interface TermsPageProps {
  onNavigate: (page: NavPage) => void;
}

export const TermsPage: React.FC<TermsPageProps> = ({
  onNavigate,
}) => {
  const lastUpdated = 'October 21, 2026';

  return (
    <div className="w-full bg-[#0e0e0e] min-h-screen text-[#e5e2e1] pb-24 relative overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-[#c4c0ff]/10 blur-[130px] pointer-events-none rounded-full animate-glow" />
      <div className="absolute top-48 right-12 w-[380px] h-[240px] bg-[#00d2fd]/5 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col gap-14 relative z-10">
        <section className="pt-4 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#201f1f] text-[#c4c0ff] font-mono text-xs uppercase tracking-widest border border-[#c4c0ff]/20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c4c0ff] animate-pulse" />
                LEGAL // TERMS & CONDITIONS
              </div>
              <span className="font-mono text-xs text-[#918fa1] tracking-wider">
                LAST UPDATED: {lastUpdated}
              </span>
            </div>

            <h1 className="font-display font-extrabold text-4xl sm:text-6xl lg:text-7xl uppercase tracking-tighter text-white leading-[0.92] max-w-5xl mt-2">
              Terms & Conditions
            </h1>

            <p className="text-[#c7c4d8] text-base md:text-lg max-w-3xl mt-1 leading-relaxed">
              These terms and conditions govern use of this portfolio website operated by Prince Bhakta (Kingplayz / Kingplayz008). By accessing this website, you accept these terms without modification.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-10">
          <div className="space-y-8">
            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">check_circle</span>
                <h2 className="font-display font-bold text-xl text-white">1. Acceptance of Terms</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                By accessing this website, you agree to comply with these Terms & Conditions and our Privacy Policy. If you disagree with any part of the terms, you may not access the site.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">star</span>
                <h2 className="font-display font-bold text-xl text-white">2. Use License</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Permission is granted to temporarily download one copy of the materials (information or software) on Prince Bhakta's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li>Modify or copy the materials;</li>
                <li>Use the materials for commercial purposes, or for any public display (commercial or non-commercial);</li>
                <li>Attempt to reverse engineer any software contained on Prince Bhakta's website;</li>
                <li>Remove any copyright or other proprietary notations from the materials; or</li>
                <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
              </ul>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">error</span>
                <h2 className="font-display font-bold text-xl text-white">3. Disclaimer</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                All materials on Prince Bhakta's website are provided 'as is'. Prince Bhakta makes no warranties, whether expressed or implied, concerning the accuracy, results, or performance of the materials on this website. Prince Bhakta may make changes to the materials contained on its website at any time without notice.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">shield_m</span>
                <h2 className="font-display font-bold text-xl text-white">4. Limitations</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Prince Bhakta will not be liable for any damages arising out of use of, or inability to use, the materials on Prince Bhakta's website, even if Prince Bhakta has been notified orally or in writing of the possibility of such damages. Some jurisdictions do not allow limitations on implied warranties or limitations of liability for consequential or incidental damages, so the above limitations may not apply to you.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">edit</span>
                <h2 className="font-display font-bold text-xl text-white">5. Modifications to Terms</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Prince Bhakta may revise these terms at any time without notice. By using this website, you agree to be bound by the current version of these Terms & Conditions. You should periodically review this page to ensure you are aware of any changes.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">link</span>
                <h2 className="font-display font-bold text-xl text-white">6. Linking Policy</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                The following organizations may link to this website without prior written approval:
              </p>
              <ul className="list-disc list-inside space-y-2 text-[#c7c4d8] leading-relaxed">
                <li>Government agencies;</li>
                <li>Search engines may hyperlink to the website as part of a web search context; and</li>
                <li>System wide accreditors except trade associations and other industry groups.</li>
              </ul>
              <p className="text-[#c7c4d8] leading-relaxed mt-3">
                These organizations may link to our home page, or to other publication information on the website. No other organization may link to this website without prior written permission. These organizations may not establish a link to any page within the website without prior written permission.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">forum</span>
                <h2 className="font-display font-bold text-xl text-white">7. User Comments</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Any comments, ideas, concepts or other information users post or otherwise transmit become the property of Prince Bhakta. Prince Bhakta is free to use, disclose, reproduce, incorporate and distribute the information in any way. Prince Bhakta is under no obligation to post or respond to any comments.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">shopping_cart</span>
                <h2 className="font-display font-bold text-xl text-white">8. E-commerce Terms</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                All orders are subject to product availability and verification of credit card information. We reserve the right to refuse any order deemed fraudulent or placed without authorization or credit. We shall not be liable for any changes in product prices, descriptions or availability, or for any errors in ordering or product/shipment information. We shall not be liable for any damages or losses arising from the use of the website.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">public</span>
                <h2 className="font-display font-bold text-xl text-white">9. Governing Law</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                These Terms & Conditions shall be governed by and construed in accordance with the laws of the jurisdiction in which Prince Bhakta operates, without regard to its conflict of law provisions. You agree to submit to the exclusive jurisdiction of the courts in that jurisdiction.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">history</span>
                <h2 className="font-display font-bold text-xl text-white">10. Changes to These Terms</h2>
              </div>
              <p className="text-[#c7c4d8] leading-relaxed">
                Prince Bhakta may update these Terms & Conditions at any time. You are advised to review this page periodically for changes. Changes are effective when posted on this page. By continuing to use this website after changes are posted, you accept the updated terms.
              </p>
            </article>

            <article className="bg-[#201f1f] p-6 md:p-8 rounded-xl border border-[#464555]/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="material-symbols-outlined text-[#c4c0ff] text-xl">mail</span>
                <h2 className="font-display font-bold text-xl text-white">11. Contact</h2>
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
              href="#privacy"
              onClick={(e) => { e.preventDefault(); onNavigate('privacy'); }}
              className="px-8 py-3 bg-[#c4c0ff] hover:bg-[#b4ebff] text-[#2000a4] font-mono text-xs uppercase font-bold tracking-wider rounded-lg transition-colors shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              Read Privacy Policy
              <span className="material-symbols-outlined">arrow_forward</span>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};