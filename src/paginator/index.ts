// TODO: pagination filter, based on multiple search params

interface PaginatorOption {
  el: HTMLElement;
  items: HTMLElement[];
  perPage: number;
  range?: number;
}

interface PaginatorLinkProps {
  className: string;
  innerHTML: string;
  href?: string | null;
}

export const Paginator = (opt: PaginatorOption): void => {
  const { el, items, perPage, range = 3 } = opt;
  if (!(range % 2) || range <= 0)
    throw Error("Range must be positive odd number.");

  const rangeOverflow = ~~(range / 2);
  const total = items.length;
  const pages = Math.ceil(total / perPage);
  const searchParams = new URLSearchParams(location.search);
  const page = Number(searchParams.get("page") || 1);

  const showItems = () => {
    const start = (page - 1) * perPage;
    const end = page * perPage;
    items.forEach((item, index) => {
      if (index >= start && index < end) {
        item.classList.add("active");
      }
    });
  };

  const getUpdatedParam = (key: string, value: string): string => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);
    return `?${searchParams.toString()}`;
  };

  const buildLink = ({ className, innerHTML, href }: PaginatorLinkProps) => {
    const anchor = document.createElement("a");
    anchor.classList.add(className);
    anchor.innerHTML = innerHTML;

    if (href) anchor.setAttribute("href", href);
    else anchor.addEventListener("click", (event) => event.preventDefault());

    if (href === null) anchor.setAttribute("disabled", "");

    return anchor;
  };

  const buildPagination = () => {
    for (let i = 1; i <= pages; i++) {
      const start = page - rangeOverflow;
      const end = page + rangeOverflow;
      const isTruncateStart = start - 1 !== 1 && start - 1 === i;
      const isTruncateEnd = end + 1 !== pages && end + 1 === i;
      const isToBeRendered = i === 1 || i === pages || (i >= start && i <= end);
      // console.log(isToBeRendered, i, isTruncateStart, isTruncateEnd);

      if (isTruncateStart || isTruncateEnd) {
        const anchor = buildLink({
          className: "paginator-truncate",
          innerHTML: "...",
        });
        el.append(anchor);
      }

      if (!isToBeRendered) continue;

      const anchor = buildLink({
        className: "paginator-link",
        href: getUpdatedParam("page", `${i}`),
        innerHTML: `${i}`,
      });
      if (page === i) anchor.classList.add("active");
      el.append(anchor);
    }

    const anchorPrev = buildLink({
      className: "paginator-link",
      href: page === 1 ? null : getUpdatedParam("page", `${page - 1}`),
      innerHTML: "<",
    });
    el.prepend(anchorPrev);

    const anchorNext = buildLink({
      className: "paginator-link",
      href: page === pages ? null : getUpdatedParam("page", `${page + 1}`),
      innerHTML: ">",
    });
    el.append(anchorNext);
  };

  const init = () => {
    buildPagination();
    showItems();
  };

  init(); // create paginator
};
