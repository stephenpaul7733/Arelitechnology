/* ================= MOBILE NAV TOGGLE ================= */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("primaryNav");

menuToggle?.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

/* ================= SMOOTH SCROLL ================= */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navMenu?.classList.remove("active");
    }
  });
});
/* ================= ABOUT STATS ANIMATION ================= */
/* ================= ABOUT COUNTER (RE-RUN ON SCROLL) ================= */

const statBoxes = document.querySelectorAll(".stat-box");

function animateCounter(counter) {
  const text = counter.dataset.target;
  const hasPlus = counter.dataset.plus === "true";
  const target = parseInt(text, 10);

  let count = 0;
  const duration = 1000;
  const interval = 20;
  const step = Math.max(1, Math.floor(target / (duration / interval)));

  counter.innerText = "0"; // RESET every time

  const timer = setInterval(() => {
    count += step;
    if (count >= target) {
      counter.innerText = target + (hasPlus ? "+" : "");
      clearInterval(timer);
    } else {
      counter.innerText = count;
    }
  }, interval);
}

/* ================= INTERSECTION OBSERVER ================= */

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const box = entry.target;
      const counter = box.querySelector(".stat-number");

      if (entry.isIntersecting) {
        box.classList.add("visible");

        if (counter) {
          animateCounter(counter);
        }
      } else {
        // OPTIONAL: reset animation when leaving viewport
        box.classList.remove("visible");
      }
    });
  },
  { threshold: 0.5 }
);

statBoxes.forEach(box => observer.observe(box));



;

/* ================= ABOUT TEXT OBSERVER ================= */
const aboutText = document.querySelector(".about-text");

if(aboutText){
  const observer = new IntersectionObserver(
    ([entry], obs)=>{
      if(entry.isIntersecting){
        aboutText.classList.add("visible");
        obs.disconnect();
      }
    },
    { threshold:0.4 }
  );

  observer.observe(aboutText);
}

/* ================= SERVICES ANIMATION ================= */
const serviceCards = document.querySelectorAll(".service-card");

const serviceObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold:0.3 }
);

serviceCards.forEach(card => serviceObserver.observe(card));
/* ================= WHY SECTION ANIMATION ================= */
const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold:0.3 }
);

whyCards.forEach(card => whyObserver.observe(card));
/* ================= CAREERS ANIMATION ================= */
const careerCards = document.querySelectorAll(".career-card");

const careerObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold:0.3 }
);

careerCards.forEach(card => careerObserver.observe(card));
/* ================= CONTACT ANIMATION ================= */
const contactCards = document.querySelectorAll(".contact-card");

const contactObserver = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add("visible");
        obs.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

contactCards.forEach(card => contactObserver.observe(card));
