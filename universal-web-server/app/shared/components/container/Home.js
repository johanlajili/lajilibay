import React, { Component } from 'react';
import styled from 'styled-components';
import fetch from 'cross-fetch';
import regeneratorRuntime from 'regenerator-runtime';
import { withInitialData } from 'react-data-fetching-components';
import PropTypes from 'prop-types';
import Card from '../presentational/Card';

const ObjectToSellContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;



@withInitialData
export default class Home extends Component {
	constructor() {
		super();
		this.state = {
			listOfGames: ['empty']
		};
	}

	static async getInitialData() {
		const res = await fetch('http://localhost:3000/itemtosells');
		const json = await res.json();
		return json;
	}

	render(){
		// console.log('actual render', this.state.listOfGames);
		const articles = this.props.data.map((data)=> {
			return <Card className="box" {...data} key={data.name}></Card>;
		});

		return <ObjectToSellContainer> {articles} </ObjectToSellContainer>;
	}

	static propTypes = {
		data: PropTypes.string
	}
}