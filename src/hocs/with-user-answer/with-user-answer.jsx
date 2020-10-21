import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {questionGenreProp} from "../../components/question-genre-screen/question-genre.prop";

const withUserAnswer = (Component) => {
  class WithUserAnswer extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        answers: new Array(props.question.answers.length).fill(false),
      };

      this._handleAnswer = this._handleAnswer.bind(this);
      this._handleChange = this._handleChange.bind(this);
    }

    _handleAnswer() {
      const {onAnswer, question} = this.props;
      const {answers} = this.state;

      onAnswer(question, answers);
    }

    _handleChange(i, value) {
      const {answers} = this.state;

      const userAnswers = answers.slice(0);
      userAnswers[i] = value;

      this.setState({
        answers: userAnswers,
      });
    }

    render() {
      const {answers} = this.state;

      return (
        <Component {...this.props} userAnswers={answers} onAnswer={this._handleAnswer} onChange={this._handleChange}/>
      );
    }
  }

  WithUserAnswer.propTypes = {
    question: questionGenreProp,
    onAnswer: PropTypes.func.isRequired,
  };

  return WithUserAnswer;
};

export default withUserAnswer;
