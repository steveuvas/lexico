const curriculum = (() => {
  const people = ['yo','tú','él / ella','nosotros','vosotros','ellos / ellas'];
  const endings = {ar:['o','as','a','amos','áis','an'],er:['o','es','e','emos','éis','en'],ir:['o','es','e','imos','ís','en']};
  const lessons = new Map();
  const rows = `dormir|duermo duermes duerme dormimos dormís duermen|poco|ocho horas
trabajar||en Madrid|en casa
tener|tengo tienes tiene tenemos tenéis tienen|las llaves|tiempo
pedir|pido pides pide pedimos pedís piden|un café|un libro
aprender||español|algo nuevo
decidir||el horario|la fecha
necesitar||ayuda|una pausa
llamar||a casa|a un amigo
llegar||tarde|a tiempo
leer||un libro|el periódico
bailar||salsa|muy bien
terminar||el trabajo|la tarea
viajar||en tren|en autobús
usar||el móvil|el ordenador
saltar||muy alto|a la cuerda
pasear||por el parque|por el barrio
preguntar||la hora|el precio
pagar||con tarjeta|en efectivo
dejar||las llaves aquí|el bolso en casa
descansar||en casa|un momento
enviar|envío envías envía enviamos enviáis envían|un mensaje|una carta
entrar||en casa|en clase
estudiar||español|en la biblioteca
escuchar||música|la radio
esperar||el autobús|una respuesta
contestar||la pregunta|el mensaje
comprar||fruta|pan
comer||en casa|a las dos
buscar||las llaves|una dirección
ayudar||a Ana|en casa
amar||la música|la naturaleza
abrir||la puerta|la ventana
producir|produzco produces produce producimos producís producen|música|vídeos
parecer|parezco pareces parece parecemos parecéis parecen|de aquí|de Madrid
conducir|conduzco conduces conduce conducimos conducís conducen|un coche|con cuidado
conocer|conozco conoces conoce conocemos conocéis conocen|Madrid|a Ana
jugar|juego juegas juega jugamos jugáis juegan|al fútbol|al tenis
volver|vuelvo vuelves vuelve volvemos volvéis vuelven|a casa|en tren
poder|puedo puedes puede podemos podéis pueden|venir hoy|ayudar
aprobar|apruebo apruebas aprueba aprobamos aprobáis aprueban|el examen|el curso
recordar|recuerdo recuerdas recuerda recordamos recordáis recuerdan|la fecha|el nombre
costar|cuesto cuestas cuesta costamos costáis cuestan|dinero|menos que antes
almorzar|almuerzo almuerzas almuerza almorzamos almorzáis almuerzan|a las dos|en casa
morir|muero mueres muere morimos morís mueren|de risa|de curiosidad
soñar|sueño sueñas sueña soñamos soñáis sueñan|con viajar|con el mar
doler|duelo dueles duele dolemos doléis duelen||
servir|sirvo sirves sirve servimos servís sirven|el café|la cena
vestir|visto vistes viste vestimos vestís visten|de negro|de azul
despedir|despido despides despide despedimos despedís despiden|a los invitados|a un amigo
sonreír|sonrío sonríes sonríe sonreímos sonreís sonríen|al entrar|para la foto
competir|compito compites compite competimos competís compiten|en equipo|en la final
repetir|repito repites repite repetimos repetís repiten|la frase|la pregunta
empezar|empiezo empiezas empieza empezamos empezáis empiezan|a leer|la clase
querer|quiero quieres quiere queremos queréis quieren|un café|descansar
sentir|siento sientes siente sentimos sentís sienten|frío|alegría
recomendar|recomiendo recomiendas recomienda recomendamos recomendáis recomiendan|este libro|ese café
cerrar|cierro cierras cierra cerramos cerráis cierran|la puerta|la ventana
preferir|prefiero prefieres prefiere preferimos preferís prefieren|el tren|el té
entender|entiendo entiendes entiende entendemos entendéis entienden|la pregunta|el problema
perder|pierdo pierdes pierde perdemos perdéis pierden|el tren|las llaves
pensar|pienso piensas piensa pensamos pensáis piensan|en el viaje|en casa
ver|veo ves ve vemos veis ven|el mar|una película
ir|voy vas va vamos vais van|al mercado|en metro
saber|sé sabes sabe sabemos sabéis saben|la respuesta|nadar
salir|salgo sales sale salimos salís salen|de casa|a las ocho
poner|pongo pones pone ponemos ponéis ponen|la mesa|la radio
traer|traigo traes trae traemos traéis traen|el pan|las llaves
hacer|hago haces hace hacemos hacéis hacen|la compra|una pregunta
venir|vengo vienes viene venimos venís vienen|de Madrid|en tren
seguir|sigo sigues sigue seguimos seguís siguen|el camino|las instrucciones
decir|digo dices dice decimos decís dicen|la verdad|el nombre
ser|soy eres es somos sois son|de Madrid|de aquí
estar|estoy estás está estamos estáis están|en casa|en clase
dar|doy das da damos dais dan|un paseo|las gracias
llevar||una mochila|las llaves
hablar||español|por teléfono
beber||agua|leche
vivir||en Madrid|cerca del mar
escribir||un mensaje|una carta
responder||a la pregunta|al mensaje
encontrar|encuentro encuentras encuentra encontramos encontráis encuentran|las llaves|la salida
tomar||un café|el autobús
cambiar||de tren|de opinión
haber|he has ha hemos habéis han|llegado a casa|terminado el trabajo`;
  for (const row of rows.split('\n')) {
    const [verb, forms, base, other] = row.split('|');
    lessons.set(verb, {forms:forms ? forms.split(' ') : endings[verb.slice(-2)].map(end=>verb.slice(0,-2)+end), base, other, regular:!forms});
  }
  function lemma(word) {
    if (!word || !['verb','v','mine'].includes(word.cat)) return null;
    const v = word.es === 'tengo' ? 'tener' : word.es;
    return lessons.has(v) ? v : null;
  }
  function formNote(verb) {
    const lesson=lessons.get(verb);
    if(verb==='dormir')return 'Под ударением o меняется на ue: duermo, duermes, duerme, duermen. У nosotros и vosotros ударение на окончании: dormimos, dormís.';
    if(lesson.regular)return `Основа ${verb.slice(0,-2)}- сохраняется. В presente к ней прибавляются окончания ${endings[verb.slice(-2)].map(e=>'-'+e).join(', ')}.`;
    return `Сравните формы ${verb} в presente: ${lesson.forms.join(', ')}. Ориентируйтесь на лицо подлежащего.`;
  }
  function parts(verb) {
    const {forms,base,other}=lessons.get(verb);
    return people.map((person,i)=>{
      const pronoun=person.split(' / ')[0],subject=pronoun[0].toUpperCase()+pronoun.slice(1);
      const line=tail=>`${subject} ___${tail?' '+tail:''}.`;
      return {id:`verb:${verb}:${i}`,type:'write',label:'Спряжение',person,prompt:line(base),alt:other?line(other):`Presente de ${verb}: ${pronoun} ___.`,translation:`Глагол ${verb}, presente de indicativo.`,answers:[forms[i]],explanation:`${person} + ${verb} → ${forms[i]}. ${formNote(verb)}`};
    });
  }
  const alternateNotes = new Map([
    ['Estas mesas son ___.','Mesas — женский род, множественное число. После son нужна самостоятельная форма mías, с ударением на í.'],
    ['El bolso es ___.','Bolso — мужской род, единственное число. После es нужна полная форма mío.'],
    ['La casa es ___.','Casa — женский род, единственное число. После es нужна полная форма mía.'],
    ['___ mesa es pequeña.','Mesa — женский род, единственное число. Перед существительным ставим nuestra.'],
    ['___ coches están aquí.','Coches — мужской род, множественное число. Для владельцев vosotros нужна форма vuestros.'],
    ['Estas llaves, ¿son ___?','Tuyas стоит после son и согласуется с llaves: женский род, множественное число.'],
    ['Viajo ___ tren.','Здесь tren обозначает вид транспорта. В сочетании en tren артикль не нужен.'],
    ['Esta carta es ___ Ana.','Ана — получатель письма. Предлог para отвечает на вопрос «для кого?».']
  ]);
  const contextNote=q=>alternateNotes.get(q.prompt)||q.explanation;
  return {people,lemma,parts,formNote,has:v=>lessons.has(v),forms:v=>lessons.get(v)?.forms,contextNote};
})();
if(typeof module!=='undefined'&&module.exports)module.exports=curriculum;
