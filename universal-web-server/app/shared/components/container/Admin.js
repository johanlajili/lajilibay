import React, { Component } from 'react';
import styled from 'styled-components';
import fetch from 'cross-fetch';
import regeneratorRuntime from 'regenerator-runtime';
import { withInitialData } from 'react-data-fetching-components';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';
import { Link } from 'react-router-dom';

@withInitialData
export default class Home extends Component {
	constructor() {
		super();
	}

	static async getInitialData() {
		const res = await fetch('http://localhost:3000/itemtosells');
		const json = await res.json();
		return json;
	}

	render(){
		return (
			<div>
				this is the admin page <Link className='button' to="/admin/create">Create new Item</Link>
			</div>
		);
	}

	static propTypes = {
		data: PropTypes.string
	}
}