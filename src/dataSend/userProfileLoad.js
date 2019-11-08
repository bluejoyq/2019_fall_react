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


server.rent = ( productId, username, startDate, endDate ) => {   
    let option = {productId:productId,customer:username,rentDates:[startDate,endDate]}
    fetch("https://evening-peak-07863.herokuapp.com/api/rents/", 
        { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(option),
        })
    .then( async(jsonData) => {
        let datas = await jsonData.json();
        if(datas.status >= 400){throw(1)}
        alert("예약 성공!");
        return 1;
    })
    .catch( (error) => {
        alert("예약 실패!");
        return null;
    });
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

server.addProduct = ( title, content, location, subLocation, startDate, endDate, picture ) => {   
    let form = new FormData();
    form.append('title',title);form.append('content',content);form.append('location',location);
    form.append('subLocation',subLocation);form.append('availableDates',[startDate,endDate]);form.append('productImage',picture);

    fetch("https://evening-peak-07863.herokuapp.com/api/products/", 
        { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',

            },
            body: form,
        })
    .then( async(jsonData) => {
        let datas = await jsonData.json();
        if(datas.status >= 400){throw(1)}
        alert("예약 성공!");
        return 1;
    })
    .catch( (error) => {
        alert("예약 실패!");
        return null;
    });
}

server.addComment = (username,comment,productId ,changeItem) => {
    let option = {username: username,comment:comment, productId:productId}
    fetch("https://evening-peak-07863.herokuapp.com/api/comments/", 
        { 
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(option),
        })
        .then( async(jsonData) => {
            server.productRead(productId,changeItem);
        })
}

module.exports = server;