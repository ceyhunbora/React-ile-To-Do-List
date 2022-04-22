import React from 'react';
import './ListItems.css';
import { RiDeleteBin5Fill } from "react-icons/ri";

function ListItems(props){
    const items = props.items;
    const listItems = items.map(item =>
   {
       return <div className="list" key={item.key}>
     <p>
         <input type="text" id={item.key} value={item.text} onChange={(e)=>{
             props.setUpdate(e.target.value,item.key)}}/>
        <span>
       
        <RiDeleteBin5Fill className="ricon" size={24} onClick={() => {
            props.deleteItem(item.key)
        }} icon="RiDeleteBin5Fill" />
        </span>
     </p>
     
    </div>})
    return <div>
        {listItems}
    
    </div>;
  }

  export default ListItems;