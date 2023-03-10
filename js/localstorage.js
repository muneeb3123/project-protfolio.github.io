const formData = {
  name: '',
  email: '',
  message: '',
};

function populateStorage() {
  formData.name = document.getElementById('user-name').value;
  formData.email = document.getElementById('user-email').value;
  formData.messege = document.getElementById('user-message').value;

  localStorage.setItem('form-data', JSON.stringify(formData));
}

function setData() {
  let storageData = localStorage.getItem('form-data');
  storageData = JSON.parse(storageData);
  document.getElementById('user-name').value = storageData.name;
  document.getElementById('user-email').value = storageData.email;
  document.getElementById('user-message').value = storageData.message;
}

const inputList = [];
inputList.push(document.getElementById('user-name'));
inputList.push(document.getElementById('user-email'));
inputList.push(document.getElementById('user-message'));

inputList.forEach((value) => {
  value.addEventListener('input', () => {
    populateStorage();
  });
});

if (!localStorage.getItem('form-data')) {
  populateStorage();
} else {
  setData();
}