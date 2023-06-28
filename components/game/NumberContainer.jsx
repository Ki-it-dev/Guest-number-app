import { View, Text, StyleSheet } from "react-native";
import { ColorsYellow } from "../../constants/Colors";

export default function NumberContainer({ children }) {
    return (
        <View style={styles.container}>
            <Text style={styles.numberText}>
                {children}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 4,
        // borderColor: ColorsYellow,
        padding: 24,
        margin: 24,
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    numberText: {
        fontSize: 36,
        fontWeight: "bold",
    },
})