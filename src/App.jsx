import { useState } from "react";
import questions from "./Questions";
import parse from "html-react-parser";

export default function App() {
  return (
    <div>
      <h1>JAVASCRIPT ESSENTIALS</h1>
      <Accordion data={questions} />
    </div>
  );
}

function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="container">
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItem
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={el.title}
          >
            {el.text}
          </AccordionItem>
        ))}
      </div>
    </div>
  );
}

function AccordionItem({ curOpen, onOpen, num, title, children }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{parse(children)}</div>}
    </div>
  );
}
