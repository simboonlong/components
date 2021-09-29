export const overlayInit = () => {
  const overlayOpen = () => {
    document.querySelector(".overlay")?.classList.add("is-active");
  };

  const overlayClose = () => {
    document.querySelector(".overlay")?.classList.remove("is-active");
  };

  document
    .querySelector(".overlay-trigger")
    ?.addEventListener("click", overlayOpen);

  document
    .querySelectorAll(".overlay-background, .overlay-cancel")
    .forEach((el) => {
      el.addEventListener("click", overlayClose);
    });
};

overlayInit();
