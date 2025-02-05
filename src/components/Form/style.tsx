import styled from "styled-components";

export const Form = styled.form`
    background-color: #fff;
    display: flex;
    flex-direction: column;
    gap: 0.938rem;
    padding: 1.25rem;

    @media (min-width: 768px) {
        width: 50%;
    }
`;

export const Alert = styled.span`
    position: relative;

    &::before {
        content: "*";
        position: absolute;
        left: -.45rem;
    }
`;

export const SubmitButton = styled.button`
    cursor: pointer;
    background-color: #3CCC87;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.75rem 7.75rem;
    transition: .2s ease-in-out;

    &:hover {
        background-color: #2ea169;
    }

    &:active {
        background-color: #3CCC87;
    }
`;