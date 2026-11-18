(function(){
var TO='Jacob@ordrupconsulting.dk';
document.addEventListener('submit',function(e){
  var f=e.target;if(!f||!f.classList||!f.classList.contains('breakdance-form'))return;
  e.preventDefault();e.stopImmediatePropagation();
  var v=function(sel){var el=f.querySelector(sel);return el?el.value.trim():''};
  var navn=v('input[type="text"]'),tlf=v('input[type="tel"]'),mail=v('input[type="email"]'),besked=v('textarea');
  var body='Hej Ordrup Consulting\n\n'+besked+'\n\nMed venlig hilsen\n'+navn+'\nTelefon: '+tlf+'\nE-mail: '+mail;
  window.location.href='mailto:'+TO+'?subject='+encodeURIComponent('Henvendelse fra hjemmesiden – '+navn)+'&body='+encodeURIComponent(body);
},true);
})();
