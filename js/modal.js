function openMessageModal() {
  document.getElementById('messageModal').classList.remove('hidden');
  document.getElementById('messageModal').classList.add('flex');
}

function closeMessageModal() {
  document.getElementById('messageModal').classList.add('hidden');
  document.getElementById('messageModal').classList.remove('flex');
}

// Close modal when clicking outside
document.getElementById('messageModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeMessageModal();
  }
});