import Image from "next/image";
import profile from "../../public/me.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const icons = [
  "html",
  "css",
  "javascript",
  "typescript",
  "react",
  "next",
  "tailwind",
  "sass",
];

export default function Hero() {
  return (
    <section className="min-h-screen pt-[80px] md:grid md:place-items-center bg-[url('/wallpaper.svg')] bg-cover bg-center">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16 py-16">
        <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:justify-between">
          <Image
            className="rounded-full border-4 border-[#2d2e32] max-w-[300px] md:order-2 lg:max-w-[400px]"
            src={profile}
            quality={100}
            alt="Me"
          />
          <div className="text-center text-[#2d2e32] md:text-start">
            <p className="text-lg text-slate-600">Hello there,</p>
            <h1 className="font-extrabold text-3xl lg:text-5xl md:text-4xl md:mt-2">
              I'm Andrew Jefferson Mendez
            </h1>
            <p className="text-lg text-slate-600">Front-end Developer.</p>
            <div className="flex gap-4 text-3xl justify-center mt-2 md:justify-start md:mt-5">
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
        </div>
        <div className="flex flex-col items-center text-lg font-bold text-[#2d2e32] md:flex-row mt-16">
          <p className="mr-0 md:mr-6 border-b-2 border-slate-400 mb-8 pb-2 md:border-b-0 md:pb-0 md:mb-0 md:border-r-2 md:pr-5">
            Skills
          </p>
          <div className="grid gap-5 grid-cols-4 md:grid-flow-col">
            {icons.map((icon) => (
              <IconCard key={icon} icon={icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IconCard({ icon }: { icon: string }) {
  return (
    <img src={`https://skillicons.dev/icons?i=${icon}`} alt={icon} width={55} />
  );
}
