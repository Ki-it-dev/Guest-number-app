import { StyleSheet, Text } from "react-native";

export default function InstructionText({ children }) {
    return (
        <Text style={styles.instructionText}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: '#fff',
        fontSize: 24,
    },
});