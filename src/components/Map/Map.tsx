import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import { Place } from 'shared/types/Place';

const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location: { latitude, longitude } }) => (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        />
      ))}
    </MapContainer>
  );
};

type MapProps = {
  places?: Place[];
};

export default Map;
