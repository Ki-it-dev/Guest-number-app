import { View, StyleSheet } from "react-native";
import { ColorsPrimary800 } from "../../constants/Colors";

export default function Card({ children }) {
    return (
        <>
            <View style={styles.card}>
                {children}
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 36,
        marginHorizontal: 24,
        backgroundColor: ColorsPrimary800,
        borderRadius: 8,
        elevation: 4,//Android box shadows
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
    },
});