import PreTitle from "@components/Typography/PreTitle";
import Title from "@components/Typography/Title";
import Slider from "react-slick";
import { homeLatests } from "@utils/sliderSettings";
import PropertyCard from "@components/PropertyCard";
import { Estates } from ".prisma/client";

interface ListingSimilarProps {
    country: string;
    similar: Estates[];
}

const ListingSimilar: React.FC<ListingSimilarProps> = ({
    country,
    similar,
}) => {
    return (
        <div className="mt-20 md:mt-10">
            <PreTitle classes="hidden md:block">Similar Places</PreTitle>
            <Title classes="-mt-8 md:-mt-14 text-2xl md:text-7xl text-center">
                Similiar places in{" "}
                <span className="text-primary">{country}</span>
            </Title>

            <div className="mt-10">
                <Slider {...homeLatests}>
                    {similar.map((lat) => (
                        <PropertyCard key={lat.id} estate={lat} />
                    ))}
                </Slider>
            </div>
        </div>
    );
};
export default ListingSimilar;
