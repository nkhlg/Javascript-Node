var read = require('readline-sync');
var fs = require('fs');
var passenger = {
}
while(1){
    var n = read.question("Select the operation \n1.Add \n2.Delete \n3.Update \n4.Search by email\n5.View all users\n6.Exit");
    if(n == 1)
    {
         var name = read.question("Enter the name (This is your id) : ");
         var age = read.question("Enter the age : ");
         var email=read.question("Enter your email:")
         var phone1=read.question("Enter your 1st phone number:")
         var phone2=read.question("Enter your 2nd phone number:")
         passenger.name = name
         passenger.age = age;
         passenger.email=email
         passenger.phone1=phone1
         passenger.phone2=phone2
         fs.writeFile(`./data/${name}.json`,JSON.stringify(passenger))
        
         console.log("Your passenger user name is (This is your id ) : " + name)
    }

    if(n == 2){
        var m = read.question("Enter your name : ");
        fs.unlinkSync(`./data/${m}.json`);
    }
    if(n==3){
        var name=read.question("enter your id (name):")
        var data=fs.readFileSync(`${name}.json`,'utf-8')
        var name=read.question("Update name:")
        var age=read.question("Update age:")
        var email=read.question("Update email:")
        var phone1=read.question("Update 1st phone number:")
        var phone2=read.question("Update 2nd phone number:")
        var obj=JSON.parse(data)
        var fileName=obj.name
        obj.name=name
        obj.age=age
        obj.email=email
        obj.phone1=phone1
        obj.phone2=phone2
        fs.writeFileSync(`./data/${fileName}.json`,JSON.stringify(obj));
            
    }
    if(n==4)
    {
        var email=read.question("Enter your email:")
        var files=fs.readdirSync('./data/')
        for(i=0;i<files.length;i++){
        var data=fs.readFileSync(`./data/${files[i]}`,'utf-8')
        var obj=JSON.parse(data)
        if(obj.email==email)
        {
            console.log(obj)
            break
        }
    }
}
    if(n==5)
    {
        var files=fs.readdirSync('./data/')
        for(i=0;i<files.length;i++)
        {
            var data=fs.readFileSync(`./data/${files[i]}`,'utf-8')
            var obj=JSON.parse(data)
            console.log(obj)
        }
    }  
    if(n==6)
    {
        process.exit(0)
    }   
    }
