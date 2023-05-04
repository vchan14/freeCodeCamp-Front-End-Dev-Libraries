import {Button} from "@chakra-ui/react";
import {Component} from "react";

class ButtonBasic extends Component {
    static defaultProps = {
        value: '-1',
        color: 'teal'
    }
    render() {
        return (
            <Button colorScheme={this.props.color} size="lg"> {this.props.value} </Button>
        )
    }
}

export default ButtonBasic;