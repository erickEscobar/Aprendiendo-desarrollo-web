import STRIPE_KEYS from "./stripe-keys.js";

// console.log(STRIPE_KEYS);

const $tacos = document.getElementById('tacos'),
    $template = document.getElementById('taco-template').content,
    $fragment = document.createDocumentFragment(),
    fetchOptions = {
        headers: {
            Authorization: `Bearer ${STRIPE_KEYS.secret}`
        }
    };

let prices, products;


Promise.all([
    fetch('https://api.stripe.com/v1/products', fetchOptions),
    fetch('https://api.stripe.com/v1/prices', fetchOptions)
])
// .then(res => res.ok ? res.json() : Promise.reject(res))
.then(responses => Promise.all(responses.map(res => res.json())))
.then(json => {
    // console.log(json);
    products = json[0].data;
    prices = json[1].data;
    console.log(products, prices)

    prices.forEach(el => {
        let productData = products.filter(product => product.id === el.product);
        console.log(productData);
        // console.log(productData[0].images[0]);

        $template.querySelector('.taco').setAttribute("data-price", el.id);
        $template.querySelector('img').src = productData[0].images[0];
        $template.querySelector('img').alt = productData[0].name;
        $template.querySelector('figcaption').innerHTML = `
            ${productData[0].name}
            <br>
            Precio: $${el.unit_amount / 100}.00 ${el.currency}
            <br>
        `;

        let clone = document.importNode($template, true);
        $fragment.appendChild(clone);
    });
    $tacos.appendChild($fragment);
})
.catch(err => {
    console.log(err);
    let message = err.statusText || 'Ocurrio un error al conectarse con la API de Stripe';
    $tacos.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
})

// fetch('https://api.stripe.com/v1/products', {
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`
//     }
// })
// .then((res) => {
//     console.log(res);
//     return res.json()
// })
// .then((json) => {
//     console.log(json)
// })

// fetch('https://api.stripe.com/v1/prices', {
//     headers: {
//         Authorization: `Bearer ${STRIPE_KEYS.secret}`
//     }
// })
// .then((res) => {
//     console.log(res);
//     return res.json()
// })
// .then((json) => {
//     console.log(json)
// })

document.addEventListener('click', e => {
    console.log(e.target);
    if(e.target.matches('.taco *')){
        let price = e.target.parentElement.getAttribute('data-price')
        // console.log(price)
        Stripe(STRIPE_KEYS.public)
        .redirectToCheckout({
            lineItems: [{price, quantity: 1}],
            mode: "subscription",
            successUrl: "http://127.0.0.1:5500/129/stripe-success.html",
            cancelUrl: "http://127.0.0.1:5500/129/stripe-error.html"
        })
        .then(res => {
            console.log(res)
            if(res.error){
                $tacos.insertAdjacentHTML('afterend', res.error.message);
            }
        })
    }
})