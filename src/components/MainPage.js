import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { chooseQuestion } from "../Store/actions";
import { markQuestionWrong } from "../Store/actions";
import { markQuestionCorrect } from "../Store/actions";
import { removeFromAllData } from "../Store/actions";

var mistakeValueCounter = 0;

const MainPage = (props) => {
  const [symbol, setSymbol] = useState("");
  const [value, setValue] = useState("");
  const [valueArray, setValueArray] = useState([]);
  const [disableSymbol, setDisableSymbol] = useState(false);
  const [error, setError] = useState(false);
  const [flip, setFlip] = useState(false);

  useEffect(() => {
    props.chooseQuestion();
  }, [flip]);

  const acceptButton = () => {
    return (
      <div className="accept_button">
        <Button size="small" variant="outlined" onClick={handleClick}>
          Zatwierdź
        </Button>
      </div>
    );
  };
  ///////////////////// HANDLERS
  const handleClick = () => {
    if (disableSymbol) {
      markValue(value, props.symbols.choice);
    } else markSymbol(symbol.toLowerCase(), props.symbols.choice);
  };

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleValueChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    if (disableSymbol) {
      event.preventDefault();
    } else {
      markSymbol(symbol.toLowerCase(), props.symbols.choice);
      event.preventDefault();
    }
  };

  //////////// MARK VALUE
  const markValue = (value, renderedValue) => {
    if (
      renderedValue.value.toString().includes(value.toString()) &&
      !valueArray.toString().includes(value)
    ) {
      setValueArray([...valueArray, value]);
      setError(false);
      setValue("");
    } else if (valueArray.length === renderedValue.value.length) {
      if (mistakeValueCounter === 0) {
        props.markQuestionCorrect(renderedValue);
      }
      setFlip(!flip);
      mistakeValueCounter = 0;
      setSymbol("");
      setDisableSymbol(false);
      setValueArray([]);
      setValue("")
    } else {
      mistakeValueCounter++;
      setError(true);
      setValue("");
      mistakeValueCounter++;
      var arr = props.symbols.wrongAnswers.filter(
        (wrong) => wrong.title === renderedValue.title
      );
      if (arr.length !== 0) {
        mistakeValueCounter++;
        console.log("is already there");
      } else {
        mistakeValueCounter++;
        props.markQuestionWrong(renderedValue);
      }
    }
  };
  //////////// MARK SYMBOL
  const markSymbol = (symbol, renderedSymbol) => {
    if (symbol !== renderedSymbol.symbol) {
      console.log(renderedSymbol);
      // console.log(props.symbols.allData.length);
      props.markQuestionWrong(renderedSymbol);

      if (props.symbols.allData.length > 1) {
        props.removeFromAllData(renderedSymbol);
        props.chooseQuestion();
      }
      console.log("los");
      props.chooseQuestion();
      setSymbol("");
    } else {
      setDisableSymbol(true);
    }
    if (
      props.symbols.allData === null &&
      props.symbols.wrongAnswers.length > 0
    ) {
      if (symbol !== renderedSymbol.symbol) {
        props.chooseQuestion();
        setSymbol("");
      } else {
        setDisableSymbol(true);
      }
    }
  };
  ////////////
  const valueInput = () => {
    return (
      <div className="value_input">
        <TextField
          id="outlined-basic"
          label="Wartościowość"
          variant="outlined"
          color="primary"
          onChange={handleValueChange}
          value={value}
          inputProps={{ maxLength: 1 }}
          error={error}
        />
        {acceptButton()}
      </div>
    );
  };
  //////////////// RENDERED VALUES
  const returnedList = valueArray.map((singleArrayValue) => (
    <div className="value_input">
      <TextField
        id="outlined-basic"
        label="Wartościowość"
        variant="outlined"
        color="primary"
        value={singleArrayValue}
        inputProps={{ maxLength: 1 }}
        diasble={true}
      />
    </div>
  ));

  return (
    <div className="mainPage">
      <div className="score">
        {/* {" "}
        poprawne: {props.symbols.correctAnswers.length} / złe :{" "}
        {props.symbols.wrongAnswers.length} /wszystkie:{" "}
        {props.symbols.allData.length} */}
      </div>
      <div className="symbol_name">{props.symbols.choice.title}</div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="symbol_input">
          <TextField
            id="outlined-basic"
            label="Symbol"
            variant="outlined"
            color="primary"
            inputProps={{ maxLength: 2 }}
            onChange={handleSymbolChange}
            value={symbol}
            disabled={disableSymbol}
          />
        </div>

        {disableSymbol ? valueInput() : acceptButton()}

        {returnedList}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  symbols: state.symbols,
});

export default connect(mapStateToProps, {
  chooseQuestion,
  markQuestionWrong,
  markQuestionCorrect,
  removeFromAllData,
})(MainPage);
