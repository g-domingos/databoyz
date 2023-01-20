import styled from "styled-components";

export const CardContainer = styled.div`
  width: 270px;
  height: 160px;
  background: #1c2f41;
  background: linear-gradient(90deg, #5865F2 1%, #1c2f41 1%);
  border-radius: 8px;
  padding: 20px;
`;

export const ClientTitle = styled.header`
  display: flex;
  flex-direction: column;

  & > label:first-child {
    max-height: 20px;
    overflow-y: hidden;
    font-size: 12px;
    font-weight: 200;
  }

  & > label:last-child {
    font-size: 16px;
    font-weight: 600;
    max-height: 18px;
    overflow-y: hidden;
  }
`;

export const Table = styled.table`
  margin-top: 15px;
  width: 100%;
  td {
    font-size: 12px;
  }
`;
