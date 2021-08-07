import { useState } from 'react';
import './App.css';

function App() {
  const[input,setInput]=useState("");
  const[quarterfinal,setQuarterfinal]=useState([]);
  const[editingid,setEditingId]=useState(null);
  const[editingValue,setEditingValue]=useState("");
 
  const addHandler=()=>{
    const newVariable={
      id:new Date().getTime(),
      text: input
    } 
    setQuarterfinal([...quarterfinal, newVariable]);
    console.log(newVariable)
    setInput("");
  }
  const deleteHandler=(id)=>{
    const upadte=[...quarterfinal].filter((para)=>{
      return para.id!==id;
    })
    setQuarterfinal(upadte);
  }
  const editSubmitHandler=(id)=>{
    const updatevalue=[...quarterfinal].map((para)=>{
      if(para.id===id){
        para.text=editingValue;
      }
      return para;
    })
    //console.log(updatevalue)
    setQuarterfinal(updatevalue);
    console.log(quarterfinal)
    setEditingId(null);
  }
  return (
    <div className="App">
      <input id="task" value={input} onChange={(e)=>setInput(e.target.value)}></input>
     <button id="btn" onClick={addHandler}> Add </button>
     {/* {console.log("return")} */}

     {quarterfinal.map((para)=>{
       return (
         <>
         
         <div key={para.id}>
           {editingid===para.id
           ?(<input id="task" onChange={(e)=>setEditingValue(e.target.value)}/> )
           :(<li className="list">{para.text}</li>)}
            {editingid===para.id
            ?(<button type="submit" onClick={()=>editSubmitHandler(para.id)}>EDIT SUBMIT</button>)
          :(<button className="edit" onClick={()=>setEditingId(para.id)}> EDIT </button>)}
            
            <button className="delete" onClick={()=>deleteHandler(para.id)}> DELETE </button>
            

         </div>
         </>
       )
     })}
    </div>
  );
}

export default App;
