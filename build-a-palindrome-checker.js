const input = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const originalText = input.value;

  if (originalText.trim() === '') {
    alert('Please input a value');
    return;
  }

  const cleaned = originalText.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  const reversed = cleaned.split('').reverse().join('');

  if (cleaned === reversed) {
    result.textContent = `${originalText} is a palindrome.`;
  } else {
    result.textContent = `${originalText} is not a palindrome.`;
  }
});
