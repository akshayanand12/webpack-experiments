import React from 'react';
import { Container } from './ui';

const Header = () =>
    (<div style={{ padding: "50px" }}>
        Experimenting with webpack
    </div>)

const App = () => {
    return (
        <Container>
            <Header />
            {"Hello"}
        </Container>
    )
}

export default App;