// prettier-ignore
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import "leaflet-defaulticon-compatibility";
import L from "leaflet";
import ReactDOMServer from "react-dom/server";
import CustomIconListing from "@components/CustomIconListing";

interface ListingMapProps {
    coordinates: string;
}

const ListingMap: React.FC<ListingMapProps> = ({ coordinates }) => {
    const icon = L.divIcon({
        className: "custom-icon",
        html: ReactDOMServer.renderToString(<CustomIconListing />),
    });

    return (
        <MapContainer
            center={[
                Number(coordinates.split(",")[0]),
                Number(coordinates.split(",")[1]),
            ]}
            zoom={13}
            scrollWheelZoom={true}
            markerZoomAnimation
            style={{ height: 300 }}
        >
            <TileLayer
                // url="https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ"
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ`}
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />

            <Marker
                position={[
                    Number(coordinates.split(",")[0]),
                    Number(coordinates.split(",")[1]),
                ]}
                // @ts-ignore
                icon={icon}
                draggable={false}
            ></Marker>
        </MapContainer>
    );
};
export default ListingMap;
