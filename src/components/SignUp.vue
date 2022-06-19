<template>
    <form action="">
        <label>Email:</label>
        <input type="text" v-model="email" required>
        <br><br>
        <label>Parol:</label>
        <input type="password" v-model="pass" required>
    </form>

    <h1>Sizning emailingiz: {{ email }}</h1>
    <h1>Sizning parolingiz: {{ pass }}</h1>
</template>

<script>
export default {
   data () {
        return{
            email: '',
            pass: ''
        }
   }
}
</script>