// const str = `
// 010-1234-5678
// thesecon@gamil.com
// https://www.omdapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// 동해물과_백두산이 마르고 닳도록
// `
// //생성자 함수 방식
// // const regexp = new RegExp('the', 'gi')

// //리터럴 방식
// //console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA'))

// const h = `   the hello  world`

// console.log(h.replace(/\s/g,''))

const str = `
010-1234-5678
thesecon@gamil.com
https://www.omdapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// console.log(
//   str.match(/.{1,}(?=@)/g) //결과: thesecon
// )

console.log(
  str.match(/(?<=@).{1,}/g) //결과: gamil.com
)