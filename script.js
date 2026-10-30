
// MOBILE NAVIGATION

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(function(link) {
    link.addEventListener("click", function() {
        navLinks.classList.remove("active");
    });
});


// FINANCIAL GROWTH CALCULATOR

const calculateBtn = document.getElementById("calculateBtn");

calculateBtn.addEventListener("click", function() {

    const amount = Number(document.getElementById("amount").value);
    const rate = Number(document.getElementById("rate").value);
    const years = Number(document.getElementById("years").value);

    const result = document.getElementById("result");
    const message = document.getElementById("message");

    if (
        !Number.isFinite(amount) ||
        !Number.isFinite(rate) ||
        !Number.isFinite(years) ||
        amount <= 0 ||
        rate < 0 ||
        rate > 100 ||
        years < 1 ||
        years > 100 ||
        !Number.isInteger(years)
    ) {
        result.textContent = "Invalid Input";
        message.textContent = "Please enter valid figures.";
        return;
    }

    const futureValue =
        amount * Math.pow(1 + rate / 100, years);

    result.textContent = futureValue.toLocaleString("en-ZA", {
        style: "currency",
        currency: "ZAR"
    });

    message.textContent =
        "Estimated value after " + years + " years.";

});


// REGISTRATION FORM

const registrationForm =
    document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("fullName").value;
    const email = document.getElementById("registerEmail").value;
    const interest = document.getElementById("interest").value;

    const subject = encodeURIComponent("Grow Together - Enquiry");

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\nInterest: " + interest
    );

    window.location.href =
        "mailto:waynejunior732@gmail.com?subject=" +
        subject + "&body=" + body;

});


// CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const userMessage = document.getElementById("contactMessage").value;

    const subject = encodeURIComponent("Grow Together Website Enquiry");

    const body = encodeURIComponent(
        "Name: " + name +
        "\nEmail: " + email +
        "\n\nMessage:\n" + userMessage
    );

    window.location.href =
        "mailto:waynejunior732@gmail.com?subject=" +
        subject + "&body=" + body;

});
