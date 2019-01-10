פונקציה הנקראת מתוך משתנה מסוג string.
הפונקציה מקבלת שני פרמטרים(השני אופציונלי): ביטוי, אינדקס התחלה.
הפונקציה מחזירה את אינדקס מופע הביטוי הראשון שנמצא החל מהאינדקס שהתקבל כפרמטר.
במידה והביטוי לא נמצא יוחזר הערך -1.

דוגמה:
var sentence = "I love to eat pizza!";

var index = sentence.indexOf('o');
console.log(index);// 3

index = sentence.indexOf('o',4);
console.log(index);// 8

index = sentence.indexOf('o',9);
console.log(index);// -1
