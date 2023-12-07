// Function to change color of elements on scroll
function changeElementColorsOnScroll() {
    const nameElement = document.getElementById('nameSpan');
    const homeLink = document.getElementById('li1'); // Target the "Home" link
    const aboutLink = document.getElementById('li2'); // Target the "About" link
    const contactLink = document.getElementById('li3'); // Target the "Contact" link

    if (window.scrollY > 0) {
        navbar.classList.add('whiteBackground');
        nameElement.style.color = 'black';
        homeLink.style.color = 'black';
        aboutLink.style.color = 'black';
        contactLink.style.color = 'black';
    } else {
        navbar.classList.remove('whiteBackground');
        nameElement.style.color = 'white';
        homeLink.style.color = 'white';
        aboutLink.style.color = 'white';
        contactLink.style.color = 'white';
    }
}

document.getElementById('li1').addEventListener('mouseover', function() {
    this.style.color = '#ea4f4c';
});
document.getElementById('li1').addEventListener('mouseout', function() {
    if (window.scrollY > 0)
    {
        this.style.color = 'black';
    }
    else
    {
        this.style.color = 'white';
    }
});

document.getElementById('li2').addEventListener('mouseover', function() {
    this.style.color = '#ea4f4c';
});
document.getElementById('li2').addEventListener('mouseout', function() {
    if (window.scrollY > 0)
    {
        this.style.color = 'black';
    }
    else
    {
        this.style.color = 'white';
    }
});

document.getElementById('li3').addEventListener('mouseover', function() {
    this.style.color = '#ea4f4c';
});
document.getElementById('li3').addEventListener('mouseout', function() {
    if (window.scrollY > 0)
    {
        this.style.color = 'black';
    }
    else
    {
        this.style.color = 'white';
    }
});

// Listen for scroll events and call the function to change colors
window.addEventListener('scroll', changeElementColorsOnScroll);


