import Container from "@components/Container";
import Section from "@components/Section";
import PreTitle from "@components/Typography/PreTitle";
import Title from "@components/Typography/Title";
import Slider from "react-slick";
import { homeLatests } from "@utils/sliderSettings";
import PropertyCard from "@components/PropertyCard";
import Link from "next/link";
import { Estates } from "@prisma/client";

interface LatestProps {
    latests: Estates[];
}

const Latest: React.FC<LatestProps> = ({ latests }) => {
    return (
        <Section>
            <Container>
                <PreTitle>Latest</PreTitle>
                <Title classes="text-center -mt-8 md:-mt-14 text-5xl md:text-7xl">
                    Latest <span className="text-primary">Properties</span>
                </Title>

                <div className="mt-10">
                    <Slider {...homeLatests}>
                        {latests.map((lat, idx) => (
                            <PropertyCard key={lat.id} estate={lat} idx={idx} />
                        ))}
                    </Slider>
                </div>

                <Link href="/listings">
                    <div className="bg-primary mt-14 md:w-1/5 mx-10 md:mx-auto rounded-2xl py-4 px-10 flex flex-row items-center justify-center cursor-pointer hover:bg-primaryHover ">
                        <a className="text-xl text-white font-bold">See all</a>
                    </div>
                </Link>
            </Container>
        </Section>
    );
};
export default Latest;
