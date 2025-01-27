const submitButton = document.querySelector(".submit-button");

submitButton.onclick = (event) => {
  event.preventDefault();
  const email = document.getElementById("email");
  const message = document.getElementById("message");
  if (
    message.value.length > 3 &&
    email.value.length > 2 &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) {
    alert("Форма отправлена!");
    message.value = "";
    email.value = "";
  } else {
    alert("Заполните форму корректно, пожалуйста");
  }
};

const contactsButton = document.querySelector(".contacts-button");

contactsButton.onclick = () => {
  const contactsModal = document.querySelector(".contacts-modal");
  contactsModal.style.zIndex = "250";
  contactsModal.style.opacity = "1";
};

const goodModalImage = document.querySelector(".good-img");
const buyGoodModalButton = document.querySelector(".good-buy-button");

buyGoodModalButton.onclick = () => {
  const cart = document
    .getElementsByClassName("cart-button")[0]
    .getBoundingClientRect();
  goodModalImage.animate(
    [
      {},
      {
        scale: "0",
        opacity: "0",
      },
      {
        scale: "1",
        opacity: "1",
      },
    ],
    {
      duration: 1500,
      iterations: 1,
    }
  );
};
