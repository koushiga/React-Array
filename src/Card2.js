import Detail from './Detail';

function Card() {
    const Data=[
      {
        image:"../one.jfif",
        name:"McDonald's",
        rating:4.2,
        des:"Burgers,Beverages,Cafe",
        address:"Nehru Nagar"
      },
      {
        image:"../two.webp",
        name:"Domino's",
        rating:4.3,
        des:"Burgers,Cafe,Deserts",
        address:"Karapakkam"
      },
      {
        image:"../four.jpg",
        name:"KFC",
        rating:4.1,
        des:"Burgers,Briyani,Cafe,Deserts",
        address:"OMR-Perungudi"
      },
      {
        image:"../five.webp",
        name:"A2B-Adyar Ananda Bhavan",
        rating:4.4,
        des:"South Indian,North Indian,Sweets....",
        address:"Pallikaranai"
      },
      {
        image:"../six.webp",
        name:"Barbeque Nation",
        rating:3.8,
        des:"North Indian,Barbecue,Briyani,....",
        address:"Thuraipakkam"
      },
      {
        image:"../seven.webp",
        name:"Andra Gunpowder",
        rating:4.2,
        des:"Andhra,Briyani,South Indian",
        address:"OMR Perungudi"
      },
      {
        image:"../eight.webp",
        name:"The BVK Briyani",
        rating:3.9,
        des:"South Indian,Briyani",
        address:"Thiruvanmiyur"
      },
      {
        image:"../nine.webp",
        name:"Kumarakom",
        rating:4.3,
        des:"Kerala",
        address:"Perungudi"
      },
      {
        image:"../ten.webp",
        name:"French Loaf",
        rating:4.3,
        des:"Deserts,Cakes and Pastries,Bakers....",
        address:"Neelankarai"
      },
      {
        image:"../eleven.webp",
        name:"Hotel Saravana Bhavan",
        rating:4.2,
        des:"South Indian,North Indian,Sweets",
        address:"Perungudi"
      }
    ]
    return(
      <div className="Card">
        <Detail userData={Data}/>
      </div>
    );
    }
    
    export default Card;
    