// Display today's date
document.getElementById('currentDate').textContent = new Date().toDateString();

// Mood selection logic
const moodButtons = document.querySelectorAll('.mood-btn');

moodButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    moodButtons.forEach(b => b.classList.remove('selected'));
    btn.classList.add('selected');
  });
});

// Save entry
function saveEntry() {
  const selectedBtn = document.querySelector('.mood-btn.selected');
  const note = document.getElementById('note').value;

  if (!selectedBtn || note.trim() === '') {
    alert('Please select a mood and write a note.');
    return;
  }

  const mood = selectedBtn.dataset.mood;
  const date = new Date().toDateString();
  const entry = document.createElement('div');
  entry.className = 'entry';
  entry.innerHTML = `
    <div class="entry-info">
      <div class="text-lg">${mood}</div>
      <div>${note}</div>
      <div class="entry-date">${date}</div>
    </div>
    <div class="text-sm">25°C</div>
  `;

  document.getElementById('entries').prepend(entry);

  // Reset inputs
  selectedBtn.classList.remove('selected');
  document.getElementById('note').value = '';
}