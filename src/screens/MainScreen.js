import React, { useState } from "react"
import MapView, { Marker } from "react-native-maps"
import { View, Dimensions, StyleSheet } from "react-native"
import { SwipeablePanel } from "rn-swipeable-panel"

import PanelContent from "../components/SwipeablePanel"

import { mockData } from "../../mockData"

const MainScreen = () => {
  const [panelProps, setPanelProps] = useState({
    fullWidth: true,
    openLarge: true,
    showCloseButton: true,
    onClose: () => closePanel(),
    onPressCloseButton: () => closePanel(),
    title: "",
    imageUrl: "",
    description: "",
  })

  const [isPanelActive, setIsPanelActive] = useState(false)

  const openPanel = () => {
    setIsPanelActive(true)
  }

  const closePanel = () => {
    setIsPanelActive(false)
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.mapStyle}>
        {
          mockData.map(({ id, title, imageUrl, latitude, longitude, description }) =>
            <Marker
              key={id}
              coordinate={{
                latitude: latitude,
                longitude: longitude,
              }}
              onPress={() => {
                setPanelProps({ ...panelProps, title, imageUrl, description })
                openPanel()
              }}
            />
          )
        }
      </MapView>

      <SwipeablePanel {...panelProps} isActive={isPanelActive}>
        <PanelContent parkingDetails={{ title: panelProps.title, imageUrl: panelProps.imageUrl, description: panelProps.description }} />
      </SwipeablePanel>
    </View>
  );
}

export default MainScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 95,
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
})