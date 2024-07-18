import React from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';

interface Book {
    id: number;
    title: string;
    price: number;
    image: string;
}

interface BookCardProps {
    book: Book;
    onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
    return (
        <View style={styles.card}>
            <Image source={{ uri: book.image }} style={styles.bookImage} />
            <Text style={styles.bookTitle}>{book.title}</Text>
            <Text style={styles.bookPrice}>Price: ${book.price}</Text>
            <Button title="Add to Cart" onPress={() => onAddToCart(book)} />
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
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 2,
    },
    bookImage: {
        width: 300,
        height: 500,
        resizeMode: 'contain',
        marginBottom: 16,
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color : 'black',
    },
    bookPrice: {
        fontSize: 16,
        color: 'black',
    },
});