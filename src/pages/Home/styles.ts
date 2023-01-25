import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 85%;
  margin-top: 15px;
  background: #0b1b2b;
  height: 100%;
  border-radius: 8px;
  border: 1px solid #232863;
`;

export const ButtonDiv = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;

  &:hover {
    cursor: pointer;
  }
  svg {
    color: white;
  }
`;

export const TitleDiv = styled.div`
  margin-top: 10px;
  font-size: 24px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 60px;
  color: white;
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  width: 100%;
  padding: 30px 60px 60px 100px;
  height: 100%;
  color: white;
  flex-wrap: wrap;
`;

export const SummaryContainer = styled.div`
  width: 85%;
  border-radius: 8px;
  margin-top: 15px;
  background: #0b1b2b;
  height: 250px;
  color: white;
  padding: 0 30px 15px 30px;
  border: 1px solid #232863;

  & > div:nth-child(1) {
    margin-top: 20px;
    font-size: 24px;
    font-weight: 600;
    display: flex;
    justify-content: center;
  }
`;

export const CardOverViewContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;
  height: 75%;
  justify-content: center;
`;
