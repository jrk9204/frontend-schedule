import styled from "styled-components";
import { ButtonsProps } from "../../data/types";
import ButtonAtom from "../atoms/button";

const ButtonContainer = styled.div`
    text-align: right;
    margin-top: 1rem;
`;

function buttonGroup({ handleReset, handleUpdate }: ButtonsProps) {
    return (
        <ButtonContainer>
            <ButtonAtom
                color="#707070"
                backgroundColor="#f0f0f0"
                handleFunction={handleReset}
                title="cancle"
            />
            <ButtonAtom
                color="#eaeaea"
                backgroundColor="#2202f7"
                handleFunction={handleUpdate}
                title="submit"
            />
        </ButtonContainer>
    );
}

export default buttonGroup;
