[![CI/CD](https://github.com/simboonlong/components/actions/workflows/manual.yml/badge.svg?branch=master&event=push)](https://github.com/simboonlong/components/actions/workflows/manual.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/d434bd40-1962-433b-a451-c28a98e21fd2/deploy-status)](https://app.netlify.com/sites/simboonlong-components/deploys) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Components

Handcrafted components that might be of use.

## Why?

There are many superior alternatives in the wild. Sometimes I only need a bicycle, not a tank. Hence this.


## Demo

[http://components.simboonlong.com](http://components.simboonlong.com)

## Install

`npm i @simboonlong/components`
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
// scss, otherwise vanilla css is available too
@import "@simboonlong/components/dist/overlay/overlay.scss";

// customisation with:
:root {
  --overlay-background: green;
}

// or
$overlay-background: red;

// see source code for more of other customisable variables :)
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
<!-- customisation with: -->
<div class="news-ticker" data-interval="1000" data-direction="down"> ... </div>
```

```
// scss, otherwise vanilla css is available too
@import "@simboonlong/components/dist/news-ticker/news-ticker.scss";

// customisation with:
:root {
  --news-ticker-speed: 0.2s;
}

// or
$news-ticker-speed: 0.7s;
```


```
// js
import { NewsTicker } from "./index.js";
const newsTicker = NewsTicker({
  el: document.querySelector(".news-ticker"),
  interval: 1000, // optional, default 3000
  direction: "down", // optional, default "up"
});
newsTicker.goTo(3); // goes to 4th item
```

<!--
TODO: move inView over?
TODO: pulldown
-->

Author © [Sim Boon Long](http://simboonlong.com).