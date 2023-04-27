function validateForm() {
    var field1 = document.getElementById('field1').value.trim();
    var field2 = document.getElementById('field2').value.trim();
    var field3 = document.getElementById('field3').value.trim();
    var field4 = document.getElementById('field4').value.trim();
    var field5 = document.getElementById('field5').value.trim();
    var field6 = document.getElementById('field6').value.trim();
    var field7 = document.getElementById('field7').value.trim();
    var field8 = document.getElementById('field8').value.trim();
    var field9 = document.getElementById('field9').value.trim();
    var field10 = document.getElementById('field10').value.trim();
    var field11 = document.getElementById('field11').value.trim();
    var field12 = document.getElementById('field12').value.trim();
    var field13 = document.getElementById('field13').value.trim();
    if (field1 === '' || field2 === '' || field3 === '' || field4 === '' || field5 === '' || field6 === '' || field7 === '' || field8 === '' || field9 === '' || field10 === '' || field11 === '' || field12 === '' || field13 === '') {
      alert('All fields are required!');
      return false;
    }
    return true;
}