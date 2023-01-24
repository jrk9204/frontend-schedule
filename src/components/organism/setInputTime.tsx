import Input from "../atoms/timeInput";

interface TimeProps {
    start: string;
    end: string;
}

function setInputTime({ currScheduleData, weekendDate }: any) {
    return (
        <div>
            <Input date={weekendDate} objectKey={"start"} dataProps={currScheduleData} /> -{" "}
            <Input date={weekendDate} objectKey={"end"} dataProps={currScheduleData} />
        </div>
    );
}

export default setInputTime;
