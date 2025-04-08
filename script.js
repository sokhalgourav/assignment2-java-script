class Smoothie {
    constructor(size, base, ingredients, sweetener, name) {
        this.size = size;
        this.base = base;
        this.ingredients = ingredients;
        this.sweetener = sweetener;
        this.name = name;
        this.price = this.calculatePrice();
    }

    calculatePrice() {
        let price = 0;
  
        if (this.size === 'small') price += 3;
        else if (this.size === 'medium') price += 4;
        else if (this.size === 'large') price += 5;

        if (this.base === 'yogurt') price += 1;
        
        if (this.ingredients.length > 2) {
            price += (this.ingredients.length - 2) * 0.5;
        }
        
        return price;
    }

