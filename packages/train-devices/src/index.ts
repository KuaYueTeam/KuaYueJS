import {register as registerMenu} from "@kasugalib/menu";
import {LKJ2000Menu} from "./lkj2000";
import {CombustionControlMenu} from "./combustion_control";

registerMenu('kuayue:lkj_2000', LKJ2000Menu);

registerMenu('kuayue:combustion_train_control', CombustionControlMenu);