<template>
    <div class="md-list-item ">
        <div class="item">
            <img v-lazy="movie.images.small" :url="movie.images.small">
            <div class="meta">
                <span class="title">{{movie.title}}</span>
                <span class="sub-title">{{movie.original_title}} ({{movie.year}})</span>
                <span class="artists">导演：<span v-for="(director ,index) in movie.directors" :key="index">{{director.name}}</span></span>
            </div>
            <div class="rating">
                <div>{{movie.rating.average}}</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        movie: Object,
        default () {
            return {}
        }
    },
   
}
</script>
