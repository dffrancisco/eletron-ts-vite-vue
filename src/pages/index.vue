<script lang="ts" setup>
// import { onBeforeMount } from '@vue/runtime-core';
import { useRouter } from 'vue-router'

const router = useRouter()
// onBeforeMount(() => {
router.push('home')
// })

console.log('rota principal');

</script>
