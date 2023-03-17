<template>
    <footer class="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-4">
                    <router-link :to="{ name : 'Home' }" class="logo-footer">
                        <img src="@/assets/img/logo.png" alt="" style="height: 30px;">
                        <img src="@/assets/img/ZunoLibrary1.png" alt="" style="height: 20px;">
                    </router-link>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                    <h5 class="text-white footer-head">Gill Sans</h5>
                </div>

                <div class="col-lg-4 col-md-4 col-12">
                    <h5 class="text-white footer-head">All rights reserved. Copyright Zuno Library. 2023</h5>
                </div>
            </div>

        </div>
    </footer>
</template>


<style scoped>
li:not(:last-child) {
    margin-right: 10px;
}
.hidden-mobile {
  /* background-image: url(../assets/img/nav.jpg); */
  background-color: #e8effd;
}
</style>
