import styled, { css } from "styled-components";

export const InputWrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input<{ $isError?: boolean, $isFulfilled?: boolean }>`
    font-weight: 700;
    font-size: 0.938rem;
    padding: 0.625rem;
    border: 1px solid #000;
    border-radius: 5px;
    outline: none;

    ${({ $isError }) => {
        if ($isError) return css`
            border: 1px solid #F52E2E;
    `}}

    ${({ $isFulfilled }) => {
        if ($isFulfilled) return css`
            border: 1px solid #00C22B;
        `
    }}
`;

export const Alert = styled.span`
    position: absolute;
    bottom: 0;
    transform: translateY(100%);
    font-size: .5rem;
    color: #F52E2E;
`;