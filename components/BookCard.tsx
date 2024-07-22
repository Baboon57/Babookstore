import React from 'react';
import { View, StyleSheet, Image, Pressable } from 'react-native';
import {Button, Text} from 'react-native-paper';
import useCart from "@/hooks/useCart";
import {images} from "@/Data/images";


export interface Book {
    id: number;
    title: string;
    price: number;
    image: string;
}

export interface BookCardProps {
    book: Book;
    onAddToCart: (book: Book) => void;
    onRemoveFromCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book}) => {
    const {addToCart, cart} = useCart()


    return (
        <View style={styles.card}>
            <Image source={images[book.image]} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookPrice}>Price: ${book.price}</Text>

                <Button style={styles.AddToCartButton} icon="cart" onPress={() => {
                    addToCart(book)
                }}>
                    <Text variant="bodyLarge">add to Cart </Text>
                </Button>

        </View>
    );
};

export default BookCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'white',
        padding: 16,
        marginBottom: 16,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    bookImage: {
        width: 300,
        maxWidth: 300,
        height: 500,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        maxWidth: 300, // fix the harry potter bookcard being too wide because of its title
        color: 'black',
    },
    bookPrice: {
        fontSize: 16,
        color: 'black',
    },
    AddToCartButton: {
        color: '#000000',
        backgroundColor: '#db924b',
        fontWeight: 'bold',

    }
});