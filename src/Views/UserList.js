import React from "react";
import { FlatList, Text, View } from "react-native";
import users from "../data/users";

export default props => {

    return (
        <View>
            <FlatList
                keyExtractor={users => users.id.toString()}
                data={users}
            />
        </View>
    )
}