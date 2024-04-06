document
  .getElementById("formulario")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    if (grecaptcha.getResponse() === "") {
      document.getElementById("captcha-error").style.display = "block";
    } else {
      document.getElementById("captcha-error").style.display = "none";
      EnviarEmail();
    }
  });

function EnviarEmail() {
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
  }).then((message) => alert(message));
}
