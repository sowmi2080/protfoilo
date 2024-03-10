<script>
  const projectButtons = document.querySelectorAll('.project-btn');

  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('onclick').slice(button.getAttribute('onclick').indexOf('=') + 1, button.getAttribute('onclick').length - 1);
      window.open(url, '_blank');
    });
  });
</script>