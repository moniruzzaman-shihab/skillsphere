import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative mt-24">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-white dark:bg-[#0a0a0b]" />

      {/* Subtle Gradient Glow */}
      <div
        className="absolute inset-0 -z-10 bg-linear-to-tr 
        from-purple-500/5 via-transparent to-blue-500/5 
        dark:from-purple-500/10 dark:to-blue-500/10 blur-3xl"
      />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              
              <h2 className="text-xl font-semibold tracking-tight text-black dark:text-white">
                Contact Info
              </h2>
            </div>

            
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
             Social Links
            </h3>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">
             <li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="#">Facebook</a></li>
<li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="#">Instagram</a></li>
<li><a className="font-newsreader text-sm tracking-wide text-slate-500 dark:text-slate-400 hover:text-amber-600 transition-colors" href="#">Twitter</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-black dark:text-white mb-4">
              Terms & Conditions
            </h3>
          
          </div>

          {/* CTA Block */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-black dark:text-white">
              Privacy Policy
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn your desired course today.
            </p>

      
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        {/* Bottom */}
        <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>© {new Date().getFullYear()} SkillSphere. All rights reserved.</p>

        
        </div>
      </div>
    </footer>
  );
};

export default Footer;