// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

function clickHref(event) {
  event.preventDefault();
}
HREF_LINK.addEventListener("click", clickHref);

function clickCheckbox(event) {
  event.preventDefault();
}
INPUT_CHECKBOX.addEventListener("click", clickCheckbox);

function clickInput(event) {
    const letra = event.key;
    if (letra !== 'a') {
        event.preventDefault();
    }
}
INPUT_TEXT.addEventListener("keypress", clickInput);
