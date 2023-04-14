'use stict'

const settings = {
    async: true,
    crossDomain: true,
    url: 'https://send.api.mailtrap.io/api/send',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Api-Token': ''
    },
    processData: false,
    data: '{\n  "to": [\n    {\n      "email": "john_doe@example.com",\n      "name": "John Doe"\n    }\n  ],\n  "from": {\n    "email": "sales@example.com",\n    "name": "Example Sales Team"\n  },\n "subject": "Your Example Order Confirmation",\n  "text": "Congratulations on your order no. 1234",\n  "category": "API Test"\n}'
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  });

let obj = {}
document.querySelector('#form').addEventListener('submit', f);
function f(e){
    e.preventDefault();
    let name = $('[name=name]').val();
    let mail = $('[name=mail]').val();
    let text = $('[name=text]').val();
    obj.name = name;
    obj.mail = mail;
    obj.text = text;
    console.log(obj)
}