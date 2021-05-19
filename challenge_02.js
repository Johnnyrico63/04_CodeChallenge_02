/*********   CODE CHALLENGE 02 **********/

/*
Geben über eine Prompt-Anforderung einen Namen ein
Geben über eine Prompt-Anforderung ein Alter ein

Geben Sie in Abhängigkeit vom angegebenen Alter 
folgende Getränkeauswahl in die Konsole aus aus :

Alter 0-5 // Milch  --> age > 0 AND age < 6
Alter 6-12 // Saft
Alter 13-17 // Cola
18 + // Wein

*/

/* Getränke-Challenge */

let name1, age, drink;

name1 = prompt("insert name");
age = prompt("insert age");
/*
if (age < 6)
{
    drink = "Milch";
}
else if (age < 13)
{
    drink = "Saft";
}
else if (age < 18)
{
    drink = "Cola";
}
else
{
    drink = "Wein";
}

console.log(name1 + " gets " + drink);
*/

switch (true) {
    case (age < 6):
        drink = "Milch";
        break;
    case (age < 13):
        drink = "Saft";
        break;
    case (age < 18):
        drink = "Cola";
        break;
    case (age > 17):
        drink = "Wein";
        break;

    default:
        drink = "Bekommt nix"
        break;
}
console.log(name1 + " gets a" + drink);