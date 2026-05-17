<template>
  <div id="app">
    <div class="main">
      <div class="card">
        <div class="leftside">
        </div>
        <div class="rightside">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
    body {
        font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .main {
        min-height: 100vh;
        width: 100%;
        display: flex;
        flex-direction: column;
        background-color: #ffffff;
        color: #1f121b;
    }

    .card {
        width: 70rem;
        margin: auto;
        margin-top: 50px;
        background: white;
        position: center;
        align-self: center;
        top: 50rem;
        box-shadow: 4px 3px 20px #3535358c;
        display: flex;
        flex-direction: row;
    }

    .leftside {
        background-color: #ffffff;
        width: 35rem;
        padding: 1rem 2rem 5rem 3rem;
        text-align: center;
    }
    .rightside {
        background-color: #ffffff;
        width: 40rem;
        padding: 1rem 2rem 5rem 3rem;
        box-shadow: 0px 0px 4px #3535358c;
        text-align: center;
    }
</style>