
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header.jsx";
import CoreConcepts from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

function App() {
  function handleClick() {
        console.log('Hello world - Selected');
    }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
        <h2>Time to get started!</h2>
        <ul>
          <CoreConcepts {...CORE_CONCEPTS[0]}/>
          <CoreConcepts {...CORE_CONCEPTS[1]}/>
          <CoreConcepts {...CORE_CONCEPTS[2]}/>
          <CoreConcepts {...CORE_CONCEPTS[3]}/>
        </ul>
        </section>
        <section id ="examples">
          <h2>Example</h2>
          <menu>
            <TabButton onSelect={handleClick}>Components</TabButton>
            <TabButton onSelect={handleClick}>JSX</TabButton>
            <TabButton onSelect={handleClick}>Props</TabButton>
            <TabButton onSelect={handleClick}>State</TabButton>
            
          </menu>

        </section>
      </main>
    </div>
  );
}

export default App;
