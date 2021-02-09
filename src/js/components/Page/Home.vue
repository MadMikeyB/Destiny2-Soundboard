<template>
    <div>
        <h1>Destiny 2 Soundboard</h1>
        <p>Click an image below to get started.</p>
        <p><a href="">Disclaimers &amp; Credits</a></p>
        <div class="grid">
            <router-link to="/soundboards/calus"><div title="Calus" v-tippy><img src="dist/img/Calus.png" alt="Calus"></div></router-link>
            <router-link to="/soundboards/cayde"><div title="Cayde" v-tippy><img src="dist/img/Cayde.gif" alt="Cayde"></div></router-link>
            <router-link to="/soundboards/crypt-ai"><div title="CryptAI" v-tippy><img src="dist/img/CryptAI.jpg" alt="CryptAI"></div></router-link>
            <router-link to="/soundboards/drifter"><div title="Drifter" v-tippy><img src="dist/img/Drifter.jpg" alt="Drifter"></div></router-link>
            <router-link to="/soundboards/eramis"><div title="Eramis" v-tippy><img src="dist/img/Eramis.png" alt="Eramis"></div></router-link>
            <router-link to="/soundboards/eris"><div title="Eris" v-tippy><img src="dist/img/Eris.png" alt="Eris"></div></router-link>
            <router-link to="/soundboards/failsafe"><div title="Failsafe" v-tippy><img src="dist/img/Failsafe.jpg" alt="Failsafe"></div></router-link>
            <router-link to="/soundboards/ghaul"><div title="Ghaul" v-tippy><img src="dist/img/Ghaul.jpg" alt="Ghaul"></div></router-link>
            <router-link to="/soundboards/ikora"><div title="Ikora" v-tippy><img src="dist/img/Ikora.jpg" alt="Ikora"></div></router-link>
            <router-link to="/soundboards/saint-14"><div title="Saint14" v-tippy><img src="dist/img/Saint14.jpg" alt="Saint14"></div></router-link>
            <router-link to="/soundboards/saladin"><div title="Saladin" v-tippy><img src="dist/img/Saladin.jpg" alt="Saladin"></div></router-link>
            <router-link to="/soundboards/shaxx"><div title="Shaxx" v-tippy><img src="dist/img/Shaxx.jpg" alt="Shaxx"></div></router-link>
        </div>
    </div>
</template>

<script>
    import NavMenu from "../Layout/NavMenu"
    export default {
        props: [],
        components: {},
        mounted() {},
        created() {},
        watch: {},
        data() {
            return {}
        },
        methods: {}
    };
</script>

<style lang="scss" scoped>
    a {
        text-decoration: underline;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        div {
            position: relative;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            
            img {
                width: 300px;
                margin: 10px; 
            }

            &:after {
                position: absolute;
                content: "";
                display: block;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 1px solid transparent;
                transition: 0.25s ease;
            }

            &:hover {
                &:after {
                    top: -5px;
                    left: -5px;
                    right: -5px;
                    bottom: -5px;
                    border-color: #f5f5f5;
                }
            }
        }
    }


</style>
