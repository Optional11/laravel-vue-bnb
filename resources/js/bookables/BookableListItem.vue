<template>
    <div>
        <h1>{{ itemTitle }}</h1>
        <p>{{ content }}</p>
    </div>
</template>

<script>
export default {
    props: {'itemTitle': String , 'content': String, 'price': Number}
}
</script>