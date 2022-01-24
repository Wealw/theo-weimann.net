<script context="module">
    export async function load({ params, fetch, session, stuff }) {
        console.log(params)
        return {
            status: 302,
            redirect: './fr'
        }
    }
</script>