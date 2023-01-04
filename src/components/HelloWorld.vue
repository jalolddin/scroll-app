<template>
  <div  @scroll="scrolling()" class="scroll">
    <div ref="scrollTab" class="product__tab">
<p  @click="scrollTo('sushi')" :class='{active: selected && choosen === "sushi"}'>Sushi</p> 
<p  @click="scrollTo('gamburger')" :class='{active: selected && choosen === "gamburger"}'>Gamburger</p> 
<p  @click="scrollTo('plove')"  :class='{active: selected && choosen === "plove"}'>Plove</p> 
<p  @click.prevent="scrollTo('salad')"  :class='{active: selected && choosen === "salad"}'>Salad</p> 
<p  @click="scrollTo('bread')"  :class='{active: selected && choosen === "bread"}'>Bread</p> 
<p  @click="scrollTo('cake')"  :class='{active: selected && choosen === "cake"}'>Cake</p> 
<p  @click="scrollTo('samsa')"  :class='{active: selected && choosen === "samsa"}'>Samsa</p> 
<p  @click="scrollTo('cola')"  :class='{active: selected && choosen === "cola"}'>Cola</p>  
</div>
<div class="products">
  <div :id="product.category" :ref="index" class="product" v-for="(product, index) in products" :key="index">
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
    wrapItem: 'sushi',
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
watch: {
//   selected(){
//     if(this.selected === 'plove'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft -= 90
// } 
// if(this.selected === 'gamburger'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 180
// } 
// if(this.selected === 'sushi'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft -= 90
// } 
//   if(this.selected === 'salad'){
      
//     const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90
//        scroll.scrollLeft -= 90
//        console.log(this.choosen)
//        console.log(this.selected)
// }
// if(this.selected === 'bread'){ 
//   const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 80  
//   } 
//   if(this.selected === 'cake'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90  
//   }
//   if(this.selected === 'samsa'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90  
//   } 
// },
choosen(){
//       if(this.choosen === 'plove'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft -= 90
// } 
// if(this.choosen === 'gamburger'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 180
// } 
// if(this.choosen === 'sushi'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft -= 90
// } 
//   if(this.choosen === 'salad'){
      
//     const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90
//        scroll.scrollLeft -= 90
//        console.log(this.choosen)
//        console.log(this.selected)
// }
// if(this.choosen === 'bread'){ 
//   const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 80  
//   } 
//   if(this.choosen === 'cake'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90  
//   }
//   if(this.choosen === 'samsa'){
//       const scroll = this.$refs.scrollTab;
//        scroll.scrollLeft += 90  
//   } 
if(this.choosen === 'plove'){
      const scroll = this.$refs.scrollTab;
       scroll.scrollLeft -= 90
       if(this.selected && this.choosen === 'plove'){
      const scroll = this.$refs.scrollTab;
    scroll.scrollLeft -= 90
    }

  }
if(this.choosen === 'gamburger'){
      const scroll = this.$refs.scrollTab;
       scroll.scrollLeft -= 90
       if(this.selected && this.choosen === 'gamburger'){
      const scroll = this.$refs.scrollTab;
    scroll.scrollLeft -= 90
    }

  }
if(this.choosen === 'sushi'){
      const scroll = this.$refs.scrollTab;
       scroll.scrollLeft -= 90
       if(this.selected && this.choosen === 'salad'){
      const scroll = this.$refs.scrollTab;
    scroll.scrollLeft -= 90
    }
} 
  if(this.choosen === 'salad'){
    const scroll = this.$refs.scrollTab;
    scroll.scrollLeft += 90
    scroll.scrollLeft -= 90
    if(this.selected && this.choosen === 'salad'){
      const scroll = this.$refs.scrollTab;
    scroll.scrollLeft += 90
    scroll.scrollLeft -= 90
      console.log(this.choosen)
      console.log(this.selected)
    }
}
if(this.choosen === 'bread'){ 
  const scroll = this.$refs.scrollTab;
  scroll.scrollLeft += 90  
  if(this.selected && this.choosen === 'bread'){
      const scroll = this.$refs.scrollTab;
      scroll.scrollLeft += 80  
    }
  } 
  if( this.choosen === 'cake'){ 
  const scroll = this.$refs.scrollTab;
  scroll.scrollLeft += 90  
  if(this.selected && this.choosen === 'cake'){
      const scroll = this.$refs.scrollTab;
      scroll.scrollLeft += 90  
    }
  }
  if(this.choosen === 'cola'){ 
  const scroll = this.$refs.scrollTab;
  scroll.scrollLeft += 80  
  if(this.selected && this.choosen === 'cola'){
      const scroll = this.$refs.scrollTab;
      scroll.scrollLeft += 80  
    }
  }
},
},
methods: {
  handleScroll () {
    if(window.scrollY <= 900){
    this.choosen = 'sushi'
  }else if(window.scrollY <= 1900){
    this.choosen = 'gamburger'
  } else if(window.scrollY <= 2800){
    this.choosen = 'plove'
 
   } else if(window.scrollY <= 3900){
    this.choosen = 'salad'
   }else if(window.scrollY <= 4700){
    this.choosen = 'bread'
   } else if(window.scrollY <= 5800){
    this.choosen = 'cake'
  }  else if(window.scrollY <= 6700){
    this.choosen = 'samsa'
  }  else if(window.scrollY <= 7800){
    this.choosen = 'cola'
   }
  },
  scrollTo(id){           
    this.selected = id
    window.addEventListener('scroll', this.handleScroll);
    // this.selected = value
    document.getElementById(id).scrollIntoView({
      behavior: "smooth"
    });
  },

},
created(){
  window.addEventListener('scroll', this.handleScroll);
},
updated(){
  this.handleScroll()
},
//  destroyed() {
//   window.removeEventListener('scroll', this.handleScroll);
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
