function validarForm() {
    // Pega os valores dos campos
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
  
    // Verifica se os campos foram preenchidos
    if (nome === "" || email === "" || senha === "") {
      alert("Por favor, preencha todos os campos.");
      return false;
    }
  
    // Verifica se a senha tem pelo menos 8 dígitos e uma letra maiúscula
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regex.test(senha)) {
      alert("A senha deve ter pelo menos 8 dígitos e uma letra maiúscula.");
      return false;
    }
  
    // Se tudo estiver ok, envia o formulário
    return true;
  }