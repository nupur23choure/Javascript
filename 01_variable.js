const accountId = 1001
var accountEmail = "nuput@gmail.com"
let password = "12121"
city = "Indore"
let state;
// accountId = 1002--> error bcs it is constant cant change
/*
prefer not to use "var" because of scope block issue!
*/
console.log(accountId)
console.table([accountId, accountEmail, password, city, state])
