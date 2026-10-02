import React from 'react';

interface ToastProps {
  message: string | null;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-20 lg:bottom-6 right-6 z-50 pointer-events-none flex items-center gap-2 px-4 py-3 rounded-lg bg-[#201f1f]/95 border border-[#c4c0ff]/40 shadow-2xl text-[#e5e2e1] font-mono text-xs animate-in fade-in slide-in-from-bottom-3 duration-200">
      <span className="material-symbols-outlined text-[#5ee151] text-[18px]">verified</span>
      <span>{message}</span>
    </div>
  );
};
