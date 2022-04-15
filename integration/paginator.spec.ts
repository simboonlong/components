import { Selector } from "testcafe";

fixture`Paginator`.page("http://localhost:3000/paginator");

test("should show only 2 paginate items", async (t) => {
  await t.expect(Selector(".paginate.active").count).eql(2);
});

test("should show page 1 active as default", async (t) => {
  await t.expect(Selector(".paginator-link.active").withText("1").count).eql(1);
});

test("should show prev and next as disabled respectively when page is first", async (t) => {
  await t
    .expect(
      Selector(".paginator-link").withText("<").withAttribute("disabled")
        .exists,
    )
    .ok();
  await t
    .expect(
      Selector(".paginator-link").withText(">").withAttribute("disabled")
        .exists,
    )
    .notOk();
});

test("should show prev and next as disabled respectively when page is last", async (t) => {
  await t.click(Selector(".paginator-link").withText("8"));
  await t
    .expect(
      Selector(".paginator-link").withText("<").withAttribute("disabled")
        .exists,
    )
    .notOk();
  await t
    .expect(
      Selector(".paginator-link").withText(">").withAttribute("disabled")
        .exists,
    )
    .ok();
});

test("should show only 1 truncate and not page 3 when page is first", async (t) => {
  await t.expect(Selector(".paginator-link").withText("3").count).eql(0);
  await t.expect(Selector(".paginator-truncate").withText("...").count).eql(1);
});

test("should show only 1 truncate and page 3 when click on next", async (t) => {
  await t.click(Selector(".paginator-link").withText(">"));
  await t.expect(Selector(".paginator-link").withText("3").count).eql(1);
  await t
    .expect(
      Selector(".paginator-link").withText("<").withAttribute("disabled")
        .exists,
    )
    .notOk();
});

test("should show 2 truncate and range between page 3 to 5", async (t) => {
  await t.navigateTo("http://localhost:3000/paginator/?page=4");
  await t.expect(Selector(".paginator-truncate").withText("...").count).eql(2);
  await t.expect(Selector(".paginator-link").withText("2").count).eql(0);
  await t.expect(Selector(".paginator-link").withText("3").count).eql(1);
  await t.expect(Selector(".paginator-link").withText("4").count).eql(1);
  await t.expect(Selector(".paginator-link").withText("5").count).eql(1);
  await t.expect(Selector(".paginator-link").withText("6").count).eql(0);
});
