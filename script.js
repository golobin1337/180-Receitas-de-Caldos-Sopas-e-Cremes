// Timer countdown
let totalSecs = 20 * 60;

function updateTimer() {
  const m = Math.floor(totalSecs / 60);
  const s = totalSecs % 60;
  document.getElementById('timer').textContent =
    String(m).padStart(2, '0') + ':' + String(s).padStart(2, '0');
  if (totalSecs > 0) totalSecs--;
}

updateTimer();
setInterval(updateTimer, 1000);

// FAQ accordion
document.querySelectorAll('.faq-pergunta').forEach(p => {
  p.addEventListener('click', () => {
    const item = p.parentElement;
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
    if (!isOpen) item.classList.add('open');
  });
});
