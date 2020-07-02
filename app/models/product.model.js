const sql = require('./db')

const Product = function(product){
    this.productName = product.productName
    this.productPrice = product.productPrice
    this.description = product.description
    this.imgUrl = product.imgUrl
}

Product.create = (newProduct, result)=>{
    sql.query('insert into product set ?', newProduct, (err, res)=>{
        if(err){
            console.log('error: ', err)
            result(err,null)
            return
        }

        console.log('membuat product: ', { id: res.insertedId, ...newProduct})
        result(null,{id: res.insertedId, ...newProduct})
    })
}

Product.findById = (productId, result)=>{
    sql.query(
        `select * from product where productId = ${productId}`, (err,res)=>{
            if(err){
                console.log('error: ',err)
                result(err,null)
                return
            }

            if(res.length){
                console.log('menemukan produk: ', res[0])
                result(null,res[0])
                return
            }

            result({kind: 'tidak ditemukan'}, null)
        }
    )
}

Product.getAll = result=>{
    sql.query('select * from product', (err,res)=>{
        if(err){
            console.log('error',err)
            result(null,err)
            return
        }

        console.log('products: ', res)
        result(null,res)
    })
}

Product.updateById = (id, product, result) => {
    sql.query('update product set productName=?, productPrice=?, description=?, imgUrl=? where productId = ?',
    [product.productName, product.productPrice, product.description, product.imgUrl, id],(err,res)=>{
        if(err){
            console.log('error: ', err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0){
            result({kind: 'tidak ditemukan.'}, null)
            return
        }

        console.log('update product: ', {id: id, ...product})
        result(null, {id: id, ...product})
    })
}

Product.remove = (id, result)=>{
    sql.query('delete from product where productId = ?', id, (err,res)=>{
        if(err){
            console.log('error: ', err)
            result(null, err)
            return
        }

        if(res.affectedRows == 0){
            result({kind: 'tidak ditemukan.'}, null)
            return
        }

        console.log('menghapus product dengan id: ', id)
        result(null, res)
    })
}

Product.removeAll = result=>{
    sql.query('delete from product', (err,res)=>{
        if(err){
            console.log('error: ', err)
            result(null, err)
            return
        }

        console.log(`deleted ${res.affectedRows}`, res)
        result(null,res)
    })
}

module.exports=Product