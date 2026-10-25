import React from 'react';
import { Link } from 'react-router-dom';
import { CloudOff, Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <main className="min-h-[calc(100vh-120px)] flex items-center justify-center p-6 text-center">
      <div className="glass-panel rounded-3xl p-8 sm:p-14 border border-white/20 shadow-2xl max-w-lg mx-auto">
        <div className="w-20 h-20 rounded-3xl bg-white/10 flex items-center justify-center mx-auto mb-6 text-amber-300 border border-white/20 shadow-inner">
          <CloudOff className="w-10 h-10" />
        </div>

        <span className="font-mono text-sm tracking-widest text-amber-300 font-bold uppercase">
          404 Error
        </span>

        <h1 className="font-serif text-3xl sm:text-4xl font-light text-white my-3">
          Lost in the Stratosphere
        </h1>

        <p className="text-xs sm:text-sm text-white/70 leading-relaxed mb-6">
          The atmospheric coordinates you navigated to do not exist in the troposphere. Return to safety under familiar skies.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider shadow-xl hover:from-amber-300 hover:to-amber-400 transition-all active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Return to Clear Skies</span>
        </Link>
      </div>
    </main>
  );
}
