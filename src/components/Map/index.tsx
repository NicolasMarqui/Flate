// prettier-ignore
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Estates } from ".prisma/client";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import CustomIcon from "@components/CustomIcon";
import { GiPositionMarker } from "react-icons/gi";
import Link from "next/link";

interface MapProps {
    markers: Estates[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
    const colors = ["#FF5A5F", "#168AAD", "#52B69A", "#F8961E", "#2D3142"];
    const random = Math.floor(Math.random() * colors.length);
    const handleMarker = (e: any) => {
        // map.setView([e.latlng.lat, e.latlng.lng], 17);
    };

    return (
        <MapContainer
            center={[44.75715235815386, 3.2486035234562847]}
            zoom={4}
            scrollWheelZoom={true}
            markerZoomAnimation
        >
            <TileLayer
                // url="https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ"
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ`}
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />

            {markers.map((mark: Estates, idx) => {
                const icon = L.divIcon({
                    className: "custom-icon",
                    html: ReactDOMServer.renderToString(
                        <CustomIcon
                            price={mark.price}
                            color={colors[idx] || "#FF5A5F"}
                        />
                    ),
                });

                return (
                    <Marker
                        key={idx}
                        position={[
                            Number(mark.coordinates.split(",")[0]),
                            Number(mark.coordinates.split(",")[1]),
                        ]}
                        // @ts-ignore
                        icon={icon}
                        draggable={false}
                        eventHandlers={{
                            click: (e) => {
                                handleMarker(e);
                            },
                        }}
                    >
                        <Popup>
                            <img
                                src={
                                    `${mark.pictures.split(",")[0]}.jpg` ||
                                    "/images/banner.jpg"
                                }
                                height={196}
                                className={`object-cover w-full m-196 rounded-xl`}
                            />
                            <div className="flex items-center justify-between w-full py-2">
                                <h5 className="text-2xl font-bold text-primary">
                                    € {mark.price}
                                </h5>
                            </div>
                            <div className="flex flex-col justify-start">
                                <h3 className="text-2xl font-semibold text-black222">
                                    {mark.estate_name}
                                </h3>
                                <div className="-mt-1 flex flex-row items-center">
                                    <span>
                                        <GiPositionMarker
                                            size={13}
                                            color="#222"
                                            className="mr-2"
                                        />
                                    </span>
                                    <h4 className="text-cardGray2 text-xl font-semibold">
                                        {/* @ts-ignore */}
                                        {mark.city.city_name},{" "}
                                        {/* @ts-ignore */}
                                        {mark.city.country.country_name}
                                    </h4>
                                </div>
                                <div className="mt-2 rounded-xl flex items-center justify-center bg-primaryBlue">
                                    <Link
                                        href="/listing/[id]"
                                        as={`/listing/${mark.id}`}
                                    >
                                        <a className="py-2 px-4 text-sm font-bold text-center text-white whiteYoo hover:bg-blue-800 rounded-xl">
                                            See more
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};
export default Map;
