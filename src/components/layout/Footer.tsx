import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-[var(--border-default)] bg-[var(--bg-footer)] py-12 px-6 md:px-12 mt-24">
      <div className="max-w-[var(--container-max)] mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Logo */}
        <div>
          <span className="font-bold text-[var(--text-primary)] text-2xl tracking-tight">SMART.INC</span>
        </div>

        {/* Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">How it works</a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">Programs</a>
          <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] text-sm transition-colors">The Team</a>
        </div>

        {/* Socials & Copyright */}
        <div className="flex flex-col items-start md:items-end gap-4">
          <div className="flex gap-4">
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="#" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
          </div>
          <p className="text-[var(--text-muted)] text-xs">© 2026 SMART.INC All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
