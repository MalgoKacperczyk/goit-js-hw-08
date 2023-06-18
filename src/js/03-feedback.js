import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');
const localStorageKey = 'feedback-form-state';

function saveFormData() {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function loadFormData() {
  const saveFormData = localStorage.getItem(localStorageKey);
  if (saveFormData) {
    const parsedData = JSON.parse(saveFormData);
    emailInput.value = parsedData.email;
    messageInput.value = parsedData.message;
  }
}
emailInput.addEventListener('input', throttle(saveFormData, 500));
messageInput.addEventListener('input', throttle(saveFormData, 500));
