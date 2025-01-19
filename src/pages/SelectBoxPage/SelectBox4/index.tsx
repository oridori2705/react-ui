import styled from '@emotion/styled'
import data from '../data'

const Dropdown4 = () => {
  return (
    <>
      <h3>4. HTML select 활용</h3>
      <SelectBox>
        {data.map(({ id, text }) => (
          <option
            value={text}
            key={id}>
            {text}
          </option>
        ))}
      </SelectBox>
    </>
  )
}

export default Dropdown4

const SelectBox = styled.select`
  box-sizing: border-box;
  width: 400px;
  border-radius: 8px;
  border: 1px solid #ccc;
  background-color: #c35;
  padding: 10px 15px;
  font-size: 1.2rem;
  color: black;
  appearance: none;

  option {
    background-color: #fff;
    font-size: 1rem;
  }
`
