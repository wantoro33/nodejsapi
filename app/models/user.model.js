const sql = require('./db')

const User = function(user){
    this.userName = user.userName,
    this.password = user.password,
    this.email = user.email,
    this.isActive = user.isActive
}

User.create = (newUser, result)=>{
    sql('insert into user set ?', newUser, (err,res)=>{
        if(err){
            console.log('error: ', err)
            result(err,null)
            return
        }

        console.log('membuat user: ', {id: res.insertedId, ...newUser})
        result(null, {id: res.insertedId, ...newUser})
    })
}

module.exports = User