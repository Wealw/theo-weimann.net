<script context="module">
    export async function load({params, url, fetch, session, stuff}) {
        return {
            status: 302,
            redirect: './fr'
        }
    }
</script>