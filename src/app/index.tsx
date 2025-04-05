import { View, Text } from "react-native";
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return (
        <View>
            <Text>Siiiiiu!!</Text>
            <Text>Cristiano Ronaldo dos Santos Alveiro</Text>
            <Text>Nascimento: 05/02/1985</Text>
            <Text>Endereço: Portugal,Ilha da Madeira</Text>
            <Text>Status: Casado</Text>
            <Text>Filhos: 5</Text>
        </View>    
    );// Componente Text sendo usando para Renderizar um texto na tela
}
