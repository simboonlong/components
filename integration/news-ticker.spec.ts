import { Selector } from "testcafe";

fixture`News Ticker`.page("http://localhost:3000/news-ticker");

test("should show correct item when clicked on goTo", async (t) => {
  await t.click(`[data-testid="goTo"]`);
  await t.expect(Selector(`[data-testid="text3"]`).visible).ok();
});
