import {MenuHandle, register as registerMenu} from "@kasugalib/menu";
import {defineGroup, defineState, MenuStateManager} from "react-native-minecraft-menu"
function LKJ2000Menu(handle:MenuHandle){
    const state = new MenuStateManager(handle);
    state.register(()=>{
        const handle = defineGroup("root", ()=>{
            const [state,setState] = defineState(0);
            return {state, update:()=>1};
        })
        setInterval(()=> handle.update(), 1000);
    })
    return state;
}

registerMenu('kuayue:lkj_2000', LKJ2000Menu);