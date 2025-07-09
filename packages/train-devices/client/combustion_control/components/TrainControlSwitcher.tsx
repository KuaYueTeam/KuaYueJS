import {View} from "react-native-minecraft";

const background = require("../../assets/control.png")

export default function TrainControlSwitcher(props:{
    style?: any
}){
    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: "48 80 18 21",
        ...props.style
    }}>
    </View>
}