
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#login-form");
  if(form){
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const status = document.querySelector("#login-status");
      status.textContent = "Módulo visual listo. La autenticación real se conectará a una base de datos segura en la siguiente fase.";
      status.style.color = "#9b7100";
    });
  }
});
