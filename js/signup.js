function sign(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  document.getElementById('signup-button').addEventListener('click', function () {
    
    const emailInput = document.getElementById('signup-input').value;
    if (sign(emailInput)) {
      alert('Sign up complete');
    }
});
