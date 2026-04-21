// ===================== Register GSAP Plugins =====================

gsap.registerPlugin(ScrollTrigger, TextPlugin, ScrollSmoother, ScrollToPlugin);

// ===================== Rolling Text Hover =====================
document.querySelectorAll(".rolling-text").forEach((el) => {
    const text = el.dataset.text || el.textContent.trim();
    el.innerHTML = "";

    const wrapper = document.createElement("span");
    wrapper.className = "text-wrapper";

    ["line1", "line2"].forEach(() => {
        const span = document.createElement("span");
        span.className = "text-line";
        span.textContent = text;
        wrapper.appendChild(span);
    });

    el.appendChild(wrapper);

    el.addEventListener("mouseenter", () => {
        gsap.to(wrapper, { yPercent: -50, duration: 0.4, ease: "power2.out" });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(wrapper, { yPercent: 0, duration: 0.4, ease: "power2.out" });
    });
});

// ===================== Split Text Lines Scroll Animation =====================
$(function () {
    const splitTextLines = gsap.utils.toArray(".splittext-line");
    splitTextLines.forEach((splitTextLine) => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: splitTextLine,
                start: "top 90%",
                duration: 2,
                end: "bottom 60%",
                scrub: false,
                markers: false,
                toggleActions: "play none none none",
            },
        });

        const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
        gsap.set(splitTextLine, { perspective: 400 });
        itemSplitted.split({ type: "lines" });

        tl.from(itemSplitted.lines, {
            duration: 1,
            delay: 0.5,
            opacity: 0,
            rotationX: -80,
            force3D: true,
            transformOrigin: "top center -50",
            stagger: 0.1,
        });
    });
});

// ===================== Text Opacity Animation =====================
document.querySelectorAll(".text-opacity-animation").forEach((el) => {
    el.innerHTML = el.textContent
        .split("")
        .map((char) => (char === " " ? " " : `<span style="opacity:0.3">${char}</span>`))
        .join("");

    const letters = el.querySelectorAll("span");

    gsap.timeline({
        scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 60%",
            scrub: true,
        },
    }).to(letters, {
        opacity: 1,
        stagger: 0.05,
        ease: "power1.out",
        duration: 0.3,
    });
});

// ===================== Poort Text Animations =====================
window.addEventListener("load", () => {
    const st = document.querySelectorAll(".poort-text");
    if (st.length === 0) return;

    st.forEach((el) => {
        el.split = new SplitText(el, { type: "lines,words,chars", linesClass: "poort-line" });
        gsap.set(el, { perspective: 600 });

        if (el.classList.contains("poort-in-right")) gsap.set(el.split.chars, { opacity: 0, x: 100 });
        if (el.classList.contains("poort-in-left")) gsap.set(el.split.chars, { opacity: 0, x: -100 });
        if (el.classList.contains("poort-in-up")) gsap.set(el.split.chars, { opacity: 0, y: 200 });
        if (el.classList.contains("poort-in-down")) gsap.set(el.split.chars, { opacity: 0, y: -80 });

        gsap.to(el.split.chars, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            x: 0,
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.02,
            ease: "power2.out",
        });
    });
});

// ===================== Image Scroll Animation =====================
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".new_img-animet").forEach((el) => {
        const image = el.querySelector("img");
        if (!image) return;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: "top 50%",
                toggleActions: "play none none none",
            },
        })
            .set(el, { autoAlpha: 1 })
            .from(el, { xPercent: -100, duration: 2, ease: "power2.out" })
            .from(image, { xPercent: 100, duration: 2, ease: "power2.out" }, "<");
    });
});


// ===================== Horizontal Team Scroll =====================//

gsap.registerPlugin(ScrollTrigger, SplitText);

// Split text (character based)
const textEl = document.querySelector(".about-text-color h2");
const split = new SplitText(textEl, { type: "chars" });

// Initial state
gsap.set(split.chars, {
    opacity: 1,
    color: "#C1C4C8",
});

// Scroll animation
gsap.to(split.chars, {
    color: "#2B2E33",
    stagger: 0.03,
    ease: "none",
    scrollTrigger: {
        trigger: ".about-text-color",
        start: "top 80%",
        end: "bottom 20%",
        scrub: true,
    },
});




const menuLinks = document.querySelectorAll(".menu-link");

if (menuLinks.length) {

    menuLinks.forEach((link) => {

        link.addEventListener("click", (e) => {

            e.preventDefault();

            const target = link.getAttribute("href");

            if (!target || !document.querySelector(target)) return;

            gsap.to(window, {

                duration: 1,

                scrollTo: {

                    y: target,

                    offsetY: 80,

                },

                ease: "power2.out",

            });

        });

    });

}

// ===================== Sticky WPO Header =====================
const wpoHeader = document.querySelector(".wpo-site-header");
let headerPlaceholder = null;
let isSticky = false;
let currentTween = null;

const stickyThreshold = 600;

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;

    if (scrollTop > stickyThreshold && !isSticky) {
        isSticky = true;
        if (!headerPlaceholder) {
            headerPlaceholder = document.createElement("div");
            headerPlaceholder.style.height = wpoHeader.offsetHeight + "px";
            wpoHeader.parentNode.insertBefore(headerPlaceholder, wpoHeader.nextSibling);
        }
        wpoHeader.classList.add("sticky");

        if (currentTween) currentTween.kill();
        currentTween = gsap.fromTo(
            wpoHeader,
            { y: -wpoHeader.offsetHeight },
            { y: 0, duration: 0.4, ease: "power2.out" }
        );

    } else if (scrollTop <= stickyThreshold && isSticky) {
        isSticky = false;
        if (currentTween) currentTween.kill();

        currentTween = gsap.to(wpoHeader, {
            y: -wpoHeader.offsetHeight,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
                wpoHeader.classList.remove("sticky");
                if (headerPlaceholder) {
                    headerPlaceholder.remove();
                    headerPlaceholder = null;
                }
                gsap.set(wpoHeader, { y: 0 });
            }
        });
    }
});