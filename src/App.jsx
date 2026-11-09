import React, { useState, useEffect } from 'react';
import { 
  Clapperboard, Sparkles, Video, Image as ImageIcon, FileText, 
  Settings, Download, Play, CheckCircle, RefreshCw, Wand2, Layers, Cpu, ShieldCheck
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('studio');
  const [apiKey, setApiKey] = useState(import.meta.env.VITE_GOOGLE_API_KEY || '');
  const [topic, setTopic] = useState('');
  const [script, setScript] = useState('');
  const [loading, setLoading] = useState(false);
  const [tutorialStep, setTutorialStep] = useState(1);

  const handleGenerateScript = () => {
    if (!topic) return;
    setLoading(true);
    setTimeout(() => {
      setScript(`[SCENE 1: INTRODUCTION]\nVisual: Close up wajah host dengan latar studio neon futuristik.\nAudio/Voiceover: "Halo semuanya! Hari ini kita akan membahas ${topic} menggunakan teknologi AI tercanggih."\n\n[SCENE 2: MAIN CONTENT]\nVisual: Tampilan layar animasi diagram alur otomatis.\nAudio/Voiceover: "Proses ini memangkas waktu produksi hingga 90% dengan hasil sinematik beresolusi tinggi."`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/60 backdrop-blur sticky top-0 z-50 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gradient-to-tr from-violet-600 to-indigo-500 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
            <Clapperboard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-extrabold tracking-tight bg-gradient-to-r from-white via-indigo-200 to-violet-400 bg-clip-text text-transparent">
              OG AI DIRECTOR PRO
            </h1>
            <p className="text-xs text-slate-400">Automated Video Content & Character Pipeline</p>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <button 
            onClick={() => setActiveTab('studio')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${activeTab === 'studio' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Studio
          </button>
          <button 
            onClick={() => setActiveTab('tutorial')}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${activeTab === 'tutorial' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30' : 'text-slate-400 hover:text-white hover:bg-slate-800'}`}
          >
            Tutorial Interaktif
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        {activeTab === 'studio' ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Control Panel */}
            <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur space-y-6">
              <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                <Wand2 className="w-5 h-5" />
                <h2>Generator Konten AI</h2>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Topik / Ide Video</label>
                  <input 
                    type="text" 
                    value={topic}
                    onChange={(e) => setTopic(e.target.value)}
                    placeholder="Contoh: Masa Depan Teknologi AI 2026..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Google Gemini API Key</label>
                  <input 
                    type="password" 
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Masukkan API Key..."
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-indigo-500 transition"
                  />
                </div>

                <button 
                  onClick={handleGenerateScript}
                  disabled={loading || !topic}
                  className="w-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold py-3 rounded-xl shadow-lg shadow-indigo-600/25 flex items-center justify-center space-x-2 transition disabled:opacity-50"
                >
                  {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                  <span>{loading ? 'Memproses Skrip...' : 'Buat Skrip & Adegan'}</span>
                </button>
              </div>
            </div>

            {/* Right Output & Preview Area */}
            <div className="lg:col-span-2 bg-slate-900/40 border border-slate-800/80 rounded-2xl p-6 backdrop-blur flex flex-col">
              <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-indigo-400 font-bold">
                  <FileText className="w-5 h-5" />
                  <h2>Hasil Naskah & Storyboard</h2>
                </div>
                <button className="flex items-center space-x-1.5 bg-slate-800 hover:bg-slate-700 px-3 py-1.5 rounded-lg text-xs font-semibold transition">
                  <Download className="w-4 h-4" />
                  <span>Ekspor Proyek</span>
                </button>
              </div>

              <div className="flex-1 bg-slate-950/70 border border-slate-800/60 rounded-xl p-4 font-mono text-xs text-slate-300 whitespace-pre-wrap overflow-y-auto max-h-[500px]">
                {script || '// Skrip video akan muncul di sini setelah Anda memasukkan topik dan menekan tombol buat.'}
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-slate-900/40 border border-slate-800/80 rounded-2xl p-8 backdrop-blur max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">Tutorial Interaktif OG AI Director Pro</h2>
              <p className="text-sm text-slate-400">Ikuti langkah mudah di bawah ini untuk menguasai alur kerja pembuatan konten otomatis.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className={`p-4 rounded-xl border transition ${tutorialStep === 1 ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 bg-slate-950/40'}`}>
                <div className="font-bold text-indigo-400 mb-1">Langkah 1</div>
                <div className="text-xs text-slate-300">Masukkan Ide/Topik video dan konfigurasi API Key Gemini.</div>
              </div>
              <div className={`p-4 rounded-xl border transition ${tutorialStep === 2 ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 bg-slate-950/40'}`}>
                <div className="font-bold text-indigo-400 mb-1">Langkah 2</div>
                <div className="text-xs text-slate-300">Generate skrip otomatis dan tinjau storyboard adegan.</div>
              </div>
              <div className={`p-4 rounded-xl border transition ${tutorialStep === 3 ? 'border-indigo-500 bg-indigo-500/10' : 'border-slate-800 bg-slate-950/40'}`}>
                <div className="font-bold text-indigo-400 mb-1">Langkah 3</div>
                <div className="text-xs text-slate-300">Ekspor hasil akhir dan publikasikan video Anda.</div>
              </div>
            </div>

            <div className="flex justify-between pt-4">
              <button 
                onClick={() => setTutorialStep(prev => Math.max(1, prev - 1))}
                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg text-sm font-semibold transition"
              >
                Sebelumnya
              </button>
              <button 
                onClick={() => setTutorialStep(prev => Math.min(3, prev + 1))}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg text-sm font-semibold transition"
              >
                Selanjutnya
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
