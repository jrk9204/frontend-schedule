import styled from "styled-components";
import IconAtom from "./components/atoms/icon";
import WeeklyInput from "./components/template/weeklyInput";
import { setDropModal } from "./store/dataSlice";
import { useAppDispatch, useAppSelector } from "./store/reduxHooks";

const MainContainer = styled.div`
    margin: 4rem 0;
`;

const MainBody = styled.div`
    min-width: 70vw;
    min-height: 100vh;
    margin: 0 auto;
`;
const BodyWrapper = styled.div`
    display: flex;

    justify-content: center;
`;

const MainSide = styled.div`
    min-width: 15rem;

    text-align: center;
`;

const MainContent = styled.div`
    min-width: 40rem;

    margin: 0 2rem;
`;

const ContentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #b4b4b4;
`;

const ContentBody = styled.div``;

function WorkingHours() {
    const getSearchWord = useAppSelector((state) => state.sdheduleState);
    const dispatch = useAppDispatch();
    function handleArrow() {
        dispatch(setDropModal());
    }

    return (
        <MainContainer>
            <MainBody>
                <BodyWrapper>
                    <MainSide>
                        <h3>Working hour</h3>
                    </MainSide>

                    <MainContent>
                        <ContentTitle>
                            <h4>Set your weekly hours</h4>

                            {!getSearchWord.isShowTable && (
                                <IconAtom iconName="chevron-down" handleArrow={handleArrow} />
                            )}

                            {getSearchWord.isShowTable && (
                                <IconAtom iconName="chevron-right" handleArrow={handleArrow} />
                            )}
                        </ContentTitle>

                        <ContentBody>{getSearchWord.isShowTable && <WeeklyInput />}</ContentBody>
                    </MainContent>
                </BodyWrapper>
            </MainBody>
        </MainContainer>
    );
}

export default WorkingHours;
