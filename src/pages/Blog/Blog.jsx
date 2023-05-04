import { useRef } from "react";

/* eslint-disable react/no-unescaped-entities */
const Blog = () => {
  const ref = useRef();
  return (
    <div className="container mx-auto py-6 sm:py-8 sm:px-8 rounded-lg">
      
      <div ref={ref} className="bg-white p-4 rounded-lg shadow-xl py-8 mt-12">
        <h4 className="text-4xl font-bold text-gray-800 tracking-widest uppercase text-center">
          FAQ
        </h4>
        <p className="text-center text-gray-600 text-sm mt-2">
          Here are some of the frequently asked questions
        </p>
        <div className="space-y-12 px-2 xl:px-16 mt-12">
          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div className="">
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is the Differences between uncontrolled and controlled
                  components?
                </span>
              </div>
              <div className="py-2 space-y-4 ">
                <p className="text-gray-500">
                  In ReactJS, uncontrolled components and controlled components
                  have the same fundamental definition as described in my
                  previous answer. However, the way they are implemented and
                  used in ReactJS differs from other software engineering
                  contexts.
                </p>
                <p className="text-gray-500">
                  Uncontrolled components in ReactJS are components that manage
                  their own state independently of React's state management
                  mechanism. They typically rely on the DOM to manage their
                  behavior, and their state is not included in React's state
                  tree. Uncontrolled components are often used for simple form
                  elements such as input, select, and textarea, where the state
                  is managed by the browser and not React.
                </p>
                <p className="text-gray-500">
                  Controlled components in ReactJS, on the other hand, are
                  components that rely on React's state management mechanism to
                  manage their behavior. They receive their state and behavior
                  via props, and they report changes in their state back up to
                  the parent component via callbacks. Controlled components are
                  often used for complex form elements such as date pickers,
                  sliders, and custom input components.
                </p>

                <p className="text-gray-500">
                  In summary, while the definition of uncontrolled and
                  controlled components is the same in ReactJS as in other
                  software engineering contexts, their implementation and use
                  cases in ReactJS are specific to the framework and the way it
                  manages state.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex overflow-auto">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  How to validate React props using PropTypes?
                </span>
              </div>
              <div className=" space-y-4 py-2 text-gray-500 pr-8">
                <p className="pr-8">
                  To validate React props using PropTypes, you need to follow
                  these steps:
                </p>
                <ol className="list-decimal sta">
                  <li className="text-gray-500">
                    Import the PropTypes library by adding this line at the top
                    of your file:
                  </li>
                </ol>
                <div className="mockup-code">
                  ```javascript
                  <pre>
                    <code>import PropTypes from 'prop-types';</code>
                  </pre>
                  ```
                </div>
                <ol className="list-decimal sta">
                  <li className="text-gray-500">
                    2. Define the PropTypes for your component by adding a
                    `propTypes` property to your component. You can define the
                    type and shape of each prop using the PropTypes library,
                    like this:
                  </li>
                </ol>
                <div className="mockup-code">
                  ```javascript
                  <pre>
                    <code>
                      MyComponent.propTypes = &#123; prop1:
                      PropTypes.string.isRequired, prop2: PropTypes.number,
                      prop3: PropTypes.func &#125 ;
                    </code>
                  </pre>
                  ```
                </div>
                <p className="">
                  This code specifies that `MyComponent` should receive three
                  props: `prop1`, `prop2`, and `prop3`. The
                  `PropTypes.string.isRequired` line says that `prop1` should be
                  a required string, while `PropTypes.number` and
                  `PropTypes.func` say that `prop2` and `prop3` are optional
                  numbers and functions, respectively.
                </p>
                <ol className="list-decimal sta">
                  <li className="text-gray-500">
                    3. Finally, use your component and pass it props that
                    conform to the PropTypes definition, like this:
                  </li>
                </ol>
                <div className="mockup-code">
                  ```javascript
                  <pre>
                    <code>
                      &lt; MyComponent prop1= &quot;,hello&ldquo; prop2= &#123;
                      123&#125; prop3=&#123; &#40; &#41; =&gt;
                      console.log&#41;&quot;,hello&ldquo;&#41; &#125; /&gt;
                    </code>
                  </pre>
                  ```
                </div>

                <p className="">
                  This code creates an instance of `MyComponent` and passes it
                  three props: `prop1`, which is a required string with the
                  value `"hello"`, `prop2`, which is an optional number with the
                  value `123`, and `prop3`, which is an optional function that
                  logs `"hello"` to the console. By validating your component's
                  props with PropTypes, you can catch potential bugs and errors
                  early on, and make your code more robust and maintainable.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is the difference between nodejs and express js.
                </span>
              </div>
              <div className="flex items-center py-2">
                <div className="text-gray-500 space-y-4">
                  <p className="">
                    Node.js and Express.js are both popular technologies used
                    for building web applications and backend systems.
                  </p>

                  <p className="">
                    Node.js is a JavaScript runtime environment built on
                    Chrome's V8 JavaScript engine. It provides a platform for
                    running JavaScript code outside of a web browser. With
                    Node.js, developers can build server-side applications using
                    JavaScript, which is the same language used for client-side
                    scripting in web browsers.
                  </p>
                  <p className="">
                    Express.js, on the other hand, is a web application
                    framework built on top of Node.js. It provides a set of
                    features and tools for building web applications and APIs in
                    a more organized and efficient manner. Express.js offers
                    many features such as middleware, routing, and templating
                    engines that make building web applications easier.
                  </p>

                  <p className="">
                    In summary, while Node.js provides the runtime environment
                    for running JavaScript code on the server-side, Express.js
                    is a framework that provides additional features and tools
                    for building web applications on top of Node.js. Express.js
                    simplifies the process of building web applications and APIs
                    by providing a set of common features that can be easily
                    integrated into an application, whereas Node.js provides the
                    underlying runtime environment for executing JavaScript code
                    on the server-side.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex">
            <div>
              <div className="flex items-center h-16 border-l-4 border-blue-600">
                <span className="text-4xl text-blue-600 px-4">Q.</span>
              </div>
              <div className="flex items-center h-16 border-l-4 border-gray-400">
                <span className="text-4xl text-gray-400 px-4">A.</span>
              </div>
            </div>
            <div>
              <div className="flex items-center h-16">
                <span className="text-lg text-blue-600 font-bold">
                  What is a custom hook, and why will you create a custom hook?
                </span>
              </div>
              <div className="flex items-center py-2">
                <div className="text-gray-500 space-y-4">
                  <p className="">
                    In React, a custom hook is a function that starts with the
                    prefix `use` and allows you to extract reusable logic from
                    components. Custom hooks enable you to create reusable
                    functionality that can be shared across multiple components
                    without duplicating code.
                  </p>

                  <p className="">
                    Custom hooks are useful in situations where you have complex
                    logic that is used in multiple components or where you want
                    to separate concerns between your components and logic.
                    Custom hooks can be used for tasks such as data fetching,
                    state management, or handling component lifecycle events.
                  </p>

                  <p className="">
                    When creating a custom hook, you are essentially creating a
                    function that can be reused across multiple components. This
                    function can use other React hooks, such as `useState`,
                    `useEffect`, or `useContext`, to implement the desired
                    functionality.
                  </p>

                  <p className="">
                    Here are some reasons why you might create a custom hook:
                  </p>

                  <p className="">
                    <span className="font-bold">
                      Reuse logic across components
                    </span>
                    : Custom hooks allow you to extract complex logic from
                    components and reuse it in multiple places without
                    duplicating code.
                  </p>
                  <p className="">
                    <span className="font-bold">Separate concerns</span> Custom
                    hooks can be used to separate concerns between your
                    components and logic. This can help to improve the
                    readability and maintainability of your codebase{" "}
                  </p>
                  <p className="">
                    <span className="font-bold">
                      Abstract away implementation details
                    </span>
                    Custom hooks can be used to abstract away implementation
                    details of certain functionality, making it easier to use
                    and reducing the cognitive load on the developer using the
                    hook.{" "}
                  </p>

                  <p className="">
                    <span className="font-bold">Promote code reuse</span> Custom
                    hooks can help to promote code reuse, which can lead to a
                    more efficient and scalable codebase.
                  </p>

                  <p className="">
                    In summary, custom hooks are functions that allow you to
                    extract and reuse logic across multiple components in a
                    React application. They can help to improve code
                    organization, promote code reuse, and make it easier to
                    separate concerns between components and logic.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
