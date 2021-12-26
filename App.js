import React from 'react';
import { Text, StyleSheet } from "react-native";
import { VStack, Box, Heading, NativeBaseProvider } from "native-base";

export function PriceTile(props) {
	return (
		// TODO: Add the price in center of center
		// TODO: Add one line description at the bottom
		<Box width="90%" h="25%" bg={props.bgColor} rounded="lg" shadow={3}>
			<Text style={styles.titleText}>
				{props.title}
			</Text>
		</Box>
	);
}

export function GasPrice() {
	return (
		<VStack space={4} alignItems="center">
			<Heading textAlign="center" mb="10" mt="10">
				Gas Price
			</Heading>
			<PriceTile bgColor="#F54634" title="Instant"/>
			<PriceTile bgColor="#005FF9" title="Fast"/>
			<PriceTile bgColor="#00C66B" title="Eco"/>
		</VStack>
	);
}

function App() {
	return (
		<NativeBaseProvider>
			<GasPrice />
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	titleText: {
	  fontSize: 26,
	  fontWeight: "normal",
	  color: "white",
	  paddingLeft: 8,
	  paddingTop: 4,
	}
  });

export default App;
