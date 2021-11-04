import './App.css';
import SplitScreen from './SplitScreen';


const LeftHand = ({ name }) => {
  return <h1>{name}!</h1>
}

const RightHand = ({ message }) => {
  return <h1>{message}</h1>
}

function App() {
  return (
    <>
      <div className='App'>
        <p>
          <b>Design patterns</b> are <em>effective</em> solutions to common application development challenges.
        </p>
      </div>

      <ul>
        <li>Creating reusable layouts</li>
        <li>Reusing complex logic between  multiple components</li>
        <li>Working with forms</li>
        <li>Incorporating functional concepts into our code</li>
      </ul>

      <div className='App'>
        <p><b>The Idea of Layout Components</b></p>
        <hr />
        <p><em>Our components shouldn't know where they're being displayed.</em></p>
      </div>

      <SplitScreen leftWeight={1} rightWeight={3}>
        <LeftHand name='cbdhcbhdbc' />
        <RightHand message='dhcdhcbdhc' />
      </SplitScreen>

      <div className='App'>
        <h1>Container Components</h1>
        <p>Components that take care of loading and managing data for their child components</p>
        <p>Our components shouldn't know where their data is coming from.</p>
      </div>

      <div className='App'>
        <h2>Axios</h2>
        <p>Axios is a promise based HTTP client for the browser and Node.js.
          Axios makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
          It can be used in plain JavaScript or with a library such as Vue or React.
        </p>
      </div>

      <div className='App'>
        <h3>Uncontrolled components</h3>
        <p>Components that keep track of their own states and release data only when some event occurs (that
          is, the submit event for HTML forms).
        </p>
        <br />
        <h3>Controlled components</h3>
        <p>Components that do <em>not</em> keep track of their own state - all state is passed in as
          props (that is, when we use the UseState Hook with text inputs).</p>
      </div>

      <div className='App'>
        <h3>Higher Order Component (HOC)</h3>
        <p>A component that returns another component instead of JSX. Are just functions. Sharing
          complex behavior between multiple components. Adding extra functionality to existing components.
        </p>
      </div>

      <div className='App'>
        <h2>Applications of FP in React</h2>
        <ul>
          <li>Controlled components</li>
          <li>Function components</li>
          <li>Higher-order components</li>
          <li>Recursive components</li>
          <li>Partially applied components</li>
          <li>Component composition</li>
        </ul>
      </div>

      <div className='App'>
        <h2>DESIGN PATTERNS</h2>
        <ul>
          <li>Layout components</li>
          <li>Container components</li>
          <li><b>Controlled</b> vs Uncontrolled components</li>
          <li>Higher-order components</li>
          <li>Custom Hooks</li>
          <ul>Functional design patterns:
            <li>Controlled components</li>
            <li>Function components</li>
            <li>Higher-order components</li>
            <li>Recursive components</li>
            <li>Partially applied components</li>
            <li>Component composition</li>
          </ul>
        </ul>
      </div>

    </>
  );
}

export default App;
