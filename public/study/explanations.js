const grammarGuides = {
  'prep:place': ['Спросите «где?». Глагол vivir описывает место жительства, а не движение. Перед названием города нужен en.', 'Vivo en Madrid, pero voy a Toledo.', 'Я живу в Мадриде, но еду в Толедо.'],
  'prep:direction': ['Спросите «куда?». После ir пункт назначения вводится предлогом a. Предлог en отвечал бы на другой вопрос: «где?» или «на чём?».', 'Voy a Madrid en tren.', 'Я еду в Мадрид на поезде.'],
  'prep:origin': ['Здесь важна исходная точка: «откуда я приезжаю?». После venir предлог de называет место отправления, а не цель поездки.', 'Vengo de Madrid y voy a Toledo.', 'Я еду из Мадрида в Толедо.'],
  'prep:metro': ['Пропуск стоит перед видом транспорта. Чтобы сказать «на метро» или «на поезде», используйте en без артикля. Пункт назначения обозначался бы предлогом a.', 'Voy al trabajo en metro.', 'Я езжу на работу на метро.'],
  'prep:foot': ['«Пешком» — устойчивое сочетание a pie. Здесь нельзя подставить en по аналогии с en metro: человек идёт пешком, а не пользуется транспортом.', 'Voy a pie, no en autobús.', 'Я иду пешком, а не еду на автобусе.'],
  'prep:al': ['Направление после ir требует a. Следующее слово употреблено с артиклем el, поэтому a + el обязательно сливаются в al. Перед la слияния нет.', 'Voy al mercado y después a la farmacia.', 'Я иду на рынок, а потом в аптеку.'],
  'prep:del': ['Salir de означает «выходить из». Когда дальше нужен артикль el, de + el сливаются в del. С другими артиклями предлог пишется отдельно.', 'Salgo del cine a las ocho.', 'Я выхожу из кинотеатра в восемь.'],
  'prep:por': ['Ищите не цель движения, а путь: «через какое место?». Por указывает, где проходит маршрут. Para может обозначать цель или получателя, но не маршрут в этой фразе.', 'Paseamos por el parque.', 'Мы гуляем по парку.'],
  'prep:para': ['После пропуска назван человек, которому предназначена вещь. Значение «для кого?» передаёт para. Вопрос «через что?» относился бы к por.', 'Este libro es para Ana.', 'Эта книга для Аны.'],
  'prep:con': ['Запомните сочетание estar contento con algo — «быть довольным чем-то». По-русски предлога нет, но по-испански между contento и предметом нужен con.', 'Estoy contenta con mi trabajo.', 'Я довольна своей работой.'],
  'poss:mis': ['Владелец — «я». Перед существительным ставится mi или mis. Окончание зависит от числа предметов, а не от их владельца: предметов несколько, поэтому mis.', 'Mi llave está aquí. Mis llaves están aquí.', 'Мой ключ здесь. Мои ключи здесь.'],
  'poss:mias': ['Слово «мои» стоит после son и не сопровождает существительное. Нужна полная форма: mías. Окончание -as согласуется с несколькими предметами женского рода; ударение на í обозначается письменно.', 'Son mis llaves. Estas llaves son mías.', 'Это мои ключи. Эти ключи — мои.'],
  'poss:mio': ['После es слово «мой» употребляется самостоятельно. Нужна полная форма mío: -o указывает на один предмет мужского рода. Перед названием предмета была бы короткая форма mi.', 'Es mi libro. El libro es mío.', 'Это моя книга. Книга — моя.'],
  'poss:mia': ['После es нужна самостоятельная форма mía. Род определяется испанским названием предмета, а не его русским переводом или полом владельца.', 'Es mi llave. La llave es mía.', 'Это мой ключ. Ключ — мой.'],
  'poss:mi': ['Перед названием одного предмета «мой» или «моя» переводится как mi. У этой формы нет различия по роду и нет знака ударения. Mí с ударением означает «мне / меня» после предлога.', 'Mi libro es importante para mí.', 'Моя книга важна для меня.'],
  'poss:tu': ['Перед существительным нужен показатель принадлежности tu — «твой». Не путайте с tú — «ты»: слово со знаком ударения называет самого собеседника, а не владельца предмета.', 'Tú tienes tu libro.', 'У тебя есть твоя книга.'],
  'poss:tuyas': ['Речь идёт о твоих ключах. Название llaves не повторяют после притяжательной формы: нужна полная форма tuyas. Окончание -as соответствует женскому роду и множественному числу llaves.', 'Estas son mis llaves. ¿Dónde están las tuyas?', 'Это мои ключи. Где твои?'],
  'poss:nuestra': ['Владелец — «мы», поэтому берём основу nuestr-. Окончание выбираем по предмету: одно существительное женского рода требует -a, независимо от того, кто входит в «мы».', 'Nuestro piso es grande. Nuestra casa es pequeña.', 'Наша квартира большая. Наш дом маленький.'],
  'poss:vuestros': ['Обращение к vosotros требует формы vuestro. Перед несколькими предметами мужского рода добавляется -s: vuestros. Число владельцев само по себе не определяет это окончание.', 'Vuestro libro está aquí. Vuestros libros están aquí.', 'Ваша книга здесь. Ваши книги здесь.'],
  'poss:su': ['Владелец назван в предложении: речь о её книге. Перед одним предметом ставится su. Форма не показывает пол владельца; у нескольких предметов было бы sus.', 'Ana tiene su libro y sus llaves.', 'У Аны есть её книга и ключи.'],
};

