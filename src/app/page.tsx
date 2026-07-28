"use client";

import { useState } from "react";
import Image from "next/image";
import emptypfp from "@/assets/emptyprofilepic.svg";
import pfp from "@/assets/pfp.jpg";
import bow from "@/assets/bow.svg";
import code from "@/assets/code.svg";
import githublogo from "@/assets/github-logo.svg";
import linkedinlogo from "@/assets/linkedinlogo.svg";
import SectionNav from "@/components/sectionnav";

const websites = [
  {
    name: "Quant Club",
    href: "https://quant.ucrhighlanders.org/"
  },
  {
    name: "Vietnamese Student Association",
    href: "https://vsa.ucrhighlanders.org/"
  },
  {
    name: "redefineD",
    href: "https://redefined.ucrhighlanders.org/"
  },
  {
    name: "Biomedical Engineering Society",
    href: "https://bmesucr.weebly.com/"
  }
];

const projects = [
  {
    title: "ACM Spark",
    description: "Collaborated with a team for front-end development of websites for student organizations using HTML, TypeScript, Next.js, and Node.js"
  },
  {
    title: "ACM Create",
    description: "Designed website layouts and prototypes using Figma in a collaborative design team"
  },
  {
    title: "ACM Forge",
    description: "Served as the Fullstack Software Engineer on a collaborative engineering team to develop a surveillance camera and robotic arm using Roboflow and Python"
  },
  {
    title: "3D Game",
    description: "Built and coded a working 3D game using Unity and C#"
  },
  {
    title: "UCR Bearhack Project",
    description: "Developed a smart medical waste sorting system using computer vision, robotics, and Python to classify and seperate waste materials"
  }
]

