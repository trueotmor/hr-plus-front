<script setup lang="ts">
import CaretDown from '~icons/mdi/caret-down';



const drawer = true;

</script>
 
<template>
    <VNavigationDrawer v-model="drawer" rail expand-on-hover>
        <VList density="comfortable">
            <VListItem :prepend-icon='CaretDown' title="My Account" value="account"></VListItem>
            <VListItem prepend-icon="mdi-account-group-outline" title="Users" value="users"></VListItem>
        </VList>
    </VNavigationDrawer>
</template>
