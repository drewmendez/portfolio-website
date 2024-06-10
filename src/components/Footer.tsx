import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#2d2e32] py-10 text-white">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between">
          <a className="font-extrabold text-2xl" href="/">
            Drew.dev
          </a>

          <div className="flex gap-4 text-2xl">
            <a
              className="duration-300 hover:opacity-70"
              href="https://www.linkedin.com/in/andrewjeffersonmendez"
              target="_blank"
            >
              <FaLinkedin />
            </a>
            <a
              className="duration-300 hover:opacity-70"
              href="https://github.com/drewmendez"
              target="_blank"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        <p className="text-xs text-center mt-5 md:text-start">
          &copy; {new Date().getFullYear()} Andrew Mendez. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
