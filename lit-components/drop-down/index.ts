import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";

@customElement("drop-down")
export class DropDown extends LitElement {
  @property() text = "";
  @property() links = "[]";

  static override styles = css`
    :host {
      --drop-down-background-color: #fff;
      --drop-down-border: solid 1px #999;
      --drop-down-border-radius: 4px;
      --drop-down-padding: 4px 8px;

      position: relative;
    }

    .text {
      cursor: pointer;
    }

    .text:hover {
      text-decoration: underline;
    }

    .drop-down {
      display: none;
      position: absolute;
      z-index: 1; /* should be editable */
      bottom: 0;
      left: 0;
      transform: translateY(100%);
      list-style-type: none;
      margin: 0;
      min-width: 120px;
      padding: var(--drop-down-padding);
      background-color: var(--drop-down-background-color);
      border: var(--drop-down-border);
      border-radius: var(--drop-down-border-radius);
      border-style: solid;
      border-width: 1px;

      &.show {
        display: block;
      }
    }

    a {
      white-space: nowrap;
    }
  `;

  show = (dropDown: HTMLElement) => {
    dropDown?.classList.add("show");
  };

  hide = (dropDown: HTMLElement) => {
    dropDown?.classList.remove("show");
  };

  handleClick = (event: Event) => {
    event.preventDefault();
    const target = event.currentTarget as HTMLElement;
    const dropDown = target.nextElementSibling as HTMLElement;

    if (dropDown?.classList.contains("show")) {
      this.hide(dropDown);
    } else {
      this.show(dropDown);

      setTimeout(() => {
        document.body.addEventListener("click", () => this.hide(dropDown), {
          once: true,
        });
      }); // "nextTick" for event loop
    }
  };

  override render() {
    const links: Array<{ text: string; href: string }> = JSON.parse(this.links);

    return html`
      <div class="text" @click=${this.handleClick}>${this.text}</div>
      <ul class="drop-down">
        ${links.length > 0
          ? links.map(
              (link, index) =>
                html`<li>
                  <a href="${link.href}">${link.text} ${index + 1}</a>
                </li>`,
            )
          : html`<slot></slot>`}
      </ul>
    `;
  }
}

// https://lit.dev/docs/tools/publishing/#publish-typescript-typings
declare global {
  interface HTMLElementTagNameMap {
    "drop-down": DropDown;
  }
}

export const ReactDropDown = createComponent({
  tagName: "drop-down",
  elementClass: DropDown,
  react: React,
});
