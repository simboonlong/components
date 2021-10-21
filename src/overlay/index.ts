export const overlayUpdateContent = (rawHtml: string): void => {
  const content = <HTMLElement>document.querySelector(".overlay-content");
  content.innerHTML = rawHtml;
};

export const overlayOpen = (): void => {
  document.querySelector(".overlay")?.classList.add("is-active");
};

export const overlayClose = (): void => {
  document.querySelector(".overlay")?.classList.remove("is-active");
};

export const overlay = (): void => {
  document
    .querySelector(".overlay-trigger")
    ?.addEventListener("click", overlayOpen);

  document
    .querySelectorAll(".overlay-background, .overlay-cancel")
    .forEach((el) => {
      el.addEventListener("click", overlayClose);
    });
};
