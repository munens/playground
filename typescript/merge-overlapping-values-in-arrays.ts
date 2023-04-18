type ColorStopRange = [number, number];

function merge(ranges: ReadonlyArray<ColorStopRange>): ReadonlyArray<ColorStopRange> {
    return ranges.reduce<Array<ColorStopRange>>((results, range) => {
        const [start, end] = range;
        const previousRange = results[results.length - 1];
        if (!results.length) {
            results.push(range);

            return results;
        }
        //console.log({previousRange, index, results})

        if (start > previousRange[1]) {
            results.push(range);
        } else if (previousRange[1] < end) {
            previousRange[1] = end;
        }

        return results;

    }, []);
}

console.log(merge([[2, 4], [3, 4]]))
console.log(merge([[2, 4], [3, 6], [6, 7]]))
console.log(merge([[2, 4], [3, 6], [4, 8]]))
console.log(merge([[2, 4], [3, 6], [4, 8], [5, 9], [10, 11], [11, 12], [14, 17], [18, 22]]))
