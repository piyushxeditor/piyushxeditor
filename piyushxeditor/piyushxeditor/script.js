document.addEventListener("DOMContentLoaded", () => {

    // Page load animation
    document.body.classList.add("loaded");

    // Scroll animations
    const animatedItems = document.querySelectorAll(
        ".project, .service"
    );

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                }

            });
        },
        {
            threshold: 0.15
        }
    );

    animatedItems.forEach((item) => {
        observer.observe(item);
    });

});