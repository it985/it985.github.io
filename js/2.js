function PublicSacrificeDay(){var e=new Array("0404","0405","0414","0512","0707","0807","0814","0909","0918","0930","1025","1130","1213"),t=new Date,a="",r=t.getMonth()+1;return t.getMonth()>9?a+=r:a+="0"+r,t.getDate()>9?a+=t.getDate():a+="0"+t.getDate(),e.indexOf(a)>-1?1:0}PublicSacrificeDay()&&document.getElementsByTagName("html")[0].setAttribute("style","filter:gray !important;filter:grayscale(100%);-webkit-filter:grayscale(100%);-moz-filter:grayscale(100%);-ms-filter:grayscale(100%);-o-filter:grayscale(100%);");