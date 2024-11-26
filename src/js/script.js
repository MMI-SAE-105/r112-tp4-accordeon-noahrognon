
const accordeon = document.querySelector(".accordeon");


accordeon.querySelectorAll("summary").forEach((summary) => {
    summary.addEventListener("click", (event) => {
        const details = event.target.closest("details");
        accordeon.querySelectorAll("details").forEach((det) => {
            if (det !== details) {
                det.open = false;
            }
        });
    });
});
