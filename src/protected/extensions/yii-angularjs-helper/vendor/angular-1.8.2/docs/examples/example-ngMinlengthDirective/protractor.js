var model = element(by.binding("model"));
var input = element(by.id("input"));

it("should validate the input with the default minlength", function () {
  input.sendKeys("ab");
  expect(model.getText()).not.toContain("ab");

  input.sendKeys("abc");
  expect(model.getText()).toContain("abc");
});
