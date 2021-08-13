
window.addEventListener('load', function () {

Vue.component('product',
{
    props : {
        premium : {
            type : Boolean,
            required : true
        }
    },
    template : `
    <div class="product">
    <div class="product-image">
      <img :src="image">
    </div>
    <div class="product-info">
      <h1> {{products}}</h1> 
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{outOfStock : !inStock}">Out of Stock</p>
      <p>Shipping :  {{shipping}}</p>
      <ul>
        <li v-for="lists in description">
          {{lists}}
        </li>
      </ul>
      <div class="color-box"  @mouseover="updateProperty(index)" v-for="(variant,index) in variants" :key="variant.variantId" :style="{backgroundColor:variant.vaiantColor}"> 
        {{variant.vaiantColor}}
      </div>
      <button v-on:click="addCart('add-to-cart')" :class="{disabledButton: !inStock}">Add Cart</button>
    </div>
  </div>
    `,
    data(){
        return {
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
                 }
                 },
             methods:{
                addCart() {
                    this.$emit("add-to-cart",this.variants[this.selectedVariant].variantId)
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
                 },
                 shipping(){
                     if(this.premium == true){
                         return "Free"
                     }
                     return "$2.99"
                 }
                 
             }
    
})

Vue.component('product-details',{
    props : {
        product_details : {
            type : Object,
            required : true
        }
    },
    template : `
    <p>Product-Origin : {{product_details.origin}}</p>
    `
})


    var data = new Vue({
        el : '#app',
        data:{
            premium : false,
            cart : [],
            product_details : {
                origin : "India"
            }
        },
        methods:{
            updateCart(id){
                this.cart.push(id)
            }
        }
      
    })
})