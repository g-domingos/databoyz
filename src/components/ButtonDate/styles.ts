import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  position: absolute;
  right: 0;
  top: -60px;
  gap: 5px;
`;

export const Button = styled.button<{
  selected?: boolean;
}>`
  width: 80px;
  border-radius: 8px;
  background: ${(props) => (props.selected ? "#7b96b2" : "transparent")};
  border: 1px solid #3294f8;
  color: white;
`;
