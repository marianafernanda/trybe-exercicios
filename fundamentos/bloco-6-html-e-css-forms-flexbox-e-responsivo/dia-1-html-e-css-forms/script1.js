const button = document.getElementById("button");
const button2 = document.getElementById("button2");
const input = document.querySelectorAll("input");
const textarea = document.getElementById("textarea");

function interrompeBotao(event) {
  event.preventDefault();
}
button.addEventListener("click", interrompeBotao);

function apagaTudo() {
  for (let index = 0; index < input.length; index += 1) {
    const inputs = input[index];
    inputs.value = "";
    inputs.checked = false;
  }
  textarea.value = "";
}
button2.addEventListener("click", apagaTudo);
