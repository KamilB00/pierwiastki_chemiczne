const initialState = {
  allData: [
    {
      title: "Antymon",
      symbol: "sb",
      value: [3, 5],
      correct: null,
    },
    {
      title: "Arsen",
      symbol: "as",
      value: [3, 5],
      correct: null,
    },
    {
      title: "Azot",
      symbol: "n",
      value: [1, 2, 3, 4, 5],
      correct: null,
    },
    {
      title: "Bar",
      symbol: "ba",
      value: [2],
      correct: null,
    },
    {
      title: "Bizmut",
      symbol: "bi",
      value: [3, 5],
      correct: null,
    },
    {
      title: "Brom",
      symbol: "br",
      value: [1, 3, 5, 7],
      correct: null,
    },
    {
      title: "Chlor",
      symbol: "cl",
      value: [1, 3, 5, 7],
      correct: null,
    },
    {
      title: "Chrom",
      symbol: "cr",
      value: [2, 3, 6],
      correct: null,
    },
    {
      title: "Cyna",
      symbol: "sn",
      value: [2, 4],
      correct: null,
    },
    {
      title: "Cynk",
      symbol: "zn",
      value: [2],
      correct: null,
    },
    {
      title: "Fosfor (biały)",
      symbol: "p",
      value: [3, 5],
      correct: null,
    },
    {
      title: "Glin",
      symbol: "al",
      value: [3],
      correct: null,
    },
    {
      title: "Jod",
      symbol: "i",
      value: [1, 3, 5, 7],
      correct: null,
    },
    {
      title: "Krzem",
      symbol: "si",
      value: [2, 4],
      correct: null,
    },
    {
      title: "Mangan",
      symbol: "mn",
      value: [2, 3, 4, 6, 7],
      correct: null,
    },
    {
      title: "Maganez",
      symbol: "mg",
      value: [2],
      correct: null,
    },
    {
      title: "Miedź",
      symbol: "cu",
      value: [1, 2],
      correct: null,
    },
    {
      title: "Nikiel",
      symbol: "ni",
      value: [2, 3],
      correct: null,
    },
    {
      title: "Ołów",
      symbol: "pb",
      value: [2, 4],
      correct: null,
    },
    {
      title: "Potas",
      symbol: "k",
      value: [1],
      correct: null,
    },
    {
      title: "Rtęć",
      symbol: "hg",
      value: [1, 2],
      correct: null,
    },
    {
      title: "Siarka",
      symbol: "s",
      value: [2, 4, 6],
      correct: null,
    },
    {
      title: "Sód",
      symbol: "na",
      value: [1],
      correct: null,
    },
    {
      title: "Srebro",
      symbol: "ag",
      value: [1, 2],
      correct: null,
    },
    {
      title: "Tlen",
      symbol: "o",
      value: [2],
      correct: null,
    },
    {
      title: "Wapń",
      symbol: "ca",
      value: [2],
      correct: null,
    },
    {
      title: "Węgiel",
      symbol: "c",
      value: [2, 4],
      correct: null,
    },
    {
      title: "Wodór",
      symbol: "h",
      value: [1],
      correct: null,
    },
    {
      title: "Żelazo",
      symbol: "fe",
      value: [2, 3],
      correct: null,
    },
  ],
  correctAnswers: [],
  wrongAnswers: [],
  choice: {},
  showResults: "",
};

const symbols = (state = initialState, action) => {
  console.log("jest");

  switch (action.type) {
    case "CHOOSE_QUESTION":
      {
        var renderedIndex = Math.floor(
          Math.random() * state.allData.length + 0
        );
        if (state.allData.length > 0) {
          return {
            ...state,
            choice: state.allData[renderedIndex],
          };
        } else if (
          state.allData.length === 0 &&
          state.wrongAnswers.length > 0
        ) {
          return {
            choice: state.wrongAnswers[renderedIndex],
          };
        } else if (
          state.allData.length === 0 &&
          state.wrongAnswers.length === 0
        ) {
          return {
            showResults: "SHOW_RESULT",
          };
        }
      }
      break;

    case "MARK_QUESTION_AS_CORRECT":
      {
      }

      break;
    case "MARK_QUESTION_AS_WRONG":
      {
        if (state.allData.includes(action.choice)) {
          return {
            ...state,
            wrongAnswers: state.wrongAnswers.concat({
              ...action.choice,
              correct: false,
            }),
          };
        }
        
      }
      break;

    case "REMOVE_FROM_ALLDATA": {
      return {
        ...state,
        allData: state.allData.filter(
          (question) => question.symbol !== action.choice.symbol
        ),
      };
    }
    default:
      return state;
  }
};
export default symbols;
