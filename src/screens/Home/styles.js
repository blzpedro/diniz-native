import { ScaledSheet } from "react-native-size-matters";
import { Dimensions } from "react-native";

var width = Dimensions.get('window').width
var height = Dimensions.get('window').height

export const Styles = ScaledSheet.create({
    safeAreaView: {
      alignItems: 'center',
      backgroundColor: 'white',
      width: width,
      height: height,
    },
    welcomeText: {
      fontSize: '24@s',
      fontWeight: 'bold',
    },
    featuresText: {
      fontSize: '20@s',
    },
    text: {
      fontSize: '16@s'
    },
    button: {
      width: '120@s',
      justifyContent: 'center',
      marginBottom: 10 
    },
    textButton: {
      color: 'white', 
    },
    textInput: {
      width: '250@s',
      backgroundColor: '#ddd',
      marginBottom: 10,
      borderColor: 'black',
      borderWidth: 2
    },
    logo: {
      width: '200@s', 
      height: '200@vs',
    },
});