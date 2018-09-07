import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection } from './common';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			text: ''
		} 
	}


	render() {
		return (
			<Card>
				<CardSection>
					<TextInput 
						value={this.state.text}
						onChangeText={() => this.setState({ text })}
					/>
				</CardSection>

				<CardSection>
				</CardSection>

				<CardSection>
					<Button>Log In </Button>
				</CardSection>





			</Card>
						);
	}
}

export default LoginForm;
