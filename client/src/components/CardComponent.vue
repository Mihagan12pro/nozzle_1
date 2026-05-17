<template>
  <div class="container">
    <div class="card">
      <h3 class="card--title">Исходные данные для расчета</h3>
      <section class="card__content">
        <p>
          1. Среда - воздух. <br />
          2. Газовая постоянная воздуха R = 287 Дж/(кг*К).
          <br />
          3. Показатель адиабаты k = 1.4.
        </p>
      </section>
    </div>
    <img id="img" src="../assets/Soplo.png" />
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  data() {
    return {};
  },
};
</script>

@import url("https://fonts.googleapis.com/css?family=Noto+Sans:400,400i,700,700i&subset=greek-ext");

.container {
  display: inline-block;
  width: 50%;
  overflow: hidden;
  background-size: cover;
  padding: 30px;
  vertical-align: top;
}

#img {
  width: 100%;
  height: 80%;
  margin-top: -7rem;
}

.card {
  border-radius: 3px;
  box-shadow: -10px -5px 5px #d3d3d3;
  padding: 20px 30px;
  padding-bottom: 10rem;
  width: 100%;
  margin: 0 0;
}

.card--title {
  text-align: center;
  font-weight: 90;
}

.card__content {
    padding: 10px;
    box-sizing: border-box;
    line-height: 2;
}

.card__content p {
    color: black;
}

