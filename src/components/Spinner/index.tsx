import { StyledSpinner } from './Spinner.styled'

interface SpinnerProps {
  width?: number
}

const Spinner = ({ width = 25 }: SpinnerProps) => {
  return (
    <StyledSpinner
      viewBox="0 0 50 50"
      width={width}>
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="none"
      />
    </StyledSpinner>
  )
}

export default Spinner
