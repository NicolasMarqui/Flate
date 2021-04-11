import Container from "@components/Container";
import Section from "@components/Section";
import PreTitle from "@components/Typography/PreTitle";
import Title from "@components/Typography/Title";

interface LatestProps {}

const Latest: React.FC<LatestProps> = ({}) => {
    return (
        <Section>
            <Container>
                <PreTitle>Latest</PreTitle>
                <Title classes="text-center -mt-8 md:-mt-14 text-5xl md:text-7xl">
                    Latest <span className="text-primary">Properties</span>
                </Title>
            </Container>
        </Section>
    );
};
export default Latest;
