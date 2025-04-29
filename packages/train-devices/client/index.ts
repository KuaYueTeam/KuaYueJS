import {AppRegistry} from "react-native-minecraft";
import {} from "react-native";
import LKJ2000 from "./lkj2000/App";
import CIR from "./cir/App";
import Interlocking6502 from "./interlocking6502/App";
import TrainControl from "./control/App";

AppRegistry.registerGuiComponent("kuayue:lkj_2000",()=>LKJ2000);
AppRegistry.registerGuiComponent("kuayue:cir",()=>CIR);

AppRegistry.registerGuiComponent("kuayue:train_control",()=>TrainControl);
AppRegistry.registerGuiComponent("kuayue:interlocking_6502",()=>Interlocking6502);
