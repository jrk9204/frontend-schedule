import styled from "styled-components";
import { HandleBtn } from "../../data/types";

const Button = styled.button<{ color: string; backgroundColor: string }>`
    border: none;
    margin-left: 1rem;
    background-color: ${(props) => props.backgroundColor};
    font-weight: bold;
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    cursor: pointer;
    color: ${(props) => props.color};
`;

function button({ handleFunction, title, color, backgroundColor }: HandleBtn) {
    return (
        <Button backgroundColor={backgroundColor} color={color} onClick={handleFunction}>
            {title}
        </Button>
    );
}

export default button;
