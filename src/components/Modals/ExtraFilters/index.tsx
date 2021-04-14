import { useState } from "react";
import ModalContainer from "@components/ModalContainer";
import { BsHouse } from "react-icons/bs";
import { GiHomeGarage, GiBed } from "react-icons/gi";
import { BiBath } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { useRouter } from "next/router";
import { Reoverlay } from "reoverlay";

interface ExtraFiltersProps {}

const ExtraFilters: React.FC<ExtraFiltersProps> = ({}) => {
    const router = useRouter();

    const [floor, setFloor] = useState(Number(router.query.floors) || 0);
    const [garage, setGarage] = useState(Number(router.query.garage) || 0);
    const [bedroom, setBedroom] = useState(Number(router.query.bedroom) || 0);
    const [bath, setBath] = useState(Number(router.query.bathroom) || 0);

    const handleApply = () => {
        const allQuery = {};

        if (floor !== 0) allQuery["floors"] = floor;
        if (garage !== 0) allQuery["garage"] = garage;
        if (bedroom !== 0) allQuery["bedroom"] = bedroom;
        if (bath !== 0) allQuery["bathroom"] = bath;

        router.push(
            {
                pathname: "/listings",
                query: { ...router.query, ...allQuery },
            },
            undefined
        );

        Reoverlay.hideModal();
    };

    return (
        <ModalContainer>
            <div className="relative modalFilter">
                <div className="absolute top-0 left-0 right-0 flex items-center bg-white z-10 py-2">
                    <div className="flex-1 justify-center items-center">
                        <h3 className="text-xl font-bold text-center text-black222">
                            Filters
                        </h3>
                    </div>
                </div>
                <div className="overflow-y-auto py-14 relative">
                    <div className="flex items-center flex-col md:flex-row justify-between">
                        <div className="flex-1 flex items-center">
                            <BsHouse size={18} className="mr-2" />
                            <h3 className="text-lg text-black222">
                                Numbers of floor
                            </h3>
                        </div>
                        <div className="flex-none flex items-center mt-3 md:mt-0">
                            <AiOutlineMinusCircle
                                size={32}
                                onClick={() =>
                                    setFloor(floor === 0 ? 0 : floor - 1)
                                }
                                className={`cursor-pointer ${
                                    floor === 0
                                        ? "cursor-not-allowed opacity-50"
                                        : ""
                                }`}
                            />
                            <p className="mx-3 font-bold text-lg">{floor}</p>
                            <AiOutlinePlusCircle
                                size={32}
                                className="cursor-pointer"
                                onClick={() => setFloor(floor + 1)}
                            />
                        </div>
                    </div>
                    <div className="flex items-center flex-col md:flex-row justify-between mt-4">
                        <div className="flex-1 flex items-center">
                            <GiHomeGarage size={18} className="mr-2" />
                            <h3 className="text-lg text-black222">
                                Numbers of parking spaces
                            </h3>
                        </div>
                        <div className="flex-none flex items-center mt-3 md:mt-0">
                            <AiOutlineMinusCircle
                                size={32}
                                onClick={() =>
                                    setGarage(garage === 0 ? 0 : garage - 1)
                                }
                                className={`cursor-pointer ${
                                    garage === 0
                                        ? "cursor-not-allowed opacity-50"
                                        : ""
                                }`}
                            />
                            <p className="mx-3 font-bold text-lg">{garage}</p>
                            <AiOutlinePlusCircle
                                size={32}
                                className="cursor-pointer"
                                onClick={() => setGarage(garage + 1)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center flex-col md:flex-row justify-between mt-4">
                        <div className="flex-1 flex items-center">
                            <GiBed size={18} className="mr-2" />
                            <h3 className="text-lg text-black222">
                                Numbers of bedrooms
                            </h3>
                        </div>
                        <div className="flex-none flex items-center mt-3 md:mt-0">
                            <AiOutlineMinusCircle
                                size={32}
                                onClick={() =>
                                    setBedroom(bedroom === 0 ? 0 : bedroom - 1)
                                }
                                className={`cursor-pointer ${
                                    bedroom === 0
                                        ? "cursor-not-allowed opacity-50"
                                        : ""
                                }`}
                            />
                            <p className="mx-3 font-bold text-lg">{bedroom}</p>
                            <AiOutlinePlusCircle
                                size={32}
                                className="cursor-pointer"
                                onClick={() => setBedroom(bedroom + 1)}
                            />
                        </div>
                    </div>

                    <div className="flex items-center flex-col md:flex-row justify-between mt-4">
                        <div className="flex-1 flex items-center">
                            <BiBath size={18} className="mr-2" />
                            <h3 className="text-lg text-black222">
                                Numbers of bathrooms
                            </h3>
                        </div>
                        <div className="flex-none flex items-center mt-3 md:mt-0">
                            <AiOutlineMinusCircle
                                size={32}
                                onClick={() =>
                                    setBath(bath === 0 ? 0 : bath - 1)
                                }
                                className={`cursor-pointer ${
                                    bath === 0
                                        ? "cursor-not-allowed opacity-50"
                                        : ""
                                }`}
                            />
                            <p className="mx-3 font-bold text-lg">{bath}</p>
                            <AiOutlinePlusCircle
                                size={32}
                                className="cursor-pointer"
                                onClick={() => setBath(bath + 1)}
                            />
                        </div>
                    </div>
                </div>
                <div className="pt-2 absolute -bottom-3 left-0 right-0 flex items-center border-t-2 border-gray-100 bg-white justify-center">
                    <div
                        className="py-2 px-10 bg-primary rounded-2xl flex items-center justify-center z-20 text-white cursor-pointer hover:bg-primaryHover"
                        onClick={handleApply}
                    >
                        Apply
                    </div>
                </div>
            </div>
        </ModalContainer>
    );
};
export default ExtraFilters;
