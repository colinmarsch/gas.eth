import React from 'react';
import { VStack, Center, Heading, NativeBaseProvider } from "native-base"

export function GasPrice() {
	return (
		<VStack space={4} alignItems="center">
			<Heading textAlign="center" mb="10" mt="10">
				Gas Price
			</Heading>
			<Center w="72" h="40" bg="primary.500" rounded="lg" shadow={3} />
			<Center w="72" h="40" bg="secondary.500" rounded="lg" shadow={3} />
			<Center w="72" h="40" bg="emerald.500" rounded="lg" shadow={3} />
		</VStack>
	)
}

function App() {
	return (
		<NativeBaseProvider>
			<GasPrice />
		</NativeBaseProvider>
	);
}

export default App;
