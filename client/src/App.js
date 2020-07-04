import React, { useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSwr from 'swr';
import './app.css';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App() {
	const [activeFlag, setActiveFlag] = React.useState(null);
	const url = 'http://localhost:5000/api/flags';
	const { data, error } = useSwr(url, { fetcher });
	const flags = data ? data : [];

	return (
		<Map center={[45.420422, -75.692429]} zoom={12}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			{flags.map((flag) => (
				<Marker
					key={flag._id}
					position={[flag.curloc[1], flag.curloc[0]]}
					onclick={() => {
						setActiveFlag(flag);
					}}
				></Marker>
			))}

			{activeFlag && (
				<Popup
					position={[activeFlag.curloc[1], activeFlag.curloc[0]]}
					onClose={() => {
						setActiveFlag(null);
					}}
				>
					<div>
						<h2>{activeFlag.name}</h2>
						<p>{activeFlag.name}</p>
					</div>
					🇸🇰🇸🇰🇸🇰
				</Popup>
			)}
		</Map>
	);
}
