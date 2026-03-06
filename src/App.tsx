import React, { useState, useRef } from 'react';
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Linkedin, Award, BookOpen, Briefcase, GraduationCap, CheckCircle2, Globe, User, Download } from "lucide-react";

const GlassCard = ({ children, className = "", delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5, scale: 1.01, transition: { duration: 0.2 } }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={`bg-white/10 backdrop-blur-lg border border-white/20 hover:border-white/40 shadow-[0_8px_32px_0_rgba(31,38,135,0.15)] hover:shadow-[0_16px_48px_0_rgba(31,38,135,0.3)] rounded-2xl p-6 md:p-8 transition-colors ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePic(imageUrl);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 font-sans selection:bg-indigo-500/30 overflow-hidden relative">
      {/* Animated Background Gradients */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-indigo-600/30 blur-[120px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -100, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[40%] -right-[20%] w-[60vw] h-[60vw] rounded-full bg-emerald-600/20 blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 100, 0]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-[20%] left-[20%] w-[80vw] h-[80vw] rounded-full bg-violet-600/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 md:py-20 space-y-12 md:space-y-20">
        
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative group cursor-pointer"
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-emerald-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              onChange={handleImageUpload} 
              accept="image/*" 
              className="hidden" 
            />
            
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white/20 shadow-2xl z-10 overflow-hidden group">
              <img 
                src={profilePic || "/profile.jpg"} 
                alt="Chintan Mistri" 
                onError={(e) => {
                  if (!profilePic) {
                    (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop";
                  }
                }}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <User className="w-8 h-8 text-white mb-2" />
                <span className="text-white text-sm font-medium text-center px-2">Click to upload<br/>your photo</span>
              </div>
            </div>
          </motion.div>

          <div className="flex-1 text-center md:text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h1 className="font-heading text-4xl md:text-6xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70 mb-2">
                CHINTAN MISTRI
              </h1>
              <h2 className="font-heading text-xl md:text-2xl text-indigo-300 font-medium tracking-wide">
                Commerce Postgraduate Student
              </h2>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap justify-center md:justify-start gap-4 text-sm md:text-base text-slate-300"
            >
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="mailto:chintanmistry707@gmail.com" 
                className="flex items-center gap-2 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
              >
                <Mail className="w-4 h-4" /> chintanmistry707@gmail.com
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="tel:+917862962600" 
                className="flex items-center gap-2 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
              >
                <Phone className="w-4 h-4" /> +91 78629 62600
              </motion.a>
              <motion.span 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm cursor-default"
              >
                <MapPin className="w-4 h-4" /> Gandhinagar, Gujarat
              </motion.span>
              <motion.a 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/chintanmistri07" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-white transition-colors bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm"
              >
                <Linkedin className="w-4 h-4" /> LinkedIn
              </motion.a>
              <motion.span 
                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-sm cursor-default"
              >
                <Globe className="w-4 h-4" /> Indian
              </motion.span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="pt-4 flex justify-center md:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/cv.pdf"
                download="Chintan_Mistri_CV.pdf"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-emerald-500 hover:from-indigo-400 hover:to-emerald-400 text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-indigo-500/25 transition-all"
              >
                <Download className="w-5 h-5" /> Download CV
              </motion.a>
            </motion.div>
          </div>
        </header>

        {/* Professional Summary */}
        <GlassCard delay={0.2}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Briefcase className="w-6 h-6 text-indigo-400" />
            </div>
            <h3 className="font-heading text-2xl font-semibold">Professional Summary</h3>
          </div>
          <p className="text-slate-300 leading-relaxed mb-6 text-lg">
            Detail-oriented B.Com student with a strong foundation in Accounting, Auditing, and Office Administration.
          </p>
          <div className="space-y-4">
            <h4 className="text-white font-medium">What I bring to the table:</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span><strong className="text-white font-medium">Accounting:</strong> Tally ERP 9 / Prime, Journal Entries, and GST basics.</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                <span><strong className="text-white font-medium">Data Management:</strong> MS Excel, typing (English & Gujarati), and accurate data entry.</span>
              </li>
            </ul>
          </div>
        </GlassCard>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <GlassCard delay={0.3} className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-emerald-500/20 rounded-lg">
                <GraduationCap className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Education</h3>
            </div>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
              
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-emerald-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-bold text-white text-lg">Master of Commerce (M.Com)</h4>
                    <span className="text-emerald-400 text-sm font-medium">2027</span>
                  </div>
                  <div className="text-indigo-300 font-medium mb-2">Advanced Accounting & Auditing</div>
                  <div className="text-slate-400 text-sm mb-2">Navgujarat Commerce College, Gandhinagar</div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    Pursuing (Expected: 2027)
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-bold text-white text-lg">Bachelor of Commerce (B.Com)</h4>
                    <span className="text-indigo-400 text-sm font-medium">2025</span>
                  </div>
                  <div className="text-indigo-300 font-medium mb-2">Advanced Accounting & Auditing</div>
                  <div className="text-slate-400 text-sm mb-2">Shankersinh Vaghela Bapu Institute of Commerce, Gandhinagar</div>
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                    Completed
                  </div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-600 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-bold text-white text-lg">High Secondary (12th Grade)</h4>
                    <span className="text-slate-400 text-sm font-medium">2020 – 2022</span>
                  </div>
                  <div className="text-slate-400 text-sm">Sheth M B School</div>
                  <div className="text-slate-500 text-sm mt-1">Pethapur, Gandhinagar</div>
                </div>
              </div>

              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-slate-600 text-slate-900 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-slate-900 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-heading font-bold text-white text-lg">Secondary School (10th Grade)</h4>
                    <span className="text-slate-400 text-sm font-medium">2020</span>
                  </div>
                  <div className="text-slate-400 text-sm">Sheth M B School</div>
                  <div className="text-slate-500 text-sm mt-1">Pethapur, Gandhinagar</div>
                </div>
              </div>

            </div>
          </GlassCard>

          {/* Technical Skills */}
          <GlassCard delay={0.4}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-violet-500/20 rounded-lg">
                <BookOpen className="w-6 h-6 text-violet-400" />
              </div>
              <h3 className="font-heading text-2xl font-semibold">Technical Skills</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-indigo-300 font-medium mb-3 text-sm uppercase tracking-wider">Accounting Software</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default">Tally ERP 9 (Certified)</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all cursor-default">Tally Prime</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-indigo-300 font-medium mb-3 text-sm uppercase tracking-wider">Office Suite</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default">MS Excel (Data Entry, Formulas)</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default">MS Word</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all cursor-default">MS PowerPoint</span>
                </div>
              </div>

              <div>
                <h4 className="text-indigo-300 font-medium mb-3 text-sm uppercase tracking-wider">IT Skills</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-violet-500/20 hover:border-violet-500/50 transition-all cursor-default">Course on Computer Concepts (CCC)</span>
                </div>
              </div>

              <div>
                <h4 className="text-indigo-300 font-medium mb-3 text-sm uppercase tracking-wider">Languages</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-default">English</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-default">Hindi</span>
                  <span className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-sm hover:bg-amber-500/20 hover:border-amber-500/50 transition-all cursor-default">Gujarati</span>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Achievements & Certifications */}
          <div className="space-y-8">
            <GlassCard delay={0.5}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-heading text-2xl font-semibold">Achievements</h3>
              </div>
              <div className="p-4 rounded-xl border border-amber-500/20 bg-amber-500/5 hover:bg-amber-500/10 transition-colors">
                <h4 className="font-bold text-white text-lg mb-1">Top Scorer</h4>
                <p className="text-amber-200/80">Wonderbrine Quiz Competition (City Level)</p>
              </div>
            </GlassCard>

            <GlassCard delay={0.6}>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  <Award className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="font-heading text-2xl font-semibold">Certifications</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                  <span className="text-slate-300">Tally ERP 9 – Professional Certification</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0"></div>
                  <span className="text-slate-300">Course on Computer Concepts (CCC) – AICE INDIA</span>
                </li>
              </ul>
            </GlassCard>
          </div>
        </div>

        {/* Footer */}
        <motion.footer 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-slate-500 pt-8 pb-4"
        >
          <p>© {new Date().getFullYear()} Chintan Mistri. All rights reserved.</p>
        </motion.footer>
      </div>
    </div>
  );
}
