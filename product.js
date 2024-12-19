

class Product {
    constructor(id, name, description, quantite, prix) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.quantite = quantite;
      this.prix = prix;
    }
  
    
    getTotalPrice() {
      return this.quantite * this.prix;
    }
  }
  
  module.exports = Product;