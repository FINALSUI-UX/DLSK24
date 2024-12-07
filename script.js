document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            // Prevent default action if needed (e.g., if using # links)
            event.preventDefault();
            // Remove active class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            // Add active class to the clicked link
            this.classList.add('active');
        });
    });
});

function handleScroll() {
    const homeLink = document.getElementById('home-link');
    const aboutLink = document.getElementById('tentang');

    // Get the scroll position
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    // Check the position of the Home section
    const homeSection = document.getElementById('home');
    const aboutSection = document.getElementById('tentang');
    const otherSections = [
        document.getElementById('other1'),
        document.getElementById('other2'),
        document.getElementById('other3')
    ];

    // Check if the current scroll position is within the Home section
    if (scrollPosition >= homeSection.offsetTop && scrollPosition < aboutSection.offsetTop) {
        homeLink.classList.add('active');
        aboutLink.classList.remove('active');
    } 

    // Check if the current scroll position is within the About section
    else if (scrollPosition >= aboutSection.offsetTop && scrollPosition < otherSections[0].offsetTop) {
        aboutLink.classList.add('active');
        homeLink.classList.remove('active');
    } 

    // If scrolling past the About section, check for other sections
    else {
        homeLink.classList.remove('active');
        about.classList.remove('active');
    }

}


// Add scroll event listener
window.addEventListener('scroll', handleScroll);

function openCatalog(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Hide all tab content
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", ""); // Remove active class from all tabs
    }
    document.getElementById(cityName).style.display = "block"; // Show the selected tab content
    evt.currentTarget.className += " active"; // Add active class to the clicked tab
}



// Automatically open the London tab content on page load
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('digital').style.display = "block"; // Ensure London is displayed
});

let calcScrollValue = () => {
    let scrollProgress = document.getElementById 
    ("progress");
    let progressValue = document.getElementById 
    ("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = 
        document.documentElement.scrollHeight - 
        document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);

    if (pos > 100) {
        scrollProgress.style.display = "grid";
    } else {
        scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
        document.documentElement.scrollTop = 0;
    });

    scrollProgress.style.background = `conic-gradient(#e60013 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

var target_mili_sec = new Date("Dec 22, 2024 14:30:0").getTime();
function timer(){
var now_mili_sec = new Date().getTime();
var remaining_sec = Math.floor( (target_mili_sec - now_mili_sec) / 1000);

var day = Math.floor(remaining_sec / (3600 * 24));
var hour = Math.floor((remaining_sec % (3600 * 24)) / 3600);
var min = Math.floor((remaining_sec % 3600) / 60);
var sec = Math.floor(remaining_sec % 60);

document.querySelector("#day").innerHTML = day;
document.querySelector("#hour").innerHTML = hour;
document.querySelector("#min").innerHTML = min;
document.querySelector("#sec").innerHTML = sec;
}

setInterval(timer, 1000); //1000 means 1 sec