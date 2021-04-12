import Container from "@components/Container";
import Section from "@components/Section";
import Title from "@components/Typography/Title";

const Safety: React.FC = ({}) => {
    return (
        <Section>
            <Container classes="px-4">
                <Title classes="text-center text-5xl md:text-7xl">
                    Buy with <span className="text-primary">Safety</span>
                </Title>
            </Container>
        </Section>
    );
};
export default Safety;
