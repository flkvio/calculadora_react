import styled from "styled-components";

export const InputContainer = styled.div`
  width: 99%;
  height: 75px;
  background-color: #aafaaa;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin: 0 auto;
  margin-bottom: 5px;
  border: 1px solid #000000;

  font-size: 24px;
  font-family: 'Orbitron', sans-serif;
  input {
    width: 100%;
    height: 75px;
    background-color: transparent;
    border: none;
    outline: none;
    text-align: right;
    font-size: 200%;
    font-family: 'Orbitron', sans-serif;
    margin-right: 1rem;
    input-focus: none;
  }
`;
