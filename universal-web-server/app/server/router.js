import { renderToString } from 'react-dom/server';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import {
	ComponentDataStore,
	getAllInitialData
} from 'react-data-fetching-components';
import regeneratorRuntime from 'regenerator-runtime';
import renderFullPage from './renderFullPage';
import { ServerStyleSheet } from 'styled-components'; 
import App from '../shared/components/container/App';

export default async function router(req, res) {
	const sheet = new ServerStyleSheet();
	const context = {};
	const app = (
		<StaticRouter context={context} location={req.url} >
			<App/>
		</StaticRouter>
	);
	const data = await getAllInitialData(sheet.collectStyles(app));
	const styles = sheet.getStyleTags();

	const html = renderToString(
		<ComponentDataStore data={data}>{app}</ComponentDataStore>
	);
	res.status(200).send(renderFullPage(html, data, styles));
}
