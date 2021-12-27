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

export default class GasPrice extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			result: {
				instant: {
					feeCap: 100.01,
					maxPriorityFee: 100.01
				},
				fast: {
					feeCap: 100.01,
					maxPriorityFee: 100.01
				},
				eco: {
					feeCap: 100.01,
					maxPriorityFee: 100.01
				},
				baseFee: 100.01,
				ethPrice: 4000.01
			}
		}
	}

	fetch() {
		var context = this;

		fetch('https://api.gasprice.io/v1/estimates')
			.then((response) => response.json())
			.then((json) => {
				context.setState({
					result: json.result
				});
			})
			.catch((error) => {
				console.error(error);
			});
	}

	render() {
		return (
			<NativeBaseProvider>
				<Box style={styles.headerBox}>
					<Heading textAlign="center" mb="8" mt="8" style={styles.headingText}>
						Gas Price
					</Heading>
					<Icon name="refresh" size={30} color="#343434" style={styles.refreshButton} onPress={this.fetch.bind(this)} />
				</Box>
				<VStack space={4} alignItems="center">
					<PriceTile bgColor="#F54634" title="Instant" price={Math.ceil(this.state.result.instant.feeCap)} description="Almost-guaranteed next block inclusion" />
					<PriceTile bgColor="#005FF9" title="Fast" price={Math.ceil(this.state.result.fast.feeCap)} description="Useful if not minting NFTs" />
					<PriceTile bgColor="#00C66B" title="Eco" price={Math.ceil(this.state.result.eco.feeCap)} description="Usually confirmed within an hour" />
				</VStack>
			</NativeBaseProvider>
		);
	}
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
