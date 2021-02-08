<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}}</h1>
        <input type="text" placeholder="Type to search..." v-model="search">
        <div class="grid" v-if="transcripts.length > 0">
            <a class="button" v-for="transcript in filteredTranscripts" :title="transcript.Text" :data-hex="transcript.EntryHash"  v-tippy @click="createAndPlayAudioElement(transcript)">
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
                name: 'Saladin',
                dirname: 'saladin',
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
    

    /* Gold buttons */
    .button {
        color: #f5f5f5;
        background: rgba(183,140,37,0.8);
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
            border: 1px solid #ffce1f;
            transition: 0.25s ease;
        }

        &:hover {
            background: #b78c25;
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

