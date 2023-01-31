import styled from "styled-components";

export const Container = styled.body`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;

  .title {
    position: absolute;
    color: white;
    z-index: 1;
    font-size: 30px;
    top: -55px;
  }
`;

export const MainBody = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  width: 95%;
  margin-top: 15px;
  background: #0b1b2b;
  height: 110%;
  border-radius: 8px;
  border: 1px solid #232863;
  padding: 40px;

  & > div {
    color: white;
  }
`;

export const OverviewBar = styled.div`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  width: 95%;
  border: 1px solid #232863;
  margin-top: 15px;
  background: #0b1b2b;
  height: 100px;
  color: white;
  padding: 10px;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    label:first-child {
      font-size: 20px;
      font-weight: 10;
    }
    label:last-child {
      font-size: 30px;
      font-weight: 600;
    }
  }
`;
export const ChartsDiv = styled.div`
  width: 80%;
  display: flex;
  gap: 25px;
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
`;

export const TableContainer = styled.div`
  width: 100%;

  /* border: 1px solid red; */
`;

export const Table = styled.table``;

export const Unavailable = styled.div`
  width: 50%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
