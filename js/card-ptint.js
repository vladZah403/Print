let products_cards = document.querySelector(".products_cards");
let button_add = document.querySelector(".add_bat")

let name_card = ['Візитки','Листівки','Бірки','Наліпки','Друк на пакетах','Календарі','Магніти','Паперові стаканчики'];
let img_card = ['css/img/prod_card11.jpg','css/img/prod_card4.jpg','css/img/prod_card15.jpg',
                'css/img/prod_card16.jpg','css/img/prod_card17.jpg','css/img/prod_card18.jpg',
                'css/img/prod_card19.jpg','css/img/prod_card20.jpg'];
let money_card =['500 шт. від 350 ', '100 шт. від 290' , '250 шт. від 280' , '50 шт. від 170' , '200 шт. від 8960' , '25 шт. від 1150' , '100 шт. від 470' , '500 шт. від 590' ]
let table_size =['50x90 мм', '105×148 мм','50×70 мм','60×60 мм', 'А4 350х240х90 мм', 'А4 210×297 мм ','70×70 мм', '250 мл' ]
let table_material =['Папір щільністю <br> 250 г/м<sup>2</sup>', 
                     'Папір щільністю <br> 130 г/м<sup>2</sup>',
                     'Папір щільністю <br> 300 г/м<sup>2</sup>',
                     'Прозора <br>глянцева плівка',
                     'Пакет “білий” папір <br> 200 г/м<sup>2</sup>',
                     'Папір щільністю <br> 250 г/м<sup>2</sup> ',
                     'Mагніт <br> товщиною 0,7 мм ',
                     'Xарчовий <br> папір' ]

for(let i = 0; i<name_card.length; i++){
    products_cards.innerHTML+=`
    <div class="prod_card">
        <img src="${img_card[i]}" alt="">
         
            <div class="card_conteiner">
                <h2>${name_card[i]}</h2>
                <p>
                <table>
                <tr>
                    <th>Розмір</th>
                    <th>${table_size[i]}</th>
                
 
                </tr>
                <tr>
                    <td>Матеріал</td>
                    <td>${table_material[i]} </td>
  
                </tr>
                </table>
                </p>
                
                    <div class="card_info">
                        <div class="money myBtn" onclick="modal_click(${i}, '${name_card[i]}' )" id="${i}"> ${money_card[i]} ₴</div>

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