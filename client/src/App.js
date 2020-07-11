import React, { useEffect } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import Axios from 'axios';
import './leaflet.css';
import FlagMap from './../../client/src/Components/FlagMap';
import TopBar from './Components/TopBar';

export default function App() {
	return (
		<div>
			<TopBar />
			<FlagMap></FlagMap>
		</div>
	);
}
