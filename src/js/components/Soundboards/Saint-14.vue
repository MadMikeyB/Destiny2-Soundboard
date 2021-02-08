<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}}</h1>
        <input type="text" v-model="search">
        <div class="grid" v-if="transcripts.length > 0">
            <a class="button" v-for="transcript in filteredTranscripts" :title="transcript.Text" :data-hex="transcript.EntryHash" :content="dynamicTitle" v-tippy @click="createAndPlayAudioElement(transcript)">
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
            tippy('.button')
        },
        watch: {},
        data() {
            return {
                name: 'Saint-14',
                dirname: 'saint-14',
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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    background: rgb(18, 23, 28);
    padding: 25px;

    /* Pink buttons */
    .button {
        color: #f5f5f5;
        background: rgba(82,38,84,.75);
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
            border: 1px solid #ffb8f4;
            transition: 0.25s ease;
        }

        &:hover {
            background: rgba(82,38,84,1);
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

