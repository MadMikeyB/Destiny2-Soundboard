<template>
    <div>
        <h1>Destiny 2 Soundboard</h1>
        <p>Click an image below to get started.</p>
        <p><a @click="showModal">Disclaimers &amp; Credits</a></p>
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
            <router-link to="/soundboards/siren-of-riven"><div title="Riven" v-tippy><img src="dist/img/Riven.jpg" alt="Riven"></div></router-link>
            <router-link to="/soundboards/saint-14"><div title="Saint14" v-tippy><img src="dist/img/Saint14.jpg" alt="Saint14"></div></router-link>
            <router-link to="/soundboards/saladin"><div title="Saladin" v-tippy><img src="dist/img/Saladin.jpg" alt="Saladin"></div></router-link>
            <router-link to="/soundboards/shaxx"><div title="Shaxx" v-tippy><img src="dist/img/Shaxx.jpg" alt="Shaxx"></div></router-link>
            <router-link to="/soundboards/crow"><div title="Crow" v-tippy><img src="dist/img/Crow.jpg" alt="Crow"></div></router-link>
            <router-link to="/soundboards/zavala"><div title="Zavala" v-tippy><img src="dist/img/Zavala.png" alt="Zavala"></div></router-link>
        </div>
        <div class="modal" v-if="modal">
            <div class="modal__header">
                <h2>Disclaimers &amp; Credits</h2>
                <span @click="closeModal">&times;</span>
            </div>
            <div class="modal__body">
                <strong>Disclaimer</strong>
                <p>I do not own any rights to the sound files used in this repository. All sound content in this project is owned by <a target="_blank" rel="nofollow noopener" href="https://bungie.net">Bungie, Inc</a>. and their respective owners.</p>
                <strong>Credits</strong>
                <ul>
                    <li><a rel="nofollow noopener" target="_blank" href="https://twitter.com/GinsorKR">GinsorKR</a>'s Audio Tool</li>
                    <li><a rel="nofollow noopener" target="_blank" href="https://github.com/ElbowBaggins/GinsorAudioTool2Plus">ElbowBaggins Audio Tool</a></li>
                    <li><a rel="nofollow noopener" target="_blank" href="https://www.destinypedia.com/">Destinypedia</a> (Images)</li>
                    <li>evilarceus &mdash; <a rel="nofollow noopener" target="_blank" href="https://github.com/evilarceus">https://github.com/evilarceus</a> - for starting this project off.</li>
                    <li>MadMikeyB &mdash; <a rel="nofollow noopener" target="_blank" href="https://twitter.com/MadMikeyB">https://twitter.com/MadMikeyB</a> - for this latest incarnation</li>
                </ul>
                <strong>Contributing</strong>
                <p>Please see <a rel="nofollow noopener" target="_blank" href="https://github.com/madmikeyb/destiny2-soundboard/CONTRIBUTING.md"></a> or <a rel="nofollow noopener" target="_blank" href="https://github.com/MadMikeyB/Destiny2-Soundboard/discussions/new">start a discussion requesting the character you wish</a></p>
            </div>
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
            return {
                modal: false
            }
        },
        methods: {
            showModal() {
                this.modal = !this.modal
            },
            closeModal() {
                this.modal = !this.modal
            }
        }
    };
</script>

<style lang="scss" scoped>
    a {
        cursor: pointer;
        text-decoration: underline;
    }
    .grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, 320px);

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
    .modal {
        background-color: rgba(0,0,0,0.9);
        border: 1px solid rgba(183,140,37,0.8);
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 80%;

        &__header {
            border-bottom: 1px solid rgba(183,140,37,0.8);
            display: flex;
            align-items: center;
            h2 {
                flex: 1;
                padding-left: 20px;
            }
            span {
                cursor: pointer;
                font-size: 48px;
                width: 40px;
            }
        }

        &__body {
            padding: 20px;
            a {
                color: rgba(183,140,37,0.8);
                text-decoration: underline;
            }
        }
    }

</style>
