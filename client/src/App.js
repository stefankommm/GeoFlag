import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import * as mapData from './data/places.json';
import './app.css';

export default function App() {
	const [activePark, setActivePark] = React.useState(null);

	return (
		<Map center={[45.420422, -75.692429]} zoom={12}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			{mapData.features.map((place) => (
				<Marker
					key={place.properties.PARK_ID}
					position={[
						place.geometry.coordinates[1],
						place.geometry.coordinates[0],
					]}
				></Marker>
			))}
		</Map>
	);
}
