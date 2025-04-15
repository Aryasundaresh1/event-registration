// Countdown Timer
const countdown = document.getElementById("countdown");
const eventDate = new Date("June 10, 2025 10:00:00").getTime();

const updateCountdown = () => {
  const now = new Date().getTime();
  const diff = eventDate - now;

  if (diff <= 0) {
    countdown.innerText = "The fest has started!";
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const mins = Math.floor((diff / (1000 * 60)) % 60);
  const secs = Math.floor((diff / 1000) % 60);

  countdown.innerText = `${days}d ${hours}h ${mins}m ${secs}s`;
};

setInterval(updateCountdown, 1000);

// Loading Screen Animation
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
    document.getElementById("mainContent").classList.remove("hidden");
  }, 2000);
});

// Fade-in on Scroll
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
