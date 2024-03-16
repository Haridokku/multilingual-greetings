import {Component} from 'react'
import LanguageButton from './components/LanguageButton'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here

class App extends Component {
  state = {activeLanguage: languageGreetingsList[0].buttonText}

  onChangeLanguage = language => {
    this.setState({activeLanguage: language})
  }

  filterLanguages = () => {
    const {activeLanguage} = this.state
    const lang = languageGreetingsList.filter(
      each => each.buttonText === activeLanguage,
    )
    return lang[0]
  }

  render() {
    const getActiveLanguage = this.filterLanguages()
    const {imageUrl, imageAltText} = getActiveLanguage
    const {activeLanguage} = this.state
    return (
      <div className="appContainer">
        <div className="contentContainer">
          <h1 className="heading">Multilingual Greetings</h1>
          <ul className="unorderedList">
            {languageGreetingsList.map(each => (
              <LanguageButton
                key={each.id}
                details={each}
                onChangeLanguage={this.onChangeLanguage}
                activeLanguage={activeLanguage}
              />
            ))}
          </ul>
          <div className="activeLanguageDetails">
            <img src={imageUrl} alt={imageAltText} className="imageDetails" />
          </div>
        </div>
      </div>
    )
  }
}

export default App
