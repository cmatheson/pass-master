var $$ = document.querySelectorAll.bind(document);

var bullyInputs = $$("input[type=password][autocomplete=off]");
if (bullyInputs.length > 0) {
  // TODO: remember people's preference (simple storage)
  self.port.emit("promptForAutoComplete");
}
