import { memo } from "react";
import { SetInputProps } from "../../data/types";
import Input from "../atoms/timeInput";

function setInputTime({ currScheduleData, weekendDate }: SetInputProps) {
    return (
        <>
            <Input date={weekendDate} objectKey="start" dataProps={currScheduleData} /> -{" "}
            <Input date={weekendDate} objectKey="end" dataProps={currScheduleData} />
        </>
    );
}

export default memo(setInputTime);
