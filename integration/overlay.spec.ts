import { Selector } from "testcafe";

fixture`Overlay`.page("http://localhost:3000/overlay");

test("should show overlay (lightbox) when clicked on trigger", async (t) => {
  await t.click(".overlay-trigger[data-trigger='lightbox']");
  await t.expect(Selector(".overlay").visible).ok();
});

test("should close overlay (lightbox) when clicked on cancel", async (t) => {
  await t.click(".overlay-trigger[data-trigger='lightbox']");
  await t.click(".overlay-lightbox .overlay-cancel");
  await t.expect(Selector(".overlay").visible).notOk();
});

test("should close overlay (lightbox) when clicked on overlay background", async (t) => {
  await t.click(".overlay-trigger[data-trigger='lightbox']");
  await t.click(".overlay-lightbox .overlay-background", {
    offsetX: 0,
    offsetY: 0,
  });
  await t.expect(Selector(".overlay").visible).notOk();
});

test("should update overlay (lightbox) content", async (t) => {
  await t.click("#foobar");
  await t
    .expect(Selector(".overlay-lightbox .overlay-content").textContent)
    .contains("foobar");
});
