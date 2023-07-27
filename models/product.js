const { json } = require('body-parser');
const fs = require('fs');
const path = require ('path');

const products =[];

// create a Product class
module.exports = class Product{
    constructor(title){
        this.title = title;

    }
    // save products into a file
    save(){
        const p = path.join(path.dirname(process.mainModule.filename), 
        'data', 
        'products.json'
        );
        fs.readFile(p,  (err, fileContent) =>{
            let products = [];
            if (!err){
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);
             });
        });
    }
    // fetch all product to load in the page
    static fetchAll(callback){
        const p = path.join(path.dirname(process.mainModule.filename), 
        'data', 
        'products.json'
        );
        fs.readFile(p, (err, fileContent) =>{
            if (err){
                callback([]);

            }
            callback(JSON.parse(fileContent));
        });
    }
};