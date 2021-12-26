import React from 'react';
import { Text, StyleSheet } from "react-native";
import { VStack, Box, Heading, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome';

export function PriceTile(props) {
	return (
		<Box width="90%" h="28%" bg={props.bgColor} rounded="lg" shadow={3}>
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
			<PriceTile bgColor="#F54634" title="Instant" price="100" description="Almost-guaranteed next block inclusion" />
			<PriceTile bgColor="#005FF9" title="Fast" price="75" description="Useful if not minting NFTs" />
			<PriceTile bgColor="#00C66B" title="Eco" price="25" description="Usually confirmed within an hour" />
		</VStack>
	);
}

function App() {
	return (
		<NativeBaseProvider>
			<Box style={styles.headerBox}>
				<Heading textAlign="center" mb="8" mt="8" style={styles.headingText}>
					Gas Price
				</Heading>
				<Icon name="refresh" size={30} color="#343434" style={styles.refreshButton} />
			</Box>
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
	headerBox: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	headingText: {
		paddingStart: 24,
	},
	refreshButton: {
		alignSelf: 'center',
		paddingEnd: 26,
	},
});

export default App;
