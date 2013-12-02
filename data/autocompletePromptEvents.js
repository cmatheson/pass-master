document.getElementById("enable-autocomplete")
.addEventListener("click", function() {
  self.port.emit("autocomplete");
});

document.getElementById("dont-autocomplete")
.addEventListener("click", function() {
  self.port.emit("close");
});
