import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./cad-despesa.style.js";
import icons from "../../constants/icons.js";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";

const CadDespesa = (props) => {
  const [id, setId] = useState(0);
  const [valor, setValor] = useState(0);
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("");

  const handleSalvar = () => {
    // Salvar a despesa na API

    props.navigation.navigate("home");
  };
  const handleExcluir = () => {
    // Excluir a despesa na API

    props.navigation.navigate("home");
  };
  return (
    <View style={styles.container}>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Valor</Text>
        <TextInput
          placeholder="0,00"
          style={styles.inputValor}
          defaultValue="0"
          keyboardType="decimal-pad"
        />
      </View>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Descrição</Text>
        <TextInput
          placeholder="Ex.: Aluguel"
          style={styles.inputText}
          defaultValue=""
        />
      </View>
      <View style={styles.containerField}>
        <Text style={styles.inputLabel}>Categoria</Text>
        <View style={styles.inputPicker}>
          <Picker
            selectedValue={categoria}
            onValueChange={(itemValue, itemIndex) => {
              setCategoria(itemValue);
            }}
          >
            <Picker.Item label="Carro" value="Carro" />
            <Picker.Item label="Casa" value="Casa" />
            <Picker.Item label="Lazer" value="Lazer" />
            <Picker.Item
              label="Mercado"
              value="Mercado"
              itemStyle={{ padding: 0 }}
            />
            <Picker.Item label="Educação" value="Educação" />
            <Picker.Item label="Viagem" value="Viagem" />
          </Picker>
        </View>
      </View>
      <View style={styles.containerBtn}>
        <TouchableOpacity style={styles.btn} onPress={handleSalvar}>
          <Text style={styles.btnText}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerDelete}>
        <TouchableOpacity onPress={handleExcluir}>
          <Image source={icons.remove} style={styles.btnDelete} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CadDespesa;
