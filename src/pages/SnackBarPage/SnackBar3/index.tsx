import Toast from './Toast'

const SnackBar3 = () => {
  const { show } = Toast()

  return (
    <div>
      <button
        onClick={() => show('로그인이 필요한 서비스입니다.', 'warn-solid')}>
        버튼
      </button>
    </div>
  )
}

export default SnackBar3
