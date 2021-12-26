import React from 'react';
import { VStack, Center, Heading, NativeBaseProvider } from "native-base";

export function PriceTile(props) {
	return (
		// TODO: Add the title text in top left
		// TODO: Add the price in center of center
		// TODO: Add one line description at the bottom
		<Center width="90%" h="25%" bg={props.bgColor} rounded="lg" shadow={3} />
	);
}

export function GasPrice() {
	return (
		<VStack space={4} alignItems="center">
			<Heading textAlign="center" mb="10" mt="10">
				Gas Price
			</Heading>
			<PriceTile bgColor="#F54634" />
			<PriceTile bgColor="#005FF9"/>
			<PriceTile bgColor="#00C66B"/>
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

export default App;
