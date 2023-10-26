import React, { useState, useEffect } from "react"
import "react-native-gesture-handler";
import "react-native-safe-area-context"
import * as Font from 'expo-font';
import MainNavigation from "./src/routes/MainNavigation";



export default function App() {
	const [fontsLoaded, setFontsLoaded] = useState(false)

	const loadFonts = async () => {
		await Font.loadAsync({
			"lato-light": require("./assets/fonts/Lato-Light.ttf"),
			"lato-regular": require("./assets/fonts/Lato-Regular.ttf"),
			"lato-bold": require("./assets/fonts/Lato-Bold.ttf")
		})
		setFontsLoaded(true)
	}

	useEffect(() => {
		loadFonts()
	}, [])
	return (
		fontsLoaded && (<MainNavigation />)
	);
}