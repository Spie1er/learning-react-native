import { useState } from 'react'
import { StyleSheet, View, FlatList, Button } from 'react-native'
import ShoppingItem from './components/ShoppingItem'
import ShoppingInput from './components/ShoppingInput'
import { StatusBar } from 'expo-status-bar'

export default function App() {
    const [items, setItems] = useState([])
    const [showModal, setShowModal] = useState(false)

    const toggleModal = () => {
        setShowModal(!showModal)
    }

    const addItemHandler = (enteredShoppingItem, setEnteredShoppingItem) => {
        enteredShoppingItem &&
            setItems((currentItems) => [
                {
                    text: enteredShoppingItem,
                    id: Math.random().toString(),
                },
                ...currentItems,
            ])
        setEnteredShoppingItem('')
    }

    const deleteItemHandler = (id) => {
        setItems((currentItems) => {
            return currentItems.filter((item) => item.id !== id)
        })
    }

    return (
        <>
        <StatusBar style='dark'/>
        <View style={styles.appContainer}>
            <Button title="პროდუქტის დამატება" onPress={toggleModal} color='#008080'/>
            {showModal && (
                <ShoppingInput
                    onAddItem={addItemHandler}
                    onCancel={toggleModal}
                    visible={showModal}
                />
            )}
            <View style={styles.itemsContainer}>
                <FlatList
                    data={items}
                    renderItem={(itemData) => (
                        <ShoppingItem
                            text={itemData.item.text}
                            onDeleteItem={deleteItemHandler}
                            id={itemData.item.id}
                        />
                    )}
                    keyExtractor={(item) => item.id}
                    alwaysBounceVertical={false}
                />
            </View>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 60,
        paddingHorizontal: 16,
    },
    itemsContainer: {
        flex: 5,
    },
})
