import { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../ResultImc";

const Form = () => {

  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
  const [imc, setImc] = useState(0);
  const [textButton, setTextButton] = useState("Calcular IMC");

  const calculatorImc = () => {
    return setImc((weight / (height * height)).toFixed(2));
  };

  const validateImc = () => {
    if (weight != 0 && height != 0) {
      calculatorImc();
      setHeight("");
      setWeight("");
      setMessageImc("Seu imc é igual a: ");
      setTextButton("Calcular Novamente");
      return;
    } else {
      window.alert("Preencha os campos")
    }
  };

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
        ></TextInput>
        <Text>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 80.20"
          keyboardType="numeric"
        ></TextInput>
        <Button onPress={validateImc} title={textButton} />
      </View>
      <ResultImc resultImc={imc} resultImcMessage={messageImc} />
    </View>
  );
};

export default Form;
