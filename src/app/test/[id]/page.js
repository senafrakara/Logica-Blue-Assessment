import React from 'react'
import Text from "../../../../components/Text";

function Test({ params }) {
  console.log("params id ", params.id);
  return (
    <main className="flex min-h-screen flex-col items-center p-24  font-mono">
      <span className="text-green-500">Test Page</span>
      <span className="text-start w-full text-white font-bold mt-10">Instructions:</span>
      <div className="max-w-5xl w-full items-start justify-between text-sm flex-col flex mt-2">
        <ul className="mt-4 list-disc space-y-4">
          <li>Design should be similar to the provided design.</li>
          <li>
            Clickable button should work. It should make a network request to the API endpoint and display a success
            message and turn from red to green.
          </li>
          <li>
            There shouldn&apos;t be any errors anywhere in the browser console or in the terminal when the project is
            running. (except for dependency deprecation warnings)
          </li>
          <li>
            Page Slug ID should be displayed correctly: SLUG ID
            <br />
            <span className="text-gray-300">
              For example, if the current path is /test/123, the page slug ID should be 123 and the above text should
              display 123.
            </span>
          </li>
          <li>
            Metadata (title) should be set to &apos;Test Page - Slug ID&apos;
            <br />
            <span className="text-gray-300">
              For example, if the current path is /test/35, the page title should be &apos;Test Page - 35&apos;.{" "}
            </span>
          </li>
          <li>Project should build successfully (`npm run build`).</li>
        </ul>
        <span className="text-blue-400 mt-10">
          Please create a ZIP file of the project and send it to us through email when this page is ready.
        </span>
      </div>
      <Text />

    </main>
  );
}

export default Test;