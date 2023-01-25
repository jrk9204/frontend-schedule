import styled from "styled-components";
import { resetData, updateData } from "../../store/dataSlice";
import { useAppDispatch, useAppSelector } from "../../store/reduxHooks";
import ButtonGroup from "../organism/buttonGroup";
import WeeklyInputBody from "../organism/weeklyInputBody";

const SchedulContainer = styled.div`
    border-bottom: 1px solid #b4b4b4;
`;

const SchedulWrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 1.5rem 0;
`;

const DisplayWeekly = styled.div`
    min-width: 6rem;
    text-align: center;
`;
const SetTimeContainer = styled.div``;

function WeeklyInput() {
    const getSearchWord = useAppSelector((state) => state.sdheduleState);
    const dispatch = useAppDispatch();

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
                    <SchedulContainer key={idx + el}>
                        <SchedulWrapper>
                            <DisplayWeekly>{el}</DisplayWeekly>
                            <SetTimeContainer>
                                <WeeklyInputBody
                                    dataList={getSearchWord.scheduleStore}
                                    weekend={el}
                                />
                            </SetTimeContainer>
                        </SchedulWrapper>
                    </SchedulContainer>
                );
            })}
            {getSearchWord.isChanged && (
                <ButtonGroup handleReset={handleReset} handleUpdate={handleUpdate} />
            )}
        </>
    );
}

export default WeeklyInput;
