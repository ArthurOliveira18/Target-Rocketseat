import { ActivityIndicator } from "react-native"
import { styles } from "./styles"
import { colors } from "@/theme/colors"

export  function Loading() {
    // Interessante dizer que ese "ActivityIndicator" é o treco de carregar, só importamos ele e coloquei a cor que eu desejo nele e o estilo que eu criei pra ele
    return <ActivityIndicator color={colors.blue[400]} style ={ styles.container} />
}