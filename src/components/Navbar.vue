<template>
    <header id="pb-5" class="defaultscroll" >
      <div id="smallNav">
        <div class="navbar-top d-none d-lg-block small hidden-mobile">
          <div class="container">
            <div class="row">
              <div class="col d-md-flex justify-content-start">
                <a href="#" class="logo-footer">
                  <img src="@/assets/img/logo.png" alt="" style="height: 30px;">
                  <img src="@/assets/img/ZunoLibrary.png" alt="" style="height: 20px;">
                </a>
              </div>
              <div class="col d-md-flex justify-content-evenly">
                <!-- Top bar left -->
                <ul class="nav">
                  <li class="nav-item">
                    <router-link :to="{ name : 'Home' }" class="nav-link text-blue active" aria-current="page">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name : 'About' }" class="nav-link text-blue" aria-current="page">Category</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name : 'About' }" class="nav-link text-blue" aria-current="page">Popular Us</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name : 'About' }" class="nav-link text-blue" aria-current="page">My Picks Us</router-link>
                  </li>
                </ul>
              </div>
              <div class="col">
                <ul class="nav">
                  <li class="nav-item">
                    <router-link :to="{ name : 'About' }" class="nav-link text-blue active" aria-current="page">
                      <img src="@/assets/img/Cart.png" alt="" style="height: 20px;">
                    </router-link>
                  </li>
                  <li class="nav-item">
                    <router-link :to="{ name : 'About' }" class="nav-link text-blue" aria-current="page">
                      <img src="@/assets/img/Avatar.png" alt="" style="height: 20px;">
                    </router-link>
                  </li>
                </ul>

              </div>
            </div>

          </div>
        </div>
      </div>
    </header>
  
</template>
<script>
  export default {
    data(){
      return{
        token:false,
      }
    },
  }
</script>
<style scoped>
.text-blue{
  color: #01406a;
}
.nav-bg{
  background-color: #01406a;
}
 .navbar-light .navbar-nav .nav-link {
	color: #1E1E1E;
}
 .btn-light {
	color: #828a93 !important;

}
.nav-link:hover{
  color: #1E1E1E;
}
.router-link-exact-active{
    color: #1E1E1E !important;
    background: #FFFFFF;
  border: 1px solid #D7D3C4;
  border-radius: 100px;
 }

 .navbar {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	padding-top: 0rem;
	padding-bottom: 0rem;
}

#topnav .navigation-menu > li > a {
	padding-top: 0px;
	padding-bottom: 0px;
	min-height: 0px;
}
.auth_button {
    min-width: 150px;
    max-width: 150px;
}
.hidden-mobile {
  /* background-image: url(../assets/img/nav.jpg); */
  background-color: #EAE6D7;
}
</style>
