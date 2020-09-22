const initialState = {
  allData: [
    {
      title: "Antymon",
      symbol: "sb",
      value: [3, 5],
    },
    {
      title: "Arsen",
      symbol: "as",
      value: [3, 5],
    },
    {
      title: "Azot",
      symbol: "n",
      value: [1, 2, 3, 4, 5],
    },
    {
      title: "Bar",
      symbol: "ba",
      value: [2],
    },
    {
      title: "Bizmut",
      symbol: "bi",
      value: [3, 5],
    },
    {
      title: "Brom",
      symbol: "br",
      value: [1, 3, 5, 7],
    },
    {
      title: "Chlor",
      symbol: "cl",
      value: [1, 3, 5, 7],
    },
    {
      title: "Chrom",
      symbol: "cr",
      value: [2, 3, 6],
    },
    {
      title: "Cyna",
      symbol: "sn",
      value: [2, 4],
    },
    {
      title: "Cynk",
      symbol: "zn",
      value: [2],
    },
    {
      title: "Fosfor (biały)",
      symbol: "p",
      value: [3, 5],
    },
    {
      title: "Glin",
      symbol: "al",
      value: [3],
    },
    {
      title: "Jod",
      symbol: "i",
      value: [1, 3, 5, 7],
    },
    {
      title: "Krzem",
      symbol: "si",
      value: [2, 4],
    },
    {
      title: "Mangan",
      symbol: "mn",
      value: [2, 3, 4, 6, 7],
    },
    {
      title: "Magnez",
      symbol: "mg",
      value: [2],
    },
    {
      title: "Miedź",
      symbol: "cu",
      value: [1, 2],
    },
    {
      title: "Nikiel",
      symbol: "ni",
      value: [2, 3],
    },
    {
      title: "Ołów",
      symbol: "pb",
      value: [2, 4],
    },
    {
      title: "Potas",
      symbol: "k",
      value: [1],
    },
    {
      title: "Rtęć",
      symbol: "hg",
      value: [1, 2],
    },
    {
      title: "Siarka",
      symbol: "s",
      value: [2, 4, 6],
    },
    {
      title: "Sód",
      symbol: "na",
      value: [1],
    },
    {
      title: "Srebro",
      symbol: "ag",
      value: [1, 2],
    },
    {
      title: "Tlen",
      symbol: "o",
      value: [2],
    },
    {
      title: "Wapń",
      symbol: "ca",
      value: [2],
    },
    {
      title: "Węgiel",
      symbol: "c",
      value: [2, 4],
    },
    {
      title: "Wodór",
      symbol: "h",
      value: [1],
    },
    {
      title: "Żelazo",
      symbol: "fe",
      value: [2, 3],
    },
  ],

  choice: {},
};

const symbols = (state = initialState, action) => {
  switch (action.type) {
    case "CHOOSE_QUESTION":
      var renderedIndex = Math.floor(Math.random() * state.allData.length);
      return {
        ...state,
        choice: state.allData[renderedIndex],
      };

    default:
      return state;
  }
};
export default symbols;
