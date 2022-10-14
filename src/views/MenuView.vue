<template>
    <section class="mt-n2 p-n1">
      <div class="scrollingtext fixed-top">
        <h3> Quality Coffee &nbsp; &nbsp; 
          | &nbsp; &nbsp; Bar &nbsp; &nbsp; 
          | &nbsp; &nbsp; Toilet &nbsp; &nbsp; 
          | &nbsp; &nbsp; Wi-Fi &nbsp; &nbsp; 
          | &nbsp; &nbsp; Meeting Point &nbsp; &nbsp; 
          | &nbsp; &nbsp; Dog Friendly &nbsp; &nbsp; 
          | &nbsp; &nbsp; Coffee To Go &nbsp; &nbsp; 
          | &nbsp; &nbsp; Quality Coffee &nbsp; &nbsp; 
          | &nbsp; &nbsp; Bar &nbsp; &nbsp; 
          | &nbsp; &nbsp; Toilet &nbsp; &nbsp; 
          | &nbsp; &nbsp; Wi-Fi &nbsp; &nbsp; 
          | &nbsp; &nbsp; Meeting Point &nbsp; &nbsp; 
        </h3>
      </div>
      <div @click="allOrChoices = !allOrChoices" 
           class="d-flex">
        <button :class="{ buttonClickedIn: allOrChoices }" 
                @click="mainCategory" 
                class="hoverclickable border rounded-pill bg-transparent d-block-flex fixed-top m-5 p-2 fw-bold">
                {{ allCategory }}
        </button>

      </div>
      <div class="divmargin d-inline-flex rounded-pill border w-100 fixed-top btn-group-lg justify-content-between" 
          role="group">
        <div v-show="allOrChoices" 
             @click="TopliNapitciCategory">
          <button @click="selectedCategory = 'TopliNapitci'"
                  class="text-center border rounded-pill shadow-lg bg-light btn btn-lg" >
              <fa icon="fa-coffee" />
          </button>
        </div>
        <div v-show="allOrChoices" 
             @click="juicesCategory">
          <button @click="selectedCategory = 'Juices'" 
                  class="text-center border rounded shadow-lg bg-light btn btn-lg" >
            <fa icon="fa-lemon" />
          </button>
        </div>
        <div v-show="allOrChoices" 
             @click="sodaCategory">
          <button @click="selectedCategory = 'Soda'" 
                  class="text-center border rounded-pill shadow-lg bg-light btn btn-lg" >
            <fa icon="fa-cubes-stacked" />
          </button>
        </div>
        <div v-show="allOrChoices" 
             @click="beerCategory">
          <button @click="selectedCategory = 'Beers'" 
                  class="text-center border rounded shadow-lg bg-light btn btn-lg" >
            <fa icon="fa-beer" />
          </button>
        </div>
        <div v-show="allOrChoices" 
             @click="alcoholCategory">
          <button @click="selectedCategory = 'Alcohol'" 
                  class="text-center border rounded-pill shadow-lg bg-light btn btn-lg" >
            <fa icon="fa-wine-glass" />
          </button>
        </div>
      </div>
      <div class="divborderstyle rounded-pill mt-1">
        <p class="pborder display-1 shadow m-1">
           Menu
        </p>
      </div>
    </section>

  <!-- Scrollable modal -->
  <template v-for="item in filteredCategories" 
            :key="item.id">
    <div class="divborder modal-dialog modal-dialog-scrollable d-flex border-pill">
      <div class="cardwidth card d-flex text-center m-2">
          <h1 class="hborder m-1 shadow p-3">
            {{item.title}}
          </h1>
        <div class="card-body">
          <img :src="item.img" 
               class="itemimage shadow-lg rounded-pill">
           <h2 class="card-text border rounded-pill m-5 shadow-lg">
            {{ item.price }} KN
           </h2>
          <h4 class="card-text">
            {{ item.desc }}
          </h4>
        </div>
      </div>
    </div>
  </template>
