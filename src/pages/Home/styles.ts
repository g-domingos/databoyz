import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  justify-content: center;
  height: 100%;
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 93%;
  border-radius: 8px;
  margin-top: 15px;
  background: #0b1b2b;
  height: 100%;

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
  padding: 30px 60px 60px 60px;
  height: 100%;
  color: white;
  flex-wrap: wrap;
`;
