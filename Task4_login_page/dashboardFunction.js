function contentFunction() {
    document.getElementById("contentid").classList.toggle("show");
  }

function userFunction() {
    document.getElementById("userid").classList.toggle("show");
  }

function reportFunction() {
    document.getElementById("reportid").classList.toggle("show");
  }

function adminFunction() {
    document.getElementById("adminid").classList.toggle("show");
  }


  var alertDiv = document.querySelectorAll('.alertMessage');
  
  alertDiv.forEach(item => {
    item.addEventListener('click', event =>{
      item.classList.remove('incompleted');
      item.classList.add('completed');
      var icon = item.querySelector('.alertMessage .material-symbols-outlined').innerText="check_circle";
    })
  })

  var announcementDiv = document.querySelectorAll('.announcementMessage');
  
  announcementDiv.forEach(item => {
    item.addEventListener('click', event =>{
      item.classList.remove('incompleted');
      item.classList.add('completed');
      var icon = item.querySelector('.announcementMessage .material-symbols-outlined').innerText="check_circle";
    })
  })
  


  
  
