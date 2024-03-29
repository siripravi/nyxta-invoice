it("should check ng-bind", function () {
  var salutationElem = element(by.binding("salutation"));
  var salutationInput = element(by.model("salutation"));
  var nameInput = element(by.model("name"));

  expect(salutationElem.getText()).toBe("Hello World!");

  salutationInput.clear();
  salutationInput.sendKeys("Greetings");
  nameInput.clear();
  nameInput.sendKeys("user");

  expect(salutationElem.getText()).toBe("Greetings user!");
});
