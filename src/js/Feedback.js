function Feedback() {
  var self;
  self = {
    send: _send
  } 
  function _send(){
    var xmlhttp = (window.XMLHttpRequest) ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");
    xmlhttp.open('POST', 'https://api.mailgun.net/v3/shangin.pro/messages');
    xmlhttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4) {
            if(xmlhttp.status == 200) alert('Mail sended!')
            else if(xmlhttp.status == 500) alert('Check apikey')
            else alert('Request error');
        }
    }
    xmlhttp.send(JSON.stringify({'key': 'key-825295e7de78f0572e342973306a3e4f',
      'message': {
          'from_email': 'somemail@gmail.com',
          'to': [{'email': 'bondpuoq@gmail.com', 'type': 'to'}],
          'autotext': 'true',
          'subject': 'Yeah!',
          'html': '<h1>Its work!</h1>'
        }}));
  }
}