import {defineGroup, defineState} from "react-native-minecraft-menu";
import {createMenu} from "../utils/menu";

export function useMainQuery() {
    return defineGroup('mainQuery', () => {
        const [isActive, setActive] = defineState(false, "active");
        const [activeElement, setActiveElement] = defineState("trainInfo", "activeElement");

        const focusConfiguration = {
            "trainInfo": {
                "right": "workStatus",
                "down": "allStatus",
                "type": "button",
                "click": () => {
                    // 处理列车信息查询逻辑
                    setActive(false);
                }
            },
            "workStatus": {
                "left": "trainInfo",
                "down": "deviceStatus",
                "type": "button",
                "click": () => {
                    // 处理工况显示逻辑
                    setActive(false);
                }
            },
            "allStatus": {
                "up": "trainInfo",
                "right": "deviceStatus",
                "down": "checkParams",
                "type": "button",
                "click": () => {
                    // 处理全部显示逻辑
                    setActive(false);
                }
            },
            "deviceStatus": {
                "up": "workStatus",
                "left": "allStatus",
                "down": "setParams",
                "type": "button",
                "click": () => {
                    // 处理设备状态逻辑
                    setActive(false);
                }
            },
            "checkParams": {
                "up": "allStatus",
                "right": "setParams",
                "down": "test",
                "type": "button",
                "click": () => {
                    // 处理检修参数逻辑
                    setActive(false);
                }
            },
            "setParams": {
                "up": "deviceStatus",
                "left": "checkParams",
                "down": "infoQuery",
                "type": "button",
                "click": () => {
                    // 处理设定参数逻辑
                    setActive(false);
                }
            },
            "test": {
                "up": "checkParams",
                "right": "infoQuery",
                "down": "callGround",
                "type": "button",
                "click": () => {
                    // 处理库内试验逻辑
                    setActive(false);
                }
            },
            "infoQuery": {
                "up": "setParams",
                "left": "test",
                "down": "exit",
                "type": "button",
                "click": () => {
                    // 处理信息查询逻辑
                    setActive(false);
                }
            },
            "callGround": {
                "up": "test",
                "right": "exit",
                "type": "button",
                "click": () => {
                    // 处理呼叫地面逻辑
                    setActive(false);
                }
            },
            "exit": {
                "up": "infoQuery",
                "left": "callGround",
                "type": "button",
                "click": () => {
                    setActive(false);
                }
            }
        } as const;

        const quickAction = {
            "1": "trainInfo",
            "2": "workStatus",
            "3": "allStatus",
            "4": "deviceStatus",
            "5": "checkParams",
            "6": "setParams",
            "7": "test",
            "8": "infoQuery",
            "9": "callGround",
            "0": "exit"
        } as const;

        const onButtonClicked = createMenu({
            focusConfiguration,
            quickAction,
            setActiveElement,
            activeElement
        });

        return {
            isActive,
            setActive,
            activeElement,
            onButtonClicked
        };
    });
} 