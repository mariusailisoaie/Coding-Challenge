import React from "react"
import { View, Text, StyleSheet } from "react-native"

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Profile</Text>
    </View>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
})