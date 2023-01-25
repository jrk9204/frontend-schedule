import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

// https://codepen.io/desandro/pen/eRRQVo
const ImageContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: masonry;
    grid-auto-flow: dense;
    align-tracks: stretch;
    width: 70vw;
`;

const PicImg = styled.img`
    max-width: 100%;
`;

const CloseImage = styled.img``;

function CatViewer() {
    const [renderImg, setRenderImg] = useState([]);
    const [isClicked, setIsClicked] = useState({ isClick: false, currUrl: "" });

    async function fetchDataa() {
        axios
            .get(
                "https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_k77YJ1Sa3RsUfqEwbuKzrsevPSBW7iCoeeTZKSuj0ahl51TyYwbMXoLhVwwyIIvF"
            )
            .then((el: any) => {
                setRenderImg((before) => [...before, ...el.data]);
            })
            .catch((e) => {});
    }

    useEffect(() => {
        async function fetchData() {
            axios
                .get(
                    "https://api.thecatapi.com/v1/images/search?limit=15&api_key=live_k77YJ1Sa3RsUfqEwbuKzrsevPSBW7iCoeeTZKSuj0ahl51TyYwbMXoLhVwwyIIvF"
                )
                .then((el: any) => {
                    setRenderImg(el.data);
                })
                .catch((e) => {});
        }

        fetchData();
    }, []);

    // useEffect(() => {
    //     const handleScroll = () => {
    //         const { scrollTop, offsetHeight } = document.documentElement;
    //         if (window.innerHeight + scrollTop + 10 >= offsetHeight) {
    //             fetchDataa();
    //         }
    //     };

    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    function handleImg(currUrl) {
        setIsClicked((preObj) => ({ ...preObj, isClick: true, currUrl: currUrl }));
    }

    return (
        <div>
            1번 과제 - CatViewer
            <ImageContainer>
                {renderImg.length !== 0 &&
                    renderImg.map((el, idx) => {
                        return (
                            <div>
                                <PicImg
                                    src={el.url}
                                    alt="사진이미지"
                                    key={idx}
                                    onClick={() => handleImg(el.url)}
                                />
                            </div>
                        );
                    })}
            </ImageContainer>
            {isClicked && (
                <div>
                    <CloseImage src={isClicked.currUrl}></CloseImage>
                </div>
            )}
        </div>
    );
}

export default CatViewer;
