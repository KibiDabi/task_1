class MySection extends HTMLElement {
  constructor() {
    super();
    this.toggleButton = null;
    this.originalText = null;
    this.extraText = null;
  }

  connectedCallback() {
    this.toggleButton = this.querySelector(".custom-section__toggle-button");
    this.originalText = this.querySelector('.custom-section__description');
    this.extraText = this.querySelector(".custom-section__extra-text");

    // Add toggle functionality
    this.toggleButton.addEventListener("click", () => {
      this.toggleVisibility();
    });

    // Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.classList.add("custom-section--visible");
          } else {
            this.classList.remove("custom-section--visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(this);
  }

  // Function to toggle between original and extra text visibility
  toggleVisibility() {

    // Hide the original text and show the extra text
    this.originalText.classList.toggle("custom-section__text--hidden");
    this.extraText.classList.toggle("custom-section__extra-text--visible");
  }
}

// Define the custom element
customElements.define("my-section", MySection);
