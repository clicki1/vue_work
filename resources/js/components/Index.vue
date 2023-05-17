<template>
<div>
    <router-link class="m-2 btn btn-outline-primary" :to="{ name: 'page.form'}">Form</router-link>
    <router-link class="m-2 btn btn-outline-primary" :to="{ name: 'page.list'}">List</router-link>
    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "Index"
}
</script>

<style scoped>

</style>
