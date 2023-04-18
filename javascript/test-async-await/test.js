let i = 0;

const awaitTest = async () => {
    console.log(++i, 'nya');
    // await console.log(++i);
    const x = await ++i;
    // const [x] = await Promise.all([++i]);
    console.log(x);
}

awaitTest();
queueMicrotask(() => {
    console.log(5);
});
awaitTest();