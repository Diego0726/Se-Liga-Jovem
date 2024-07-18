    import { View, Pressable, Text } from "react-native";
    import { Ionicons, Feather } from "@expo/vector-icons";

export function Header(){
    return(
        <View>
            <Pressable>
                <Ionicons nome="ACESSAR" size={20} color={"#1C5D1F"}/>
            </Pressable>
        </View>
    );
}