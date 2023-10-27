import { StyleSheet } from "react-native";


const colors = {
  orange: "#FF8300",
  white: "#ffffff",
  black: "#000000",
  smoke: "#F5F5F5",
  blue: "#3b82f6"
}

const styles = StyleSheet.create({

  basic: {
    fontFamily: "lato-regular"
  },
  headerText: {
    color: colors.blue,
    fontSize: 35,
    fontFamily: "lato-bold"
  }
})


export { styles, colors }