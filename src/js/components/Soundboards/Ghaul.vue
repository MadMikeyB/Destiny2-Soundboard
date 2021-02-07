<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}}</h1>
        <input type="text" v-model="search">
        <div class="grid" v-if="transcripts.length > 0">
            <a class="button" v-for="transcript in filteredTranscripts" :title="transcript.Text" :data-hex="transcript.EntryHash" :data-tippy-content="transcript.Text" @click="createAndPlayAudioElement(transcript)">
                {{shorten(transcript.Text, 25)}}
            </a>
        </div>
        <div v-else>
            <h1>{{name}}'s audio files have been sunset 😭</h1>
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
                name: 'Ghaul',
                dirname: 'ghaul',
                search: '',
                transcripts: []
            }
        },
        methods: {
            fetchTranscripts(name){
                axios.get('/dist/media/transcripts.json').then(({data}) => {
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
                const audio = new Audio(`/dist/media/${this.dirname}/${transcript.EntryHash}.mp3`);
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
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .button {
        align-items: center;
        background-color: #000;
        border: 1px solid white;
        color: #fff;
        cursor: pointer;
        display: flex;
        font-family: sans-serif;
        height: 45px;
        justify-content: center;
        letter-spacing: .5px;
        margin: 10px;
        padding: 10px;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        width: 16.66%;
    }
}    
</style>

