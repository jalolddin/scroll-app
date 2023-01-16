<template>
  <div class="scroll">
    <div id="products_scrolled" ref="scrollTab" class="product__tab">
<p class="scroll_h_item" ref="title"  @click="scroller"   v-for="category in categories" :key="category" :data-scrollto="category.category">
    {{ category.title }}
</p> 
</div>

<div id="temp" class="temp">
  <section  :id="product.category"   ref="products" class="products" v-for="product in filteredTitle" :key="product">
    <h1 class="category">{{ product.category }}</h1>
    <div style="display: flex; flex-wrap: wrap;">
      <div ref="product" class="product" v-for="(item, index) in product.items" :key="index">
        <img :src="item.img" alt="">
        <h1 :ref="index">{{ item.title }}</h1>
        <p>{{ item.description }}</p>
      </div>
    </div>
  </section>
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
    filteredTitle: null,
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
  getItem(){
console.log('BEGIN >>>')
let nprods = [];
let c_c;
let tmp;
for (let prod of this.products) {
  if (!c_c) {
     tmp = {
      "category": prod.category,
      "items" : [],
    }
    c_c = prod.category;
  }
  if (c_c != prod.category) {
    c_c = false;
    nprods.push(tmp)
  }
  else if (c_c === prod.category) {
    tmp.items.push({...prod});
  }
}
nprods.push(tmp)
this.filteredTitle = nprods 
console.log(nprods);
console.log("END>>>");

  },
  handleScroll (ev) {
    console.log('heyy')
    let se = document.getElementsByClassName('s_active')[0]
    let he = document.getElementsByClassName('b_active')[0]
    let s_s = se.getBoundingClientRect()
    if (s_s.bottom < window.innerHeight / 2 && se.nextElementSibling) {
        se.classList.remove('s_active')
        he.classList.remove('b_active')
        he.nextElementSibling.classList.add('b_active')
        this.wrapItem.scrollTo({
            left: he.nextElementSibling.offsetLeft,
            behavior: 'smooth'
        })

        se.nextElementSibling.classList.add('s_active')
    }
    else if (s_s.top > window.innerHeight / 2 && se.previousElementSibling) {
        se.classList.remove('s_active')
        he.classList.remove('b_active')
        he.previousElementSibling.classList.add('b_active')
        se.previousElementSibling.classList.add('s_active')
        this.wrapItem.scrollTo({
            left: he.previousElementSibling.offsetLeft,
            behavior: 'smooth'
        })

    }
},
scroller(ev){
  console.log("TARFGET: " , ev.target)
  let c_p = ev.target
  let f = c_p.getAttribute('data-scrollto')
  console.log("WE GOING TO :::", f)
  let c_s = document.getElementById(f)


  console.log("C_S:", c_s);

  this.wrapItem.scrollTo({
    left: c_p.offsetLeft,
    behaviour: "smooth"
  })

  this.selected.scrollTo({
        top: c_s.offsetTop - 30,
        behavior: 'smooth'
    })


  let tmp = document.getElementsByClassName('s_active')[0]
  tmp.classList.remove('s_active')

  c_s.classList.add('s_active')


  tmp = document.getElementsByClassName('b_active')[0]
  tmp.classList.remove('b_active')
  c_p.classList.add('b_active')  
  console.log("C_P: ", c_p)
},

},
mounted(){
  this.getItem()
  setTimeout(() => {
    this.wrapItem = document.getElementById('products_scrolled')
    let x = document.getElementById('temp')
    x.addEventListener('scroll', this.handleScroll)
    this.selected = document.getElementById('temp');  
    let a_btns = document.querySelectorAll('.scroll_h_item')[0];
  console.log("A_BTNS: ",a_btns)
    a_btns.classList.add("b_active");
    let a_sec =  document.querySelectorAll('.products')[0];
    a_sec.classList.add('s_active');
  }, 100);
},
destroyed(){
},

}

</script>
<style scoped lang="scss">


</style>
