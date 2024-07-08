const array1 = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// ค่าที่มีตัวอักษรมากกว่า 6 ตัว
const result1 = array1.filter(str => str.length > 6)

const array2 = [1, -3, 2, 8, -4, 5];
// ค่าที่เป็นเลขบวก
const result2 = array2.filter(num => num > 0)

const array3 = [1, 3, 4, 5, 6, 7, 8];
// ค่าที่หาร 3 ลงตัว
const result3 = array3.filter(num => num % 3 == 0)
