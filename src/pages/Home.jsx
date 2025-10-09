import Hero from '../components/heroSection/Hero';
import Trusted from '../components/trustedSection/Trusted';
import Container from '../components/layout/Container';
import TrendingApps from '../components/Apps/TrendingApps';
import useApp from '../hooks/useApp';
import Loaderforapp from '../loader/Loaderforapp';


const Home = () => {
    const { loading } = useApp();
    console.log(loading);

    return (
        <>
            {
                loading ? <Loaderforapp /> : (
                    <>
                        <Container>
                            <Hero />
                        </Container>
                        <Trusted />
                        <TrendingApps />
                    </>
                )
            }

        </>
    );
};

export default Home;