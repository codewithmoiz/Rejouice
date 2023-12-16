var crsr = document.querySelector("#cursor");
var hdr = document.querySelector(".header");

function cursor (){
    hdr.addEventListener("mousemove", function (event) {
        gsap.to(crsr, {
            top: event.clientY,
            left: event.clientX,
            scale: 1,
            opacity: 1
        });
    });
    
    hdr.addEventListener("mouseleave", function () {
        gsap.to(crsr, {
            scale: 0,
            opacity: 0
        });
    });
    
}
cursor();

var vid = document.querySelectorAll(".box video");
var boxes = document.querySelectorAll(".page3 .box");

boxes.forEach(function(box) {
    box.addEventListener("mouseover", function() {
        var video = this.querySelector("video");
        gsap.to(video, {
            opacity: 1,
            duration: 0.5
        });
    });

    box.addEventListener("mouseleave", function() {
        var video = this.querySelector("video");
        gsap.to(video, {
            opacity: 0
        });
    });
});

function swiper(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        grabCursor: true,
        autoplay: {
            delay: 500,
            disableOnInteraction: false,
          },
      });
}
swiper();

var check = true;

   

    var tl = gsap.timeline();
    tl.to("#loader",{
        x:0,
        duration:1,
    })
    tl.from("#loader h1",{
        x:30,
        duration:1,
        stagger: 0.5,
        opacity:0
    })
    tl.to("#loader h1",{
        x:-30,
        duration:1,
        stagger: 0.5,
        opacity:0
    })
    tl.to("#loader",{
        x:-1800,
        duration:1,
    })
    tl.from("#split", {
        // opacity: 0,
        y: 50,
        scale: 0.7,
        // rotate: 360*5,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from(".top1 h5", {
        y: 80,
        // opacity: 0, // Uncomment if you want opacity animation
        duration: 1,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
            // markers:true
            // scrub: 3
        }
    });

    gsap.from(".bottom1 p", {
        y: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".page1",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
        }
    });
    gsap.from(".page2 h1,.page2 p", {
        y: -80,
        opacity: 0,
        duration: 0.5,
        stagger:0.3,
        scrollTrigger: {
            trigger: ".page2",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
            // markers:true
            // scrub: 3
        }
    });
    gsap.from(".page3 .box", {
        y: 120,
        // rotate: -30,
        opacity: 0,
        duration: 1.2,
        // stagger:0.5,
        scrollTrigger: {
            trigger: ".page3",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
            // markers:true
            // scrub: 3
        }
    });
    gsap.from(".top2 h5", {
        y: 80,
        // opacity: 0, // Uncomment if you want opacity animation
        duration: 1,
        scrollTrigger: {
            trigger: ".second",
            scroller: "body",
            start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
            // markers:true
            // scrub: 3
        }
    });

    gsap.from(".bottom2 p", {
        y: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".second",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
        }
    });
  
    gsap.from(".page4 video", {
        scale:0.5,
        // rotate:360,
        // repeat: -1,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".page4",
            scroller: "body",
            start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
        }
    });
    
    gsap.from(".top3 h5", {
        y: 80,
        // opacity: 0, // Uncomment if you want opacity animation
        duration: 1,
        scrollTrigger: {
            trigger: ".third",
            scroller: "body",
            start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
            // markers:true
            // scrub: 3
        }
    });

    gsap.from(".bottom3 p", {
        y: -100,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".third",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
        }
    });
    gsap.from("footer .rejouice-heading", {
        y: -130,
        opacity: 0,
        duration: 2,
        scrollTrigger: {
            trigger: ".rejouice-heading",
            scroller: "body",
            // start: "30% 80%", // Change this to start the animation when the top of the section hits the center of the viewport
            // end: "70% 60%",
        }
    });