const verbMeaning = {tener:'иметь', trabajar:'работать', pedir:'просить или заказывать'};
const subjectRu = ['я', 'ты', 'он / она', 'мы', 'вы (vosotros)', 'они'];
const verbRules = {
  tener: [
    'Для yo у tener особая форма tengo. Нельзя просто убрать -er и добавить -o: в основе появляется g. Сравните: yo tengo, но tú tienes.',
    'У tú ударение падает на основу: e меняется на ie. К основе tien- прибавляется окончание -es: tienes.',
    'У él и ella одна и та же форма. В ударной основе e меняется на ie, а окончание третьего лица — -e: tiene.',
    'У nosotros ударение переходит на окончание. В основе сохраняется e, поэтому ten- + -emos даёт tenemos, не tienemos.',
    'У vosotros основа остаётся ten-. Прибавьте окончание -éis: tenéis. Знак над é сохраняет ударение на последнем слоге.',
    'У ellos и ellas основа под ударением: e меняется на ie. Окончание -en обозначает третье лицо множественного числа: tienen.'
  ],
  trabajar: ['-o','-as','-a','-amos','-áis','-an'].map(ending=>`Trabajar — правильный глагол на -ar. Уберите -ar, оставьте основу trabaj- и прибавьте окончание ${ending}: trabaj${ending.slice(1)}.${ending==='-áis'?' В окончании -áis нужен знак ударения.':''}`),
  pedir: ['-o','-es','-e','-imos','-ís','-en'].map((ending,i)=>i===3||i===4?`У этой формы ударение на окончании, поэтому в основе ped- буква e сохраняется. Добавьте ${ending}: ped${ending.slice(1)}.${i===4?' Ударение на í обозначается письменно.':''}`:`В ударной основе pedir буква e меняется на i. К основе pid- прибавьте ${ending}: pid${ending.slice(1)}.`),
};
const exampleBank = [
  ['la calle|el perro','El perro está en la calle.','Собака на улице.'],
  ['tranquilo|tranquila','Hoy la calle está tranquila.','Сегодня на улице спокойно.'],
  ['el pez|el agua','El pez vive en el agua.','Рыба живёт в воде.'],
  ['el viaje|largo','El viaje es largo.','Путешествие долгое.'],
  ['la llave|las llaves|la puerta|abrir','Abro la puerta con la llave.','Я открываю дверь ключом.'],
  ['tener|tengo|tiempo','Hoy tengo tiempo.','Сегодня у меня есть время.'],
  ['tener sed|beber|agua','Tengo sed. ¿Puedo beber agua?','Я хочу пить. Можно выпить воды?'],
  ['el desayuno|el café|la leche|el pan','En el desayuno tomo café con leche y pan.','На завтрак я пью кофе с молоком и ем хлеб.'],
  ['el coche|nuevo','Mi coche es nuevo.','Моя машина новая.'],
  ['ser|estar|joven|cansado','Es joven y hoy está cansado.','Он молод, а сегодня он устал.'],
  ['la casa|cerca|la estación','Mi casa está cerca de la estación.','Мой дом рядом со станцией.'],
  ['el autobús|la ciudad|el centro|ir','Voy al centro de la ciudad en autobús.','Я еду в центр города на автобусе.'],
  ['el día|bonito','Hoy hace un día bonito.','Сегодня прекрасный день.'],
  ['la noche|trabajar','Trabajo de noche.','Я работаю по ночам.'],
  ['el tiempo|necesitar|más','Necesito más tiempo.','Мне нужно больше времени.'],
  ['la gente|la plaza|mucha','Hay mucha gente en la plaza.','На площади много людей.'],
  ['la tarjeta|pagar|con','¿Puedo pagar con tarjeta?','Можно заплатить картой?'],
  ['la tienda|cerrar|tarde','La tienda cierra tarde.','Магазин закрывается поздно.'],
  ['el tren|salir|temprano|mañana','El tren sale temprano mañana.','Завтра поезд отправляется рано.'],
  ['la maleta|pequeño|llevar','Llevo una maleta pequeña.','Я несу небольшой чемодан.'],
  ['la habitación|el hotel|libre','¿Hay una habitación libre en el hotel?','В гостинице есть свободный номер?'],
  ['la mesa|la silla','La silla está junto a la mesa.','Стул стоит рядом со столом.'],
  ['el dinero|el billete|comprar','Tengo dinero para comprar el billete.','У меня есть деньги на билет.'],
  ['la cuenta|pedir','Pedimos la cuenta.','Мы просим счёт.'],
  ['el precio','El precio es bajo.','Цена низкая.'],
  ['bajo','Vivo bajo el mismo techo que mi hermano.','Я живу под одной крышей с братом.'],
  ['barato','Este billete es barato.','Этот билет дешёвый.'],
  ['la cena','La cena está lista.','Ужин готов.'],
  ['la comida|preparar','Preparamos la comida juntos.','Мы вместе готовим еду.'],
  ['la farmacia|el barrio','Hay una farmacia en mi barrio.','В моём районе есть аптека.'],
  ['el médico','Necesito un médico.','Мне нужен врач.'],
  ['la pregunta|la respuesta|saber','Sé la respuesta a tu pregunta.','Я знаю ответ на твой вопрос.'],
  ['el trabajo|difícil|interesante','El trabajo es difícil, pero interesante.','Работа трудная, но интересная.'],
  ['amable|la persona','Ana es una persona amable.','Ана — доброжелательный человек.'],
  ['aprender|escribir|leer','Aprendo a leer y a escribir en español.','Я учусь читать и писать по-испански.'],
  ['siempre|nunca|aquí|allí','Siempre como aquí, nunca allí.','Я всегда ем здесь, никогда там.'],
  ['aunque|llover','Salgo aunque llueva.','Я выйду, даже если пойдёт дождь.'],
  ['porque|esperar','Espero porque es temprano.','Я жду, потому что ещё рано.'],
  ['ayer|hoy|mejor','Ayer estaba mal; hoy estoy mejor.','Вчера мне было плохо, а сегодня лучше.'],
  ['ahora|luego|después','Ahora estudio. Luego, después de clase, trabajo.','Сейчас я учусь. Потом, после занятий, я работаю.'],
  ['antes|todavía|ya','Antes vivía aquí. Mi hermana todavía vive aquí, pero yo ya no.','Раньше я жил здесь. Моя сестра всё ещё здесь живёт, а я уже нет.'],
  ['pronto|volver','Vuelvo pronto.','Я скоро вернусь.'],
  ['ahí|delante|detrás','Tu mesa está ahí, delante de la ventana y detrás de la puerta.','Твой стол вон там, перед окном и за дверью.'],
  ['lejos|demasiado','La estación está demasiado lejos.','Вокзал слишком далеко.'],
  ['arriba|abajo','La cocina está abajo y el baño arriba.','Кухня внизу, а ванная наверху.'],
  ['dentro|fuera','Dentro hace calor, pero fuera hace frío.','Внутри жарко, а снаружи холодно.'],
  ['bien|mal','Ayer dormí mal, pero hoy he dormido bien.','Вчера я спал плохо, а сегодня спал хорошо.'],
  ['peor','Hoy me encuentro peor que ayer.','Сегодня я чувствую себя хуже, чем вчера.'],
  ['muy|bastante','El hotel es bastante cómodo y está muy cerca.','Отель довольно удобный и находится совсем рядом.'],
  ['menos|casi|solo','Cuesta casi diez euros, pero solo tengo ocho: dos euros menos.','Это стоит почти десять евро, а у меня только восемь: на два евро меньше.'],
  ['anoche|también','Anoche yo también estuve allí.','Вчера вечером я тоже там был.'],
  ['tampoco|no','No tengo coche. Yo tampoco.','У меня нет машины. У меня тоже нет.'],
  ['quizás|probablemente','¿Vendrá hoy? Quizás. Probablemente mañana.','Он придёт сегодня? Возможно. Скорее всего, завтра.'],
  ['así|despacio|rápidamente','Hazlo así: primero despacio y luego más rápidamente.','Сделай так: сначала медленно, а потом быстрее.'],
  ['normalmente|exactamente','Normalmente llego exactamente a las ocho.','Обычно я прихожу ровно в восемь.'],
  ['finalmente|realmente','Finalmente encontré lo que realmente necesitaba.','Наконец я нашёл то, что мне действительно было нужно.'],
  ['yo|tú|él|ella','Yo vivo aquí. ¿Y tú? Él y ella viven allí.','Я живу здесь. А ты? Он и она живут там.'],
  ['usted|ustedes','¿Habla usted español? ¿Y ustedes?','Вы говорите по-испански? А вы? Сначала обращаются к одному человеку вежливо, затем — к нескольким.'],
  ['nosotros|vosotros|ellos','Nosotros vamos a pie. ¿Y vosotros? Ellos van en tren.','Мы идём пешком. А вы? Они едут на поезде.'],
  ['alguien|nadie','¿Hay alguien aquí? No, no hay nadie.','Здесь кто-нибудь есть? Нет, никого нет.'],
  ['algo|nada','¿Necesitas algo? No, nada.','Тебе что-нибудь нужно? Нет, ничего.'],
  ['esto|eso','Esto es mío y eso es tuyo.','Вот это моё, а то — твоё.'],
  ['el|la|los|las','El libro y la llave → los libros y las llaves.','Книга и ключ → книги и ключи. Сравните артикли единственного и множественного числа.'],
  ['un|una','Hay un libro y una llave en la mesa.','На столе лежат книга и ключ.'],
  ['mi|tu|su','Esta es mi casa. ¿Y tu casa? Ana vive cerca de su trabajo.','Это мой дом. А твой? Ана живёт рядом со своей работой.'],
  ['nuestro|este|ese','Este es nuestro tren; ese no.','Вот этот поезд наш, а тот — нет.'],
  ['cada|algún|ningún','Cada día pasa algún autobús, pero hoy no ha pasado ningún autobús.','Каждый день проходит какой-нибудь автобус, но сегодня не прошёл ни один.'],
  ['a|de|desde|hasta','Voy de casa a clase. Camino desde mi puerta hasta la escuela.','Я иду из дома на занятия. Я иду пешком от своей двери до школы.'],
  ['sin|en','En España tomo el café sin azúcar.','В Испании я пью кофе без сахара.'],
  ['por|para','Paso por el mercado para comprar pan.','Я захожу на рынок, чтобы купить хлеб.'],
  ['hacia|entre|sobre','Camino hacia el puente. Está entre dos pueblos, sobre el río.','Я иду в сторону моста. Он между двумя посёлками, над рекой.'],
  ['contra|según','Según Ana, la bici está apoyada contra la pared.','По словам Аны, велосипед прислонён к стене.'],
  ['y|o|pero','¿Té o café? Té y pan, pero sin leche.','Чай или кофе? Чай и хлеб, но без молока.'],
  ['si|sí','Si tienes tiempo, ven. Sí, tengo tiempo.','Если есть время, приходи. Да, у меня есть время.'],
  ['ni|sino','No quiero ni té ni café, sino agua.','Я хочу не чай и не кофе, а воду.'],
  ['mientras|cuando','Leo mientras espero. Cuando llega el tren, cierro el libro.','Я читаю, пока жду. Когда приходит поезд, я закрываю книгу.'],
  ['como si','Habla como si fuera de Madrid.','Он говорит так, словно он из Мадрида.'],
  ['para que','Lo repito para que lo entiendas.','Я повторяю это, чтобы ты понял.'],
];
const wordExamples = new Map(exampleBank.flatMap(([keys,es,ru])=>keys.split('|').map(key=>[key,[es,ru]])));
const articleNames = {el:'мужской род, единственное число',la:'женский род, единственное число',los:'мужской род, множественное число',las:'женский род, множественное число'};
const categoryNotes = {
  a:'Это прилагательное: оно описывает признак предмета или человека. Смотрите, с каким существительным оно употреблено: число, а у многих прилагательных и род, влияют на окончание.',
  d:'Это наречие: оно уточняет обстоятельства или степень признака. В отличие от прилагательного, оно не согласуется с существительным по роду и числу.',
  prep:'Это предлог. Учите его вместе с соседними словами: именно их связь определяет подходящий русский перевод.',
  conj:'Это союз: он связывает слова или части предложения. При переводе важна связь между ними, а не форма соседнего существительного.',
  pr:'Это местоимение: оно указывает на лицо или предмет, не называя его по имени. Обратите внимание, кого или что оно заменяет.',
  det:'Это определитель. Он употребляется с существительным и уточняет, о каком предмете идёт речь.',
  num:'Это количественное числительное: оно отвечает на вопрос «сколько?», а не «который по счёту?».',
  inter:'Это междометие или короткая реплика. Перевод передаёт её смысл и интонацию целиком.',
  ph:'Это готовая реплика. Русский перевод передаёт то, что говорит человек, а не обязательно значение каждого слова по отдельности.',
  expr:'Здесь запоминается всё выражение. Отдельные слова могут иметь другие значения, поэтому при переводе сохраняйте сочетание целиком.',
};
function wordGuide(w) {
  const es=w.es.trim(), article=es.split(' ')[0], example=tasks.find(t=>t.base===w.raw||t.base===es);
  const known=es==='bajo'&&(w.cat==='a'||w.cat==='adj')?['El techo es bajo.','Потолок низкий.']:wordExamples.get(es.toLocaleLowerCase('es'));
  let rule=categoryNotes[w.cat==='adj'?'a':w.cat];
  if(es==='el agua')rule='Agua — существительное женского рода. В единственном числе перед начальным ударным a ставится el: el agua. Во множественном числе возвращается las: las aguas.';
  else if(Object.hasOwn(articleNames,article)&&es.includes(' ')&&(w.cat==='n'||w.cat==='noun'))rule=`Запоминайте существительное вместе с артиклем. Здесь ${article} указывает на ${articleNames[article]}. В русском переводе артикля нет, но в испанской словарной форме он нужен.`;
  else if(w.cat==='v'||w.cat==='verb')rule=es==='tengo'?'Это уже личная форма tener: yo tengo — «у меня есть». Не заменяйте её неопределённой формой tener.':`Это инфинитив — форма глагола без указания лица. ${es.match(/(?:ar|er|ir|ír)$/i)?`Окончание -${es.slice(-2)} помогает узнать эту форму. `:''}В словарном ответе оставьте «${es}»; в предложении с подлежащим форму обычно нужно изменить.`;
  if(es==='las llaves')rule='La llave — один ключ. Во множественном числе меняются и артикль, и существительное: la становится las, а к llave добавляется -s. Поэтому «ключи» — las llaves.';
  const points=[rule||`В этой словарной записи «${es}» соответствует переводу «${w.ru}». Запомните именно это значение; в другом контексте у слова может быть другой перевод.`];
  if(example?.why&&!points.includes(example.why))points.push(example.why);
  return {title:`${es} — ${w.ru}`,points,example:example?[example.q.replace('___',example.a),example.ru]:w.example?[w.example]:known};
}
function formGuide(q,v,i) {
  const answer=q.answers[0], pronoun=persons[i].split(' / ')[0],sub=pronoun[0].toUpperCase()+pronoun.slice(1);
  const action={tener:['у меня','у тебя','у него','у нас','у вас','у них'],trabajar:['я работаю','ты работаешь','он работает','мы работаем','вы работаете','они работают'],pedir:['я заказываю','ты заказываешь','он заказывает','мы заказываем','вы заказываете','они заказывают']}[v][i];
  const ru=v==='tener'?`${action} есть ${q.prompt.includes('tiempo')?'время':'ключи'}`:v==='trabajar'?`${action} ${q.prompt.includes('casa')?'дома':'в Мадриде'}`:`${q.prompt.includes('libro')?['я прошу','ты просишь','он просит','мы просим','вы просите','они просят'][i]+' книгу':action+' кофе'}`;
  return {title:`${sub} ${answer}`,points:[`В этой фразе ${pronoun} означает «${subjectRu[i].split(' / ')[0]}». Нужна форма глагола ${v} («${verbMeaning[v]}») для этого лица в настоящем времени.`,verbRules[v][i]],example:[q.prompt.replace('___',answer),ru[0].toUpperCase()+ru.slice(1)+'.']};
}
function answerGuides(q) {
  if(q.type==='multi')return q.parts.flatMap(answerGuides);
  if(q.type==='pair')return q.pairs.map(wordGuide);
  const id=q.id.replace(/^recognize:/,''), [,v,place]=id.split(':');
  if(id.startsWith('verb:')&&Object.hasOwn(verbRules,v)&&verbRules[v][place])return [formGuide(q,v,Number(place))];
  if(id.startsWith('verb:')&&curriculum.has(v))return [{title:q.prompt.replace('___',q.answers[0]),points:[q.explanation]}];
  const grammar=grammarGuides[id];
  if(grammar){let sentence=q.prompt.replace('___',q.answers[0]);sentence=sentence[0].toUpperCase()+sentence.slice(1);return [{title:sentence,points:[q.prompt===q.alt?curriculum.contextNote(q):grammar[0]],example:q.prompt===q.alt?[sentence,q.translation]:grammar.slice(1)}]}
  if(id==='phrase:sed')return [{title:'Tengo sed.',points:['По-испански жажду выражают сочетанием tener sed: буквально «иметь жажду». Это состояние, а не действие beber («пить»).','Для «я» глагол tener принимает форму tengo. Местоимение yo можно опустить: форма уже показывает, кто говорит. Оба ответа — Tengo sed и Yo tengo sed — верны.'],example:['Tengo sed, ¿me das agua?','Я хочу пить, дашь мне воды?']}];
  const w=q.wordId!=null&&lookup(q.wordId);
  if(w)return [wordGuide(w)];
  return [{title:q.answers[0],points:[q.explanation||q.translation]}];
}
function detailLabel(q) {
  return q.type==='pair'?'Разбор пар':q.wordId!=null?'Подробнее о слове':'Полное правило';
}
function briefExplanation(q) {
  if(q.type==='multi')return tenseNotes[q.prompt]||(curriculum.has(q.prompt)?curriculum.formNote(q.prompt):q.translation);
  if(q.type==='pair'){
    const word=q.pairs.find(w=>currentRun.log.some(e=>e.step===currentRun.pos&&e.target===`pair:${w.id}`&&!['good','hard'].includes(e.kind)))||q.pairs[0];
    const g=wordGuide(word);
    return `${g.title}. ${g.points[0]}`;
  }
  const [family,key,i]=q.id.replace(/^recognize:/,'').split(':');
  if(family==='verb'&&Object.hasOwn(verbRules,key))return verbRules[key][i];
  if(q.wordId!=null){const w=lookup(q.wordId);if(w)return wordGuide(w).points[0]}
  return curriculum.contextNote(q)||q.translation;
}
function guideMarkup(g) {
  return `<section class="guide-item"><h3>${esc(g.title)}</h3>${g.points.map(text=>`<p>${esc(text)}</p>`).join('')}${g.example?`<div class="guide-example"><span lang="es">${esc(g.example[0])}</span>${g.example[1]?`<span>${esc(g.example[1])}</span>`:''}</div>`:''}</section>`;
}
function showExplanation(q, step=currentRun.pos) {
  const answers=currentRun.log.filter(e=>e.step===step&&e.answer&&!['good','hard'].includes(e.kind)&&(q.type==='multi'||q.type==='pair'||e.target===q.id));
  const comparison=answers.map(e=>`<p class="guide-contrast">Ваш ответ: <strong>${esc(e.answer)}</strong>. Здесь нужно: <strong>${esc(e.expected)}</strong>.${e.kind==='accent'?' Обратите внимание на знак ударения.':e.kind==='article'?' Сверьте артикль перед существительным.':''}</p>`).join('');
  const topic=topicRuleMarkup(q);
  const guides=answerGuides(q);
  const examples=q.type==='multi'&&topic?guides.slice(0,1):guides;
  popup(detailLabel(q),`<div class="answer-guide">${comparison}${examples.map(guideMarkup).join('')}${topic}</div><div class="format-actions"><button class="primary" data-act="close">${currentRun.done?'К итогам':'К заданию'} ${ic('arrow')}</button></div>`);
  modal.scrollTop=0;
}
function openCurrentRule() {
  const r=currentRun;if(r&&!r.done&&r.step.checked)showExplanation(r.q[r.pos]);
}
function explainReview(step,target) {
  const q=currentRun?.q[step];if(!q||!currentRun.done)return;
  const sub=q.parts?.find(p=>p.id===target),w=q.pairs?.find(w=>`pair:${w.id}`===target);
  showExplanation(sub||(w?{...q,type:'write',id:target,wordId:w.id,answers:[w.ru]}:q),step);
}
