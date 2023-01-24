import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faChevronDown,
    faChevronRight,
    faPlus,
    faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import styled from "styled-components";
import weekly from "./components/data/weeklyData";
import WeeklyInput from "./components/template/weeklyInput";

library.add(faChevronDown, faTrashCan, faPlus, faChevronRight);

const MainTitle = styled.div`
    text-align: center;
`;

const MainBody = styled.div`
    max-width: 70vw;
    min-height: 100vh;
    margin: 0 auto;
`;
const BodyWrapper = styled.div`
    display: flex;
`;

const MainSide = styled.div`
    flex: 0.4;
    text-align: center;
`;

const MainContent = styled.div`
    flex: 1;
    margin: 0 2rem;
`;

const ContentTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #313536;
`;

const ContentBody = styled.div``;

function WorkingHours() {
    const [isShowSchedule, setIsShowSchedule] = useState(false);
    function handleArrow() {
        setIsShowSchedule((pre) => !pre);
    }
    return (
        <div>
            <MainTitle>2번 과제 - WorkingHours</MainTitle>

            <MainBody>
                <BodyWrapper>
                    <MainSide>
                        <h3>Working hour</h3>
                    </MainSide>

                    <MainContent>
                        <ContentTitle>
                            <h4>Set your weekly hours</h4>

                            {!isShowSchedule && (
                                <FontAwesomeIcon
                                    icon="chevron-down"
                                    style={{ cursor: "pointer", transition: "0.5s" }}
                                    onClick={handleArrow}
                                />
                            )}

                            {isShowSchedule && (
                                <FontAwesomeIcon
                                    icon="chevron-right"
                                    style={{ cursor: "pointer", transition: "0.5s" }}
                                    onClick={handleArrow}
                                />
                            )}
                        </ContentTitle>

                        <ContentBody>
                            {isShowSchedule && <WeeklyInput weeklyData={weekly} />}
                        </ContentBody>
                    </MainContent>
                </BodyWrapper>
            </MainBody>
        </div>
    );
}

export default WorkingHours;
