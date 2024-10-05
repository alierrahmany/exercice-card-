


    import { products } from "./index.js";

    console.log(products);
    
    let LireProduit = (product) => {
        return `
            <div class="col-md-3 border border-3">
                <img src="${product.thumbnail}" style="width:200px; height:200px;" alt="${product.title}">
                <h1>${product.title}</h1>
                <p>Price: ${product.price}</p>
            </div>
        `;
    };
     // recupere data dans file index.js
    let LireAllProduit = () => {
            products.map(element=>{
        const item=LireProduit(element)
        document.getElementById('contenu').innerHTML+=item;
    })
    };
    LireAllProduit();

    // recupere data dans file data.json
    let LireDataProduit = () => {

    $.getJSON("data.json", function(data) {
        console.log(data);
        data.map(element => {
            document.getElementById('content').innerHTML += LireProduit(element);
        });
    });
};
    
    LireDataProduit();
    