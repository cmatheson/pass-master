var self = require("sdk/self");

var panel = require("sdk/panel").Panel({
  width: 450,
  height: 100,
  contentURL: self.data.url("autocompletePrompt.html"),
  contentScriptFile: self.data.url("autocompletePromptEvents.js"),
  contentScriptWhen: "ready",
  // TODO: account for scrollbar width
  position: {top: 100, right: 30},
});

panel.port.on("close", function() {
  panel.hide();
});

require("sdk/page-mod").PageMod({
  include: "*",
  contentScriptFile: self.data.url("nanny-site-detector.js"),
  onAttach: function(worker) {
    var tab = worker.tab;

    worker.port.once("promptForAutoComplete", function() {
      panel.show();
    });

    panel.port.once("autocomplete", function() {
      panel.hide();
      tab.attach({
        contentScriptFile: self.data.url("autocomplete-enabler.js")
      });
    });
  },
});
