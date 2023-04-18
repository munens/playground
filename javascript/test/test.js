const data = [
    [
        {
            "_id" : "63130787f5f9339fe70d5ed5",
            "name" : "Eggs",
            "price" : 200,
            "calories" : 300,
            "enteredAt" : "2022-07-27T23:07:10.000+0000",
            "createdAt" : "2022-09-03T07:51:35.010+0000"
        },
        {
            "_id" : "6313079ff5f9339fe70d5ed6",
            "name" : "Oatmeal",
            "price" : 200,
            "calories" : 300,
            "enteredAt" : "2022-08-01T23:07:10.000+0000",
            "createdAt" : "2022-09-03T07:51:59.219+0000"
        }
    ],
    [
          {
              "_id" : "63130763f5f9339fe70d5ed2",
              "name" : "Rice",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2021-05-20T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:50:59.578+0000"
          },
          {
              "_id" : "63130770f5f9339fe70d5ed3",
              "name" : "Bagels",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2021-11-20T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:51:12.578+0000"
          },
          {
              "_id" : "6313077af5f9339fe70d5ed4",
              "name" : "Cheese",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2021-11-27T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:51:22.260+0000"
          }
      ],
      [
          {
              "_id" : "6313073df5f9339fe70d5ed0",
              "name" : "Chicken",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2017-04-03T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:50:21.959+0000"
          },
          {
              "_id" : "6313074af5f9339fe70d5ed1",
              "name" : "Veal",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2017-04-17T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:50:34.768+0000"
          }
      ],
      [
          {
              "_id" : "6313070ef5f9339fe70d5ece",
              "name" : "Sandwich",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2016-08-12T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:49:34.271+0000"
          },
          {
              "_id" : "6313072af5f9339fe70d5ecf",
              "name" : "Salmon",
              "price" : 200,
              "calories" : 300,
              "enteredAt" : "2016-09-12T23:07:10.000+0000",
              "createdAt" : "2022-09-03T07:50:02.635+0000"
          }
      ]
];


console.log((function(data) {
  return data.reduce((acc, entry) => {
      const enteredAtDate = new Date(entry.enteredAt);
      console.log(entry.enteredAt, enteredAtDate, enteredAtDate.getMonth() + 1)
      const enteredAtMonth = enteredAtDate.getMonth() + 1;

      const prevMonthEntryIndex = acc.findIndex((prevMonthEntry) => prevMonthEntry.month === enteredAtMonth)
      console.log({prevMonthEntryIndex})
      if (prevMonthEntryIndex > -1) {
          const prevMonthEntry = acc[prevMonthEntryIndex];
          console.log({prevMonthEntry, entry})
          prevMonthEntry.entries.push(entry);
          console.log({prevMonthEntry})
          acc[prevMonthEntryIndex] = prevMonthEntry;
          console.log(acc)
          return acc;
      }

      return acc.concat({
          month: enteredAtMonth,
          entries: [entry]
      });

  }, [])
})(data[1]), {depth: null});
