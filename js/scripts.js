
const fadeUp = gsap.utils.toArray('.fade-up');
fadeUp.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 75%",
        // end: "top -20%",
        // markers: true
        // once: true
    })
})


const fadeLeft = gsap.utils.toArray('.fade-left');
fadeLeft.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 70%",
        // end: "top -20%",
        // markers: true,
        once: true

    })
})

const fadeRight = gsap.utils.toArray('.fade-right');
fadeRight.forEach((text, i) => {
    ScrollTrigger.create({
        trigger: text,
        toggleClass: 'active',
        start: "top 70%",
        // end: "top 0%",
        // markers: true
        once: true

    })
})

const timeline = gsap.timeline({defaults: {ease: "power1.out"} });
timeline.to('.text', {y: "0%", duration: 1.2, stagger: 0.5});
timeline.to('.navbutton', {y: "0%", duration: 0.7, stagger: 0.1, ease: "bounce"});
timeline.to('#sllogo', {y: "0%", duration: 0.7, delay: 1.2, ease: "power2"}, 1);


const showDetail = (element) => {   // projectXdetail
    if(document.getElementById(element).style.cssText === "transform: scaleY(1); height: 400px; opacity: 1;"){

        document.getElementById(element).style.transform = "scaleY(0)";
        document.getElementById(element).style.height = "0";
        document.getElementById(element).style.opacity = 0;

        document.getElementById(`${element}-expand`).style.transform = "rotate(180deg)"  
    }
    else {
    document.getElementById(element).style.transform = "scaleY(1)"; // from scaleY(0)
    document.getElementById(element).style.height = "400px";    // from 0px
    document.getElementById(element).style.opacity = 1;    // from 0

    document.getElementById(`${element}-expand`).style.transform = "rotate(0deg)"    // from 0

    }

 }

 var flkty = new Flickity( '.main-gallery1', {
    // options
    cellAlign: 'left',
    contain: true
  });
  
 var flkty2 = new Flickity( '.main-gallery2', {
    // options
    cellAlign: 'left',
    contain: true
  });

  var flkty3 = new Flickity( '.main-gallery3', {
    // options
    cellAlign: 'left',
    contain: true
  });


const scrollToDestination = (element) => {
    console.log("trigger")
    const targetToScroll = document.getElementById(element);
    targetToScroll.scrollIntoView({behavior: 'smooth'});
}

