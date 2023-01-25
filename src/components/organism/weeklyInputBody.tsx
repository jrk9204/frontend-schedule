import styled from "styled-components";
import { InputBodyProps, ObjectType } from "../../data/types";
import { setAddData, setDeleteData } from "../../store/dataSlice";
import { useAppDispatch } from "../../store/reduxHooks";
import IconAtom from "../atoms/icon";
import SetInputTime from "../organism/setInputTime";

const SetTimeWrapper = styled.div`
    display: flex;
    align-items: center;
`;

const TimeContainer = styled.div`
    padding: 0 2rem;
    display: inline-block;
`;

function WeeklyInputBody({ dataList, weekend }: InputBodyProps) {
    const dispatch = useAppDispatch();

    function handleTrash(currWeekend: string, dataID: number) {
        dispatch(setDeleteData([currWeekend, dataID]));
    }

    function handlePlus(currWeekend: string) {
        dispatch(setAddData(currWeekend));
    }

    return (
        <>
            {dataList[weekend].length === 0 && (
                <IconAtom iconName="plus" handleArrow={() => handlePlus(weekend)} />
            )}
            {dataList[weekend].length !== 0 &&
                dataList[weekend].map((dataEl: ObjectType, idx: number) => (
                    <SetTimeWrapper key={dataEl.id}>
                        <TimeContainer>
                            <SetInputTime currScheduleData={dataEl} weekendDate={weekend} />
                        </TimeContainer>

                        <IconAtom
                            iconName="trash-can"
                            handleArrow={() => handleTrash(weekend, dataEl.id)}
                        />

                        {idx === dataList[weekend].length - 1 && (
                            <IconAtom iconName="plus" handleArrow={() => handlePlus(weekend)} />
                        )}
                    </SetTimeWrapper>
                ))}
        </>
    );
}

export default WeeklyInputBody;
