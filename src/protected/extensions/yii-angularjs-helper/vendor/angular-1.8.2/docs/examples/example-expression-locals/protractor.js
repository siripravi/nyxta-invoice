it("should calculate expression in binding", function () {
  if (browser.params.browser === "safari") {
    // Safari can't handle dialogs.
    return;
  }
  element(by.css('[ng-click="greet()"]')).click();

  // We need to give the browser time to display the alert
  browser.wait(protractor.ExpectedConditions.alertIsPresent(), 1000);

  var alertDialog = browser.switchTo().alert();

  expect(alertDialog.getText()).toEqual("Hello World");

  alertDialog.accept();
});
