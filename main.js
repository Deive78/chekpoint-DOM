let article = document.querySelectorAll(".produit")
//console.log(article)
for (let i=0; i < article.length; i++){
    let price = article[i].children[1].innerText
    let pry = + price;

//console.log(typeof(pry));
let amout = article[i].children[2].children[3]
let btnplus = article[i].children[2].children[0]
let qte = article[i].children[2].children[1]
let quantity = parseInt(qte.innerText)
let btnmoins = article[i].children[2].children[2]
let coeur = article[i].children[3].children[0]
let supprimer = article[i].children[3].children[1]
//console.log(btnmoins)
//incrémentation
btnplus.addEventListener('click', function(){
    quantity++;
    qte.innerHTML=quantity;
    amout.innerHTML=quantity*pry; 
}
)
btnmoins.addEventListener('click', function(){
    if (quantity <= 0){
        quantity = quantity;
    }else {
    quantity--;
    qte.innerHTML=quantity;   
}
amout.innerHTML=quantity*pry;
}
)
}
