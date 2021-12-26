import React from 'react';
import { Text, StyleSheet } from "react-native";
import { VStack, Box, Heading, NativeBaseProvider } from "native-base";

export function PriceTile(props) {
	return (
		<Box width="90%" h="25%" bg={props.bgColor} rounded="lg" shadow={3}>
			<Text style={styles.titleText}>
				{props.title}
			</Text>
			<Text style={styles.priceText}>
				{props.price}
			</Text>
			<Text style={styles.descText}>
				{props.description}
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
			<PriceTile bgColor="#F54634" title="Instant" price="100" description="Almost-guaranteed next block inclusion" />
			<PriceTile bgColor="#005FF9" title="Fast" price="75" description="Useful if not minting NFTs" />
			<PriceTile bgColor="#00C66B" title="Eco" price="25" description="Usually confirmed within an hour" />
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
	},
	priceText: {
		fontSize: 68,
		fontWeight: "bold",
		color: "white",
		textAlign: "center",
	},
	descText: {
		fontSize: 16,
		fontWeight: "normal",
		color: "white",
		textAlign: "center",
		paddingTop: 12,
	},
});

export default App;
