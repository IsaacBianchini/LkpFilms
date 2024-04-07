function verificarReCAPTCHA() {
  var response = grecaptcha.getResponse();
  if (response.length === 0) return false;
  else return true;
}

document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (verificarReCAPTCHA()) EnviarEmail();
    else document.getElementById("captcha-error").style.display = "block";
  });

function Carregar(visible) {
  const overlay = document.getElementById("overlay");
  const loader = document.getElementById("loader");

  overlay.style.display = visible;
  loader.style.display = visible;
}

function EnviarEmail() {
  Carregar("block");

  let nome = document.getElementById("inputNome").value;
  let email = document.getElementById("inputEmail").value;
  let negocio = document.getElementById("inputNegocio").value;
  let descricao = document.getElementById("textDescricao").value;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "isaacbr871@gmail.com",
    Password: "970917EEA271AD3158B60C1A0EBC8FE6EAAA",
    To: "isaacbr871@gmail.com",
    From: "isaacbr871@gmail.com",
    Subject: "Formulário Lkp-Films (Entre-em-Contato)",
    Body: `Nome: ${nome} <br> Email: ${email} <br> Negócio: ${negocio} <br> Descrição: ${descricao}`,
  }).then((message) => MensagemSucesso());
}

function MensagemSucesso() {
  Carregar("none");

  document.querySelector(".divMensagemSucessoVisible").style.display = "block";
  const mensagemSucesso = document.querySelector(".mensagemSucesso");

  setTimeout(desaparecerMensagem, 3000);

  function desaparecerMensagem() {
    mensagemSucesso.classList.add("fadeOut");

    setTimeout(function () {
      mensagemSucesso.remove();
      window.location.reload();
    }, 2000);
  }
}
