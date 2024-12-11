document.getElementById('signupForm')  .addEventListener('submit', function(event)  {
    event.preventDefault ();
    const name = document.getElementById('signupUsername').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
});

console.log('Signup', {username, email, password });

document.getElementById('loginForm')  .addEventListener('submit', function(event)  {
    event.preventDefault ();
    const username = document.getElementById('loginUsername').value;
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

console.log('Login', { username, email, password });
});