</template>

<script>
    export default {
        data() {
            return {
              menuChoice: true,
              allOrChoices: false,
              allCategory: 'All',
              menu: [
  {
    id: 1,
    title: "Espresso",
    category: "TopliNapitci",
    price: 10,
    img: require("@/assets/item-1.jpeg"),
    desc: `Short coffee without milk.`,
  },
  
  {
    id: 2,
    title: "Small Macchiato",
    category: "TopliNapitci",
    price: 11,
    img: require("@/assets/item-2.jpeg"),
    desc: `Short coffee with milk in a small cup.`,
  },
  {
    id: 3,
    title: "Large Macchiato",
    category: "TopliNapitci",
    price: 13,
    img: require("@/assets/item-3.jpeg"),
    desc: `Short coffee with milk in a large mug.`,
  },
  {
    id: 4,
    title: "Latte Macchiato",
    category: "TopliNapitci",
    price: 15,
    img: require("@/assets/item-4.jpeg"),
    desc: `Short coffee with milk in a tall glass.`,
  },
  {
    id: 5,
    title: "Decaf Espresso",
    category: "TopliNapitci",
    price: 11,
    img: require("@/assets/item-1.jpeg"),
    desc: `Short decaffeinated coffee without milk.`,
  },
  {
    id: 6,
    title: "Decaf Small Macchiato",
    category: "TopliNapitci",
    price: 13,
    img: require("@/assets/item-2.jpeg"),
    desc: `Short decaffeinated coffee with milk in a small cup.`,
  },
  {
    id: 7,
    title: "Decaf Large Macchiato",
    category: "TopliNapitci",
    price: 16,
    img: require("@/assets/item-3.jpeg"),
    desc: `Short decaffeinated coffee with milk in a large mug.`,
  },
  {
    id: 8,
    title: "Decaf Latte Macchiato",
    category: "TopliNapitci",
    price: 17,
    img: require("@/assets/item-4.jpeg"),
    desc: `Short decaffeinated coffee with milk in a tall glass.`,
  },
  {
    id: 9,
    title: "Cocoa",
    category: "TopliNapitci",
    price: 15,
    img: require("@/assets/cacao.jpeg"),
    desc: `Cocoa with milk in a large mug.`,
  },
  {
    id: 10,
    title: "Nescafé",
    category: "TopliNapitci",
    price: 16,
    img: require("@/assets/nescafe.jpeg"),
    desc: `Vanilla / Chocolate / Hazelnut / Coconut / Irish / Classic`,
  },
  {
    id: 11,
    title: "Hot Chocolate",
    category: "TopliNapitci",
    price: 19,
    img: require("@/assets/hotchocolate.jpeg"),
    desc: `Chocolate in a cup.`,
  },
  {
    id: 12,
    title: "Tea",
    category: "TopliNapitci",
    price: 15,
    img: require("@/assets/tea.jpeg"),
    desc: `Black / Green / Mint / Forest Fruit / Indian `,
  },
  {
    id: 13,
    title: "Rum Punch",
    category: "TopliNapitci",
    price: 16,
    img: require("@/assets/rumpunch.jpeg"),
    desc: `A cup of hot Rum Punch.`,
  },
  {
    id: 14,
    title: "Milk",
    category: "TopliNapitci",
    price: 7,
    img: require("@/assets/milk.jpeg"),
    desc: `A little cup of warm milk.`,
  },
  {
    id: 15,
    title: "Orange Juice",
    category: "Juices",
    price: 12,
    img: require("@/assets/item-12.jpeg"),
    desc: `Freshly squeezed orange juice. 0.1l`,
  },
  {
    id: 16,
    title: "Lemonade",
    category: "Juices",
    price: 17,
    img: require("@/assets/item-13.jpeg"),
    desc: `Freshly squeezed lemonade. 0.1l`,
  },
  {
    id: 17,
    title: "Juicy Apple",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-14.jpeg"),
    desc: `Natural Juice - Apple , 0.2l`,
  },
  {
    id: 18,
    title: "Juicy Strawberry",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-15.jpeg"),
    desc: `Natural Juice - Strawberry, 0.2l`,
  },
  {
    id: 19,
    title: "Juicy Apricot",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-16.jpeg"),
    desc: `Natural Juice - Apricot, 0.2l`,
  },
  {
    id: 20,
    title: "Juicy Black Currant",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-17.jpeg"),
    desc: `Natural Juice - Black Currant, 0.2l`,
  },
  {
    id: 21,
    title: "Juicy Orange",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-18.jpeg"),
    desc: `Natural Juice - Orange, 0.2l`,
  },
  {
    id: 22,
    title: "Juicy Pineapple",
    category: "Juices",
    price: 16,
    img: require("@/assets/item-19.jpeg"),
    desc: `Natural Juice - Pineapple, 0.2l`,
  },
  {
    id: 23,
    title: "Coca-Cola",
    category: "Soda",
    price: 17,
    img: require("@/assets/cocacola.jpeg"),
    desc: `"Taste the feeling"`,
  },
  {
    id: 24,
    title: "Cockta",
    category: "Soda",
    price: 17,
    img: require("@/assets/cockta.jpeg"),
    desc: `"The Drink of Our and Your Youth!"`,
  },
  {
    id: 25,
    title: "Orangina",
    category: "Soda",
    price: 17,
    img: require("@/assets/orangina.jpeg"),
    desc: `"SHAKE IT!"`,
  },
  {
    id: 26,
    title: "Fanta",
    category: "Soda",
    price: 17,
    img: require("@/assets/fanta.jpeg"),
    desc: `“Be More Than One Flavor”`,
  },
  {
    id: 27,
    title: "Sprite",
    category: "Soda",
    price: 17,
    img: require("@/assets/sprite.jpeg"),
    desc: `"Freedom From Thirst"`,
  },
  {
    id: 28,
    title: "Schweppes Tonic Water",
    category: "Soda",
    price: 17,
    img: require("@/assets/tonic.jpeg"),
    desc: `"Seperating men from boys since 1783"`,
  },
  {
    id: 29,
    title: "Schweppes Tangerine",
    category: "Soda",
    price: 17,
    img: require("@/assets/tangerine.jpeg"),
    desc: `"Seperating men from boys since 1783"`,
  },
  {
    id: 30,
    title: "Schweppes Bitter Lemon",
    category: "Soda",
    price: 17,
    img: require("@/assets/bitterlemon.jpeg"),
    desc: `"Seperating men from boys since 1783"`,
  },
  {
    id: 31,
    title: "Jamnica mineral water",
    category: "Soda",
    price: 13,
    img: require("@/assets/jamnica.jpeg"),
    desc: `"At any moment"`,
  },
  {
    id: 32,
    title: "Jamnica Sensation",
    category: "Soda",
    price: 13,
    img: require("@/assets/sensation.jpeg"),
    desc: `"Lime Kiwano / Elder lemons"`,
  },
  {
    id: 33,
    title: "Ice Tea 'Jana'",
    category: "Juices",
    price: 13,
    img: require("@/assets/ledenicaj.jpeg"),
    desc: `"Peach / Forest Fruit , 0.33"`,
  },
  {
    id: 34,
    title: "Tomislav",
    category: "Beers",
    price: 21,
    img: require("@/assets/item-5.jpeg"),
    desc: `Dark beer, 7.2%, 0.5l`,
  },
  {
    id: 35,
    title: "Karlovačko",
    category: "Beers",
    price: 17,
    img: require("@/assets/item-6.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 36,
    title: "Ožujsko",
    category: "Beers",
    price: 17,
    img: require("@/assets/item-7.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 37,
    title: "Beck's",
    category: "Beers",
    price: 17,
    img: require("@/assets/item-8.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 38,
    title: "Stella Artois",
    category: "Beers",
    price: 20,
    img: require("@/assets/item-9.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 39,
    title: "Staropramen",
    category: "Beers",
    price: 18,
    img: require("@/assets/item-10.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 40,
    title: "Heineken",
    category: "Beers",
    price: 21,
    img: require("@/assets/item-11.jpeg"),
    desc: `Small light beer, 5%, 0.33l`,
  },
  {
    id: 41,
    title: "Radler",
    category: "Beers",
    price: 21,
    img: require("@/assets/radler.jpeg"),
    desc: `Radler beer, 2%, 0.5l`,
  },
  {
    id: 42,
    title: "Malvazija",
    category: "Alcohol",
    price: 13,
    img: require("@/assets/malvazija.jpeg"),
    desc: `Malvazija - White Wine, 0.1l`,
  },
  {
    id: 43,
    title: "Biska",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/biska.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 44,
    title: "Borovnička",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/borovnicka.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 45,
    title: "Brandy",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/brandy.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 46,
    title: "Gin",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/gin.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 47,
    title: "Lozovača",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/lozovaca.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 48,
    title: "Medica",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/medica.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 49,
    title: "Pelinkovac",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/pelinkovac.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 50,
    title: "Rum",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/rum.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 51,
    title: "Travarica",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/travarica.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 52,
    title: "Viljamovka",
    category: "Alcohol",
    price: 20,
    img: require("@/assets/viljamovka.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 53,
    title: "Vodka",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/vodka.jpeg"),
    desc: `Domestic Alc. Drink, 0.03l`,
  },
  {
    id: 54,
    title: "Amaro",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/amaro.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 55,
    title: "Aperol Spritz",
    category: "Alcohol",
    price: 27,
    img: require("@/assets/aperol.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 56,
    title: "Bacardi",
    category: "Alcohol",
    price: 22,
    img: require("@/assets/bacardi.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 57,
    title: "Ballantine's",
    category: "Alcohol",
    price: 24,
    img: require("@/assets/ballantines.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 58,
    title: "Campari",
    category: "Alcohol",
    price: 18,
    img: require("@/assets/campari.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 59,
    title: "Bitter",
    category: "Alcohol",
    price: 15,
    img: require("@/assets/bitter.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 60,
    title: "Chivas Regal",
    category: "Alcohol",
    price: 29,
    img: require("@/assets/chivas.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 61,
    title: "Courvoisier",
    category: "Alcohol",
    price: 30,
    img: require("@/assets/courvoisier.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 62,
    title: "Cynar",
    category: "Alcohol",
    price: 18,
    img: require("@/assets/cynar.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 63,
    title: "Gordon's",
    category: "Alcohol",
    price: 22,
    img: require("@/assets/gordons.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 64,
    title: "Hendricks",
    category: "Alcohol",
    price: 27,
    img: require("@/assets/hendricks.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 65,
    title: "Hennessy",
    category: "Alcohol",
    price: 28,
    img: require("@/assets/hennessy.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 66,
    title: "Jack Daniel's",
    category: "Alcohol",
    price: 26,
    img: require("@/assets/jackdaniels.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 67,
    title: "Jägermeister",
    category: "Alcohol",
    price: 22,
    img: require("@/assets/jagermeister.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 68,
    title: "Johnnie Walker",
    category: "Alcohol",
    price: 24,
    img: require("@/assets/johnniewalker.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 69,
    title: "Martell",
    category: "Alcohol",
    price: 30,
    img: require("@/assets/martell.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 70,
    title: "Smirnoff vodka",
    category: "Alcohol",
    price: 22,
    img: require("@/assets/smirnoff.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
  {
    id: 71,
    title: "Stock",
    category: "Alcohol",
    price: 16,
    img: require("@/assets/stock.jpeg"),
    desc: `Imported Alc. Drink, 0.03l`,
  },
], 
selectedCategory: "All"}
},
  methods: {
    
      TopliNapitciCategory() {
        this.allOrChoices = !this.allOrChoices;
        this.allCategory = 'Warm Drinks';
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      juicesCategory() {
        this.allOrChoices = !this.allOrChoices;
        this.allCategory = 'Juices';
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
      
      sodaCategory() {
        this.allOrChoices = !this.allOrChoices;
        this.allCategory = 'Carbonated beverages';
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      beerCategory() {
        this.allOrChoices = !this.allOrChoices;
        this.allCategory = 'Beers';
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      alcoholCategory() {
        this.allOrChoices = !this.allOrChoices;
        this.allCategory = 'Alcohol';
        window.scrollTo({top: 0, behavior: 'smooth'});
      },

      mainCategory() {
        this.selectedCategory = 'All'
        this.allCategory = 'All'
        window.scrollTo({top: 0, behavior: 'smooth'});
      },
  },
  computed: {
      filteredCategories: function() {
        let vm = this;
        let category = vm.selectedCategory;
          
        if(category === "All") {
          return vm.menu;
        } else {
          return vm.menu.filter(function(item) {
          return item.category === category;
         });
        }
      }
  },
};
</script>

<style>
    .hoverclickable {
      background: #ffffff;
      border: 1px solid rgb(216, 216, 216);
      padding: 10px 30px;
      border-radius: 3px;
      cursor: pointer;
    }

    .buttonClickedIn {
      color: #272727;
      text-shadow: -1px -1px 0px rgb(255, 255, 255), -1px -1px 0px rgb(255, 255, 255);
      box-shadow: inset 1px 1px 4px rgb(0, 0, 0);
      transform: translateY(1px);
    }

    .scrollingtext {
     height: 100px;	
     overflow: hidden;
     position: relative;
    }
    .scrollingtext h3 {
     font-size: 1em;
     color: rgb(0, 0, 0);
     position: absolute;
     width: 500%;
     height: 200%;
     margin: 0;
     line-height: 50px;
     text-align: center;
     /* Starting position */
     -moz-transform:translateX(10%);
     -webkit-transform:translateX(10%);	
     transform:translateX(10%);
     /* Apply animation to this element */	
     -moz-animation: scrollingtext 60s linear infinite;
     -webkit-animation: scrollingtext 60s linear infinite;
     animation: scrollingtext 60s linear infinite;
    }
    /* Move it (define the animation) */
    @-moz-keyframes scrollingtext {
     0%   { -moz-transform: translateX(100%); }
     100% { -moz-transform: translateX(-100%); }
    }
    @-webkit-keyframes scrollingtext {
     0%   { -webkit-transform: translateX(100%); }
     100% { -webkit-transform: translateX(-100%); }
    }
    @keyframes scrollingtext {
     0%   { 
     -moz-transform: translateX(100%); /* Firefox bug fix */
     -webkit-transform: translateX(100%); /* Firefox bug fix */
     transform: translateX(18%); 		
     }
     100% { 
     -moz-transform: translateX(-100%); /* Firefox bug fix */
     -webkit-transform: translateX(-100%); /* Firefox bug fix */
     transform: translateX(-94%); 
     }
    }

    .divmargin {
      margin:auto
    }

    .pborder {
      border-top-right-radius: 25px;
      border-top-left-radius: 25px;
    }

    .divborder {
      border-top: 1px solid silver; 
      border-right: 1px solid silver; 
      border-bottom: 1px solid silver; 
      border-left: 1px solid silver
    }
    
    .cardwidth {
      width: 100%;
    }

    .hborder {
      border-bottom-left-radius: 25px; 
      border-bottom-right-radius: 25px;
    }

    .itemimage {
      width: 80%;
      max-width: 500px;
      border: 0.1px solid gold; 
      border-top: 0.5px solid gold; 
      border-right: 0.5px solid gold
    }

    .divborderstyle {
      border-top: 0.1px solid silver;
    }
    </style>