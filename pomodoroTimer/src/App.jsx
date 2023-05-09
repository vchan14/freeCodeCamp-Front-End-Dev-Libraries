import './App.scss'
import {Heading} from "@chakra-ui/react";
import Settings from "./components/Settings.jsx";
import Display from "./components/Display.jsx";
import Control from "./components/Control.jsx";
import display from "./components/Display.jsx";

function App() {

  return (
    <div className="container-app" style={{display: "flex", flexDirection:"column", rowGap:"20px"}}>
        <Heading as="h1">Pomodoro Timer</Heading>
        <Settings/>
        <Display/>
        <Control/>
    </div>
  )
}

export default App
