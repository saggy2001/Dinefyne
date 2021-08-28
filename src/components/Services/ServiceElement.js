import styled from "styled-components";

export const ServicesContainer = styled.div`
  height: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: var(--primary-color);
  /* opacity: 0.9; */

  @media screen and (max-width: 768px) {
    height: 100%;
    padding: 3rem 0;
  }
  @media screen and (max-width: 480px) {
    height: 100%;
    padding: 1.5rem 0;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 var(--margin);

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  width: 100%;
  /* width: 30%; */
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 160px;
  width: 160px;
  margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  /* color: var(--secondary-color); */
  color: #fff;
  margin-bottom: 45px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
`;

export const ServicesH2 = styled.h2`
  text-align: center;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
`;