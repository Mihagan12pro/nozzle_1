<template>
    <div class="box">
        <form action="" id="app" method="post">
            <h2>Входные параметры:</h2>
            <div class="input-container">
                <input type="number" 
                    name="p_input" 
                    v-model="P_input"
                     min="1" 
                     @keypress="NumbersOnly"
                     required />
                <label>Давление воздуха <b>P₀</b> на входе в сопло (Па)</label>
            </div>
            <div class="input-container">
                <input 
                    type="number"
                    class="inputbox" 
                    name="t_input" 
                    v-model="T_input"
                    min="1"
                    @keypress="NumbersOnly" 
                    required />
                <label>Температура воздуха <b>T₀</b> на входе в сопло (К)</label>
            </div>
            <div class="input-container">
                <input
                    type="number"
                    class="inputbox"
                    name="g"
                    v-model="G"
                    min="0"
                    @keypress="NumbersOnly"
                    required
                />
                <label>Расход воздуха <b>G</b> через сопло (Кг/с)</label>
            </div>
            <div class="input-container">
                <input
                    type="number"
                    class="inputbox"
                    name="alpha"
                    v-model="Alpha"
                    min="1"
                    max="89"
                    @keypress="NumbersOnly"
                    required/>
                <label>Угол раскрытия сопла <b>α</b> - входная часть (°)</label>
            </div>
            <button type="submit" class="btn">Расчет</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "FormComponent",
    data() {
        return {
            P_input: 200000,
            T_input: 1000,
            P_output: 8000,
            G: 2.0,
            Alpha: 14,
            Betta: 22,
        };
    },
    methods: {
        NumbersOnly(evt) {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
            evt.preventDefault();
            } else {
            return true;
            }
        }
    },
};
</script>

<style scoped>
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: Trebuchet MS, Lucida Grande, Lucida Sans Unicode, Lucida Sans, Tahoma, sans-serif;
    }

    h2 {
        color: rgb(0, 0, 0);
        padding-bottom: 40px;
    }

    .box {
        background-color: white;
        padding: 0 30px;
        padding-bottom: 30px;
        display: inline-block;
        width: 45%;
        overflow: hidden;
        background-size: cover;
        box-shadow: 10px 5px 5px #d3d3d3;
        margin-right: 10px;
        margin-top: 40px;
    }

    .input-container {
        position: relative;
        margin-bottom: 40px;
    }

    .input-container label {
        position: absolute;
        top: -14px;
        left: 0px;
        font-size: 14px;
        color: rgb(123, 123, 123);
        transition: all 0.5s ease-in-out;
    }

    .input-container input {
        border: 0;
        border-bottom: 1px solid #555;
        background: transparent;
        width: 100%;
        padding: 8px 0 5px 0;
        font-size: 16px;
        color: rgb(0, 0, 0);
    }

    .input-container input:focus {
        outline: none;
        border-width: 1px;
        border-image: linear-gradient(to right, #11998e, #38ef7d);
        border-image-slice: 1;
    }

    .input-container input:focus~label,
    .input-container input:valid~label {
        color: rgb(0, 0, 0);
        top: -18px;
        font-size: 16px;
    }
    .btn {
        color: #fff;
        background: linear-gradient(to right, #11998e, #38ef7d);
        outline: none;
        border: 0;
        padding: 10px 20px;
        text-transform: uppercase;
        border-radius: 2px;
        cursor: pointer;
        position: relative;
    }
</style>