<template> 
    <i class="fas fa-spinner fa-2x" id="spinner"></i>
</template>

<script>
import '../assets/main.css'

export default {
    data() {
        return {
        };
    },
    methods: {
        spinnerSpin: async function() {
            function delay(time) {
                return new Promise(resolve => setTimeout(resolve, time));
            }

            document.querySelector('#spinner').classList.add('spin');
            await delay(1200);
            document.querySelector('#spinner').classList.remove('spin');
            this.spinnerSpin();
        }
    },
    async created() {
        function delay(time) {
            return new Promise(resolve => setTimeout(resolve, time));
        }
        await delay(200);
        this.spinnerSpin();
    }
};
</script>