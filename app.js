
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
      <p>User is Premium {{premium}}</p>
      <ul>
        <li v-for="lists in description">
          {{lists}}
        </li>
      </ul>
      <div class="color-box"  @mouseover="updateProperty(index)" v-for="(variant,index) in variants" :key="variant.variantId" :style="{backgroundColor:variant.vaiantColor}"> 
        {{variant.vaiantColor}}
      </div>
      <button v-on:click="addCart()" :class="{disabledButton: !inStock}">Add Cart</button>
      <div class="cart">
        <p>Cart ({{cart}})</p>
      </div>
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
            cart : 0,
                 }
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


    var data = new Vue({
        el : '#app',
        data:{
            premium : true
        }
      
    })
})