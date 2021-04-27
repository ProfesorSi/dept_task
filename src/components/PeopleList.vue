<template>
  <div class="people-list">
    <header>
      <img alt="Dept logo" src="../assets/logo.svg" />
    </header>
    <div class="wrapper">
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
      <div class="person_card">
        <img alt="Dept logo" src="../assets/rock.jpg" />
        <h4>The Rock</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PeopleList",
  props: {
    msg: String,
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
  width: 250px;
  height: 250px;
  background: grey;
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

img {
  max-height: 250px !important;
  width: 250px;
  border-radius: 10px;
}

.person_card:hover {
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  -webkit-box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  box-shadow: 0px 0px 80px -25px rgba(0, 0, 0, 0.5);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}
</style>
