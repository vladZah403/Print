let products_cards = document.querySelector(".products_cards");
let button_add = document.querySelector(".add_bat")

let name_card = ['Візитки','Листівки','Бірки','Наліпки','Друк на пакетах','Календарі','Магніти','Паперові стаканчики'];
let img_card = ['css/img/prod_card11.jpg','css/img/prod_card4.jpg','css/img/prod_card15.jpg',
                'css/img/prod_card16.jpg','css/img/prod_card17.jpg','css/img/prod_card18.jpg',
                'css/img/prod_card19.jpg','css/img/prod_card20.jpg'];
let money_card =[543,453,45,546,23,567,65,234]


for(let i = 0; i<name_card.length; i++){
    products_cards.innerHTML+=`
    <div class="prod_card">
        <img src="${img_card[i]}" alt="">
            <div class="card_conteiner">
                <h2>${name_card[i]}</h2>
                <p>Текст нужно придумать </p>
                    <div class="card_info">
                        <div class="money" id="id_card_${i}">₴ ${money_card[i]}</div>

                    </div>
            </div>
    </div>
    
    `
}































//<div class="prod_card">
    //<img src="css/img/prod_card1.jpg" alt="">
                           // <div class="card_conteiner">
                               // <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, dignissimos.</p>
                               // <div class="card_info">
                                   // <div class="money" id="id_card1">$324</div>

                               // </div>
                            //</div>
                        //</div>