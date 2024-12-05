<template>
    <div class="main">

        <div class="login">

            <div class="content-login">

                <header>
                    <h1>Login do Sistema</h1>
                </header>

                <div class="form">
                    <form>
                        <div class="form-group">
                            <label for="login-email">Email</label>
                            <input type="email" class="form-control" id="login-email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="login-password">Senha</label>
                            <input type="password" class="form-control" id="login-password" placeholder="Password">
                        </div>

                        <button type="submit" class="btn" @click.prevent="login">Entrar</button>

                        <div class="register-link">
                            <p>Não tem uma conta? <a href="#">Registrar-se</a></p>
                        </div>
                    </form>
                </div>

            </div>

        </div>

    </div>
</template>

<script>

export default {

    name: "LoginComponent",

    data(){
        return {

        }
    },

    methods: {

        login(){
            this.$router.push({name: "home"});
        }
    
    }
    
}

</script>

<style lang="scss" src="./style.scss" scoped />