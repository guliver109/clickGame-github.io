(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"acespades",image:"https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Spongebob-squarepants.svg/666px-Spongebob-squarepants.svg.png",count:0},{id:2,name:"aceclub",image:"https://vignette3.wikia.nocookie.net/vsbattles/images/8/80/Mr._Krabs.png/revision/latest?cb=20150919162131",count:0},{id:3,name:"acediamond",image:"https://vignette2.wikia.nocookie.net/fictionalcharacters/images/a/ac/Squidward.png/revision/latest?cb=20131121012626",count:0},{id:4,name:"acesheart",image:"https://s-media-cache-ak0.pinimg.com/originals/fe/32/49/fe32495d45283cd6860ae122f0aeaad9.png",count:0},{id:5,name:"kingspades",image:"https://vignette4.wikia.nocookie.net/vsbattles/images/3/39/Courage-0.png/revision/latest?cb=20160719055423",count:0},{id:6,name:"kingclub",image:"https://vignette1.wikia.nocookie.net/doug/images/3/3b/Doug001.gif/revision/latest?cb=20110807170511",count:0},{id:7,name:"kingdiamond",image:"https://vignette2.wikia.nocookie.net/deathbattlefanon/images/2/2b/Bugs_Bunny.png/revision/latest?cb=20151206010607",count:0},{id:8,name:"kingheart",image:"http://vignette3.wikia.nocookie.net/p__/images/9/9a/Johnny_Bravo.png/revision/latest?cb=20131031233339&path-prefix=protagonist",count:0},{id:9,name:"queenspades",image:"https://vignette4.wikia.nocookie.net/uncyclopedia/images/e/e4/Tommy_Pickles.png/revision/latest?cb=20110530102641",count:0},{id:10,name:"queenclub",image:"http://vignette3.wikia.nocookie.net/rockosmodernlife/images/9/9e/Rockos-modern-life-4e582a8f06a41.png/revision/latest?cb=20130522173416",count:0},{id:11,name:"queendiamond",image:"http://vignette2.wikia.nocookie.net/dragon-rap-battles/images/b/b6/Captain_Planet.png/revision/latest?cb=20160911200836",count:0},{id:12,name:"queenheart",image:"http://static.tvtropes.org/pmwiki/pub/images/ickis.png",count:0}]},,,,,,,,function(e,t,n){e.exports=n(24)},,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),c=n.n(o),s=n(4),r=n(5),m=n(7),g=n(6),u=n(8),d=(n(14),function(e){return i.a.createElement("div",{className:"card",onClick:function(){return e.handleIncrement(e.id)}},i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{all:e.name,src:e.image})))}),l=(n(16),function(e){return i.a.createElement("div",{className:"wrapper"},e.children)}),p=(n(18),function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"title"},e.children),i.a.createElement("div",{className:"scores"},"Score: ",e.score," Highscore ",e.highscore))}),h=n(1),f=(n(20),function(e){function t(){var e,n;Object(s.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(i)))).state={cards:h,score:0,highscore:0},n.gameOver=function(){return n.state.score>n.state.highscore&&n.setState({highscore:n.state.score},function(){console.log(this.state.highscore)}),n.state.cards.forEach(function(e){e.count=0}),alert("Game Over! Your new score is:  ".concat(n.state.score)),n.setState({score:0}),!0},n.handleIncrement=function(e){n.state.cards.find(function(t,a){if(t.id===e){if(0===h[a].count)return h[a].count=h[a].count+1,n.setState({score:n.state.score+1},function(){console.log(this.state.score)}),n.state.cards.sort(function(){return Math.random()-.5}),!0;n.gameOver()}})},n}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(l,null,i.a.createElement(p,{score:this.state.score,highscore:this.state.highscore},"Click Game:"),this.state.cards.map(function(t){return i.a.createElement(d,{handleIncrement:e.handleIncrement,id:t.id,key:t.id,image:t.image})}))}}]),t}(a.Component));n(22);c.a.render(i.a.createElement(f,null),document.getElementById("root"))}],[[9,2,1]]]);
//# sourceMappingURL=main.8c5ed9f9.chunk.js.map