/*
async function foo2() {
  throw new Error("I have second level error")
}

async function foo() {
    try {
        await foo2();
    } catch (err) {
        console.log("catching second level error: ");
        throw err;
    }
}

(async function () {

  try {
    await foo()
  } catch (err) {
    console.log("top level error: ", {err: err?.toString()})
  }

    foo().catch((err) => {
        console.log("top level error in promis catch: ", {err: err?.toString()});
    })
})()
*/

/*
function foo2() {
  throw new Error("I have second level error")
}

function foo() {
    try {
        foo2();
    } catch (err) {
        console.log("catching second level error: ", err?.toString());
       throw err;
    }
}

(function () {

  try {
    foo()
  } catch (err) {
    console.log("top level error: ", {err: err?.toString()})
  }
})()
*/

/*
function foo2() {
  throw new Error("I have second level error")
}

async function foo() {
    try {
        foo2();
    } catch (err) {
        console.log("catching second level error: ", err?.toString());
       throw err;
    }
}

(function () {

  try {
    foo()
  } catch (err) {
    console.log("top level error: ", {err: err?.toString()})
  }
})()

*/

/*
function foo3() {
  throw new Error("I have second level error")
}

async function foo2() {
    try {
        foo3();
    } catch (err) {
        console.log("catching second level error: ", err?.toString());
       throw err;
    }
}

async function foo() {
    try {
       await foo2();
    } catch (err) {
        console.log("catching second level error: ", err?.toString());
       throw err;
    }
}

(function () {

  try {
    foo()
  } catch (err) {
    console.log("top level error: ", {err: err?.toString()})
  }
})()
*/

function foo3() {
  throw new Error("I have second level error")
}

async function foo2() {
    try {
        foo3();
    } catch (err) {
        console.log("catching second level error: ", err?.toString());
       throw err;
    }
}

async function foo() {
    return foo2();
}

(async function () {

  try {
    await foo()
  } catch (err) {
    console.log("top level error: ", {err: err?.toString()})
  }
})()
