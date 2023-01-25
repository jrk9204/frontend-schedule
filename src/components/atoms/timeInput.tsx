import styled from "styled-components";
import { TimeInputProps } from "../../data/types";
import { setTimeData } from "../../store/dataSlice";
import { useAppDispatch } from "../../store/reduxHooks";
import functionModule from "../commons/functionModule";

const InputCompo = styled.select`
    width: 9rem;
    height: 2.5rem;
    margin: 0.5rem 0.3rem;
    border-radius: 5px;
`;

function Input({ date, dataProps, objectKey }: TimeInputProps) {
    const dispatch = useAppDispatch();

    let times = functionModule.makeTimeOptions();

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
                <option key={timesEl + idx}>{timesEl}</option>
            ))}
        </InputCompo>
    );
}

export default Input;
