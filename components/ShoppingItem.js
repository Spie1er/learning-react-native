import { StyleSheet, Text, View, Pressable } from 'react-native'

const ShoppingItem = (props) => {
    return (
        
            <Pressable
                onPress={() => props.onDeleteItem(props.id)}
                style={({ pressed }) => pressed && styles.pressedItem}

            >
                <View style={styles.shoppingItem}>
                <Text style={styles.itemText}>{props.text}</Text>
                </View>
            </Pressable>

    )
}

export default ShoppingItem

const styles = StyleSheet.create({
    shoppingItem: {
        marginTop: 8,
        padding: 16,
        borderRadius: 10,
        backgroundColor: '#008080',
       
    },
    itemText: {
        color: 'white',
        
    },
    pressedItem: {
        opacity: 0.9,
    }
})
