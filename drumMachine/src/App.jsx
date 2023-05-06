import './App.scss'
import {Box, Button, Slider, SliderFilledTrack, SliderThumb, SliderTrack, Switch} from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux";
import {setDisplayText, setVolumeLevel, toggleBank, togglePower} from "./states/DrumMachineStates.js"
import {sounds} from "./assests/sounds.js";
import {useEffect} from "react";

function App() {

    const drumPadLetters = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];
    const dispatch = useDispatch();
    const displayText = useSelector(state => state.displayText);
    const isPowerOn = useSelector(state => state.isPowerOn);
    const isBankOn = useSelector(state => state.isBankOn);
    const volumeLevel = useSelector(state => state.volumeLevel);

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    });

    const handleKeyPress = (event) => {
        const key = event.key.toUpperCase();
        // check whether key is in drumPadLetters.
        if(drumPadLetters.includes(key)) {
            const buttonElement = document.getElementById(`drum-pad-${key}`);
            buttonElement.click();
            buttonElement.focus();
        }

    }


    const padClick = function(inValue) {
        if (!isPowerOn) {
            dispatch(setDisplayText('Power is OFF'));
            return;
        }
        dispatch(setDisplayText(`${inValue} is played`));
        const audio = document.getElementById(inValue);
        audio.volume = Number((volumeLevel/100));
        audio.play();
    }

    const getClip = function(inLetter) {
        if (isBankOn) {
            return sounds[inLetter].piano;
        }
        return sounds[inLetter].drum;
    }

    const bankSwitchChange = function(inEvent) {
        const bankState = inEvent.target.checked ? 'On' : 'Off';
        dispatch(setDisplayText(`Bank is ${bankState}`));
        dispatch(toggleBank());
    }

    const powerSwitchChange = function(inEvent) {
        const powerState = inEvent.target.checked ? 'On' : 'Off';
        dispatch(setDisplayText(`Power is ${powerState}`));
        dispatch(togglePower());
    }

    const volumeChange = function (inValue) {
        dispatch(setDisplayText(`Volume is ${inValue}`));
        dispatch(setVolumeLevel(inValue));
    }

    const drumPadElements = drumPadLetters.map((letter, index) => {
        return(
            <Button className="drum-pad" id={`drum-pad-${letter}`} onClick={() => padClick(letter)} w="100%" colorScheme="teal" size="lg" key={index}>
                {letter}
                <audio id={letter} className="clip" src={getClip(letter)}></audio>
            </Button>
        )
    })
    return (
        <div id="drum-machine">
            <div id="title">
                <h2 style={{textAlign:"center"}}>Drum Machine</h2>
            </div>
            <>
                <div id="display">
                    <div id="power-switch">
                        <h3>Power</h3>
                        <Switch isChecked={isPowerOn} onChange={(event ) => powerSwitchChange(event)} colorScheme='red' size='lg' />
                    </div>
                    <div id="display-row">
                        <h3>{displayText}</h3>
                    </div>
                    <div id="volume-slider">
                        <h3>Volume</h3>
                        <Slider onChangeEnd={(value) => volumeChange(value) }aria-label='slider-ex-4' defaultValue={volumeLevel}>
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
                        <Switch isChecked={isBankOn} onChange={(event) => bankSwitchChange(event)} colorScheme='teal' size='lg' />
                    </div>
                </div>
                <div id="drum-pads">
                    {drumPadElements}
                </div>
            </>
        </div>
    )
}

export default App
