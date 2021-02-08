<template>
    <nav>
        <ul>
            <li><router-link to="/soundboards/calus">Calus</router-link></li>
            <li><router-link to="/soundboards/cayde">Cayde-6</router-link></li>
            <li><router-link to="/soundboards/crypt-ai">Crypt AI</router-link></li>
            <li><router-link to="/soundboards/drifter">Drifter</router-link></li>
            <li><router-link to="/soundboards/eramis">Eramis</router-link></li>
            <li><router-link to="/soundboards/eris">Eris</router-link></li>
            <li><router-link to="/soundboards/failsafe">Failsafe</router-link></li>
            <li><router-link to="/soundboards/ghaul">Ghaul</router-link></li>
            <li><router-link to="/soundboards/ikora">Ikora</router-link></li>
            <li><router-link to="/soundboards/saint-14">Saint-14</router-link></li>
            <li><router-link to="/soundboards/saladin">Saladin</router-link></li>
            <li><router-link to="/soundboards/shaxx">Lord Shaxx</router-link></li>
            <li><router-link to="/soundboards/crow">The Crow</router-link></li>
            <li><router-link to="/soundboards/zavala">Zavala</router-link></li>
        </ul>
    </nav>    
</template>

<script>
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
    ul {
        list-style: none;
        margin: 10px 0;
        padding: 0;
        display: flex;
        align-items: center;
        justify-content: center;

        a {
            color: #f5f5f5;
            background: rgba(#666666, 0.8);
            font-weight: 500;
            margin: 5px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 15px;
            text-transform: uppercase;
            text-decoration: none;

            &:after {
                position: absolute;
                content: "";
                display: block;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                border: 1px solid #999999;
                transition: 0.25s ease;
            }

            &:hover {
                background: #666666;
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
