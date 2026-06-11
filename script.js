// Data definitions
const SKILLS = [
  {
    title: "Programming Languages",
    icon: "code-2",
    items: [
      { name: "JavaScript (ES6+)", level: 85 },
      { name: "C / C++", level: 85 },
      { name: "Java", level: 80 },
      { name: "Python", level: 75 },
    ],
  },
  {
    title: "Frontend & Full Stack",
    icon: "sparkles",
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
    icon: "database",
    items: [
      { name: "MySQL", level: 80 },
      { name: "Git / GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      { name: "Maven / Gradle", level: 70 },
    ],
  },
  {
    title: "Concepts & Soft Skills",
    icon: "trophy",
    items: [
      { name: "Problem Solving", level: 90 },
      { name: "DSA", level: 85 },
      { name: "OOP", level: 85 },
      { name: "System Design", level: 70 },
    ],
  },
];

const PROJECTS = [
  {
    title: "Rice-Billing-App",
    desc: "Full-stack billing application for a rice retailer with invoice generation, inventory tracking, and order history — React frontend with a Spring Boot REST API and MySQL store.",
    tech: ["React", "Spring Boot", "MySQL"],
    github: "https://github.com/deepajaganj12/SmartPOS-Billing-and-Inventory-Management-System",
    demo: "https://rice-billing-app-ten.vercel.app/",
    image: "images/Rice-Billing-App.jpeg",
  },
  {
    title: "Amazon Clone (Frontend)",
    desc: "A pixel-perfect Amazon homepage clone built with vanilla HTML, CSS, and JavaScript — featuring a responsive product grid, navigation bar, and hero banner.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "#",
    demo: "#",
    image: "images/Amazon Clone.jpeg",
  },
  {
    title: "Full Stack Blog Website",
    desc: "A feature-rich blog platform with authentication, post management, comments, and tag filtering — built with Django and MySQL.",
    tech: ["Python", "Django", "MySQL"],
    github: "https://github.com/deepajaganj12/Blog-App",
    demo: "#",
    image: "images/Full Stack Blog Website.jpeg",
  },
  {
    title: "Rock-paper-scissors",
    desc: "Interactive browser game with score persistence via LocalStorage and animated UI states for each round.",
    tech: ["HTML5", "CSS3", "JavaScript", "LocalStorage"],
    github: "https://github.com/deepajaganj12/Rock-paper-scissors-game",
    demo: "https://deepajaganj12.github.io/Rock-paper-scissors-game/",
    image: "images/Rock-paper-scissors.jpeg",
  },
];

const CP_STATS = [
  {
    platform: "LeetCode",
    handle: "@deepajagan",
    href: "https://leetcode.com/u/deepajagan/",
    icon: "code-2",
    themeClass: "leetcode-icon",
    solved: "750+",
    metaLabel: "Difficulty",
    metaValue: "Easy / Medium / Hard",
  },
  {
    platform: "Codeforces",
    handle: "@deepa.12",
    href: "https://codeforces.com/profile/deepa.12",
    icon: "trending-up",
    themeClass: "codeforces-icon",
    solved: "250+",
    metaLabel: "Languages",
    metaValue: "C++ / Java",
  },
];

const EXPERIENCE = [
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

const ACHIEVEMENTS = [
  "55th Place — Shaastra 2026 Reverse Coding X, IIT Madras (Jan 2026)",
  "1st Prize — Infovista 25 Symposium, Sri Sai Ram Engineering College (2025)",
  "1st Prize — Reverse Coding, Rathinam Technical Campus (Mar 2025)",
  "1st Prize — Code Debugging, R P Sarathy College of Engineering (2025)",
  "1st Prize — Throne of Code, Government Mahila Engineering College Ajmer (2025)",
  "3rd Prize — Reverse Coding, KSR College of Engineering (2025)",
];

const EDUCATION = [
  {
    degree: "B.Tech in Information Technology",
    school: "Sri Shanmugha College of Engineering & Technology",
    period: "2023 – 2027 (Expected)",
    meta: "CGPA: 8.88",
  },
  {
    degree: "CBSE — 12th Grade",
    school: "Sri Chaitanya Techno School",
    period: "Completed May 2023",
    meta: "63%",
  },
];

const CERTIFICATIONS = [
  { title: "Full-Stack Web Development", provider: "Infosys Springboard", code: "FSWD" },
  { title: "Python with Django", provider: "Infosys Springboard", code: "PYDJ" },
  { title: "Frontend Development — HTML", provider: "Great Learning", code: "FEHT" },
  { title: "Problem Solving & Python", provider: "Ebox", code: "PSPY" },
];

const MARQUEE_ITEMS = [
  "React", "JavaScript", "Java", "C++", "Python", "Spring Boot",
  "Django", "MySQL", "HTML5", "CSS3", "Git", "GitHub",
  "WordPress", "DSA", "Problem Solving", "LeetCode 750+", "Codeforces 250+",
];

const CONTACT_LINES = [
  { key: "email", icon: "mail", label: "email", value: "deepajaganj.13@gmail.com" },
  { key: "phone", icon: "phone", label: "phone", value: "+91 90422 97613" },
  { key: "loc", icon: "map-pin", label: "location", value: "Tamil Nadu, India" },
];

const SOCIAL_CHANNELS = [
  { icon: "github", label: "GitHub", handle: "@deepajaganj12", href: "https://github.com/deepajaganj12" },
  { icon: "linkedin", label: "LinkedIn", handle: "deepa-jagan", href: "https://www.linkedin.com/in/deepa-jagan-1a8104294/" },
  { icon: "code-2", label: "LeetCode", handle: "@deepajagan", href: "https://leetcode.com/u/deepajagan/" },
  { icon: "trending-up", label: "Codeforces", handle: "@deepa.12", href: "https://codeforces.com/profile/deepa.12" },
];

const HERO_ROLES = [
  "Associate Software Developer",
  "React Front-End Developer",
  "Full-Stack Builder",
  "Competitive Programmer",
];

// Initialize application on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  initMobileMenu();
  initMouseSpotlight();
  initScrollReveal();
  initNavHighlight();
  initTypingAnimation();
  renderMarquee();
  renderSkills();
  renderCPStats();
  renderProjects();
  renderExperience();
  renderAchievements();
  renderEducation();
  renderCertifications();
  renderContactInfo();
  renderSocialChannels();
  initContactForm();

  // Initialize Lucide Icons (must be called after dynamic HTML is rendered)
  lucide.createIcons();
});

