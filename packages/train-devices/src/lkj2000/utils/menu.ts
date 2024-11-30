import { MenuStateManager } from "react-native-minecraft-menu";

type ElementConfig = {
    type: "button" | "input" | "select";
    up?: string;
    down?: string;
    left?: string;
    right?: string;
    next?: string;
    previous?: string;
    click?: () => void;
    insert?: (data: string) => void;
    delete?: () => void;
    isSelectActive?: () => boolean;
}

type MenuConfig = {
    focusConfiguration: Record<string, ElementConfig>;
    quickAction: Record<string, string>;
    setActiveElement: (element: string) => void;
    activeElement: () => string;
}

export function createMenu(config: MenuConfig) {
    return (button: string) => {
        const element = config.focusConfiguration[config.activeElement()];
        
        switch(button) {
            // 数字键处理
            case "0_check":
            case "1_forward":
            case "2_shunting":
            case "3_position":
            case "4_entry_number":
            case "5_log_position":
            case "6_back":
            case "7_driveStart":
            case "8_correction":
            case "9_inbound_outbound":
                const number = button.split('_')[0];
                if(element?.type === "input" && element.insert) {
                    element.insert(number);
                } else {
                    if(config.quickAction[number]) {
                        if(config.activeElement() === config.quickAction[number]) {
                            if(element.click) {
                                element.click();
                            }
                        } else {
                            config.setActiveElement(config.quickAction[number]);
                        }
                    }
                }
                break;

            // 方向键处理
            case "up":
                if(element.type === "select" && element.isSelectActive?.()) {
                    // @TODO
                } else if(element.up) {
                    config.setActiveElement(element.up);
                } else if(element.previous) {
                    config.setActiveElement(element.previous);
                }
                break;

            case "down":
                if(element.type === "select") {
                    if(element.isSelectActive?.()) {
                        // @TODO
                    } else {
                        // @TODO
                    }
                } else if(element.down) {
                    config.setActiveElement(element.down);
                } else if(element.next) {
                    config.setActiveElement(element.next);
                }
                break;

            case "left":
                if(element?.type === "input") {
                    if(element.delete)
                        element.delete();
                } else if(element.left) {
                    config.setActiveElement(element.left);
                }
                break;

            case "right":
                if(element.right) {
                    config.setActiveElement(element.right);
                }
                break;

            // 确认键处理
            case "confirm":
                if(element.type === "button") {
                    element.click?.();
                } else {
                    if(element.next) {
                        config.setActiveElement(element.next);
                    }
                }
                break;
        }
    };
} 