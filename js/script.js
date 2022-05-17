// OVERLAY NAV MENU SHOW HIDE

const mymenubutton = document.querySelector('.menu-button');
const mysitenav = document.querySelector('.site-header .site-nav');

mymenubutton.onclick = function () {
    if (mysitenav.getAttribute('data-navstate') === 'open') {
        mysitenav.setAttribute('data-navstate', 'closed')
    } else {
        mysitenav.setAttribute('data-navstate', 'open')
    }
};

//STICKY NAV - CLOSE THE NAV ON STICKY HEADER NAV LINK CLICKS
const myheadernavlinks = document.querySelectorAll(".site-header .site-nav a");

for (var i = 0; i < myheadernavlinks.length; i++) {
    myheadernavlinks[i].addEventListener('click', function () {
        mysitenav.setAttribute('data-navstate', 'closed');
    });
};



// REVEAL ON SCROLL JS
// CHANGE ACTIVE STATE FOR ALL SECTIONS WITH INTERSECTION OBSERVOR

const io_options = {
    // root: document.body,
    rootMargin: '-25% 0px -25% 0px',
    threshold: 0
};

const myobserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.setAttribute('data-sectionstate', 'active');
        } else {
            entry.target.setAttribute('data-sectionstate', 'inactive');
        }
    });
}, io_options);
document.querySelectorAll('.animate-on-scroll').forEach((section) => {
    myobserver.observe(section);
});


// PARALLAX USING DAVID EFHAN'S GIFTBAG.JS CODE
function parallax({ el, ease = "linear" }) {
    let ticking = false;

    function runParallax() {
        const pageTop = window.pageYOffset;
        const pageMid = pageTop + window.innerHeight / 2;

        // Run this if it already has a data attribute set
        const topSection = el.offsetTop;
        const midSection = topSection + el.offsetHeight / 2;

        const viewDistanceLeft = pageMid - midSection;
        const parallaxSpeed = parseFloat(el.getAttribute("data-parallax-speed"));

        // Sets the parallax direction
        let direction = "";

        if (el.hasAttribute("data-parallax-direction")) {
            // Direction to value of the attribute
            direction = el.getAttribute("data-parallax-direction");
        } else {
            // Set default direction to vertical
            direction = "vertical";
        }

        // Handle transform based on direction
        if (direction.toLowerCase() === "vertical") {
            el.style.transform = `translate3d(0, ${(viewDistanceLeft * parallaxSpeed) / 3
                }px, 0)`;
        } else if (direction.toLowerCase() === "horizontal") {
            el.style.transform = `translate3d( ${(viewDistanceLeft * parallaxSpeed) / 3
                }px, 0, 0)`;
        }

        el.style.transition = `transform ${ease}`;
    }

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(() => {
                runParallax();
                ticking = false;
            });
        }
        ticking = true;
    });
}

// Parallax
const parallaxElements = document.querySelectorAll(".parallax-element");
parallaxElements.forEach((el) => parallax({ el }));


