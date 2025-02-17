import React, { useRef } from "react";
import { firestore } from "../firebase";
import { addDoc, collection } from "firebase/firestore";
export default function Home() {
  const messageRef = useRef();

  const ref = collection(firestore, "message");

  const handleSave = async (e) => {
    e.preventDefault();
    let data = {
      message: messageRef.current.value,
    };
    try {
      addDoc(ref, data);
    } catch {
      console.log(e);
    }
  };
  return (
    <div>
      <form onSubmit={handleSave}>
        <label>Enter Message</label>
        <input type="text" ref={messageRef}></input>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
