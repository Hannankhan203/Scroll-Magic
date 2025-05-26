document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", function() {
    this.classList.toggle("active");
    navLinks.classList.toggle("active");
  });

  document.querySelectorAll("a[href^='#']").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  });

  const cursorFollower = document.querySelector(".cursor-follower");

  document.addEventListener("mousemove", (e) => {
    gsap.to(cursorFollower, {
      x: e.clientX,
      y: e.clientY,
      duration: 0.5,
      ease: "power2.out",
    });
  });

  document.querySelectorAll("a, button").forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(cursorFollower, {
        scale: 2,
        backgroundColor: "rgba(76, 201, 240, 0.5)",
        duration: 0.3,
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(cursorFollower, {
        scale: 1,
        backgroundColor: "var(--accent-color)",
        duration: 0.3,
      });
    });
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".hero-title", {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".hero-subtitle", {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.3,
    ease: "power3.out",
  });

  gsap.from(".cta-btn", {
    scrollTrigger: {
    trigger: ".cta-btn",
    start: "top 80%",
    toggleActions: "play none none none",
  },
    opacity: 0,
    y: 50,
    duration: 1,
    // delay: 0.6,
    ease: "power3.out",
  });

  gsap.from(".hero-img", {
    opacity: 0,
    x: 100,
    duration: 1,
    delay: 0.9,
    ease: "power3.out",
  });

  gsap.utils.toArray(".feature-card").forEach((card, i) => {
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 0,
      y: 50,
      duration: 0.8,
      delay: 1 * 0.1,
      ease: "back.out",
    });
  });

  gsap.to(".parallex-bg", {
    scrollTrigger: {
      trigger: ".parallex-section",
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
    y: 100,
    ease: "none",
  });

  gsap.from(".about-content", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: -100,
    duration: 1,
    ease: "power3.out",
  });

  gsap.from(".about-img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    x: 100,
    duration: 1,
    ease: "power3.out",
  });

  const statNums = document.querySelectorAll(".stat-num");

  statNums.forEach((number) => {
    const target = +number.getAttribute("data-target");
    const suffix = number.textContent.includes("%") ? "%" : "";
    const increment = target / 100;

    ScrollTrigger.create({
      trigger: number,
      start: "top 80%",
      onEnter: () => {
        let current = 0;
        const updateCounter = setInterval(() => {
          current += increment;
          if (current >= target) {
            clearInterval(updateCounter);
            current = target;
          }
          number.textContent = Math.floor(current) + suffix;
        }, 10);
      },
    });
  });

  gsap.from(".contact-form", {
    scrollTrigger: {
      trigger: ".contact",
      start: "top 70%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.1,
    ease: "power3.out",
  });

  gsap.from(".footer-content", {
    scrollTrigger: {
      trigger: ".footer",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
  });

  ScrollTrigger.create({
    start: 0,
    end: "max",
    onUpdate: (self) => {
      if (self.direction === -1 && self.scroll() > 100) {
        document.querySelector(".header").classList.add("scrolled");
      } else {
        document.querySelector(".header").classList.remove("scrolled");
      }
    },
  });
});
