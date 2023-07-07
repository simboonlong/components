import { ReactDropDown } from "../../../dist";

function App() {
  return (
    <>
      <div className="flex-col h-screen px-4 text-gray-800">
        <main className="flex-grow">
          <div className="container mx-auto py-8">
            <nav className="menu">
              <ul className="flex flex-wrap">
                <li className="w-auto mr-4">
                  <ReactDropDown
                    id="example-1"
                    text="Example 1"
                    links='[{ "text": "Link", "href": "#link-1" }, { "text": "Link", "href": "#link-2" }, { "text": "Link", "href": "#link-3" }, { "text": "Link", "href": "#link-4" }]'
                  ></ReactDropDown>
                </li>
                <li className="w-auto mr-4">
                  <ReactDropDown
                    text="Example 2"
                    links='[{ "text": "Link", "href": "#link-1" }, { "text": "Link with very long text", "href": "#link-2" }, { "text": "Link", "href": "#link-3" }]'
                  ></ReactDropDown>
                </li>
                <li className="w-auto mr-4">
                  <ReactDropDown text="Example 3">
                    <div id="slotted-children">Slotted children</div>
                  </ReactDropDown>
                </li>
              </ul>
            </nav>
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
