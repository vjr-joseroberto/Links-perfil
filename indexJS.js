document.querySelectorAll('.language-option').forEach(item => {
  item.addEventListener('click', event => {
    const lang = item.getAttribute('data-lang');
    document.querySelectorAll('.lang').forEach(content => {
      content.style.display = 'none';
    });
    document.querySelectorAll('.lang.' + lang).forEach(content => {
      content.style.display = 'block';
    });
  });
});