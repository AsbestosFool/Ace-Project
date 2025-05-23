import { useState } from "react";
import TabButton from "./TabButton.jsx";
import { EXAMPLES } from "../data.js";
export default function Examples() {

  const [ selectedTopic, setSelectedTopic] = useState(null);
  
  function handleClick(selectedButton) {
        setSelectedTopic(selectedButton);
   }
   
    return (
        <section id ="examples">
          <h2>Example</h2>
          <menu>
            <TabButton isSelected= {selectedTopic === 'components'} onSelect={() => handleClick('components')}>Components</TabButton>
            <TabButton isSelected= {selectedTopic === 'jsx'} onSelect={() => handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={selectedTopic === 'props'} onSelect={() => handleClick('props')}>Props</TabButton>
            <TabButton isSelected ={selectedTopic === 'state'} onSelect={() => handleClick('state')}>State</TabButton>
          </menu>
          {!selectedTopic ? (<p>Please select a topic</p>) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                      {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>
            </div>
          )}
        </section>
    );
}