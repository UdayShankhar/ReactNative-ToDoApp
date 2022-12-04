import { Button, Image, StyleSheet, Text, TextInput, View, ScrollView, FlatList, Modal } from 'react-native';
import { useState } from 'react';

function GoalInput(props) {

    const [enteredGoalText, setEnteredGoalText] = useState('')
    const [courseGoals, setCourseGoals] = useState([])

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal
            visible={props.visible}
            animationType="slide">
            <View
                style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.jpg')} />
                <TextInput
                    style={styles.textInput}
                    placeholder='Your Goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText} />
                <View style={styles.buttonContainer} >
                    <View style={styles.button} >
                        <Button
                            color='#5e0acc'
                            title='Add Goal'
                            onPress={addGoalHandler} />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            onPress={props.hide}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311beb'
    },
    textInput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor : '#e4d0ff',
        width: '100%',
        padding: 16,
        borderRadius: 10,
        color : '#120438'
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    },
    image: {
        width: 80,
        height: 80,
    }
})