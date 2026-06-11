import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import resumeAsset from "@/assets/resume.pdf.asset.json";
import {
  Github,
  Linkedin,
  Mail,
  Download,
  ArrowRight,
  Moon,
  Sun,
  Code2,
  Database,
  Cloud,
  Cpu,
  GraduationCap,
  Trophy,
  Briefcase,
  ExternalLink,
  Sparkles,
  Terminal,
  Zap,
  Rocket,
  Star,
  TrendingUp,
} from "lucide-react";
import {
  BadgeCheck,
  ShieldCheck,
  Phone,
  MapPin,
  Copy,
  Check,
  Send,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Deepa Jagan — Associate Software Developer" },
      {
        name: "description",
        content:
          "Portfolio of Deepa Jagan — B.Tech IT student at Sri Shanmugha College, React & full-stack developer, competitive programmer (LeetCode 750+, Codeforces 250+).",
      },
      { property: "og:title", content: "Deepa Jagan — Software Developer Portfolio" },
      {
        property: "og:description",
        content:
          "React, Spring Boot, Django developer. 750+ LeetCode solved. Multiple national-level coding competition winner.",
      },
    ],
  }),
  component: Index,
});

const NAME = "Deepa Jagan";

const skills = [
  {
    title: "Programming Languages",
    icon: Code2,
    items: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "C / C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Frontend & Full Stack",
    icon: Sparkles,
    items: [
      { name: "HTML5 / CSS3", level: 90 },
      { name: "React.js", level: 85 },
      { name: "WordPress", level: 80 },
      { name: "Django", level: 75 },
      { name: "Spring Boot", level: 70 },
    ],
  },
  {
    title: "Databases & Tools",
    icon: Database,
    items: [
      { name: "MySQL", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Maven / Gradle", level: 70 },
    ],
  },
  {
    title: "Concepts & Soft Skills",
    icon: Trophy,
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "DSA", level: 85 },
      { name: "OOP", level: 85 },
      { name: "System Design", level: 70 },
    ],
  },
];

const projects = [
  {
    title: "Rice-Billing-App",
    desc: "Full-stack billing application for a rice retailer with invoice generation, inventory tracking, and order history — React frontend with a Spring Boot REST API and MySQL store.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/deepajaganj12/SmartPOS-Billing-and-Inventory-Management-System",
    demo: "https://rice-billing-app-ten.vercel.app/",
    image: "/images/Rice-Billing-App.jpeg",
  },
  {
    title: "Amazon Clone (Frontend)",
    desc: "A pixel-perfect Amazon homepage clone built with vanilla HTML, CSS, and JavaScript — featuring a responsive product grid, navigation bar, and hero banner.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    demo: "#",
    image: "/images/Amazon Clone.jpeg",
  },
  {
    title: "Full Stack Blog Website",
    desc: "A feature-rich blog platform with authentication, post management, comments, and tag filtering — built with Django and MySQL.",
    tech: ["Python", "Django", "MySQL"],
    github: "https://github.com/deepajaganj12/Blog-App",
    demo: "#",
    image: "/images/Full Stack Blog Website.jpeg",
  },
  {
    title: "Rock-paper-scissors",
    desc: "Interactive browser game with score persistence via LocalStorage and animated UI states for each round.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    github: "https://github.com/deepajaganj12/Rock-paper-scissors-game",
    demo: "https://deepajaganj12.github.io/Rock-paper-scissors-game/",
    image: "/images/Rock-paper-scissors.jpeg",
  },
];


const achievements = [
  "55th Place — Shaastra 2026 Reverse Coding X, IIT Madras (Jan 2026)",
  "1st Prize — Infovista 25 Symposium, Sri Sai Ram Engineering College (2025)",
  "1st Prize — Reverse Coding, Rathinam Technical Campus (Mar 2025)",
  "1st Prize — Code Debugging, R P Sarathy College of Engineering (2025)",
  "1st Prize — Throne of Code, Government Mahila Engineering College Ajmer (2025)",
  "3rd Prize — Reverse Coding, KSR College of Engineering (2025)",
];

