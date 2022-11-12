var user1 = 1;
var user2 = 1;


var roll = require('readline-sync');

while(true){
    var n = roll.question("Choose user 1 or 2 : ");
    var dice = Math.floor(Math.random()*6) + 1 ;
    console.log("dice value : " + dice);
    if(n == '1')
    {
        
        user1 = user1 + dice;
        if(user1 > 100){
            user1 = user1 - dice;
        }
        if(user1 == 50){
            console.log("ladder :) ");
            user1 = 100;
        }
        if(user1 == 10){
            console.log("ladder :) ");
            user1 = 20;
        }
        if(user1 == 70){
            console.log("ladder :) ");
            user1 = 85;
        }
        if(user1 == 99)
        {   console.log("snake :( ");
            user1 = 1;
        }
        if(user1 == 28 )
        {   console.log("snake :( ");
            user1 = 9;
        }
        if(user1 == 62){
            console.log("snake :( ");
            user1 = 38;
        }

    }
    else if(n == '2'){
        user2 = user2 + dice;
        if(user2 > 100){
            user2 = user2 - dice;
        }
        if(user2 == 50){
            console.log("ladder :) ");
            user2 = 100;
        }
        if(user2 == 10){
            console.log("ladder :) ");
            user2 = 20;
        }
        if(user2 == 70){
            console.log("ladder :) ");
            user2 = 85;
        }
        if(user2 == 99)
        {   console.log("snake :( ");
            user2 = 1;
        }
        if(user2 == 28 )
        {    console.log("snake :( ");
            user2 = 9;
        }
        if(user2 == 62){
            console.log("snake :( ");
            user2 = 38;
        }
        
    }
    console.log("user1 position : " + user1);
    console.log("user2 position : "+ user2);

    if(user1 == 100 || user2 == 100){
        if(user1 == 100)
        {
            console.log("user1 wins!!!");
            break;

        }
        else{
            console.log("user2 wins!!!");
            break;
        }
    }


}