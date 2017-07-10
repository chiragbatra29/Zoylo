<template>
  <v-ons-page >
    <v-ons-toolbar class="centre">
      <div class="alignCentre">Doctors</div>
    </v-ons-toolbar>
    <!-- <app-header></app-header>
    <router-view></router-view> -->
    <ons-list>
      <div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="5">
        <ons-list-item v-for="doctor in doctorsArray">
          <img :src="doctor.image" />
          <div id="discription">
            <span class="docName">{{doctor.name}}</span>
            <span>{{doctor.speciality}}</span>
            <span>Experience:{{doctor.exp}} years</span>
            <ons-button class="buttonStyle"  v-on:click="dateTest()" value="dateTest()" modifier="large--cta">
                Book Appointment
            </ons-button>
          </div><hr />
        </ons-list-item>
      </div>
    </ons-list>
  </v-ons-page>
</template>

<script>
import Footer from './footer.vue'
import Header from './header.vue'

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer
    },
    data() {
      return {
        activeIndex: 0,
        doctorsArray: [],
        data: [],
        busy: false,
        page: 1
      };
    },

    methods: {
      dateTest: function() {
        var myNewDate = new Date();
        window.plugins.datePicker.show({
          date : myNewDate,
          mode : 'date',
          allowOldDates : true
        },function(returnDate) {
          var newDate = new Date(returnDate);
          alert(newDate.toString());
        });
      },

      loadMore: function() {
        this.busy = true;
          this.$http.get('http://192.168.15.100:2000/api/doctors/' + this.page).then(list => {
            this.doctorsArray = this.doctorsArray.concat(list.data.body);
            this.page++;
          });
        this.busy = false;
      }
    }
  }
</script>

<style>
  .alignCentre{
    margin: 0% 0% 0% 40%;
  }
  .centre{
    align-items: center;
    font-size: 22px;
    color: whitesmoke;
    background-color: #2eaab7;
  }
  .docName{
    font-size: 18px;
  }
  .buttonStyle{
    width: 163px;
    color: #2eaab7;
    top: -61px;
    float: left;
    font-size: 15px;
    left: 132px;
    background-color: rgba(255, 255, 255, 0.02);
  }
  img {
    float: left;
    max-height: 60px;
    max-width: 60px;
  }
  #discription{
    float: right;
    width: 146px;
    height: 18px;
    margin: -9% 8% 1% 4%;
    padding: 1px;
  }
</style>
