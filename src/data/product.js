export default [
  {
    status: "success",
    data: [
      {
        id: 1,
        name: "Cheese",
        details: "200g cheese block",
        storage: "Store in a cool place (between 5C and 15C)",
        nutrition: [
          {
            class: "Protein",
            value: "25g",
          },
          {
            class: "Carbohydrates",
            value: "1.3g",
          },
          {
            class: "Fat",
            value: "33g",
          },
          {
            class: "Salt",
            value: "1g",
          },
        ],
        price: 10,
      },
      {
        id: 2,
        name: "Milk",
        details: "200ml milk bottle",
        storage: "Store in a cool place (between 5C and 15C)",
        nutrition: [
          {
            class: "Protein",
            value: "25g",
          },
          {
            class: "Carbohydrates",
            value: "1.3g",
          },
          {
            class: "Fat",
            value: "33g",
          },
          {
            class: "Salt",
            value: "1g",
          },
        ],
        price: 5,
      },
      {
        id: 1,
        name: "Tomato",
        details: "1 piece of tomato",
        storage: "Store in a cool place (between 5C and 15C)",
        nutrition: [
          {
            class: "Protein",
            value: "25g",
          },
          {
            class: "Carbohydrates",
            value: "1.3g",
          },
          {
            class: "Fat",
            value: "33g",
          },
          {
            class: "Salt",
            value: "1g",
          },
        ],
        price: 2.75,
      },
      {
        id: 1,
        name: "Pineapple",
        details: "500g pineapple",
        storage: "Store in a cool place (between 5C and 15C)",
        nutrition: [
          {
            class: "Protein",
            value: "25g",
          },
          {
            class: "Carbohydrates",
            value: "1.3g",
          },
          {
            class: "Fat",
            value: "33g",
          },
          {
            class: "Salt",
            value: "1g",
          },
        ],
        price: 3.25,
      },
    ],
  },
];

// Matchs
// A request on Matches endpoint returns all Matches information

// Http Metod : GET http://api.cup2022.ir/api/v1/match

// A request on Team endpoint returns all information match's very day [day match's]

// Http Metod : GET http://api.cup2022.ir/api/v1/bymatch/{id}

// A request on Team endpoint returns all information about the Match [match]

// Http Metod : GET http://api.cup2022.ir/api/v1/match/{id}

// A request on Team endpoint returns all information about the Match [date match]

// Http Metod : POST http://api.cup2022.ir/api/v1/bydate

// {"date":"12/2/2022"}
