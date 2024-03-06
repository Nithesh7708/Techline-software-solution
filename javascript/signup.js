document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reloadCaptcha').addEventListener('click', function() {
      // Generate a new captcha
      var captcha = generateCaptcha();
      document.getElementById('captcha').textContent = captcha;
    });
  
    // Initial captcha generation
    var captcha = generateCaptcha();
    document.getElementById('captcha').textContent = captcha;
  
    document.getElementById('submit').addEventListener('click', function(event) {
      event.preventDefault();
      var captchaInput = document.getElementById('captchaInput').value;
      if (captchaInput === captcha) {
        // Captcha is correct, proceed with form submission
        alert('Captcha is correct. Form can be submitted.');
        document.getElementById('signup-form').submit();
      } else {
        // Captcha is incorrect, show error message
        alert('Captcha is incorrect. Please try again.');
        // Reload captcha
        captcha = generateCaptcha();
        document.getElementById('captcha').textContent = captcha;
        document.getElementById('captchaInput').value = '';
      }
    });
  });
  
  function generateCaptcha() {
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=';
    var captchaLength = 6; // Change the length of the captcha as needed
    var captcha = '';
    for (var i = 0; i < captchaLength; i++) {
      var randomIndex = Math.floor(Math.random() * chars.length);
      captcha += chars[randomIndex];
    }
    return captcha;
  }
//   otp click alert
function otp_cliced(){
    alert("OTP Sent Successfully!")
}


function menu_open() {
  document.getElementById("menu_bar_android").style.display = "block";
  document.getElementById("menu_bar_top_close").style.display = "block";
  document.getElementById("menu_bar_top").style.display = "none";
}

function menu_close() {
  document.getElementById("menu_bar_android").style.display = "none";
  document.getElementById("menu_bar_top_close").style.display = "none";
  document.getElementById("menu_bar_top").style.display = "block";
}