function Index() {
  const [dark, setDark] = useState(true);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  // mouse spotlight tracking
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      el.style.setProperty("--mx", `${e.clientX}px`);
      el.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  // scroll reveal
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("in");
        });
      },
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={wrapRef}
      className="relative min-h-screen overflow-x-clip bg-background text-foreground"
    >
      {/* global animated backdrop */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 grid-bg opacity-50" />
        <div className="absolute inset-0 spotlight" />
        <div className="absolute -top-40 -left-40 h-[40rem] w-[40rem] rounded-full bg-primary/15 blur-[120px] animate-float" />
        <div
          className="absolute -bottom-40 -right-40 h-[40rem] w-[40rem] rounded-full bg-accent/15 blur-[120px] animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>
      <Nav dark={dark} setDark={setDark} />
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <CompetitiveProgramming />
      <Projects />
      <Experience />
      <Achievements />
      <Education />
      <Contact />

    </div>
  );
}

function Nav({ dark, setDark }: { dark: boolean; setDark: (v: boolean) => void }) {
  const links = [
    ["About", "#about"],
    ["Skills", "#skills"],
    ["CP", "#competitive"],
    ["Projects", "#projects"],
    ["Experience", "#experience"],
    ["Awards", "#achievements"],
    ["Education", "#education"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2 font-mono text-sm font-bold">
          <span className="relative flex h-7 w-7 items-center justify-center rounded-md bg-gradient-primary text-primary-foreground shadow-glow">
            <Terminal className="h-3.5 w-3.5" />
            <span className="absolute inset-0 rounded-md animate-pulse-ring border border-primary/40" />
          </span>
          <span className="text-gradient">Deepa.dev</span>
        </a>
        <ul className="hidden gap-1 text-sm md:flex">
          {links.map(([l, h]) => (
            <li key={h}>
              <a
                href={h}
                className="group relative rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                <span className="relative z-10">{l}</span>
                <span className="absolute inset-0 scale-90 rounded-full bg-card opacity-0 transition-all group-hover:scale-100 group-hover:opacity-100" />
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5 sm:inline-block"
          >
            Hire me
          </a>
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="relative overflow-hidden rounded-full border border-border bg-card/60 p-2 transition-colors hover:border-primary"
          >
            {dark ? <Sun className="h-4 w-4 text-primary" /> : <Moon className="h-4 w-4 text-primary" />}
          </button>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const roles = [
    "Associate Software Developer",
    "React Front-End Developer",
    "Full-Stack Builder",
    "Competitive Programmer",
  ];
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setIdx((idx + 1) % roles.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, idx]);

  return (
    <section
      id="top"
      className="relative overflow-hidden px-6 pt-20 pb-32 md:pt-28 md:pb-40"
    >
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.3fr_1fr]">
        <div className="animate-fade-up">
          <p className="mb-3 font-mono text-sm text-primary">$ whoami</p>
          <h1 className="text-5xl font-black tracking-tight md:text-7xl lg:text-8xl">
            <span className="block animate-glitch">Hi, I'm</span>
            <span className="block shimmer-text">{NAME}</span>
          </h1>
          <div className="mt-6 flex items-center gap-3 font-mono text-base md:text-xl">
            <span className="text-primary">{">"}</span>
            <span className="text-foreground">{text}</span>
            <span className="inline-block h-5 w-[2px] bg-primary animate-blink" />
          </div>
          <p className="mt-7 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
            B.Tech Information Technology student at <span className="text-foreground">Sri Shanmugha College of Engineering</span>.
            I specialize in <span className="text-foreground">React</span>, front-end optimization, and clean
            <span className="text-foreground"> MVC</span> frameworks — and compete in algorithmic coding
            symposia and national-level hackathons.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
            >
              <Rocket className="h-4 w-4" />
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={resumeAsset.url}
              download="Deepa-Jagan-Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:border-primary hover:text-primary"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>
          <div className="mt-10 flex gap-5 text-muted-foreground">
            {[
              { Icon: Github, href: "https://github.com/deepajaganj12" },
              { Icon: Linkedin, href: "https://www.linkedin.com/in/deepa-jagan-1a8104294/" },
              { Icon: Mail, href: "mailto:deepajaganj.13@gmail.com" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="transition-all hover:-translate-y-1 hover:text-primary"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>
        <HeroOrb />
      </div>
    </section>
  );
}

function HeroOrb() {
  const icons = [Code2, Database, Cloud, Cpu, Sparkles, Zap];
  return (
    <div className="relative mx-auto hidden h-[360px] w-[360px] items-center justify-center md:flex">
      <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-20 blur-3xl" />
      <div className="absolute h-72 w-72 animate-spin-slow rounded-full border border-dashed border-primary/30" />
      <div
        className="absolute h-56 w-56 animate-spin-slow rounded-full border border-dashed border-accent/30"
        style={{ animationDirection: "reverse", animationDuration: "12s" }}
      />
      {icons.map((Icon, i) => (
        <div
          key={i}
          className="absolute left-1/2 top-1/2 -ml-5 -mt-5"
          style={{
            animation: `orbit ${16 + i * 2}s linear infinite`,
            animationDelay: `${-i * 2}s`,
          }}
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card/80 text-primary shadow-card backdrop-blur">
            <Icon className="h-4 w-4" />
          </div>
        </div>
      ))}
      <div className="relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
        <Terminal className="h-12 w-12" />
      </div>
    </div>
  );
}

function Marquee() {
  const items = [
    "React", "JavaScript", "Java", "C++", "Python", "Spring Boot",
    "Django", "MySQL", "HTML5", "CSS3", "Git", "GitHub",
    "WordPress", "DSA", "Problem Solving", "LeetCode 750+", "Codeforces 250+",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative my-4 overflow-hidden border-y border-border/60 bg-card/30 py-5 backdrop-blur">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap font-mono text-sm">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-3 text-muted-foreground">
            <Star className="h-3 w-3 text-primary" />
            <span className="transition-colors hover:text-foreground">{t}</span>
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
    </div>
  );
}

function Section({
  id,
  eyebrow,
  title,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  const num = SECTION_ORDER.indexOf(id);
  const label = num >= 0 ? String(num + 1).padStart(2, "0") : "00";
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
      <SectionHeading num={label} eyebrow={eyebrow} title={title} />
      <div className="reveal">{children}</div>
    </section>
  );
}

const SECTION_ORDER = [
  "about",
  "skills",
  "competitive",
  "projects",
  "experience",
  "achievements",
  "education",
  "contact",
];

function SectionHeading({
  num,
  eyebrow,
  title,
}: {
  num: string;
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="reveal mb-12 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-card/70 font-mono text-sm font-bold text-primary shadow-glow backdrop-blur">
          <span className="absolute inset-0 rounded-xl bg-gradient-primary opacity-10" />
          <span className="absolute inset-0 animate-pulse-ring rounded-xl border border-primary/30" />
          {num}
        </span>
        <div className="flex flex-1 items-center gap-3">
          <p className="flex items-center gap-2 font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary">
            <span className="h-px w-8 bg-gradient-to-r from-primary to-transparent" />
            {eyebrow}
          </p>
          <span className="h-px flex-1 bg-gradient-to-r from-border via-border to-transparent" />
        </div>
      </div>
      <h2 className="relative inline-block pl-16 text-3xl font-black tracking-tight md:text-5xl">
        <span className="shimmer-text">{title}</span>
        <span className="absolute -bottom-2 left-16 h-1 w-24 rounded-full bg-gradient-primary" />
      </h2>
    </div>
  );
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="B.Tech IT student, builder & competitive coder.">
      <div className="grid gap-8 md:grid-cols-3">
        <p className="text-base leading-relaxed text-muted-foreground md:col-span-2 md:text-lg">
          I'm <span className="text-foreground">Deepa Jagan</span>, a B.Tech Information Technology student at
          Sri Shanmugha College of Engineering & Technology (CGPA 8.88). I work as a freelance
          full-stack developer and previously interned at StartNet Ventures, shipping production
          React UIs and Django/Spring Boot backends. Outside of work I compete in algorithmic coding
          symposia — 750+ problems on LeetCode, 250+ on Codeforces, and multiple national-level wins.
        </p>
        <div className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur transition-transform hover:-translate-y-1">
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-primary/20 blur-3xl transition-opacity group-hover:opacity-80" />
          <h3 className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary">
            <Zap className="h-3.5 w-3.5" /> Currently exploring
          </h3>
          <ul className="space-y-2.5 text-sm">
            {[
              "Advanced React patterns & performance",
              "Spring Boot microservices",
              "System design fundamentals",
              "Competitive programming (Codeforces Div 2)",
            ].map((x) => (
              <li key={x} className="flex items-center gap-2 text-muted-foreground">
                <span className="h-1 w-1 rounded-full bg-primary" /> {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills & technologies.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((cat) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-accent/0 opacity-0 transition-opacity duration-500 group-hover:from-primary/10 group-hover:to-accent/10 group-hover:opacity-100" />
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-lg bg-gradient-primary p-2 text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-sm font-semibold">{cat.title}</h3>
              </div>
              <ul className="space-y-3">
                {cat.items.map((s) => (
                  <li key={s.name}>
                    <div className="mb-1 flex justify-between text-xs font-mono">
                      <span>{s.name}</span>
                      <span className="text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="relative h-1.5 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full animate-grow-bar rounded-full bg-gradient-primary"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects.">
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.title}
            className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-glow"
          >
            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/30" />
            <div className="relative mb-5 flex h-48 items-center justify-center overflow-hidden rounded-xl border border-border bg-gradient-hero">
              {p.image ? (
                <img
                  src={p.image}
                  alt={p.title}
                  className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <>
                  <div className="absolute inset-0 grid-bg opacity-40" />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Briefcase className="h-7 w-7" />
                  </div>
                </>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent" />
              <span className="absolute left-3 top-3 rounded-full bg-background/60 px-2.5 py-0.5 font-mono text-[10px] tracking-widest text-muted-foreground backdrop-blur-sm">
                0{i + 1} / 0{projects.length}
              </span>
            </div>
            <h3 className="text-lg font-bold transition-colors group-hover:text-primary">
              {p.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex gap-3 text-sm">
              <a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
              >
                <Github className="h-4 w-4" /> Code
              </a>
              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-4 w-4" /> Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Achievements() {
  const parseRank = (a: string) => {
    const m = a.match(/^(\d+)(st|nd|rd|th)\s*(Prize|Place)?/i);
    if (!m) return { rank: "★", tone: "from-primary to-accent" };
    const n = parseInt(m[1]);
    if (n === 1) return { rank: "1st", tone: "from-yellow-400 to-amber-600" };
    if (n === 2) return { rank: "2nd", tone: "from-slate-300 to-slate-500" };
    if (n === 3) return { rank: "3rd", tone: "from-orange-400 to-amber-700" };
    return { rank: `${n}`, tone: "from-primary to-accent" };
  };
  return (
    <Section id="achievements" eyebrow="Awards & Recognition" title="Wins, prizes & podiums.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {achievements.map((a, i) => {
          const { rank, tone } = parseRank(a);
          return (
            <div
              key={a}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card/70 p-7 shadow-card backdrop-blur transition-all hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-glow"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${tone} opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-50`} />
              <div className="relative flex flex-1 items-start gap-5">
                <div className={`relative flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${tone} font-mono text-sm font-black text-background shadow-glow transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110`}>
                  <Trophy className="absolute h-5 w-5 opacity-30" />
                  <span className="relative">{rank}</span>
                </div>
                <p className="flex-1 text-base leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground">
                  {a}
                </p>
              </div>
              <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-primary to-accent transition-all duration-500 group-hover:w-full" />
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Academic background.">
      <div className="grid gap-5 md:grid-cols-2">
        {[
          {
            degree: "B.Tech in Information Technology",
            school: "Sri Shanmugha College of Engineering & Technology",
            period: "2023 – 2027 (Expected)",
            meta: "CGPA: 8.88",
          },
          {
            degree: "HSC — 12th Grade",
            school: "Sri Chaitanya Techno School",
            period: "Completed May 2023",
            meta: "63%",
          },
        ].map((e) => (
          <div
            key={e.degree}
            className="group rounded-2xl border border-border bg-card/70 p-6 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/40"
          >
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-gradient-primary p-3 text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="text-base font-semibold">{e.degree}</h3>
                <p className="text-sm text-muted-foreground">{e.school}</p>
                <p className="mt-1 font-mono text-xs text-primary">{e.period}</p>
                <p className="mt-2 text-xs text-muted-foreground">{e.meta}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Certifications
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Full-Stack Web Development", provider: "Infosys Springboard", code: "FSWD" },
            { title: "Python with Django", provider: "Infosys Springboard", code: "PYDJ" },
            { title: "Frontend Development — HTML", provider: "Great Learning", code: "FEHT" },
            { title: "Problem Solving & Python", provider: "Ebox", code: "PSPY" },
          ].map((c, idx) => (
            <div key={c.title} className="group relative [perspective:1000px]">
              {/* animated gradient ring */}
              <div className="pointer-events-none absolute -inset-px rounded-2xl bg-[conic-gradient(from_var(--a,0deg),transparent_0deg,hsl(var(--primary)/0.6)_90deg,transparent_180deg)] opacity-0 blur-[2px] transition-opacity duration-500 group-hover:opacity-100 [animation:spin_4s_linear_infinite]" />
              <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card/80 p-5 shadow-card backdrop-blur transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-primary/50 group-hover:shadow-glow [transform-style:preserve-3d] group-hover:[transform:rotateX(4deg)_rotateY(-4deg)]">
                {/* corner ribbon */}
                <div className="pointer-events-none absolute -right-10 top-4 rotate-45 bg-gradient-primary px-12 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-foreground shadow-glow">
                  Verified
                </div>
                {/* shimmer line */}
                <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-primary/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                {/* seal */}
                <div className="relative flex items-center gap-3">
                  <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow ring-4 ring-primary/10">
                    <BadgeCheck className="h-6 w-6" />
                    <span className="absolute -bottom-1 -right-1 rounded-full border-2 border-card bg-emerald-500 p-0.5">
                      <Check className="h-2.5 w-2.5 text-white" strokeWidth={4} />
                    </span>
                  </div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Cert · #{String(idx + 1).padStart(3, "0")}
                  </div>
                </div>
                <div className="relative mt-4">
                  <p className="text-sm font-bold leading-snug">{c.title}</p>
                  <div className="mt-2 h-px w-10 bg-gradient-to-r from-primary to-transparent" />
                  <p className="mt-2 text-xs text-muted-foreground">{c.provider}</p>
                </div>
                <div className="relative mt-4 flex items-center justify-between border-t border-dashed border-border pt-3">
                  <span className="font-mono text-[10px] tracking-widest text-primary">{c.code}</span>
                  <ShieldCheck className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Objectives() {
  return (
    <Section id="objectives" eyebrow="Goals" title="Career objectives.">
      <p className="max-w-3xl text-muted-foreground">
        I'm focused on growing as a software engineer who ships polished, performant
        React front-ends backed by clean, well-architected MVC services. I value
        adaptability, teamwork, and continuous learning — and I aim to contribute to
        product teams building reliable, user-focused experiences at scale.
      </p>
    </Section>
  );
}

function CompetitiveProgramming() {
  const stats = [
    {
      platform: "LeetCode",
      handle: "@deepajagan",
      href: "https://leetcode.com/u/deepajagan/",
      icon: Code2,
      iconColor: "text-orange-400",
      iconBg: "bg-orange-500/15",
      solved: "750+",
      metaLabel: "Difficulty",
      metaValue: "Easy / Medium / Hard",
    },
    {
      platform: "Codeforces",
      handle: "@deepa.12",
      href: "https://codeforces.com/profile/deepa.12",
      icon: TrendingUp,
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/15",
      solved: "250+",
      metaLabel: "Languages",
      metaValue: "C++ / Java",
    },
  ];
  return (
    <Section
      id="competitive"
      eyebrow="Competitive Programming"
      title="Algorithmic problem solving."
    >
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        {stats.map((s) => {
          const Icon = s.icon;
          return (
            <div
              key={s.platform}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-8 text-center shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
            >
              <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-primary/10 blur-3xl transition-all group-hover:bg-primary/25" />
              <div className="relative flex flex-col items-center">
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full ${s.iconBg} transition-transform group-hover:scale-110`}
                >
                  <Icon className={`h-7 w-7 ${s.iconColor}`} />
                </div>
                <h3 className="mt-5 text-2xl font-bold">{s.platform}</h3>
                <p className="mt-1 font-mono text-sm text-muted-foreground">
                  {s.handle}
                </p>

                <div className="mt-6 w-full rounded-xl border border-border/70 bg-background/40 p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Solved Problems
                    </span>
                    <span className="text-lg font-bold">{s.solved}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      {s.metaLabel}
                    </span>
                    <span className="font-mono text-sm font-semibold text-emerald-400">
                      {s.metaValue}
                    </span>
                  </div>
                </div>

                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full border border-border bg-background/40 px-5 py-3 text-sm font-medium transition-all hover:border-primary/60 hover:bg-primary/10"
                >
                  <ExternalLink className="h-4 w-4" />
                  View Profile
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}

function Experience() {
  const roles = [
    {
      role: "Freelancer — Full Stack Developer",
      company: "Self-Employed",
      period: "May 2024 – Present",
    },
    {
      role: "Web Developer Intern",
      company: "StartNet Ventures Private Limited",
      period: "Jan 2024 – Apr 2024",
    },
    {
      role: "Web Developer (Project-based)",
      company: "Aakam Time Management",
      period: "May 2024",
    },
  ];
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="relative space-y-5 border-l border-border/70 pl-6">
        {roles.map((r) => (
          <li key={r.role} className="group relative">
            <span className="absolute -left-[31px] top-3 flex h-3 w-3 items-center justify-center">
              <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/40" />
              <span className="relative h-2 w-2 rounded-full bg-gradient-primary" />
            </span>
            <div className="rounded-2xl border border-border bg-card/70 p-5 shadow-card backdrop-blur transition-all group-hover:-translate-y-0.5 group-hover:border-primary/40">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-semibold">{r.role}</h3>
                <span className="font-mono text-xs text-primary">{r.period}</span>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">{r.company}</p>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}

function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [copied, setCopied] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const EMAILJS_SERVICE_ID = "service_59n76gb";
  const EMAILJS_TEMPLATE_ID = "template_0t955aj";

  const EMAILJS_PUBLIC_KEY = "4PHlDOhJ-gmJxzVqH";

  const copy = (key: string, val: string) => {
    navigator.clipboard?.writeText(val);
    setCopied(key);
    setTimeout(() => setCopied(null), 1500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;

    const data = new FormData(form);
    setStatus("sending");
    setErrorMsg("");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name:    data.get("from_name")  as string,
          email:   data.get("from_email") as string,
          title:   data.get("subject")    as string,
          message: data.get("message")    as string,
        },
        EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 5000);
    } catch (err: unknown) {
      setStatus("error");
      // EmailJS rejects with { status: number, text: string } — not an Error instance
      const ejsErr = err as { status?: number; text?: string };
      if (ejsErr?.text) {
        setErrorMsg(`EmailJS ${ejsErr.status ?? ""}: ${ejsErr.text}`);
      } else if (err instanceof Error) {
        setErrorMsg(err.message);
      } else {
        setErrorMsg("Failed to send. Check your EmailJS credentials / template variables.");
      }
    }
  };


  const lines = [
    { key: "email", icon: Mail, label: "email", value: "deepajaganj.13@gmail.com" },
    { key: "phone", icon: Phone, label: "phone", value: "+91 90422 97613" },
    { key: "loc", icon: MapPin, label: "location", value: "Tamil Nadu, India" },
  ];
  const channels = [
    { icon: Github, label: "GitHub", handle: "@deepajaganj12", href: "https://github.com/deepajaganj12" },
    { icon: Linkedin, label: "LinkedIn", handle: "deepa-jagan", href: "https://www.linkedin.com/in/deepa-jagan-1a8104294/" },
    { icon: Code2, label: "LeetCode", handle: "@deepajagan", href: "https://leetcode.com/u/deepajagan/" },
    { icon: TrendingUp, label: "Codeforces", handle: "@deepa.12", href: "https://codeforces.com/profile/deepa.12" },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together.">
      <div className="grid gap-8 lg:grid-cols-5">
        {/* LEFT — Contact Info + Social */}
        <div className="space-y-6 lg:col-span-2">
          {/* Terminal card */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 shadow-card backdrop-blur">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <div className="relative flex items-center gap-2 border-b border-border bg-background/50 px-4 py-2.5">
              <span className="h-3 w-3 rounded-full bg-red-500/80" />
              <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
              <span className="h-3 w-3 rounded-full bg-green-500/80" />
              <span className="ml-3 font-mono text-xs text-muted-foreground">~ /contact/deepa.sh</span>
            </div>
            <div className="relative space-y-3 p-6 font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> whoami
              </p>
              <p className="pl-4 text-foreground">
                Deepa Jagan <span className="text-muted-foreground">— Associate Software Developer</span>
              </p>
              <p className="text-muted-foreground">
                <span className="text-primary">$</span> cat contact.json
              </p>
              <div className="ml-4 space-y-2 rounded-xl border border-border bg-background/50 p-4">
                <p className="text-muted-foreground">{"{"}</p>
                {lines.map((l) => (
                  <div key={l.key} className="group flex items-center justify-between gap-3 pl-4">
                    <div className="flex min-w-0 items-center gap-2">
                      <l.icon className="h-3.5 w-3.5 shrink-0 text-primary" />
                      <span className="text-muted-foreground">"{l.label}":</span>
                      <span className="truncate text-foreground">"{l.value}"</span>
                      <span className="text-muted-foreground">,</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => copy(l.key, l.value)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-all hover:border-primary hover:text-primary"
                      aria-label={`Copy ${l.label}`}
                    >
                      {copied === l.key ? (
                        <Check className="h-3.5 w-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                    </button>
                  </div>
                ))}
                <p className="text-muted-foreground">{"}"}</p>
              </div>
              <p className="flex items-center text-muted-foreground">
                <span className="text-primary">$</span>
                <span className="ml-2">echo "ready_to_collaborate"</span>
                <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary" />
              </p>
            </div>
          </div>

          {/* Social channels */}
          <div className="grid grid-cols-2 gap-3">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-4 shadow-card backdrop-blur transition-all hover:-translate-y-1 hover:border-primary/50 hover:shadow-glow"
              >
                <div className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow transition-transform group-hover:rotate-6">
                    <c.icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{c.label}</p>
                    <p className="truncate font-mono text-[11px] text-muted-foreground">{c.handle}</p>
                  </div>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-primary" />
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT — Contact Form */}
        <div className="lg:col-span-3">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/80 shadow-card backdrop-blur">
            <div className="absolute inset-0 grid-bg opacity-10" />
            {/* Form header */}
            <div className="relative border-b border-border bg-background/50 px-6 py-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
                  <Send className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-sm font-semibold">Send a Message</p>
                  <p className="font-mono text-[11px] text-muted-foreground">// direct_to_inbox</p>
                </div>
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="relative space-y-5 p-6">
              {/* Name + Email row */}
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact_name" className="block font-mono text-xs uppercase tracking-wider text-primary">
                    Your Name
                  </label>
                  <input
                    id="contact_name"
                    name="from_name"
                    type="text"
                    required
                    placeholder="Deepa Jagan"
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact_email" className="block font-mono text-xs uppercase tracking-wider text-primary">
                    Your Email
                  </label>
                  <input
                    id="contact_email"
                    name="from_email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label htmlFor="contact_subject" className="block font-mono text-xs uppercase tracking-wider text-primary">
                  Subject
                </label>
                <input
                  id="contact_subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Internship opportunity / Freelance project / Collaboration..."
                  className="w-full rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="contact_message" className="block font-mono text-xs uppercase tracking-wider text-primary">
                  Message
                </label>
                <textarea
                  id="contact_message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project, role or idea..."
                  className="w-full resize-none rounded-xl border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 backdrop-blur transition-colors focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/40"
                />
              </div>

              {/* Status feedback */}
              {status === "success" && (
                <div className="flex items-center gap-3 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-400">
                  <BadgeCheck className="h-4 w-4 shrink-0" />
                  Message sent! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                  ✗ {errorMsg || "Failed to send message. Please try again."}
                </div>
              )}

              {/* Submit button */}
              <button
                id="contact_submit"
                type="submit"
                disabled={status === "sending"}
                className="group relative inline-flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    Send Message
                  </>
                )}
                {/* shimmer sweep */}
                <span className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
              </button>

              <p className="text-center font-mono text-[11px] text-muted-foreground">
                Powered by EmailJS · Messages go directly to my inbox
              </p>
            </form>
          </div>
        </div>
      </div>
    </Section>
  );
}

