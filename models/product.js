const { json } = require('body-parser');
const fs = require('fs');
const path = require ('path');

// helper function for path construction 
const p = path.join(path.dirname(process.mainModule.filename), 
'data', 
'products.json'
);

// Receive callback after read the file.
const getProductsFromFile = (callback)=> {
       
        fs.readFile(p, (err, fileContent) =>{
            if (err){
                // pass empty array if hava a error
                return callback([]);
            }
            // array with the data
            else{
                callback(JSON.parse(fileContent));
            }
        });
    }


// create a Product class
module.exports = class Product{
    constructor(title, imageURL, price, description){
        this.title = title;
        this.imageURL = imageURL;
        this.description = description;
        this.price= price;

    }
    // save products into a file
    save(){
       
        getProductsFromFile(products => {
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), err=>{
                console.log(err);

            });    
        });
        
    }
   
    // fetch all product to load in the page
        
    static fetchAll(callback){
        getProductsFromFile(callback);
        
        }
};