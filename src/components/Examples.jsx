import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
  const [SelectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  return (
    <Section title={Examples} id="examples">
      <Tabs
        buttons={
          <>
            <TabButton
              isActive={SelectedTopic === "components"}
              onClick={() => handleSelect("components")}
            >
              Components
            </TabButton>
            <TabButton
              isActive={SelectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}
            >
              JSX
            </TabButton>
            <TabButton
              isActive={SelectedTopic === "props"}
              onClick={() => handleSelect("props")}
            >
              Props
            </TabButton>
            <TabButton
              isActive={SelectedTopic === "state"}
              onClick={() => handleSelect("state")}
            >
              State
            </TabButton>
          </>
        }
      />
      {/* CHECKING IF THE STATE IS NULL TO ADD A DEFAULT TEXT VALUE  */}
      {!SelectedTopic ? (
        <p>Please select a topic... </p>
      ) : (
        <div id="tab-content">
          <h3>{EXAMPLES[SelectedTopic].title}</h3>
          <p>{EXAMPLES[SelectedTopic].description}</p>
          <pre>
            <code>{EXAMPLES[SelectedTopic].code}</code>
          </pre>
        </div>
      )}
    </Section>
  );
}
