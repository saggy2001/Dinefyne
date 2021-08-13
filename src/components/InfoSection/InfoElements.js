import styled from "styled-components";

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) =>
    lightBg ? "var(--white-color)" : "var(--primary-color)"};
  padding-left: var(--margin);
  padding-right: var(--margin);
  padding-top: 8rem;
  @media screen and (max-width: 768px) {
    padding-top: 6rem;
  }
  @media screen and (max-width: 480px) {
    padding-top: 4rem;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 100%;
  /* margin: 10rem 0; */
  /* width: 100%; */
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  /* padding: 0 var(--); */
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
  @media screen and (max-width: 480px) {
    padding: 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  padding-top: 0;
  padding-bottom: 60px;
`;

export const TopLine = styled.p`
  color: var(--secondary-color);
  opacity: 0.8;
  font-size: 16px;
  line-height: 16px;
  font-weight: 500;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const Heading = styled.h1`
  width: 600px;
  margin-bottom: 24px;
  font-size: 55px;
  line-height: 1.1;
  font-weight: bold;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#010606")};
  @media screen and (max-width: 768px) {
    font-size: 45px;
    width: 100%;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
    width: 100%;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  opacity: 0.7;
  margin-bottom: 30px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? "#010606" : "#fff")};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
