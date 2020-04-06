<template>
    <div>
        <bookable-list-item 
            item-title="Cehap Villa" 
            content="A very cheap villa" 
            :price="1000"
            ></bookable-list-item>
        <bookable-list-item 
            item-title="Cehap Villa 2" 
            content="A very cheap villa 2" 
            :price="1000"
            ></bookable-list-item>
        
    </div>
</template>

<script>
import BookableListItem from './BookableListItem'
export default {
    components: {
        BookableListItem
    }
}
</script>