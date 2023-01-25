import styled from "styled-components";

export const CardContainer = styled.div`
  color: white!important;
  width: 300px;
  height: 160px;
  background: #1c2f41;
  background: linear-gradient(90deg, #5865f2 1%, #1c2f41 1%);
  border-radius: 8px;
  padding: 20px;
`;

export const ClientTitle = styled.header<{ hasActiveCampaings?: boolean }>`
  display: flex;
  flex-direction: column;

  & > div:first-child {
    max-height: 20px;
    overflow-y: hidden;
    font-size: 12px;
    font-weight: 200;
    width: 100%;
    display: flex;
    justify-content: space-between;

    span {
      height: 8px;
      width: 8px;
      background: ${(props) => (props.hasActiveCampaings ? "#AAFF00" : "red")};
      border: none;
      border-radius: 4px;
    }
  }

  & > div:last-child {
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
