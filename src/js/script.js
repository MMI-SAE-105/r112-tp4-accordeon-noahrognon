const accordeon = document.querySelector(".accordeon");

// Add click event to all details elements
accordeon.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", () => {
        if (details.open) {
            // Close all other details
            accordeon.querySelectorAll("details").forEach((other) => {
                if (other !== details) {
                    other.open = false;
                }
            });
        }
    });
});
