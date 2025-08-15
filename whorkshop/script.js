// Menu mobile
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Rolagem suave
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e){
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    if(navLinks.classList.contains('show')){
      navLinks.classList.remove('show');
    }
  });
});

// Detecta scroll para trocar fundo e esconder logo
window.addEventListener('scroll', function() {
  const hero = document.getElementById('hero');
  const logo = document.querySelector('.logo');

  if(window.scrollY > 50) { // ajusta o valor para quando quiser que suma
    document.body.classList.add('scrolled');
    logo.style.opacity = '0'; // esconde logo
  } else {
    document.body.classList.remove('scrolled');
    logo.style.opacity = '1'; // mostra logo
  }
});

// Validação simples do formulário
const form = document.getElementById('form-contato');
form.addEventListener('submit', function(e){
  e.preventDefault();
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const mensagem = form.mensagem.value.trim();
  
  if(nome === "" || email === "" || mensagem === ""){
    alert("Por favor, preencha todos os campos.");
    return;
  }
  
  alert("Mensagem enviada com sucesso!");
  form.reset();
});
