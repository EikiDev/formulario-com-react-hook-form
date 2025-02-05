import styled from "styled-components";

export const InfoContainer = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    gap: .5rem;

    @media (min-width: 768px) {
        width: 50%;
        margin-right: 4.5rem;
    }
`;

export const Title = styled.h2`
    font-weight: 900;
    font-size: 1.25rem;
    text-transform: uppercase;

    @media (min-width: 992px) {
        font-size: 1.5rem;
    }

    @media (min-width: 1200px) {
        font-size: 1.8rem;
    }
`;

export const Paragraph = styled.p`
    font-size: 0.938rem;

    @media (min-width: 992px) {
        font-size: 1rem;
    }

    @media (min-width: 1200px) {
        font-size: 1.2rem;
    }
`;