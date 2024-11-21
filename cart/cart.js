document.addEventListener('DOMContentLoaded',function(){
    let products=[
        {
            id:1,
            name:'HP',
            price:233.908
        },
        {
            id:2,
            name:'DELL',
            price:22.76
        },
        {
            id:3,
            name:'Lenovo',
            price:78.12
        },
    ]

    let array=[];
            let empty_cart=   document.getElementById('empty_cart')
            let CheckOut= document.getElementById('CheckOut')
             let totalPrice= document.getElementById('totalPrice')
            let cartList=   document.querySelector('.cart')
            let productList=  document.querySelector('.productList')

            // display the items
            products.forEach(product=>{
             let productDiv=document.createElement('div');
             productDiv.classList.add('produstList');
             productDiv.innerHTML=`<span>${product.name}-$${product.price.toFixed(2)}</span>
             <button class='addToCart'>Add to Cart</button>
             `;
             productList.appendChild(productDiv);
             productDiv.addEventListener('click',function(){
                add_to_cart(product)
             })
            })


            // add to cart

            function add_to_cart(pro){
                array.push(pro);
                empty_cart.style.display='none'
            let cartItems=document.createElement('div');
            cartItems.classList.add('cart_items');
            cartItems.innerHTML=`<span>${pro.name}-$${pro.price.toFixed(2)}</span>
            <button class='removeBtn'>Remove</button>
            `;
            cartList.appendChild(cartItems);

                cartItems.querySelector('.removeBtn').addEventListener('click',function(){
                    removeItem(pro,cartItems)
                })
                updatePrice(pro.price);

            }
              
            

            // update price

            function updatePrice(price){
            let currentTotal=parseFloat(totalPrice.textContent.replace('$',''));
            currentTotal=currentTotal+price;
            totalPrice.textContent=`$${currentTotal.toFixed(2)}`;

            // if (currentTotal>0) {
            //     cartList.classList.remove('hidden')
            // }
            // else{
            //     cartList.classList.add('hidden')
            // }

            }
            CheckOut.addEventListener('click',function(){
                alert('Thank You for Order!')
            })

                // remove any items and update the price
                function removeItem(product,item){
                  let index=  array.indexOf(product);
                  if (index>-1) {
                    array.splice(index,1)
                }
                cartList.removeChild(item);
                updatePrice(-product.price)

                }


})