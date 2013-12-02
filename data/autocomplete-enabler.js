var $$ = document.querySelectorAll.bind(document);

// FIXME: only mess with stuff in the same form as a password
var inputs = $$("[autocomplete=off]");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].autocomplete = "on";
}
