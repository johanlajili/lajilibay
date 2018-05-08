import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import fetch from 'cross-fetch';
import regeneratorRuntime from 'regenerator-runtime';


export default class CreateItemToSell extends Component {
	constructor() {
		super();
		this.state = {
			name: '',
			description: '',
			categories: [],
			originalPrice: 0
		};

		this.onChangeName = this.onChangeName.bind(this);
		this.onChangeDescription = this.onChangeDescription.bind(this);
		this.onChangeCategories = this.onChangeCategories.bind(this);
		this.onChangeOriginalPrice = this.onChangeOriginalPrice.bind(this);
		this.onSubmit = this.onSubmit.bind(this);

	}

	onChangeName(event){
		this.setState({
			name: event.target.value,
		});
	}

	onChangeDescription(event){
		this.setState({
			description: event.target.value,
		});
	}

	onChangeCategories(event){
		this.setState({
			categories: event.target.value.split(',')
		});
	}

	onChangeOriginalPrice(event){
		this.setState({
			originalPrice: Number(event.target.value),
		});
	}

	async onSubmit(event){
		event.preventDefault();
		if (this.state.name && this.state.description){
			try {
				await fetch('http://localhost:3000/itemtosell/create', {
					method: 'POST',
					body: JSON.stringify(this.state),
					headers: {
						'Content-Type': 'application/json'
					},
				});
				this.setState({
					name: '',
					description: '',
					categories: [],
					originalPrice: 0,
				});
			} catch (e) {

			}
			
		}
	}

	render(){
		return (
			<section className='section'>
				<form  onSubmit={this.onSubmit}>
					<div className="field">
						<label className="label">Name</label>
						<div className="control">
							<input className="input" type="text" value={this.state.name} onChange={this.onChangeName} placeholder="Nintendo 64"/>
						</div>
					</div> 
					<div className="field">
						<label className="label">Description</label>
						<div className="control">
							<textarea className="textarea" value={this.state.description} onChange={this.onChangeDescription} placeholder="It's a great console"></textarea>
						</div>
					</div>
					<div className="field">
						<label className="label">Categories</label>
						<div className="control">
							<input className="input" value={this.state.categories.join(',')} onChange={this.onChangeCategories} type="text" placeholder="gaming, nerd"/>
						</div>
					</div>
					<div className="field">
						<label className="label">Original Price</label>
						<div className="control">
							<input className="input" value={this.state.originalPrice} onChange={this.onChangeOriginalPrice} type="number" placeholder="42"/>
						</div>
					</div>
					<div className="field is-grouped">
						<div className="control">
							<input type="submit" className="button is-link" value='submit'></input>
						</div>
						<div className="control">
							<Link to='/admin' className="button is-text">Cancel</Link>
						</div>
					</div>
				</form>
			</section>
		);
	}

	static propTypes = {
		data: PropTypes.string
	}
}