import styled from '@emotion/styled'

export const UiExplanationContainer = styled.section`
  margin-top: 2rem;
  padding: 1.5rem;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  width: 90%;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #f0f0f0;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-5px);
  }

  &::before {
    content: '설명';
    display: block;
    font-size: 1.2rem;
    font-weight: bold;
    color: #555;
    margin-bottom: 1rem;
  }
`
export const StyledCode = styled.code`
  background-color: #f5f5f5;
  padding: 4px 8px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  color: #d6336c;
  border: 1px solid #e1e1e1;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  display: inline-block;
  white-space: pre-wrap;
`
export const StyledStrong = styled.strong`
  font-weight: 600;
  color: #2c3e50;
  background-color: #f1c40f;
  padding: 2px 6px;
  margin: 1px 1px;
  border-radius: 4px;
  display: inline-block;
  line-height: 1.2;
`

export const StyledStrongPositive = styled.strong`
  font-weight: 600;
  color: #2ecc71;
  background-color: #d5f5e3;
  padding: 2px 6px;
  margin: 1px 1px;
  border-radius: 4px;
  display: inline-block;
  line-height: 1.2;
`
export const StyledStrongNegative = styled.strong`
  font-weight: 600;
  color: #c0392b;
  background-color: #f2d7d5;
  padding: 2px 6px;
  margin: 1px 1px;
  border-radius: 4px;
  display: inline-block;
  line-height: 1.2;
`
