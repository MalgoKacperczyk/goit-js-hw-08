import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

function handleInput() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

function fillForm() {
  const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (formData) {
    emailInput.value = formData.email;
    messageInput.value = formData.message;
  }
}

const throttleInput = throttle(handleInput, 500);

emailInput.addEventListener('input', throttleInput);
messageInput.addEventListener('input', throttleInput);
form.addEventListener('submit', handleSubmit);

fillForm();
