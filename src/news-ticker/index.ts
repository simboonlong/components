interface NewsTickerOption {
  el: HTMLElement;
  interval?: number;
  direction?: string;
}

interface NewsTickerProps {
  goTo: (step: number) => void;
}

export const NewsTicker = (opt: NewsTickerOption): NewsTickerProps => {
  const { el, interval, direction } = opt || {};

  const INTERVAL = interval || Number(el.getAttribute("data-interval")) || 3000;
  const DIRECTION = direction || el.getAttribute("data-direction") || "up";
  const DIRECTION_OPPOSITE = DIRECTION === "up" ? "down" : "up";

  const newsTickerItem = el.querySelectorAll(".news-ticker-item");
  const newsTickerNext = el.querySelector(".news-ticker-next");
  const newsTickerPrev = el.querySelector(".news-ticker-prev");
  const max = newsTickerItem.length - 1;

  let curr = 0;
  let prev = 0;
  let isAnimating = false;

  const setDirection = (step: number) => {
    if (step < 0) {
      el.setAttribute("data-direction", DIRECTION_OPPOSITE);
    } else if (step > 0) {
      el.setAttribute("data-direction", DIRECTION);
    }
  };

  const goTo = (step: number) => {
    setDirection(step);
    clear();
    setOutgoing();
    curr = step;
    setActive();
  };

  const go = (step: number) => {
    if (isAnimating) return false;

    const nextStep = curr + step;

    setDirection(step);
    clear();
    setOutgoing();

    if (nextStep > max) {
      curr = 0;
    } else if (nextStep < 0) {
      curr = max;
    } else {
      curr = nextStep;
    }

    setActive();
  };

  const outgoing = () => {
    newsTickerItem[prev].classList.remove("is-outgoing");
    isAnimating = false;
  };

  const setOutgoing = () => {
    prev = curr;
    newsTickerItem[prev].classList.add("is-outgoing");
    newsTickerItem[prev].addEventListener("animationend", outgoing, {
      once: true,
    });
    isAnimating = true;
  };

  const setActive = () => {
    newsTickerItem[curr].classList.add("is-active");
    el.setAttribute("data-id", `${curr}`);
    newsTickerHandler = setInterval(cycle, INTERVAL);
  };

  const resetDirection = () => {
    if (el.getAttribute("data-direction") === DIRECTION_OPPOSITE) {
      el.setAttribute("data-direction", DIRECTION);
    }
  };

  const clear = () => {
    newsTickerItem[prev].classList.remove("is-outgoing");
    newsTickerItem[curr].classList.remove("is-active");
    clearInterval(newsTickerHandler);
  };

  const cycle = () => {
    resetDirection();
    clear();
    setOutgoing();

    if (curr >= max) {
      curr = 0;
    } else {
      curr++;
    }

    setActive();
  };

  let newsTickerHandler = setInterval(cycle, INTERVAL);
  el.setAttribute("data-id", `${INTERVAL}`);
  el.setAttribute("data-direction", DIRECTION);
  newsTickerPrev?.addEventListener("click", () => go(-1));
  newsTickerNext?.addEventListener("click", () => go(1));

  return {
    goTo,
  };
};
