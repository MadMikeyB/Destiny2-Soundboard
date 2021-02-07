<template>
    <div>
        <nav-menu></nav-menu>
        <h1>{{name}}</h1>
        <ul>
            <li v-for="transcript in transcripts">
                {{transcript.EntryHash}} &mdash; {{transcript.Text}}
            </li>
        </ul>
    </div>
</template>

<script>
    import NavMenu from "../Layout/NavMenu"
    export default {
        props: [],
        components: { NavMenu },
        mounted() {},
        created() {
            this.fetchTranscripts(this.name)
        },
        watch: {},
        data() {
            return {
                name: 'Eris',
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
            }
        }
    };
</script>

<style>
    
</style>
