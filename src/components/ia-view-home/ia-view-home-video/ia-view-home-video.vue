<template lang="pug">
    div.ia-view-home-video.pb-5.pt-5.col-12.col-sm-10.col-md-8.col-lg-7.col-xl-7.mx-auto
        // Iframe 16:9
        div.iframe-container
            iframe(
                :src="url"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                width="560"
                height="315"
            )
        // Slot
        div.ia-view-button.mt-5
            slot

</template>

<script>
export default {
    name: 'ia-view-home-video',
    props:['url'],
    data: () => ({

    })
}
</script>

<style lang="stylus" scoped>
@import '../../../stylus/ia_variables'
@import './ia-view-home-video.styl'
@import './ia-view-home-video-mobile.styl'
@import './ia-view-home-video-tablet.styl'
@import './ia-view-home-video-laptop.styl'

</style>
