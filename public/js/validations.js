window.onload = () => {

    // variables 
    var username = document.getElementById('email');
    var password = document.getElementById('password');
    var btnLogin = document.getElementById('btn-login');
    var validatePassword = false;
    var validateUsername = false;
  
    let validateButton = (iphrase = password, iuser=username) => {
      let numbers = '123456';
      let validatenumbers;
      let validatelength;
      let validateemail;
        var REGEXEMAIL = /^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
        if (REGEXEMAIL.test(username.value)) {
          validateemail = true;
        } else {
          validateemail = false;
        }
      if ((password.value === numbers)) {
          validatenumbers = false;
      }
      if (password.length <= 6) {
        validatelength = false;
      }
      if (validatenumbers === false || validatelength === false || validateemail === false) {
        return false;
      }
      return true;
    };
  
    let activeButton = () => {
      password = document.getElementById('password').value;
      if (validateButton()) {
        btnLogin.removeAttribute('disabled');
      } else {
        desactiveButton();
      }
    };
    let desactiveButton = () => {
      btnLogin.setAttribute('disabled', 'disabled');
    };
  
    var nextView = function nextView() {
      window.location.href = 'views/collage.html';
    };
    password.addEventListener('keyup', activeButton);
    username.addEventListener('keyup', activeButton);
  
    // username.addEventListener('keyup', validateNameUser);
    btnLogin.addEventListener('click', nextView);
  };
  
  