import React from "react";

// React Hook
import { useEffect, useState } from "react";

// Firebase Database instance
import { database } from "../firebase/clientApp";

// firestore functions
import { setDoc, doc, onSnapshot } from "firebase/firestore";

export default function Home() {
  //State Management for displaying the content
  const [displayText, setDisplayText] = useState("");
  //State Management for setting the incoming text of the user
  const [text, setText] = useState();

  // Create document function, saving the ID
  const addText = async () => {
    await setDoc(doc(database, "texts", "ilxEtqLTjTp5fCO78ckJ"), {
      data: text,
    });
  };

  // Event Handler for changing the text the input box
  const changeText = (e) => {
    setText(e.target.value);
  };

  // onSnapShot
  const getNotes = () => {
    onSnapshot(doc(database, "texts", "ilxEtqLTjTp5fCO78ckJ"), (doc) => {
      setDisplayText(doc.data().data);
    });
  };

  // Side effect for the snapshot function
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        width: "100vw",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gridGap: 8,
        background:
          "linear-gradient(180deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)",
      }}
    >
      <>
        <p className="mb-12 text-6xl">{displayText}</p>
        <h1 className="text-sm ">Please enter a text</h1>
        <input
          type="text"
          name="data"
          className="p-1 rounded-lg"
          onChange={(e) => {
            changeText(e);
          }}
        ></input>
        <button
          className="p-2 text-white rounded-lg bg-sky-700"
          onClick={() => {
            addText();
          }}
        >
          Save Text
        </button>
      </>
    </div>
  );
}
