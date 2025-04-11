import { View, Text, StyleSheet } from "react-native";
// Import para uso no mobile.
export default function Index () {
    return (
        <View style={styles.container}>
            <Text style={styles.title} >Siiiiiu!!</Text>
            <Text style={styles.title2} >Cristiano Ronaldo dos Santos Alveiro</Text>
            <Text style={styles.title3} >Nascimento: 05/02/1985</Text>
            <Text style={styles.title5}>Endereço: Portugal,Ilha da Madeira</Text>
            <Text style={styles.title6}>Status: Casado</Text>
            <Text style={styles.title7}>Filhos: 5</Text>
            <Text style={styles.title8}>Time: Al nass</Text>
            <Text style={styles.title9}>Idade: 40 Anos</Text>
            <Text style={styles.title10}>5 Ballon d'Or</Text>            
        </View>    
    );// estilo para uso no mobile
}
const styles = StyleSheet.create({

    container: {
        flex: 1, // Considera toda a area util da tela para os componentes
        justifyContent: "center", // Justifica (ajusta) todos os elementos no centro da tela
        alignItems: "center", // Alinha todos os elementos no centro da tela
        flexDirection: "row", // Organiza todos os elementos dentro do flex box em linha
    },
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
