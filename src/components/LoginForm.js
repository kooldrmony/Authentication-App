import React from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends React.Component {
	constructor() {
		super();
		this.state = {
			email: '',
			password: '',
			error: '',
			loading: false
		} 

		this.onButtonPress = this.onButtonPress.bind(this)
		this.onSuccesfullLogin = this.onSuccesfullLogin.bind(this)
	}



	onButtonPress() {

		const { email, password } = this.state;

		this.setState({ error: '', loading: true });

		firebase.auth().signInWithEmailAndPassword(email, password)
			.then(this.onSuccesfullLogin)
			.catch(() => {
				firebase.auth().createUserWithEmailAndPassword(email, password)
					.then(this.onSuccesfullLogin)
					.catch(this.onFailedLogin)
			});

	}

	onSuccesfullLogin() {

		this.setState({
			email: '',
			password: '',
			loading: false,
			error: ''
		})
	}

	onFailedLogin(){
		this.setState({ error: 'Authentication Failed', loading: false })
	}

	renderButton() {
		if (this.state.loading) {
			return <Spinner />
		}

		return (
			<Button onPress={this.onButtonPress}>
				Log In 
			</Button>
		);
	};


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
					{this.renderButton()}
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
