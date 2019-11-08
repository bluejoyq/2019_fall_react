let server = {};
server.login = ( username, password, setAccount ) => {
    let option = {username: username, password: password};
    fetch("https://evening-peak-07863.herokuapp.com/api/users/login", 
        { 
            method: 'POST',
            body: JSON.stringify(option),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    .then( async (jsonData) => {
        let account = await jsonData.json();
        setAccount(account.username);
        alert("로그인 성공입니다!");
        return 1;
    })
    .catch( (error) => {
        alert("로그인 실패입니다!");
        return null;
    });
}

server.signup = (username, password, nickname, email) => {
    let option = {username: username, password: password, nickname: nickname, email: email};
    fetch("https://evening-peak-07863.herokuapp.com/api/users", 
        { 
            method: 'POST',
            body: JSON.stringify(option),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    .then( async (jsonData) => {
        alert("회원가입 성공입니다!");
        return 1;
    })
    .catch( (error) => {
        alert("회원가입 실패입니다!");
        return null;
    });
}

server.userRead = ( username, setAccount ) => {
    fetch('https://evening-peak-07863.herokuapp.com/api/users/'+username, 
        { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    .then( async (jsonData) => {
        let account = await jsonData.json();
        setAccount(account);
        return 1;
    })
}

server.productRead = ( productId,setData ) => {
    fetch("https://evening-peak-07863.herokuapp.com/api/products/"+productId, 
        { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    .then( async (jsonData) => {
        let datas = await jsonData.json();
        setData(datas);
        return 1;
    })
}


server.productReadAll = ( setData ) => {
    fetch("https://evening-peak-07863.herokuapp.com/api/products/", 
        { 
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
    .then( async (jsonData) => {
        let datas = await jsonData.json();
        setData(datas);
        return 1;
    })
}

module.exports = server;