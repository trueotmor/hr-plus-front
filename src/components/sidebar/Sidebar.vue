<script setup lang="ts">
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue';
import ListBulletIcon from '@heroicons/vue/24/outline/ListBulletIcon';
import ArrowIcon from '@heroicons/vue/24/solid/ChevronRightIcon';
const links = [
    { href: '/#', label: 'Все организации' },
    { href: '/#', label: 'Добавить новую организацию' },
]

</script>
 
<template>
    <div class="w-64 fixed z-10 top-16 left-0 bottom-0 pb-4 shadow-[1px_0.05rem_0.01rem_rgba(75,75,90,0.075)]">
        
            <Menu>
                <MenuButton
                    class="flex justify-center items-center w-full py-3 px-7 hover:text-blue-800 hover:bg-blue-50 border-l-4">
                    <ListBulletIcon class="h-5 w-5 mr-3" />
                    <span>Организации</span>
                    <ArrowIcon class="h-3 w-3 ml-12 arrow" />
                </MenuButton>
                <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-100 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0">
                    <MenuItems class="flex-column justify-center items-center pl-11 overflow-hidden max-h-0">
                        <MenuItem v-for="link in links" :key="link.href" :href="link.href" as="a"
                            class="ui-active:bg-blue-white ui-active:text-blue-800 ui-not-active:bg-white ui-not-active:text-black block py-2 px-6">
                        {{ link.label }}
                        </MenuItem>
                    </MenuItems>
                </transition>
            </Menu>
        
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

button[data-headlessui-state='open'] ~ div {
    
    max-height: 100vh;
    
}

button[data-headlessui-state] .arrow {
    transition: transform 0.3s;
}
</style>

