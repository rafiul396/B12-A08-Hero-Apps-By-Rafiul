import Hero from '../components/heroSection/Hero';
import Trusted from '../components/trustedSection/Trusted';
import Container from '../components/layout/Container';
import TrendingApps from '../components/Apps/TrendingApps';
import Loaderforapp from '../loader/Loaderforapp';


const Home = () => {

    return (
        <>
        <title>Home - bdsoft.io</title>
            <Container>
                <Hero />
            </Container>
            <Trusted />
            <TrendingApps />

        </>
    );
};

export default Home;