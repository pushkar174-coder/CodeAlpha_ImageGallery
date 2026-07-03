// ===============================
// IMAGE GALLERY SCRIPT
// ===============================

// Select Elements
const galleryImages = document.querySelectorAll(".gallery img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

// Current Image Index
let currentIndex = 0;

// -------------------------------
// Open Lightbox
// -------------------------------
galleryImages.forEach((img, index) => {

    img.addEventListener("click", () => {

        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";

    });

});

// -------------------------------
// Show Current Image
// -------------------------------
function showImage() {

    lightboxImage.src = galleryImages[currentIndex].src;

}

// -------------------------------
// Close Button
// -------------------------------
closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// -------------------------------
// Close when Background Click
// -------------------------------
lightbox.addEventListener("click", (e) => {

    if (e.target === lightbox) {

        lightbox.style.display = "none";

    }

});

// -------------------------------
// Next Button
// -------------------------------
nextBtn.addEventListener("click", () => {

    currentIndex++;

    if (currentIndex >= galleryImages.length) {

        currentIndex = 0;

    }

    showImage();

});

// -------------------------------
// Previous Button
// -------------------------------
prevBtn.addEventListener("click", () => {

    currentIndex--;

    if (currentIndex < 0) {

        currentIndex = galleryImages.length - 1;

    }

    showImage();

});

// -------------------------------
// Keyboard Support
// -------------------------------
document.addEventListener("keydown", function (e) {

    if (lightbox.style.display === "flex") {

        if (e.key === "ArrowRight") {

            nextBtn.click();

        }

        if (e.key === "ArrowLeft") {

            prevBtn.click();

        }

        if (e.key === "Escape") {

            lightbox.style.display = "none";

        }

    }

});

// ===============================
// CATEGORY FILTER
// ===============================

const filterButtons = document.querySelectorAll(".buttons button");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        // Active Button
        filterButtons.forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.textContent.toLowerCase();

        galleryImages.forEach(img => {

            if (
                category === "all" ||
                img.dataset.category === category
            ) {

                img.style.display = "block";

            } else {

                img.style.display = "none";

            }

        });

    });

});