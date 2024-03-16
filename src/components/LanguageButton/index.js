import './index.css'

const LanguageButton = props => {
  const {details, onChangeLanguage, activeLanguage} = props
  const {buttonText} = details
  const buttonClassName =
    activeLanguage === buttonText ? 'normalBtn activeBtn' : 'normalBtn'

  const changeLanguage = () => {
    onChangeLanguage(buttonText)
  }
  return (
    <li className="list-item">
      <button
        type="button"
        className={buttonClassName}
        onClick={changeLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default LanguageButton
