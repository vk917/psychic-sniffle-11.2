import { createContext, useContext, useState } from "react"

const LightContext=createContext();

const ContextProvider=({children})=>{

  const [light,setLight]=useState(true);

  return <LightContext.Provider value={{
    light,
    setLight
  }}>
    {children}
  </LightContext.Provider>
}

export const App=()=>{
  return <>
    <ContextProvider>
      <LightComp/>
    </ContextProvider>
  </>
}

const LightComp=()=>{

  return <>
    <BulbComp/>
    <ToggleBulb/>
  </>
}

const BulbComp=()=>{
  const {light}=useContext(LightContext)
  return <>
    {light ? "Bulb on": "Bulb Off"}
  </>
}


const ToggleBulb=()=>{
  const {setLight}=useContext(LightContext)

  function Toggle(){
    setLight(curr => !curr)
  }

  return <>
    <button onClick={Toggle}>Toggle Bulb</button>
  </>
}


//Prop drilling 
// function App(){
//   const [light,setLight]=useState(true);

//   return <>
//     <LightComp2 light={light} setLight={setLight}/>
//   </>
// }

// function LightComp2(props){
//   return <>
//     <BulbState2 {...props}/>
//     <ToggleBulb2 {...props}/>
//   </>
// }

// function BulbState2(props){
//   return <>
//     {props.light ? "Bulb On": "Bulb Off"}
//   </>
// }

// function ToggleBulb2(props){

//   function ToggleFun(){
//     props.setLight(curr => !curr)
//   }
//   return <>
//     <button onClick={ToggleFun}>ToggleBulb</button>
//   </>
// }

//Rolling up the state
// function App2() {

//   return (
//     <>
//       <LightComp/>
//     </>
//   )
// }

// function LightComp(){
//   const [bulb,setbulb]=useState(true);

//   return <>
//     <BulbState bulb={bulb} setbulb={setbulb}/>
//     <ToggleBulb setbulb={setbulb}/>
//   </>
// }

// function BulbState({bulb}){
//   return <>
//     {bulb ? "Bulb On": "Bulb off"}
//   </>
// }

// function ToggleBulb({setbulb}){

//   function ToggleFun(){
//     setbulb(curr => !curr)
//   }

//   return <>
//     <button onClick={ToggleFun}>Toggle</button>
//   </>
// }

export default App
