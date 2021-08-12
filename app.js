
window.addEventListener('load', function () {
    var data = new Vue({
        el : '#app',
        data : {
            products : 'socks',
            brand : 'Indian',
            selectedVariant : 0,
            inventory: 11,
            description: ['80% cotton','20% polyster','gender-neutral'],
            variants: [{
                variantId : 2234,
                vaiantColor : "green",
                vaiantImage : './assets/green-socks.jpg',
                variantQuantity: 10
            },{
                variantId : 2235,
                vaiantColor : "blue",
                vaiantImage : './assets/blue-socks.jpg',
                variantQuantity: 0

            }],
            cart : 0,
                 },
                 methods:{
                    addCart() {
                        this.cart += 1
                    },
                    updateProperty(val){
                        this.selectedVariant = val;
                        
                    }
                 },
                 computed:{
                     title(){
                         return this.brand + ' ' + this.products
                     },
                     image(){
                        return this.variants[this.selectedVariant].vaiantImage

                     },
                     inStock(){
                         return this.variants[this.selectedVariant].variantQuantity
                     }
                     
                 }
    })
})