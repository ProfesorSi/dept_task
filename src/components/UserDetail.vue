<template>
  <div class="wrapper">
    <Header />
    <button @click="goBack">&#8592;</button> <br />
    <br />
    <div class="user-detail">
      <div class="person-info-left">
        <img alt="Dept logo" :src="image" />
        <h5>{{ title }} {{ firstName }} {{ lastName }}</h5>
      </div>

      <div class="person-info-right">
        <ul>
          <li>
            Date of birth: <br />
            {{ dob | formatDate }} <br />
          </li>
          <li>Place of residence: {{ residence }} <br /></li>
          <li>E-mail: {{ email }} <br /></li>
          <li>Phone number: {{ phone }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>


<script>
import Header from "./Header";

export default {
  name: "UserDetail",
  components: {
    Header,
  },
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  props: {
    image: String,
    title: String,
    firstName: String,
    lastName: String,
    dob: String,
    residence: String,
    email: String,
    phone: String,
  },
  mounted() {
    console.log(this.image);
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>


<style scoped>
button {
  float: left;
}
.user-detail {
  display: flex;
  justify-content: center;
  align-items: inherit;
  padding: 20px;
  max-width: 500px;
  background: rgb(223, 223, 138);
  border-radius: 20px;
}

.person-info-left img {
  border-radius: 10px;
}

.person-info-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: -60px;
  padding: 20px;
}

.person-info-right ul {
  list-style-type: none;
}

.person-info-right li {
  padding: 5px;
}

button {
  font-size: 30px;
  background: rgb(255, 255, 255);
  border: none;
}

@media screen and (max-width: 800px) {
  body {
    background-color: olive;
  }

  .user-detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    padding: 20px;
  }

  .person-info-right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-left: -30px;
  }
}
</style>