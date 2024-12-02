import React, { useState } from "react";
import { Text } from "react-native";

export default ({ route, navigation }) => {
    const [user, setUSer] = useState(route.params ? route.params : {})
    return (
        <Text>{user.id}</Text>
    )
}