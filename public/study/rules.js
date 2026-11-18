// Each row contrasts a form, its use, and a translated example.
const ruleLessons = {
  place: {title:'Место, направление и исходная точка', intro:'Смотрите, какую роль играет место во фразе. Один и тот же город может быть местом действия, целью поездки или точкой отправления.', rows:[
    ['en · где?', 'Место, где кто-то находится, живёт или работает.', 'Trabajo en Madrid.', 'Я работаю в Мадриде.'],
    ['a · куда?', 'Пункт, в который направляются.', 'Mañana voy a Madrid.', 'Завтра я еду в Мадрид.'],
    ['de · откуда?', 'Место, откуда приезжают или уходят.', 'Vuelvo de Madrid.', 'Я возвращаюсь из Мадрида.']], note:'Сам глагол движения ещё не определяет предлог: voy a Madrid называет цель, а voy en tren — способ добраться.'},
  transport: {title:'Куда и на чём?', intro:'В одной поездке можно назвать и пункт назначения, и способ передвижения. Для них нужны разные сочетания.', rows:[
    ['a + место', 'Куда едем или идём?', 'Voy a la estación.', 'Я иду на вокзал.'],
    ['en + транспорт', 'Как добираемся? Перед названием вида транспорта обычно нет артикля.', 'Voy a la estación en autobús.', 'Я еду на вокзал на автобусе.'],
    ['a pie', '«Пешком» — устойчивое сочетание, без артикля.', 'Hoy voy a la estación a pie.', 'Сегодня я иду на вокзал пешком.']], note:'En autobús — способ передвижения. En el autobús может указывать на конкретный автобус: Estoy en el autobús — «Я в автобусе».'},
  contraction: {title:'Когда нужны al и del', intro:'Сначала выберите предлог по смыслу, затем посмотрите на артикль. С формой el два предлога обязательно сливаются в одно слово.', rows:[
    ['a + el → al', 'Направление: ir a + el mercado.', 'Voy al mercado.', 'Я иду на рынок.'],
    ['de + el → del', 'Исходная точка: salir de + el mercado.', 'Salgo del mercado.', 'Я выхожу с рынка.'],
    ['a la, de los', 'С la, los и las слияния нет.', 'Voy a la tienda. Vengo de los jardines.', 'Я иду в магазин. Я возвращаюсь из садов.']], note:'El и él — разные слова. Местоимение él («он») не сливается: Hablo de él — «Я говорю о нём».'},
  purpose: {title:'Por и para: маршрут или цель', intro:'У этих предлогов несколько значений. В заданиях о маршруте, цели или подарке полезнее задать вопрос ко всей фразе, чем переводить отдельный предлог.', rows:[
    ['por · каким путём?', 'Называет пространство, по которому проходит движение.', 'Camino por el centro.', 'Я иду по центру города.'],
    ['para · для кого?', 'Указывает на того, кому что-то предназначено.', 'Estas flores son para Ana.', 'Эти цветы для Аны.'],
    ['para · зачем?', 'Перед инфинитивом вводит цель действия.', 'Voy al mercado para comprar pan.', 'Я иду на рынок, чтобы купить хлеб.']], note:'Сравните: por Ana может означать «вместо Аны» или «ради Аны» в зависимости от контекста. Это не то же самое, что подарок, предназначенный Ане.'},
  contento: {title:'Estar contento con: чем доволен человек', intro:'В русском мы меняем падеж: «доволен работой». В испанском связь выражает предлог con. Состояние передаёт estar, а contento согласуется с тем, кто доволен.', rows:[
    ['Один человек', 'Меняется окончание прилагательного, но не предлог.', 'Ana está contenta con el resultado.', 'Ана довольна результатом.'],
    ['Несколько человек', 'Меняются и форма estar, и число прилагательного.', 'Mis amigos están contentos con el piso.', 'Мои друзья довольны квартирой.']], note:'Con не сливается с артиклем: con el piso, con la casa. Русский вопрос «чем?» здесь не требует испанского de.'},
  possessive: {title:'Как выбрать притяжательную форму', intro:'Сначала определите владельца: я, ты, он или она, мы, вы, они. Затем посмотрите, назван ли предмет сразу после формы. Род и число окончания зависят от предмета, а не от владельца.', rows:[
    ['Перед предметом', 'Mi, tu, su меняются только по числу: mi/mis, tu/tus, su/sus.', 'Mi libro y mis llaves están aquí.', 'Моя книга и мои ключи здесь.'],
    ['Nuestro и vuestro', 'Эти формы меняются и по роду, и по числу даже перед существительным.', 'Nuestra casa está cerca de vuestros pisos.', 'Наш дом рядом с вашими квартирами.'],
    ['После ser', 'Нужна полная форма: mío, tuyo, suyo и их формы рода и числа. При простом указании принадлежности артикль не нужен.', 'El libro es mío. Las llaves son mías.', 'Книга моя. Ключи мои.'],
    ['Вместо названия предмета', 'Когда понятно, о каком предмете речь, артикль и полная форма заменяют его название.', 'Estas son mis llaves. ¿Dónde están las tuyas?', 'Это мои ключи. Где твои?']], note:'Mi и tu перед предметом пишутся без знака ударения. Mí — местоимение после предлога (para mí), tú — подлежащее (tú lees). У mío, mía, míos, mías знак над í сохраняется.'},
  sed: {title:'Tener + существительное: ощущения', intro:'Некоторые состояния, которые по-русски выражаются словами «хочу» или «мне», по-испански называют с помощью tener. Глагол меняется по лицу, а название ощущения остаётся тем же.', rows:[
    ['tener sed', 'Испытывать жажду.', 'Tengo sed.', 'Я хочу пить.'],
    ['tener hambre', 'Испытывать голод.', '¿Tienes hambre?', 'Ты хочешь есть?'],
    ['tener frío', 'Ощущать холод.', 'Tenemos frío.', 'Нам холодно.']], note:'Tengo sed сообщает о состоянии. Quiero beber означает «я хочу выпить / попить» и подчёркивает желаемое действие.'}
};
const prepLessonKeys = {place:'place',direction:'place',origin:'place',metro:'transport',foot:'transport',al:'contraction',del:'contraction',por:'purpose',para:'purpose',con:'contento'};
const tenseNotes = {
  tener:'У yo особая основа teng-. У tú, él/ella и ellos/ellas ударное e превращается в ie. У nosotros и vosotros ударение на окончании, поэтому e сохраняется.',
  trabajar:'Основа trabaj- одинакова во всех шести формах. Уберите -ar и выберите окончание по подлежащему: -o, -as, -a, -amos, -áis или -an.',
  pedir:'В четырёх формах с ударением на основе e меняется на i. В формах nosotros и vosotros ударение падает на окончание, и основа остаётся ped-.'
};
function topicRuleMarkup(q) {
  const [family,key]=q.id.replace(/^recognize:/,'').split(':');
  if((family==='verb'||family==='table')&&curriculum.has(key)){
    const rows=curriculum.forms(key).map((form,i)=>`<tr><th scope="row" lang="es">${esc(persons[i])}</th><td lang="es">${esc(form)}</td></tr>`).join('');
    return `<section class="rule-lesson"><h3>${esc(key)} · Presente de indicativo</h3><p>${esc(tenseNotes[key]||curriculum.formNote(key))}</p><table class="rule-table"><caption class="sr">Формы ${esc(key)} в настоящем времени</caption><thead><tr><th scope="col">Кто?</th><th scope="col">Форма</th></tr></thead><tbody>${rows}</tbody></table><p class="rule-note">Местоимение можно опустить, если из контекста понятно, кто действует. Форма глагола при этом не меняется.</p></section>`;
  }
  const lesson=family==='prep'?ruleLessons[prepLessonKeys[key]]:family==='poss'?ruleLessons.possessive:q.id==='phrase:sed'?ruleLessons.sed:null;
  if(!lesson)return '';
  return `<section class="rule-lesson"><h3>${esc(lesson.title)}</h3><p>${esc(lesson.intro)}</p><dl class="rule-cases">${lesson.rows.map(([term,why,es,ru])=>`<div><dt>${esc(term)}</dt><dd>${esc(why)}<div class="guide-example"><span lang="es">${esc(es)}</span><span>${esc(ru)}</span></div></dd></div>`).join('')}</dl><p class="rule-note">${esc(lesson.note)}</p></section>`;
}
