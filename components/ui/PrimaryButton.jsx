import { View, Text, Pressable, StyleSheet } from "react-native";
import { ColorsPrimary500 } from "../../constants/Colors";

export default function PrimaryButton({ children, onPress }) {
    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ?
                    [styles.buttonInnerContainer, styles.pressed] :
                    styles.buttonInnerContainer}
                onPress={onPress}
                android_ripple={{ color: ColorsPrimary500 }}
            >
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        backgroundColor: ColorsPrimary500,
        paddingHorizontal: 16,
        paddingVertical: 8,
        elevation: 2,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
    },
    pressed: {
        opacity: 0.75,
    }
})