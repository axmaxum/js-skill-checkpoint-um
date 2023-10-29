// Question #8: Fetching User List from Server

// เริ่มเขียนโค้ดตรงนี้
const getJons = () => {
    return fetch("https://jsonplaceholder.typicode.com/users");
};
 
const handleResponse = (response) => {
    return response.json();
};
 
const getUsersNames = (data) => {
    const userNames = data.map(user => user.name);
    return userNames;
};

const onSuccess = (userNames) => {
    console.log(userNames);
};

getJons()
.then(handleResponse)
.then(getUsersNames)
.then(onSuccess)
.catch(error => {
    console.error(error);
});
