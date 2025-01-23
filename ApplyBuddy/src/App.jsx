import React, { useRef, useState } from 'react';
import NavBar from "./components/NavBar";
import InfoBox from "./components/InfoBox";

function App() {
  const [infoBoxes, setInfoBoxes] = useState([
    { id: 1, title: 'personal-Info', description: 'information that relates to an individual' },
    { id: 2, title: 'EDUCATION-Info', description: 'the transmission of knowledge, skills, and character traits' },
    { id: 3, title: 'legal-Info', description: 'information that relates to a legal issue and consent' },
    { id: 4, title: 'experience', description: 'Provide a Brief Highlight-Summary of Your Experience' },
    { id: 5, title: 'documents', description: 'a brief summary of a document\'s contents' },
  ]);

  const titleRef = useRef();
  const descriptionRef = useRef();

  function handleOnAdd() {
    const title = titleRef.current.value;
    const description = descriptionRef.current.value;
    if (title) {
      setInfoBoxes((prevBoxes) => ([...prevBoxes, { id: Date.now(), title, description }]));
      titleRef.current.value = '';
      descriptionRef.current.value = '';
    } else {
      titleRef.current.value = "INVALID INPUT";
      setTimeout(() => {
        titleRef.current.value = "";
      }, 1000);
    }
  }

  function handleOnOpen(name) {
    alert(`The open button is clicked for ${name}`);
  }

  return (
    <>
      <NavBar />
      <div id="content-info">
        {infoBoxes.map((box) => (
          <InfoBox key={box.id} title={box.title} onOpen={() => handleOnOpen(box.title)} description={box.description} />
        ))}
        <InfoBox titleRef={titleRef} onADD={handleOnAdd} descriptionRef={descriptionRef} />
      </div>
    </>
  );
}

export default App;