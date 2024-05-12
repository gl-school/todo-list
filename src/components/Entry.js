
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

export default function Entry() {


  return (
      <div className="container">
        <h2>To Do Entry</h2>
        <p>Date</p>
        <div className="todo-item">
          

          <input type='checkbox' className='checkbox'></input>
          <FontAwesomeIcon className="icon edit" icon={faPlus}></FontAwesomeIcon> 
          <FontAwesomeIcon className="icon trash" icon={faTrash}></FontAwesomeIcon> 
        </div>
      </div>
  )
}


///<i class="fa-solid fa-trash"></i>


// <i class="fa-solid fa-plus"></i>