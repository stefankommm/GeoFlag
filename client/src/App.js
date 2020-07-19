import React, { Fragment, useEffect } from 'react';
import './leaflet.css';
import FlagMap from './../../client/src/Components/FlagMap';
import Drawer from './Components/Drawer';
import AboutUs from './Components/AboutUs';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export default function App() {
	return (
		<div>
			<Router>
				<Fragment>
					<Drawer>
						<Switch>
							<Route exact path='/' component={FlagMap}></Route>
							<Route path='/map' component={FlagMap}></Route>
							<Route exact path='/addMap' component={FlagMap}></Route>
							<Route path='/aboutUs' component={AboutUs}></Route>
						</Switch>
					</Drawer>
				</Fragment>
			</Router>
		</div>
	);
}
