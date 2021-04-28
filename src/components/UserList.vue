<template>
  <div class="people-list">
    <Header />
    <div class="wrapper">
      <div class="person_card" v-for="person in people" :key="person.phone">
        <!-- <router-link :to="'/user-detail/' + person.id.value"> -->
        <router-link
          :to="{
            name: 'UserDetail',
            params: {
              id: person.id.value,
              image: person.picture.large,
              title: person.name.title,
              firstName: person.name.first,
              lastName: person.name.last,
              dob: person.dob.date,
              residence: person.location.city,
              email: person.email,
              phone: person.phone

            },
            props: { image: person.picture.large },
          }"
        >
          <img alt="Dept logo" :src="person.picture.large" />
          <h4>
            {{ person.name.title }} <span></span>{{ person.name.first }}
            <span></span> {{ person.name.last }}
          </h4>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Header from './Header';

export default {
  name: "PeopleList",
  components: {
    Header
  },
  props: {
    msg: String,
  },
  data() {
    return {
      data: undefined,
      people: [],
      userImage: null,
      title: String,
      firstName: String,
      lastName: String,
      dateOfBirth: Number,
      residence: String,
      city: String,
      email: String,
      phone: String,
    };
  },
  methods: {
    fetchData() {
      axios.get("https://randomuser.me/api/?results=15").then((response) => {
        // this.userImage = data.data.results[0].picture.large;
        // this.title = data.data.results[0].name.title;
        // this.firstName = data.data.results[0].name.first;
        // this.lastName = data.data.results[0].name.last;
        this.data = response.data.results;
        this.data.forEach((element) => {
          console.log("element", element);
          if (element.dob.age > 18) {
            this.people.push(element);
          }
        });

        console.log("hey", this.people);
      });
    },
  },
  mounted() {
    this.fetchData();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
}

.wrapper {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: baseline;
}

.person_card {
  position: relative;
  display: block;
  width: 200px;
  height: auto;
  background: rgb(187, 187, 180);
  margin: 20px auto;
  overflow: visible;
  border-radius: 10px;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
  -webkit-box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 120px -25px rgba(0, 0, 0, 0.5);
  text-shadow: 2px 2px rgba(0, 0, 0, 0.09);
}

h4 {
  text-align: center;
}

.person_card img {
  width: 100%;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
}

.person_card:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

a {
  color: black;
  text-decoration: none;
  
}
</style>
