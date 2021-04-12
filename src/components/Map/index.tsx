// prettier-ignore
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import { Estates } from ".prisma/client";
import PropertyCard from "@components/PropertyCard";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import CustomIcon from "@components/CustomIcon";

interface MapProps {
    markers: Estates[];
}

const Map: React.FC<MapProps> = ({ markers }) => {
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
                        <CustomIcon price={mark.price} />
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
                            <PropertyCard estate={mark} />
                        </Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};
export default Map;
