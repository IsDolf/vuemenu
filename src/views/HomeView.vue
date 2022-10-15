<template>
  <div class="home">
    <div class="p-3 display-4 shadow">
      <p @click="showWhereToFindUs = !showWhereToFindUs"
         class="borderstyle hoverclickable text-center rounded-pill"
         :class="{ buttonClickedIn: showWhereToFindUs }">
         Where to find us?
      </p>
        <div v-if="showWhereToFindUs">
          <iframe 
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2804.9297966752188!2d14.436556315718919!3d45.3300400790997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4764a11fbb0ed88f%3A0x3e428b95bf6011fc!2sAquarius%203000!5e0!3m2!1sen!2shr!4v1665382885872!5m2!1sen!2shr"
             width="99%" 
             height="500" 
             class="rounded shadow-lg" 
             allowfullscreen="" 
             loading="lazy" 
             referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
        <div v-else @click="displayWorkingHours" 
          class="borderstyle hoverclickable shadow-inner text-center rounded-pill"
          :class="{ buttonClickedIn: OpenOrNot }">
            Working hours?
        </div>
        <div v-if="OpenOrNot" @click="OpenOrNot = !OpenOrNot">
          <table class="tablestyle table table-striped mt-3">
            <thead class="shadow rounded">
              <tr>
                <th scope="col" 
                  class="display-1 border shadow text-center inline">
                  <h4 class="fw-bold m-2">Currently</h4>
                </th>
                <th scope="col" 
                  class="display-2 border shadow text-center inline">
                 <h4 class="fw-bold m-2">{{ todayDate }}</h4>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row" 
                  class="border text-center">
                  <h4 class="m-2">Mon-Fri</h4>
                </th>
                <td class="text-center">
                  <h4 class="m-2">7 - 16</h4>
                </td>
              </tr>

              <tr>
                <th scope="row" 
                  class="border">
                 <h4 class="m-2">Saturday</h4>
                </th>
                <td class="border">
                  <h4 class="m-2">Closed</h4>
                </td>
              </tr>

              <tr>
                <th scope="row" class="border">
                <h4 class="m-2">Sunday</h4>
                </th>
                <td class="border">
                <h4 class="m-2">Closed</h4>
                </td>
             </tr>
            </tbody>
          </table>
        </div>
    </div>
          <br>
    <div>
      <p v-show="!showWhereToFindUs && !OpenOrNot" 
         class="display-1">
         Welcome!
      </p>
    </div>
    <div>
      <img src="../assets/coffeegif.gif"
           alt="coffee gif"
           class="imgstyle container-fluid rounded-pill p-2 shadow-lg">
    </div>
    <p v-show="!showWhereToFindUs && !OpenOrNot" 
       class="display-4 d-md-none">
       {{ quotes[0] }}
    </p>
  </div>
  <br><br><br><br><br><br><br>
  <div class="border rounded mx-2 shadow-lg">
    <p class="display-2 m-3 p-2 border rounded bg-light">News</p>
     <div class="scroll shadow">
      <div class="card text-center m-4 mt-0 rounded shadow-lg">
       <h5 class="m-2 border rounded-pill p-1">22.09.2022.</h5>
       <h5 class="card-title bg-light p-2 mx-3 border rounded">Autumn has started!</h5>
        <div class="border mt-0 m-3 rounded bg-light">
          <img src="../assets/hotchocolate.jpeg" style="max-width:250px;max-height:350px" class="card-img-top img-fluid rounded-pill mx-auto d-block border m-5" alt="...">
        </div>
        <div class="card-body">
         <h4 class="card-text bg-light p-2 border rounded">Hot chocolate is back!</h4>
        </div>
      </div>
     <div class="card text-center m-4 mt-0 rounded shadow-lg">
       <h5 class="m-2 border rounded-pill p-1">Info</h5>
       <h5 class="card-title bg-light p-2 mx-3 border rounded">Rijeka Tap Water</h5>
        <div class="border mt-0 m-3 rounded bg-light">
        <h4 class="m-2 text-center">Rated as one of the best of quality water in Croatia and under more strict
regulations than in most EU countries, our tap water is safe, drinkable and in most cases free. Because of our constant
water circulation, Aquarius 3000 is proud to have one of the best tap waters in the world.</h4>
        </div>
      <div class="card-body">
      <h4 class="card-text bg-light p-2 border rounded">Safe, drinkable, free!</h4>
      </div>
      </div>
     </div>
  </div>
  <br>
  <button v-if="!wifiClicked" 
          @click="wifiClicked = !wifiClicked" 
          class="iconshadow rounded btn btn-lg border position-relative">
          <fa icon="fa-wifi" />
  </button>
  <button v-else 
          @click="wifiClicked = !wifiClicked"
          class="iconshadow rounded btn border position-relative">
          '12345abc'
  </button>
  <br><br>

</template>
<script>

export default {
  mounted(){
    window.setInterval(()=>{
      this.quote();
    }, 4000);
  },
  methods: {
displayWorkingHours() {
  let date = new Date() 
  let day = date.getDay()
  let hour = date.getHours()
  this.OpenOrNot = !this.OpenOrNot
  //Checking if it is NOT weekend to display 'Open' or 'Closed'
  if(day != 6 && day != 0 && hour >=7 && hour < 16){
    this.todayDate = 'Open'
  } else {
    this.todayDate = 'Closed'
  }
  },
  quote(){
      const first = this.quotes.shift();
      this.quotes = this.quotes.concat(first);
    },
  },
  data() {
    return {
      showWhereToFindUs: false,
      OpenOrNot: false,
      todayDate: '',
      showingVideo: false,
      wifiClicked: false,
      quotes: ['Life’s too short for bad coffee.','Our Coffee, Your Way.', 'A coffee lover’s coffee shop.', 'More than just coffee.','Your daily happiness.','A cup of happiness.','Coffee, Coffee, Coffee!','Coffee is forever.'],
    }
  },
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
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
  .borderstyle {
    border-top: 0.8px solid black;
    border-left: 0.8px solid black;
    border-right: 1.2px solid black;
    border-bottom: 1.2px solid black;
  }

  .tablestyle {
    z-index: 1;
  }

  .imgstyle {
    max-width:450px;
    z-index: 1; 
    margin-bottom: 7%
  }

  .iconshadow {
    box-shadow: 0.8px 0.8px black;
  }

  .scroll {
    max-height: 700px;
    overflow-y: auto;
}
</style>