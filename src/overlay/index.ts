const ALL_TYPES = ["lightbox", "menu"] as const;
type typeTuple = typeof ALL_TYPES;
type overlayType = typeTuple[number];

interface OverlayProps {
  el: HTMLElement;
  trigger: HTMLElement[];
  closeSelector?: string;
}

interface OverlayHelper {
  updateContentLightbox: (rawHtml: string) => void;
  open: (type: overlayType) => void;
  close: () => void;
}

export const Overlay = ({
  el,
  trigger,
  closeSelector = ".overlay-background, .overlay-cancel",
}: OverlayProps): OverlayHelper | undefined => {
  const updateContentLightbox = (rawHtml: string): void => {
    const content = <HTMLElement>(
      document.querySelector(".overlay-lightbox .overlay-content")
    );
    content.innerHTML = rawHtml;
  };

  const open = (type: overlayType): void => {
    el.classList.add("is-active");
    el.setAttribute("data-trigger", type);
  };

  const close = (): void => {
    el.classList.remove("is-active");
    el.removeAttribute("data-trigger");
  };

  const onOpenHandler = (el: HTMLElement) => {
    const type = el.getAttribute("data-trigger") as overlayType;

    el.addEventListener("click", () => {
      if (!type) {
        console.error(
          `The data attribute of data-trigger is not set on trigger HTML element. It currently only accepts "${ALL_TYPES}" value. Please refer to documentation at https://github.com/simboonlong/components#overlay.`,
        );
        return;
      }

      open(type);
    });
  };

  if (trigger.length > 0) {
    trigger.forEach((el) => onOpenHandler(el));
  } else {
    onOpenHandler(trigger as unknown as HTMLElement);
  }

  document.querySelectorAll(closeSelector).forEach((el) => {
    el.addEventListener("click", close);
  });

  return { updateContentLightbox, open, close };
};
