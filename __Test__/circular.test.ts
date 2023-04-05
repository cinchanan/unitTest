import {put,get} from '../circular'
describe("test circular",()=>{
it("should be 1", ()=>{
const expectedResult = 8
put(1)
put(2)
put(3)
put(4)
put(5)
put(6)
// 1 2 3 4 5
// 6 7 8 8 10
// 11
put(7)
put(8)
put(9)
put(10)
put(11)

const result = get()
expect(result).toBe(expectedResult)
})
})