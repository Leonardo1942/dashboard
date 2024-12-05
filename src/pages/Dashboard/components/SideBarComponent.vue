<template>
    <div class="sidebar-component">
        <!-- Top Menu -->
        <div class="top-menu">
            <div class="avatar">
                <img src="@/assets/images/foto-perfil.jpg" alt="Minha Foto" />
            </div>
            <div class="infos">
                <h2>Leonardo Holanda</h2>
                <p class="status">Online</p>
            </div>
        </div>

        <!-- Menu -->
        <div class="menu">
            <ul>
                <li v-for="(item, index) in menuItems" :key="index">
                    <div @click="toggleSubMenu(index)" class="menu-item">
                        <i :class="item.icon"></i>
                        <span>{{ item.title }}</span>
                    </div>
                    <!-- Submenu -->
                    <ul v-if="item.submenu && item.isOpen">
                        <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                            <a :href="subItem.link">{{ subItem.title }}</a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "SideBarComponent",
    data() {
        return {
            menuItems: [
                {
                    title: "Dashboard",
                    icon: "fa-solid fa-square-poll-vertical",
                    submenu: [
                        { title: "Produtos", link: "/servicos/produtos" },
                    ],
                    isOpen: false,
                },
                {
                    title: "Users",
                    icon: "fa-solid fa-users",
                    submenu: [
                        { title: "User List", link: "/users/list" },
                        { title: "Add User", link: "/users/add" },
                    ],
                    isOpen: false,
                }
            ],
        };
    },
    methods: {
        toggleSubMenu(index) {
            this.menuItems[index].isOpen = !this.menuItems[index].isOpen;
        },
    },
};
</script>

<style scoped lang="scss">
@use '@/assets/scss/_main' as main;

.sidebar-component {
    width: 250px;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
    padding: 20px;
    overflow-y: auto;

    .top-menu {
        text-align: center;
        margin-bottom: 30px;

        .avatar {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            background-color: main.$white;
            color: main.$primary;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 30px;
            margin: 0 auto;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .infos {
            margin-top: 15px;

            h2 {
                font-size: 18px;
                margin: 0;
                color: main.$white;
            }

            .status {
                font-size: 14px;
                color: main.$success;
            }
        }
    }

    .menu {
        width: 100%;

        ul {
            list-style: none;
            padding: 0;
            margin: 0;

            li {
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                margin: 10px 0;

                .menu-item {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    margin: 5px 0;
                    border-radius: 8px;
                    transition: background 0.3s ease;
                    cursor: pointer;

                    i {
                        margin-right: 10px;
                    }

                    &:hover {
                        background: rgba(255, 255, 255, 0.2);
                    }
                }

                ul {
                    list-style: none;
                    padding-left: 20px;
                    margin: 5px 0;
                    display: flex;
                    flex-direction: column;

                    li {
                        padding: 8px 0;
                        transition: background 0.3s ease;

                        a {
                            color: #fff;
                            text-decoration: none;

                            &:hover {
                                background: rgba(255, 255, 255, 0.3);
                            }
                        }
                    }
                }
            }
        }
    }
}
</style>