// const testVar = {}

// function testFunc() {
//   return "hi"
// }

function superbowlWin(record) {
let year = record.find(({result}) => result === 'W')
return !!year ? year.year : undefined 
}

