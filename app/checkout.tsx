import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, ToastAndroid, Alert} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CheckoutPage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        console.log('Name:', name);
        console.log('Address:', address);
        console.log('Phone:', phone);
   /*     Alert.alert('Order Placed', 'Your order has been placed', [
            {text: 'OK', onPress: () => console.log('OK Pressed')}
        ]);
        */
            //montrera une erreur si vu sur navigateur
        ToastAndroid.show('Order Placed', ToastAndroid.SHORT);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Nom :</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <Text style={styles.label}>Adresse :</Text>
            <TextInput
                style={styles.input}
                value={address}
                onChangeText={setAddress}
            />
            <Text style={styles.label}>Téléphone :</Text>
            <TextInput
                style={styles.input}
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Place Order" color={'#db924b'} onPress={handleSubmit} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: "#20161f",
    },
    label: {
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#db924b',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        paddingHorizontal: 10,
        width: '100%',
        color: '#db924b',
    },
});