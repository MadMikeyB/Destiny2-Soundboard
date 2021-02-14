<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}} (WIP)</h1>
        <p>So {{name}} has <strong>a lot</strong> of voice lines. Like. a lot. These take time to save individually. Their voice lines will come soon, but are not quite there yet.</p>
        <input type="text" placeholder="Type to search..." v-model="search">
        <div class="grid wip" v-if="transcripts.length > 0">
            <a class="button" v-for="transcript in filteredTranscripts" :title="transcript.Text" :data-hex="transcript.EntryHash"  v-tippy @click="createAndPlayAudioElement(transcript)">
                {{shorten(transcript.Text, 30)}}...
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
                name: 'Zavala',
                dirname: 'zavala',
                search: '',
                transcripts: []
            }
        },
        methods: {
            fetchTranscripts(name){
                axios.get('dist/media/transcripts.json').then(({data}) => {
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
                const audio = new Audio(`dist/media/${this.dirname}/${transcript.EntryHash}.mp3`);
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

    &.wip {
        cursor: not-allowed;
        opacity: 0.75; 
        filter: blur(3px);
        .button {
            pointer-events: none;
        }
    }

    /* Blue buttons */
    .button {
        color: #f5f5f5;
        background: rgba(71,156,228,.4);
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
            border: 1px solid #f5f5f5;
            transition: 0.25s ease;
        }

        &:hover {
            background: #479ce4;
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

