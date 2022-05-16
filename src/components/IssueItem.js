import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const IssueItem = ({ item }) => {
    const { title, comments, number, state, user } = item
    return (
        <TouchableOpacity style={styles.container}>
            <Image style={{ width: 20, height: 20, marginVertical: 10 }} source={state == 'open' ? require('../assets/img/issue-dot.png') : require('../assets/img/closed-mark.png')} />
            <View style={styles.contentView}>
                <Text numberOfLines={2} style={styles.title}>{title}</Text>
                <Text numberOfLines={2} style={styles.subtitle}>#{number} {state == 'open' ? 'opened' : state} by {user?.login}</Text>
            </View>
            {comments > 0 && <View style={styles.commentCount}>
                <Image numberOfLines={2} style={{ width: 20, height: 20, marginVertical: 10 }} source={require('../assets/img/comment.png')} />
                <Text numberOfLines={2} style={styles.commentsCount}>{comments}</Text>
            </View>}
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomWidth: 0.5,
        borderColor: '#E6E7E9',
        flex: 1
    },
    contentView: {
        paddingHorizontal: 10,
        flex: 1
    },
    title: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 16
    },
    subtitle: {
        color: '#E6E7E9',
        fontWeight: '300',
    },
    commentCount: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    commentsCount: {
        fontSize: 16,
        color: '#E6E7E9',
        paddingHorizontal: 4
    }
})

export default IssueItem