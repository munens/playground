"use strict";
(function () {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('hello');
        }, 3000);
    });
    promise
        .then((res) => {
        console.log({ res });
    })
        .catch((err) => {
        console.log({ err });
    })
        .finally(() => {
        console.log('finally');
    });
})();
