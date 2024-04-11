window.scroll(() => (document.body.style.pointerEvents = "none"));

const buttons = document.querySelectorAll("svg");
const links = document.querySelectorAll(".link");
// Add click event listeners to each button
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    buttons.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
});


links.forEach(function (button) {
  button.addEventListener("click", function () {
    // Remove 'active' class from all buttons
    links.forEach(function (btn) {
      btn.classList.remove("active");
    });
    // Add 'active' class to the clicked button
    this.classList.add("active");
  });
});

const leftContainer = document.querySelector(".left-container");
const middleContainer = document.querySelector(".middle-container");
const rightContainer = document.querySelector(".right-container");

leftContainer.addEventListener("scroll", (e) => {
  window.scrollY = "none";
  console.log("hello");
});

rightContainer.addEventListener("mouseover", (e) => {
  disableScroll();
});
rightContainer.addEventListener("mouseout", () => {
  enableScroll();
});

function disableScroll() {
  // Get the current scroll position
  var scrollPosition = [
    window.self.pageXOffset ||
      document.documentElement.scrollLeft ||
      document.body.scrollLeft,
    window.self.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop,
  ];
  // Save the current scroll position
  window.onscroll = function () {
    window.scrollTo(scrollPosition[0], scrollPosition[1]);
  };
}

function enableScroll() {
  window.onscroll = null;
}
const likeButtonContainer = document.querySelectorAll(".like-button-text");

//toggle of like button
likeButtonContainer.forEach((element) => {
  let isToggle = false;
  element.addEventListener("click", (e) => {
    isToggle = !isToggle;
    const likeButton = element.querySelector(".like-button");
    if (isToggle) {
      likeButton.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv4rp6TWxXOFjUNn5FLih5w9GVIZHk3QJTFGzbwZ6_A&s" alt="" style="height: 20px;width: 20px;">`;
    } else {
      likeButton.innerHTML = `<i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
      style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/33uRJSkrOlX.png&quot;); background-position: 0px -796px; background-size: 26px 1522px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>`;
    }
  });
});
