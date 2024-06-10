import Image from "next/image";
import profile from "../../public/me.png";

export default function About() {
  return (
    <section className="bg-[#e4e5f1] py-16" id="about">
      <div className="max-w-[1200px] mx-auto px-6 md:px-16">
        <div className="flex justify-center">
          <h2 className="font-bold text-[#2d2e32] text-2xl mb-10 inline-block border-b-2 pb-2 border-slate-400">
            About Me
          </h2>
        </div>
        <div className="flex flex-col items-center justify-between gap-10 md:flex-row lg:gap-20">
          <Image
            className="rounded-3xl max-w-[400px] w-full shadow-lg flex-1"
            src={profile}
            quality={100}
            alt="me"
          />
          <div className="text-[#2d2e32] flex-1">
            <h3 className="text-3xl font-bold mb-4">Hello,</h3>
            <p className="text-slate-600">
              I&apos;m Andrew Jefferson Mendez, a recent graduate from
              Catanduanes State University, holding a Bachelor's degree in
              Computer Engineering. I am passionate about front-end development,
              focusing on crafting responsive and interactive web applications.
              I also have a strong interest in learning new technologies to
              expand my knowledge and skills. My aspiration is to become a
              successful developer and create applications that benefit
              communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
