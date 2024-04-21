import { useState } from 'react'
import { Button, StyleSheet, TextInput, View, Modal, Image } from 'react-native'

const ShoppingInput = (props) => {
    const [enteredShoppingItem, setEnteredShoppingItem] = useState('')

    const shopInputHandler = (enteredText) => {
        setEnteredShoppingItem(enteredText)
    }

    const addItemHandler = () => {
        props.onAddItem(enteredShoppingItem, setEnteredShoppingItem)
        props.onCancel()
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer}>
                <Image source={require('../assets/images/cart.png')} style={styles.image} />
                <TextInput
                    style={styles.textInput}
                    placeholder="შესაძენი პროდუქტი..."
                    onChangeText={shopInputHandler}
                    value={enteredShoppingItem}
                    placeholderTextColor="white"
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title="დამატება"
                            onPress={addItemHandler}
                            color="#008080"
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title="დახურვა"
                            onPress={props.onCancel}
                            color="#f31282"
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ShoppingInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        textColor: 'white',
        backgroundColor: '#006161',
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
        transform: [{ scaleX: -1 }]
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '100%',
        padding: 8,
        borderRadius: 6,
        color: 'white',
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: '30%',
        marginHorizontal: 8,
    },
})
