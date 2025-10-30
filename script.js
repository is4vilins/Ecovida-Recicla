// basic interactions: nav toggle, smooth scroll, fake form submit
function toggleNav(btn){
  const expanded = btn.getAttribute('aria-expanded') === 'true';
  btn.setAttribute('aria-expanded', String(!expanded));
  const nav = document.querySelector('.main-nav');
  if(nav.style.display === 'block') nav.style.display = '';
  else nav.style.display = 'block';
}
function scrollToSection(sel){
  const el = document.querySelector(sel);
  if(!el) return;
  el.scrollIntoView({behavior:'smooth'});
}
function handleSubmit(e){
  e.preventDefault();
  const msg = document.getElementById('form-msg');
  msg.textContent = 'Obrigado! Recebemos sua mensagem. Entraremos em contato em breve.';
  e.target.reset();
  setTimeout(()=> msg.textContent = '', 8000);
}
