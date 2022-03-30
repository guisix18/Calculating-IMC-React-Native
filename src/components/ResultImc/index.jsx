import { View, Text } from "react-native";

const ResultImc = ({ resultImc, resultImcMessage }) => {
    return (
        <View>
            <Text>{resultImcMessage}</Text>
            <Text>{resultImc}</Text>
        </View>
    )
}

export default ResultImc;