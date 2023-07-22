import {Component} from 'react'

import './index.css'

class EditableText extends Component {
  state = {
    text: '',
    isDisplay: false,
  }

  onClickSaveButton = () => {
    this.setState(prevState => ({isDisplay: !prevState.isDisplay}))
  }

  onChangeText = event => {
    this.setState({text: event.target.value})
  }

  render() {
    const {text, isDisplay} = this.state
    console.log(isDisplay)
    return (
      <div className="main-container">
        <div className="editable-text-container">
          <h1 className="main-heading">Editable Text Input</h1>
          <div className="dynamic-container">
            {isDisplay ? (
              <p className="para">{text}</p>
            ) : (
              <input
                value={text}
                onChange={this.onChangeText}
                type="text"
                className="input"
              />
            )}

            <button
              onClick={this.onClickSaveButton}
              type="button"
              className="button"
            >
              {isDisplay ? 'Edit' : 'Save'}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default EditableText
