
var createForm5 = document.getElementById('form-bourd-info');
var showCreateButton5 = document.getElementById('bourd-info1');
var ButtonX5 = document.getElementById('vector-qFJ');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton5.addEventListener('click', function() {
  toggleCreateForm5();
});
function toggleCreateForm5() {
  // Змінюємо видимість вікна
  if (createForm5.style.display === 'none' || createForm5.style.display === '') {
   createForm5.style.display = 'block';
  }
   else {
      createForm5.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX5.addEventListener('click', function() {
   toggleCloseForm5();
 });
function toggleCloseForm5() {
   // Змінюємо видимість вікна
   if (createForm5.style.display === 'block' || createForm5.style.display === '') {
      createForm5.style.display = 'none';
   }
    else {
      createForm5.style.display = 'block';
   }
}




var createForm6 = document.getElementById('form-information-about-this-board');
var showCreateButton6 = document.getElementById('button-information-about-this-board');
var ButtonX6 = document.getElementById('a-close1');
var ButtonZ6 = document.getElementById('a-ctrl-z');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton6.addEventListener('click', function() {
  toggleCreateForm6();
});
function toggleCreateForm6() {
  // Змінюємо видимість вікна
  if (createForm6.style.display === 'none' || createForm6.style.display === '') {
   createForm6.style.display = 'block';
  }
   else {
      createForm6.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX6.addEventListener('click', function() {
   toggleCloseForm6();
   toggleCloseForm5();
   if (createForm7.style.display === 'block' || showCreateButton7.style.display === '') {
      createForm7.style.display = 'none';
      showCreateButton7.style.display = 'flex';
   }
    else if (createForm7.style.display === '' || showCreateButton7.style.display === 'block') {
      showCreateButton7.style.display = 'none';
      createForm7.style.display = 'flex';
   }

 });
function toggleCloseForm6() {
   // Змінюємо видимість вікна
   if (createForm6.style.display === 'block' || createForm6.style.display === '') {
      createForm6.style.display = 'none';
   }
    else {
      createForm6.style.display = 'block';
   }
}

ButtonZ6.addEventListener('click', function() {
   toggleCloseForm6Z();
   if (createForm7.style.display === 'block' || showCreateButton7.style.display === '') {
      createForm7.style.display = 'none';
      showCreateButton7.style.display = 'flex';
   }
    else if (createForm7.style.display === '' || showCreateButton7.style.display === 'block') {
      showCreateButton7.style.display = 'none';
      createForm7.style.display = 'flex';
   }
 });
function toggleCloseForm6Z() {
   // Змінюємо видимість вікна
   if (createForm6.style.display === 'block' || createForm6.style.display === '') {
      createForm6.style.display = 'none';
   }
    else {
      createForm6.style.display = 'block';
   }
}




var createForm7 = document.getElementById('form-create-description');
var showCreateButton7 = document.getElementById('button-create-description');
var ButtonX7 = document.getElementById('close');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton7.addEventListener('click', function() {
  toggleCreateForm7();
  toggleOpen7();
});
function toggleCreateForm7() {
  // Змінюємо видимість вікна
  if (createForm7.style.display === 'none' || createForm7.style.display === '') {
   createForm7.style.display = 'block';
  }
   else {
      createForm7.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX7.addEventListener('click', function() {
   toggleCloseForm7();
   toggleOpen7();
 });
function toggleCloseForm7() {
   // Змінюємо видимість вікна
   if (createForm7.style.display === 'block' || createForm7.style.display === '') {
      createForm7.style.display = 'none';
   }
    else {
      createForm7.style.display = 'block';
   }
}
function toggleOpen7() {
   // Змінюємо видимість вікна
   if (showCreateButton7.style.display === 'flex' || showCreateButton7.style.display === '') {
      showCreateButton7.style.display = 'none';
   }
    else {
      showCreateButton7.style.display = 'flex';
   }
}




var createForm8 = document.getElementById('form-activity');
var showCreateButton8 = document.getElementById('button-activity');
var ButtonX8 = document.getElementById('a-close2');
var ButtonZ8 = document.getElementById('a-ctrl-z2');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton8.addEventListener('click', function() {
  toggleCreateForm8();
});
function toggleCreateForm8() {
  // Змінюємо видимість вікна
  if (createForm8.style.display === 'none' || createForm8.style.display === '') {
   createForm8.style.display = 'block';
  }
   else {
      createForm8.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX8.addEventListener('click', function() {
   toggleCloseForm8();
   toggleCloseForm5();
 });
function toggleCloseForm8() {
   // Змінюємо видимість вікна
   if (createForm8.style.display === 'block' || createForm8.style.display === '') {
      createForm8.style.display = 'none';
   }
    else {
      createForm8.style.display = 'block';
   }
}

ButtonZ8.addEventListener('click', function() {
   toggleCloseForm8Z();
 });
function toggleCloseForm8Z() {
   // Змінюємо видимість вікна
   if (createForm8.style.display === 'block' || createForm8.style.display === '') {
      createForm8.style.display = 'none';
   }
    else {
      createForm8.style.display = 'block';
   }
}



var createForm9 = document.getElementById('form-create-list');
var showCreateButton9 = document.getElementById('create-list');
var ButtonX9 = document.getElementById('close2');

// Змінюємо видимість вікна при натисканні на кнопку
showCreateButton9.addEventListener('click', function() {
  toggleCreateForm9();
  toggleCreateForm91();
});
function toggleCreateForm9() {
  // Змінюємо видимість вікна
  if (createForm9.style.display === 'none' || createForm9.style.display === '') {
   createForm9.style.display = 'flex';
  }
   else {
      createForm9.style.display = 'none';
  }
}
function toggleCreateForm91() {
   // Змінюємо видимість вікна
   if (showCreateButton9.style.display === 'flex' || showCreateButton9.style.display === '') {
      showCreateButton9.style.display = 'none';
   }
    else {
      showCreateButton9.style.display = 'flex';
   }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX9.addEventListener('click', function() {
   toggleCloseForm9();
   toggleCreateForm91();
 });
function toggleCloseForm9() {
   // Змінюємо видимість вікна
   if (createForm9.style.display === 'flex' || createForm4.style.display === '') {
      createForm9.style.display = 'none';
   }
    else {
      createForm9.style.display = 'flex';
   }
}




var createForm10 = document.getElementById('form-create-card');
var showCreateButton10 = document.getElementsByClassName("create-card");
var ButtonX10 = document.getElementById('close3');

// Змінюємо видимість вікна при натисканні на кнопку
for(let i = 0; i < showCreateButton10.length; i++){
   showCreateButton10[i].addEventListener('click', function() {
   toggleCreateForm10();
   //   toggleOpen7();
   });
};

function toggleCreateForm10() {
  // Змінюємо видимість вікна
  if (createForm10.style.display === 'none' || createForm10.style.display === '') {
   createForm10.style.display = 'block';
  }
   else {
      createForm10.style.display = 'none';
  }
}

// Закриваємо вікно при натисканні на хрестик
ButtonX10.addEventListener('click', function() {
   toggleCloseForm10();
   // toggleOpen10();
 });
function toggleCloseForm10() {
   // Змінюємо видимість вікна
   if (createForm10.style.display === 'block' || createForm10.style.display === '') {
      createForm10.style.display = 'none';
   }
    else {
      createForm10.style.display = 'block';
   }
}




var createForm11 = document.getElementById('form-actions-list');
var showCreateButton11 = document.getElementsByClassName("img-actions-list");
var ButtonX11 = document.getElementById('close4');

// Змінюємо видимість вікна при натисканні на кнопку
for(let i = 0; i < showCreateButton11.length; i++){
   showCreateButton11[i].addEventListener('click', function() {
   toggleCreateForm11();
   //   toggleOpen7();
   });
};

function toggleCreateForm11() {
// Змінюємо видимість вікна
if (createForm11.style.display === 'none' || createForm11.style.display === '') {
   createForm11.style.display = 'block';
}
   else {
      createForm11.style.display = 'none';
}
}

// Закриваємо вікно при натисканні на хрестик
ButtonX11.addEventListener('click', function() {
   toggleCloseForm11();
});
function toggleCloseForm11() {
   // Змінюємо видимість вікна
   if (createForm11.style.display === 'block' || createForm11.style.display === '') {
      createForm11.style.display = 'none';
   }
   else {
      createForm11.style.display = 'block';
   }
}






var createForm12 = document.getElementById('form-actions-card');
var showCreateButton12 = document.getElementsByClassName("a-card-info");
var ButtonX12 = document.getElementById('close5');

// Змінюємо видимість вікна при натисканні на кнопку
for(let i = 0; i < showCreateButton12.length; i++){
   showCreateButton12[i].addEventListener('click', function() {
   toggleCreateForm12();
   //   toggleOpen7();
   });
};

function toggleCreateForm12() {
// Змінюємо видимість вікна
if (createForm12.style.display === 'none' || createForm12.style.display === '') {
   createForm12.style.display = 'block';
}
   else {
      createForm12.style.display = 'none';
}
}

// Закриваємо вікно при натисканні на хрестик
ButtonX12.addEventListener('click', function() {
   toggleCloseForm12();
});
function toggleCloseForm12() {
   // Змінюємо видимість вікна
   if (createForm12.style.display === 'block' || createForm12.style.display === '') {
      createForm12.style.display = 'none';
   }
   else {
      createForm12.style.display = 'block';
   }
}