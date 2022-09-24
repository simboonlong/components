const ALL_TYPES = ["lightbox", "menu"] as const;
type typeTuple = typeof ALL_TYPES;
type overlayType = typeTuple[number];

interface Overlay {
  overlay: HTMLElement;
  trigger: HTMLElement[];
  closeSelector?: string;
}

interface OverlayHelper {
  updateContentLightbox: (rawHtml: string) => void;
  open: (type: overlayType) => void;
  close: () => void;
}

export const overlay = ({
  overlay,
  trigger,
  closeSelector = ".overlay-background, .overlay-cancel",
}: Overlay): OverlayHelper | undefined => {
  const updateContentLightbox = (rawHtml: string): void => {
    const content = <HTMLElement>(
      document.querySelector(".overlay-lightbox .overlay-content")
    );
    content.innerHTML = rawHtml;
  };

  const open = (type: overlayType): void => {
    overlay.classList.add("is-active");
    overlay.setAttribute("data-trigger", type);
  };

  const close = (): void => {
    overlay.classList.remove("is-active");
    overlay.removeAttribute("data-trigger");
  };

  const onOpenHandler = (el: HTMLElement) => {
    const type = el.getAttribute("data-trigger") as overlayType;

    if (!type) {
      console.error(
        `data-trigger attribute is not set on trigger element. it only accepts "${ALL_TYPES}".`,
      );
      return;
    }

    el.addEventListener("click", () => {
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
