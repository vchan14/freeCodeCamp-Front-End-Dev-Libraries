import {Button} from "@chakra-ui/react";


class SliderBasic extends React.Component {
    static defaultProps = {
        value: '-1',
        color: 'teal'
    }
    render() {
        return (
            <Button colorScheme={this.props.color}> {this.props.value} </Button>
        )
    }
}