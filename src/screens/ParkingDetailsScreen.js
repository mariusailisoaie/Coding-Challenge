import React from "react"
import { Button, View, Text, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const ParkingDetailsScreen = ({ route }) => {
	const { title, description } = route.params
	const navigation = useNavigation()

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.description}>{description}</Text>

			<Button
				onPress={() => navigation.goBack()}
				title="Back"
				color="#1f64ad"
			/>
		</View>
	)
}

export default ParkingDetailsScreen

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 18,
	},
	description: {
		fontSize: 18,
		marginBottom: 30,
		padding: 40,
		textAlign: "center",
	},
})