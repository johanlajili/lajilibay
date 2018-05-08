import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';

import Home from './Home';
import Admin from './Admin';
import CreateItemToSell from './CreateItemToSell';

class App extends Component {
	constructor(){
		super();
		this.state = {};
	}
	componentWillMount(){
		const { state } = this.props;
		this.setState(state);
	}

	render() {
		return (
			<div>
				<div className="hero">
					<div className="hero-body">
						<div className='container'>
							<h1 className='title'> Johan sells his stuff</h1>
							<h2 className='subtitle'> I'm moving to a smaller place, and it's time to do some spring cleaning! From geeky stuff like comic books to furniture. And as an added bonus, 30% of the sales will go to xxxx charity. </h2>
						</div>
					</div>
				</div>
				<div className='container'>
					<Switch>
						<Route path="/" exact component={(props) => (<Home games={this.state.games} {...props} />)}/>
						<Route path="/admin" exact component={Admin} />
						<Route path="/admin/create" exact component={CreateItemToSell} />
						{/*<Route path="/pokemon" exact render={() => (<Redirect to="/pokemon/ability/telepathy" />)} />
						<Route path="/pokemon/ability/:ability" render={location => (<List pokemon={pokemon.list} location={location} />)} />*/}
					</Switch>
				</div>
			</div>
		);
	}
}

export default App;