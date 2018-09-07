import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { Button, Card, CardSection, Input } from './common';
import firebase from 'firebase';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: ''
		} 

		onButtonPress = onButtonPress.bind(this)
	}

	onButtonPress() {

		const { email, password } = this.state;

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ error: "Authentication Failed"});
					});
			})

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

				<Text style={styles.textStyle}>
					{this.state.error}
				</Text>

				<CardSection>
					<Button onPress={this.onButtonPress}>
						Log In 
					</Button>
				</CardSection>





			</Card>
						);
	}
}


const styles= {
	textStyle: {
		fontSize: 20,
		alignItems: 'center',
		color: 'red'
	}
}
export default LoginForm;
