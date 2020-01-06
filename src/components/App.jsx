import React from 'react';
import { Container } from './ui';
import FunnyFace from '../images/funny-face.jpg'
import Microphone from '../images/microphone.svg'

const Header = () =>
    (<div style={{ padding: "50px" }}>
        Experimenting with webpack
    </div>)

const style = {
    width: 100,
    height: 100
}

const App = () => {
    return (
        <Container>
            <Header />
            {"Hello"}
            <Container>
                <img style={style} src={FunnyFace} />
                <img style={style} src={Microphone} />
            </Container>
        </Container>
    )
}

export default App;