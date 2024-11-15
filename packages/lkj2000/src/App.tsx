import React from "react";
import MainEntry from "./layout/MainEntry";
import TrainSettings from "./layout/TrainSettings";
import OperationPanel from "./layout/OperationPanel";

export default function App(){
    return <>
        <MainEntry speed={0} speedLimit={0} mileage={"000000.000"} nextSignalDistance={0} nextSignal={"000000  通过"} style={{
            zIndex:0
        }}/>
        {true?<TrainSettings style={{zIndex:1}}/>:null}

        <OperationPanel style={{zIndex:"255"}}></OperationPanel>
    </>
}