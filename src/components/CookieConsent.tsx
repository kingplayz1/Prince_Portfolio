import React, { useEffect, useState } from 'react';

interface CookieConsentProps {
  onAccept: () => void;
  onDecline: () => void;
  onPreferences?: () => void;
}

const CookieBanner = () => {
  const hasConsented = localStorage.getItem('cookie_consent');

  if (hasConsented === 'accepted') {
    return null;
  }

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-xl border-t border-[#464555]/30 px-6 py-4 text-[#e5e2e1] font-mono text-xs uppercase tracking-wider"
    >
      <div className="max-w-[1440px] mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-base sm:text-lg">
            This website uses cookies to enhance your browsing experience. By clicking
            <span className="font-semibold cursor-pointer underline text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors"
              onClick={() => { localStorage.setItem('cookie_consent', 'accepted'); window.location.reload(); }}
            >
              Accept
            </span>
            or
            <span className="font-semibold cursor-pointer underline text-[#a2e7ff] hover:text-[#c4c0ff] transition-colors"
              onClick={() => { localStorage.setItem('cookie_consent', 'declined'); window.location.reload(); }}
            >
              Decline
            </span>, you agree to the storage of cookies on your device.
          </p>

          <div className="flex sm:flex-none gap-3">
            <button
              onClick={() => {
                localStorage.setItem('cookie_consent', 'accepted');
                window.location.reload();
              }}
              className="px-4 py-2 bg-[#6c63ff] hover:bg-[#a2e7ff] text-[#2000a4] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Accept All
            </button>
            <button
              onClick={() => {
                localStorage.setItem('cookie_consent', 'declined');
                window.location.reload();
              }}
              className="px-4 py-2 bg-[#2a2a2a] hover:bg-[#353534] text-[#c7c4d8] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Reject All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const PreferencesModal = () => {
  const [categories, setCategories] = useState<'essential' | 'analytics' | 'marketing'>[];

  const handleSave = () => {
    localStorage.setItem('cookie_preferences', JSON.stringify(categories));
    window.location.reload();
  };

  if (!localStorage.getItem('cookie_consent')) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-xl flex items-center justify-center"
    >
      <div className="bg-[#0e0e0e] rounded-lg p-8 max-w-md w-full border border-[#464555]/30">
        <h3 className="font-display font-bold text-xl text-white mb-6">Cookie Preferences</h3>

        <div className="space-y-4 text-[#c7c4d8] text-sm">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={categories.includes('essential')}
              onChange={(e) => setCategories(prev => e.target.checked ? [...prev, 'essential'] : prev.filter(x => x !== 'essential'))}
              className="w-4 h-4 rounded border-[#5ee151] bg-[#5ee151] cursor-pointer"
            />
            Essential Cookies
          </label>
          <span className="text-xs text-[#918fa1]">
            These cookies are essential for the website to function properly.
          </span>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={categories.includes('analytics')}
              onChange={(e) => setCategories(prev => e.target.checked ? [...prev, 'analytics'] : prev.filter(x => x !== 'analytics'))}
              className="w-4 h-4 rounded border-[#6c63ff] bg-[#6c63ff] cursor-pointer"
            />
            Analytics Cookies
          </label>
          <span className="text-xs text-[#918fa1]">
            We use analytics cookies to understand how visitors interact with our website.
          </span>

          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={categories.includes('marketing')}
              onChange={(e) => setCategories(prev => e.target.checked ? [...prev, 'marketing'] : prev.filter(x => x !== 'marketing'))}
              className="w-4 h-4 rounded border-[#a2e7ff] bg-[#a2e7ff] cursor-pointer"
            />
            Marketing Cookies
          </label>
          <span className="text-xs text-[#918fa1]">
            Marketing cookies may be used to deliver ads more relevant to you.
          </span>
        </div>

        <div className="flex gap-3 mt-8">
          <button
            onClick={() => {
              localStorage.setItem('cookie_consent', 'preferences');
              localStorage.setItem('cookie_preferences', JSON.stringify(categories));
              window.location.reload();
            }}
            className="px-6 py-3 bg-[#6c63ff] hover:bg-[#a2e7ff] text-[#2000a4] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex-1"
          >
            Save Preferences
          </button>
          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 bg-[#2a2a2a] hover:bg-[#353534] text-[#c7c4d8] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex-1"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export const CookieConsent: React.FC<CookieConsentProps> = ({
  onAccept,
  onDecline,
  onPreferences,
}) => {
  const hasConsented = localStorage.getItem('cookie_consent');

  if (hasConsented === 'accepted') {
    onAccept();
    return null;
  }

  if (hasConsented === 'declined') {
    onDecline();
    return null;
  }

  if (hasConsented === 'preferences') {
    onAccept();
    return null;
  }

  return <CookieBanner />;
};