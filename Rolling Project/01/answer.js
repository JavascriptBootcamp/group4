

function AllUsers()
{
    this.allUsers = [];
    this.createUser = function(userName,password,age){
        if(this.allUsers.find(x => x.userName === userName))
            return "user name already exist";
        else
        {
            this.allUsers.push(new User (userName,password,age));
        }
    };
    // this.deleteUser = function(){};
    // this.listOfUsers = function(){};
}

function User(userName,password,age)
{
    this.userName = userName;
    this.password = password;
    this.age = age;
    this.updatePassword = function(newPassword){this.password=newPassword};
    this.updateAge = function(newAge){this.age=newAge};
}

function Groups(groupName)
{
    this.groupName = groupName;
    this.users = [];
    this.addUser = function(userProfile){
        for(var i=0;i<users.length;i++)
        {
            if(userProfile.userName==this.users[i].userName)
                return "User is already in this group";
        }
        this.users.push(userProfile);
        return "User has been added to the group";
    };
    this.removeUser = function(){
        for(var i=0;i<users.length;i++)
        {
            if(userProfile.userName==this.users[i])
            {
                this.users.splice(i,1);
                return "User has been removed from the group"
            }
        }
        return "User wasn't in the group";
    };
    this.getUserAndGroup = function(){
        var usersAndGroups = [groupName,users];
        return usersAndGroups;
    };
}

var ofek = AllUsers.createUser("ofek","2222",28);
var ofek2 = AllUsers.createUser("ofek","3333",20);
console.log (ofek2)
console.log(ofek);

