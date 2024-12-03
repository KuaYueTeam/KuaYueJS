import {MenuHandle} from "@kasugalib/menu";
import {defineEffect, defineEmit, defineGroup, defineState, MenuStateManager} from "react-native-minecraft-menu";
import {useMain} from "./main";

export function LKJ2000Menu(handle:MenuHandle){
    const state = new MenuStateManager(handle);
    const train = handle.inject("train");
    state.register(()=>{
        const root = defineGroup('root', ()=>{
            const main = useMain();
            defineEmit((button)=>{
                main.onButtonClicked(button);
            }, 'operation')
            return {main};
        })

        defineEffect(()=>{
            const updateInterval = setInterval(()=>{
                if(train == null){
                    root.main.updateSpeed("----");
                    root.main.updateSignal("N");
                } else {
                    root.main.updateSpeed(Math.floor(Math.abs(train.getSpeed() * 40)));
                    root.main.updateSignal("UU");
                }
            },100);
            return ()=>{
                clearInterval(updateInterval);
            }
        })
    })
    return state;
}
