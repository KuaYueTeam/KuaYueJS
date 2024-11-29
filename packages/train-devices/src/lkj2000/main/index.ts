import {defineGroup, defineState} from "react-native-minecraft-menu";
import {useSettings} from "./settings";

export function useMain(){
    return defineGroup('main', ()=>{
        const settings = useSettings();

        function onButtonClicked(button){
            console.info(`Button ${button} clicked!`)
            if(button == 'settings'){
                settings.setActive(!settings.isActive());
            }else if(settings.isActive()){
                settings.onButtonClicked(button);
            }
        }
        return {settings, onButtonClicked};
    })
}