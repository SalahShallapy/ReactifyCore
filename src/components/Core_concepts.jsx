import { CORE_CONCEPTS } from "../data.js";
import Section from "./Section.jsx";
import CoreConcepts from "./CoreConcepts.jsx";

export default function Core_concepts() {
  return (
    <Section title={CoreConcepts} id="core-concepts">
      <ul>
        {CORE_CONCEPTS.map((item) => (
          <CoreConcepts key={item.title} {...item} />
        ))}
      </ul>
    </Section>
  );
}
