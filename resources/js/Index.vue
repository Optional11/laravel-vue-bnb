<template>
    <div>
        <router-link :to="{name: 'home'}">Home</router-link>
        <router-link to="/second">Second</router-link>
        <router-view></router-view>
    </div>
</template>