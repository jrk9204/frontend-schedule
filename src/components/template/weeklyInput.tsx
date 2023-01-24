import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import { resetData, setAddData, setDeleteData, updateData } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import SetInputTime from "../organism/setInputTime";

const SchedulContainer = styled.div`
    border-bottom: 1px solid #313536;
`;

const SchedulWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 73%;
    padding: 1.5rem 0;
`;

const DisplayWeekly = styled.div`
    min-width: 6rem;
`;
const FunctionIcons = styled.div`
    min-width: 3.5rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const SetTimeContainer = styled.div``;

const SetTimeWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
`;

const TimeContainer = styled.div`
    flex: 1;
`;

interface WeeklyDataProps {
    weeklyData: Array<string>;
}

function WeeklyInput({ weeklyData }: WeeklyDataProps) {
    const [pickedTime, sePickedTime] = useState("");
    const [currInputSize, setCurrInputSize] = useState([1]);
    const getSearchWord = useAppSelector((state) => state.sdheduleState);
    const dispatch = useAppDispatch();

    const [currData, setCurrData] = useState({
        Sunday: [
            { id: 1, start: "", end: "" },
            { id: 2, start: "", end: "" },
            { id: 3, start: "", end: "" },
        ],
        Monday: [],
        Tuesday: [],
        Wednesday: [],
        Thursday: [],
        Friday: [],
        Saturday: [],
    });

    function handleTrash(currWeekend, dataID) {
        dispatch(setDeleteData([currWeekend, dataID]));
    }

    function handlePlus(currWeekend: string) {
        dispatch(setAddData(currWeekend));
    }

    function handleReset() {
        dispatch(resetData());
    }

    function handleUpdate() {
        dispatch(updateData());
    }

    return (
        <>
            {Object.keys(getSearchWord.scheduleStore).map((el, idx) => {
                return (
                    <SchedulContainer key={idx}>
                        <SchedulWrapper>
                            <DisplayWeekly>{el}</DisplayWeekly>

                            <SetTimeContainer>
                                {getSearchWord.scheduleStore[el].length === 0 && (
                                    <FontAwesomeIcon
                                        icon="plus"
                                        style={{ cursor: "pointer" }}
                                        onClick={() => handlePlus(el)}
                                    />
                                )}
                                {getSearchWord.scheduleStore[el].length !== 0 &&
                                    getSearchWord.scheduleStore[el].map((dataEl, idx) => (
                                        <SetTimeWrapper key={idx}>
                                            <TimeContainer>
                                                <SetInputTime
                                                    currScheduleData={dataEl}
                                                    weekendDate={el}
                                                />
                                            </TimeContainer>

                                            <FunctionIcons>
                                                <FontAwesomeIcon
                                                    icon="trash-can"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handleTrash(el, dataEl.id)}
                                                />
                                            </FunctionIcons>

                                            {idx === getSearchWord.scheduleStore[el].length - 1 && (
                                                <FontAwesomeIcon
                                                    icon="plus"
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => handlePlus(el)}
                                                />
                                            )}
                                        </SetTimeWrapper>
                                    ))}
                            </SetTimeContainer>
                        </SchedulWrapper>
                    </SchedulContainer>
                );
            })}
            {getSearchWord.isChanged && (
                <div>
                    <button onClick={handleReset}>cancle</button>

                    <button onClick={handleUpdate}>submit</button>
                </div>
            )}
        </>
    );
}

export default WeeklyInput;
