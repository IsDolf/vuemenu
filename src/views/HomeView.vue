<template>
  <table class="table">
    <thead>
      <tr class="shadow-lg bg-white text-secondary">
        <th scope="col">
          <p class="text-start h3 mb-0 fw-bolder fst-italic">Beverages</p>
        </th>
        <th v-if="!eur" @click="eur = !eur" scope="col"><span class="border btn">EUR</span></th>
        <th v-else @click="eur = !eur" scope="col"><span class="border btn">HRK</span></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="drink in menu">
        <td scope="col">
          <p class="h4 text-start fst-italic">{{drink.title}}</p>
          <p class="h6 text-start">{{ drink.desc }} </p>
        </td>
        <td v-if="eur">
          <p class="h4 text-center fst-italic fw-light text-nowrap"> {{ drink.price }} <span
              class="font-monospace">€</span></p>
        </td>
        <td v-else>
          <p class="h4 text-center fst-italic fw-light text-nowrap"> {{ Math.round((drink.price * 7.53450) * 10)/10 }}
            <span class="font-monospace">HRK</span></p>
        </td>
      </tr>
    </tbody>
  </table>
  <br>
  <transition name="bounce">
    <footer key="1" v-if="showPassword"
      class="fixed-bottom shadow-lg border-top border-secondary fst-italic pt-1 fw-bold rounded-bottom rounded-pill bg-white">
      <span>Password - 12345abc</span><img @click="showPassword = !showPassword" class="fixed-bottom mx-3 m-1 rounded"
        src="../assets/wifiicon.jpeg" alt="wifi" width="20"></footer>
    <img key="2" @click="showPassword = !showPassword" v-else
      class="fixed-bottom m-auto rounded-pill btn bg-white border-secondary mb-1" src="../assets/wifiicon.jpeg"
      alt="wifi" width="50">
  </transition>
</template>

