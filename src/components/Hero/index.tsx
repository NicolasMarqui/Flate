import { Country, Estates } from ".prisma/client";
import Container from "@components/Container";
import FiltersHero from "@components/FiltersHero";
import Title from "@components/Typography/Title";

interface HeroProps {
    estates: Estates[];
    countries: Country[];
}

const Hero: React.FC<HeroProps> = ({ estates, countries }) => {
    return (
        <div
            className="relative bg-banner bg-cover bg-no-repeat bg-center flex items-center justify-center"
            style={{ height: "80vh" }}
        >
            <div className="absolute inset-0 bg-overlay"></div>
            <Container classes="px-4">
                <Title classes="text-center md:text-left text-5xl md:text-7xl md:w-2/5">
                    Find your <span className="text-primary">dream</span> home
                </Title>

                <FiltersHero estates={estates} countries={countries} />
            </Container>
        </div>
    );
};

export default Hero;
