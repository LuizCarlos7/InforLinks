import { View, Text } from "react-native";

// importando as cores de dentro da pasta styles
import { styles } from "./styles"

// Import para uso no mobile.
// Export default é o metodo usado para dizer ao ExporRouter que esse componente é uma Rota.
export default function Index () {
    return (
         // View é um componente que recebe estilização, semelhante a Div do HTML
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

