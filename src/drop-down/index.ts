interface DropDownOption {
  el: HTMLElement;
}

const show = (dropDown: HTMLElement) => {
  dropDown?.classList.add("show");
};

const hide = (dropDown: HTMLElement) => {
  dropDown?.classList.remove("show");
};

export const DropDown = (opt: DropDownOption): void => {
  const { el } = opt || {};

  el.addEventListener("click", (event) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    const dropDown = target.nextElementSibling as HTMLElement;

    if (dropDown?.classList.contains("show")) {
      hide(dropDown);
    } else {
      show(dropDown);

      setTimeout(() => {
        document.body.addEventListener("click", () => hide(dropDown), {
          once: true,
        });
      }); // "nextTick" for event loop
    }
  });
};
