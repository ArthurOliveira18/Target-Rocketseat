import { View, Text, Button } from "react-native";
import { colors } from "@/theme/colors";
import { router } from "expo-router";



export default function Index() {
    return (
        <View
            style={{
                backgroundColor: colors.blue[800],
                justifyContent: "center",
                flex: 1
            }}

        >
            <Text style={{ color: colors.white }}>Tela do index</Text>


            <Button title="Nova meta" onPress={() => router.navigate("/target")} />
            <Button title="Transação"
                onPress={() => router.navigate({
                    pathname: "/transaction/[id]",
                    params: { id: "190" }

                    // commit 
                })}
            />
        </View>
    )
}