import React, { useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import useSwr from 'swr';
import './app.css';
import Axios from 'axios';

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export default function App() {
	const [activeFlag, setActiveFlag] = React.useState(null);
	const [fetchedFlags, setFetchedFlags] = React.useState([]);

	const url = 'http://localhost:5000/api/flags';
	//const { data, error } = useSwr(url, { fetcher });
	//const flags = data ? data : [];

	useEffect(async () => {
		const res = await Axios('http://localhost:5000/api/flags');
		console.log(res);
		setFetchedFlags(res.data);
	}, []);

	return (
		<Map center={[48.987427, 19.090228]} zoom={7}>
			<TileLayer
				url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>

			{fetchedFlags.map((flag) => (
				<Marker
					key={flag._id}
					position={[flag.curloc.split(', ')[0], flag.curloc.split(', ')[1]]}
					onclick={() => {
						setActiveFlag(flag);
					}}
				></Marker>
			))}

			{activeFlag && (
				<Popup
					position={[
						activeFlag.curloc.split(', ')[0],
						activeFlag.curloc.split(', ')[1],
					]}
					onClose={() => {
						setActiveFlag(null);
					}}
				>
					<div>
						<h2>{activeFlag.name}</h2>
						<p>{activeFlag.name}</p>
						<p>MADE BY: {activeFlag.user}</p>
					</div>
				</Popup>
			)}
		</Map>
	);
}
