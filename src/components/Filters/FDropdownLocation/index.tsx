import { Country, Estates } from ".prisma/client";

interface FDropdownLocationProps {
    locations: Estates[] | any;
    countries: Country[];
    handleClick: (value: string) => any;
}

const FDropdownLocation: React.FC<FDropdownLocationProps> = ({
    locations,
    handleClick,
    countries,
}) => {
    return (
        <>
            {countries.map((country, idx1) => (
                <div key={idx1} className="mb-2">
                    <p className="text-base text-gray-500">
                        {country.country_name}
                    </p>

                    {locations
                        .filter(
                            (loc: any) =>
                                loc.city.country.country_name ===
                                country.country_name
                        )
                        .map((city: any, idx: number) => (
                            <div
                                key={idx}
                                className="rounded-sm py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleClick(city.city.city_name)}
                            >
                                <h3 className="text-2xl text-black222 font-bold">
                                    {city.city.city_name}
                                </h3>
                            </div>
                        ))}
                </div>
            ))}
        </>
    );
};
export default FDropdownLocation;
