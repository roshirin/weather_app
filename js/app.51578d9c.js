(function(){var t={9796:function(t,e,a){"use strict";a.d(e,{W4:function(){return c},Tb:function(){return p},r5:function(){return s},r1:function(){return d},hn:function(){return l},Br:function(){return g},sY:function(){return m},kc:function(){return u},zR:function(){return h},IK:function(){return v}});const r=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"],o={"01d":"clear-sky.svg","01n":"clear-sky-night.svg","02d":"few-clouds.svg","02n":"few-clouds-night.svg","03d":"scattered-clouds.svg","03n":"scattered-clouds.svg","04d":"overcast-clouds.svg","04n":"overcast-clouds.svg","09d":"heavy-rain.svg","09n":"heavy-rain.svg","10d":"light-rain.svg","10n":"light-rain-night.svg","11d":"thunderstorm-with-rain.svg","11n":"thunderstorm-with-rain-night.svg","13d":"snow.svg","13n":"snow.svg","50d":"fog.svg","50n":"fog.svg"},n={"01d":"clear-sky.jpg","01n":"clear-sky-night.jpg","02d":"few-clouds.jpg","02n":"few-clouds-night.jpg","03d":"scattered-clouds.jpg","03n":"scattered-clouds.jpg","04d":"overcast-clouds.jpg","04n":"overcast-clouds.jpg","09d":"heavy-rain.jpg","09n":"heavy-rain.jpg","10d":"light-rain.jpg","10n":"light-rain-night.jpg","11d":"thunderstorm-with-rain.jpg","11n":"thunderstorm-with-rain.jpg","13d":"snow.jpg","13n":"snow.jpg","50d":"scattered-clouds.jpg","50n":"scattered-clouds.jpg"};a(7658);const i=t=>Math.round(t.reduce(((t,e)=>t+e))/t.length),s=t=>{const{dt:e,main:{temp:a},weather:{0:{icon:r}}}=t,i=new Date(1e3*e).getDate(),s=Math.round(a),c=o[r],l=n[r];return{date:i,temperature:s,iconSrc:c,backgroundSrc:l}},c=t=>a(8578)(`./${t}`),l=t=>{const e=t.city.timezone,a=t=>{const a=t+e,r=new Date(1e3*a);let o=r.getUTCHours();return 1===o.length&&(o="0"+o),`${o}:00`};return t.list.map((t=>{const{dt:e,main:{temp:r}}=t,o=a(e).slice(0,5);return{time:o,temperature:Math.round(r)}}))},d=t=>t.map((t=>{const{date:e,month:a,dayTemp:r,nightTemp:o}=t;return{date:e,month:a,dayTemp:r,nightTemp:o}})),u=(t,e)=>{let a=0,o=[],n=[],s=[];return t.list.reduce(((c,l)=>{const d=l.dt+t.city.timezone,u=new Date(1e3*d),h=u.getUTCDate(),g=u.getUTCMonth(),v=u.getUTCHours(),p=l.main.temp,m=l.clouds.all;return h===e||c.length>=4||(v<9?o.push(p):n.push(p),s.push(m),n.length>=5&&(c.push({id:a,date:h,month:r[g],nightTemp:i(o),dayTemp:i(n),clouds:i(s)}),o=[],n=[],s=[],a++)),c}),[])},h=(t,e)=>{if(e){const e=t.map((t=>`${t.date} ${t.month}`)),a=t.map((t=>t.dayTemp)),r=t.map((t=>t.nightTemp));return{xAxisLabels:e,graphDayTemp:a,graphNightTemp:r}}const a=t.map((t=>t.time)),r=t.map((t=>t.temperature));return{xAxisLabels:a,graphTemperature:r}},g=()=>{const t=localStorage.getItem("favorites");return t?JSON.parse(t):[]},v=t=>{localStorage.setItem("favorites",JSON.stringify(t))},p=async()=>{const t=await new Promise(((t,e)=>{navigator.geolocation.getCurrentPosition(t,e)})),e=t.coords.latitude,a=t.coords.longitude;return[e,a]},m={en:{language:"en",header:{home:"Home",favorites:"Favorites"},months:{jan:"jan",feb:"feb",mar:"mar",apr:"apr",may:"may",jun:"jun",jul:"jul",aug:"aug",sep:"sep",oct:"oct",nov:"nov",dec:"dec"},cityInputPlaceholder:"Enter city name...",chartHeader:"Temperature forecast",blockRemoveModalMsg:"Remove it?",favoritesExceedModalMsg1:"To add",favoritesExceedModalMsg2:"first remove another city: maximum 5 favorites",favoritesEmptyHeader:"Favorites list is empty!",favoritesEmptyMsg:"Add something first."},uk:{language:"uk",header:{home:"Головна",favorites:"Улюблене"},months:{jan:"січ",feb:"лют",mar:"мар",apr:"кві",may:"тра",jun:"чер",jul:"лип",aug:"сер",sep:"вер",oct:"жов",nov:"лис",dec:"гру"},cityInputPlaceholder:"Напишіть назву міста...",chartHeader:"Прогноз температури",blockRemoveModalMsg:"Прибрати його?",favoritesExceedModalMsg1:"Щоб додати",favoritesExceedModalMsg2:"спочатку видаліть щось: не більше 5 улюблених міст.",favoritesEmptyHeader:"Жодного улюбленого міста!",favoritesEmptyMsg:"Додайте щось спочатку."}}},4637:function(t,e,a){"use strict";a.d(e,{Z:function(){return rt}});var r=a(9242),o=a(3396),n=a(7139);const i={class:"header"},s={class:"header__content container"},c={class:"navigation"},l={class:"language"},d=(0,o._)("option",{value:"en"},"en",-1),u=(0,o._)("option",{value:"uk"},"укр",-1),h=[d,u],g={class:"main"},v={class:"container page"};function p(t,e){const a=(0,o.up)("router-link"),d=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("header",i,[(0,o._)("div",s,[(0,o._)("nav",c,[(0,o.Wm)(a,{to:{name:"home"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.$t("header.home")),1)])),_:1}),(0,o.Wm)(a,{to:{name:"favorites"}},{default:(0,o.w5)((()=>[(0,o.Uk)((0,n.zw)(t.$t("header.favorites")),1)])),_:1})]),(0,o._)("div",l,[(0,o.wy)((0,o._)("select",{class:"language__select","onUpdate:modelValue":e[0]||(e[0]=e=>t.$i18n.locale=e)},h,512),[[r.bM,t.$i18n.locale]])])])]),(0,o._)("main",g,[(0,o._)("div",v,[(0,o.Wm)(d)])])],64)}var m=a(89);const f={},y=(0,m.Z)(f,[["render",p]]);var w=y,k=a(2483);const b={class:"home-page"},_={class:"weather-blocks-container"};function D(t,e,a,r,n,i){const s=(0,o.up)("WeatherBlock"),c=(0,o.up)("RemoveWeatherBlockModal"),l=(0,o.up)("MaxFavoritesModal"),d=(0,o.up)("AddWeatherBlockButton");return(0,o.wg)(),(0,o.iD)("div",b,[(0,o._)("div",_,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.weatherBlocks,(t=>((0,o.wg)(),(0,o.iD)("div",{key:t.id},[(0,o.Wm)(s,{isFirstBlock:1===n.weatherBlocks.length,onRemoveBlock:e=>i.showRemoveModal(t.id),onExtraFavoriteAdded:i.handleMaxFavoritesReached},null,8,["isFirstBlock","onRemoveBlock","onExtraFavoriteAdded"])])))),128)),n.isRemoveModalShown?((0,o.wg)(),(0,o.j4)(c,{key:0,onConfirmRemoval:e[0]||(e[0]=t=>i.removeWeatherBlock()),onCancelRemoval:e[1]||(e[1]=t=>i.closeRemoveModal())})):(0,o.kq)("",!0),n.isMaxFavoritesModalShown?((0,o.wg)(),(0,o.j4)(l,{key:1,extraFavoriteCity:n.extraFavoriteCity,onCloseModal:e[2]||(e[2]=t=>i.closeMaxFavoritesModal())},null,8,["extraFavoriteCity"])):(0,o.kq)("",!0)]),n.weatherBlocks.length<5?((0,o.wg)(),(0,o.j4)(d,{key:0,onClick:i.addWeatherBlock,class:"home-page__add-button"},null,8,["onClick"])):(0,o.kq)("",!0)])}a(7658);var C=a(3029),F=a(2478);const j={class:"modal-overlay"},x={class:"modal-overlay__window modal-window"},M={class:"modal-window__header"},B={class:"modal-window__buttons"};function T(t,e,a,r,i,s){return(0,o.wg)(),(0,o.iD)("div",j,[(0,o._)("div",x,[(0,o._)("div",M,(0,n.zw)(t.$t("blockRemoveModalMsg")),1),(0,o._)("div",B,[(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>s.confirmRemoval&&s.confirmRemoval(...t)),class:"options-button"},"Confirm"),(0,o._)("button",{onClick:e[1]||(e[1]=(...t)=>s.cancelRemoval&&s.cancelRemoval(...t)),class:"options-button"},"Cancel")])])])}var $={methods:{confirmRemoval(){this.$emit("confirmRemoval")},cancelRemoval(){this.$emit("cancelRemoval")}}};const E=(0,m.Z)($,[["render",T]]);var R=E;const S={class:"add-block-button"};function W(t,e){return(0,o.wg)(),(0,o.iD)("button",S,"+")}const I={},A=(0,m.Z)(I,[["render",W]]);var L=A;const O={class:"modal-overlay"},N={class:"modal-overlay__window modal-window"},P={class:"modal-window__header"},z={class:"modal-window__buttons"};function Z(t,e,a,r,i,s){return(0,o.wg)(),(0,o.iD)("div",O,[(0,o._)("div",N,[(0,o._)("div",P,(0,n.zw)(t.$t("favoritesExceedModalMsg1"))+" "+(0,n.zw)(a.extraFavoriteCity)+", "+(0,n.zw)(t.$t("favoritesExceedModalMsg2")),1),(0,o._)("div",z,[(0,o._)("button",{onClick:e[0]||(e[0]=(...t)=>s.closeModal&&s.closeModal(...t)),class:"options-button"},"Ok")])])])}var q={props:{extraFavoriteCity:String},methods:{closeModal(){this.$emit("closeModal")}}};const U=(0,m.Z)(q,[["render",Z]]);var H=U,K={components:{WeatherBlock:F.Z,RemoveWeatherBlockModal:R,AddWeatherBlockButton:L,MaxFavoritesModal:H},data(){return{weatherBlocks:[],favorites:[],isRemoveModalShown:!1,blockRemovedId:null,isMaxFavoritesModalShown:!1,extraFavoriteCity:null}},mounted(){this.addWeatherBlock()},methods:{addWeatherBlock(){const t=(0,C.Z)();this.weatherBlocks.push({id:t})},showRemoveModal(t){this.isRemoveModalShown=!0,this.blockRemovedId=t},closeRemoveModal(){this.isRemoveModalShown=!1,this.blockRemovedId=null},removeWeatherBlock(){if(this.blockRemovedId){const t=this.weatherBlocks.filter((({id:t})=>t!==this.blockRemovedId));this.weatherBlocks=t}this.closeRemoveModal()},handleMaxFavoritesReached(t){this.extraFavoriteCity=t,this.isMaxFavoritesModalShown=!0},closeMaxFavoritesModal(){this.isMaxFavoritesModalShown=!1}}};const Y=(0,m.Z)(K,[["render",D]]);var Q=Y;const J=[{path:"/",name:"home",component:Q},{path:"/favorites",name:"favorites",component:()=>a.e(443).then(a.bind(a,3075))}],V=(0,k.p7)({history:(0,k.r5)(),routes:J});var G=V,X=a(5213),tt=a(9796);const et=(0,X.o)({locale:"en",messages:tt.sY}),at=(0,r.ri)(w);at.use(G),at.use(et),at.mount("#app");var rt=et},2478:function(t,e,a){"use strict";a.d(e,{Z:function(){return At}});var r=a(3396),o=a(7139);const n={class:"weather-block__header"},i={class:"weather-block__buttons"},s={class:"switcher-container"},c={key:0,class:"weather-block__content weather-info"};function l(t,e,a,l,d,u){const h=(0,r.up)("CitySearch"),g=(0,r.up)("FiveDaysSwitcher"),v=(0,r.up)("FavoritesButton"),p=(0,r.up)("RemoveWeatherBlockButton"),m=(0,r.up)("PreLoader"),f=(0,r.up)("WeatherCard"),y=(0,r.up)("WeatherChart");return(0,r.wg)(),(0,r.iD)("div",{class:"weather-block",style:(0,o.j5)(d.backgroundImage&&{"background-image":`url(${d.backgroundImage})`})},[(0,r._)("div",n,[a.favoritedEntry?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(h,{key:0,onCitySelected:u.getWeatherData,class:"weather-block__city"},null,8,["onCitySelected"])),(0,r._)("div",i,[(0,r._)("div",s,[(0,r.Wm)(g,{isFiveDaysChart:d.isFiveDaysChart,onToggle:u.toggleFiveDaysChart},null,8,["isFiveDaysChart","onToggle"])]),d.cardData?((0,r.wg)(),(0,r.j4)(v,{key:0,selectedCity:d.selectedCity,coordinates:d.coordinates,onExtraFavoriteAdded:u.handleExtraFavorite},null,8,["selectedCity","coordinates","onExtraFavoriteAdded"])):(0,r.kq)("",!0),a.favoritedEntry?(0,r.kq)("",!0):((0,r.wg)(),(0,r.j4)(p,{key:1,onClick:u.removeWeatherBlock},null,8,["onClick"]))])]),d.cardData||d.isLoading?((0,r.wg)(),(0,r.iD)("div",c,[d.isLoading?((0,r.wg)(),(0,r.j4)(m,{key:0,class:"weather-block__preloader"})):(0,r.kq)("",!0),d.cardData&&!d.isLoading?((0,r.wg)(),(0,r.j4)(f,{key:1,selectedCity:d.selectedCity,cardData:d.cardData,class:"weather-info__item"},null,8,["selectedCity","cardData"])):(0,r.kq)("",!0),d.cardData?((0,r.wg)(),(0,r.j4)(y,{key:2,chartData:d.chartData,isFiveDaysChart:d.isFiveDaysChart,class:"weather-info__item"},null,8,["chartData","isFiveDaysChart"])):(0,r.kq)("",!0)])):(0,r.kq)("",!0)],4)}var d=a(9242);const u={class:"search-block"},h=["placeholder","disabled"],g={key:1,class:"search-block__autocomplete autocomplete-variants"},v=["onClick"];function p(t,e,a,n,i,s){const c=(0,r.up)("PreLoader");return(0,r.wg)(),(0,r.iD)("div",u,[(0,r.wy)((0,r._)("input",{class:"search-block__input","onUpdate:modelValue":e[0]||(e[0]=t=>i.searchQuery=t),onInput:e[1]||(e[1]=(...t)=>s.getAutocomplete&&s.getAutocomplete(...t)),onBlur:e[2]||(e[2]=(...t)=>s.clearAutocomplete&&s.clearAutocomplete(...t)),placeholder:t.$t("cityInputPlaceholder"),disabled:i.isLoading},null,40,h),[[d.nr,i.searchQuery]]),i.isLoading?((0,r.wg)(),(0,r.j4)(c,{key:0,class:"search-block__preloader"})):(0,r.kq)("",!0),i.cities.length?((0,r.wg)(),(0,r.iD)("ul",g,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.cities,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id,onClick:e=>s.selectCity(t),class:"autocomplete-variants__element"},(0,o.zw)(t.display_name),9,v)))),128))])):(0,r.kq)("",!0)])}var m=a(4806);const f={class:"loader"},y=(0,r._)("div",{class:"loader__content"},null,-1),w=[y];function k(t,e){return(0,r.wg)(),(0,r.iD)("div",f,w)}var b=a(89);const _={},D=(0,b.Z)(_,[["render",k]]);var C=D;const F="https://eu1.locationiq.com/v1/autocomplete",j="format=json",x="limit=6",M="tag=place:city,place:town",B=async(t,e)=>{const a="pk.18b7672e8deb1aaea5f8d47aecc2f516",r=encodeURIComponent(`${t}`),o=`${F}?q=${r}&${j}&${x}&${M}&accept-language=${e}&key=${a}`;try{const t=await fetch(o),e=await t.json();return e}catch(n){throw new Error(n)}};var T=a(4637),$={components:{PreLoader:C},data(){return{searchQuery:"",cities:[],isLoading:!1}},methods:{getAutocomplete:(0,m.debounce)((async function(){this.isLoading=!0;const t=this.searchQuery.trim();if(t.length>=3){const e=await B(t,T.Z.global.t("language"));this.cities=e}else this.cities=[];this.isLoading=!1}),600),clearAutocomplete(){setTimeout((()=>{this.cities=[]}),200)},selectCity(t){const{display_place:e,lat:a,lon:r}=t;this.searchQuery=name,this.cities=[],this.$emit("city-selected",a,r,e)}}};const E=(0,b.Z)($,[["render",p]]);var R=E,S=a(5247),W=a(2257);const I={class:"weather-card"},A={class:"current-info"},L={class:"current-info__city"},O={class:"current-info__description"},N={class:"current-info__temperature"},P=["src"],z={key:0,class:"current-info"},Z={class:"days-container"},q={class:"days-item__date"},U={class:"days-item__day-temp temp-container"},H=(0,r._)("img",{src:S,class:"temp-container__icon"},null,-1),K={class:"temp-container__info"},Y={class:"temp-container"},Q=(0,r._)("img",{src:W,class:"temp-container__icon"},null,-1),J={class:"temp-container__info"};function V(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("div",I,[(0,r._)("div",A,[(0,r._)("div",L,(0,o.zw)(a.selectedCity),1),(0,r._)("div",O,[(0,r._)("div",N,(0,o.zw)(a.cardData[0].temperature)+"°C",1),(0,r._)("img",{src:s.getIconPath(a.cardData[0].iconSrc),class:"current-info__icon"},null,8,P)])]),a.cardData.length>1?((0,r.wg)(),(0,r.iD)("div",z,[(0,r._)("div",Z,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.cardData[1],(e=>((0,r.wg)(),(0,r.iD)("div",{key:e.id,class:"days-item"},[(0,r._)("div",q,(0,o.zw)(e.date)+" "+(0,o.zw)(t.$t(`months.${e.month}`)),1),(0,r._)("div",U,[H,(0,r._)("div",K,(0,o.zw)(e.dayTemp)+"°C ",1)]),(0,r._)("div",Y,[Q,(0,r._)("div",J,(0,o.zw)(e.nightTemp)+"°C ",1)])])))),128))])])):(0,r.kq)("",!0)])}var G={props:{selectedCity:String,cardData:Object},methods:{getIconPath(t){return a(5804)(`./${t}`)}}};const X=(0,b.Z)(G,[["render",V]]);var tt=X;const et={class:"weather-chart"},at={class:"weather-chart__header"},rt={ref:"weatherChart"};function ot(t,e,a,n,i,s){return(0,r.wg)(),(0,r.iD)("div",et,[(0,r._)("div",at,(0,o.zw)(t.$t("chartHeader")),1),(0,r._)("canvas",rt,null,512)])}var nt=a(1632),it=a(9796),st={props:{chartData:Array,isFiveDaysChart:Boolean},mounted(){this.$nextTick((()=>{this.createWeatherChart()}))},watch:{chartData:{handler(t){this.updateWeatherChart(t)},deep:!0}},methods:{createWeatherChart(){const t=this.$refs.weatherChart.getContext("2d"),{xAxisLabels:e,graphTemperature:a,graphDayTemp:r,graphNightTemp:o}=(0,it.zR)(this.chartData,this.isFiveDaysChart),n={labels:e,datasets:[{label:"Temperature (°C)",data:a,borderColor:"rgb(255, 255, 255)"},{label:"Day Temperature (°C)",data:r,borderColor:"rgb(255, 255, 255)"},{label:"Night Temperature (°C)",data:o,borderColor:"rgb(0, 0, 255)"}]},i={type:"line",data:n,options:{tension:.3,elements:{point:{borderWidth:3,radius:2,hitRadius:8,hoverRadius:5,style:"circle"}},scales:{x:{border:{display:!1},ticks:{display:!0,color:"#ffffff",padding:20},grid:{display:!1}},y:{border:{display:!1},ticks:{color:"#ffffff",padding:20,callback:(t,e)=>e%2===0?t+"°C":""},grid:{display:!1}}},plugins:{legend:{display:!1}}}};this.chart=new nt.ZP(t,i)},updateWeatherChart(t){const{xAxisLabels:e,graphTemperature:a,graphDayTemp:r,graphNightTemp:o}=(0,it.zR)(t,this.isFiveDaysChart);this.chart.data.labels=e;const n=this.chart.data.datasets;n[0].data=a,n[1].data=r,n[2].data=o,this.chart.update()}}};const ct=(0,b.Z)(st,[["render",ot]]);var lt=ct;const dt={class:"remove-block-button"};function ut(t,e){return(0,r.wg)(),(0,r.iD)("button",dt)}const ht={},gt=(0,b.Z)(ht,[["render",ut]]);var vt=gt;const pt={class:"mode-switcher"},mt=["checked"],ft=["data-content"];function yt(t,e,a,o,n,i){return(0,r.wg)(),(0,r.iD)("label",pt,[(0,r._)("input",{type:"checkbox",checked:a.isFiveDaysChart,onChange:e[0]||(e[0]=(...t)=>i.toggleFiveDaysChart&&i.toggleFiveDaysChart(...t)),class:"mode-switcher__input"},null,40,mt),(0,r._)("span",{"data-content":a.isFiveDaysChart?"5d":"1d",class:"mode-switcher__slider"},null,8,ft)])}var wt={props:{isFiveDaysChart:Boolean},methods:{toggleFiveDaysChart(t){this.$emit("toggle",t.target.checked)}}};const kt=(0,b.Z)(wt,[["render",yt]]);var bt=kt,_t=a(9849),Dt=a(5803);const Ct={key:0,src:_t,class:"favorites-icon"},Ft={key:1,src:Dt,class:"favorites-icon"};function jt(t,e,a,o,n,i){return(0,r.wg)(),(0,r.iD)("button",{class:"favorites-button",onClick:e[0]||(e[0]=(...t)=>i.handleFavoriteToggle&&i.handleFavoriteToggle(...t))},[n.isInFavorites?((0,r.wg)(),(0,r.iD)("img",Ct)):((0,r.wg)(),(0,r.iD)("img",Ft))])}a(7658);var xt={data(){return{favorites:[],isInFavorites:!1}},props:{selectedCity:String,coordinates:Array},mounted(){this.favorites=(0,it.Br)(),this.getFavoriteStatus()},watch:{selectedCity:{handler(){this.favorites=(0,it.Br)(),this.getFavoriteStatus()}}},methods:{addToFavorites(t){this.favorites.push(t),(0,it.IK)(this.favorites)},removeFromFavorites(t){this.favorites=this.favorites.filter((e=>e.cityName!==t.cityName)),(0,it.IK)(this.favorites)},getFavoriteStatus(){this.isInFavorites=this.favorites.some((t=>t.cityName===this.selectedCity))},handleFavoriteToggle(){this.favorites=(0,it.Br)();const t=this.favorites,e={cityName:this.selectedCity,coordinates:this.coordinates},a=t.some((t=>t.cityName===e.cityName));if(a===this.isInFavorites)return a?(this.removeFromFavorites(e),void(this.isInFavorites=!1)):void(t.length>=5?this.$emit("extraFavoriteAdded",this.selectedCity):(this.addToFavorites(e),this.isInFavorites=!0));this.isInFavorites=!this.isInFavorites}}};const Mt=(0,b.Z)(xt,[["render",jt]]);var Bt=Mt;const Tt="https://api.openweathermap.org/data/2.5/",$t="appid=687e88bf9fce5309e0cb7ce909791969",Et="units=metric",Rt=async(t,e)=>{const a=`weather?lat=${t}&lon=${e}`,r=await fetch(`${Tt}${a}&${$t}&${Et}`).then((t=>t.json())).catch((t=>{throw new Error(t)}));return r},St=async(t,e)=>{const a=`forecast?lat=${t}&lon=${e}`,r=await fetch(`${Tt}${a}&${$t}&${Et}`).then((t=>t.json())).catch((t=>{throw new Error(t)}));return r};var Wt={components:{CitySearch:R,WeatherCard:tt,WeatherChart:lt,FiveDaysSwitcher:bt,FavoritesButton:Bt,RemoveWeatherBlockButton:vt,PreLoader:C},props:{favoritedEntry:Object,isFirstBlock:Boolean},data(){return{backgroundImage:"",isLoading:!1,selectedCity:"",coordinates:[],isFiveDaysChart:!1,currentData:null,forecastData:null,cardData:null,chartData:null}},mounted(){this.favoritedEntry||this.isFirstBlock||(this.backgroundImage=(0,it.W4)("few-clouds.jpg")),this.isFirstBlock&&this.loadDataForFirstBlock(),this.favoritedEntry&&this.loadDataForFavorite()},watch:{cardData:{handler(t){this.backgroundImage=(0,it.W4)(t[0].backgroundSrc)}}},methods:{removeWeatherBlock(){this.$emit("removeBlock")},toggleFiveDaysChart(t){this.isFiveDaysChart=t,this.currentData&&this.updateDisplayedData(t)},updateDisplayedData(t){const e=this.currentData,a=this.forecastData,r=(0,it.r5)(e);if(t){const t=(0,it.kc)(a,r.date);return this.cardData=[r,t],void(this.chartData=(0,it.r1)(t))}this.cardData=[r],this.chartData=(0,it.hn)(a).slice(0,8)},getWeatherData:async function(t,e,a){this.isLoading=!0;const[r,o]=await Promise.all([Rt(t,e),St(t,e)]);this.selectedCity=a||r.name,this.coordinates=[t,e],this.currentData=r,this.forecastData=o,this.updateDisplayedData(this.isFiveDaysChart),this.isLoading=!1},loadDataForFavorite(){const{cityName:t,coordinates:e}=this.favoritedEntry;this.getWeatherData(e[0],e[1],t)},async loadDataForFirstBlock(){this.isLoading=!0;try{if("geolocation"in navigator){const t=await(0,it.Tb)();this.getWeatherData(t[0],t[1])}}catch(t){throw this.isLoading=!1,new Error(t)}},handleExtraFavorite(t){this.$emit("extraFavoriteAdded",t)}}};const It=(0,b.Z)(Wt,[["render",l]]);var At=It},8578:function(t,e,a){var r={"./clear-sky-night.jpg":3636,"./clear-sky.jpg":3783,"./default-city.jpg":3621,"./few-clouds-night.jpg":6743,"./few-clouds.jpg":3815,"./heavy-rain.jpg":5769,"./light-rain-night.jpg":3582,"./light-rain.jpg":8464,"./overcast-clouds.jpg":1197,"./scattered-clouds.jpg":8725,"./snow.jpg":4501,"./thunderstorm-with-rain.jpg":4712};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id=8578},5804:function(t,e,a){var r={"./clear-sky-night.svg":8548,"./clear-sky.svg":1108,"./few-clouds-night.svg":5870,"./few-clouds.svg":9613,"./fog.svg":7168,"./heavy-rain.svg":5281,"./icon-cross.svg":2558,"./icon-day.svg":5247,"./icon-night.svg":2257,"./icon-star-empty.svg":5803,"./icon-star-full.svg":9849,"./light-rain-night.svg":964,"./light-rain.svg":7229,"./overcast-clouds.svg":808,"./scattered-clouds.svg":2192,"./snow-night.svg":1957,"./snow.svg":3892,"./thunderstorm-with-rain-night.svg":3562,"./thunderstorm-with-rain.svg":7147};function o(t){var e=n(t);return a(e)}function n(t){if(!a.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=n,t.exports=o,o.id=5804},8548:function(t,e,a){"use strict";t.exports=a.p+"img/clear-sky-night.40b41049.svg"},1108:function(t,e,a){"use strict";t.exports=a.p+"img/clear-sky.2765f0e6.svg"},5870:function(t,e,a){"use strict";t.exports=a.p+"img/few-clouds-night.0732c46b.svg"},9613:function(t,e,a){"use strict";t.exports=a.p+"img/few-clouds.e00749fe.svg"},7168:function(t,e,a){"use strict";t.exports=a.p+"img/fog.5b80b7a9.svg"},5281:function(t,e,a){"use strict";t.exports=a.p+"img/heavy-rain.ee90ed9b.svg"},2558:function(t,e,a){"use strict";t.exports=a.p+"img/icon-cross.f4ce1a83.svg"},5247:function(t,e,a){"use strict";t.exports=a.p+"img/icon-day.ca3ed230.svg"},2257:function(t,e,a){"use strict";t.exports=a.p+"img/icon-night.6aa3ddd3.svg"},5803:function(t,e,a){"use strict";t.exports=a.p+"img/icon-star-empty.e428dacf.svg"},9849:function(t,e,a){"use strict";t.exports=a.p+"img/icon-star-full.90ad59ae.svg"},964:function(t,e,a){"use strict";t.exports=a.p+"img/light-rain-night.608fae17.svg"},7229:function(t,e,a){"use strict";t.exports=a.p+"img/light-rain.74f59fa4.svg"},808:function(t,e,a){"use strict";t.exports=a.p+"img/overcast-clouds.34ca39eb.svg"},2192:function(t,e,a){"use strict";t.exports=a.p+"img/scattered-clouds.48571090.svg"},1957:function(t,e,a){"use strict";t.exports=a.p+"img/snow-night.345705bd.svg"},3892:function(t,e,a){"use strict";t.exports=a.p+"img/snow.ecb54268.svg"},3562:function(t,e,a){"use strict";t.exports=a.p+"img/thunderstorm-with-rain-night.5ccfa305.svg"},7147:function(t,e,a){"use strict";t.exports=a.p+"img/thunderstorm-with-rain.6213b39a.svg"},3636:function(t,e,a){"use strict";t.exports=a.p+"img/clear-sky-night.d7cf5a31.jpg"},3783:function(t,e,a){"use strict";t.exports=a.p+"img/clear-sky.db403c50.jpg"},3621:function(t,e,a){"use strict";t.exports=a.p+"img/default-city.0e0750e4.jpg"},6743:function(t,e,a){"use strict";t.exports=a.p+"img/few-clouds-night.0297d974.jpg"},3815:function(t,e,a){"use strict";t.exports=a.p+"img/few-clouds.f1fd995b.jpg"},5769:function(t,e,a){"use strict";t.exports=a.p+"img/heavy-rain.4634d1b7.jpg"},3582:function(t,e,a){"use strict";t.exports=a.p+"img/light-rain-night.9a4dca3c.jpg"},8464:function(t,e,a){"use strict";t.exports=a.p+"img/light-rain.7a440ab9.jpg"},1197:function(t,e,a){"use strict";t.exports=a.p+"img/overcast-clouds.179998fa.jpg"},8725:function(t,e,a){"use strict";t.exports=a.p+"img/scattered-clouds.99e25fb1.jpg"},4501:function(t,e,a){"use strict";t.exports=a.p+"img/snow.f7f64e6a.jpg"},4712:function(t,e,a){"use strict";t.exports=a.p+"img/thunderstorm-with-rain.6e3f0603.jpg"}},e={};function a(r){var o=e[r];if(void 0!==o)return o.exports;var n=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(n.exports,n,n.exports,a),n.loaded=!0,n.exports}a.m=t,function(){var t=[];a.O=function(e,r,o,n){if(!r){var i=1/0;for(d=0;d<t.length;d++){r=t[d][0],o=t[d][1],n=t[d][2];for(var s=!0,c=0;c<r.length;c++)(!1&n||i>=n)&&Object.keys(a.O).every((function(t){return a.O[t](r[c])}))?r.splice(c--,1):(s=!1,n<i&&(i=n));if(s){t.splice(d--,1);var l=o();void 0!==l&&(e=l)}}return e}n=n||0;for(var d=t.length;d>0&&t[d-1][2]>n;d--)t[d]=t[d-1];t[d]=[r,o,n]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var r in e)a.o(e,r)&&!a.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,r){return a.f[r](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/about.8bd7a0d6.js"}}(),function(){a.miniCssF=function(t){return"css/about.3c092bfe.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="weather_app:";a.l=function(r,o,n,i){if(t[r])t[r].push(o);else{var s,c;if(void 0!==n)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var u=l[d];if(u.getAttribute("src")==r||u.getAttribute("data-webpack")==e+n){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+n),s.src=r),t[r]=[o];var h=function(e,a){s.onerror=s.onload=null,clearTimeout(g);var o=t[r];if(delete t[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(t){return t(a)})),e)return e(a)},g=setTimeout(h.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=h.bind(null,s.onerror),s.onload=h.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){a.p="/weather_app/"}(),function(){if("undefined"!==typeof document){var t=function(t,e,a,r,o){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var i=function(a){if(n.onerror=n.onload=null,"load"===a.type)r();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||e,c=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=i,c.request=s,n.parentNode&&n.parentNode.removeChild(n),o(c)}};return n.onerror=n.onload=i,n.href=e,a?a.parentNode.insertBefore(n,a.nextSibling):document.head.appendChild(n),n},e=function(t,e){for(var a=document.getElementsByTagName("link"),r=0;r<a.length;r++){var o=a[r],n=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(n===t||n===e))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],n=o.getAttribute("data-href");if(n===t||n===e)return o}},r=function(r){return new Promise((function(o,n){var i=a.miniCssF(r),s=a.p+i;if(e(i,s))return o();t(r,s,null,o,n)}))},o={143:0};a.f.miniCss=function(t,e){var a={443:1};o[t]?e.push(o[t]):0!==o[t]&&a[t]&&e.push(o[t]=r(t).then((function(){o[t]=0}),(function(e){throw delete o[t],e})))}}}(),function(){var t={143:0};a.f.j=function(e,r){var o=a.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var n=new Promise((function(a,r){o=t[e]=[a,r]}));r.push(o[2]=n);var i=a.p+a.u(e),s=new Error,c=function(r){if(a.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var n=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+e+" failed.\n("+n+": "+i+")",s.name="ChunkLoadError",s.type=n,s.request=i,o[1](s)}};a.l(i,c,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,n,i=r[0],s=r[1],c=r[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(o in s)a.o(s,o)&&(a.m[o]=s[o]);if(c)var d=c(a)}for(e&&e(r);l<i.length;l++)n=i[l],a.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return a.O(d)},r=self["webpackChunkweather_app"]=self["webpackChunkweather_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(4637)}));r=a.O(r)})();
//# sourceMappingURL=app.51578d9c.js.map