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
    min-height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CatImgContainer = styled.div`
    padding: 3rem 0;
    columns: 3;
    gap: 0.5rem;
`;

const CatImg = styled.img`
    max-width: 100%;
    cursor: pointer;
`;

const CatClickedImg = styled.img`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 80%;
    max-height: 80%;
    cursor: pointer;
    overflow: hidden;

    z-index: 1;
    transition: 0.3s;
    animation: fadein 1s;
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const PopUpBackGround = styled.div`
    background-color: rgba(0, 0, 0, 0.877);
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem 0;
    transition: 0.3s;
    z-index: 1;
`;


const TargetElement = styled.div`
height:140px;

`

function CatViewer() {
    const getImageData = useAppSelector((state) => state.imageState);
    const dispatch = useAppDispatch();
    const [isClosedUp, setIsClosedUp] = useState({ isClicked: false, currUrl: "" });
    const [target,setTarget] = useState(null);

    // const handleScroll = throttle(() => {
    //     const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    //     if (scrollTop + 300 >= scrollHeight - clientHeight) {
    //         dispatch(asyncUpFetch());
    //     }
    // }, 1000);

    // useEffect(() => {
    //     dispatch(asyncUpFetch());
    //     window.addEventListener("scroll", handleScroll);
    //     return () => {
    //         window.removeEventListener("scroll", handleScroll);
    //     };
    // }, []);



    const onIntersect = async ([entry], observer) => {
        if (entry.isIntersecting && !getImageData.loading) {
          observer.unobserve(entry.target);
          await     dispatch(asyncUpFetch());

          observer.observe(entry.target);
        }
      };

    useEffect(() => {
        let observer;
        if (target) {
          observer = new IntersectionObserver(onIntersect, {
            threshold: 0.4,
          });
          observer.observe(target);
        }
        return () => observer && observer.disconnect();
      }, [target  ]);
      



    function handleImg(urlProps) {
        setIsClosedUp((pre) => ({ ...pre, isClicked: !pre.isClicked, currUrl: urlProps }));
    }
    return (
        <ImageContainer>
            <CatImgContainer>
                {getImageData.imgData.map((el: any, idx) => {
                    return (
                        <>
                            <CatImg
                                key={el.id + el.url + idx}
                                src={el.url}
                                onClick={() => handleImg(el.url)}
                            />
                        </>
                    );
                })}

                {isClosedUp.isClicked && (
                    <PopUpBackGround>
                        <CatClickedImg
                            src={isClosedUp.currUrl}
                            alt="이미지"
                            onClick={() => handleImg("")}
                        />
                    </PopUpBackGround>
                )}
            </CatImgContainer>

            <TargetElement ref={setTarget}>
            {getImageData.loading && (
                <LoadingContainer>
                    <Loading />
                </LoadingContainer>
            )}
            </TargetElement>
        </ImageContainer>
    );
}

export default CatViewer;
