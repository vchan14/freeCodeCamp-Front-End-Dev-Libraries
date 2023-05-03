import './style.scss';
import {mapDispatchToProps, mapStateToProps} from "../../states/TextAreaState.js";
import {connect} from "react-redux";

function TextArea({text, updateText}) {
    const handleChange = (event) => {
        updateText(event.target.value);
    };
    return (
        <div className="text-area">
            <h3>Text Area</h3>
            <textarea id="editor" value={text} onChange={handleChange} />
        </div>
    )
}

export const TextAreaComp = connect(
    mapStateToProps,
    mapDispatchToProps
)(TextArea);