import React from 'react';
import {View, Text, StyleSheet, Image, Animated} from 'react-native';
import books from '../Data/books';
import {Button, Text as TextPaper} from "react-native-paper";
import BookCard from "@/components/BookCard";
import ScrollView = Animated.ScrollView;
import CartProvider from "@/providers/CartProvider";


export default function Books() {
    const handleAddToCart = (book: Book) => {
        console.log(`Added ${book.title} to cart`);

    };


    return (

        <ScrollView>
            <View style={{
                flex: 1,
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: 40,
                gap: 20,
                backgroundColor: "#20161f",
            }}
            >
                <View style={styles.container}>
                    <TextPaper variant="displayLarge" style={{color: "#c59f60", paddingBottom: 20}}>Books Page</TextPaper>
                    {books.map((book) => (
                        <BookCard key={book.id} book={book} onAddToCart={handleAddToCart}/>
                    ))}
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    book: {
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    bookPrice: {
        fontSize: 16,
        color: 'gray',
    },
    bookImage: {
        width: 100,
        height: 150,
        resizeMode: 'contain',
    },
});