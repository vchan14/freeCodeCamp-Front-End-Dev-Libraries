import './App.scss'

import  {TextAreaComp} from "./components/TextArea/TextArea.jsx";
import {PreviewAreaComp} from "./components/PreviewArea/PreviewArea.jsx";
import {Provider} from "react-redux";
import {store} from "./states/TextAreaState.js";

function App() {
  return (
    <Provider store={store} >
        <h1 className="title">Quick Markdown Editor</h1>
        <div className={"container-simple"}>
            <TextAreaComp />
            <PreviewAreaComp />
        </div>

    </Provider>
  )
}

export default App
