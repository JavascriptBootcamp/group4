מתודה של מערך שממיינת את אברי המערך תוך כדי שימוש באלגוריתם תוך מקומי ומחזירה את המערך הממויין.
בתור ברירת מחדל המתודה הופכת את האלמנטים למחרוזות ואז משווה ביניהן ע"י רצף ערכי UTF-16 code.
זמן ריצה ומקום תלוי ביישומה של המתודה.

var array1 = [1, 30, 4, 21];
var arr2 =array1.sort();
console.log(array1);
console.log(arr2);

var array1 = [1, 30, 4, 21];
var arr2 =array1.sort();
console.log(array1);
console.log(arr2);
// expected output: [1, 21, 30, 4]
// expected output: [1, 21, 30, 4]
