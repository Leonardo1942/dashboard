<template>
    <DashboardComponent>
        <template v-slot:page>
            <div class="content-pages">
                Bem-vindo a Home!
            </div>
        </template>
    </DashboardComponent>
</template>

<script>

import DashboardComponent from '../Dashboard/DashboardComponent.vue';

export default {

    components: {
        DashboardComponent,
    }

}

</script>
