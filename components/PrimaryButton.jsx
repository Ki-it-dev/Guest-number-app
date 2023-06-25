import { View, Text, Pressable, StyleSheet } from "react-native";

export default function PrimaryButton({ children }) {

    const pressHandler = () => {
        console.log('test');
    }

    return (
        <View style={styles.buttonOuterContainer}>
            <Pressable
                style={({ pressed }) => pressed ?
                    [styles.buttonInnerContainer, styles.pressed] :
                    styles.buttonInnerContainer}
                onPress={pressHandler}
                android_ripple={{ color: '#640233' }}
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
        backgroundColor: '#72063c',
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