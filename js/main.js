function capDataForm(event){
  // função impede o envio do formulário
  event.preventDefault();

  const nome = document.getElementById('fname').value;
  const email = document.getElementById('email').value;
  const mensagem = document.getElementById('tarea').value;

  //exibindo dados no console
  console.log(nome);
  console.log(email);
  console.log(mensagem);

  //feedback para o usuário
  alert("e-email enviado com sucesso");
  
  return {nome, email, mensagem, };
}

// utlilizando a função para pegar os dados
const form = document.getElementById("contactSubmit");
form.addEventListener("submit", capDataForm);
