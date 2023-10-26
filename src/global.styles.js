import { StyleSheet } from "react-native";


const colors = {
  orange: "#FF8300",
  white: "#ffffff",
  black: "#000000",
}

const styles = StyleSheet.create({

  basic: {
    fontFamily: "lato-regular"
  },
  headerText: {
    color: colors.orange,
    fontSize: 35,
    fontFamily: "lato-bold"
  }
})


export { styles, colors }