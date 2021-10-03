import { Selector } from "testcafe";

fixture`Home`.page("http://localhost:3000");

test("should show image", async (t) => {
  const img = Selector("img").withAttribute("src", "./images/components.svg");
  await t.expect(img.exists).ok();
});
