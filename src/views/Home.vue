<template>
    <Navbar />
	<div class="home">
		<div class="position-center">
			<section class="">
				<div class="banner trans" data-overlay="6">
					<!-- <div class="bg-overlay"> </div> -->
					<div class="container">
						<div class="banner-caption">
							<div class="container-fluid">
								<div class="col-md-12 col-sm-12 banner-text">
									<div class="full-search-2 eclip-search italian-search hero-search-radius">
										<div class="hero-search-content">
											<div class="row justify-content-around">
												<div class="col-3">
													<div class="">
														<div class="card-body" style="width: 24rem; height: 18rem;">
															<h4>Get your<strong> favourite</strong></h4>
															<h4> <strong>books</strong> all in <strong class="text-bold"> one place</strong></h4>
															<button class="btn btn-pill btn-category">View Categories</button>
														</div>
													</div>
												</div>
												<div class="col-3">
													<div class="">
														<div class="card-body" >
															<img style="width: 24rem; height: 18rem;" src="@/assets/img/landing.png" alt="">
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>

						</div>
						<br>
					</div>
				</div>
			</section>
			<section class="card-section"  style="margin-top: -120px;">
				<div class="container">
					<div class="text-right pb-2">
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-fire" viewBox="0 0 16 16">
							<path d="M8 16c3.314 0 6-2 6-5.5 0-1.5-.5-4-2.5-6 .25 1.5-1.25 2-1.25 2C11 4 9 .5 6 0c.357 2 .5 4-2 6-1.25 1-2 2.729-2 4.5C2 14 4.686 16 8 16Zm0-1c-1.657 0-3-1-3-2.75 0-.75.25-2 1.25-3C6.125 10 7 10.5 7 10.5c-.375-1.25.5-3.25 2-3.5-.179 1-.25 2 1 3 .625.5 1 1.364 1 2.25C11 14 9.657 15 8 15Z"/>
						  </svg> Hot Reads
					</div>
					<div class="row justify-content-center">
						<div class="col-md-2" v-for="(item,index) in sample_books" :key="item" >
							<template  v-if="index <= 4">
								<div class="card mt-2" style="width: 12rem; height: 12rem;">
									<img src="@/assets/img/slider.jpg" style="height: 5rem;" class="card-img-top" alt="...">
									<div class="card-body">
										<h6 class="card-title">{{ item.Code && item.Code.length < 12 ? item.Code : item.Code.substring(0,12)+".." }}</h6>
										<span class="card-text" v-if="item.Description ">{{ item.Description && item.Description.length < 12 ? item.Description : item.Description.substring(0,12)+".." }}</span><br>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
											</svg> 3.0
										</span>
									</div>
								</div>
							</template>
							<template v-if="index == 5">
								<button class="btn btn-default">
									<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
										<path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
									  </svg>
								</button>
							</template>
						</div>
						
					</div>
				</div>
			</section>

			<section class="mb-5">
				<div class="container">
					<div class="input-group pb-5 pt-5">
						<div class="input-group-text">
							<select class="form-select">
								<option value="">All Categories</option>
							</select>
						</div>
						<input type="text" aria-label="Last name" class="form-control" v-model="search">
						<button class="btn btn-pill btn-category" type="button" id="button-addon2">
							Search 
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
								<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
							  </svg>
						</button>
					  </div>
					<div class="row justify-content-around">
						<template v-if="matchingItems.length">
							<div class="text-right pb-2">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
									<path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
								  </svg> Book Shelf
							</div>
							<div class="col-md-2" v-for="item in matchingItems" :key="item" >
								<div class="card mt-2" style="width: 12rem; height: 12rem;">
									<img src="@/assets/img/slider.jpg" style="height: 5rem;" class="card-img-top" alt="...">
									<div class="card-body">
										<h6 class="card-title">{{ item.Title && item.Title.length < 12 ? item.Title : item.Title.substring(0,12)+".." }}</h6>
										<span class="card-text" v-if="item.Author ">{{ item.Author && item.Author.length < 12 ? item.Author : item.Author.substring(0,12)+".." }}</span><br>
										<span>
											<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
												<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
											</svg> 3.0
										</span>
									</div>
								</div>
							</div>
						</template>
						<div v-else>
							<h3 class="text-center">No Result Found</h3>
						</div>
						
					</div>
						
				</div>
			</section>

			<section class="mb-5">
				<div class="container">
					<div class="row justify-content-around">
						<div class="text-right pb-2">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-book-fill" viewBox="0 0 16 16">
								<path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
								</svg> New Released 
						</div>
						<div class="col-md-2" v-for="item in sortedBooks" :key="item" >
							<div class="card mt-2" style="width: 12rem; height: 12rem;">
								<img src="@/assets/img/slider.jpg" style="height: 5rem;" class="card-img-top" alt="...">
								<div class="card-body">
									<h6 class="card-title">{{ item.CallNumber && item.CallNumber.length < 12 ? item.CallNumber : item.CallNumber.substring(0,12)+".." }}</h6>
									<span class="card-text" v-if="item.CheckoutDateTime ">{{ item.CheckoutDateTime  }}</span><br>
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
											<path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
										</svg> 3.0
									</span>
								</div>
							</div>
						</div>
					</div>
						
				</div>
			</section>

		</div>
	</div>

    	<Footer />
