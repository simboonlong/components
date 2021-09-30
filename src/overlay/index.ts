export const overlayOpen = (): void => {
  document.querySelector(".overlay")?.classList.add("is-active");
};

export const overlayClose = (): void => {
  document.querySelector(".overlay")?.classList.remove("is-active");
};

export const overlayInit = (): void => {
  document
    .querySelector(".overlay-trigger")
    ?.addEventListener("click", overlayOpen);

  document
    .querySelectorAll(".overlay-background, .overlay-cancel")
    .forEach((el) => {
      el.addEventListener("click", overlayClose);
    });
};
