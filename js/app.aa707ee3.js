(function(){var e={7389:function(e,t,r){"use strict";var n=r(8935),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("img",{staticClass:"logo",attrs:{src:r(6949)}}),n("WordCard",{attrs:{word:e.current,imageId:e.current.imageId,stateAnswer:e.isAnswerCorrect},on:{userAnswered:e.checkAnswer}})],1)},s=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"card-header mb-2"},[n("div",{staticClass:"total-answers"},[n("img",{staticClass:"icon",attrs:{src:r(7462)}}),e._v(" "+e._s(e.totalCorrect)+" / "+e._s(e.totalWords)+" ")]),n("div",{staticClass:"total-answers"},[n("img",{staticClass:"icon",attrs:{src:r(258)}}),e._v(" "+e._s(e.totalIncorrect)+" / "+e._s(e.totalWords)+" ")])]),n("div",{staticClass:"card-body-content"},[n("div",{staticClass:"card-image"},[n("img",{staticClass:"img-fluid word-image",attrs:{src:e.wordImage}})]),n("div",{staticClass:"card-text"},[n("p",{class:e.answerClass},[e._v(e._s(e.word.alternative))])]),n("div",{staticClass:"card-footer"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.userAnswer,expression:"userAnswer"}],staticClass:"mb-4",attrs:{type:"text"},domProps:{value:e.userAnswer},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.checkAnswer.apply(null,arguments)},input:function(t){t.target.composing||(e.userAnswer=t.target.value)}}}),n("button",{staticClass:"btn btn-primary",on:{click:e.checkAnswer}},[e._v("Let's see")])])])])])},c=[],a=r(4665),g={name:"WordCard",data:function(){return{userAnswer:"",imageUrl:"@/assets/imgs/"}},props:{imageId:{type:Number,required:!0},word:{type:Object,required:!0},stateAnswer:{required:!0}},computed:{...(0,a.Se)(["words","correct","incorrect"]),wordImage(){return r(8768)(`./${this.imageId}.jpg`)},totalWords(){return this.words.length},totalCorrect(){return this.correct.length},totalIncorrect(){return this.incorrect.length},answerClass(){return this.stateAnswer?"correct":!1===this.stateAnswer?"incorrect":"default"}},methods:{checkAnswer(){this.$emit("userAnswered",this.userAnswer),this.userAnswer=""}}},A=g,u=r(3736),l=(0,u.Z)(A,o,c,!1,null,"655d1186",null),d=l.exports,f={name:"App",data(){return{isAnswerCorrect:null}},components:{WordCard:d},methods:{...(0,a.nv)(["getRandomWord","loadWords","setCorrect","setIncorrect","reset"]),checkAnswer(e){this.remaining.length>0?(e.toLowerCase()===this.current.answer.toLowerCase()?(this.setCorrect(),this.isAnswerCorrect=!0):(this.isAnswerCorrect=!1,this.setIncorrect()),setTimeout((()=>{this.getRandomWord(),this.isAnswerCorrect=null}),1500)):(this.reset(),this.getRandomWord())},init(){this.loadWords(),this.getRandomWord()}},created:function(){this.init()},computed:{...(0,a.Se)(["words","remaining","current"])}},m=f,w=(0,u.Z)(m,i,s,!1,null,null,null),p=w.exports;const h=[{english:"happy",serbian:"srećan",imageId:1},{english:"happy",serbian:"lijepo",imageId:2},{english:"friend",serbian:"prijatelju",imageId:3},{english:"explosion",serbian:"eksplozija",imageId:4},{english:"carrot",serbian:"šargarepa",imageId:5},{english:"car",serbian:"auto",imageId:6},{english:"soldier",serbian:"vojnik",imageId:7},{english:"fear",serbian:"strah",imageId:8},{english:"relativity",serbian:"relativnost",imageId:9},{english:"book",serbian:"knjiga",imageId:10},{english:"Earth",serbian:"Zemlja",imageId:11},{english:"speed limit",serbian:"ograničenje brzine",imageId:12}];function v(e){const t=Math.floor(2*Math.random());let r={};switch(t){case 0:r={answer:e.english,alternative:e.serbian,imageId:e.imageId};break;case 1:r={answer:e.serbian,alternative:e.english,imageId:e.imageId};break}return r}n.Z.use(a.ZP);var B=new a.ZP.Store({state:{db:h,remaining:[],correct:[],incorrect:[],current:{},words:[]},getters:{remaining:e=>e.remaining,correct:e=>e.correct,incorrect:e=>e.incorrect,current:e=>e.current,words:e=>e.db},mutations:{setRemaining(e,t){e.remaining=t},setCorrect(e,t){e.correct=t},setIncorrect(e,t){e.incorrect=t},setCurrent(e,t){e.current=t}},actions:{getRandomWord({commit:e,state:t}){const r=Math.floor(Math.random()*t.remaining.length);let n=v(t.remaining[r]);e("setCurrent",n),e("setRemaining",t.remaining.filter(((e,t)=>t!==r)))},loadWords({commit:e,state:t}){e("setRemaining",t.db)},setCorrect({commit:e,state:t}){e("setCorrect",[...t.correct,t.current])},setIncorrect({commit:e,state:t}){e("setIncorrect",[...t.incorrect,t.current])},reset({commit:e,state:t}){e("setRemaining",t.db),e("setCorrect",[]),e("setIncorrect",[])}},modules:{}});n.Z.config.productionTip=!1,new n.Z({store:B,render:e=>e(p)}).$mount("#app")},8768:function(e,t,r){var n={"./1.jpg":20,"./10.jpg":7118,"./11.jpg":6790,"./12.jpg":4796,"./2.jpg":5894,"./3.jpg":4026,"./4.jpg":2467,"./5.jpg":9953,"./6.jpg":9816,"./7.jpg":1659,"./8.jpg":3900,"./9.jpg":5664};function i(e){var t=s(e);return r(t)}function s(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id=8768},20:function(e,t,r){"use strict";e.exports=r.p+"img/1.fddf0249.jpg"},7118:function(e,t,r){"use strict";e.exports=r.p+"img/10.1a66ac49.jpg"},6790:function(e,t,r){"use strict";e.exports=r.p+"img/11.c32c536e.jpg"},4796:function(e,t,r){"use strict";e.exports=r.p+"img/12.57ae6305.jpg"},5894:function(e,t,r){"use strict";e.exports=r.p+"img/2.abdf6863.jpg"},4026:function(e,t,r){"use strict";e.exports=r.p+"img/3.cbf0d222.jpg"},2467:function(e,t,r){"use strict";e.exports=r.p+"img/4.8965760c.jpg"},9953:function(e,t,r){"use strict";e.exports=r.p+"img/5.5239eb74.jpg"},9816:function(e,t,r){"use strict";e.exports=r.p+"img/6.249c6a6a.jpg"},1659:function(e,t,r){"use strict";e.exports=r.p+"img/7.4318bec0.jpg"},3900:function(e,t,r){"use strict";e.exports=r.p+"img/8.67a83bd3.jpg"},5664:function(e,t,r){"use strict";e.exports=r.p+"img/9.5c649747.jpg"},6949:function(e,t,r){"use strict";e.exports=r.p+"img/logo.4e50e4a6.png"},258:function(e){"use strict";e.exports="data:image/png;base64,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"},7462:function(e){"use strict";e.exports="data:image/png;base64,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"}},t={};function r(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,r),s.exports}r.m=e,function(){var e=[];r.O=function(t,n,i,s){if(!n){var o=1/0;for(A=0;A<e.length;A++){n=e[A][0],i=e[A][1],s=e[A][2];for(var c=!0,a=0;a<n.length;a++)(!1&s||o>=s)&&Object.keys(r.O).every((function(e){return r.O[e](n[a])}))?n.splice(a--,1):(c=!1,s<o&&(o=s));if(c){e.splice(A--,1);var g=i();void 0!==g&&(t=g)}}return t}s=s||0;for(var A=e.length;A>0&&e[A-1][2]>s;A--)e[A]=e[A-1];e[A]=[n,i,s]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){r.p="/weborigo/"}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,s,o=n[0],c=n[1],a=n[2],g=0;if(o.some((function(t){return 0!==e[t]}))){for(i in c)r.o(c,i)&&(r.m[i]=c[i]);if(a)var A=a(r)}for(t&&t(n);g<o.length;g++)s=o[g],r.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return r.O(A)},n=self["webpackChunkweborigo"]=self["webpackChunkweborigo"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=r.O(void 0,[998],(function(){return r(7389)}));n=r.O(n)})();
//# sourceMappingURL=app.aa707ee3.js.map