import { View, Text, Button } from "react-native";
import { colors } from "@/theme/colors";
import { router } from "expo-router";
import { fontFamily } from "@/theme/fontFamily";



export default function Index() {
    return (
        <View
            style={{
                
                justifyContent: "center",
                flex: 1
            }}

        >
            <Text style={{ fontFamily: fontFamily.bold  }}>Tela do index</Text>


            <Button title="Nova meta" onPress={() => router.navigate("/target")} />

            <Button title="Transação"
                onPress={() => router.navigate({pathname: "/transaction/[id]", params: { id: " 7" }
                })}
            />

            <Button title="Progresso" onPress={() => router.navigate({pathname: "/in-progress/[id]", params: {id: 8}})} />
        </View>
    )
}