<script>
  export default {
    data() {
      return {
        eur: true,
        showPassword: false,
        menu: [{
            id: 1,
            title: "Espresso",
            category: "TopliNapitci",
            price: 1.33,
            img: require("@/assets/item-1.jpeg"),
            desc: `Short coffee without milk.`,
          },

          {
            id: 2,
            title: "Small Macchiato",
            category: "TopliNapitci",
            price: 1.46,
            img: require("@/assets/item-2.jpeg"),
            desc: `Short coffee with milk in a small cup.`,
          },
          {
            id: 3,
            title: "Large Macchiato",
            category: "TopliNapitci",
            price: 1.73,
            img: require("@/assets/item-3.jpeg"),
            desc: `Short coffee with milk in a large mug.`,
          },
          {
            id: 4,
            title: "Latte Macchiato",
            category: "TopliNapitci",
            price: 1.99,
            img: require("@/assets/item-4.jpeg"),
            desc: `Short coffee with milk in a tall glass.`,
          },
          {
            id: 5,
            title: "Decaf Espresso",
            category: "TopliNapitci",
            price: 1.46,
            img: require("@/assets/item-1.jpeg"),
            desc: `Short decaffeinated coffee without milk.`,
          },
          {
            id: 6,
            title: "Decaf Small Macchiato",
            category: "TopliNapitci",
            price: 1.73,
            img: require("@/assets/item-2.jpeg"),
            desc: `Short decaffeinated coffee with milk in a small cup.`,
          },
          {
            id: 7,
            title: "Decaf Large Macchiato",
            category: "TopliNapitci",
            price: 2.12,
            img: require("@/assets/item-3.jpeg"),
            desc: `Short decaffeinated coffee with milk in a large mug.`,
          },
          {
            id: 8,
            title: "Decaf Latte Macchiato",
            category: "TopliNapitci",
            price: 2.26,
            img: require("@/assets/item-4.jpeg"),
            desc: `Short decaffeinated coffee with milk in a tall glass.`,
          },
          {
            id: 9,
            title: "Cocoa",
            category: "TopliNapitci",
            price: 1.99,
            img: require("@/assets/cacao.jpeg"),
            desc: `Cocoa with milk in a large mug.`,
          },
          {
            id: 10,
            title: "Nescafé",
            category: "TopliNapitci",
            price: 2.12,
            img: require("@/assets/nescafe.jpeg"),
            desc: `Vanilla / Chocolate / Hazelnut / Coconut / Irish / Classic`,
          },
          {
            id: 11,
            title: "Hot Chocolate",
            category: "TopliNapitci",
            price: 2.52,
            img: require("@/assets/hotchocolate.jpeg"),
            desc: `Chocolate in a cup.`,
          },
          {
            id: 12,
            title: "Tea",
            category: "TopliNapitci",
            price: 1.99,
            img: require("@/assets/tea.jpeg"),
            desc: `Black / Green / Mint / Forest Fruit / Indian `,
          },
          {
            id: 13,
            title: "Rum Punch",
            category: "TopliNapitci",
            price: 2.12,
            img: require("@/assets/rumpunch.jpeg"),
            desc: `A cup of hot Rum Punch.`,
          },
          {
            id: 14,
            title: "Milk",
            category: "TopliNapitci",
            price: 0.93,
            img: require("@/assets/milk.jpeg"),
            desc: `A little cup of warm milk.`,
          },
          {
            id: 15,
            title: "Orange Juice",
            category: "Juices",
            price: 1.59,
            img: require("@/assets/item-12.jpeg"),
            desc: `Freshly squeezed orange juice. 0.1l`,
          },
          {
            id: 16,
            title: "Lemonade",
            category: "Juices",
            price: 2.30,
            img: require("@/assets/item-13.jpeg"),
            desc: `Freshly squeezed lemonade. 0.3l`,
          },
          {
            id: 17,
            title: "Juicy Apple",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-14.jpeg"),
            desc: `Natural Juice - Apple , 0.2l`,
          },
          {
            id: 18,
            title: "Juicy Strawberry",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-15.jpeg"),
            desc: `Natural Juice - Strawberry, 0.2l`,
          },
          {
            id: 19,
            title: "Juicy Apricot",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-16.jpeg"),
            desc: `Natural Juice - Apricot, 0.2l`,
          },
          {
            id: 20,
            title: "Juicy Black Currant",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-17.jpeg"),
            desc: `Natural Juice - Black Currant, 0.2l`,
          },
          {
            id: 21,
            title: "Juicy Orange",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-18.jpeg"),
            desc: `Natural Juice - Orange, 0.2l`,
          },
          {
            id: 22,
            title: "Juicy Pineapple",
            category: "Juices",
            price: 2.12,
            img: require("@/assets/item-19.jpeg"),
            desc: `Natural Juice - Pineapple, 0.2l`,
          },
          {
            id: 23,
            title: "Coca-Cola",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/cocacola.jpeg"),
            desc: `"Taste the feeling"`,
          },
          {
            id: 24,
            title: "Cockta",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/cockta.jpeg"),
            desc: `"The Drink of Our and Your Youth!"`,
          },
          {
            id: 25,
            title: "Orangina",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/orangina.jpeg"),
            desc: `"SHAKE IT!"`,
          },
          {
            id: 26,
            title: "Fanta",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/fanta.jpeg"),
            desc: `“Be More Than One Flavor”`,
          },
          {
            id: 27,
            title: "Sprite",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/sprite.jpeg"),
            desc: `"Freedom From Thirst"`,
          },
          {
            id: 28,
            title: "Schweppes Tonic Water",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/tonic.jpeg"),
            desc: `"Seperating men from boys since 1783"`,
          },
          {
            id: 29,
            title: "Schweppes Tangerine",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/tangerine.jpeg"),
            desc: `"Seperating men from boys since 1783"`,
          },
          {
            id: 30,
            title: "Schweppes Bitter Lemon",
            category: "Soda",
            price: 2.26,
            img: require("@/assets/bitterlemon.jpeg"),
            desc: `"Seperating men from boys since 1783"`,
          },
          {
            id: 31,
            title: "Jamnica mineral water",
            category: "Soda",
            price: 1.73,
            img: require("@/assets/jamnica.jpeg"),
            desc: `"At any moment"`,
          },
          {
            id: 32,
            title: "Jamnica Sensation",
            category: "Soda",
            price: 1.73,
            img: require("@/assets/sensation.jpeg"),
            desc: `"Lime Kiwano / Elder lemons"`,
          },
          {
            id: 33,
            title: "Ice Tea 'Jana'",
            category: "Juices",
            price: 1.86,
            img: require("@/assets/ledenicaj.jpeg"),
            desc: `"Peach / Forest Fruit , 0.33"`,
          },
          {
            id: 34,
            title: "Tomislav",
            category: "Beers",
            price: 2.79,
            img: require("@/assets/item-5.jpeg"),
            desc: `Dark beer, 7.2%, 0.5l`,
          },
          {
            id: 35,
            title: "Karlovačko",
            category: "Beers",
            price: 2.26,
            img: require("@/assets/item-6.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 36,
            title: "Ožujsko",
            category: "Beers",
            price: 2.26,
            img: require("@/assets/item-7.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 37,
            title: "Beck's",
            category: "Beers",
            price: 2.26,
            img: require("@/assets/item-8.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 38,
            title: "Stella Artois",
            category: "Beers",
            price: 2.65,
            img: require("@/assets/item-9.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 39,
            title: "Staropramen",
            category: "Beers",
            price: 2.39,
            img: require("@/assets/item-10.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 40,
            title: "Heineken",
            category: "Beers",
            price: 2.79,
            img: require("@/assets/item-11.jpeg"),
            desc: `Small light beer, 5%, 0.33l`,
          },
          {
            id: 41,
            title: "Radler",
            category: "Beers",
            price: 2.79,
            img: require("@/assets/radler.jpeg"),
            desc: `Radler beer, 2%, 0.5l`,
          },
          {
            id: 42,
            title: "Malvazija",
            category: "Alcohol",
            price: 1.73,
            img: require("@/assets/malvazija.jpeg"),
            desc: `Malvazija - White Wine, 0.1l`,
          },
          {
            id: 43,
            title: "Biska",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/biska.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 44,
            title: "Borovnička",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/borovnicka.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 45,
            title: "Brandy",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/brandy.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 46,
            title: "Gin",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/gin.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 47,
            title: "Lozovača",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/lozovaca.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 48,
            title: "Medica",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/medica.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 49,
            title: "Pelinkovac",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/pelinkovac.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 50,
            title: "Rum",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/rum.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 51,
            title: "Travarica",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/travarica.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 52,
            title: "Viljamovka",
            category: "Alcohol",
            price: 2.65,
            img: require("@/assets/viljamovka.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 53,
            title: "Vodka",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/vodka.jpeg"),
            desc: `Domestic Alc. Drink, 0.03l`,
          },
          {
            id: 54,
            title: "Amaro",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/amaro.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 55,
            title: "Aperol Spritz",
            category: "Alcohol",
            price: 3.58,
            img: require("@/assets/aperol.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 56,
            title: "Bacardi",
            category: "Alcohol",
            price: 2.92,
            img: require("@/assets/bacardi.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 57,
            title: "Ballantine's",
            category: "Alcohol",
            price: 3.19,
            img: require("@/assets/ballantines.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 58,
            title: "Campari",
            category: "Alcohol",
            price: 2.39,
            img: require("@/assets/campari.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 59,
            title: "Bitter",
            category: "Alcohol",
            price: 1.99,
            img: require("@/assets/bitter.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 60,
            title: "Chivas Regal",
            category: "Alcohol",
            price: 3.85,
            img: require("@/assets/chivas.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 61,
            title: "Courvoisier",
            category: "Alcohol",
            price: 3.98,
            img: require("@/assets/courvoisier.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 62,
            title: "Cynar",
            category: "Alcohol",
            price: 2.39,
            img: require("@/assets/cynar.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 63,
            title: "Gordon's",
            category: "Alcohol",
            price: 2.92,
            img: require("@/assets/gordons.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 64,
            title: "Hendricks",
            category: "Alcohol",
            price: 3.58,
            img: require("@/assets/hendricks.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 65,
            title: "Hennessy",
            category: "Alcohol",
            price: 3.72,
            img: require("@/assets/hennessy.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 66,
            title: "Jack Daniel's",
            category: "Alcohol",
            price: 3.45,
            img: require("@/assets/jackdaniels.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 67,
            title: "Jägermeister",
            category: "Alcohol",
            price: 2.92,
            img: require("@/assets/jagermeister.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 68,
            title: "Johnnie Walker",
            category: "Alcohol",
            price: 3.19,
            img: require("@/assets/johnniewalker.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 69,
            title: "Martell",
            category: "Alcohol",
            price: 3.98,
            img: require("@/assets/martell.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 70,
            title: "Smirnoff vodka",
            category: "Alcohol",
            price: 2.92,
            img: require("@/assets/smirnoff.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
          {
            id: 71,
            title: "Stock",
            category: "Alcohol",
            price: 2.12,
            img: require("@/assets/stock.jpeg"),
            desc: `Imported Alc. Drink, 0.03l`,
          },
        ],
      }
    },
    methods: {},
    computed: {},
  };
</script>

<style>
  .bounce-enter-active {
    animation: bounce-in 0.7s;
  }

  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }

    50% {
      transform: scale(1.05);
    }

    100% {
      transform: scale(1);
    }
  }
</style>