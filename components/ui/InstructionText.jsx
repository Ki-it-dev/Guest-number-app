import { StyleSheet, Text } from "react-native";

export default function InstructionText({ children, style }) {
    return (
        <Text style={[styles.instructionText, style]}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    instructionText: {
        color: '#fff',
        fontSize: 24,
    },
});