[![CI/CD](https://github.com/simboonlong/components/actions/workflows/manual.yml/badge.svg?branch=master&event=push)](https://github.com/simboonlong/components/actions/workflows/manual.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/d434bd40-1962-433b-a451-c28a98e21fd2/deploy-status)](https://app.netlify.com/sites/simboonlong-components/deploys) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Components

Handcrafted components that might be of use.

## Why?

There are many superior alternatives in the wild. Sometimes I only need a bicycle, not a tank. Hence this.

## Demo

[https://components.simboonlong.com](https://components.simboonlong.com)

## Install

`npm i @simboonlong/components`

## Drop-down

Simple drop-down list. [Demo](https://components.simboonlong.com/drop-down).

Example:

```
<!-- html -->
<nav>
  <div class="example-1">example 1</div>
  <ul class="drop-down">
    <li><a href="#some-link-1">some link 1</a></li>
    <li><a href="#some-link-2">some link 2</a></li>
    <li><a href="#some-link-3">some link 3</a></li>
  </ul>
</nav>
```

> Note that `.drop-down` must be an immediate sibling of drop-down trigger. In this case, the trigger is `.example-1`.

```
// scss
$drop-down-background-color: #fff !default; // customise
@import "@simboonlong/components/dist/drop-down/drop-down.scss";

// alternatively for vanilla css, customise with:
:root {
  --drop-down-background-color: #ffeebb;
}

// inspect styles for more options
```

```
// js
import { DropDown } from "@simboonlong/components";
DropDown({ el: document.querySelector(".example-1") });
```

## News Ticker

Text-based display for announcements. [Demo](https://components.simboonlong.com/news-ticker).

Example:

```
<!-- html -->
<div class="news-ticker">
  <div class="news-ticker-container">
    <div class="news-ticker-item is-active">some text 0</div>
    <div class="news-ticker-item">some text 1</div>
    <div class="news-ticker-item">some text 2</div>
    <div class="news-ticker-item">some text 3</div>
    <div class="news-ticker-item">some text 4</div>
  </div>
  <button class="news-ticker-prev">previous</button>
  <button class="news-ticker-next">next</button>
</div>
```

```
<!-- customise with: -->
<div class="news-ticker" data-interval="1000" data-direction="down"> ... </div>
```

```
// scss
$news-ticker-speed: 0.7s; // customise
@import "@simboonlong/components/dist/news-ticker/news-ticker.scss";

// alternatively for vanilla css, customise with:
:root {
  --news-ticker-speed: 0.2s;
}

// inspect styles for more options
```

```
// js
import { NewsTicker } from "@simboonlong/components";
const newsTicker = NewsTicker({
  el: document.querySelector(".news-ticker"),
  interval: 1000, // optional, default 3000
  direction: "down", // optional, default "up"
});
newsTicker.goTo(3); // goes to 4th item
```

## Overlay

Overlay, lightbox, modal, dialog or whatever you call it. [Demo](https://components.simboonlong.com/overlay).

Example:

```
<!-- html -->
<div class="overlay">
  <div class="overlay-background"></div>
  <div class="overlay-wrap">
    <div class="overlay-card overlay-overflow">
      <span class="overlay-cancel">X</span>
      <div class="overlay-content">...</div>
    </div>
  </div>
</div>
```

```
// scss
$overlay-background-color: red; // customise
@import "@simboonlong/components/dist/overlay/overlay.scss";

// alternatively for vanilla css, customise with:
:root {
  --overlay-background-color: rgba(0, 0, 0, 0.4);
}

// inspect styles for more options
```

```
// js
import { overlay } from "@simboonlong/components";
overlay();
```

```
// js other methods
overlayOpen();
overlayClose();
overlayUpdateContent(DOMPurify.sanitize(`<div>foobar</div>`)); // it is recommended to sanitize any raw html! include DOMPurify separately
```

## Paginator

Basic pagination with URL params. [Demo](https://components.simboonlong.com/paginator).

Example:

```
<!-- html -->
<div>
  <div class="paginate">
    <p>Some text 1</p>
  </div>
  <div class="paginate">
    <p>Some text 2</p>
  </div>
  <div class="paginate">
    <p>Some text 3</p>
  </div>
</div>
<div class="paginator"></div>
```

```
// scss
$paginator-link-color: #6f6fff !default;  // customise
@import "@simboonlong/components/dist/paginator/paginator.scss";

// alternatively for vanilla css, customise with:
:root {
  --paginator-link-padding: 8px;
  --paginator-link-color: #6f6fff;
  --paginator-link-disabled-color: #ccc;
}

// inspect styles for more options
```

```
// js
import { Paginator } from "@simboonlong/components";
Paginator({ el: document.querySelector(".paginator"), items: document.querySelectorAll(".paginate"), perPage: 2, range: 1 });
```

> Note that `range` is optional (defaults to 3) and _MUST_ be a positive odd number.

Author © [Sim Boon Long](https://simboonlong.com).
