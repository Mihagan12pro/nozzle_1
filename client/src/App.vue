<template>
  <div>
    <nav>
      <h3>Расчет сопла Лаваля</h3>
      <button class="btn">
        Новый расчет
      </button>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
  text-align: center;
}

nav {
  padding: 10px;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.89);
}

h3 {
  text-align: center;
  color: white;
  font-size: 30px;
  padding: 5px;
  padding-right: 50px;
  display: inline-block;
}

button {
  color: #fff;
  background: linear-gradient(to right, #11998e, #38ef7d);
  outline: none;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
  width: 200px;
  display: inline-block;
}

.btn {
  margin-left: 16rem;
}

button:hover {
  box-shadow: 3px 4px 20px #828282;
}
</style>