import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: ''
		} 
	}


	render() {
		return (
			<Card>
				<CardSection>
					<Input
						placeholder="user@gmail.com"
						label="Email" 
						value={this.state.email}
						onChangeText={() => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>
						<Input
						secureTextEntry
						placeholder="password"
						label="Password" 
						value={this.state.password}
						onChangeText={() => this.setState({ password })}
						/>
				</CardSection>

				<CardSection>
					<Button>Log In </Button>
				</CardSection>





			</Card>
						);
	}
}

export default LoginForm;
