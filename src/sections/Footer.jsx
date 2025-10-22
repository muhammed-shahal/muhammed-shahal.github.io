import { mySocials } from "../constants/data";

const Footer = () => {
  return (
    <footer className="mt-16 flex flex-col items-center justify-center gap-4 pb-6 text-sm text-neutral-400">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />

      {/* Social Media Icons Centered */}
      <div className="flex gap-4">
        {mySocials.map((social, index) => (
          <a
            href={social.href}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="w-5 h-5 hover:opacity-80 transition-opacity"
            />
          </a>
        ))}
      </div>

      {/* Footer Text */}
      <p className="text-center">@ 2025 Musthafa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
