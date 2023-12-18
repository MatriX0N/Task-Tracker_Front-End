var popupWindow = document.getElementById('popupWindow');
var showWindowButton = document.getElementById('showWindowButton');

// Змінюємо видимість вікна при натисканні на кнопку
showWindowButton.addEventListener('click', function() {
  togglePopupWindow();
});

// Закриваємо вікно при натисканні на будь-яку область сторінки
document.addEventListener('click', function(event) {
  var isClickInsidePopup = popupWindow.contains(event.target);
  var isClickOnButton = (event.target === showWindowButton);

  if (!isClickInsidePopup && !isClickOnButton) {
    popupWindow.style.display = 'none';
  }
});

function togglePopupWindow() {
  // Змінюємо видимість вікна
  if (popupWindow.style.display === 'none' || popupWindow.style.display === '') {
    popupWindow.style.display = 'block';
  } else {
    popupWindow.style.display = 'none';
  }
}




var createWindow = document.getElementById('createWindow');
var showCreateButton = document.getElementById('showCreateButton');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton.addEventListener('click', function() {
  toggleCreateWindow();
});

// Закриваємо вікно при натисканні на будь-яку область сторінки
document.addEventListener('click', function(event) {
  var isClickInsideCreateWindow = createWindow.contains(event.target);
  var isClickOnButton = (event.target === showCreateButton);

  if (!isClickInsideCreateWindow && !isClickOnButton) {
    createWindow.style.display = 'none';
  }
});

function toggleCreateWindow() {
  // Змінюємо видимість вікна
  if (createWindow.style.display === 'none' || createWindow.style.display === '') {
    createWindow.style.display = 'block';
  } else {
    createWindow.style.display = 'none';
  }
}



var createForm = document.getElementById('create-form');
var showCreateButton2 = document.getElementById('create-board');
var ButtonX = document.getElementById('a-img');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton2.addEventListener('click', function() {
  toggleCreateForm();
});

function toggleCreateForm() {
  // Змінюємо видимість вікна
  if (createForm.style.display === 'none' || createForm.style.display === '') {
   createForm.style.display = 'block';
  }
   else {
      createForm.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX.addEventListener('click', function() {
   toggleCloseForm();
 });
function toggleCloseForm() {
   // Змінюємо видимість вікна
   if (createForm.style.display === 'block' || createForm.style.display === '') {
      createForm.style.display = 'none';
   }
    else {
      createForm.style.display = 'block';
   }
}



var createForm2 = document.getElementById('create-form2');
var showCreateButton3 = document.getElementById('create-project');
var ButtonX2 = document.getElementById('a-img2');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton3.addEventListener('click', function() {
  toggleCreateForm2();
});
function toggleCreateForm2() {
  // Змінюємо видимість вікна
  if (createForm2.style.display === 'none' || createForm2.style.display === '') {
   createForm2.style.display = 'block';
  }
   else {
      createForm2.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX2.addEventListener('click', function() {
   toggleCloseForm2();
 });
function toggleCloseForm2() {
   // Змінюємо видимість вікна
   if (createForm2.style.display === 'block' || createForm2.style.display === '') {
      createForm2.style.display = 'none';
   }
    else {
      createForm2.style.display = 'block';
   }
}


var createForm3 = document.getElementById('group-sidebar');
var showCreateButton3 = document.getElementById('sidebar');
var ButtonX3 = document.getElementById('a-vector-X');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton3.addEventListener('click', function() {
  toggleCreateForm3();
});
function toggleCreateForm3() {
  // Змінюємо видимість вікна
  if (createForm3.style.display === 'none' || createForm3.style.display === '') {
   createForm3.style.display = 'block';
  }
   else {
      createForm3.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX3.addEventListener('click', function() {
   toggleCloseForm3();
 });
function toggleCloseForm3() {
   // Змінюємо видимість вікна
   if (createForm3.style.display === 'block' || createForm3.style.display === '') {
      createForm3.style.display = 'none';
   }
    else {
      createForm3.style.display = 'block';
   }
}






var popupWindow1 = document.getElementById('form-User-Info');
var showWindowButton1 = document.getElementById('Button-User-Info');

// Змінюємо видимість вікна при натисканні на кнопку
showWindowButton1.addEventListener('click', function() {
  togglePopupWindow1();
});

// Закриваємо вікно при натисканні на будь-яку область сторінки
document.addEventListener('click', function(event) {
  var isClickInsidePopup = popupWindow1.contains(event.target);
  var isClickOnButton = (event.target === showWindowButton1);

  if (!isClickInsidePopup && !isClickOnButton) {
    popupWindow1.style.display = 'none';
  }
});

function togglePopupWindow1() {
  // Змінюємо видимість вікна
  if (popupWindow1.style.display === 'none' || popupWindow1.style.display === '') {
    popupWindow1.style.display = 'flex';
  } else {
    popupWindow1.style.display = 'none';
  }
}
