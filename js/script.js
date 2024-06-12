const btn = document.querySelector('#btn');
const blur = document.querySelector('#blur');
const hmenu= document.querySelector('#hmenu');
const hamburger=document.querySelector('#hamburger');

btn.addEventListener('click', () => {
  blur.style.display = 'flex';
});

blur.addEventListener('click', (e) => {
  if (e.target === blur) {
    blur.style.display = 'none';
  }
});

hamburger.addEventListener('click', () => {
  hmenu.style.display = 'flex';
  
});


