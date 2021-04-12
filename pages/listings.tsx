import { useState } from "react";
import Meta from "@components/Meta";
import FilterContainer from "@components/FilterContainer";
import PropertyCard from "@components/PropertyCard";
import dynamic from "next/dynamic";
import useWindowSize from "@hooks/useWindowSize";
import { BsMap } from "react-icons/bs";
import Title from "@components/Typography/Title";
import { FaTimes } from "react-icons/fa";

const Listings: React.FC = ({}) => {
    const { width } = useWindowSize();
    const MapWithNoSSR = dynamic(() => import("../src/components/Map"), {
        ssr: false,
    });
    const isRow = width > 755;

    const [showMap, setShowMap] = useState(null);

    return (
        <div className="listings relative">
            <Meta
                title="Listings"
                description="Encontre os melhores tutores para te ajudar nessa jornada"
                keywords="home, tutor, javascript, nivelamento, aprender, algoritimos, comprar"
            />
            <FilterContainer />
            <div className="listing__wrapper relative">
                <div className="listing__results">
                    <div
                        className={`mt-3  relative ${
                            isRow ? "" : " md:px-16 flex flex-wrap"
                        }`}
                    >
                        {new Array(10).fill("-").map((a, idx) => (
                            <PropertyCard key={idx} isRow={isRow} />
                        ))}
                    </div>
                </div>
                <div
                    className={`listings__map ${
                        showMap ? "visible" : "not__visible"
                    }`}
                >
                    <div className="help">
                        <MapWithNoSSR />
                    </div>
                </div>
                {width < 992 && (
                    <div
                        className="fixed bottom-8 right-20 left-20 py-3 px-10 bg-primary rounded-2xl flex items-center justify-center z-20"
                        onClick={() => setShowMap(true)}
                    >
                        <BsMap size={22} color="#fff" className="mr-2" />
                        <p className="text-white font-bold">Show Map</p>
                    </div>
                )}
            </div>
            {showMap && (
                <div className="fixed inset-0 bg-black222 z-30">
                    <div className="absolute text-white top-0 right-0 left-0 bottom-20">
                        <div className="flex items-center justify-between">
                            <Title classes="text-center py-8 px-2 text-5xl md:text-7xl ml-3">
                                Map <span className="text-primary">Italy</span>
                            </Title>
                            <div
                                className="bg-bg rounded-full mr-4 p-4"
                                onClick={() => setShowMap(false)}
                            >
                                <FaTimes size={30} color="#fff" />
                            </div>
                        </div>
                        <MapWithNoSSR />
                    </div>
                </div>
            )}
        </div>
    );
};
export default Listings;