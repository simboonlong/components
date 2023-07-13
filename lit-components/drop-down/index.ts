import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import * as React from "react";
import { createComponent } from "@lit-labs/react";

@customElement("drop-down")
export class DropDown extends LitElement {
  @property() text = "";
  @property() links = "[]";
  @property({ type: Boolean }) isShowMenu = false;

  static override styles = css`
    :host {
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
      padding: var(--drop-down-padding, 4px 8px);
      background-color: var(--drop-down-background-color, #fff);
      border: var(--drop-down-border, solid 1px #999);
      border-radius: var(--drop-down-border-radius, 4px);
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

  private _handleClick = (event: Event) => {
    event.preventDefault();
    this.isShowMenu = !this.isShowMenu;

    if (this.isShowMenu) {
      setTimeout(() => {
        document.body.addEventListener("click", () => { this.isShowMenu = false }, {
          once: true,
        });
      }); // "nextTick" for event loop
    }
  };

  override render() {
    const links: Array<{ text: string; href: string }> = JSON.parse(this.links);

    return html`
      <div part="drop-down-trigger" class="text" @click=${this._handleClick}>${this.text}</div>
      <ul part="drop-down-menu" class="drop-down ${this.isShowMenu ? "show" : ""}">
        ${links.length > 0
        ? links.map(
          (link, index) =>
            html`
              <li>
                <a href="${link.href}">${link.text} ${index + 1}</a>
              </li>
            `,
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
