<template>
  <div id="app">
    <div class="main">
      <div class="card">
        <div class="leftside">
                <h2>Был запущен расчет со следующими входными параметрами:</h2>
                <p>
                Давление воздуха <b>P₀</b> на входе в сопло:
                <b>{{ P_input }}</b> (Па)
                </p>
                <p>
                Температура воздуха <b>T₀</b> на входе в сопло:
                <b>{{ T_input }}</b> (К)
                </p>
                <p>
                Давление воздуха <b>P₁</b> на выходе из сопла:
                <b>{{ P_output }}</b> (Па)
                </p>
                <p>
                Расход воздуха <b>G</b> через сопло: <b>{{ G }}</b> (Кг/с)
                </p>
                <p>
                Угол раскрытия сопла <b>α</b> - входная часть:
                <b>{{ Alpha }}</b> (°)
                </p>
                <p>
                Угол раскрытия сопла <b>β</b> - выходная часть:
                <b>{{ Betta }}</b> (°)
                </p>
                <button class="button">Остановить расчет</button>
                <button class="button">Открыть ParaView для просмотра текущих результатов</button>
                <button class="button">Открыть файл log для просмотра решения</button>
        </div>
        <div class="rightside">
            <h2>Подготовка к расчету:</h2>
            <p
                :class="{
                    green: cleaned == 'Файлы предыдущего решения успешно удалены.',
                    red: cleaned == 'Не удалось очистить файлы предыдущего решения.',
                }"
                >
                {{ cleaned || "Очистка файлов предыдущего решения" }}
            </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "ResultPage",
    data() {
        return {
            P_input: "",
            T_input: "",
            P_output: "",
            G: "",
            Alpha: "",
            Betta: "",
            cleaned: "",
        }
    },
    created() {
        this.getParams();   
    },
    methods: {
        getParams() {
            axios
            .get(`http://localhost:8081/params/`)
            .then((response) => {
                let json = response.data;
                this.P_input = json.p_input;
                this.T_input = json.t_input;
                this.P_output = json.p_output;
                this.G = json.g;
                this.Alpha = json.alpha;
                this.Betta = json.betta;
                this.clean();
            })
            .catch((error) => console.log(error));
        },

        clean() {
            axios
                .get(`http://localhost:8081/cleaned/`)
                .then((response) => {
                let json = response.data;
                this.cleaned = json.cleaned;
                console.log(json);
                })
                .catch((error) => console.log(error));
        },
    },
  };
</script>

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
    p {
        margin: 0.1rem 0;
        font-size: 1.1rem;
        font-weight: 400;
    }
    .button {
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
        min-width: 500px;
        margin-top: 20px;
    }

    .green {
        color: green;
    }
    .red {
        color: rgb(163, 27, 27);
    }
</style>