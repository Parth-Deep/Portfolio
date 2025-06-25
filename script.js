//making the background
function createStars() {
  const numberOfStars = 100;
  const starsContainer = document.querySelector('.stars-background');
  if (!starsContainer) return;
  starsContainer.innerHTML = '';
  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    const size = Math.random() * 3 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.top = `${Math.random() * 100}vh`;
    star.style.background = '#fff';
    star.style.borderRadius = '50%';
    star.style.opacity = Math.random() * 0.5 + 0.5;
    star.style.boxShadow = `0 0 ${size * 4}px #fff`;
    star.style.animation = `twinkle ${Math.random() * 2 + 1}s infinite alternate`;
    star.style.position = 'absolute';
    starsContainer.appendChild(star);
  }
}
//mute button
  const video = document.getElementById('projectVideo');
      const muteBtn = document.getElementById('muteBtn');
      muteBtn.addEventListener('click', function() {
        video.muted = !video.muted;
        muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
      });
createStars();
// //locomotive initialization
// var scroll=new LocomotiveScroll({
//   el:document.querySelector(".body"),
//   smooth:true
// });

 // dark mode logic
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  function setTheme(mode) {
    if (mode === 'night') {
      document.body.classList.add('night-mode');
      themeIcon.textContent = '☀️';
      localStorage.setItem('theme', 'night');
    } else {
      document.body.classList.remove('night-mode');
      themeIcon.textContent = '🌙';
      localStorage.setItem('theme', 'dark');
    }
  }
  themeToggle.addEventListener('click', function() {
    if (document.body.classList.contains('night-mode')) {
      setTheme('dark');
    } else {
      setTheme('night');
    }
  });
  setTheme(localStorage.getItem('theme') === 'night' ? 'night' : 'dark');
// Swiper JS initialization
 const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 1,
  spaceBetween: 30,
});
// gsap initialization

var tl = gsap.timeline();
tl.from(".container",{
  y:60,
  opacity:0,
  duration:1
})
tl.from(".name", {
  stagger: 1.5,
  y: 10,
  delay: 0.3,
  duration: 0.5,
  opacity: 0,
  color: "red"
});
tl.from(".right img", {
 
  scale:1.5,
  borderRadius:"80%",
  duration: 1,
  opacity: 0,
  backgroundColor: "black"
});
tl.from("#nav a", {
  stagger: 1,
  y: 40,
  duration: 1,
  opacity: 0,
});
tl.from(".library ul li ", {
  stagger: 1,
  y: 40,
  duration: 1,
  opacity: 0,
  color: "blue"
});
tl.from(".resume", {
  y: 20,
  duration: 0.8,
  opacity: 0,

});
gsap.registerPlugin(ScrollTrigger);
gsap.from("#about .img img:first-child", {
  x: -800,
  borderRadius: "100%",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about .img img:first-child",
    start: "top 95%",
    end: "top 65%",
    toggleActions: "play none none none",
    scrub: true 
  }
});
gsap.from("#about .img img:nth-child(2)", 
{
  x: 360,
  borderRadius: "100%",
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: "#about .img img:first-child",
    start: "top 95%",
    end: "top 65%",
    toggleActions: "play none none none",
    scrub: true 
  }
});
gsap.from("#summary", {
  y:90,
  duration:1.5,
  opacity: 0,
  color:"blue",
  scrollTrigger: {
    trigger: "#summary",
    start: "top 98%",
    toggleActions: "play none none none",
    scrub:true
  }

});
gsap.from("#edu .edu-row", {
  y:90,
  duration:1.5,
  opacity: 0,
  color:"green",
  scrollTrigger: {
    trigger: "#edu .edu-row",
    start: "top 98%",
    toggleActions: "play none none none",
    scrub:2
  }

});
gsap.from("#btn-container ", {
   y:50,
  duration:1.2,
  opacity: 0,
  scrollTrigger: {
    trigger: "#btn-container ",
   scroller:"body",
   start: "top 130%",
    scrub:true,
   
  }

});
gsap.from(".projects1 h2 ", {
   y:80,
  duration:1,
  opacity: 0,
  color:"red",
  scrollTrigger: {
    trigger: ".projects1 h2",
   scroller:"body",
   start: "top 60%",
   end:"top 40%",
    scrub:true,
   
  }

});
gsap.from(".project2 h2 ", {
   y:80,
  duration:1,
  opacity: 0,
  color:"red",
  scrollTrigger: {
    trigger: ".project2 h2",
   scroller:"body",
   start: "top 80%",
   end: "top 40%",
    scrub:true,
  }

});
gsap.from("#contact h1 ", {
   x:-750,
  duration:1,
  opacity: 0,
  color:"black",
  scrollTrigger: {
    trigger: "#contact h1",
   scroller:"body",
   start: "top 280%",
   end:"top -260",
    scrub:true,
   
  }

});


