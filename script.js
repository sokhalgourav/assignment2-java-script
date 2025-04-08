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

    getDescription() {
        return `
            <div class="smoothie-card">
                <h2>${this.name ? this.name + "'s" : 'Your'} Smoothie</h2>
                <p><strong>Size:</strong> ${this.size}</p>
                <p><strong>Base:</strong> ${this.base}</p>
                <p><strong>Ingredients:</strong> ${this.ingredients.join(', ')}</p>
                <p><strong>Sweetener:</strong> ${this.sweetener}</p>
                <p><strong>Price:</strong> $${this.price.toFixed(2)}</p>
                <p>Enjoy your smoothie!</p>
            </div>
        `;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('smoothieForm');
    const outputDiv = document.getElementById('smoothieOutput');
 
    form.addEventListener('submit', function(e) {
        e.preventDefault();
   
        const size = document.getElementById('size').value;
        const base = document.querySelector('input[name="base"]:checked').value;

        const ingredientCheckboxes = document.querySelectorAll('.ingredients input[type="checkbox"]:checked');
        const ingredients = Array.from(ingredientCheckboxes).map(cb => cb.value);
      
        if (ingredients.length < 2) {
            alert('Please select at least 2 ingredients');
            return;
        }
        
        const sweetener = document.getElementById('sweetener').value;
        const name = document.getElementById('name').value.trim();
 
        const mySmoothie = new Smoothie(size, base, ingredients, sweetener, name);

        outputDiv.innerHTML = mySmoothie.getDescription();
        outputDiv.style.display = 'block';
    });
});
