import React from 'react';
import { Text, StyleSheet } from "react-native";
import { VStack, Box, Heading, NativeBaseProvider } from "native-base";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { format } from "date-fns";
import Toast from 'react-native-toast-message';

export function PriceTile(props) {
	return (
		<Box width="90%" h="27%" bg={props.bgColor} rounded="lg" shadow={3}>
			<Text style={styles.titleText}>
				{props.title}
			</Text>
			<Box style={styles.priceBox}>
				<Text style={styles.priceText}>
					{props.price}
				</Text>
				<Icon name={props.iconName} size={30} color="white" style={styles.arrowIcon} />
			</Box>
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
			},
			lastUpdatedTime: "Never",
			instantIcon: "minus",
			fastIcon: "minus",
			ecoIcon: "minus",
		}

		this.fetch()
	}

	computeIconDelta(prev, curr) {
		if (Math.ceil(curr) > Math.ceil(prev)) {
			return "arrow-up";
		} else if (Math.ceil(curr) < Math.ceil(prev)) {
			return "arrow-down";
		} else {
			return "minus";
		}
	}

	fetch() {
		var context = this;

		fetch('https://api.gasprice.io/v1/estimates')
			.then((response) => response.json())
			.then((json) => {
				var prevInstant = this.state.result.instant.feeCap;
				var prevFast = this.state.result.fast.feeCap;
				var prevEco = this.state.result.eco.feeCap;

				var newInstant = json.result.instant.feeCap;
				var newFast = json.result.fast.feeCap;
				var newEco = json.result.eco.feeCap;

				var instantIcon = this.computeIconDelta(prevInstant, newInstant);
				var fastIcon = this.computeIconDelta(prevFast, newFast);
				var ecoIcon = this.computeIconDelta(prevEco, newEco);

				context.setState({
					result: json.result,
					lastUpdatedTime: format(new Date(), "MMMM do, yyyy h:mma"),
					instantIcon: instantIcon,
					fastIcon: fastIcon,
					ecoIcon: ecoIcon,
				});
			})
			.catch((error) => {
				Toast.show({
					type: 'error',
					text1: 'Refresh failed. Please try again.',
				});
				console.error(error);
			});
	}

	render() {
		return (
			<>
				<NativeBaseProvider>
					<Box style={styles.headerBox}>
						<Heading textAlign="center" mb="8" mt="8" style={styles.headingText}>
							Gas Price
						</Heading>
						<Icon name="sync-alt" size={30} color="#343434" style={styles.refreshButton} onPress={this.fetch.bind(this)} />
					</Box>
					<VStack space={4} alignItems="center">
						<PriceTile bgColor="#F54634" title="Instant" price={Math.ceil(this.state.result.instant.feeCap)} iconName={this.state.instantIcon} description="Almost-guaranteed next block inclusion" />
						<PriceTile bgColor="#005FF9" title="Fast" price={Math.ceil(this.state.result.fast.feeCap)} iconName={this.state.fastIcon} description="Useful if not minting NFTs" />
						<PriceTile bgColor="#00C66B" title="Eco" price={Math.ceil(this.state.result.eco.feeCap)} iconName={this.state.ecoIcon} description="Usually confirmed within an hour" />
						<Text style={styles.lastUpdatedText}>Last updated: {this.state.lastUpdatedTime}</Text>
					</VStack>
				</NativeBaseProvider>
				<Toast />
			</>
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
	lastUpdatedText: {
		fontSize: 16,
	},
	arrowIcon: {
		alignSelf: 'center',
		paddingStart: 8,
	},
	priceBox: {
		flexDirection: 'row',
		justifyContent: 'center',
	},
});
