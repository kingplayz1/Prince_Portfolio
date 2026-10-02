import React, { useState } from 'react';
import { VideoShowcase } from '../types';

interface VideoPlayerModalProps {
  video: VideoShowcase | null;
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
  onShowToast,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isSpatialAudio, setIsSpatialAudio] = useState(true);
  const [progress, setProgress] = useState(38);

  if (!isOpen || !video) return null;

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    onShowToast(!isPlaying ? 'Playback Resumed (60 FPS)' : 'Playback Paused');
  };

  const toggleAudio = () => {
    setIsSpatialAudio(!isSpatialAudio);
    onShowToast(
      !isSpatialAudio ? 'Spatial Audio Active (Binaural 3D)' : 'Standard Stereo Audio'
    );
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl p-4 flex items-center justify-center">
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      <div
        className="relative w-full max-w-4xl bg-[#141518] border border-white/10 rounded-2xl overflow-hidden shadow-2xl z-10 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Video Canvas Stage */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden select-none">
          {/* Background image preview with contrast */}
          <img
            src={video.imageUrl}
            alt={video.imageAlt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isPlaying ? 'opacity-80 contrast-125' : 'opacity-40 grayscale'
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

          {/* Equalizer animation backdrop */}
          {isPlaying && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-35 px-12 pointer-events-none">
              <div className="w-1.5 bg-[#c4c0ff] rounded-full eq-bar-anim h-16"></div>
              <div className="w-1.5 bg-[#a2e7ff] rounded-full eq-bar-anim h-24"></div>
              <div className="w-1.5 bg-[#5ee151] rounded-full eq-bar-anim h-12"></div>
              <div className="w-1.5 bg-[#c4c0ff] rounded-full eq-bar-anim h-28"></div>
              <div className="w-1.5 bg-[#a2e7ff] rounded-full eq-bar-anim h-20"></div>
              <div className="w-1.5 bg-[#5ee151] rounded-full eq-bar-anim h-16"></div>
              <div className="w-1.5 bg-[#c4c0ff] rounded-full eq-bar-anim h-24"></div>
            </div>
          )}

          {/* Center Play Button Overlay */}
          <div className="z-20 flex flex-col items-center gap-3">
            <button
              onClick={togglePlay}
              className="w-16 h-16 rounded-full bg-[#c4c0ff]/20 border-2 border-[#c4c0ff] hover:bg-[#c4c0ff]/40 text-[#c4c0ff] flex items-center justify-center transition-all hover:scale-110 shadow-[0_0_30px_rgba(196,192,255,0.4)] cursor-pointer"
            >
              <span className="material-symbols-outlined text-3xl">
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
            <span className="font-mono text-xs text-[#c4c0ff] tracking-widest uppercase bg-[#141518]/85 px-3 py-1 rounded backdrop-blur-sm border border-white/10">
              LIVE BROADCAST // 4K 60FPS
            </span>
          </div>

          {/* Time & Master badges */}
          <div className="absolute bottom-4 left-6 z-20 font-mono text-xs text-white flex items-center gap-2">
            <span>03:42</span>
            <span className="text-[#6f737a]">/</span>
            <span className="text-[#6f737a]">{video.duration}</span>
          </div>
          <div className="absolute bottom-4 right-6 z-20 font-mono text-xs text-[#5ee151] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#5ee151] animate-ping"></span>
            <span>4K MASTER RENDER</span>
          </div>
        </div>

        {/* Scrubber track */}
        <div
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const pct = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
            setProgress(pct);
            onShowToast(`Scrubbed to ${Math.round(pct)}%`);
          }}
          className="w-full bg-[#181a1f] h-2 cursor-pointer relative"
        >
          <div
            className="h-full bg-gradient-to-r from-[#c4c0ff] via-[#a2e7ff] to-[#5ee151] transition-all duration-150"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Modal Info Footer */}
        <div className="p-4 md:p-6 bg-[#0e0e10] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h4 className="font-display font-semibold uppercase text-white text-base">
              {video.title}
            </h4>
            <p className="text-xs text-[#a5a7ad] mt-0.5">{video.description}</p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={toggleAudio}
              className="px-3 py-1.5 rounded-lg bg-[#181a1f] border border-white/10 hover:border-[#c4c0ff] text-xs font-mono uppercase text-white flex items-center gap-2 transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm text-[#5ee151]">
                {isSpatialAudio ? 'volume_up' : 'volume_off'}
              </span>
              <span>{isSpatialAudio ? 'Spatial Audio' : 'Stereo Audio'}</span>
            </button>
            <a
              href="https://youtube.com/@KINGPLAYZ008"
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 rounded-lg bg-red-950/60 border border-red-700/50 hover:bg-red-900/60 text-xs font-mono uppercase text-white flex items-center gap-1.5 transition-colors"
            >
              <span className="material-symbols-outlined text-sm text-red-400">smart_display</span>
              <span>YouTube Channel</span>
            </a>
            <button
              onClick={onClose}
              className="w-8 h-8 rounded-lg bg-[#181a1f] hover:bg-white/10 flex items-center justify-center transition-colors text-white"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
