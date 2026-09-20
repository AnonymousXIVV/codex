import React, { useState, useEffect } from "react";
import {
  Phone,
  PhoneCall,
  PhoneIncoming,
  PhoneOff,
  Mic,
  MicOff,
  Volume2,
  Pause,
  Play,
  Activity,
  CheckCircle2,
  Sparkles,
  Radio,
  Zap,
} from "lucide-react";

interface VoipCallingAnimationProps {
  poster?: string;
  className?: string;
  compact?: boolean;
  kicker?: string;
  timeline?: string;
}

type CallPhase = "ringing" | "connected" | "logged";

export const VoipCallingAnimation: React.FC<VoipCallingAnimationProps> = ({
  poster = "/services/crm-calling.jpg",
  className = "",
  compact: _compact = false,
  kicker,
  timeline,
}) => {
  const [phase, setPhase] = useState<CallPhase>("connected");
  const [callDuration, setCallDuration] = useState(14);
  const [isMuted, setIsMuted] = useState(false);
  const [isOnHold, setIsOnHold] = useState(false);
  const [waveformHeights, setWaveformHeights] = useState<number[]>([
    24, 45, 68, 85, 40, 92, 75, 55, 38, 80, 95, 60, 42, 70, 50, 30,
  ]);

  // Phase loop: Ringing (3s) -> Connected (12s) -> Logged (4s) -> repeat
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === "ringing") {
      timer = setTimeout(() => {
        setPhase("connected");
        setCallDuration(1);
      }, 3500);
    } else if (phase === "connected") {
      timer = setTimeout(() => {
        setPhase("logged");
      }, 12000);
    } else if (phase === "logged") {
      timer = setTimeout(() => {
        setPhase("ringing");
      }, 4000);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  // Call duration counter when connected
  useEffect(() => {
    if (phase !== "connected" || isOnHold) return;

    const interval = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [phase, isOnHold]);

  // Animated dynamic audio waveform frequency simulation
  useEffect(() => {
    if (phase !== "connected" || isOnHold) return;

    const interval = setInterval(() => {
      setWaveformHeights((prev) =>
        prev.map(() => Math.floor(Math.random() * 75) + 15),
      );
    }, 140);

    return () => clearInterval(interval);
  }, [phase, isOnHold]);

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
      .toString()
      .padStart(2, "0");
    const secs = (seconds % 60).toString().padStart(2, "0");
    return `${mins}:${secs}`;
  };

  return (
    <div
      className={`relative h-full w-full select-none overflow-hidden bg-zinc-950 font-sans text-white ${className}`}
    >
      {/* Background with real CRM softphone graphic and dark overlay */}
      <img
        src={poster}
        alt="Bespoke CRM & VoIP Softphone Interface"
        className="absolute inset-0 h-full w-full object-cover opacity-35 transition-transform duration-700 hover:scale-105"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-zinc-900/70 backdrop-blur-[2px]" />

      {/* Interactive Softphone Overlay Panel */}
      <div className="relative z-10 flex h-full flex-col justify-between p-4 sm:p-5">
        {/* Top Telephony Telemetry Ribbon */}
        <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-xs">
          <div className="flex items-center gap-2">
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            <span className="font-mono text-[11px] font-semibold tracking-wider text-emerald-400 uppercase">
              WebRTC Softphone Active
            </span>
          </div>

          <div className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400">
            <Radio className="size-3 text-blue-400" />
            <span>Opus HD · 14ms Latency</span>
          </div>
        </div>

        {/* Middle: Active Call Stage Showcase */}
        <div className="my-auto py-2">
          {phase === "ringing" && (
            <div className="space-y-3 text-center">
              <div className="relative mx-auto flex size-14 items-center justify-center">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-amber-400/30" />
                <span className="absolute inline-flex size-18 rounded-full border border-amber-400/40" />
                <div className="relative flex size-14 items-center justify-center rounded-full bg-gradient-to-br from-amber-500 to-amber-600 shadow-lg shadow-amber-500/30">
                  <PhoneIncoming className="size-6 animate-bounce text-white" />
                </div>
              </div>

              <div>
                <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-400">
                  <Sparkles className="size-3" />
                  Inbound Client Call
                </span>
                <h4 className="mt-1.5 text-base font-semibold tracking-tight text-white sm:text-lg">
                  Marcus Vance
                </h4>
                <p className="text-xs text-zinc-400">
                  Apex Global Holdings · +1 (415) 890-2341
                </p>
                <p className="mt-1 font-mono text-[11px] text-amber-400/90">
                  Routing to Sales Desk Queue...
                </p>
              </div>

              <div className="flex items-center justify-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() => {
                    setPhase("connected");
                    setCallDuration(1);
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full bg-emerald-600 px-4 py-1.5 text-xs font-medium text-white shadow-md shadow-emerald-600/30 transition-transform hover:scale-105 active:scale-95"
                >
                  <PhoneCall className="size-3.5" />
                  Answer Desk
                </button>
              </div>
            </div>
          )}

          {phase === "connected" && (
            <div className="space-y-3">
              {/* Call Header */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative flex size-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 shadow-md shadow-emerald-500/20">
                    <Phone className="size-4 text-white" />
                    <span className="absolute -bottom-0.5 -right-0.5 size-3 rounded-full border-2 border-zinc-950 bg-emerald-400" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-semibold text-white">
                        Marcus Vance
                      </h4>
                      <span className="rounded bg-emerald-500/20 px-1.5 py-0.5 font-mono text-[9px] font-bold text-emerald-400 uppercase">
                        Active Call
                      </span>
                    </div>
                    <p className="text-[11px] text-zinc-400">
                      Enterprise Lead · +1 (415) 890-2341
                    </p>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-sm font-bold text-emerald-400">
                    {formatTimer(callDuration)}
                  </div>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-zinc-400">
                    <span className="size-1.5 animate-pulse rounded-full bg-red-500" />
                    REC
                  </div>
                </div>
              </div>

              {/* Dynamic Equalizer Audio Waveform */}
              <div className="rounded-lg border border-white/10 bg-black/40 p-2.5 backdrop-blur-md">
                <div className="mb-1 flex items-center justify-between text-[10px] text-zinc-400">
                  <span className="flex items-center gap-1">
                    <Volume2 className="size-3 text-emerald-400" />
                    Two-Way HD Audio Stream
                  </span>
                  <span className="font-mono text-zinc-500">-12 dB</span>
                </div>
                <div className="flex h-8 items-end justify-between gap-1 px-1">
                  {waveformHeights.map((h, idx) => (
                    <span
                      key={idx}
                      style={{ height: `${isOnHold ? 4 : h}%` }}
                      className={`w-full rounded-full transition-all duration-100 ${
                        isOnHold
                          ? "bg-zinc-600"
                          : idx % 3 === 0
                            ? "bg-emerald-400"
                            : idx % 2 === 0
                              ? "bg-teal-400"
                              : "bg-blue-400"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Live Audio Transcription Feed */}
              <div className="rounded-md border border-white/10 bg-white/5 p-2 text-[11px] leading-relaxed text-zinc-300">
                <span className="font-semibold text-emerald-400">Client: </span>
                <span className="italic">
                  "Let's move ahead with the custom CRM integration. Can we route
                  all new calls to our team's Telegram immediately?"
                </span>
              </div>

              {/* In-Call Softphone Dock */}
              <div className="flex items-center justify-center gap-2 pt-0.5">
                <button
                  type="button"
                  onClick={() => setIsMuted(!isMuted)}
                  title={isMuted ? "Unmute" : "Mute"}
                  className={`flex size-8 items-center justify-center rounded-full border transition-all ${
                    isMuted
                      ? "border-red-500/50 bg-red-500/20 text-red-400"
                      : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {isMuted ? (
                    <MicOff className="size-3.5" />
                  ) : (
                    <Mic className="size-3.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setIsOnHold(!isOnHold)}
                  title={isOnHold ? "Resume Call" : "Put on Hold"}
                  className={`flex size-8 items-center justify-center rounded-full border transition-all ${
                    isOnHold
                      ? "border-amber-500/50 bg-amber-500/20 text-amber-400"
                      : "border-white/10 bg-white/10 text-white hover:bg-white/20"
                  }`}
                >
                  {isOnHold ? (
                    <Play className="size-3.5" />
                  ) : (
                    <Pause className="size-3.5" />
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => setPhase("logged")}
                  className="flex items-center gap-1.5 rounded-full bg-red-600 px-3 py-1.5 text-xs font-semibold text-white shadow-md shadow-red-600/30 transition-transform hover:bg-red-500 active:scale-95"
                >
                  <PhoneOff className="size-3.5" />
                  <span>End & Log</span>
                </button>
              </div>
            </div>
          )}

          {phase === "logged" && (
            <div className="space-y-2.5 rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-3 text-center backdrop-blur-md">
              <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                <CheckCircle2 className="size-5" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Call Saved & Logged to CRM
                </h4>
                <p className="text-[11px] text-emerald-300">
                  Audio Recording Encrypted & Transcribed
                </p>
              </div>

              <div className="flex flex-col gap-1 rounded-lg bg-black/40 p-2 text-left text-[10px] text-zinc-300">
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Pipeline Stage:</span>
                  <span className="font-semibold text-emerald-400">
                    Negotiation ($65,000)
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-zinc-400">Next Action:</span>
                  <span className="font-mono text-zinc-200">
                    Automated Proposal Sent
                  </span>
                </div>
                <div className="flex items-center gap-1 text-emerald-400">
                  <Zap className="size-3 shrink-0" />
                  <span>Instant Telegram alert dispatched to Account Exec</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Bottom Bar Details */}
        <div className="flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-zinc-400">
          <span className="inline-flex items-center gap-1.5 font-medium text-white">
            <span className="inline-flex items-center gap-1 rounded bg-blue-500/20 px-2 py-0.5 text-[10px] font-semibold text-blue-400">
              <PhoneCall className="size-2.5" />
              {kicker || "04  /  Sales Automation"}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[10px] text-zinc-400">
              <Activity className="size-3 text-emerald-400" />
              VoIP Dialer
            </span>
          </span>
          <span className="font-mono text-zinc-300">
            {timeline || "Typical Delivery: 2 to 4 Weeks"}
          </span>
        </div>
      </div>
    </div>
  );
};
