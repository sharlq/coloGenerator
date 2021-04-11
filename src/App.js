import Values from 'values.js'
import {useState,useEffect} from 'react'
import Colors from "./components/color/colors"
import Form from "./components/form"
function App() {
   new Values("#A7FC79")
  const [colors,setColors]=useState("")
  const [list,setList]=useState(new Values("#A7FC79").all(10))
  const [error,setError] = useState(null)
  
  
  
  
  const getColor =(val)=>{
    console.log(colors)
   return setColors(val)
  }
  const handleSubmit = (e)=> {
      e.preventDefault();
      console.log("co",colors)
      try{
      setError(null)
      return setList(new Values(colors).all(10))
      }catch{
      setError("not valid color")
      }
  }
  const letGo = ()=>{
    console.log("fffffffffffff")
   return setError(false)
  }
  
  



  return (
    <div className="App">
      <Form 
      set={getColor}
       handle={handleSubmit}
        error={error}
         color={colors}
          lett={letGo} />
      <Colors colorList={list}  />
      
    </div>
  );
}

export default App;
