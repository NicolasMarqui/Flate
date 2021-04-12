import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {}

const Map: React.FC<MapProps> = ({}) => {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                // url="https://api.mapbox.com/styles/v1/mapbox/dark-v9/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ"
                url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidnhzdGFyayIsImEiOiJjazkzZjkxYXcwMW9iM2htc3JnbTgxam90In0.vTwF4k1IZMYmEcxDLbo5sQ`}
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
        </MapContainer>
    );
};
export default Map;
