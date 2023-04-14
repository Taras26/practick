'use strict'

$( document ).ready(function() {
  const settings = {
    async: true,
    crossDomain: true,
    url: 'https://send.api.mailtrap.io/api/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': '26eb56650c932eb07fdbae181d32fdce',
      'Access-Control-Allow-Origin':'https://send.api.mailtrap.io/api/send'
    },
    data: '{\n  "to": [\n    {\n      "email": "kinakh.taras@gmail.com",\n      "name": "Orest"\n    }\n  ],\n  "from": {\n    "email": "kinahtaras@gmail.com",\n    "name": "Taras"\n  },\n  "attachments": [\n    {\n      "content": "PCFET0NUWVBFIGh0bWw+CjxodG1sIGxhbmc9ImVuIj4KCiAgICA8aGVhZD4KICAgICAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+CiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj0iWC1VQS1Db21wYXRpYmxlIiBjb250ZW50PSJJRT1lZGdlIj4KICAgICAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCI+CiAgICAgICAgPHRpdGxlPkRvY3VtZW50PC90aXRsZT4KICAgIDwvaGVhZD4KCiAgICA8Ym9keT4KCiAgICA8L2JvZHk+Cgo8L2h0bWw+Cg==",\n      "filename": "index.html",\n      "type": "text/html",\n      "disposition": "attachment"\n    }\n  ],\n  "custom_variables": {\n    "user_id": "45982",\n    "batch_id": "PSJ-12"\n  },\n  "headers": {\n    "X-Message-Source": "dev.mydomain.com"\n    \'Access-Control-Allow-Origin\':\'https://send.api.mailtrap.io/api/send\'\n  },\n  "subject": "Your Example Order Confirmation",\n  "text": "Congratulations on your order no. 1234",\n  "category": "API Test"\n}'
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

let obj = {}
document.querySelector('#form').addEventListener('submit', f);
function f(e){
    // e.preventDefault();
    let name = $('[name=name]').val();
    let mail = $('[name=mail]').val();
    let text = $('[name=text]').val();
    obj.name = name;
    obj.mail = mail;
    obj.text = text;
    console.log(obj)
}
});
