import { View, Text, StyleSheet } from "react-native";
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return (
        <View>
            <Text style={style.title} >Siiiiiu!!</Text>
            <Text style={style.title2} >Cristiano Ronaldo dos Santos Alveiro</Text>
            <Text style={style.title3} >Nascimento: 05/02/1985</Text>
            <Text style={style.title5}>Endereço: Portugal,Ilha da Madeira</Text>
            <Text style={style.title6}>Status: Casado</Text>
            <Text style={style.title7}>Filhos: 5</Text>
            <Text style={style.title8}>Time: Al nass</Text>
            <Text style={style.title9}>Idade: 40 Anos</Text>
            <Text style={style.title10}>5 Ballon d'Or</Text>            
        </View>    
    );// Componente Text sendo usando para Renderizar um texto na tela
}
const style = StyleSheet.create({
    title: {
        color: "red",
        fontSize: 30,
    },

    title2: {
        color: "green",
        fontSize: 24,
    },

    title3: {
        color: "Yellow",
        fontSize: 19,
    },

    title4: {
        color: "blue",
        fontSize: 19,
    },

    title5: {
        color: "orange",
        fontSize: 19,
    },

    title6: {
        color: "purple",
        fontSize: 19,
    },

    title7: {
        color: "pink",
        fontSize: 19,
    },

    title8: {
        color: "brown",
        fontSize: 19,
    },

    title9: {
        color: "orange",
        fontSize: 19,
    },

    title10: {
        color: "blue",
        fontSize: 19,
    },
})
