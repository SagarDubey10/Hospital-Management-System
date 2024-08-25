document.addEventListener("DOMContentLoaded", function() {
    const patientLinks = document.querySelectorAll(".patient-link");

    patientLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const imageUrl = this.dataset.src;
            openModal(imageUrl);
        });
    });

    function openModal(imageUrl) {
        const modal = document.createElement("div");
        modal.classList.add("modal");

        const image = document.createElement("img");
        image.src = imageUrl;
        image.alt = "Patient Details";
        image.classList.add("modal-image");

        modal.appendChild(image);
        document.body.appendChild(modal);

        const exitButton = document.createElement("button");
        exitButton.textContent = "X";
        exitButton.classList.add("exit-button");
        modal.appendChild(exitButton);

        exitButton.addEventListener("click", closeModal);

        // Add event listeners for zooming functionality
        image.addEventListener("click", toggleZoom);
    }

    function closeModal() {
        const modal = document.querySelector(".modal");
        modal.remove();
    }

    // Function to toggle zoom on image
    function toggleZoom(event) {
        const image = event.target;
        image.classList.toggle("zoomed");
    }
});
