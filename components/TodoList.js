import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from '../assets/styles/colors';

export default TodoList = ({ list }) => {
    return (
        <View style={[styles.listContainer, { backgroundColor: list.color }]}>
            <Text style={styles.listTitle} numberOfLines={1}>
            {list.name}
            </Text>



            {list.todos.map((todo, index) => (
            <View key={index} style={styles.todoContainer}>
                <Text style={styles.todoTitle}>
                {todo.completed ? '✅ ' : '❌ '}
                {todo.title}
                </Text>
            </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        paddingVertical: 32,
        paddingHorizontal: 16,
        borderRadius: 6,
        marginHorizontal: 12,
        alignItems: "center",
        width: 200
    },
    listTitle: {
        fontSize: 24,
        fontWeight: "700",
        color: colors.light,
        marginBottom: 18,
        fontFamily: 'Abril-Fatface'
    },
    todoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    todoTitle: {
        color: colors.light,
        fontFamily: 'Lato',
        marginLeft: 8,
    },
});