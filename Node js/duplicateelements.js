let arr = [1,2,1,1,3,4,3,5,4,2,5,6,7,8];

let duplicate = [];

for (let i = 0; i < arr.length; i++) {

    const number = arr[i];

    let count = 0;

    for (let j = 0; j < arr.length; j++) {

        const element = arr[j];

       

        if(element == number){

            count++;

        }

       

    }



if(count>1){

    let hasFoundMatch = false;

    for (let i = 0; i < duplicate.length; i++) {

        if(duplicate[i] == number){

            hasFoundMatch = true;

            break;

        }

    }

    if(!hasFoundMatch){

        duplicate.push(number);

    }  

    }



}

console.log(duplicate);