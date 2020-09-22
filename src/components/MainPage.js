import React, { useState, useEffect } from "react";
import "./MainPage.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import { chooseQuestion } from "../Store/actions";

const MainPage = ({ symbols, chooseQuestion }) => {
  const [symbol, setSymbol] = useState("");
  const [disableSymbol, setDisableSymbol] = useState(false);

  useEffect(() => {
    chooseQuestion();
  }, [chooseQuestion]);

  const acceptButton = (label) => {
    return (
      <div className="accept_button">
        <Button size="small" variant="outlined" onClick={handleClick}>
          {label}
        </Button>
      </div>
    );
  };
  ///////////////////// HANDLERS
  const handleClick = () => {
    markSymbol(symbol.toLowerCase(), symbols.choice);
  };

  const handleClickDalej = () => {
    chooseQuestion();
    setDisableSymbol(false);
    setSymbol("");
  };

  const handleSymbolChange = (event) => {
    setSymbol(event.target.value);
  };

  const handleSubmit = (event) => {
    markSymbol(symbol.toLowerCase(), symbols.choice);
    event.preventDefault();
  };

  const wartosciowosc = (renderedSymbol) => {
    return (
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "20px" , flexDirection: 'column', }}
      >
        <div style={{display: 'flex', alignSelf: 'center', paddingBottom: '20px', color:" green"}}>
          {renderedSymbol.toString()}
        </div>
        
        <div className="accept_button">
          <Button size="small" variant="outlined" onClick={handleClickDalej}>
            DALEJ
          </Button>
        </div>
      </div>
    );
  };

  //////////// MARK SYMBOL
  const markSymbol = (symbol, renderedSymbol) => {
    if (symbol !== renderedSymbol.symbol) {
      chooseQuestion();
      setDisableSymbol(false);
      setSymbol("");
    } else {
      setDisableSymbol(true);
      wartosciowosc(renderedSymbol);
    }
  };
  console.log(symbols);
  return (
    <div className="mainPage">
      <div className="symbol_name">{symbols.choice.title}</div>
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

        {disableSymbol
          ? wartosciowosc(symbols.choice.value)
          : acceptButton("ZATWIERDŹ")}
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  symbols: state.symbols,
});

export default connect(mapStateToProps, {
  chooseQuestion,
})(MainPage);
