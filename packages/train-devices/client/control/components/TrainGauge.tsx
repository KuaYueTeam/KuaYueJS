import {View} from "react-native-minecraft";

const background = require("../../assets/control.png")
export function TrainGauge(props:{
    style: any
}){
    return <View style={{
        positionType: "absolute",
        backgroundImage: background,
        backgroundUV: "0 0 31 31",
        ...props.style
    }}>
    </View>
}