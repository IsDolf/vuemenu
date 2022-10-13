<template>
  <div class="home">
    <div class="p-3 display-4 shadow">
      <p @click="showWhereToFindUs = !showWhereToFindUs" 
         style="border-bottom: 3px solid silver" 
         :style="[showWhereToFindUs ? {'opacity': '.3'} : {'opacity': '1'}]" 
         class="hoverclickable shadow text-center rounded-pill">
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
          style="border-bottom: 3px solid silver;" 
          class="hoverclickable shadow text-center rounded-pill"
          :style="[OpenOrNot ? {'opacity': '.5'} : {'opacity': '1'}]">
            Working hours?
        </div>
        <div v-if="OpenOrNot" @click="OpenOrNot = !OpenOrNot">
          <table style="z-index: 1;" 
                 class="table table-striped mt-3">
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
             class="container-fluid rounded-pill p-2 shadow-lg" 
             style="max-width:450px;;z-index: 1; margin-bottom: 7%">
    </div>
    <p v-show="!showWhereToFindUs && !OpenOrNot" 
    class="display-4 d-md-none">
    {{ quotes[0] }}
    </p>
  </div>
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
      quotes: ['Life’s too short for bad coffee.','Our Coffee, Your Way.', 'A coffee lover’s coffee shop.', 'More than just coffee.','Your daily happiness.','A cup of happiness.','Coffee, Coffee, Coffee!','Coffee is forever.'],
    }
  },
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
  .hoverclickable:hover {
    cursor: pointer;
}
</style>