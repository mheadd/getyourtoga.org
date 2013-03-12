// Object with message components.
var messages = {
    butonHTML: '<button type="button" class="close" data-dismiss="alert">×</button>',
    contact: 'You can find me on Twitter at <a href="https://twitter.com/mheadd">@mheadd</a> and also on <a href="https://github.com/mheadd">GitHub</a>. Join me there to discuss further.',
    about: 'To add your organization or project to the list below, hit me on Twitter at <a href="https://twitter.com/mheadd">@mheadd</a>.'
};

// Logic to display messages.
function displayMessage(text) {
   var message = document.getElementById('message');
   if(message) {
     message.innerHTML = messages.butonHTML + text;
   }
   else {
     var messageBlock = document.getElementById('alert_placeholder');
     var message = document.createElement('div');
     message.setAttribute('id', 'message');
     message.setAttribute('class', 'alert');
     message.innerHTML = messages.butonHTML + text;
     messageBlock.appendChild(message);
   }
}