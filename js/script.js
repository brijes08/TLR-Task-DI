// For Header Responsive
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });
    hamburger.classList.toggle("toggle");
});



function wefix(evt, wefixName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("wefix_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("wefix_tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(wefixName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("wefix").click();


function leather(evt, leatherName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("leather_tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("leather_tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(leatherName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("leather").click();


// For Slider
$('.our_work_car').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    // navText: [
    //     "<i class='fa fa-angle-left'></i>",
    //     "<i class='fa fa-angle-right'></i>"
    // ],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        576: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});


// For Slider
$('.testimonials_car').owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2000,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayHoverPause: true,
    // navText: [
    //     "<i class='fa fa-angle-left'></i>",
    //     "<i class='fa fa-angle-right'></i>"
    // ],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        576: {
            items: 1,
            nav: false,
        },
        768: {
            items: 1,
            nav: false,
        },
        1024: {
            items: 1,
        },
        1200: {
            items: 1,
        }
    }
});