<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import ListBulletIcon from '@heroicons/vue/24/outline/ListBulletIcon';
import ArrowIcon from '@heroicons/vue/24/solid/ChevronRightIcon';
const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
]

</script>
 
<template>
    <div class="w-64 fixed z-10 top-16 left-0 bottom-0 shadow-lg pb-4">
        <div>
            <Menu>
                <MenuButton
                    class="flex justify-center items-center w-full py-3 px-7 hover:text-blue-700 hover:bg-blue-50 border-l-4">
                    <ListBulletIcon class="h-5 w-5 mr-3" />
                    <span>Организации</span>
                    <ArrowIcon class="h-3 w-3 ml-12 arrow" />
                </MenuButton>
                <MenuItems class="flex-column">
                    <!-- Use the `active` state to conditionally style the active item. -->
                    <MenuItem v-for="link in links" :key="link.href" :href="link.href" as="a"
                        class="ui-active:bg-blue-500 ui-active:text-red-500 ui-not-active:bg-white ui-not-active:text-black">
                    {{ link.label }}
                    </MenuItem>
                </MenuItems>
            </Menu>
        </div>
    </div>
</template>

<style>
button:hover {
    transition: all 0.3s;
}

button[data-headlessui-state='open'] {
    background-color: #eff6ff;
    border-left: solid 4px #1d4ed8;
}

button[data-headlessui-state='open'] .arrow {
    transform: rotate(90deg);
    transition: transform 0.3s;
}

button[data-headlessui-state] .arrow {
    transition: transform 0.3s;
}
</style>

