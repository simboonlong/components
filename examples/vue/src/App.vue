<script setup lang="ts">
import "../../../dist";

</script>

<template>
  <div className="flex-col h-screen px-4 text-gray-800">
    <main className="flex-grow">
      <div className="container mx-auto py-8">
        <nav className="menu">
          <ul className="flex flex-wrap">
            <li className="w-auto mr-4">
              <drop-down
                id="example-1"
                text="Example 1"
                links='[{ "text": "Link", "href": "#link-1" }, { "text": "Link", "href": "#link-2" }, { "text": "Link", "href": "#link-3" }, { "text": "Link", "href": "#link-4" }]'
              ></drop-down>
            </li>
            <li className="w-auto mr-4">
              <drop-down
                text="Example 2"
                links='[{ "text": "Link", "href": "#link-1" }, { "text": "Link with very long text", "href": "#link-2" }, { "text": "Link", "href": "#link-3" }]'
              ></drop-down>
            </li>
            <li className="w-auto mr-4">
              <drop-down text="Example 3">
                <div id="slotted-children">Slotted children</div>
              </drop-down>
            </li>
          </ul>
        </nav>
      </div>
    </main>
  </div>
</template>

<style scoped>

</style>