const Home = () => {
  const [projectIndex, setProjectIndex] = useState(0);

  function showPreviousProject() {
    setProjectIndex((currentIndex) =>
    currentIndex === 0 ? projects.length - 1 : currentIndex - 1,
    );
  }

  function showNextProject() {
    setProjectIndex((currentIndex) =>
      currentIndex === projects.length - 1? 0 : currentIndex + 1,
    );
  }

  const currentProject = projects[projectIndex];


  return (
    <main className="min-h-screen overflow-hidden bg-[linear-gradient(to_bottom,#FFD1DF_33%,#FFFFFF_100%)] text-black">
      <SectionNav></SectionNav>
      <div className="mx-auto w-full max-w-5xl pt-28">
        {/* Profile header */}
        <header 
          id="kaesha"
          className="flex flex-col items-center px-6 pb-6 pt-8"
          >
          <div className="h-28 w-28 overflow-hidden rounded-full bg-lightpink shadow-[0_9px_10px_rgba(0,0,0,0.22)] sm:h-32 sm:w-32">
            <Image
              src={pfp}
              alt="pfp"
              className="h-full w-full object-cover object-top"
              priority
            />
          </div>

          <h1 className="mt-5 text-center text-3xl font-bold sm:text-4xl">
            Kaesha Inocencio
          </h1>
        </header>

        <div className="h-1 w-full bg-white" />

        <div className="space-y-16 px-4 pb-5 pt-8 sm:px-8">
          {/* ABOUT ME */}
          <section 
          id="about"
          className="relative rounded-[30px] border border-white bg-lightpink px-6 pb-12 pt-6 sm:px-12">
            <h2 className="section-title title-on-pink text-center text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
              About Me
            </h2>

            <div className="-mx-6 mt-4 border-t-2 border-dashed border-black/65 sm:-mx-12" />

            <p className="mx-auto mt-6 max-w-3xl text-center text-lg font-semibold leading-snug sm:text-xl">
              Hi, I&apos;m Kaesha Inocencio! I am a Computer Science with Business
              Applications student at UC Riverside. I am interested in software
              engineering, web development, UI / UX design, and embedded systems.
            </p>

            <Image
              src={bow}
              alt=""
              aria-hidden="true"
              className="absolute -bottom-8 right-1 h-20 w-20 object-contain sm:right-6 sm:h-24 sm:w-24"
            />
          </section>

          {/* WEBSITES */}
          <section 
          id="websites"
          className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
            <div className="relative rounded-[30px] bg-white px-7 py-6 text-center shadow-[0_8px_0_rgba(232,153,181,0.25)]">
              <h2 className="section-title title-on-white text-2xl font-bold uppercase tracking-[0.08em]">
                Websites I Coded
              </h2>

              <ul className="mt-4 list-inside list-disc space-y-1 text-lg font-semibold">
                {websites.map((website) => (
                  <li key={website.name}>
                    <a
                      href={website.href}
                      target={
                        website.href === "#" ? undefined : "_blank"
                      }
                      rel={
                        website.href === "#"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="underline decoration-2 underline-offset-2 hover:text-lightpink hover:scale-105"
                    >
                      {website.name}
                    </a>
                  </li>
                ))}
              </ul>

              <Image
                src={code}
                alt=""
                aria-hidden="true"
                className="absolute -bottom-6 right-2 h-14 w-14 object-contain"
              />
            </div>

            <div className="flex flex-col items-center gap-7">
              <div className="speech-bubble relative max-w-xs rounded-[50%] bg-lightpink px-12 py-7 text-center shadow-[0_7px_8px_rgba(0,0,0,0.18)]">
                <p className="text-lg font-bold leading-tight">
                  Click on a bullet point to view the website!
                </p>
              </div>

              <div className="w-full border-2 border-dashed border-black/75 bg-white/50 px-4 py-3 text-center">
                <p className="text-base font-semibold leading-snug">
                  I coded these websites as a part of a team in a program called ACM Spark. I designed the redefineD website!
                </p>
              </div>
            </div>
          </section>

          {/* CLUBS / PROJECTS */}
          <section 
          id="projects"
          className="scroll-mt-32 flex min-h-[70vh] flex-col justify-center rounded-4xl bg-lightpink px-3 py-10 pb-6 pt-5 sm:px-6 sm:py-14">
            <h2 className="section-title title-on-pink text-center text-2xl font-bold uppercase tracking-[0.12em] sm:text-3xl">
              Clubs / Projects
            </h2>

            <div className="mt-4 grid grid-cols-[42px_1fr_42px] items-center gap-2 sm:grid-cols-[52px_1fr_52px] sm:gap-4">
              <button
                type="button"
                onClick={showPreviousProject}
                aria-label="Show previous project"
                className="flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-white text-2xl font-bold shadow-sm transition hover:scale-105 active:scale-95 sm:h-12 sm:w-12"
              >
                ‹
              </button>

              <article className="grid min-h-48 overflow-hidden rounded-[30px] bg-white sm:grid-cols-[0.8fr_1.2fr]">
                <div className="flex flex-col items-center justify-center px-5 py-7 text-center">

                  <h3 className="mt-2 text-xl font-bold sm:text-2xl">
                    {currentProject.title}
                  </h3>
                </div>

                <div className="border-t-2 border-dashed border-black/70 px-5 py-7 sm:border-l-2 sm:border-t-0">
                  <p className="text-base font-semibold leading-snug sm:text-lg">
                    • {currentProject.description}
                  </p>
                </div>
              </article>

              <button
                type="button"
                onClick={showNextProject}
                aria-label="Show next project"
                className="flex h-10 w-10 items-center justify-center justify-self-center rounded-full bg-white text-2xl font-bold shadow-sm transition hover:scale-105 active:scale-95 sm:h-12 sm:w-12"
              >
                ›
              </button>
            </div>

            <div className="mt-4 flex justify-center gap-2">
              {projects.map((project, index) => (
                <button
                  key={project.title}
                  type="button"
                  onClick={() => setProjectIndex(index)}
                  aria-label={`Show ${project.title}`}
                  className={`h-2.5 rounded-full transition-all ${
                    index === projectIndex
                      ? "w-8 bg-black"
                      : "w-2.5 bg-white"
                  }`}
                />
              ))}
            </div>
          </section>

          {/*LINKS */}
          <footer 
          id="links"
          className="scroll-mt-32 flex flex-col gap-3 rounded-full bg-lightpink px-4 py-2 sm:flex-row sm:justify-center">
            <a
              href="https://github.com/vinvyl"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 rounded-full bg-white px-6 py-2 text-lg font-bold uppercase tracking-wide transition hover:-translate-y-0.5 sm:max-w-72"
            >
              <Image
                src={githublogo}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain"
              />

              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/kaesha-inocencio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-3 rounded-full bg-white px-6 py-2 text-lg font-bold uppercase tracking-wide transition hover:-translate-y-0.5 sm:max-w-72"
            >
              <Image
                src={linkedinlogo}
                alt=""
                aria-hidden="true"
                className="h-7 w-7 object-contain"
              />

              LinkedIn
            </a>
          </footer>
        </div>
      </div>
    </main>
  );

};

export default Home;
