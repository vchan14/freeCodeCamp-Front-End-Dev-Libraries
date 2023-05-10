import './App.scss'
import {Heading} from "@chakra-ui/react";
import Settings from "./components/Settings.jsx";
import Display from "./components/Display.jsx";
import Control from "./components/Control.jsx";
import display from "./components/Display.jsx";

function App() {

  return (
    <div className="container-app" style={{display: "flex", flexDirection:"column", rowGap:"20px", backgroundColor:"beige"}}>
        <div className="container" style={{border:"3px solid black", padding:"10px", borderRadius:"10px",
            display:"flex", flexDirection:"column", justifyContent: "center", alignItems: "center", rowGap:"20px"}}>
            <Heading as="h1">Pomodoro Timer</Heading>
            <Settings/>
            <Display/>
            <Control/>
        </div>

    </div>
  )
}

export default App
