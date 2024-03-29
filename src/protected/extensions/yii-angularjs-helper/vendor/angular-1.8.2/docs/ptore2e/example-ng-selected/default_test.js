describe("", function () {
  var rootEl;
  beforeEach(function () {
    rootEl = browser.rootEl;
    browser.get("build/docs/examples/example-ng-selected/index.html");
  });

  it("should select Greetings!", function () {
    expect(element(by.id("greet")).getAttribute("selected")).toBeFalsy();
    element(by.model("selected")).click();
    expect(element(by.id("greet")).getAttribute("selected")).toBeTruthy();
  });
});
