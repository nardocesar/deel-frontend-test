import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  box-sizing: border-box;
`;

export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;

  &:disabled {
    background-color: #eee;
    cursor: not-allowed;
  }
`;

export const List = styled.ul`
  box-sizing: border-box;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 0;
  margin: 0;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  background-color: #fff;
  list-style: none;
`;

export const ListItem = styled.li`
  padding: 8px;
  cursor: pointer;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const MatchedText = styled.span`
  font-weight: bold;
`;
