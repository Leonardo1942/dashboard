<template>
    <div class="navbar">
       
        <a @click.prevent="logout" class="logout" href="#">
            <i class="fa-solid fa-right-from-bracket"></i>
            <span class="tooltip">Logout</span>
        </a>
    </div>
</template>

<script>
export default {
    name: "NavBarComponent",
    methods: {
        logout() {
    
            this.$router.push({ name: "login" });
        },
    },
};
</script>

<style lang="scss" scoped>
@use '@/assets/scss/_main' as main;

.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    background-color: main.$primary; 
    color: main.$white; 
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);

    .logo {
        display: flex;
        align-items: center;
        font-size: 20px;

        i {
            margin-right: 10px;
            color: main.$white;
        }

        .title {
            font-size: 18px;
            font-weight: bold;
        }
    }

    .logout {
        position: relative;
        display: flex;
        align-items: center;
        font-size: 18px;
        color: main.$white; 
        text-decoration: none;
        cursor: pointer;
        transition: color 0.3s ease;

        &:hover {
            color: main.$danger; 
            
            .tooltip {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .tooltip {
            position: absolute;
            top: 120%;
            right: 0;
            background-color: main.$black;
            color: main.$white;
            padding: 5px 10px;
            border-radius: 4px;
            font-size: 12px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
            opacity: 0;
            transform: translateY(10px);
            transition: opacity 0.3s ease, transform 0.3s ease;
        }
    }
}
</style>
