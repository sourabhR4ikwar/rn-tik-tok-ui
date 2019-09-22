import React from 'react';
import styled from 'styled-components/native';
import { StatusBar } from 'react-native';

import Header from "../components/Header"; 
import Hero from "../components/Hero";
import Tabs from "../components/Tabs";
import api from '../services/api';

const Container = styled.View`
    flex: 1;
    background: rgba(0,0,0,1); 
`

const Home = () => {
    return (
    <>
        <StatusBar 
            translucent
            backgroundColor='transparent'
            barStyle="light-content"
        />
        <Container>
            <Header />
            <Hero videos={api}/>
            <Tabs />
        </Container>
    </>
    )
}

export default Home; 