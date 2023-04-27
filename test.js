function testValidationFunction() {
  var form = document.createElement('form');
  form.innerHTML = '<input type="text" id="field1"><br>
  <input type="text" id="field2"><br> <input type="text" id="field3"><br>'; // create sample form elements
  document.body.appendChild(form);
  var validateForm = window.validateForm;
  var result = validateForm();
  var expected = true;
  console.assert(result === expected, `Expected ${expected}, but got ${result}`);
  document.body.removeChild(form);
}
