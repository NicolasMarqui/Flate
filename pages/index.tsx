import Meta from "@components/Meta";
import Hero from "@components/Hero";
import Latest from "@components/Latest";
import Experience from "@components/Experience";

const Home: React.FC = () => {
    return (
        <>
            <Meta
                title="Home"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <Hero />
            <Latest />
            <Experience />
        </>
    );
};

export default Home;
