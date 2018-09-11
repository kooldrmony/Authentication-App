import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: ''
		} 

		this.onButtonPress = this.onButtonPress.bind(this)
	}

	onButtonPress() {

		const { email, password } = this.state;

		this.setState({ error: ''});

		firebase.auth().signInWithEmailAndPassword(email, password)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.catch(() => {
						this.setState({ error: "Authentication Failed" });
					});
			});

	}


	render() {

		return (		

			<Card>

				<CardSection>			
					<Input
						secureTextEntry
						placeholder="user@gmail.com"
						label="Email" 
						value={this.state.email}
						onChangeText={email => this.setState({ email })}
					/>
				</CardSection>

				<CardSection>			
					<Input
						secureTextEntry
						placeholder="password"
						label="Password" 
						value={this.state.password}
						onChangeText={password => this.setState({ password })}
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
				)
			};
		}



const styles = {

	textStyle: {
		fontSize: 30,
		alignSelf: 'center',
		color: 'red'
	}
};

export default LoginForm;
