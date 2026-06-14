import { Text, View, Button} from "react-native";
import { useLocalSearchParams, router} from "expo-router";

export default function Transaction(){

    const params = useLocalSearchParams<{id: string}>()

    return(
        <View style = {{flex: 1 , justifyContent: "center"}}>
            <Text>Transaction ID: {params.id} </Text>
            <Button title="Voltar para o index" onPress={() => router.back()} />
        </View>
    )
}