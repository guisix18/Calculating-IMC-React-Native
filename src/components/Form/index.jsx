import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

import { View, Text, TextInput, Button } from "react-native";
import ResultImc from "../ResultImc";

const Form = () => {
//   const formSchema = yup.object().shape({
//     heigth: yup.string().required("Coloque sua altura"),
//     weight: yup.string().required("Coloque seu peso"),
//   });

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(formSchema),
//   });

    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura");
    const [imc, setImc] = useState(null);

    const calculatorImc = () => {
        return setImc((weight / (height * height)).toFixed(2));
    }

    const validateImc = () => {
        if (weight != null && height != null) {
            calculatorImc();
            setMessageImc("Seu imc é igual: ");
        } else {

        }
    }

  return (
    <View>
      <View>
        <Text>Altura</Text>
        <TextInput placeholder="Ex: 1.75" keyboardType="numeric"></TextInput>
        <Text>Peso</Text>
        <TextInput placeholder="Ex: 80.20" keyboardType="numeric"></TextInput>
        <Button title="Calcular IMC" />
      </View>
      <ResultImc resultImc={imc} resultImcMessage={messageImc}/>
    </View>
  );
};

export default Form;
