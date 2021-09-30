import { Selector } from "testcafe";

fixture`My Fixture`.page("http://localhost:3000/overlay");

test("should show overlay when clicked on trigger", async (t) => {
  await t.click(".overlay-trigger");
  await t.expect(Selector(".overlay").visible).ok();
});

test("should close overlay when clicked on cancel", async (t) => {
  await t.click(".overlay-trigger");
  await t.click(".overlay-cancel");
  await t.expect(Selector(".overlay").visible).notOk();
});

test("should close overlay when clicked on overlay background", async (t) => {
  await t.click(".overlay-trigger");
  await t.click(".overlay-background", { offsetX: 0, offsetY: 0 });
  await t.expect(Selector(".overlay").visible).notOk();
});
