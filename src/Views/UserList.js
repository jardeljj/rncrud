import React from "react";
import { Alert, FlatList, View } from "react-native";
import users from "../data/users";
import { Avatar, Button, ListItem} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons';

export default props => {

    function confirmUserDeletion(user) {
        Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
            {
                text: 'Sim',
                onPress() {
                    alert(`Usuário ${user.name} excluído!`)
                }
            },
            {
                text: 'Não'
            }
        ])
    }

    function getActions(user) {
        return (
            <>
                <Button
                    onPress={() => props.navigation.navigate('UserForm', user)}
                    type="clear"
                    icon={<Icon name="create-outline" size={25} color="orange" />}
                />
                <Button
                    onPress={() => confirmUserDeletion(user)}
                    type="clear"
                    icon={<Icon name="trash-outline" size={25} color="red" />}
                />
            </>
        )
    }

    function getUserItem({ item: user }) {
        return (
            <ListItem 
            bottomDivider 
            key={user.id} 
            onPress={() => props.navigation.navigate('UserForm', user)}>

                <Avatar source={{ uri: user.avatarUrl }} />
                <ListItem.Content>
                    <ListItem.Title>{user.name}</ListItem.Title>
                    <ListItem.Subtitle>{user.email}</ListItem.Subtitle>

                </ListItem.Content>
                <ListItem.Content right>
                    {getActions(user)}
                </ListItem.Content>
            </ListItem>
        )
    }

    return (
        <View>
            <FlatList
                keyExtractor={users => users.id.toString()}
                data={users}
                renderItem={getUserItem}
            />
        </View>
    )
}