// Theme Toggle Handling
function initTheme() {
  const html = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  
  // Set default theme to dark
  let currentTheme = localStorage.getItem("theme") || "dark";
  html.className = currentTheme;

  toggleBtn.addEventListener("click", () => {
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      html.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.remove("light");
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  });
}

// Mobile Hamburger Menu
function initMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll("[data-mobile-link]");

  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("open");
    mobileMenu.classList.toggle("open");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("open");
      mobileMenu.classList.remove("open");
    });
  });
}

// Active Nav Link on Scroll
function initNavHighlight() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links .nav-link");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.4, rootMargin: "-50px 0px -50px 0px" }
  );

  sections.forEach(s => observer.observe(s));
}

// Mouse Spotlight Tracker
function initMouseSpotlight() {
  window.addEventListener("mousemove", (e) => {
    document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
    document.documentElement.style.setProperty("--my", `${e.clientY + window.scrollY}px`);
  });
}

// Scroll Reveal Observer
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Typing Animation
function initTypingAnimation() {
  const textElement = document.getElementById("typed-text");
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const currentRole = HERO_ROLES[roleIndex];
    
    if (isDeleting) {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;
    } else {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;
    }

    let speed = isDeleting ? 40 : 90;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 1400; // Pause at full string
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % HERO_ROLES.length;
      speed = 400; // Pause before typing next
    }

    setTimeout(type, speed);
  }

  type();
}

// Dynamic Rendering: Marquee
function renderMarquee() {
  const track = document.getElementById("marquee-track");
  const repeatedItems = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  
  track.innerHTML = repeatedItems
    .map(item => `
      <span class="marquee-item">
        <i data-lucide="star"></i>
        <span>${item}</span>
      </span>
    `).join("");
}

