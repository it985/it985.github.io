window.addEventListener("load",(()=>{const e=()=>{const e=document.body.style;e.width="100%",e.overflow="hidden",anzhiyu.animateIn(document.getElementById("search-mask"),"to_show 0.5s"),anzhiyu.animateIn(document.querySelector("#algolia-search .search-dialog"),"titleScale 0.5s"),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100),document.addEventListener("keydown",(function e(n){"Escape"===n.code&&(t(),document.removeEventListener("keydown",e))}))};anzhiyu_keyboard&&window.addEventListener("keydown",(function(t){if(83==t.keyCode&&t.shiftKey){if(console.info(selectTextNow),selectTextNow){e();const t=document.querySelector("#algolia-search-input > div > form > input");t.value=selectTextNow,t.dispatchEvent(new Event("input")),setTimeout((()=>{document.querySelector("#algolia-search-input > div > form > button.ais-SearchBox-submit").click()}),64)}else e();return!1}}));const t=()=>{const e=document.body.style;e.width="",e.overflow="",anzhiyu.animateOut(document.querySelector("#algolia-search .search-dialog"),"search_close .5s"),anzhiyu.animateOut(document.getElementById("search-mask"),"to_hide 0.5s")},n=()=>{document.querySelector("#search-button > .search").addEventListener("click",e),document.getElementById("search-mask").addEventListener("click",t),document.querySelector("#algolia-search .search-close-button").addEventListener("click",t)},a=e=>{if(""===e)return"";const t=e.indexOf("<mark>");let n=t-30,a=t+120,i="",o="";return n<=0?(n=0,a=140):i="...",a>e.length?a=e.length:o="...",i+e.substring(n,a)+o},i=GLOBAL_CONFIG.algolia;if(!(i.appId&&i.apiKey&&i.indexName))return console.error("Algolia setting is invalid!");const o=instantsearch({indexName:i.indexName,searchClient:algoliasearch(i.appId,i.apiKey),searchFunction(e){if(e.state.query){let t='<div class="anzhiyufont anzhiyu-icon-spinner anzhiyu-spin"></div>';document.getElementById("algolia-hits").innerHTML=t,e.search()}}}),s=instantsearch.widgets.configure({hitsPerPage:i.hits.per_page||5}),l=instantsearch.widgets.searchBox({container:"#algolia-search-input",showReset:!1,showSubmit:!1,placeholder:GLOBAL_CONFIG.algolia.languages.input_placeholder,showLoadingIndicator:!0,searchOnEnterKeyPressOnly:!0,searchAsYouType:!1}),c=instantsearch.widgets.hits({container:"#algolia-hits",templates:{item(e){const t=e.permalink?e.permalink:GLOBAL_CONFIG.root+e.path,n=e._highlightResult,i=n.contentStripTruncate?a(n.contentStripTruncate.value):n.contentStrip?a(n.contentStrip.value):n.content?a(n.content.value):"",o=e.tags;let s=`\n          <div class="search-result">\n            <a href="${t}" class="algolia-hit-item-link">\n            ${n.title.value||"no-title"}\n            </a>\n            <p class="algolia-hit-item-content">${i}</p>\n            <div class="search-result-tags">\n        `;for(let e=0;e<o.length;e++)s+=`<a class="tag-list" href="/tags/${o[e]}/">#${o[e]}</a>`;s+="\n          </div>\n        </div>";const l=document.querySelector("#algolia-hits .anzhiyu-spin");return l&&(l.style.display="none"),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100),s},empty:function(e){const t=document.querySelector("#algolia-hits .anzhiyu-spin");return console.info(t),t&&(t.style.display="none"),setTimeout((()=>{document.querySelector("#algolia-search .ais-SearchBox-input").focus()}),100),'<div id="algolia-hits-empty">'+GLOBAL_CONFIG.algolia.languages.hits_empty.replace(/\$\{query}/,e.query)+"</div>"}}}),r=instantsearch.widgets.stats({container:"#algolia-info > .algolia-stats",templates:{text:function(e){return`${GLOBAL_CONFIG.algolia.languages.hits_stats.replace(/\$\{hits}/,e.nbHits).replace(/\$\{time}/,e.processingTimeMS)}`}}}),u=instantsearch.widgets.poweredBy({container:"#algolia-info > .algolia-poweredBy"}),d=instantsearch.widgets.pagination({container:"#algolia-pagination",totalPages:5,templates:{first:'<i class="anzhiyufont anzhiyu-icon-angle-double-left"></i>',last:'<i class="anzhiyufont anzhiyu-icon-angle-double-right"></i>',previous:'<i class="anzhiyufont anzhiyu-icon-angle-left"></i>',next:'<i class="anzhiyufont anzhiyu-icon-angle-right"></i>'}});o.addWidgets([s,l,c,r,u,d]),o.start(),n(),(()=>{document.getElementById("search-mask").addEventListener("click",t),document.querySelector("#algolia-search .search-close-button").addEventListener("click",t);document.querySelector("#menu-search").addEventListener("click",(function(){rm.hideRightMenu(),e();const t=document.querySelector("#algolia-search-input > div > form > input");t.value=selectTextNow,t.dispatchEvent(new Event("input")),setTimeout((()=>{document.querySelector("#algolia-search-input > div > form > button.ais-SearchBox-submit").click()}),64)}))})(),window.addEventListener("pjax:complete",(()=>{"block"===getComputedStyle(document.querySelector("#algolia-search .search-dialog")).display&&t(),n()})),window.pjax&&o.on("render",(()=>{window.pjax.refresh(document.getElementById("algolia-hits"))}))}));