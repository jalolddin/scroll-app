(function(){"use strict";var t={2714:function(t,e,o){var i=o(6369),s=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("HelloWorld")],1)},a=[],r=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scroll",on:{scroll:function(e){return t.scrolling()}}},[e("div",{ref:"scrollTab",staticClass:"product__tab"},[e("p",{class:{active:t.selected&&"sushi"===t.choosen},on:{click:function(e){return t.scrollTo("sushi")}}},[t._v("Sushi")]),e("p",{class:{active:t.selected&&"gamburger"===t.choosen},on:{click:function(e){return t.scrollTo("gamburger")}}},[t._v("Gamburger")]),e("p",{class:{active:t.selected&&"plove"===t.choosen},on:{click:function(e){return t.scrollTo("plove")}}},[t._v("Plove")]),e("p",{class:{active:t.selected&&"salad"===t.choosen},on:{click:function(e){return e.preventDefault(),t.scrollTo("salad")}}},[t._v("Salad")]),e("p",{class:{active:t.selected&&"bread"===t.choosen},on:{click:function(e){return t.scrollTo("bread")}}},[t._v("Bread")]),e("p",{class:{active:t.selected&&"cake"===t.choosen},on:{click:function(e){return t.scrollTo("cake")}}},[t._v("Cake")]),e("p",{class:{active:t.selected&&"samsa"===t.choosen},on:{click:function(e){return t.scrollTo("samsa")}}},[t._v("Samsa")]),e("p",{class:{active:t.selected&&"cola"===t.choosen},on:{click:function(e){return t.scrollTo("cola")}}},[t._v("Cola")])]),e("div",{staticClass:"products"},t._l(t.products,(function(o,i){return e("div",{key:i,ref:i,refInFor:!0,staticClass:"product",attrs:{id:o.category}},[e("img",{attrs:{src:o.img,alt:""}}),e("h1",{ref:i,refInFor:!0},[t._v(t._s(o.title))]),e("p",[t._v(t._s(o.description))])])})),0)])},c=[],l={data(){return{selected:"sushi",changeValue:"sushi",activeLink:null,choosen:"sushi",wrapItem:"sushi",products:[{title:"Sushi",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Sushi 2",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Sushi 3",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Sushi 4",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Sushi 5",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Sushi 6",description:"Description about sushi meal",img:"https://www.thespruceeats.com/thmb/KKVYHEcAN6Jt7yvULfCB4r3ad30=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/what-is-sushi-5079606-hero-01-e5a0a26f194a49478f84e04193baaefa.jpg",category:"sushi"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Gamburger",description:"Description about gamburger meal",img:"https://www.photorecept.ru/wp-content/uploads/2021/04/gamburger-v-domashnih-uslovijah-ili-bulochka-s-mjasom-1300x856.jpg",category:"gamburger"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Plove",description:"Description about plove meal",img:"https://s1.eda.ru/StaticContent/Photos/120131082439/160124115932/p_O.jpg",category:"plove"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Salad",description:"Description about salad meal",img:"https://kristineskitchenblog.com/wp-content/uploads/2020/06/italian-salad-1401-2.jpg",category:"salad"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Bread",description:"Description about Bread meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Korb_mit_Br%C3%B6tchen.JPG/1200px-Korb_mit_Br%C3%B6tchen.JPG",category:"bread"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Cake",description:"Description about cake meal",img:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Pound_layer_cake.jpg/800px-Pound_layer_cake.jpg",category:"cake"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Samsa",description:"Description about samsa meal",img:"https://www.gastronom.ru/binfiles/images/20161118/b0a987b6.jpg",category:"samsa"},{title:"Cola",description:"Description about Coca-cola",img:"https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",category:"cola"},{title:"Cola",description:"Description about Coca-cola",img:"https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",category:"cola"},{title:"Cola",description:"Description about Coca-cola",img:"https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",category:"cola"},{title:"Cola",description:"Description about Coca-cola",img:"https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",category:"cola"},{title:"Cola",description:"Description about Coca-cola",img:"https://www.spot.uz/media/img/2018/09/GAngKZ15374412325752_b.jpg",category:"cola"}]}},watch:{choosen(){if("plove"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft-=90,this.selected&&"plove"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft-=90}}if("gamburger"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft-=90,this.selected&&"gamburger"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft-=90}}if("sushi"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft-=90,this.selected&&"salad"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft-=90}}if("salad"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft+=90,t.scrollLeft-=90,this.selected&&"salad"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft+=90,t.scrollLeft-=90,console.log(this.choosen),console.log(this.selected)}}if("bread"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft+=90,this.selected&&"bread"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft+=80}}if("cake"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft+=90,this.selected&&"cake"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft+=90}}if("cola"===this.choosen){const t=this.$refs.scrollTab;if(t.scrollLeft+=80,this.selected&&"cola"===this.choosen){const t=this.$refs.scrollTab;t.scrollLeft+=80}}}},methods:{handleScroll(){window.scrollY<=900?this.choosen="sushi":window.scrollY<=1900?this.choosen="gamburger":window.scrollY<=2800?this.choosen="plove":window.scrollY<=3900?this.choosen="salad":window.scrollY<=4700?this.choosen="bread":window.scrollY<=5800?this.choosen="cake":window.scrollY<=6700?this.choosen="samsa":window.scrollY<=7800&&(this.choosen="cola")},scrollTo(t){this.selected=t,window.addEventListener("scroll",this.handleScroll),document.getElementById(t).scrollIntoView({behavior:"smooth"})}},created(){window.addEventListener("scroll",this.handleScroll)},updated(){this.handleScroll()}},n=l,p=o(1001),u=(0,p.Z)(n,r,c,!1,null,"3ae51cbe",null),h=u.exports,m={name:"App",components:{HelloWorld:h}},d=m,g=(0,p.Z)(d,s,a,!1,null,null,null),b=g.exports;i.ZP.config.productionTip=!1,new i.ZP({render:t=>t(b)}).$mount("#app")}},e={};function o(i){var s=e[i];if(void 0!==s)return s.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,i,s,a){if(!i){var r=1/0;for(p=0;p<t.length;p++){i=t[p][0],s=t[p][1],a=t[p][2];for(var c=!0,l=0;l<i.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](i[l])}))?i.splice(l--,1):(c=!1,a<r&&(r=a));if(c){t.splice(p--,1);var n=s();void 0!==n&&(e=n)}}return e}a=a||0;for(var p=t.length;p>0&&t[p-1][2]>a;p--)t[p]=t[p-1];t[p]=[i,s,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,a,r=i[0],c=i[1],l=i[2],n=0;if(r.some((function(e){return 0!==t[e]}))){for(s in c)o.o(c,s)&&(o.m[s]=c[s]);if(l)var p=l(o)}for(e&&e(i);n<r.length;n++)a=r[n],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(p)},i=self["webpackChunkscrolling_app"]=self["webpackChunkscrolling_app"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(2714)}));i=o.O(i)})();
//# sourceMappingURL=app.ac74e23e.js.map