// Dynamic Rendering: Skills
function renderSkills() {
  const grid = document.getElementById("skills-grid");
  
  grid.innerHTML = SKILLS.map(category => `
    <div class="skills-category glass-card">
      <div class="card-bg-glow"></div>
      <div class="skills-category-header">
        <div class="skills-icon-wrapper">
          <i data-lucide="${category.icon}"></i>
        </div>
        <h3 class="skills-category-title">${category.title}</h3>
      </div>
      <div class="skills-items">
        ${category.items.map(skill => `
          <div class="skill-bar-container">
            <div class="skill-info">
              <span>${skill.name}</span>
              <span class="skill-val">${skill.level}%</span>
            </div>
            <div class="skill-bar-outer">
              <div class="skill-bar-inner" style="width: ${skill.level}%"></div>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `).join("");
}

// Dynamic Rendering: CP Stats
function renderCPStats() {
  const grid = document.getElementById("cp-grid");
  
  grid.innerHTML = CP_STATS.map(stat => `
    <div class="cp-card glass-card">
      <div class="card-bg-glow"></div>
      <div class="cp-platform-icon ${stat.themeClass}">
        <i data-lucide="${stat.icon}"></i>
      </div>
      <h3 class="cp-platform-name">${stat.platform}</h3>
      <p class="cp-platform-handle">${stat.handle}</p>
      
      <div class="cp-stats-box">
        <div class="cp-stat-row">
          <span class="label">Solved Problems</span>
          <span class="value">${stat.solved}</span>
        </div>
        <div class="cp-stat-row">
          <span class="label">${stat.metaLabel}</span>
          <span class="meta-value">${stat.metaValue}</span>
        </div>
      </div>
      
      <a href="${stat.href}" target="_blank" rel="noopener" class="cp-link">
        <i data-lucide="external-link"></i> View Profile
      </a>
    </div>
  `).join("");
}

// Dynamic Rendering: Projects
function renderProjects() {
  const grid = document.getElementById("projects-grid");
  
  grid.innerHTML = PROJECTS.map((proj, idx) => `
    <article class="project-card glass-card">
      <div class="card-bg-glow"></div>
      <div class="project-image-wrapper">
        <img class="project-image" src="${proj.image}" alt="${proj.title}" />
        <div class="project-image-overlay"></div>
        <span class="project-index">0${idx + 1} / 0${PROJECTS.length}</span>
      </div>
      <h3 class="project-title">${proj.title}</h3>
      <p class="project-desc">${proj.desc}</p>
      <div class="project-tags">
        ${proj.tech.map(tag => `<span class="project-tag">${tag}</span>`).join("")}
      </div>
      <div class="project-links">
        <a href="${proj.github}" target="_blank" rel="noopener" class="project-link">
          <i data-lucide="github"></i> Code
        </a>
        ${proj.demo && proj.demo !== "#" ? `
          <a href="${proj.demo}" target="_blank" rel="noopener" class="project-link">
            <i data-lucide="external-link"></i> Live
          </a>
        ` : ""}
      </div>
    </article>
  `).join("");
}

// Dynamic Rendering: Experience
function renderExperience() {
  const timeline = document.getElementById("experience-timeline");
  
  timeline.innerHTML = EXPERIENCE.map(exp => `
    <div class="timeline-item">
      <div class="timeline-node">
        <span class="node-ping"></span>
        <span class="node-dot"></span>
      </div>
      <div class="timeline-card glass-card">
        <div class="timeline-header-row">
          <h3 class="timeline-role">${exp.role}</h3>
          <span class="timeline-period">${exp.period}</span>
        </div>
        <p class="timeline-company">${exp.company}</p>
      </div>
    </div>
  `).join("");
}

// Dynamic Rendering: Achievements
function parseRank(a) {
  const match = a.match(/^(\d+)(st|nd|rd|th)\s*(Prize|Place)?/i);
  if (!match) return { rank: "★", themeClass: "rank-default" };
  const rankNum = parseInt(match[1]);
  if (rankNum === 1) return { rank: "1st", themeClass: "rank-gold" };
  if (rankNum === 2) return { rank: "2nd", themeClass: "rank-silver" };
  if (rankNum === 3) return { rank: "3rd", themeClass: "rank-bronze" };
  return { rank: `${rankNum}`, themeClass: "rank-default" };
}

function renderAchievements() {
  const grid = document.getElementById("achievements-grid");
  
  grid.innerHTML = ACHIEVEMENTS.map(ach => {
    const { rank, themeClass } = parseRank(ach);
    return `
      <div class="achievement-card glass-card">
        <div class="card-bg-glow"></div>
        <div class="achievement-body">
          <div class="achievement-badge ${themeClass}">
            <i data-lucide="trophy"></i>
            <span>${rank}</span>
          </div>
          <p class="achievement-text">${ach}</p>
        </div>
        <span class="achievement-border-effect"></span>
      </div>
    `;
  }).join("");
}

// Dynamic Rendering: Education
function renderEducation() {
  const grid = document.getElementById("education-grid");
  
  grid.innerHTML = EDUCATION.map(edu => `
    <div class="education-card glass-card">
      <div class="education-card-body">
        <div class="education-icon-wrapper">
          <i data-lucide="graduation-cap"></i>
        </div>
        <div class="education-info">
          <h3 class="education-degree">${edu.degree}</h3>
          <p class="education-school">${edu.school}</p>
          <p class="education-period">${edu.period}</p>
          <p class="education-meta">${edu.meta}</p>
        </div>
      </div>
    </div>
  `).join("");
}

// Dynamic Rendering: Certifications
function renderCertifications() {
  const grid = document.getElementById("certifications-grid");
  
  grid.innerHTML = CERTIFICATIONS.map((cert, idx) => `
    <div class="cert-card-container">
      <div class="cert-card">
        <div class="cert-ribbon">Verified</div>
        <div class="cert-shimmer"></div>
        <div class="cert-header">
          <div class="cert-seal">
            <i data-lucide="award"></i>
            <span class="cert-check">
              <i data-lucide="check"></i>
            </span>
          </div>
          <div class="cert-num">Cert · #${String(idx + 1).padStart(3, "0")}</div>
        </div>
        <div class="cert-content">
          <p class="cert-title">${cert.title}</p>
          <div class="cert-divider"></div>
          <p class="cert-provider">${cert.provider}</p>
        </div>
        <div class="cert-footer">
          <span class="cert-code font-mono">${cert.code}</span>
          <i data-lucide="shield-check"></i>
        </div>
      </div>
    </div>
  `).join("");
}

// Dynamic Rendering: Contact JSON Terminal Card
function renderContactInfo() {
  const block = document.getElementById("json-block");
  
  block.innerHTML = `
    <p class="bracket">{</p>
    ${CONTACT_LINES.map(line => `
      <div class="json-line">
        <div class="json-content">
          <i data-lucide="${line.icon}"></i>
          <span class="json-key">"${line.label}":</span>
          <span class="json-val">"${line.value}"</span>
          <span class="comma">,</span>
        </div>
        <button class="btn-copy" onclick="copyContactText('${line.key}', '${line.value}')" id="copy-btn-${line.key}" aria-label="Copy ${line.label}">
          <i data-lucide="copy" id="copy-icon-${line.key}"></i>
        </button>
      </div>
    `).join("")}
    <p class="bracket">}</p>
  `;
}

// Clipboard copying utility
function copyContactText(key, value) {
  navigator.clipboard.writeText(value).then(() => {
    const btn = document.getElementById(`copy-btn-${key}`);
    const icon = document.getElementById(`copy-icon-${key}`);
    
    // Change style to success
    btn.classList.add("success");
    icon.setAttribute("data-lucide", "check");
    lucide.createIcons({
      attrs: { id: `copy-icon-${key}` },
      nameAttr: "data-lucide"
    });
    
    setTimeout(() => {
      btn.classList.remove("success");
      icon.setAttribute("data-lucide", "copy");
      lucide.createIcons({
        attrs: { id: `copy-icon-${key}` },
        nameAttr: "data-lucide"
      });
    }, 1500);
  });
}

// Dynamic Rendering: Social Grid
function renderSocialChannels() {
  const container = document.getElementById("social-channels");
  
  container.innerHTML = SOCIAL_CHANNELS.map(ch => `
    <a href="${ch.href}" target="_blank" rel="noopener" class="social-card">
      <div class="card-bg-glow"></div>
      <div class="social-card-body">
        <div class="social-icon">
          <i data-lucide="${ch.icon}"></i>
        </div>
        <div class="social-info">
          <p class="social-label">${ch.label}</p>
          <p class="social-handle">${ch.handle}</p>
        </div>
      </div>
      <i data-lucide="external-link" class="arrow-icon"></i>
    </a>
  `).join("");
}

// EmailJS contact form setup
function initContactForm() {
  const form = document.getElementById("contact-form");
  const submitBtn = document.getElementById("submit-btn");
  const btnContent = submitBtn.querySelector(".btn-content");
  const btnLoader = submitBtn.querySelector(".btn-loader");
  const successFeedback = document.getElementById("form-feedback-success");
  const errorFeedback = document.getElementById("form-feedback-error");
  const errorText = document.getElementById("error-text");

  // Initialize EmailJS
  emailjs.init({
    publicKey: "4PHlDOhJ-gmJxzVqH"
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    // Reset status UI
    successFeedback.classList.add("hidden");
    errorFeedback.classList.add("hidden");
    
    // Show loading state
    submitBtn.disabled = true;
    btnContent.classList.add("hidden");
    btnLoader.classList.remove("hidden");
    
    const formData = new FormData(form);
    
    emailjs.send(
      "service_59n76gb",
      "template_0t955aj",
      {
        name: formData.get("from_name"),
        email: formData.get("from_email"),
        title: formData.get("subject"),
        message: formData.get("message")
      }
    )
    .then(() => {
      // Success feedback
      successFeedback.classList.remove("hidden");
      form.reset();
      
      // Reset button
      submitBtn.disabled = false;
      btnContent.classList.remove("hidden");
      btnLoader.classList.add("hidden");
      
      setTimeout(() => {
        successFeedback.classList.add("hidden");
      }, 5000);
    })
    .catch((err) => {
      // Error feedback
      errorFeedback.classList.remove("hidden");
      
      if (err && err.text) {
        errorText.textContent = `✗ EmailJS ${err.status || ""}: ${err.text}`;
      } else {
        errorText.textContent = "✗ Failed to send message. Check your connection.";
      }
      
      // Reset button
      submitBtn.disabled = false;
      btnContent.classList.remove("hidden");
      btnLoader.classList.add("hidden");
    });
  });
}
