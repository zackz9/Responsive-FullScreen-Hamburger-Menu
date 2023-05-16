const tl = gsap.timeline({paused: true});

const animateOpenNav = () => {
    tl.to('.nav-container', .2, {
        autoAlpha:1,
        delay:0.1,
    });
    tl.to('.site-logo', 0.2, {
        color:'#fff',
    }, "-=0.1")
}

const openNav = () => {
    animateOpenNav();
    const navBtn = document.getElementById('menu-toggle-btn');
    navBtn.onclick = function(e) {
        navBtn.classList.toggle('active');
        tl.reversed(!tl.reversed());
    };
};

openNav();

tl.from(".flex > div", 0.4, {
    opacity:0,
    y:10,
    stagger: {
        amount:0.04,
    },
})
tl.from(".nav-link > a", 0.3, {
    opacity:0,
    ease:"power2.inOut",
    stagger: {
        amount:0.03,
    }
}, "-0.3=");

tl.from(".nav-footer", 0.3, {
    opacity:0,
    
}, "-0.5=").reverse()