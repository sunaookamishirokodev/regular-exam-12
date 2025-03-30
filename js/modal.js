function openModal() {
  document.getElementById('registerModal').classList.remove('hidden');
  document.getElementById('registerModal').classList.add('flex');
}

function closeModal() {
  document.getElementById('registerModal').classList.add('hidden');
  document.getElementById('registerModal').classList.remove('flex');
}

// Close modal when clicking outside
document.getElementById('registerModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});