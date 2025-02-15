import React, { useState } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import Button from '../components/Button';

const index = () => {
    const [prev, setPrev] = useState('');
    const [display, setDisplay] = useState('0');
    const [operator, setOperator] = useState(null);
    const [operand, setOperand] = useState(null);

    const getNum = (value) => {
        if (value === '.' && display.includes('.')) return;
        if (display == '0' && value !== '.') {
            setDisplay(value);
        }
        else {
            setDisplay(display + value);
        }
    }

    const getOperator = (operation) => {
        setOperand(parseFloat(display));
        setOperator(operation);
        setPrev(display);
        setDisplay('0');
    }

    const calculate = () => {
        const num = parseFloat(display);
        switch (operator) {
            case '+':
                setDisplay((operand + num).toString());
                break;

            case '-':
                setDisplay((operand - num).toString());
                break;

            case '*':
                setDisplay((operand * num).toString());
                break;

            case '/':
                setDisplay((operand / num).toString());
                break;

            case '%':
                setDisplay((operand % num).toString());
                break;
        }
        setPrev('');
        setOperand(null);
        setOperator(null);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Text style={styles.head}>Calculator</Text>
                <View style={{ flex: 1, justifyContent: 'flex-end', marginBottom: '15%' }}>
                    <Text style={{ textAlign: 'right', marginHorizontal: 10, fontSize: 30, color: '#cfcfcf' }}>
                        {prev}
                    </Text>
                    <Text style={{ textAlign: 'right', marginHorizontal: 10, fontSize: 30, color: '#ffffff' }}>
                        {display}
                    </Text>
                </View>
            </View>
            <View
                style={{
                    marginBottom: '10%',
                }}
            >
                <View style={styles.row}>
                    <Button title={'C'} color={'#ffffff'} bg={'#ff9500'} onPress={() => setDisplay('0')} />
                    <Button title={'%'} color={'#ffffff'} bg={'#ff9500'} onPress={() => getOperator('%')} />
                    <Button title={'÷'} color={'#ffffff'} bg={'#ff9500'} onPress={() => getOperator('/')} />
                    <Button title={'⌫'} color={'#ffffff'} bg={'#ff9500'} onPress={() => setDisplay(display.slice(0, -1) || '0')} />
                </View>
                <View style={styles.row}>
                    <Button title={'7'} onPress={() => getNum('7')} />
                    <Button title={'8'} onPress={() => getNum('8')} />
                    <Button title={'9'} onPress={() => getNum('9')} />
                    <Button title={'x'} color={'#ffffff'} bg={'#ff9500'} onPress={() => getOperator('*')} />
                </View>
                <View style={styles.row}>
                    <Button title={'4'} onPress={() => getNum('4')} />
                    <Button title={'5'} onPress={() => getNum('5')} />
                    <Button title={'6'} onPress={() => getNum('6')} />
                    <Button title={'-'} color={'#ffffff'} bg={'#ff9500'} onPress={() => getOperator('-')} />
                </View>
                <View style={styles.row}>
                    <Button title={'1'} onPress={() => getNum('1')} />
                    <Button title={'2'} onPress={() => getNum('2')} />
                    <Button title={'3'} onPress={() => getNum('3')} />
                    <Button title={'+'} color={'#ffffff'} bg={'#ff9500'} onPress={() => getOperator('+')} />
                </View>
                <View style={styles.row}>
                    <Button title={'.'} onPress={() => getNum('.')} />
                    <Button title={'0'} onPress={() => getNum('0')} />
                    <Button title={'='} color={'#ffffff'} bg={'#ff9500'} onPress={() => calculate()} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default index;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: '3%',
        justifyContent: 'center',
        backgroundColor: '#26241d',
    },
    head: {
        fontSize: 24,
        margin: 10,
        width: '40%',
        color: '#fff',
        borderBottomWidth: 4,
        borderColor: '#ff9500',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});