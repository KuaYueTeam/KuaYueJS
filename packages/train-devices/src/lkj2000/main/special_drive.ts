import {defineGroup, defineState} from "react-native-minecraft-menu";
import {createMenu} from "../utils/menu";

export function useSpecialDrive() {
    return defineGroup('specialDrive', () => {
        const [isActive, setActive] = defineState(false, "isActive");
        const [activeElement, setActiveElement] = defineState("groundSignal", "activeElement");

        const focusConfiguration = {
            "groundSignal": {
                "right": "temporaryPermit",
                "down": "ticket",
                "type": "button",
                "click": () => {
                    // 处理地面信号确认逻辑
                    setActive(false);
                }
            },
            "temporaryPermit": {
                "left": "groundSignal",
                "down": "speedLimit",
                "type": "button",
                "click": () => {
                    // 处理绿色许可证逻辑
                    setActive(false);
                }
            },
            "ticket": {
                "up": "groundSignal",
                "right": "speedLimit",
                "down": "specialMove",
                "type": "button",
                "click": () => {
                    // 处理路票逻辑
                    setActive(false);
                }
            },
            "speedLimit": {
                "up": "temporaryPermit",
                "left": "ticket",
                "down": "exit",
                "type": "button",
                "click": () => {
                    // 处理转入20km/h限速模式逻辑
                    setActive(false);
                }
            },
            "specialMove": {
                "up": "ticket",
                "right": "exit",
                "type": "button",
                "click": () => {
                    // 处理货车特殊前行逻辑
                    setActive(false);
                }
            },
            "exit": {
                "up": "speedLimit",
                "left": "specialMove",
                "type": "button",
                "click": () => {
                    setActive(false);
                }
            }
        } as const;

        const quickAction = {
            "1": "groundSignal",
            "2": "temporaryPermit",
            "3": "ticket",
            "4": "speedLimit",
            "5": "specialMove",
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