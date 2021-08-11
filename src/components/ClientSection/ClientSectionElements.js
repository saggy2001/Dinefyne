import styled from "styled-components";

export const ClientContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 24px;
`;

export const ClientContent = styled.div`
  width: 100%;
  max-width: 70rem;
  justify-content: space-between;
  display: flex;
  /* padding-top: 40px;
  padding-bottom: 40px; */
  /* padding: 10rem 0; */
  align-items: center;
  flex-direction: column;
  /* @media screen and (max-width: 768px) {
    padding: 6rem 0;
  }
  @media screen and (max-width: 480px) {
    padding: 4rem 0;
  } */
`;

export const ConatinerTitle = styled.p`
  /* color: rgb(11, 20, 38); */
  color: var(--secondary-color);
  font-weight: bold;
  text-align: center;
  font-size: 35px;
  @media screen and (max-width: 768px) {
    font-size: 28px;
  }
  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  /* -webkit-box-pack: justify; */
  justify-content: space-around;
  width: 100%;
  margin-top: 32px;
`;

export const ImgElement = styled.img`
  user-select: none;
  box-sizing: border-box;
  height: 100px;
  /* padding-right: 24px; */
  animation-duration: 1s;
  animation-name: fadeIn;
  width: 16.6667%;
  margin-bottom: 0px;
  border-radius: 0px;
  object-fit: contain;

  @media screen and (max-width: 768px) {
    width: 33.3333%;
  }
`;
