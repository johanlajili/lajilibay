import styled from 'styled-components';
import React from 'react';
import PropTypes from 'prop-types';

const CardElement = styled.div`
	min-width: 400px;
	flex: 1;
	margin: 40px;
`;

export default function Card(props){
	return (
		<CardElement className='box'>
			<article className='media'>
				<div className='media-left'>
					<img className='image is-128x128' src="http://placekitten.com/256/256"/>
				</div>
				<div className='media-content'>
					<div className='content'>
						<p>
							<strong>{props.name}</strong>
							<br/>
							{props.description}
						</p>
					</div>
				</div>
			</article>
		</CardElement>);
}

Card.propTypes = {
	name: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
};