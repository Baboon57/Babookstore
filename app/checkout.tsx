import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, ToastAndroid, Alert, Pressable, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {IconButton, List} from "react-native-paper";
import useCart from "@/hooks/useCart";




export default function CheckoutPage() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const {cart} = useCart();
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
        <ScrollView>
        <View style={styles.container}>
            <View style={{
                flexDirection: 'column',
                alignItems: 'center',
                borderRadius: 8,
                borderWidth: 1,
                borderColor: '#db924b',
                padding: 10,
                maxWidth: '90vw'
            }}>

                {
                    cart.map(({price, title, id}) => {
                        return (

                            <Pressable key={id}
                                style={{margin: 5, backgroundColor: '#20161f', borderColor: '#db924b', borderWidth: 1,borderRadius: 5, width: 250, maxWidth: 300}}>

                                <List.Item
                                    title={<Text style={{ color: '#db924b' }}>{title}</Text>}
                                    description={<Text style={{ color: '#db924b' }}>{price} $</Text>}
                                >
                                </List.Item>

                            </Pressable>

                        )
                    })
                }

                <Text style={[{fontSize: 16}, {fontWeight: 'bold'}, {color: '#db924b'}, {padding: 30}]}> {cart.reduce((a, b) => b["price"] + a, 0)} USD</Text>

            </View>
            <Text style={[styles.label, {paddingTop: 50} ]}>Nom :</Text>
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
                style={[styles.input, {marginBottom : 30}]}
                value={phone}
                onChangeText={setPhone}
            />
            <Button title="Place Order" color={'#db924b'} onPress={handleSubmit} />
        </View>
        </ScrollView>
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