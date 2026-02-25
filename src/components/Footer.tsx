import { personalInfo } from '../data';

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <p className="text-slate-300 text-sm">
          &copy; {year} {personalInfo.name}. All rights reserved.
        </p>
        <p className="text-slate-400 text-xs mt-2">
          Designed & Built with React, Tailwind CSS, and Vercel.
        </p>
      </div>
    </footer>
  );
};
