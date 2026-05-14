import { Mail, Github, Linkedin, FileText } from "lucide-react";

export const Contact = () => (
  <footer id="contact" className="w-full bg-[#0a0a0a] pt-12 pb-8 text-white/90">
    <div className="mx-auto max-w-7xl px-6 md:px-10">
      
      {/* 12-COLUMN GRID SYSTEM */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        
        {/* LEFT: Section Label (3 cols) */}
<div className="md:col-span-3">
  <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.3em] opacity-40">
    {/* Number removed here to keep it clean */}
    <span className="h-px w-10 bg-current opacity-30" />
    <span>Contact</span>
  </div>
</div>

        {/* RIGHT: Content (9 cols) */}
        <div className="md:col-span-9">
          
          {/* FLEX CONTAINER FOR THREE CATEGORIES */}
          <div className="flex flex-row items-start justify-between w-full">
            
            {/* 1. EMAIL - Left-aligned with text above */}
            <div className="space-y-4">
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-40">Email</p>
              <a href="mailto:yomalawarjana@gmail.com" className="group block">
                <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <Mail className="size-4 group-hover:text-black" />
                </div>
              </a>
            </div>

            {/* 2. SOCIALS - Centered in the 9-column block */}
            <div className="space-y-4 flex flex-col items-center">
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 text-center">Socials</p>
              <div className="flex gap-4"> 
                <a href="https://www.linkedin.com/in/yomal-moderage-258994180/" className="group block">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <Linkedin className="size-4 group-hover:text-black" />
                  </div>
                </a>
                <a href="https://github.com/yomal42" className="group block">
                  <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                    <Github className="size-4 group-hover:text-black" />
                  </div>
                </a>
              </div>
            </div>

            {/* 3. RESUME - Aligned with the Theme Toggle above */}
            <div className="space-y-4 flex flex-col items-end">
              <p className="font-mono text-[9px] uppercase tracking-widest opacity-40 text-right">Resume</p>
              <a href="#" className="group block">
                <div className="flex h-11 w-11 items-center justify-center border border-white/10 group-hover:border-accent group-hover:bg-accent transition-all duration-300">
                  <FileText className="size-4 group-hover:text-black" />
                </div>
              </a>
            </div>

          </div>

          {/* BOTTOM BAR */}
          <div className="flex justify-between items-center border-t border-white/5 pt-8 mt-16">
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-30">
              © 2026 YOMALAM
            </p>
            <p className="font-mono text-[8px] uppercase tracking-widest opacity-30">
              CYBER SECURITY ENGINEER
            </p>
          </div>
        </div>

      </div>
    </div>
  </footer>
);