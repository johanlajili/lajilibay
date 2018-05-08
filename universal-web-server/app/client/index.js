import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import 'regenerator-runtime/runtime';
import { ComponentDataStore } from 'react-data-fetching-components';
import App from '../shared/components/container/App';

hydrate(
	(
		<ComponentDataStore data={window.__PRELOADED_STATE__}>
			<Router>
				<App />
			</Router>
		</ComponentDataStore>
	),
	document.getElementById('root')
);
