(function mobileUi(){
"use strict";
const T={
he:{title:"בחרו חיפוי לקירות בית הכנסת",desc:"שלושה צעדים: תמונה, אזור ודגם Kalkir",photo:"1 · בחרו תמונה",upload:"בחירת תמונה מהטלפון",privacy:"התמונה נשארת בדפדפן. היא לא נשלחת לאתר.",view:"זווית צילום",scenario:"2 · אזור לחיפוי",upper:"החלק העליון",lower:"חיפוי תחתון",full:"כל הקיר",ark:"ארון הקודש",all:"הכול",original:"מקור",material:"3 · דגם החיפוי",top:"חיפוי עליון",bottom:"חיפוי תחתון",arkTop:"כותרת ארון הקודש",arkFace:"חזית ארון הקודש",before:"תצוגה מקדימה",empty:"יש לבחור תמונה כדי לראות את החיפוי",emptyDetail:"התמונות המקוריות אינן מפורסמות באתר. אפשר לבחור צילום מקומי ולעבוד עליו באופן פרטי.",ready:"התמונה נטענה",download:"הורדת ההדמיה",compare:"לחצו כדי לראות מקור",catalog:"קטלוג Kalkir · כל הדגמים",advanced:"כלים מתקדמים · מסכות, תאורה ושמירת JSON",note:"הדמיה רעיונית: המסכות מקורבות והתמונות מהקטלוג אינן תמיד טקסטורות של לוחות. לפני הזמנה יש לאמת מידות ודוגמאות.",product:"דגם",coverage:"שטח כיסוי",spec:"לפרטי המוצר ↗",sku:"מק״ט לא פורסם",mismatch:"התאמת המסכות לתמונות אחרות דורשת כיול נוסף.",loaded:"נבחרה תמונה"},
en:{title:"Preview synagogue wall coverings",desc:"Three steps: choose a photo, an area and a Kalkir model",photo:"1 · Choose a photograph",upload:"Choose photo from your device",privacy:"Photo stays in your browser. It is never uploaded to this site.",view:"Camera view",scenario:"2 · Choose a surface",upper:"Upper wall",lower:"Lower cladding",full:"Entire wall",ark:"Aron Kodesh",all:"All surfaces",original:"Original",material:"3 · Choose a Kalkir model",top:"Upper cladding",bottom:"Lower cladding",arkTop:"Ark inscription band",arkFace:"Ark facing",before:"Preview",empty:"Select a photo to preview the new cladding",emptyDetail:"Private interior photos are not published on this site. Choose one from your device to work with it locally.",ready:"Photo loaded",download:"Download preview",compare:"Hold to see original",catalog:"Kalkir catalog · all models",advanced:"Advanced tools · masks, lighting, JSON",note:"Concept only: masks are approximate and catalog photographs are not necessarily panel textures. Confirm measurements and samples before ordering.",product:"Model",coverage:"Coverage",spec:"Product details ↗",sku:"SKU not published",mismatch:"A different camera angle requires mask adjustment.",loaded:"Selected photo"},
ru:{title:"Выбор облицовки для стен синагоги",desc:"Три шага: фото, участок стены, модель Kalkir",photo:"1 · Фотография",upload:"Выбрать фото на устройстве",privacy:"Фото остаётся в вашем браузере. На сайт оно не отправляется.",view:"Ракурс",scenario:"2 · Участок стены",upper:"Белый верх",lower:"Нижний фартук",full:"Вся стена",ark:"Арон-кодеш",all:"Все поверхности",original:"Исходник",material:"3 · Модель Kalkir",top:"Верх стены",bottom:"Нижняя облицовка",arkTop:"Верхний фриз",arkFace:"Фасад арон-кодеша",before:"Предпросмотр",empty:"Выберите фото, чтобы увидеть облицовку",emptyDetail:"Исходные фото интерьера не опубликованы. Выберите фото на устройстве для локальной обработки.",ready:"Фото загружено",download:"Скачать результат",compare:"Удерживать: исходник",catalog:"Каталог Kalkir · все модели",advanced:"Дополнительные инструменты · маски, свет, JSON",note:"Это примерка: маски приблизительны, каталожные фото не являются точными текстурами панелей. Перед покупкой нужны замеры и образцы.",product:"Модель",coverage:"Площадь",spec:"Карточка товара ↗",sku:"Артикул не опубликован",mismatch:"Для другого ракурса потребуется поправить маски.",loaded:"Выбрано фото"}
};
const $=id=>document.getElementById(id);
const l=()=>T[document.documentElement.lang]||T.he;
const mk=(tag,cls,parent,text)=>{let e=document.createElement(tag);if(cls)e.className=cls;if(text!==undefined)e.textContent=text;if(parent)parent.append(e);return e};
const style=mk("style",null,document.head);
style.textContent=`
body{background:#111a24;overflow-x:hidden}
body>header{flex-wrap:wrap;gap:10px}
body>header p{display:none}
body>header .v{opacity:.6}
.app{display:block;min-height:0}
.app>main{max-width:1100px;margin:0 auto;padding:4px 16px 36px;min-width:0}
.app>main>.canvasbar,.app>main>.buttons,.app>main>.notice,.app>main>.footer{display:none}
.app>main>.canvaswrap{border-radius:16px;box-shadow:none;position:relative;border:1px solid #4c6879}
.app>main>.canvaswrap:not(.sms-ready) canvas{display:none}
#smsQuick{max-width:1068px;margin:auto;padding:24px 16px 10px}
#smsQuick h1{font-size:clamp(24px,4vw,34px);line-height:1.2;letter-spacing:-.6px;margin:0 0 8px}
#smsQuick .sms-desc{color:#b5c4ce;font-size:14px;margin:0 0 20px}
.sms-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.sms-panel{background:#1b2a36;border:1px solid #374f61;border-radius:16px;padding:17px;min-width:0}
.sms-panel h2{font-size:16px;margin:0 0 12px;color:#f5dfb4}
.sms-panel p{font-size:12px;color:#b1c1cb;margin:10px 0 0}
.sms-pick{width:100%;min-height:49px;background:#f0ce8f!important;border-color:#f0ce8f!important;color:#1b2833!important;font-weight:750;font-size:15px}
.sms-status{margin-top:10px;font-size:12px;color:#b0decd;overflow-wrap:anywhere;min-height:18px}
.sms-label{display:block;font-size:12px;color:#b1c1cb;margin:11px 0 6px}
#smsView{width:100%;font-size:13px}
.sms-choices{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:8px}
.sms-choice{font-size:13px;font-weight:650;min-height:48px;padding:9px 4px}
.sms-choice.is-active{background:#40596b;border-color:#e5c78b;color:#ffeac1}
.sms-mat-header{margin:20px 0 10px;font-size:16px;color:#f5dfb4}
.sms-mats{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}
.sms-mat-row label{display:block;font-size:12px;color:#b3c4ce;margin-bottom:6px}
.sms-mat-row select{width:100%;font-size:13px}
.sms-product{display:flex;gap:13px;align-items:center;background:#1b2a36;border:1px solid #34495a;border-radius:14px;margin:13px 0 0;padding:12px;font-size:12px;color:#c1ced4;line-height:1.55}
.sms-product img{width:116px;height:83px;object-fit:cover;border-radius:9px;flex-shrink:0}
.sms-product strong{display:block;color:#f2dfbb;font-size:16px}
.sms-product a{color:#f2d69b}
.sms-viewtitle{font-size:16px;font-weight:700;margin:10px 0}
.sms-empty{min-height:280px;padding:28px;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;gap:10px;background:radial-gradient(circle at 50% 10%,#325368,#172632 75%)}
.sms-empty .sms-camera{font-size:38px;background:#345469;border:1px solid #557a90;border-radius:18px;width:76px;height:72px;display:grid;place-items:center}
.sms-empty strong{font-size:19px}
.sms-empty span{color:#bdd0db;font-size:13px;max-width:490px}
.sms-empty button{min-height:45px;min-width:200px}
.canvaswrap.sms-ready .sms-empty{display:none}
.sms-actions{display:flex;gap:8px;margin:13px 0}
.sms-actions button{flex:1;min-height:46px;padding:10px 8px;font-weight:700}
.sms-actions .sms-primary{background:#efce90;color:#1b2b32;border-color:#efce90}
.sms-actions button:disabled{opacity:.4;cursor:not-allowed}
.sms-note{color:#aebdc9;font-size:12px;line-height:1.55;margin:6px 0 17px}
#smsAdvanced,#smsCatalog{border:1px solid #395061;border-radius:12px;background:#192732;margin:14px 0;overflow:hidden}
#smsAdvanced>summary,#smsCatalog>summary{padding:16px;cursor:pointer;font-weight:650;font-size:14px}
#smsAdvanced>aside{display:block;max-height:none;border:0;overflow:visible;padding:12px}
#smsAdvanced>.editor{margin:12px;padding:12px}
#smsAdvanced>.buttons,#smsAdvanced>.notice,#smsAdvanced>.footer{margin:12px}
#smsCatalog .catalog{margin:10px 12px}
#smsCatalog>p,#smsCatalog>h3{margin:10px 12px;font-size:12px}
@media(max-width:760px){
#smsQuick{padding:18px 14px 8px}
.sms-grid,.sms-mats{grid-template-columns:1fr}
.sms-panel{padding:15px}
.sms-product img{width:92px;height:79px}
.sms-empty{min-height:270px;padding:18px}
.app>main{padding:4px 14px 30px}
body>header .v{display:none}
body>header h1{font-size:17px}
#languageSwitch{width:100%}
}`;
function boot(){
 if(!$("material_top")){requestAnimationFrame(boot);return}
 s.showMasks=false; $("masks").checked=false; $("drawMode").value="off";s.scenario="upper";syncUI();
 let loaded=false,name="",mismatch=false;
 const q=mk("section",null,null);q.id="smsQuick";document.querySelector(".app").before(q);
 mk("h1",null,q).id="smsHeading";mk("p","sms-desc",q).id="smsDescription";
 const grid=mk("div","sms-grid",q);
 const p1=mk("section","sms-panel",grid);mk("h2",null,p1).id="smsPhotoTitle";
 const upload=mk("button","sms-pick",p1);upload.id="smsUpload";upload.type="button";upload.onclick=()=> $("uploadScene").click();
 mk("div","sms-status",p1).id="smsStatus";mk("p",null,p1).id="smsPrivacy";
 mk("label","sms-label",p1).id="smsViewLabel";const view=mk("select",null,p1);view.id="smsView";
 for(const k of p.scenes){const option=mk("option",null,view,k==="113730"?"113730 · Front view":k);option.value=k}
 view.value=s.scene;
 view.onchange=()=>{ $("scene").value=view.value;$("scene").dispatchEvent(new Event("change",{bubbles:true}));loaded=false;update()};
 const p2=mk("section","sms-panel",grid);mk("h2",null,p2).id="smsScenarioTitle";
 const choices=mk("div","sms-choices",p2);
 const options=[["upper","upper"],["lower","lower"],["full","full"],["ark","ark"],["everything","all"],["original","original"]];
 for(const [v,key] of options){const b=mk("button","sms-choice",choices);b.type="button";b.dataset.scenario=v;b.dataset.term=key;b.onclick=()=>{s.scenario=v;syncUI();update()}}
 mk("h2","sms-mat-header",q).id="smsMaterialTitle";
 const mats=mk("div","sms-mats",q);
 const material={};
 for(const [zone,term] of [["top","top"],["bottom","bottom"],["arkTop","arkTop"],["arkFace","arkFace"]]){
  const row=mk("div","sms-mat-row",mats);row.dataset.zone=zone;
  const lab=mk("label",null,row);lab.dataset.term=term;
  const select=mk("select",null,row);material[zone]=select;
  for(const m of p.catalog){const opt=mk("option",null,select,m.he);opt.value=m.id}
  select.onchange=()=>{const native=$("material_"+zone);native.value=select.value;native.dispatchEvent(new Event("change",{bubbles:true}));update()};
 }
 const product=mk("div","sms-product",q);const img=mk("img",null,product);img.loading="lazy";img.referrerPolicy="no-referrer";
 const specs=mk("div",null,product);
 const main=document.querySelector(".app>main");const first=main.firstElementChild;
 const viewTitle=mk("div","sms-viewtitle",null);viewTitle.id="smsViewTitle";main.insertBefore(viewTitle,first);
 const canvas=main.querySelector(".canvaswrap");
 const empty=mk("div","sms-empty",canvas);mk("div","sms-camera",empty,"▣");
 mk("strong",null,empty).id="smsEmptyTitle";mk("span",null,empty).id="smsEmptyDesc";
 const again=mk("button","primary",empty);again.id="smsAgain";again.type="button";again.onclick=()=> $("uploadScene").click();
 const actions=mk("div","sms-actions",null);canvas.after(actions);
 const save=mk("button","sms-primary",actions);save.id="smsSave";save.type="button";save.onclick=()=>{if(loaded)$("exportPNG").click()};
 const compareBtn=mk("button",null,actions);compareBtn.id="smsCompare";compareBtn.type="button";
 compareBtn.onpointerdown=()=>{if(loaded){compare=true;schedule()}};
 for(const ev of ["pointerup","pointerleave","pointercancel"])compareBtn.addEventListener(ev,()=>{compare=false;schedule()});
 const note=mk("p","sms-note",null);note.id="smsNote";actions.after(note);
 const advanced=mk("details",null,null);advanced.id="smsAdvanced";
 mk("summary",null,advanced).id="smsAdvancedTitle";main.append(advanced);
 const oldAside=document.querySelector(".app>aside");advanced.append(oldAside);
 for(const selector of [".editor",".buttons",".notice",".footer"]){const elem=main.querySelector(":scope > "+selector);if(elem)advanced.append(elem)}
 const catalog=mk("details",null,null);catalog.id="smsCatalog";mk("summary",null,catalog).id="smsCatalogTitle";
 let target=main.querySelector(".catalog");if(target){
  const h=Array.from(main.children).find(n=>n.tagName==="H3");
  if(h){let n=h;while(n&&n!==target){const next=n.nextElementSibling;catalog.append(n);n=next}}
  catalog.append(target)
 }
 main.append(catalog);
 $("uploadScene").addEventListener("change",e=>{const f=e.target.files?.[0];if(!f)return;const match=f.name.match(/IMG_20261015_(\d{6})/);mismatch=!match;if(match&&p.scenes.includes(match[1])){s.scene=match[1];$("scene").value=match[1];view.value=match[1]}},true);
 document.addEventListener("sms:photo-loaded",e=>{loaded=true;name=e.detail?.name||"";s.showMasks=false;$("masks").checked=false;schedule();update()});
 new MutationObserver(ms=>{if(ms.some(m=>m.attributeName==="lang"))update()}).observe(document.documentElement,{attributes:true,attributeFilter:["lang"]});
 function update(){
  const t=l();
  const ids={smsHeading:"title",smsDescription:"desc",smsPhotoTitle:"photo",smsUpload:"upload",smsPrivacy:"privacy",smsViewLabel:"view",smsScenarioTitle:"scenario",smsMaterialTitle:"material",smsViewTitle:"before",smsEmptyTitle:"empty",smsEmptyDesc:"emptyDetail",smsAgain:"upload",smsSave:"download",smsCompare:"compare",smsNote:"note",smsAdvancedTitle:"advanced",smsCatalogTitle:"catalog"};
  for(const [id,key] of Object.entries(ids))$(id).textContent=t[key];
  $("smsStatus").textContent=loaded?t.loaded+": "+name:t.emptyDetail;
  for(const e of q.querySelectorAll("[data-term]"))e.textContent=t[e.dataset.term];
  for(const b of q.querySelectorAll("[data-scenario]"))b.classList.toggle("is-active",b.dataset.scenario===s.scenario);
  for(const [z,sel] of Object.entries(material)){
   sel.value=s.assigned[z]||"yerushalmi";
   sel.parentElement.hidden=((z==="top"||z==="bottom")&&s.scenario==="ark")||((z==="arkTop"||z==="arkFace")&&!["ark","everything"].includes(s.scenario))
  }
  let selected=s.scenario==="lower"?"bottom":s.scenario==="ark"?"arkFace":"top";
  let m=p.catalog.find(x=>x.id===material[selected].value)||p.catalog[0];
  img.style.display="block";img.onerror=()=>{img.style.display="none"};img.src=m.photo;
  specs.replaceChildren();mk("strong",null,specs,m.he);
  mk("div",null,specs,(t.coverage+": "+m.coverage_m2+" m² · "+m.dimensions+" · "+m.weight_kg+" kg"));
  const a=mk("a",null,specs,t.spec);a.href=m.url;a.target="_blank";a.rel="noopener noreferrer";
  mk("div",null,specs,t.sku);
  canvas.classList.toggle("sms-ready",loaded);
  save.disabled=!loaded;compareBtn.disabled=!loaded;
 }
 update();
}
boot();
})();