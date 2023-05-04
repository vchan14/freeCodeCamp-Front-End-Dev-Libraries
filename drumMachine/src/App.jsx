import './App.scss'
import ButtonBasic from "./components/ButtonBasic/ButtonBasic.jsx";
import {Box, Button, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch} from "@chakra-ui/react";

function App() {
    const padClick = function(inValue) {
        console.log("Pad is clicked ", inValue);
    }

    const drumPadLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const drumPadElements = drumPadLetters.map((letter, index) => {
        return(
            <Button onClick={() => padClick(letter)} w="100%" colorScheme="teal" size="lg" key={index}>
                {letter}
            </Button>
        )
    })
    return (
        <div id="drum-machine">
            <div id="display">
                <div id="power-switch">
                    <h3>Power</h3>
                    <Switch colorScheme='red' size='lg' />

                </div>
                <div style={{"width": 100}} id="display-row">
                    <h3>Music is pending...</h3>

                </div>
                <div id="volume-slider">
                    <Slider aria-label='slider-ex-4' defaultValue={30}>
                        <SliderTrack bg='red.100'>
                            <SliderFilledTrack bg='tomato' />
                        </SliderTrack>
                        <SliderThumb boxSize={6}>
                            <Box color='tomato' />
                        </SliderThumb>
                    </Slider>
                </div>
                <div id="bank-switch">
                    <h3>Bank</h3>
                    <Switch colorScheme='teal' size='lg' />

                </div>

            </div>
            <div id="drum-pads">
                {drumPadElements}
            </div>
        </div>
    )
}

export default App
