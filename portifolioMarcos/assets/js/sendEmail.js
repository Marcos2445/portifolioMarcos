
//enviar email
emailjs.init("hNOeBE6ps5_CUaYke");

document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_portf";
  const templateID = "template_e1gt3fa";

  let buttonSubmit = document.querySelector("#form-submit");

  emailjs.sendForm(serviceID, templateID, this).then(
    () => {
      buttonSubmit.innerHTML = "Enviado com Sucesso!";
      buttonSubmit.style.backgroundColor = "#00FA9A";

      setTimeout(() => {
        document.querySelector("#user_name").value = "";
        document.querySelector("#user_email").value = "";
        document.querySelector("#message").value = "";

        buttonSubmit.innerHTML = "Enviar";
        buttonSubmit.style.backgroundColor = "#e7fc00";
      }, 2000);
    },
    (err) => {
      buttonSubmit.innerHTML = "Por favor, tente novamente!";
      buttonSubmit.style.backgroundColor = "#FF0000";
      console.log(JSON.stringify(err));
    }
  );
});