import React from "react"
import { View, Text, Button, Image, StyleSheet } from "react-native"
import { useNavigation } from "@react-navigation/native"

const SwipeablePanel = ({ parkingDetails }) => {
	const navigation = useNavigation();

	return (
		<View style={styles.container}>
			<Text style={styles.title}> {parkingDetails.title} </Text>

			<Image
				style={styles.image}
				source={{
					uri:
						`${parkingDetails.imageUrl}`
				}}
			/>
			<Button
				onPress={() => navigation.navigate("ParkingDetailsScreen", { ...parkingDetails })}
				title="Parking Details"
				color="#1f64ad"
			/>
		</View>
	)
}

export default SwipeablePanel

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 18,
		marginTop: 30,
	},
	image: {
		width: 200,
		height: 200,
		margin: 50,
	},
})