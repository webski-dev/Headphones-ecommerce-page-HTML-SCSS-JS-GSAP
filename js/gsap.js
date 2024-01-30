gsap.registerPlugin(ScrollTrigger);

gsap.to(".new-launches-header", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".new-launches-header",
    start: "top center",
    end: "top 50px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".new-launches-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".new-launches-container",
    start: "top center",
    end: "top center",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".feature-1-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".feature-1-container",
    start: "top 400px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".bestsellers-header", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".bestsellers-header",
    start: "top 300px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".bestsellers-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".bestsellers-container",
    start: "top 300px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".feature-2-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".feature-2-container",
    start: "top 400px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".articles-header", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".articles-header",
    start: "top 400px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".articles-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".articles-container",
    start: "top 400px",
    end: "top 600px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".articles-gallery-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".articles-gallery-container",
    start: "top 400px",
    end: "center 80px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".newsletter-header", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".newsletter-header",
    start: "top 400px",
    end: "top 400px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to(".newsletter-container", {
  opacity: "1",
  scrollTrigger: {
    trigger: ".newsletter-container",
    start: "top 400px",
    end: "top 400px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});

gsap.to("footer", {
  opacity: "1",
  scrollTrigger: {
    trigger: "footer",
    start: "top 600px",
    end: "top 700px",
    scrub: true,
    markers: false,
    id: "scrub",
  },
});
