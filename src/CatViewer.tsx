import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
    background-color: var(--grey);
    /* width: 700px; */
    width: 100%;
    columns: 3;
    gap: 10px;
    border: 2px solid var(--blue);
    padding: 10px;
    margin: 0 auto; // change margin for non supported browsers

    @supports (grid-template-columns: masonry) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: masonry;
        align-tracks: stretch;
        break-inside: avoid;
        margin-bottom: 10px;
    }
`;

const PicImg = styled.img`
    width: 100%;
    /* background-color: black;
    border: 2px solid yellow;
    display: flex;
    justify-content: center;
    align-items: center; */
    cursor: pointer;

    /* &:hover {
        transform: scale(3);
        transition: all ease-in-out 0.5s;
    }

    &:focus {
        transform: scale(3);
        transition: 0.5s;
    }
     */
`;

const CloseImage = styled.img`
    transition: all ease 2s 0s;
`;

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

    function imgCloseUp() {}

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
