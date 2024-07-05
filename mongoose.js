import connect from "./connect/connect.js";
import User from "./schemas/user.js"

// 더미 데이터 넣기용
connect();

const user_inserted = await User.create(
    {
        email : "ksh1234@gmail.com", 
        name : "김세환", 
        age : 20,
    },
    {
        email : "ksh567@gmail.com",
        name : "홍길동", 
        age : 30,
    }
)