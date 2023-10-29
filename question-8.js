// Question #8: Fetching User List from Server
function usersData(){
    return fetch("https://jsonplaceholder.typicode.com/users");
  };
// เริ่มเขียนโค้ดตรงนี้
    const handleResponse = (response) => {
    return response.json();
  };

    const displayUsers = (data) => {
      let newUsers = [];
      for(let i = 0 ; i < data.length ; i++){
        newUsers = (data.map(user => user.name));
      };
      return console.log(newUsers);
};


usersData().then(handleResponse).then(displayUsers);

