const submitBtn = document.getElementById('enviar');

function enviar() {
  const username = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  const correctUser = 'tryber@teste.com';
  const correctPassword = '123456';
  if (username === correctUser && password === correctPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submitBtn.addEventListener('click', enviar);

const submitForm = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');

submitForm.disabled = true;

function ifChecked() {
  if (checkbox.checked === false) {
    submitForm.disabled = true;
  }
  if (checkbox.checked === true) {
    submitForm.disabled = false;
  }
}

checkbox.addEventListener('input', ifChecked);
