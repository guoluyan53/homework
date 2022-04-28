<template>
    <div>
        <router-link to='/manage/principal'></router-link>
        <router-link to='/manage/mission'></router-link>
        <router-view ></router-view>
    </div>
</template>
<script>
    export default{
        name:'manage'
    }
</script>