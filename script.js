const birthday = "2004-09-30";


const dateInput =
    document.getElementById("date-input");

const unlockButton =
    document.getElementById("unlock-btn");

const errorMessage =
    document.getElementById("error-msg");


unlockButton.addEventListener("click", function () {

    const enteredDate = dateInput.value;


    if (enteredDate === birthday) {

        errorMessage.classList.remove("show");

        // Go to Page 2
        document
            .getElementById("stage-1")
            .classList.remove("active");

        document
            .getElementById("stage-2")
            .classList.add("active");

        // Show the date
        document
            .getElementById("birthday-date")
            .textContent = formatDate(enteredDate);

        // Create sparkles
        createSparkles();


    } else {

        errorMessage.classList.add("show");

    }

});


/* =========================================
   FORMAT DATE
   ========================================= */

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString(
        "en-US",
        {
            month: "long",
            day: "numeric"
        }
    );
}


/* =========================================
   CREATE SPARKLES
   ========================================= */

function createSparkles() {

    const container =
        document.getElementById(
            "sparkle-container"
        );


    // Remove old sparkles
    container.innerHTML = "";


    // Create 35 sparkles
    for (let i = 0; i < 35; i++) {

        const sparkle =
            document.createElement("div");

        sparkle.classList.add("sparkle");


        // Random horizontal position
        sparkle.style.left =
            Math.random() * 100 + "%";


        // Random starting position
        sparkle.style.bottom =
            Math.random() * 20 + "%";


        // Random animation speed
        sparkle.style.animationDuration =
            (5 + Math.random() * 5) + "s";


        // Random delay
        sparkle.style.animationDelay =
            Math.random() * 5 + "s";


        container.appendChild(sparkle);
    }
}
/* =========================================
   PAGE 2 → PAGE 3
   ========================================= */

const continueButton =
    document.getElementById("continue-btn");


continueButton.addEventListener("click", function () {

    // Hide Page 2
    document
        .getElementById("stage-2")
        .classList.remove("active");

    // Show Page 3
    document
        .getElementById("stage-3")
        .classList.add("active");

    // Start loading sequence
    startLoading();

});


/* =========================================
   LOADING SEQUENCE
   ========================================= */

function startLoading() {

    const loadingContent =
        document.getElementById("loading-content");

    const envelopeArea =
        document.getElementById("envelope-area");


    loadingContent.style.display = "flex";

    envelopeArea.style.display = "none";


    // After 3 seconds show envelope
    setTimeout(function () {

        loadingContent.style.display = "none";

        envelopeArea.style.display = "flex";

    }, 3000);

}


/* =========================================
   ENVELOPE CLICK
   ========================================= */

const envelope =
    document.getElementById("envelope");


envelope.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        document
            .getElementById("stage-3")
            .classList.remove("active");

        document
            .getElementById("stage-4")
            .classList.add("active");

        createHearts();

    }, 1200);

});
/* =========================================
   PAGE 4 - FLOATING HEARTS
   ========================================= */

function createHearts() {

    const container =
        document.getElementById("hearts-container");

    container.innerHTML = "";

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("floating-heart");

        heart.textContent = "♥";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.animationDuration =
            (6 + Math.random() * 6) + "s";

        heart.style.animationDelay =
            Math.random() * 5 + "s";

        heart.style.fontSize =
            (12 + Math.random() * 15) + "px";

        container.appendChild(heart);
    }
}
/* =========================================
   PAGE 4 → PAGE 5
   ========================================= */

const letterContinueButton =
    document.getElementById("letter-continue-btn");


letterContinueButton.addEventListener("click", function () {

    document
        .getElementById("stage-4")
        .classList.remove("active");

    document
        .getElementById("stage-5")
        .classList.add("active");

    createBalloons();

    createConfetti();

});
/* =========================================
   CREATE BALLOONS
   ========================================= */

function createBalloons() {

    const container =
        document.getElementById("balloons");

    container.innerHTML = "";

    for (let i = 0; i < 12; i++) {

        const balloon =
            document.createElement("div");

        balloon.classList.add("balloon");

        balloon.style.left =
            Math.random() * 100 + "%";

        balloon.style.animationDuration =
            (8 + Math.random() * 7) + "s";

        balloon.style.animationDelay =
            Math.random() * 5 + "s";

        const colors = [
            "#c41e3a",
            "#ff3b52",
            "#e8b84b",
            "#7d1728",
            "#ffe9e2"
        ];

        balloon.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        container.appendChild(balloon);
    }
}

/* =========================================
   CREATE FLOATING PHOTOS
   ========================================= */

function createFloatingPhotos() {

    const container = document.getElementById("floating-photos");

    container.innerHTML = "";

    const photos = [
        "photo1.jpeg",
        "photo2.jpeg",
        "photo3.jpeg",
        "photo4.jpeg",
        "photo5.jpeg"
    ];

    photos.forEach(function(photo) {

        const img = document.createElement("img");

        img.src = "images/" + photo;
        img.classList.add("floating-photo");

        img.style.left = (2 + Math.random() * 96) + "%";

        img.style.animationDuration =
              (12 + Math.random() * 8) + "s";

        img.style.animationDelay =
             (Math.random() * 10) + "s";

        container.appendChild(img);
    });
}


/* =========================================
   CREATE CONFETTI
   ========================================= */

function createConfetti() {

    const container =
        document.getElementById("celebration-bg");

    container.innerHTML = "";

    for (let i = 0; i < 80; i++) {

        const piece =
            document.createElement("div");

        piece.classList.add("confetti");

        piece.style.left =
            Math.random() * 100 + "%";

        piece.style.animationDuration =
            (3 + Math.random() * 5) + "s";

        piece.style.animationDelay =
            Math.random() * 4 + "s";

        const colors = [
            "#c41e3a",
            "#ff3b52",
            "#e8b84b",
            "#ffe9e2"
        ];

        piece.style.background =
            colors[
                Math.floor(
                    Math.random() * colors.length
                )
            ];

        piece.style.transform =
            "rotate(" +
            Math.random() * 360 +
            "deg)";

        container.appendChild(piece);
    }
}


/* =========================================
   PAGE 5 - ONE MORE SURPRISE
   ========================================= */

letterContinueButton.addEventListener("click", function() {

    document.getElementById("stage-4").classList.remove("active");

    document.getElementById("stage-5").classList.add("active");

    createBalloons();
    createConfetti();
    createFloatingPhotos();

});