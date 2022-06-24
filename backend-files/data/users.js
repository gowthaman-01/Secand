import bcryptjs from "bcryptjs"

const users = [
    {
        name: "Gowthaman", 
        email: "gowthaman169@gmail.com", 
        password: bcryptjs.hashSync('123456', 10),
        isAdmin: true,  
    }, 
    {
        name: "Jason", 
        email: "jason@gmail.com", 
        password: bcryptjs.hashSync('123456', 10),
    }, 
    {
        name: "Mary", 
        email: "maryn@gmail.com", 
        password: bcryptjs.hashSync('123456', 10),
    }, 
]

export default users;