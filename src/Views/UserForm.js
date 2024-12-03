import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default ({ route, navigation }) => {
    const [user, setUSer] = useState(route.params ? route.params : {})
    return (
        <View style={style.form}>
            <Text>Name:</Text>
            <TextInput
                style={style.input}
                onChangeText={name => setUSer({ ...user, name })}
                placeholder="Informe o Nome"
                value={user.name}
            />

            <Text>Email:</Text>
            <TextInput
                style={style.input}
                onChangeText={email => setUSer({ ...user, email })}
                placeholder="Informe o Email"
                value={user.email}
            />
            <Text>URL do Avatar:</Text>
            <TextInput
                style={style.input}
                onChangeText={avatarUrl => setUSer({ ...user, avatarUrl })}
                placeholder="Informe a URL do Avatar"
                value={user.avatarUrl}
            />
            <Button
                title="Salvar"
                onPress={() => {
                    navigation.goBack()
                }}
            />
        </View >
    )
}

const style = StyleSheet.create({
    form: {
        padding: 12,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 15,
    }
})