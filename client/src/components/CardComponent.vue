<template>
  <div class="container">
    <div class="card">
      <h3 class="card--title">Исходные данные для расчета</h3>
      <section class="card__content">
        <p>
          1. Среда - воздух.<br />
          2. Газовая постоянная воздуха R = 287 Дж/(кг·К).<br />
          3. Показатель адиабаты k = 1.4.
        </p>
      </section>
    </div>
    <img id="img" src="../assets/Soplo.png" alt="Изображение сопла" />
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

<style>
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
    height: auto; /* Изменено с 80% на auto для сохранения пропорций */
    margin-top: -7rem;
  }

  .card {
    border-radius: 3px;
    box-shadow: -10px -5px 5px #d3d3d3;
    padding: 20px 30px;
    padding-bottom: 10rem;
    width: 100%;
  }

  .card--title {
    text-align: center;
    font-weight: bold; /* Изменено с 90 на bold для лучшей читаемости */
  }

  .card__content {
    padding: 10px;
    box-sizing: border-box;
    line-height: 2;
  }

  .card__content p {
    color: black;
  }
</style>
