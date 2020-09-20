import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { chooseQuestion } from "../Store/actions";
import {markQuestionWrong} from "../Store/actions"
import {removeFromAllData} from "../Store/actions"

const MainPage = (props) => {
  const [symbol, setSymbol] = useState("");
    const [show, setShow] = useState(false);

  useEffect(() => {
    props.chooseQuestion();
  }, []);

  const acceptButton = () => {
    return (
      <div className="accept_button">
        <Button
          size="small"
          variant="outlined"
          onClick={() =>
            markSymbol(symbol.toLowerCase(), props.symbols.choice)
          }
        >
          Zatwierdź
        </Button>
      </div>
    );
  };

  const handleChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleSubmit = (event) => {
    markSymbol(symbol.toLowerCase(), props.symbols.choice);
    event.preventDefault();
  };

  const markSymbol = (symbol, renderedSymbol) => {
    if (symbol !== renderedSymbol.symbol) {
      props.chooseQuestion();
      props.markQuestionWrong(renderedSymbol)
      props.removeFromAllData(renderedSymbol)
      setSymbol("");
    } else {
      //TODO CO JEŚLI POPRAWNY INPUT
    }
  };

  const valueInput = () => {
    return (
      <div className="value_input">
        <TextField
          id="outlined-basic"
          label="Wartościowość"
          variant="outlined"
          color="primary"
        />
      </div>
    );
  };

  return (
    <div className="mainPage">
      <div className="score"> poprawne / błędne /wszystkie</div>
      <div className="symbol_name">{props.symbols.choice.title}</div>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <div className="symbol_input">
          <TextField
            id="outlined-basic"
            label="Symbol"
            variant="outlined"
            color="primary"
            inputProps={{ maxLength: 2 }}
            onChange={handleChange}
            value={symbol}
            
          />
        </div>
        {acceptButton()}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  symbols: state.symbols,
});

export default connect(mapStateToProps, { chooseQuestion, markQuestionWrong, removeFromAllData })(MainPage);
