<template>
    <v-btn :to="href" :color="color" :rounded="rounded" :large="large">{{this.title}}
        <v-icon right>{{icon}} </v-icon>
    </v-btn>
</template>
<script>
export default {
    props:{
        color: String,
        rounded: Boolean,
        elevetion: String,
        title: String,
        icon: {type: String, default:"mdi-home"},
        href: String,
        large:{type: Boolean, default: true}
    }
}
</script>