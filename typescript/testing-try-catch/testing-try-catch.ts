async function foo() {
  throw new Error("I have first level error")
}

(async function () {

  try {
    await foo()
  } catch (err) {
    console.log({err})
  }
})()
