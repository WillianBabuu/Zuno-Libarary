<template>
  <router-view/>
</template>

<script>


export default {
  components: {  },
   watch: {
        $route: {
            immediate: true,
            handler(to, from) {
                document.title = to.meta.title || 'zunolibrary';
            }
        },
   }
}
</script>
