// Select all question buttons
const questions = document.querySelectorAll('.faq-question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    // Toggle the visibility of the answer
    const answer = question.nextElementSibling;
    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';

    // Toggle the icon between "+" and "-"
    const icon = question.querySelector('.icon');
    icon.textContent = icon.textContent === '+' ? '-' : '+';
  });
});










 