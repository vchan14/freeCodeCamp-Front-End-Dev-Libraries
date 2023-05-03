import "./style.scss";
import {connect} from "react-redux";
import {mapStateToProps} from "../../states/TextAreaState.js";
import {marked} from "marked";
import {Component} from "react";

// Set options
marked.use({
    breaks: true
});


class PreviewArea extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const previewElement = document.getElementById("preview");
        previewElement.innerHTML = marked.parse(this.props.text);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        const previewElement = document.getElementById("preview");
        previewElement.innerHTML = marked.parse(this.props.text);
    }

    render() {
        return (
            <div className="preview-area">
                <h3>Preview Area</h3>
                <div id="preview" className={"preview-box"} >
                </div>
            </div>
        );
    }
}

export const PreviewAreaComp = connect(mapStateToProps)(PreviewArea);
