import { Text, View, Button } from "react-native";
import { Route, router } from "expo-router";
import { colors } from "@/theme/colors";


export default function Target(){
    return(
        <View 
        style ={{ 
            flex : 1, 
            justifyContent: "center",
            backgroundColor: colors.blue[800]
            }}>
           <Text style= {{color: colors.white}}>Target</Text>

           <Button 
           title="Voltar para o index"
           onPress={() => router.back()}
           />
        </View>
    )
}