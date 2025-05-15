import { StyleSheet } from "react-native";

import { colors } from "@/styles/colors"

export const styles = StyleSheet.create({

    container: {
        flex: 1, // Considera toda a area util da tela para os componentes
        justifyContent: "center", // Justifica (ajusta) todos os elementos no centro da tela
        alignItems: "center", // Alinha todos os elementos no centro da tela
        flexDirection: "column", // Organiza todos os elementos dentro do flex box em coluna (embaixo um do outro)
        //Codigo para identificar as extremidades do container
        borderColor: "red",
        borderWidth: 5,
    },
    title: {
        color: colors.green[900],
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