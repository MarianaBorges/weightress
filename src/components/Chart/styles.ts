import { StyleSheet, Dimensions } from "react-native";
import colors  from '../../styles/colors';

export const styles = StyleSheet.create({
   chart:{
      marginLeft: 15,
      borderRadius: 10,
   },
});

export const windowWidth = Dimensions.get("window").width;

export const chartConfig = {
   backgroundColor: colors.colors.primaryColor,
   backgroundGradientFrom: colors.colors.primaryColor,
   backgroundGradientTo: '#7FFFD4',
   decimalPlaces: 2,
   color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
   labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
   style: {
     borderRadius: 16,
   },
   propsForDots: {
     r: '6',
     strokeWidth: '2',
     stroke: '#ffa726',
   },
 };
