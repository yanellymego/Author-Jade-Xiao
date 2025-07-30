const releaseDate = new Date('2025-12-01T00:00:00').getTime();

const countdown = () => {
  const now = new Date().getTime();
  const distance = releaseDate - now;

  if (distance < 0) {
    document.getElementById('countdown').innerHTML = "🎉 The book is out now! 🎉";
    clearInterval(timerInterval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = days.toString().padStart(2, '0');
  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
};

const timerInterval = setInterval(countdown, 1000);
countdown(); // initial call
