import {MenuHandle} from "@kasugalib/menu";
import {defineEmit, defineGroup, defineState, MenuStateManager} from "react-native-minecraft-menu";
import {useMain} from "./main";

export function LKJ2000Menu(handle:MenuHandle){
    const state = new MenuStateManager(handle);
    state.register(()=>{
        const root = defineGroup('root', ()=>{
            const main = useMain();
            defineEmit((button)=>{
                main.onButtonClicked(button);
            }, 'operation')
            return {};
        })
    })
    return state;
}
