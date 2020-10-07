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
    {
      title: "Aktyn",
      symbol: "ac",
      value: [3],
    },
    {
      title: "Ameryk",
      symbol: "am",
      value: [3, 4, 5, 6],
    },
    {
      title: "Argon",
      symbol: "ar",
      value: [0],
    },
    {
      title: "Astat",
      symbol: "at",
      value: [1, 2, 5, 6],
    },
    {
      title: "Berkel",
      symbol: "bk",
      value: [3, 4],
    },
    {
      title: "Beryl",
      symbol: "be",
      value: [2],
    },
    {
      title: "Bor",
      symbol: "b",
      value: [3],
    },
    {
      title: "Cer",
      symbol: "ce",
      value: [1, 3, 4],
    },
    {
      title: "Cez",
      symbol: "cs",
      value: [1],
    },
    {
      title: "Cyrkon",
      symbol: "zr",
      value: [4],
    },
    {
      title: "Dyspoz",
      symbol: "dy",
      value: [3],
    },
    {
      title: "Einstein",
      symbol: "es",
      value: [3],
    },
    {
      title: "Erb",
      symbol: "er",
      value: [3],
    },
    {
      title: "Europ",
      symbol: "eu",
      value: [2, 3],
    },
    {
      title: "Ferm",
      symbol: "fm",
      value: [3],
    },
    {
      title: "Fluor",
      symbol: "f",
      value: [1],
    },
    {
      title: "Frans",
      symbol: "fr",
      value: [1],
    },
    {
      title: "Gadolin",
      symbol: "gd",
      value: [3],
    },
    {
      title: "Gal",
      symbol: "ga",
      value: [1, 3],
    },
    {
      title: "German",
      symbol: "ge",
      value: [4],
    },
    {
      title: "Hafn",
      symbol: "hf",
      value: [4],
    },
    {
      title: "Hel",
      symbol: "he",
      value: [0],
    },
    {
      title: "Holm",
      symbol: "ho",
      value: [3],
    },
    {
      title: "Ind",
      symbol: "in",
      value: [1, 3],
    },
    {
      title: "Iryd",
      symbol: "ir",
      value: [3, 4],
    },
    {
      title: "Iterb",
      symbol: "yb",
      value: [3],
    },
    {
      title: "Itr",
      symbol: "y",
      value: [3],
    },
    {
      title: "Kadm",
      symbol: "cd",
      value: [2],
    },
    {
      title: "Kaliforn",
      symbol: "cf",
      value: [1, 3, 4],
    },
    {
      title: "Kiur",
      symbol: "cm",
      value: [2, 3],
    },
    {
      title: "Kobalt",
      symbol: "co",
      value: [2, 3],
    },
    {
      title: "Krypton",
      symbol: "kr",
      value: [0],
    },
    {
      title: "Ksenon",
      symbol: "xe",
      value: [0],
    },
    {
      title: "Lantan",
      symbol: "la",
      value: [3],
    },
    {
      title: "Lawrens",
      symbol: "lr",
      value: [3],
    },
    {
      title: "Lit",
      symbol: "li",
      value: [1],
    },
    {
      title: "Lutet",
      symbol: "lu",
      value: [3],
    },
    {
      title: "Mendelejew",
      symbol: "md",
      value: [3],
    },
    {
      title: "Molibden",
      symbol: "mo",
      value: [4, 6],
    },
    {
      title: "Neodym",
      symbol: "nd",
      value: [3],
    },
    {
      title: "Neon",
      symbol: "ne",
      value: [0],
    },
    {
      title: "Neptun",
      symbol: "np",
      value: [3, 4, 5, 6],
    },
    {
      title: "Niob",
      symbol: "nb",
      value: [3, 5],
    },
    {
      title: "Nobel",
      symbol: "no",
      value: [3],
    },
    {
      title: "Osm",
      symbol: "os",
      value: [3, 4, 8],
    },
    {
      title: "Pallad",
      symbol: "pd",
      value: [2, 4],
    },
    {
      title: "Platyna",
      symbol: "pt",
      value: [2, 4, 6, 7],
    },
    {
      title: "Pluton",
      symbol: "pu",
      value: [3, 4, 5, 6],
    },
    {
      title: "Polon",
      symbol: "po",
      value: [2, 4],
    },
    {
      title: "Prezeodym",
      symbol: "pr",
      value: [3, 4],
    },
    {
      title: "Promet",
      symbol: "pm",
      value: [3],
    },
    {
      title: "Proaktyn",
      symbol: "pa",
      value: [3, 4, 5],
    },
    {
      title: "Rad",
      symbol: "ra",
      value: [2],
    },
    {
      title: "Radon",
      symbol: "rn",
      value: [0],
    },
    {
      title: "Ren",
      symbol: "re",
      value: [2, 4, 6],
    },
    {
      title: "Rod",
      symbol: "rh",
      value: [2, 3],
    },
    {
      title: "Rubid",
      symbol: "rb",
      value: [1],
    },
    {
      title: "Ruten",
      symbol: "ru",
      value: [3, 4, 6, 8],
    },
    {
      title: "Samar",
      symbol: "sm",
      value: [2, 3],
    },
    {
      title: "Selen",
      symbol: "se",
      value: [2, 4, 6],
    },
    {
      title: "Skand",
      symbol: "sc",
      value: [3],
    },
    {
      title: "Stront",
      symbol: "sr",
      value: [2],
    },
    {
      title: "Tal",
      symbol: "tl",
      value: [1, 3],
    },
    {
      title: "Tantal",
      symbol: "ta",
      value: [3, 4],
    },
    {
      title: "Technet",
      symbol: "tc",
      value: [4, 7],
    },
    {
      title: "Tellur",
      symbol: "te",
      value: [2, 4, 6],
    },
    {
      title: "Terb",
      symbol: "tb",
      value: [3, 4],
    },
    {
      title: "Tor",
      symbol: "th",
      value: [3, 4],
    },
    {
      title: "Tul",
      symbol: "tm",
      value: [3],
    },
    {
      title: "Tytan",
      symbol: "ti",
      value: [2, 4],
    },
    {
      title: "Uran",
      symbol: "u",
      value: [3, 4, 6],
    },
    {
      title: "Wanad",
      symbol: "v",
      value: [3, 5],
    },
    {
      title: "Wolfram",
      symbol: "w",
      value: [2, 4, 6],
    },
    {
      title: "złoto",
      symbol: "au",
      value: [1, 2, 3],
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