</template>

<script>
// @ is an alias to /src
import { computed, ref } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'
import sample_media from '../data/sample_media.json'
import sample_checkout from '../data/sample_checkout.json'
import sample_media_type from '../data/sample_media_type.json'

export default {
  name: 'Home',
  emits: ["paginate"],
  components: {
   Navbar, Footer,
  },
	data(){
		return {
			sample_books: sample_media_type,
			items: sample_media,
			hot_books: sample_checkout,
			search: ''
		}
	},
	created() {
    // this.loadBooks();
  },
  methods: {

  },
  computed: {
    matchingItems: function(){
      var self = this
      if(this.search) {
          return this.items.filter(function(jobFilter){
            return (jobFilter.Title.toLowerCase().indexOf(self.search.toLowerCase()) !== -1)
        })

      }else{
		return this.items
      }
    },
	sortedBooks: function() {
		function compare(a, b) {
		if (Date(a.CheckoutDateTime) < Date(b.CheckoutDateTime) )
			return -1;
		if (Date(a.CheckoutDateTime) > Date(b.CheckoutDateTime))
			return 1;
		return 0;
		}
    	return this.hot_books.sort(compare);
  	}
  },
  

};
</script>
<style scoped>
.card-img-top {
    width: 100%;
    height: 15vw;
    object-fit: cover;
}
.input-group-text{
	background-color: #ffffff;
}
.card-section{
	left: -412.47216796875px;
	top: -3831.01953125px;

}
.form-select{
	border: none;
}
.btn-category{
	background-color: #1C3F3A;
	color:#ffffff
}
.section-pb-0{
	padding-bottom: 0px !important;
}
.clients{
	padding-top: 10%;
}
.banner {
  background-color: #EAE6D7;
}
.banner.trans {
	min-height: 450px;
}
.banner {
	background-size: cover;
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	min-height: 620px;
	align-items: center;
	position: relative;
	background-position: center;
	padding: 80px 0;
}

.banner h1 {
	color: #ffffff;
	text-shadow: none;
	font-weight: 600;
	line-height: 1.3;
	letter-spacing: 3px;
}

@media (max-width: 1000px) {
        .hidden-mobile {
          display: none;
        }
      }
.auth_button {
    min-width: 7.65rem;
    max-width: 7.65rem;
}
.position-center{
	position: relative;
}

.side-buttons{
	position: absolute;
    right: 0px;
    top: 40%;
	position: fixed;
}
.btn-right{
	padding-top: 5px;
}
#sideBtn {
    transition: all 0.2s;
}

</style>
