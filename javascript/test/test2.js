
const daysOfYear = [];
const twoYearsFromNow = new Date(new Date().setFullYear(new Date().getFullYear() + 2))

for (const d = new Date(2021, 0, 1); d <= twoYearsFromNow; d.setDate(d.getDate() + 1)) {
    daysOfYear.push(new Date(d));
}

console.log(daysOfYear[0].getFullYear())

console.log(daysOfYear[0].toLocaleDateString('en-US', { weekday: 'long' }))

console.log({daysOfYear})
