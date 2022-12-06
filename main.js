const { createApp } = Vue

const App = createApp({
    data() {
        return {
            emailsN: 10,
            emails: [],
        }
    },

    methods: {

        fetchEmail() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail").then(
                (res) => {
                    this.emails.push(res.data.response);
                }
            );
        }
    },

    mounted() {
        for (let i = 0; i < this.emailsN; i++) {
            this.fetchEmail();
        }
    },
});

