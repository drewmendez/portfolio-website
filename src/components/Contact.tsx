import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Contact() {
  return (
    <section className="py-10" id="contact">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="flex justify-center">
          <h2 className="font-bold text-[#2d2e32] text-2xl mb-10 inline-block border-b-2 pb-2 border-slate-400">
            Contact Me
          </h2>
        </div>
        <div className="flex flex-col justify-center gap-7 md:flex-row md:gap-20">
          <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
            <div className="bg-slate-300 rounded-full p-3 text-2xl shadow-inner text-[#2d2e32]">
              <FaLinkedin />
            </div>
            <div className="text-center md:text-start">
              <p className="font-bold mb-1 text-[#2d2e32]">LinkedIn</p>
              <a
                className="text-slate-500 duration-300 hover:opacity-70"
                href="https://www.linkedin.com/in/andrewjeffersonmendez"
                target="_blank"
              >
                Andrew Jefferson Mendez
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 md:flex-row">
            <div className="bg-slate-300 rounded-full p-3 text-2xl shadow-inner text-[#2d2e32]">
              <SiGmail />
            </div>
            <div className="text-center md:text-start">
              <p className="font-bold mb-1 text-[#2d2e32]">Gmail</p>
              <a
                className="text-slate-500 duration-300 hover:opacity-70"
                href="mailto:andrewjeff.mendez@gmail.com"
              >
                andrewjeff.mendez@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
