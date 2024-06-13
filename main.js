
"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let ratings = document.querySelectorAll("[data-rating]");
  let selectedRating = 0;

  ratings.forEach((rating) => {
    rating.addEventListener("click", () => {
      selectedRating = parseInt(rating.getAttribute("data-value"));
      activateRating(selectedRating);
    });
  });

  function activateRating(value) {
    ratings.forEach((rating) => {
      rating.classList.remove("bg-primary-orange", "text-neutral-white");
      rating.classList.add("bg-neutral-dark-blue", "text-neutral-light-grey");
    });

    ratings[value - 1].classList.add("bg-primary-orange", "text-neutral-white");
  }

  document.querySelector("[data-submit]").addEventListener("click", () => {
    if (selectedRating > 0) {
      let message = document.querySelector("[data-message]");
      message.innerHTML = `
        <div class="card bg-gradient-to-b from-neutral-dark-blue to-neutral-very-dark-blue rounded-lg p-6 max-w-xs mx-auto text-center">
          <div class="flex justify-center my-7">
            <img src="./images/illustration-thank-you.svg" alt="Thank you illustration" />
          </div>
          <p class="rounded-2xl bg-neutral-dark-blue py-3 text-primary-orange font-bold mb-6">
            You selected ${selectedRating} out of 5
          </p>
          <h2 class="text-2xl font-bold text-white mb-3">Thank you!</h2>
          <p class="text-neutral-light-grey mb-7">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </div>
      `;
    }
  });
});

