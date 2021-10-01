[![CI/CD](https://github.com/simboonlong/components/actions/workflows/manual.yml/badge.svg?branch=master&event=push)](https://github.com/simboonlong/components/actions/workflows/manual.yml) [![Netlify Status](https://api.netlify.com/api/v1/badges/d434bd40-1962-433b-a451-c28a98e21fd2/deploy-status)](https://app.netlify.com/sites/simboonlong-components/deploys) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

# Components

Handcrafted components that might be of use. List of components.

## Demo

[http://components.simboonlong.com](http://components.simboonlong.com)

## Install

`npm i @simboonlong/components`
## Overlay

Overlay, lightbox, modal, dialog whatever you call it. [Demo](https://components.simboonlong.com/overlay).

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
// scss, otherwise vanilla css is available too.

@import "@simboonlong/components/dist/overlay/overlay.scss";

// customisation with:

:root {
  --overlay-background: green;
}

// OR

$overlay-background: red;
```


```
// js

import { overlayInit } from "@simboonlong/components";
overlayInit();
```