const goodButton = document.getElementById("good-feedback");
const badButton = document.getElementById("bad-feedback");
const feedbackContainer = document.getElementById("feedback-container");

goodButton.addEventListener("click", () => {
  feedbackContainer.innerHTML = "Thank you for your good feedback!";
});

badButton.addEventListener("click", () => {
  feedbackContainer.innerHTML = "We're sorry to hear that you had a bad experience. Please let us know how we can improve.";
});
