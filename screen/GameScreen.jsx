import { Text, View, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function GaneScreen() {
    return (
        <View style={styles.screen}>
            <Title>Opponent's Guess</Title>
            {/* <Text>GUESS</Text> */}
            <View>
                <Text>Higher or lower?</Text>
                {/* <Text>+ -</Text> */}
            </View>
            {/* <View>LOG ROUNDS</View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 24,
    },
})