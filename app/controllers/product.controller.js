const Product = require('../models/product.model')

exports.create = (req,res)=>{
    if(!req.body){
        res.status(400).send({
            message: 'konten tidak boleh kosong!',
        })
    }

    const product = new Product({
        productName: req.body.productName,
        productPrice: req.body.productPrice,
        description: req.body.description,
        imgUrl: req.body.imgUrl,
    })

    Product.create(product, (err,data)=>{
        if(err)
            res.status(500).send({
                message: err.message || 'terjadi kesalahan',
            })
        else res.send(data)
    })
}

exports.findAll = (req,res)=>{
    Product.getAll((err,data)=>{
        if(err)
            res.status(500).send({
                message: err.message || 'terjadi kesalahan'
            })
        else res.send(data)
    })
}

exports.findOne = (req,res)=>{
    Product.findById(req.params.productId, (err,data)=>{
        if(err){
            if(err.kind === 'tidak ditemukan'){
                res.status(404).send({
                    message: `tidak menemukan product dengan id = ${req.params.productId}`,
                })
            }else{
                res.status(500).send({
                    message:
                        'kesalahan mendapatkan product dengan id ' +
                        req.params.productId,
                })
            }
        }else res.send(data)
    })
}

exports.update = (req,res)=>{
    if(!req.body){
        req.status(400).send({
            message: 'konten tidak boleh kosong.',
        })
    }

    Product.updateById(
        req.params.productId,
        new Product(req.body),
        (err,data)=>{
            if(err){
                if(err.kind === 'tidak ditemukan.'){
                    res.status(404).send({
                        message: `tidak menemukan product dengan id ${productId}.`,
                    })
                }else{
                    res.status(500).send({
                        message:
                            'kesalaha update product dengan id ' + 
                            req.params.productId,
                    })
                }
            }else res.send(data)
        }
    )
}

exports.delete = (req,res)=>{
    Product.remove(req.params.productId, (err,data)=>{
        if(err){
            if(err.kind === 'tidak ditemukan.'){
                res.status(404).send({
                    message: `tidak menemukan product dengan id ${productId}.`,
                })
            }else{
                res.status(500).send({
                    message: 'tidak dapat menghapus product dengan id ' +
                    req.params.productId,
                })
            }
        }else res.send(data)
    })
}

exports.deleteAll = (req,res)=>{
    Product.removeAll((err,data)=>{
        if(err)
            res.status(500).send({
                message:
                    err.message || 'terjadi kesalahan dalam menghapus data.'
            })
        else res.send({message: 'semua data product sudah dihapus.'})
    })
}