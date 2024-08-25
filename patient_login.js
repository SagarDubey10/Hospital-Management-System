document.addEventListener("DOMContentLoaded", function() {
    const recordLinks = document.querySelectorAll(".record-link");

    recordLinks.forEach(link => {
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
        image.alt = "Scanned Report";
        image.classList.add("modal-image");

        modal.appendChild(image);
        document.body.appendChild(modal);

        const exitButton = document.createElement("button");
        exitButton.textContent = "X";
        exitButton.classList.add("exit-button");
        modal.appendChild(exitButton);

        modal.addEventListener("click", closeModal);
        image.addEventListener("click", toggleZoom);
    }

    function closeModal(event) {
        if (event.target.classList.contains("modal") || event.target.classList.contains("exit-button")) {
            const modal = document.querySelector(".modal");
            modal.remove();
        }
    }

    function toggleZoom(event) {
        const image = event.target;
        image.classList.toggle("zoomed");
    }
});
