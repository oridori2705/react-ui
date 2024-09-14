import styled from '@emotion/styled'

export const RootContainer = styled.div`
  width: 500px;
  height: 700px;
  margin: 20px auto;
  background-color: #d9d9f1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  border-radius: 8px;
`

export const TextInputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-radius: 8px;
  border: 1px solid gray;
`

export const InputSubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  background-color: #f5ff6b;
  color: #000000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ece92a;
  }
`

export const BubbleContainer = styled.div`
  position: relative;
  align-self: flex-end;
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px 15px;
  margin: 10px;
  max-width: 300px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  /* 말풍선 꼬리 스타일 */
  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 100%;
    margin-top: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent transparent #f1f1f1;
  }
`

export const BubbleText = styled.p`
  margin: 0;
  color: #333;
  white-space: pre-wrap;
`
