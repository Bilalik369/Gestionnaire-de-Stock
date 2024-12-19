const fs = require('fs');
const path = require('path');
const Product = require('./product');  

const productsFilePath = path.join(__dirname, 'products.json');


class Inventory {
  constructor() {
    this.products = this.loadProducts(); 
  }


  loadProducts() {
    if (fs.existsSync(productsFilePath)) {
      const data = fs.readFileSync(productsFilePath);
      return JSON.parse(data);
    }
    return [];
  }

  
  saveProducts() {
    fs.writeFileSync(productsFilePath, JSON.stringify(this.products, null, 2));
  }

  addProduct(name, description, quantity, price) {
    const id = this.products.length + 1;
    const newProduct = new Product(id, name, description, quantity, price);
    this.products.push(newProduct);
    this.saveProducts();
    console.log(`Produit ajouté: ${newProduct.name}`);
  }

  
  listProducts() {
    if (this.products.length === 0) {
      console.log("Aucun produit en stock.");
      return;
    }

    let totalStockValue = 0;
    this.products.forEach(product => {
      console.log(`ID: ${product.id}, Nom: ${product.name}, Description: ${product.description}, Quantité: ${product.quantity}, Prix Unitaire: ${product.price}DH`);
      totalStockValue += product.getTotalPrice();
    });
    console.log(`Valeur totale du stock: ${totalStockValue}DH`);
  }

  updateProduct(id, quantity, price){
    const product = this.products.find(p =>p.id === id);
    if(product){
      product.quantity = quantity;
      product.price = price;
      this.saveProducts();
      console.log(`Produit mis à jour: ${product.name}`)
    }else{
      console.log("produit non trouve.");
    }
  }
   
  deleteProduct(id) {
    const productIndex = this.products.findIndex(p => p.id === id);
    if(productIndex !== -1){
      const deleteProduct = this.products.splice(productIndex, 1);
      this.saveProducts();
      console.log(`Produit supprimé: ${deletedProduct[0].name}`);

    }else {
      console.log("Produit non trouvé.");
    }
  }
}

function showMenu(){
  const readline = require('readline');
  const rl = readline.createInterface({
    input : process.stdin,
    output : process.stdout
  });

  function askQuestion(query){
    return new Promise(resolve => rl.question(query, resolve));

  }

  async function mainMenu(){
    let exist = false;
    while(!exist){
     
      console.log("\n--- Menu ---");
      console.log("1. Ajouter un produit");
      console.log("2. Afficher tous les produits");
      console.log("3. Mettre à jour un produit");
      console.log("4. Supprimer un produit");
      console.log("5. Quitter");

      

    }
  }
}
