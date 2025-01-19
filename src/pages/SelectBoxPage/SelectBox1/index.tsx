import data from '../data'
import Dropdown from './DropDown'

const Dropdown1 = () => {
  return (
    <article>
      <h3>1. 합성 컴포넌트 패턴 + Context API</h3>
      <Dropdown.Provider list={data}>
        <Dropdown.Container>
          <Dropdown.Trigger />
          <Dropdown.List />
        </Dropdown.Container>
      </Dropdown.Provider>
    </article>
  )
}

export default Dropdown1
