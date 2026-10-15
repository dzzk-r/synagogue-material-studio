/* Synagogue Material Studio localization v0.4: Hebrew primary, English secondary, Russian tertiary.
   Public-facing interface only. Product identifiers and source photos are not modified. */
(() => {
  "use strict";
  const pairs = [
    ["Редактируемая визуализация стен · חיפוי קירות · Wall covering concepts","הדמיה אינטראקטיבית לחיפוי קירות · Wall covering studio","Interactive wall covering visualization · סטודיו לחיפוי קירות"],
    ["01 / Ракурс","01 / זווית צילום","01 / Camera view"],
    ["Загрузить/заменить фотографию на этом устройстве","טעינה או החלפה של תמונה מהמכשיר","Upload or replace a photo from this device"],
    ["Фотография читается непосредственно браузером, без отправки на сервер.","התמונה נטענת ישירות בדפדפן ואינה נשלחת לשרת.","Your photo is processed locally in the browser and is not uploaded to a server."],
    ["В приватном комплекте включены шесть оригинальных кадров. Публичная версия не содержит фотографии — выберите её на своём устройстве. Маски лучше всего подготовлены для фронтального вида.","הגרסה הפרטית כוללת שש תמונות מקור. בגרסה הציבורית אין תמונות של בית הכנסת: יש לבחור תמונה מהמכשיר. המסכות מדויקות יותר בזווית החזיתית.","The private edition includes six original photos. The public edition contains no interior photographs: choose one from your device. The front view has the best-prepared masks."],
    ["02 / Сценарий замены","02 / אפשרות חיפוי","02 / Renovation scenario"],
    ["Выберите вариант, затем независимо меняйте материалы в группах ниже.","בחרו תרחיש, ולאחר מכן חומר לכל אזור בנפרד.","Choose a scenario, then change materials independently in the zones below."],
    ["03 / Материалы по зонам","03 / חומרים לפי אזור","03 / Materials by zone"],
    ["Каталог производителя","קטלוג היצרן","Manufacturer catalog"],
    ["04 / Свет, масштаб, сохранность","04 / תאורה, קנה מידה ושימור","04 / Lighting, scale & preservation"],
    ["Условная калибровка, пикселей на метр","כיול משוער, פיקסלים למטר","Estimated calibration, pixels per meter"],
    ["Условная оценка для этого ракурса. Потребуется измерить хотя бы один реальный отрезок стены.","כיול ראשוני בלבד; יש למדוד לפחות מרחק אמיתי אחד על הקיר.","Preliminary estimate only; at least one actual wall measurement is needed."],
    ["Размер рисунка (визуальный, не см)","גודל הדוגמה (חזותי, לא בס״מ)","Pattern scale (visual, not cm)"],
    ["Непрозрачность материала","אטימות החומר","Material opacity"],
    ["Наследование света фотографии","שימור התאורה מהתמונה","Preserve original photo lighting"],
    ["Сохранять отмеченные предметы","לשמר פריטים שסומנו","Preserve marked objects"],
    ["Оставлять настенную атрибутику (часы, надписи, баннеры)","לשמר פריטים על הקירות (שעונים, כתובות, שלטים)","Keep wall items (clocks, inscriptions, banners)"],
    ["Источник фактуры","מקור הטקסטורה","Texture source"],
    ["Фото Kalkir, если браузер разрешает","תמונת Kalkir אם הדפדפן מאפשר","Kalkir photo if browser permits"],
    ["Только демонстрационная фактура","טקסטורה להדגמה בלבד","Illustrative texture only"],
    ["Проверяю доступность фотографий производителя…","בודק זמינות תמונות היצרן…","Checking manufacturer photos…"],
    ["Показывать границы зон","הצגת גבולות אזורים","Show zone outlines"],
    ["Перенос освещения приблизительный. Реальные размеры панелей указаны в каталоге, но геометрия помещения ещё не измерена.","הדמיית התאורה משוערת. מידות הלוחות לקוחות מהקטלוג, אך מידות החדר טרם נמדדו.","Lighting transfer is approximate. Panel dimensions come from the catalog; room geometry is not yet measured."],
    ["05 / Новая надпись на арон-кодеше","05 / כתובת חדשה על ארון הקודש","05 / New inscription on Aron Kodesh"],
    ["Показать новую надпись на верхнем фризе","להציג כתובת חדשה בחזית העליונה","Show new inscription on the upper frieze"],
    ["Напишите текст на иврите…","הקלידו כתובת בעברית…","Type inscription in Hebrew…"],
    ["Демо: надпись поверх покрытия. Точную типографику и размеры следует согласовать отдельно.","הדגמה: הכתובת מונחת על החיפוי. יש לאשר בנפרד את הגופן והמידות.","Preview: the inscription is overlaid on the cladding. Typography and dimensions need separate approval."],
    ["06 / Свой образец фактуры","06 / טקסטורה מותאמת אישית","06 / Custom texture sample"],
    ["Фото производителя загрузится автоматически при доступном CORS. Здесь можно вручную уточнить образец при необходимости.","תמונת היצרן תיטען אוטומטית אם מדיניות CORS מאפשרת זאת. אפשר להעלות דוגמה ידנית.","Manufacturer imagery loads automatically when CORS permits. You can upload a sample manually."],
    ["Фронтальный вид","מבט חזיתי","Front view"],
    ["Маски: ручная разметка","מסכות: סימון ידני","Masks: manual tracing"],
    ["Верх","חלק עליון","Upper wall"],
    ["Фартук","חיפוי תחתון","Lower cladding"],
    ["Фриз арон-кодеша","כותרת ארון הקודש","Aron Kodesh frieze"],
    ["Фасад","חזית","Facing"],
    ["Визуализация основана на исходной фотографии. Для рисунка камня используются фотографические образцы каталога, если браузер их допускает; иначе иллюстративные фактуры.","ההדמיה מבוססת על התמונה המקורית. משתמשים בתמונות מהקטלוג כשאפשר; אחרת מוצגות טקסטורות להמחשה בלבד.","Visualization is based on the original photo. Catalog imagery is used when permitted; otherwise illustrative textures are shown."],
    ["↓ Экспорт PNG","↓ ייצוא PNG","↓ Export PNG"],
    ["↓ Сохранить проект JSON","↓ שמירת פרויקט JSON","↓ Save project JSON"],
    ["↑ Загрузить JSON","↑ טעינת JSON","↑ Load JSON"],
    ["Сравнить с оригиналом","השוואה למקור","Compare with original"],
    ["Точность прототипа:","דיוק אב הטיפוס:","Prototype accuracy:"],
    ["маски примерные, товары связаны с проверенными карточками Kalkir, но показанные фактуры — созданные для демонстрации заменители, не фотографии товаров. Раскладка и точный масштаб требуют замеров и образцов.","המסכות מקורבות. הקישורים למוצרי Kalkir אומתו, אך הטקסטורות עשויות להיות להמחשה בלבד ולא לשקף את המוצר. פריסה וקנה מידה מדויקים מחייבים מדידות ודוגמאות.","Masks are approximate. Kalkir product links are sourced, but textures can be illustrative rather than product-exact. Accurate layout and scale require measurements and samples."],
    ["Режим разметки стен / Mask editor","עריכת מסכות קיר / Mask editor","Wall mask editor"],
    ["Можно добавлять области стен и «защищённые» объекты. Выберите тип, затем последовательно укажите вершины на фотографии и нажмите «Завершить полигон». Работает и касанием.","אפשר להוסיף אזורי קיר ופריטים מוגנים: בחרו סוג, סמנו נקודות בתמונה ולחצו על ״סיום מצולע״. תומך במגע.","Add wall regions and protected objects. Choose a type, mark polygon corners on the photo, then finish the polygon. Touch is supported."],
    ["Просмотр (не рисовать)","תצוגה (ללא שרטוט)","View (no drawing)"],
    ["+ Область: верхние стены","+ אזור: קירות עליונים","+ Region: upper walls"],
    ["+ Область: нижний фартук","+ אזור: חיפוי תחתון","+ Region: lower cladding"],
    ["+ Область: фриз арон-кодеша","+ אזור: כותרת ארון הקודש","+ Region: ark frieze"],
    ["+ Область: фасад арон-кодеша","+ אזור: חזית ארון הקודש","+ Region: ark facing"],
    ["+ Защитная маска: предмет","+ מסכה להגנת פריט","+ Protected object mask"],
    ["Завершить полигон","סיום מצולע","Finish polygon"],
    ["Отменить точки","ביטול נקודות","Clear pending points"],
    ["↶ Отменить последнее изменение","↶ ביטול הפעולה האחרונה","↶ Undo last edit"],
    ["Очистить маски этого ракурса","מחיקת מסכות לזווית זו","Clear masks for this view"],
    ["Отображать маски во время разметки","הצגת מסכות בזמן עריכה","Show masks while editing"],
    ["Совет: чтобы сохранить настенные картины, лампы или часы, обведите их в режиме «Защитная маска». Чтобы убрать предметы из варианта реконструкции, отключите «Сохранять отмеченные предметы». Мелкие детали и восстановление фоновой стены требуют ручной доводки.","טיפ: סמנו תמונות, גופי תאורה ושעונים באמצעות מסכת הגנה. להסרתם בהדמיה, בטלו ״לשמר פריטים שסומנו״. פרטים קטנים ושחזור הקיר מאחוריהם דורשים עריכה ידנית.","Tip: use protected masks around pictures, lamps and clocks. To remove them from the concept, disable “Preserve marked objects.” Fine details and wall reconstruction require manual retouching."],
    ["Каталог подключённых моделей","קטלוג דגמים מקושרים","Linked product catalog"],
    ["демо-образцы","דוגמאות להמחשה","Illustrative samples"],
    ["Нажатие на модель ведёт к карточке настоящего товара. Изображения ниже —","לחיצה על דגם פותחת את דף המוצר המקורי. התמונות שלהלן הן","Selecting a model opens its official product page. The images below are"],
    ["приблизительные фактуры","טקסטורות מקורבות","approximate textures"],
    ["для проверки логики интерфейса, без претензий на совпадение с каталогом.","לבדיקת הממשק בלבד ואינן בהכרח תואמות לקטלוג.","for testing the interface, not guaranteed to match the catalog."],
    ["Ниже — официальные фотографии/примеры с сайта Kalkir (внешняя загрузка). Для подстановки на стены пока используются условные процедурные образцы, поскольку рекламные фотографии не являются бесшовными развертками панелей. SKU отсутствует на публичных карточках; числовой код модели здесь внутренний и не означает артикул поставщика.","להלן תמונות והמחשות מאתר Kalkir (נטענות מהאתר החיצוני). ההדמיה עשויה להשתמש בטקסטורות להמחשה משום שתמונות שיווק אינן סריקות רציפות של לוחות. לא נמצא מק״ט פומבי; מזהי הדגמים כאן הם פנימיים.","Below are official Kalkir photos and examples (externally loaded). Visualization may use illustrative textures because marketing photos are not seamless panel scans. No public SKU was found; displayed model IDs are internal."],
    ["Проект работает в браузере, без собственного сервера и подписки. Официальные миниатюры загружаются непосредственно с сайта Kalkir, при их загрузке браузер обращается к поставщику. PNG экспортирует текущий вариант, JSON сохраняет маски и настройки. Испытательный инструмент для обсуждения дизайна, не исполнительная строительная документация.","המערכת פועלת בדפדפן ללא שרת ייעודי או מנוי. תמונות קטנות נטענות ישירות מאתר Kalkir. ייצוא PNG שומר את ההדמיה; JSON שומר מסכות והגדרות. זהו כלי לבדיקת עיצוב, לא תוכנית ביצוע מאושרת.","Runs in the browser, without a dedicated server or subscription. Catalog previews load directly from Kalkir. PNG exports the current image; JSON saves masks and settings. Design-review prototype, not construction documentation."],
    ["W01 · Верхние стены / קיר עליון","W01 · קירות עליונים","W01 · Upper walls"],
    ["W02 · Нижний фартук / חיפוי תחתון","W02 · חיפוי תחתון","W02 · Lower cladding"],
    ["A01 · Надпись / כיתוב עליון","A01 · כתובת עליונה","A01 · Upper inscription"],
    ["A02 · Лицевые части / חזית ארון","A02 · חזית ארון הקודש","A02 · Ark facing"],
    ["P01 · Защищённые предметы","P01 · פריטים מוגנים","P01 · Protected elements"],
    ["Исходник","מקור","Original"],
    ["Только верх","עליון בלבד","Upper only"],
    ["Только низ","תחתון בלבד","Lower only"],
    ["Вся стена","קיר מלא","Full wall"],
    ["Арон-кодеш","ארון הקודש","Aron Kodesh"],
    ["Всё вместе","הכול יחד","All zones"],
    ["Свои зоны","בחירה אישית","Custom zones"],
    ["Фронтальная общая сцена","מבט חזיתי רחב","Full front view"],
    ["Крупный арон-кодеш","תקריב ארון הקודש","Aron Kodesh close-up"],
    ["Фронтальный ракурс / главный шаблон","מבט חזיתי / תבנית ראשית","Front view / master template"],
    ["Нет масок для этого ракурса. Можно нарисовать свои.","אין מסכות בזווית זו. אפשר לצייר מסכות חדשות.","No masks for this view. You can draw new ones."],
    ["Модель:","דגם:","Model:"],
    ["Каталожный SKU:","מק״ט ספק:","Supplier SKU:"],
    ["не опубликован","לא פורסם","not published"],
    ["Габариты:","מידות:","Dimensions:"],
    ["Полезная площадь:","שטח כיסוי:","Coverage:"],
    ["Вес:","משקל:","Weight:"],
    ["Материал:","חומר:","Material:"],
    ["ПУ высокой плотности, акриловое покрытие","פוליאוריתן בצפיפות גבוהה, ציפוי אקרילי","High-density polyurethane, acrylic coating"],
    ["Официальная карточка ↗","עמוד המוצר הרשמי ↗","Official product page ↗"],
    ["Выберите хотя бы одну изменяемую зону.","בחרו לפחות אזור אחד לעריכה.","Select at least one editable zone."],
    ["Ракурс","זווית","View"],
    ["Фотография","תמונה","Photo"],
    ["точек","נקודות","points"],
    ["новая область","אזור חדש","new region"],
    ["м² полезной площади","מ״ר כיסוי","m² coverage"],
    ["кг/панель","ק״ג/לוח","kg/panel"],
    ["SKU: не опубликован поставщиком","מק״ט: לא פורסם על ידי היצרן","SKU: not published by supplier"],
    ["Официальные изображения доступны для рендера:","תמונות יצרן זמינות להדמיה:","Manufacturer images available for rendering:"],
    ["проверено","נבדקו","checked"],
    ["Остальные автоматически заменяются иллюстративными фактурами. Фотографии моделей не являются развёртками панелей.","השאר מוחלפות אוטומטית בטקסטורות להמחשה. תמונות הדגמים אינן סריקות שטוחות של הלוחות.","The others use illustrative textures. Model photos are not flat panel scans."],
    ["Укажите хотя бы 3 вершины","יש לסמן לפחות 3 נקודות","Select at least 3 vertices"],
    ["Очистить все разметки текущей фотографии?","למחוק את כל המסכות של התמונה הנוכחית?","Clear all masks for the current photo?"],
    ["История пуста","אין פעולות לביטול","Nothing to undo"],
    ["PNG сохранён","קובץ PNG נשמר","PNG saved"],
    ["Проект сохранён","הפרויקט נשמר","Project saved"],
    ["JSON загружен","קובץ JSON נטען","JSON loaded"],
    ["Неверный формат","פורמט לא תקין","Invalid format"],
    ["Не изображение","זה אינו קובץ תמונה","Not an image file"],
    ["Не удалось прочесть изображение","לא ניתן לקרוא את התמונה","Cannot read image"],
    ["Ошибка загрузки JSON:","שגיאה בטעינת JSON:","Error loading JSON:"],
    ["Ошибка фото:","שגיאה בתמונה:","Photo error:"],
    ["Образец для","דוגמה עבור","Sample for"],
    ["загружен","נטען","loaded"],
    ["Локально открыто фото:","התמונה נטענה מקומית:","Locally loaded photo:"],
    ["Ошибка инициализации:","שגיאת אתחול:","Initialization error:"],
    ["Фото модели","תמונת דגם","Model photo"],
    ["с сайта Kalkir","מאתר Kalkir","from Kalkir"],
    ["Включить зону","הפעלת אזור","Enable zone"]
  ];

  const lookup = new Map(pairs.map(([ru, he, en]) => [ru, {he, en}]));
  const pieces = pairs.filter(([ru]) => !ru.includes("\n")).sort((a, b) => b[0].length - a[0].length);
  const textOrigins = new WeakMap(), attributeOrigins = new WeakMap();
  let current = "he", pending = false, processing = false;

  function translateText(original) {
    if (current === "ru" || !original || !/[\u0400-\u04FF]/.test(original)) return original;
    const trimmed = original.trim(), val = lookup.get(trimmed);
    if (val) return original.replace(trimmed, val[current]);
    let result = original;
    // Convert known interface phrases inside dynamically generated labels.
    for (const [ru, he, en] of pieces) {
      if (result.includes(ru)) result = result.split(ru).join(current === "he" ? he : en);
    }
    if (/\d+\s+областей/.test(result)) result = result.replace(/(\d+)\s+областей\s*·\s*(\d+)\s+исключений/g,
       (_, a, b) => current === "he" ? a + " אזורים · " + b + " חריגים" : a + " regions · " + b + " exclusions");
    return result;
  }

  function renderNode(node) {
    if (!node || !node.parentElement || node.parentElement.closest("script,style,#languageSwitch")) return;
    const actual = node.nodeValue || "";
    let cached = textOrigins.get(node);
    if (!cached || actual !== cached.rendered) cached = {original:actual, rendered:actual};
    const translated = translateText(cached.original);
    cached.rendered = translated; textOrigins.set(node,cached);
    if (translated !== actual) node.nodeValue = translated;
  }

  function renderAttributes(el) {
    if (!el || el.closest("#languageSwitch")) return;
    const track = attributeOrigins.get(el) || {};
    for (const key of ["placeholder","title","alt","aria-label"]) {
      if (!el.hasAttribute(key)) continue;
      const actual = el.getAttribute(key), prior = track[key];
      const orig = prior && prior.rendered === actual ? prior.original : actual;
      const translated = translateText(orig);
      track[key] = {original:orig, rendered:translated};
      if (translated !== actual) el.setAttribute(key,translated);
    }
    attributeOrigins.set(el, track);
  }

  function walk(root) {
    if (!root) return;
    if (root.nodeType === Node.TEXT_NODE) {renderNode(root);return}
    if (root.nodeType !== Node.ELEMENT_NODE || root.matches("script,style,#languageSwitch")) return;
    renderAttributes(root);
    const walker = document.createTreeWalker(root,NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeType === Node.TEXT_NODE) renderNode(node);
      else if (node.nodeType === Node.ELEMENT_NODE) renderAttributes(node);
    }
  }

  function repaint() {
    if (processing) return;
    processing = true;
    try {walk(document.body)} finally {processing = false}
  }

  function setLanguage(lang, persist=true) {
    current = ["he","en","ru"].includes(lang) ? lang : "he";
    document.documentElement.lang = current;
    document.documentElement.dir = current === "he" ? "rtl" : "ltr";
    if (persist) try {localStorage.setItem("sms-language",current)} catch(e) {}
    document.querySelectorAll("#languageSwitch button").forEach(btn => {
      const selected = btn.dataset.lang === current;
      btn.setAttribute("aria-pressed",String(selected));
      btn.classList.toggle("selected",selected);
    });
    repaint();
  }

  const styles = document.createElement("style");
  styles.textContent = "#languageSwitch{display:flex;gap:5px;align-items:center;flex-wrap:wrap;margin-inline-start:auto}" +
    "#languageSwitch button{font-size:13px;border:1px solid #567087;background:#243646;color:#eef4fa;padding:8px 10px;cursor:pointer;border-radius:7px}" +
    "#languageSwitch button.selected{border-color:#e7c78e;color:#171d24;background:#e7c78e;font-weight:750}" +
    "html[dir=rtl] aside{border-right:0;border-left:1px solid var(--line)}" +
    "html[dir=rtl] .notice{border-left:0;border-right:3px solid #d8b672}" +
    "html[dir=rtl] input[type=file]{direction:rtl}" +
    "html[dir=rtl] .canvaswrap,html[dir=rtl] #view{direction:ltr}" +
    "@media(max-width:650px){#languageSwitch{width:100%;justify-content:flex-start}#languageSwitch button{flex:1}}";
  document.head.appendChild(styles);

  const switcher = document.createElement("nav");
  switcher.id="languageSwitch";switcher.setAttribute("aria-label","שפה / Language / Язык");
  [["he","עברית"],["en","English"],["ru","Русский"]].forEach(([id,label])=>{
    const btn=document.createElement("button");btn.type="button";btn.dataset.lang=id;btn.textContent=label;
    btn.addEventListener("click",()=>setLanguage(id));switcher.appendChild(btn);
  });
  const header=document.querySelector("body > header");
  if (header) {
    const badge=header.querySelector(".v");
    if (badge) badge.textContent="V0.4 · PUBLIC SAFE DEMO";
    if (badge) badge.before(switcher); else header.appendChild(switcher);
  }
  const observer = new MutationObserver(mutations => {
    if (processing || pending) return;
    if (!mutations.some(m => !m.target.parentElement?.closest?.("#languageSwitch"))) return;
    pending = true;
    queueMicrotask(() => {pending=false;repaint()});
  });
  observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:["placeholder","title","alt","aria-label"]});
  let pref="he";try{pref=localStorage.getItem("sms-language")||"he"}catch(e){}
  setLanguage(pref,false);
})();