let prevScrollPos = window.pageYOffset;
let ticking = false;

window.addEventListener("scroll", function() {
    if (!ticking) {
        window.requestAnimationFrame(function() {
            let currentScrollPos = window.pageYOffset;
            const scrolled = window.scrollY;

            if (prevScrollPos > currentScrollPos || scrolled === 0) {
                document.querySelector('.navbar').style.transition = 'top 0.5s ease, background-color 0.5s ease';
                document.querySelector('.navbar').style.top = '0';
                document.querySelector('.navbar').style.backgroundColor = 'black';
            } else {
                document.querySelector('.navbar').style.transition = 'top 0.5s ease, background-color 0.5s ease';
                document.querySelector('.navbar').style.top = '-150px';
            }

            prevScrollPos = currentScrollPos;
            ticking = false;
        });

        ticking = true;
    }
});

function reveal_left() {
    var reveals = document.querySelectorAll(".reveal_left");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
        }
    }
    window.addEventListener("load",reveal_left);

    function reveal_right() {
    var reveals = document.querySelectorAll(".reveal_right");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
        } else {
        reveals[i].classList.remove("active");
        }
        }
    }
    window.addEventListener("load",reveal_right);
    window.addEventListener("scroll",reveal_left);
    window.addEventListener("scroll",reveal_right);