
import { useState } from "react";
import Entry from "./Entry";

export default function Form() {
  const [firstName, setFirstName] = useState("")

  
  function handleFirstNameChange(event) {
      setFirstName(event.target.value)
  }
  

  
  return (
      <form>
          <input
              type="text"
              placeholder="To Do"
              onChange={handleFirstNameChange}
          ></input>
          <input type='button'></input>
          <Entry></Entry>
      </form>
  )
}