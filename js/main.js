(()=>{const D=window.PORTFOLIO,$=s=>document.querySelector(s),pad=n=>String(n).padStart(2,"0");
const secs=[["home","HOME"],["about","ABOUT"],["projects","PROJECTS"],["process","PROCESS"],["contact","CONTACT"]];
$("#menu").innerHTML=secs.map(([i,l])=>`<a href="#${i}">${l}</a>`).join("");
const burger=$("#burger"),menu=$("#menu");
burger.onclick=()=>{const o=menu.classList.toggle("show");burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"메뉴 닫기":"메뉴 열기")};
menu.onclick=e=>{if(e.target.tagName==="A"){menu.classList.remove("show");burger.setAttribute("aria-expanded",false)}};
const P=D.projects;
$("#heroCards").innerHTML=[["TOP 3","조례에서 읽은 매장 판매 흐름","KIDDY LAND",1],["11종","직접 기획한 특전 굿즈","생일카페",2],["약 5곳","제작처 단가·MOQ·기간 비교","북극여우 ESG형",3],["225명","팬 대상 소비자 설문","콜라보 카페 기획",4]].map(([b,s,e,n])=>`<a class="card" href="#proj${n}" data-open="${n}"><b>${b}</b><small>${s}</small><em>PROJECT 0${n} · ${e}</em></a>`).join("");
const p=D.profile,[y,m,d]=p.birth.split("-").map(Number),t=new Date();let age=t.getFullYear()-y;if(t.getMonth()+1<m||(t.getMonth()+1===m&&t.getDate()<d))age--;
const slot=im=>`<figure class="fig"><button type="button" class="imgb" data-src="${im.src}" data-alt="${im.alt}"><img src="${im.src}" alt="${im.alt}"><span class="ph" hidden>사진 등록 전<br>${im.cap||""}<br><small>${im.src}</small></span></button><figcaption><b>${im.cap||""}</b>${im.note||""}</figcaption></figure>`;
const chips=a=>a.map(n=>`<a href="#proj${n}" data-open="${n}">PROJECT 0${n}</a>`).join("");
const tbl=x=>`<div class="tb"><h3>${x.t}</h3><table><thead><tr>${x.h.map(h=>`<th>${h}</th>`).join("")}</tr></thead><tbody>${x.r.map(r=>`<tr>${r.map(c=>`<td>${c}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
$("#aboutRoot").innerHTML=`<div class="about"><div class="photo"><img src="${p.photo}" alt="${p.photoAlt}" id="pf"><span class="ph" hidden>프로필 사진<br><small>${p.photo}</small></span></div><div><div class="name">${p.name}<small>${p.en}</small></div><dl class="basic"><dt>생년월일</dt><dd>${p.birth.replace(/-/g,".")} (만 ${age}세)</dd><dt>이메일</dt><dd>${D.config.email}</dd></dl><div class="intro">${D.intro.map(x=>`<p>${x}</p>`).join("")}</div></div></div>
<div class="skills">${D.skills.map(s=>`<div class="skill"><h3>${s.n}</h3><p>${s.d}</p></div>`).join("")}</div><div class="tabs">${D.tables.map(tbl).join("")}</div>`;
$("#projRoot").innerHTML=P.map(j=>`<article class="proj p${j.no}" id="proj${j.no}"><button class="phead" aria-expanded="false" aria-controls="pb${j.no}"><span class="no">0${j.no}</span><span><span class="tg">${j.tag}${j.period?" · "+j.period:""}</span><h3>${j.title}</h3><span class="hd">${j.head}</span><span style="display:block;margin-top:6px;font-size:.95rem">${j.intro}</span><span class="chips">${j.skills.map(s=>`<span>${s}</span>`).join("")}</span></span><span class="plus" aria-hidden="true">+</span></button><div class="panel" id="pb${j.no}"><div><div class="pbody"><div>
<div class="blk"><h4>OVERVIEW</h4><p>${j.overview}</p></div><div class="blk"><h4>BACKGROUND</h4><p>${j.background}</p></div><div class="blk"><h4>STRATEGY</h4><p>${j.strategy}</p></div>
<div class="blk"><h4>EXECUTION</h4>${j.execution.map((x,i)=>(x.h?`<h5>${pad(i+1)}. ${x.h}</h5>`:"")+`<p>${x.p}</p>`).join("")}</div></div>
<div class="imgs">${j.images.map(slot).join("")}</div>
<div><div class="blk"><h4>RESULT</h4>${j.bars?`<div role="group" aria-label="설문 응답 결과(각각 별도 문항의 응답 비율)">${j.bars.map(b=>`<div class="bar"><div>${b.l}</div><span style="width:${b.v*2}%">${b.v}%</span></div>`).join("")}</div>`:""}<ul class="res">${j.result.map(r=>`<li>${r}</li>`).join("")}</ul></div></div>
<div><div class="blk"><h4>INSIGHT</h4><p class="quote">“${j.insight}”</p></div><div class="blk"><h4>직무 연결</h4><p class="jl">${j.link}</p></div></div></div></div></div></article>`).join("");
$("#procRoot").innerHTML=D.process.map((s,i)=>`<li><span>${pad(i+1)}</span><b>${s.s}</b><p>${s.d}</p><div class="chips">${chips(s.p)}</div></li>`).join("");
const c=D.config;
$("#contactRoot").innerHTML=`<div class="cl"><strong>${p.name} / ${p.en}</strong><span>이메일: <a href="mailto:${c.email}">${c.email}</a></span></div><div class="btns"><button class="btn" id="copy">이메일 복사</button><a class="btn" href="#home">맨 위로</a></div>`;
const toast=m=>{const e=$("#toast");e.textContent=m;e.classList.add("show");setTimeout(()=>e.classList.remove("show"),2200)};
$("#copy").onclick=async()=>{try{await navigator.clipboard.writeText(c.email);toast("이메일 주소를 복사했습니다")}catch{const r=document.createRange();r.selectNodeContents(document.querySelector(".cl a"));getSelection().removeAllRanges();getSelection().addRange(r);toast("주소를 선택했습니다. Ctrl+C로 복사하세요")}};
const fall=img=>{img.hidden=true;img.nextElementSibling.hidden=false;img.parentElement.classList.add("none")};
document.querySelectorAll(".imgb img,#pf").forEach(i=>{i.addEventListener("error",()=>fall(i));if(i.complete&&!i.naturalWidth)fall(i)});
const toggle=(b,force)=>{const li=b.closest("li,article"),o=force??b.getAttribute("aria-expanded")!=="true";b.setAttribute("aria-expanded",o);li.classList.toggle("open",o);li.querySelector(".panel").inert=!o};
document.querySelectorAll(".row,.phead").forEach(b=>{b.closest("li,article").querySelector(".panel").inert=true;b.onclick=()=>toggle(b)});
document.addEventListener("click",e=>{const a=e.target.closest("[data-open]");if(a)toggle($("#proj"+a.dataset.open+" .phead"),true)});
const lb=$("#lb");document.addEventListener("click",e=>{const b=e.target.closest(".imgb");if(!b||b.classList.contains("none"))return;$("#lbImg").src=b.dataset.src;$("#lbImg").alt=b.dataset.alt;$("#lbCap").textContent=b.dataset.alt;lb.showModal()});
$("#lbClose").onclick=()=>lb.close();lb.onclick=e=>{if(e.target===lb)lb.close()};
const links=[...menu.querySelectorAll("a")],io=new IntersectionObserver(es=>es.forEach(en=>{if(en.isIntersecting)links.forEach(a=>{const on=a.hash==="#"+en.target.id;a.classList.toggle("on",on);on?a.setAttribute("aria-current","true"):a.removeAttribute("aria-current")})}),{rootMargin:"-45% 0px -50% 0px"});
secs.forEach(([i])=>io.observe($("#"+i)));
const tt=$("#totop");tt.onclick=()=>scrollTo({top:0});addEventListener("scroll",()=>tt.hidden=scrollY<500,{passive:true});
// 스크롤 등장 효과
const rv=(sel,step=.08)=>document.querySelectorAll(sel).forEach((e,i)=>{e.classList.add("rv");e.style.setProperty("--d",(i%4)*step+"s")});
rv(".st");rv(".about>*");rv(".skill");rv(".tb");rv(".proj",0);rv(".proc li");rv(".big");rv(".cl");rv("#contactRoot .btns");
const rio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");rio.unobserve(e.target)}}),{threshold:.12,rootMargin:"0px 0px -6% 0px"});
document.querySelectorAll(".rv").forEach(e=>rio.observe(e));
// 스크롤 시 첫 화면이 사라지듯 옅어짐
const hg=document.querySelector(".hero-grid"),cue=document.querySelector(".scrollcue");
if(!matchMedia("(prefers-reduced-motion:reduce)").matches){let tk=false;const f=()=>{const p=Math.min(1,scrollY/(innerHeight*.75));hg.style.opacity=1-p;hg.style.transform=`translateY(${-p*48}px)`;cue.style.opacity=1-p*2;tk=false};addEventListener("scroll",()=>{if(!tk){tk=true;requestAnimationFrame(f)}},{passive:true})}
})();
