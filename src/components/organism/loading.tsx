import styled from "styled-components";

const LoadingContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const LoadingLetter = styled.div`
    font-size: 2rem;
    font-weight: bold;
    @keyframes loading {
        0% {
            opacity: 0;
        }

        10% {
            opacity: 1;
        }
        20% {
            opacity: 0;
        }

        30% {
            opacity: 1;
        }

        40% {
            opacity: 0;
        }

        50% {
            opacity: 1;
        }

        80% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }

    animation: loading 7s infinite;
`;

function loading() {
    return (
        <LoadingContainer>
            <LoadingLetter>Loading . . . </LoadingLetter>
        </LoadingContainer>
    );
}

export default loading;
