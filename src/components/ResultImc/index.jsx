import { View, Text } from "react-native";

const ResultImc = ({ props }) => {
    return (
        <View>
            <Text>{props.resultImc}</Text>
            <Text>{props.resultImcMessage}</Text>
        </View>
    )
}

export default ResultImc;