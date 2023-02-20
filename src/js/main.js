const footer = document.querySelector(".footer__year");
const btnBurger = document.querySelector(".burger-btn__bars");
const section = document.querySelectorAll("section");
const header = document.querySelector("header");
const btnMenu = document.querySelector(".burger-btn");
const navMobile = document.querySelector(".nav__mobile");
const navMobileLinks = document.querySelectorAll(".nav__mobile-link");
const inputs = {
  inputName: document.querySelector("#name"),
  inputEmail: document.querySelector("#email"),
  textArea: document.querySelector("#msg"),
};
// const btnContact = document.querySelector(".contact__form-btn");
// const errorInfo = document.querySelector(".info__error");

const handleYear = () => {
  const year = new Date().getFullYear();
  footer.textContent = year;
};

const handleBar = () => {
  const currentScroll = window.scrollY;
  section.forEach((sec) => {
    if (
      sec.classList.contains("black-section") &&
      sec.offsetTop <= currentScroll + 60
    ) {
      btnBurger.classList.add("white-bars-color");
    } else if (
      !sec.classList.contains("black-section") &&
      sec.offsetTop <= currentScroll + 60
    ) {
      btnBurger.classList.remove("white-bars-color");
    }
    if (currentScroll < 60) {
      btnBurger.classList.remove("white-bars-color");
    }
  });
};

const handleMenu = () => {
  navMobile.classList.toggle("nav__mobile--active");
};

// const checkBoxes = (event) => {
//   event.preventDefault();
//   let count = 0;
//   const minLenght = 6;
//   const emailRegex = /\S+@\S+\.\S+/;
//   for (const inputName in inputs) {
//     if (inputs[inputName].value.trim().length < minLenght) {
//       inputs[inputName].style.border = "2px solid red";
//       errorInfo.textContent = "Pole musi zawierać min. 6 znaków";
//       count++;
//     } else if (
//       inputName === "inputEmail" &&
//       !emailRegex.test(inputs[inputName].value)
//     ) {
//       inputs[inputName].style.border = "2px solid red";
//       errorInfo.textContent = "Wpisz poprawnie mail";
//       count++;
//     } else {
//       inputs[inputName].style.border = "1px solid rgba(0,0,0,.6)";
//     }
//   }
//   if (count > 0) {
//     errorInfo.style.display = "block";
//   } else {
//     errorInfo.style.display = "none";
//   }
// };

// btnContact.addEventListener("click", checkBoxes);
btnMenu.addEventListener("click", handleMenu);
document.addEventListener("scroll", handleBar);
handleYear();
navMobileLinks.forEach((link) => link.addEventListener("click", handleMenu));
