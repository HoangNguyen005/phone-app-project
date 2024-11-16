
const cartTable = document.querySelector('#cart-container table tbody')

const cart = document.querySelector('#header .cart-icon')
cart.onclick = function() {
    document.getElementById('cart-container').style.transform = 'translateX(0)'
}

document.querySelector('i.close').onclick = function() {
    document.getElementById('cart-container').style.transform = 'translateX(100%)'
}


const cartsBtn = document.querySelectorAll('.product__item-cart')
cartsBtn.forEach(function(cartBtn) {
    cartBtn.onclick = function() {
        alert('Thêm vào giỏ hàng thành công')
        const cartBtnParent = cartBtn.parentElement
        const productImg = cartBtnParent.querySelector('.item-img img').src
        const productName = cartBtnParent.querySelector('.item-name').innerText
        const productPrice = cartBtnParent.querySelector('.item-price').innerText
        addToCart(productImg, productName, productPrice)
    }
})

function addToCart(productImg, productName, productPrice) {
    const product = document.createElement('tr')
    product.innerHTML =  `
                        <td class="product-img">
                            <img src="${productImg}" alt="">
                        </td>
                        <td style="width: 50%;" class="product-name">${productName}</td>
                        <td class="product-price">${productPrice}</td>
                        <td>1</td>
                        <td class="delete-product" style="color: rgb(214, 33, 33); cursor: pointer; font-size: 1.8rem;"><i class="fa-solid fa-trash"></i></td>
                    ` 
    cartTable.appendChild(product)
    
    const deletesBtn = document.querySelectorAll('.delete-product')
    const price = document.querySelector('.product-price').innerText
    deleteProduct(deletesBtn)
    // calculatingPrice(price)
}


function deleteProduct(deletesBtn) {
    deletesBtn.forEach(function(deleteBtn) {
        deleteBtn.onclick = function() {
            const deleteParent = deleteBtn.parentElement
           cartTable.removeChild(deleteParent)

        }
    })
}

// function calculatingPrice(price) {
//         document.querySelector('#cart-container .total').innerText = price
   
// }

