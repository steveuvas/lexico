const packNames={v:'Глаголы',n:'Существительные',a:'Прилагательные',d:'Наречия',pr:'Местоимения',det:'Артикли и определители',prep:'Предлоги',conj:'Союзы',num:'Числительные',inter:'Междометия',ph:'Полезные фразы'};
const lists={
v:`ser|быть (характеристика)
estar|находиться; быть в состоянии
tener|иметь
hacer|делать
ir|идти, ехать
venir|приходить
poder|мочь
querer|хотеть; любить
decir|сказать
saber|знать факт; уметь
conocer|быть знакомым с кем-то или чем-то
ver|видеть
dar|давать
poner|класть, ставить
salir|выходить
llegar|прибывать
llevar|нести; носить
traer|приносить
hablar|говорить
comer|есть, принимать пищу
beber|пить
vivir|жить
trabajar|работать
estudiar|учиться
aprender|учиться чему-то
leer|читать
escribir|писать
escuchar|слушать
entender|понимать
preguntar|задавать вопрос
responder|отвечать
pedir|просить; заказывать
pagar|платить
comprar|покупать
abrir|открывать
cerrar|закрывать
buscar|искать
encontrar|находить
necesitar|нуждаться
esperar|ждать; надеяться
ayudar|помогать
llamar|звонить; звать
volver|возвращаться
dormir|спать
empezar|начинать
terminar|заканчивать
tomar|брать; пить
usar|использовать
cambiar|менять
haber|быть, иметься (hay)` ,
n:`la casa|дом
el día|день
la noche|ночь
el tiempo|время; погода
la gente|люди
la vida|жизнь
la ciudad|город
la calle|улица
la plaza|площадь
el barrio|район
la estación|станция
el tren|поезд
el autobús|автобус
el billete|билет
el aeropuerto|аэропорт
la maleta|чемодан
el viaje|путешествие
el hotel|отель
la habitación|комната
la llave|ключ
la puerta|дверь
la mesa|стол
la silla|стул
la tienda|магазин
el mercado|рынок
el dinero|деньги
la tarjeta|карта для оплаты
el precio|цена
la cuenta|счёт
el agua|вода
el pan|хлеб
la leche|молоко
el café|кофе
la comida|еда; обед
el desayuno|завтрак
la cena|ужин
el trabajo|работа
la familia|семья
el amigo|друг
la persona|человек
el nombre|имя
el teléfono|телефон
la pregunta|вопрос
la respuesta|ответ
la hora|час
la semana|неделя
el año|год
el médico|врач
la farmacia|аптека
el baño|ванная; туалет`,
a:`bueno|хороший
malo|плохой
grande|большой
pequeño|маленький
nuevo|новый
viejo|старый
joven|молодой
bonito|красивый
feo|некрасивый
fácil|лёгкий, несложный
difícil|трудный
importante|важный
necesario|необходимый
posible|возможный
imposible|невозможный
caro|дорогой по цене
barato|дешёвый
rápido|быстрый
lento|медленный
largo|длинный
corto|короткий
alto|высокий
bajo|низкий
caliente|горячий
frío|холодный
limpio|чистый
sucio|грязный
lleno|полный
vacío|пустой
abierto|открытый
cerrado|закрытый
libre|свободный
ocupado|занятый
cansado|уставший
contento|довольный
triste|грустный
tranquilo|спокойный
nervioso|нервный
amable|приветливый
útil|полезный
seguro|безопасный; уверенный
peligroso|опасный
dulce|сладкий
salado|солёный
fresco|свежий
fuerte|сильный
débil|слабый
cómodo|удобный
diferente|другой, отличный от чего-то
interesante|интересный`,
d:`hoy|сегодня
ayer|вчера
mañana|завтра
ahora|сейчас
antes|раньше
después|потом
luego|затем
pronto|скоро
tarde|поздно
temprano|рано
siempre|всегда
nunca|никогда
ya|уже
todavía|ещё, до сих пор
aquí|здесь
ahí|там, рядом с тобой
allí|там, вдали
cerca|близко
lejos|далеко
arriba|наверху
abajo|внизу
dentro|внутри
fuera|снаружи
delante|впереди
detrás|позади
bien|хорошо
mal|плохо
mejor|лучше
peor|хуже
muy|очень
bastante|довольно, достаточно
demasiado|слишком
más|больше
menos|меньше
casi|почти
solo|только
anoche|вчера вечером
también|тоже
tampoco|тоже не
quizás|возможно
sí|да
no|нет
así|так, таким образом
despacio|медленно
rápidamente|быстро
normalmente|обычно
probablemente|вероятно
exactamente|точно
realmente|действительно
finalmente|наконец`,
pr:`yo|я
tú|ты
él|он
ella|она
usted|Вы (вежливо, один человек)
nosotros|мы
vosotros|вы (неформально, Испания)
ellos|они
ustedes|вы (несколько человек)
alguien|кто-то
nadie|никто
algo|что-то
nada|ничто
esto|это
eso|то`,
det:`el|определённый артикль, мужской род
la|определённый артикль, женский род
los|определённый артикль, мужской род, множественное число
las|определённый артикль, женский род, множественное число
un|неопределённый артикль, мужской род
una|неопределённый артикль, женский род
mi|мой, моя
tu|твой, твоя
su|его, её, их или Ваш
nuestro|наш
este|этот
ese|тот (ближе к собеседнику)
cada|каждый
algún|какой-нибудь
ningún|никакой`,
prep:`a|к, в (направление)
de|из; от
con|с, вместе с
sin|без
en|в, на
por|через; по причине
para|для; с целью
hacia|по направлению к
hasta|до
desde|с, начиная от
entre|между
sobre|над; о
bajo|под
contra|против
según|согласно`,
conj:`y|и
o|или
pero|но
porque|потому что
aunque|хотя
si|если
ni|ни
sino|а, а не (после отрицания)
mientras|пока, в то время как
cuando|когда (союз)
como si|как будто
para que|чтобы`,
num:`cero|ноль
uno|один
dos|два
tres|три
cuatro|четыре
cinco|пять
seis|шесть
siete|семь
ocho|восемь
nueve|девять
diez|десять
once|одиннадцать
doce|двенадцать
quince|пятнадцать
veinte|двадцать
treinta|тридцать
cincuenta|пятьдесят
cien|сто
mil|тысяча`,
inter:`¡Hola!|Привет!
¡Adiós!|Пока!
¡Ay!|Ой!
¡Uf!|Уф!
¡Ojalá!|Хоть бы!
¡Vaya!|Надо же!
¡Eh!|Эй!
¡Bravo!|Браво!`,
ph:`Buenos días.|Доброе утро.
Buenas tardes.|Добрый день.
Buenas noches.|Добрый вечер; спокойной ночи.
¿Qué tal?|Как дела?
Mucho gusto.|Очень приятно.
¿Cómo te llamas?|Как тебя зовут?
Me llamo Nikita.|Меня зовут Никита.
¿De dónde eres?|Откуда ты?
Hasta luego.|До скорого.
Nos vemos mañana.|Увидимся завтра.
Muchas gracias.|Большое спасибо.
De nada.|Не за что.
Por favor.|Пожалуйста (просьба).
Lo siento.|Мне жаль; извини.
No pasa nada.|Ничего страшного.
¿Me puedes ayudar?|Можешь мне помочь?
No entiendo.|Я не понимаю.
¿Puedes repetirlo?|Можешь повторить?
Más despacio, por favor.|Помедленнее, пожалуйста.
¿Cómo se dice esto en español?|Как это сказать по-испански?
¿Qué significa esta palabra?|Что означает это слово?
¿Cómo se escribe?|Как это пишется?
Estoy aprendiendo español.|Я учу испанский.
No lo sé.|Я не знаю.
Un momento, por favor.|Минутку, пожалуйста.
¿Cuánto cuesta?|Сколько это стоит?
¿Puedo pagar con tarjeta?|Можно оплатить картой?
Solo estoy mirando.|Я просто смотрю.
¿Tiene otra talla?|У вас есть другой размер?
Me lo llevo.|Я это беру.
Una mesa para dos, por favor.|Столик на двоих, пожалуйста.
¿Me trae la carta?|Принесите меню, пожалуйста.
Un café con leche, por favor.|Кофе с молоком, пожалуйста.
Sin azúcar, por favor.|Без сахара, пожалуйста.
La cuenta, por favor.|Счёт, пожалуйста.
¿Dónde está el baño?|Где туалет?
¿Cómo llego a la estación?|Как добраться до станции?
¿Está lejos de aquí?|Это далеко отсюда?
¿A qué hora sale el tren?|Во сколько отправляется поезд?
Un billete de ida, por favor.|Билет в одну сторону, пожалуйста.
Tengo una reserva.|У меня есть бронь.
¿Hay wifi?|Здесь есть вайфай?
Necesito un médico.|Мне нужен врач.
¿Hay una farmacia cerca?|Есть поблизости аптека?
Me duele la cabeza.|У меня болит голова.
¿Qué hora es?|Который час?
¿Quedamos a las seis?|Встретимся в шесть?
Me parece bien.|Меня устраивает.
Hasta la próxima.|До следующего раза.
Que tengas un buen día.|Хорошего тебе дня.`};
const catalog=Object.fromEntries(Object.entries(lists).map(([key,rows])=>[key,rows.trim().split('\n').map((row,i)=>{const [es,ru]=row.split('|');return {id:`${key}-${i}`,es,ru,cat:key}})]));
