
<script>
const returnHomeButton = document.querySelector('.returnhome');

returnHomeButton.addEventListener('click', function(event) {
  Event.preventDefault();
  window.history.back(); // Navigates to the previous page in history.
});
</script>


