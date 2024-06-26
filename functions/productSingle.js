// recevie elements in DOM
const titleEl = document.querySelector("#productTitle")
const priceEl = document.querySelector("#productPrice")
const existEl = document.querySelector("#productExist")
const dateEl = document.querySelector("#last-edit")
const deleteEl = document.querySelector("#deleteProduct")

// get id product of URL
const productId = location.hash.substring(1)

// find product by id within products
let result = getById(productId, 'products')

// cheking existence of result
!result && location.assign('../')

// call function to display product value
displayValues(result)

// show and get new values title of product
titleEl.addEventListener('input', e => {
    result.title = e.target.value.trim()
    updateById(result, dateEl, 'products')
})

// show and get new values price of product
priceEl.addEventListener('input', e => {
    result.price = e.target.value.trim()
    updateById(result, dateEl, 'products')
})

// show and get new values staus of product
existEl.addEventListener('change', e => {
    result.exist = e.target.checked
    updateById(result, dateEl, 'products')
})

// delete product and redairect to create product page
deleteEl.addEventListener('click', ()=> {
    const text = "Should this product be removed ؟"
    if (confirm(text)) {
    remove(productId, 'products')
    location.assign('../')
    }
})

// Real-time display
window.addEventListener('storage', e => {

    if (e.key === 'products') {
        const products = JSON.parse(e.newValue)
        saveData('products', products)

        result = getById(productId, 'products')

        !result && location.assign('../')

        displayValues(result)

    }
})

