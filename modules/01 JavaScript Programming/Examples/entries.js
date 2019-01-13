entries היא מתודה של אובייקטים, היא מקבלת אובייקט ומחזירה את הנתונים שלו בתוך מערך, בצורה של ["מפתח","ערך"]

1. כדי לקבל את כל נתוני האובייקט, נגיש למתודה את האובייקט כולו בצורה הבאה:

Var Person = {Name:"Ofek",LastName:"Arbeli",Age:28}

console.log(Object.entries(Person)); // will print: [["Name","Ofek"],["LastName","Arbeli"],["Age","28"]]