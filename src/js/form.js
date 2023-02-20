const btnContact = document.querySelector(".contact__form-btn");
const errorInfo = document.querySelector(".info__error");

const checkBoxes = (event) => {
  event.preventDefault();
  let count = 0;
  const minLenght = 6;
  const emailRegex = /\S+@\S+\.\S+/;
  for (const inputName in inputs) {
    if (inputs[inputName].value.trim().length < minLenght) {
      inputs[inputName].style.border = "2px solid red";
      errorInfo.textContent = "Pole musi zawierać min. 6 znaków";
      count++;
    } else if (
      inputName === "inputEmail" &&
      !emailRegex.test(inputs[inputName].value)
    ) {
      inputs[inputName].style.border = "2px solid red";
      errorInfo.textContent = "Wpisz poprawnie mail";
      count++;
    } else {
      inputs[inputName].style.border = "1px solid rgba(0,0,0,.6)";
    }
  }
  if (count > 0) {
    errorInfo.style.display = "block";
  } else {
    errorInfo.style.display = "none";
  }
};

btnContact.addEventListener("click", checkBoxes);
