const name = document.getElementById('user');
const pass = document.getElementById('pass');
const formid = document.getElementById('formid');
const message = document.getElementById('message_Pass');

formid.addEventListener('submit',function(e){
      if(pass.value.length < 8){
        alert('Password must be longer than 8 characters');
        e.preventDefault();
      }
})