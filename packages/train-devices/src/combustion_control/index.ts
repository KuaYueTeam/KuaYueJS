import { MenuHandle } from "@kasugalib/menu";
import { defineEmit, defineGroup, MenuStateManager, defineState } from "react-native-minecraft-menu";

export function CombustionControlMenu(handle: MenuHandle){
    const state = new MenuStateManager(handle);

    // const power = handle.inject('power');
    
    state.register(()=>{
        const root = defineGroup('root', ()=>{
            const [powerLevel, setPowerLevel] = defineState(0);
            
            defineEmit((level)=>{
                setPowerLevel(level);
            }, 'setPowerLevel')
            
            return {powerLevel};
        })
    })

    return state;
}