let products = [
{
name: 'Apple iPhone XR ((PRODUCT)RED, 64 GB) (Includes EarPods, Power Adapter)',
ratings:'4.6',
reviews:'83,618 Ratings & 7117 Reviews',
imgName:'i1.jpg',
info1:'64 GB ROM',
info2:'15.49 cm (6.1 inch) Display',
info3:'12MP Rear Camera | 7MP Front Camera',
info4:'A12 Bionic Chip Processor',
info5:'iOS 13 Compatible',
info6:'Brand Warranty of 1 Year',
oldPrice:'47,900',
newPrice:'36,999',
discount:'22% off',
exchange:'Upto <b>&#8377;15,000</b> Off on Exchange'
},
{
name: 'APPLE iPhone 11 (Black, 128 GB)',
ratings:'4.6',
reviews:'57,153 Ratings & 4,340 Reviews',
imgName:'i2.jpg',
info1:'128 GB ROM',
info2:'15.49 cm (6.1 inch) Liquid Retina HD Display',
info3:'12MP + 12MP | 12MP Front Camera',
info4:'A13 Bionic Chip Processor',
info5:'Wireless charging (Works with Qi Chargers )',
info6:'Brand Warranty of 1 Year',
oldPrice:'59,999',
newPrice:'55,900',
discount:'6% off',
exchange:'Upto <b>&#8377;15,000</b> Off on Exchange'
},
{
name: 'APPLE iPhone SE (Black, 64 GB)',
ratings:'4.5',
reviews:'1,00,908 Ratings & 8,555 Reviews',
imgName:'i3.jpg',
info1:'64 GB ROM',
info2:'11.94 cm (4.7 inch) Retina HD Display',
info3:'12MP Rear Camera | 7MP Front Camera',
info4:'A13 Bionic Chip with 3rd Gen Neural Processor',
info5:'Fast Charge Capable',
info6:'Brand Warranty of 1 Year',
oldPrice:'39,000',
newPrice:'30,500',
discount:'23% off',
exchange:'Upto <b>&#8377;15,000</b> Off on Exchange'
},
{
name: 'APPLE iPhone 12 (Purple, 128 GB)',
ratings:'4.6',
reviews:'3,127 Ratings & 270 Reviews',
imgName:'i4.jpg',
info1:'128 GB ROM',
info2:'15.49 cm (6.1 inch) Super Retina XDR Display',
info3:'12MP + 12MP | 12MP Front Camera',
info4:'Ceramic Shield',
info5:'IP68 Water Resistance',
info6:'All Screen OLED Display',
oldPrice:'87,000',
newPrice:'87,000',
discount:'0% off',
exchange:'Upto <b>&#8377;15,000</b> Off on Exchange'
}
];
let cards_new = '';
for(let i=0;i<products.length;i++){
cards_new +=`
<div>
   <figure>
      <img src="./images/${products[i].imgName}">
   </figure>
   <figure>
      <h4><small><i class="fas fa-heart fa-sm"></i></small>${products[i].name}</h4>
      <figcaption>
         <p>${products[i].ratings} <span><i class="fas fa-star fa-xs"></i></span></p>
         <sub> ${products[i].reviews}</sub>
      </figcaption>
      <ul>
         <li>${products[i].info1}</li>
         <li>${products[i].info2}</li>
         <li>${products[i].info3}</li>
         <li>${products[i].info4}</li>
         <li>${products[i].info5}</li>
         <li>${products[i].info6}</li>
      </ul>
   </figure>
   <figure>
      <figcaption>
         <h3>  &#8377; ${products[i].newPrice}</h3>
      </figcaption>
      <figcaption> <del> &#8377; ${products[i].oldPrice}</del><big> ${products[i].discount}</big></figcaption>
      <tt>
         <figcaption>No Cost EMI</figcaption>
         <figcaption> ${products[i].exchange}</figcaption>
      </tt>
   </figure>
</div>
`
}
document.getElementById('flipkart_cards').innerHTML = cards_new;