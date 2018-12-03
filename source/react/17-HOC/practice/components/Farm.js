// Core
import React from 'react';

// Components
import { Container, Heading, Button, Message } from '../styled';

export default (props) => {
    // 10 должно стать динамическим
    // props._yieldApples должно стать динамическим
    const applesJSX = Array(props.items).fill('🍎');

    return (
        <Container>
            <Heading>🏡 Ферма 🕊</Heading>
            <div>
                <Message>Урожай:</Message>
                <Message>{applesJSX}</Message>
            </div>
            <Button onClick = { props._yieldItems }>Собрать урожай 👨🏼‍🌾</Button>
        </Container>
    );
};
