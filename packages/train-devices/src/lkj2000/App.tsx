import React from "react";
import MainEntry from "./layout/MainEntry";
import TrainSettings from "./layout/TrainSettings";
import OperationPanel from "./layout/OperationPanel";
import NoticeQuery from "./layout/NoticeQuery";
import {View} from "react-native-minecraft";

export default function App(){
    return <>
            {false ? <MainEntry speed={0} speedLimit={0} mileage={"000000.000"} nextSignalDistance={0} nextSignal={"000000  通过"} style={{
            zIndex:0
            }}/> : null}
            {false?<TrainSettings style={{zIndex:1}}/>:null}
            {true ? <NoticeQuery></NoticeQuery> : null}
            <OperationPanel style={{zIndex:"255"}}></OperationPanel>
    </>
}