//-------------------------Group constructor:--------------------------------//
function Group(groupName){
    this.groupName = groupName;
    this.users = [];
    this.groups = [];
}

//-------------------------Group prototype:--------------------------------//
Group.prototype.createGroup = function(groupName){
    if(this.groups.every(item => {return item.groupName !== groupName}))
    {
        this.groups.push(new Group (groupName));
        return "Group created"; 
    }
    else
    {
        return "Group already exist";
    }
}
Group.prototype.deleteGroup = function(groupName){
    indexOfGroup = this.groups.findIndex(item => {return item.groupName === groupName});
    if(indexOfGroup>-1)
    {
        this.groups.splice(indexOfGroup,1);
        return "Group removed"; 
    }
    else
    {
        return "Group doesn't exist";
    }
}
Group.prototype.getGroupsFromGroup = function(){
    var result =[];
    this.groups.forEach(item => {result.push(item.groupName)});
    return result;
}
Group.prototype.createUser = function(userName,password,age){
    if(this.users.every(item => {return item.userName !== userName}))
    {
        this.users.push(new User (userName,password,age));
        return "User created"; 
    }
    else
    {
        return "User already exist";
    }
}
Group.prototype.deleteUser = function(userName){
    indexOfUser = this.users.findIndex(item => {return item.userName === userName});
    if(indexOfUser>-1)
    {
        this.users.splice(indexOfUser,1);
        return "User removed"; 
    }
    else
    {
        return "User doesn't exist";
    }
}
Group.prototype.getUsersFromGroup = function(){
    var result =[];
    this.users.forEach(item => {result.push(item.userName)});
    return result;
}

//-------------------------User constructor:--------------------------------//
function User(userName,password,age){
    this.userName = userName;
    this.password = password;
    this.age = age;
}
//-------------------------User prototypes:--------------------------------//
User.prototype.updatePassword = function(newPassword){this.password=newPassword};
User.prototype.setAge = function(newAge){this.age=newAge};

//------------------------Global functions:--------------------------------//




//----------------------------Testings-------------------------------------//
var mainGroup = new Group("MainGroup");
var subGroup = mainGroup.createGroup("subGroup1");
var subGroup2 = mainGroup.groups[0].createGroup("subGroup1");
mainGroup.groups[0].groups[0].createUser("Ofek",1234,23);
console.log(mainGroup);
console.log(subGroup);
console.log(subGroup2);
console.log(mainGroup);
console.log(mainGroup.groups[0].groups[0].getUsersFromGroup());
