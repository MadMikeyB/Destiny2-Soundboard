<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}}</h1>
        <input type="text" placeholder="Type to search..." v-model="search">
        <div class="grid" v-if="transcripts.length > 0">
            <a class="button" v-for="transcript in filteredTranscripts" :title="transcript.Text" :data-hex="transcript.EntryHash"  v-tippy @click="createAndPlayAudioElement(transcript)">
                {{shorten(transcript.Text, 30)}}...
            </a>
        </div>
        <div v-else>
            <h1>We're having trouble loading {{name}}'s audio files right now. Try refreshing. If that does not work, please click through some soundboards and come back to this page through the navigation menu.</h1>
        </div>
    </div>
</template>

<script>
    import NavMenu from "../Layout/NavMenu"
    export default {
        props: [],
        components: { NavMenu },
        computed: {
            filteredTranscripts() {
                return this.transcripts.filter(transcript => {
                    return transcript.Text.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        mounted() {},
        created() {
            this.fetchTranscripts(this.name)
        },
        watch: {},
        data() {
            return {
                name: 'Drifter',
                dirname: 'drifter',
                search: '',
                transcripts: []
            }
        },
        methods: {
            fetchTranscripts(name){
                axios.get('https://madmikeyb.github.io/Destiny2-Soundboard/dist/media/transcripts.json').then(({data}) => {
                    // Get all Transcripts, then flatten to single array.
                    const response = [].concat(...data)
                    const arr = []
                    response.forEach((item) => {
                        if (item.Narrator == name) {
                            arr.push(item)
                        }
                    }, this)
                    this.transcripts = arr
                })
            },
            createAndPlayAudioElement(transcript) {
                const audio = new Audio(`https://madmikeyb.github.io/Destiny2-Soundboard/dist/media/${this.dirname}/${transcript.EntryHash}.mp3`);
                audio.play(); 
            },
            shorten(string, len) {
                return string.substring(0, len + string.substring(len - 1).indexOf(' '));
            }
        }
    };
</script>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    
    @media all and (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media all and (max-width: 600px) {
        grid-template-columns: 1fr;
    }

    /* Teal buttons */
    .button {
        color: #f5f5f5;
        background: rgba(36,84,71,0.8);
        font-weight: 500;
        margin: 5px;
        box-sizing: border-box;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 15px;
        text-transform: uppercase;

        &:after {
            position: absolute;
            content: "";
            display: block;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border: 1px solid lighten(rgba(36,84,71,1), 15%);
            transition: 0.25s ease;
        }

        &:hover {
            background: rgba(36,84,71,1);
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

