// JavaScript to handle form validation and submission
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  // prevent form submission
  event.preventDefault();

  // get form data
  const formData = new FormData(event.target);
  const name = formData.get('name');
  const email = formData.get('email');
  const phone = formData.get('phone');
  const address = formData.get('address');
  const city = formData.get('city');
  const state = formData.get('state');
  const zip = formData.get('zip');
  const country = formData.get('country');
  const username = formData.get('username');
  const password = formData.get('password');
  const confirm_password = formData.get('confirm_password');
  const comments = formData.get('comments');

  // validate form data
  if (!name || !email || !phone || !address || !city || !state || !zip || !country || !username || !password) {
    alert('Please fill in all required fields.');
    return;
  }
  if (password !== confirm_password) {
    alert('Passwords do not match.');
    return;
  }

  // submit form data
  // code to submit data to server goes here
  alert('Form submitted successfully!');
});