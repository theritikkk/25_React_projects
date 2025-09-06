import { useState } from "react";
import data from "./data";
import './style.css';

export default function Accordian() {
    const [selected, setSelected] = useState(null);
    const [enableMultiSelection, setEnableMultiSelection] = useState(false);
    const [multiple, setMultiple] = useState([])


    function handleSingleSelection(getCurrentId) {
      setSelected(getCurrentId === selected ? null : getCurrentId);
    }

    function handleMultipleSelection(getCurrentId) {
      let cpyMultiple = [...multiple];
      const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

      console.log(findIndexOfCurrentId);

      if(findIndexOfCurrentId === -1) {
        cpyMultiple.push(getCurrentId);
      }
      else {
        cpyMultiple.splice(findIndexOfCurrentId , 1);
      }
      
      setMultiple(cpyMultiple);

      console.log(selected, multiple);
    }

    console.log(selected);


    return (
      <div className="wrapper">
        <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} > Enable Multiselection </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (

              <div key={dataItem.id} className="item">

                <div onClick={ enableMultiSelection ? ()=> handleMultipleSelection(dataItem.id) : () => handleSingleSelection(dataItem.id)} className="title">
                  <h3>{dataItem.question}</h3>
                  <span>+</span>

                </div>

                {
                  enableMultiSelection ?
                  multiple.indexOf(dataItem.id) !== -1 &&
                  <div className="content"> {dataItem.answer} </div> :
                  selected === dataItem.id && <div className="content" > {dataItem.answer} </div>
                }

                {/* {
                  selected === dataItem.id || mutliple.indexOf(dataItem.id) != -1  ? 
                  <div className="content"> {dataItem.answer} </div> :
                  null
                } */}

              </div>
            )
            )
          ) : (
            <div>No data found !</div>
          )}
        </div>
      </div>
    );
    
}