import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Pressable, Image } from 'react-native';

export default function App() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		alert("Your email is " + email + " and your password is " + password);
	};

	return (
		<View style={styles.container}>
			<Image source={{ uri: 'https://sajilopay.com.np/sajilo.png' }} style={{ alignSelf:'center', width: 250, height: 200 }} resizeMode="contain"/>
			<Text style={styles.text}>
				Email : 
			</Text>
			<TextInput
				style={styles.textInput}
				onChangeText={email => setEmail(email)}
				value={email}
				placeholder="Enter email address"
			/>
			<Text style={styles.text}>
				Password : 
			</Text>
			<TextInput
				style={styles.textInput}
				onChangeText={password => setPassword(password)}
				value={password}
				placeholder="Enter password"
			/>
			<Pressable style={styles.button} onPress={handleSubmit}>
				<Text style={styles.buttonText}>Sign In</Text>
			</Pressable>
			<Text style={{ alignSelf: 'center', color: 'black', fontSize: 14 }}>
				Don't have an account? Sign up here
			</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginHorizontal: 20,
		marginVertical: 70
	},
	textInput: {
		padding:10,
		fontSize: 16,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 20,
		borderRadius: 10
	},
	text: {
		color: 'black',
		fontSize: 16,
		marginBottom: 10,
		fontWeight: 'bold'
	},
	button: {
		borderRadius: 10,
		backgroundColor: 'blue',
		padding: 15,
		marginBottom: 15
	},
	buttonText: {
		color: 'white',
		fontSize: 16,
		fontWeight: 'bold',
		textAlign: 'center'
	}
});
