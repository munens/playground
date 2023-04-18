(async function() {

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello');
    }, 3000)
  });

  try {
    await promise
      .then((res) => {
        console.log({res});
      })
      .catch((err) => {
        console.log({err})
      })
      .finally(() => {
        console.log('finally')
        throw new Error('throw')
      })
      .then((val) => console.log({val}))
      .catch((err2) => console.log({err2}))
      .finally(() => {
        console.log('finally 2')
      });
  } catch (err3) {
    console.log({err3})
  }

})()
