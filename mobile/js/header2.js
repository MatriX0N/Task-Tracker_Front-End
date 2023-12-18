
var createForm4 = document.getElementById('form-to-share');
var showCreateButton4 = document.getElementById('to-share');
var ButtonX4 = document.getElementById('to-share-X');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton4.addEventListener('click', function() {
  toggleCreateForm4();
});
function toggleCreateForm4() {
  // Змінюємо видимість вікна
  if (createForm4.style.display === 'none' || createForm4.style.display === '') {
   createForm4.style.display = 'block';
  }
   else {
      createForm4.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX4.addEventListener('click', function() {
   toggleCloseForm4();
 });
function toggleCloseForm4() {
   // Змінюємо видимість вікна
   if (createForm4.style.display === 'block' || createForm4.style.display === '') {
      createForm4.style.display = 'none';
   }
    else {
      createForm4.style.display = 'block';
   }
}



