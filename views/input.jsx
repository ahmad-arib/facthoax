import React from 'react';

export default React.createClass({
  propTypes: {
    data: React.PropTypes.object,
    onClassify: React.PropTypes.func.isRequired,
  },

  getDefaultProps() {
    return { text: '' };
  },

  getInitialState() {
    return { text: '' };
  },

  /**
   * When pressing the Ask button
   */
  onSubmit() {
    this.props.onClassify(this.state.text);
  },

  /**
   * On sample question click
   */
  onSampleQuestionClick(e) {
    this.setState({ text: e.target.text });
    this.props.onClassify(e.target.text);
  },

  /**
   * During changes to the text input
   */
  handleInputChange(e) {
    this.setState({ text: e.target.value });
  },

  /**
   * On Input text key press
   */
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.props.onClassify(this.state.text);
    }
  },
  render() {
    return (
      <div>
        <h2 className="base--h2">Ask a question about the News is Fact or HOAX </h2>
        <p className="base--p" >Watch the Natural Language Classifier
          categorize your news reliability. In this demo, the classifier is
          trained to determine whether the news title is related
          to <code className="base--code">fact</code> or
          &nbsp;<code className="base--code">hoax</code>.
          The output includes
          the top classification and a confidence score.
        </p>
        <div className="question-input">
          <div className="question-input--input-container">
            <input
              type=""
              autoFocus
              value={this.state.text}
              onChange={this.handleInputChange}
              onKeyPress={this.handleKeyPress}
              id="question"
              placeholder="Enter a news title or Try a sample question below"
              className="base--input question-input--input"
              required="true"
            />
          </div>
          <div className="question-input--button-container">
            <button
              disabled={this.state.text.trim().length === 0}
              onClick={this.onSubmit}
              className="base--button question-input--submit-button"
            >
              Check Fact/Hoax
            </button>
          </div>
        </div>
        <h3 className="base--h3">Sample title</h3>

        <div className="sample-questions">
          <div className="sample-questions--left">
            <ul className="base--ul">
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Trump is president
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Turkey President say Hitler is bad person
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Muslim terrorize Berlin
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  India Launch Renewable Energy Funding
                </a>
              </li>
              <li className="base--li">
                <a
                  className="base--a"
                  onClick={this.onSampleQuestionClick}
                >
                  Japanese military land in Sudan
                </a>
              </li>
            </ul>
          </div>
          <div className="sample-questions--right">
            <p className="base--p">The classifier often scores well with terms that it hasn't
              been trained on.
            </p>
          </div>
        </div>
      </div>
    );
  },
});
