import { throttle } from "lodash";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Loading from "./components/organism/loading";
import { asyncUpFetch } from "./store/imageSlice";
import { useAppDispatch, useAppSelector } from "./store/reduxHooks";
const ImageContainer = styled.div`
    width: 60vw;
    margin: 0 auto;
`;

const LoadingContainer = styled.div`
    min-height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CatImgContainer = styled.div`
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: auto;
`;

const CatImg = styled.img`
    max-width: 100%;
`;

const PopUp = styled.div<{ getOpacity: number }>``;

function CatViewer() {
    const getImageData = useAppSelector((state) => state.imageState);
    const dispatch = useAppDispatch();
    const [isClosedUp, setIsClosedUp] = useState(false);

    const handleScroll = throttle(() => {
        const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

        if (scrollTop + 500 >= scrollHeight - clientHeight) {
            dispatch(asyncUpFetch());
        }
    }, 1000);

    useEffect(() => {
        dispatch(asyncUpFetch());
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    function handleImg() {
        setIsClosedUp((pre) => !pre);
    }
    return (
        <ImageContainer>
            <CatImgContainer>
                {getImageData.imgData.map((el: any, idx) => {
                    return (
                        <CatImg key={el.id + el.url + idx} src={el.url} onClick={handleImg} />
                        // {isClosedUp && (
                        //     <PopUp getOpacity={1}>
                        //         <img src={el.url} alt="image" style={{ width: 100 }} />
                        //     </PopUp>
                        // )}
                    );
                })}
            </CatImgContainer>
            {getImageData.loading && (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            )}
        </ImageContainer>
    );
}

export default CatViewer;
