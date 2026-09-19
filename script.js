/* =========================================
   MOBILE MENU
========================================= */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.querySelector(".nav-links");


menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* Close menu after clicking a link */

const navItems =
    document.querySelectorAll(".nav-links a");


navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});



/* =========================================
   TRIP PLANNER
========================================= */

const planButton =
    document.getElementById("planTrip");

const result =
    document.getElementById("result");


planButton.addEventListener("click", () => {


    const destination =
        document
        .getElementById("destination")
        .value
        .trim();


    const travelers =
        document
        .getElementById("travelers")
        .value;


    const days =
        document
        .getElementById("days")
        .value;


    const budget =
        document
        .getElementById("budget")
        .value;


    /* Check input */

    if (
        destination === "" ||
        travelers === "" ||
        days === "" ||
        budget === ""
    ) {

        result.style.display = "block";

        result.textContent =
            "Please enter all your trip details.";

        return;

    }


    /* Show result */

    result.style.display = "block";


    result.innerHTML = `

        🔎 Finding similar trips to
        <strong>${destination}</strong>

        for ${travelers} travelers,
        ${days} days,
        with a budget of
        ₹${Number(budget).toLocaleString("en-IN")}
        per person...

    `;


    /* Change button temporarily */

    planButton.innerHTML =
        "Finding Similar Trips...";


    planButton.disabled = true;


    /* Simulate searching */

    setTimeout(() => {

        result.innerHTML = `

            ✨ We found
            <strong>15 similar trips</strong>
            to ${destination}.

            <br>

            Your estimated trip budget:
            <strong>
                ₹${Number(budget).toLocaleString("en-IN")}
            </strong>
            per person.

        `;


        planButton.innerHTML =
            "Explore Similar Trips →";


        planButton.disabled = false;

    }, 1800);

});



/* =========================================
   MOUSE PARALLAX
========================================= */

const cards =
    document.querySelectorAll(".destination-card");


document.addEventListener("mousemove", (event) => {


    /* Disable on small screens */

    if (window.innerWidth < 900) {
        return;
    }


    const x =
        (event.clientX / window.innerWidth - 0.5);


    const y =
        (event.clientY / window.innerHeight - 0.5);


    cards.forEach((card, index) => {


        const intensity =
            12 + index * 4;


        card.style.marginLeft =
            `${x * intensity}px`;


        card.style.marginTop =
            `${y * intensity}px`;

    });

});



/* =========================================
   REVEAL ELEMENTS ON SCROLL
========================================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .step"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                }

            });

        },

        {
            threshold: 0.15
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    observer.observe(element);

});