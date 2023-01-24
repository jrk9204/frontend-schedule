import styled from "styled-components";
import { setTimeData } from "../../store/dataSlice";
import { useAppDispatch } from "../../store/reduxHooks";

const InputCompo = styled.select`
    width: 8.5rem;
    height: 2.5rem;
    margin: 0.5rem 0;
`;

interface TimeProps {
    timeProps: string;
}

function Input({ dataProps, objectKey, date }: any) {
    const dispatch = useAppDispatch();

    let times = [];

    function makeTimeOptions() {
        const timeOptions = [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
        ];
        const minsOptions = ["00", "15", "30", "45"];

        timeOptions.forEach((hours) => {
            minsOptions.forEach((mins) => {
                times.push(`${hours}:${mins}`);
            });
        });
    }

    makeTimeOptions();

    function handleSelect(e) {
        dispatch(setTimeData([e.target.value, dataProps.id, objectKey, date]));
    }

    return (
        <InputCompo
            key={dataProps.id + date + objectKey}
            value={objectKey === "start" ? dataProps.start : dataProps.end}
            onChange={handleSelect}
        >
            {times.map((timesEl, idx) => (
                <option key={idx}>{timesEl}</option>
            ))}
        </InputCompo>
    );
}

export default Input;
