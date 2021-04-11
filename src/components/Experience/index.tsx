import Container from "@components/Container";
import Section from "@components/Section";
import PreTitle from "@components/Typography/PreTitle";
import Title from "@components/Typography/Title";
import Image from "next/image";

interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = ({}) => {
    return (
        <Section>
            <Container classes="px-4">
                <PreTitle>30 years experience</PreTitle>
                <div className="flex flex-col md:flex-row items-centers">
                    <div className="flex-1 -mt-10 order-2 md:order-1 md:pr-10">
                        <Title classes="text-center md:text-left">
                            30 years experience in the market
                        </Title>

                        <p className="mt-10 text-white md:text-2xl text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et.
                        </p>

                        <p className="mt-5 text-white md:text-2xl text-center md:text-left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et.
                        </p>
                    </div>
                    <div className="flex-1 order-1 md:order-2">
                        <img
                            src="/images/detail.png"
                            width={992}
                            height={436}
                        />
                    </div>
                </div>
            </Container>
        </Section>
    );
};
export default Experience;
