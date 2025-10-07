import React from 'react';
import Hero from '../components/heroSection/Hero';
import Trusted from '../components/trustedSection/Trusted';
import Container from '../components/layout/Container';
import TrendingApps from '../components/Apps/TrendingApps';

const Home = () => {
    return (
        <>
        <Container>
            <Hero/>
        </Container>
        <Trusted/>
        <TrendingApps/>    
        </>
    );
};

export default Home;