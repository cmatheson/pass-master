var $$ = document.querySelectorAll.bind(document);
var bullyInputs = $$("input[type=password][autocomplete=off]");
if (bullyInputs.length > 0) {
  // TODO: use a panel instead
  // TODO: remember people's preference (simple storage)
  var autocomplete = window.confirm("This website doesn't want you to " +
      "autocomplete your login information.  Do it anyway?");
  if (autocomplete) {
    // FIXME: only mess with stuff in the same form as a password
    var inputs = $$("[autocomplete=off]");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].autocomplete = "on";
    }
  }
}
