/*Create a Family function with two variables inside its scope:
A members array which starts empty
A birth function
The birth function should take one parameter, name, and push it to members, then log the updated array
The Family function should return the birth function, but not the members array
Call the Family function, store it in a giveBirth variable, then call giveBirth a few times.

*/

const Family = function () {
  members = [];

  const birth = function (name) {
    members.push(name);
    console.log(members);
  };
  return birth;
};

//const giveBirth = Family();
// giveBirth("alon");
// giveBirth("david");
// giveBirth("idan");
// giveBirth("ron");

const UsersModule = function () {
  const _users = ["Aaron", "Avi"];

  const addUser = function (user) {
    _users.push(user);
  };

  const listUsers = function () {
    for (let user of _users) {
      console.log(user);
    }
  };

  return {
    addUser: addUser,
    listUsers: listUsers,
  };
};

const usersModule = UsersModule();

usersModule.addUser("Narkis");
usersModule.listUsers();
usersModule.addUser("liorOSH");
usersModule.addUser("Nanus");
usersModule.listUsers();
console.log(userModule.users);
