import Hero from '../components/heroSection/Hero';
import Trusted from '../components/trustedSection/Trusted';
import Container from '../components/layout/Container';
import TrendingApps from '../components/Apps/TrendingApps';
import { useLoaderData } from 'react-router';
import useApp from '../hooks/useApp';

// export const IdContext = createContext();

const Home = () => {
    
    // console.log(app);
    
    // console.log(data);
    // const [id, setId] = useState();
    // console.log(id);
    
    return (
        <>
            <Container>
                <Hero />
            </Container>
            <Trusted />
            <TrendingApps />
        </>
    );
};

export default Home;