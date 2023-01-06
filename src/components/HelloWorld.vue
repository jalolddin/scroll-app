<template>
  <div  @scroll="scrolling()" class="scroll">
    <div ref="scrollTab" class="product__tab">
<p :class="category.category"  ref="title" @click="scrollTo(category.category)" v-for="category in categories" :key="category">
  <a :href="'#' + category.category">
    {{ category.title }}
  </a>
</p> 
</div>
<div ref="products" class="products">
  <div :id="product.category" ref="product" class="product" v-for="(product, index) in products"  :key="index">
    <img :src="product.img" alt="">
    <h1 :ref="index">{{ product.title }}</h1>
    <p>{{ product.description }}</p>
  </div>
</div>
  </div>
</template>

<script>


export default {
data(){
  return{
    selected: 'sushi',
    changeValue: 'sushi',
    activeLink: null,
    choosen: 'sushi',
    wrapItem: null,
    activeIndex: null,
    categories: [
{
  "title": "Sushi",
  "category": "sushi",
  "class": "active"
},
{
  "title": "Gamburger",
  "category": "gamburger"
},
{
  "title": "Plove",
  "category": "plove"
},
{
  "title": "Salad",
  "category": "salad"
},
{
  "title": "Bread",
  "category": "bread"
},
{
  "title": "Cake",
  "category": "cake"
},
{
  "title": "Samsa",
  "category": "samsa"
},
{
  "title": "Cola",
  "category": "cola"
},

    ],
    products: [
      {
        title: "Sushi",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      },
      {
        title: "Sushi 2",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      }, 
       {
        title: "Sushi 3",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      },
      {
        title: "Sushi 4",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      },
      {
        title: "Sushi 5",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      },
      {
        title: "Sushi 6",
        description: "Description about sushi meal",
        img: "https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",
        category: 'sushi'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Gamburger",
        description: "Description about gamburger meal",
        img: "https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",
        category: 'gamburger'
      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'

      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'

      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'
      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'
      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'

      },
      {
        title: "Plove",
        description: "Description about plove meal",
        img: "https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",
        category: 'plove'

      },

      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'
      },
      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'

      },
      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'

      },
      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'

      },
      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'

      },
      {
        title: "Salad",
        description: "Description about salad meal",
        img: "https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",
        category: 'salad'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        category: 'bread'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        category: 'bread'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        category: 'bread'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG" ,
        category: 'bread'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        category: 'bread'

      },
      {
        title: "Bread",
        description: "Description about Bread meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",
        category: 'bread'
      },
      
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'
       },
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'

       },
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'
       },
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'
       },
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'
       },
       {
        title: "Cake",
        description: "Description about cake meal",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",
        category: 'cake'
       },
{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},

{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},
{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},
{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},
{
        title: "Samsa",
        description: "Description about samsa meal",
        img: "https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",
        category: 'samsa'
},


{
        title: "Cola",
        description: "Description about Coca-cola",
        img: "https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",
        category: 'cola'
},
{
        title: "Cola",
        description: "Description about Coca-cola",
        img: "https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",
        category: 'cola'
},
{
        title: "Cola",
        description: "Description about Coca-cola",
        img: "https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",
        category: 'cola'
},
{
        title: "Cola",
        description: "Description about Coca-cola",
        img: "https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",
        category: 'cola'
},
{
        title: "Cola",
        description: "Description about Coca-cola",
        img: "https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",
        category: 'cola'
}

    ]
  }
},

methods: {
  handleScroll () {
  var current = ""
 const productList =  document.querySelectorAll('.product')
  productList.forEach((item) => {
  const sectionTop = item.offsetTop
  if(pageYOffset >= sectionTop - 180){
    current = item.getAttribute("id");
  }
})
this.$refs.title.forEach((li) => {
  li.classList.remove("active");
     if (li.classList.contains(current)) {
    li.classList.add("active");
    this.activeIndex = this.$refs.title.indexOf(li)

    if(this.activeIndex >= 0 ){
     this.$refs.scrollTab.scrollLeft = li.offsetLeft 
    } 
 
    }
  });

},
  scrollTo(id){           
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  },

},

created(){
  // this.scrollTo()
  window.addEventListener('scroll', this.handleScroll);
},
updated(){
this.scrollTo()
  window.addEventListener('scroll', this.handleScroll);
},
//  beforeDestroy() {
//   window.removeEventListener('scroll', this.handleScroll);
//   }
}
</script>
<style scoped lang="scss">


</style>
