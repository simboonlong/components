import { Selector, ClientFunction } from "testcafe";
const getWindowLocation = ClientFunction(() => window.location);

fixture`Drop-down`.page("http://localhost:3000/drop-down");

test("should show drop-down when clicked", async (t) => {
  await t.click(`.example-1`);
  await t.expect(Selector(`.example-1`).nextSibling(".drop-down").visible).ok();
});

test("should close drop-down when clicked anywhere on body", async (t) => {
  await t.click(`.example-1`);
  await t.click(`body`);
  await t
    .expect(Selector(`.example-1`).nextSibling(".drop-down").visible)
    .notOk();
});

test("should trigger url when clicked in drop-down item link", async (t) => {
  await t.click(`.example-1`);
  await t.click(
    Selector(`.example-1`).nextSibling(".drop-down").child("li").child("a"),
  );
  await t.expect((await getWindowLocation()).href).contains("#some-link-1");
});
