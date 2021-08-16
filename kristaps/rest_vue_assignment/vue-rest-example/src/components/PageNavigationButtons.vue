<template>
    <div >
        <button :disabled="!linkFirst" @click="navigationClick(linkFirst)">
            First
        </button>
        <button :disabled="!linkPrev" @click="navigationClick(linkPrev)">
            Prev
        </button>
        <button :disabled="!linkNext" @click="navigationClick(linkNext)">
            Next
        </button>
        <button :disabled="!linkLast" @click="navigationClick(linkLast)">
            Last
        </button>
    </div>
</template>

<script>
export default {
    name: "PageNavigationButtons",
    props: {
        linkFirst: undefined,
        linkPrev: undefined,
        linkNext: undefined,
        linkLast: undefined,
    },
    methods: {
        navigationClick(link){
            this.$emit('navigation', link)
        }
    },
};
</script>
