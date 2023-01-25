import styled from "styled-components";

export const CardContainer = styled.div`
  width: 300px;
  height: 120px;
  border: 1px solid #3294f8;
  border-radius: 8px;
  background: #071422;
  color: white;
  padding-top: 20px;

  & > header {
    font-size: 16px;
    display: flex;
    justify-content: center;
  }

  & > div {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    height: 85%;
    align-items: flex-end;
    padding: 20px;
    & > span {
      font-size: 36px;
    }
  }
`;
