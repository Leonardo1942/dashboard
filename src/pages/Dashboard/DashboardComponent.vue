<template>
    <div class="main">
        <div :class="['sidebar', { collapsed: !isSidebarOpen }]">
            <SideBarComponent />
        </div>

        <div class="content-right">
            <div class="navbar-component">
                <div class="menu-toggle" @click="toggleSidebar">
                    <i class="fa-solid fa-bars"></i>
                </div>
                <NavBarComponent />
            </div>

            <div class="page">
                <slot name="page"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import SideBarComponent from "../Dashboard/components/SideBarComponent.vue";
import NavBarComponent from "../Dashboard/components/NavBarComponent.vue";

export default {
    name: "DashboardComponent",
    components: { SideBarComponent, NavBarComponent },
    data() {
        return {
            isSidebarOpen: true,
        };
    },
    methods: {
        toggleSidebar() {
            this.isSidebarOpen = !this.isSidebarOpen;
        },
    },
};
</script>

<style lang="scss" src="./style.scss" />
