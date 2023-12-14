// Toggle mobile navigation
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Handle form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const formDataObject = {};
    formData.forEach((value, key) => {
        formDataObject[key] = value;
    });


    //alert with a simple email response
    const emailResponse = `Thank you, ${formDataObject.name}! Your message has been received, will be back soon.`;
    alert(emailResponse);

    //reset the form after submission
    contactForm.reset();
});
