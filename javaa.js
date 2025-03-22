// Function to show the order details modal
function showOrderDetails() {
  const modal = document.getElementById('orderModal');
  modal.style.display = 'flex';
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('orderModal');
  modal.style.display = 'none';
}

// Close modal if user clicks outside of it
window.onclick = function(event) {
  const modal = document.getElementById('orderModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
};