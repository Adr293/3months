// Agrega nuevos poemas, cartas o imágenes aquí

const PAGES = [
  // ── Portada ──────────────────────────────────────────────────
  { type:'cover' },

  // ── Índice ───────────────────────────────────────────────────
  { type:'toc' },

  // ══ Poema 1 ══════════════════════════════════════════════════
  {
    type:'poem',
    title:'Recuerdo de dos mentes fragmentadas',
    lines:[
      'La necesidad de aire nos hace abrir una ventana',
      'El calor se acumula mientras estamos entre paredes',
      'Para alguno debimos olvidarnos de todo para mañana',
      'Para mí es algo que decidimos cuando caímos bajo nuestras propias redes',
      '',
      'La unión que nace entre el calor, la lluvia y hermosos suspiros',
      'Cuerpos que se encuentran una y otra vez sin notar nuestros latidos',
      'Ritmo acelerado, fuerte o pausado',
      'Miradas que se cruzan y de vez en cuando se hacen para un lado',
      '',
      'Pupilas dilatadas, bocas relajadas, cinturas cansadas',
      'Hice todo lo que está en mis manos para que te quedaras',
      'Débil ante tu piel, pero más fuerte mi razón',
      'Luego de un tiempo solo quería cuidar tu corazón',
      '',
      'Conocernos fue una casualidad tan bonita',
      'Que es triste no poder describirlo en limpio con palabras',
      'Sin embargo, descansa entre versos y tinta',
      'El recuerdo de la reunión de dos mentes quebradas',
    ]
  },

  {
    type:'poem',
    title:'En vela',
    lines:[
      'Cae la noche y espero bajo una calle larga tu llegar,',
      'apenas sales de tu actividad logro divisarte al cruzar.',
      'Vestida hermosa para la ocasión, tus ojos reflejando la luna llena',
      'puesta en el cielo oscuro de la noche combinan a la perfección.',
      '',
      'Saciar el hambre es importante,',
      'así que primero nos dirigimos a una cafetería.',
      'Lo primero en descubrir fue tu gusto por jugos extraños,',
      'para tomarlo en cuenta desde entonces hasta ahora.',
      '',
      'Terminamos y nos dirigimos al cine,',
      'para ver una película de esas que te dan miedo, pero te gustan ver.',
      'En la fila de compra de boletos un par de besos venían bien.',
      '',
      'Una vez en las butacas, caricias van, caricias vienen.',
      'Perdemos el foco en las pupilas uno del otro,',
      'mientras el deseo crece y las ganas se disparan.',
      '',
      'Disparados de la función al encuentro carnal,',
      'desprovistos de la gente y su ruido,',
      'alejados de cualquier sonido.',
      'Solo nosotros dos, acabando la velada en un encuentro que sacia nuestras ganas.',
      'A la vez que sentimientos van brotando poco a poco.',
    ]
  },

  // ══ Epístola 1 ═══════════════════════════════════════════════
  {
    type:'epistle',
    title:'Epístola I',
    lines:[
      'Hola amor, esta es una carta luego de tanto poema. El día de hoy cumplimos 3 mesecitos yeii, espero que sea un grato recuerdo de aquí en adelante todos los momentos que hemos vivido juntos.',
      'Aun recuerdo nuestra primera salida a la heladería, creo que siempre menciono los juguitos raros, pero poco hablo del nerviosismo que me daba estar contigo, por eso no hablaba mucho.',
      'Tú siempre sueles decir que eres algo introvertida, pero conmigo tú eres la más extrovertida de los dos, y de verdad agradezco eso, al final también entré en confianza contigo.',
      'Amo cuando me sueltas esa miradita hacia arriba con los ojitos bonitos, me hacen sentir muy querido, con tus abrazos, besitos y cada ataque de amor que desprendes hacia mí (incluyendo los pellízcones y mordidas).',
      'Espero sepas que tienes mi lealtad y cariño sincero, mi confianza y respeto por ti y nuestra relación, te amo.',
    ]
  },

  {
    type:'image',
    src:'img/1.jfif',
  },

  // ══ Poema 4 ══════════════════════════════════════════════════
  {
    type:'poem',
    title:'A través de tus ojos',
    lines:[
      'Cuan profundo puedo llegar viendo a través de tus ojos',
      'Ojos que me hipnotizan cada vez que se encuentran con los míos',
      'Dichoso el color que los envuelve, contrasta con el cielo y sus tonos rojos',
      'Cielo que me recuerda a tu sonrisa esbozándose como las curvas de los ríos',
      '',
      'Amor mío, por ti sonrío, sin ti mi corazón pasa frío',
      'Largas son las noches sin sentir tu calor,',
      'pero para buscarte nunca me hizo falta valor',
      'Tiempo hemos de encontrar, para nuestro encuentro poder concretar',
      'No importa el lugar, si nuestro amor podemos demostrar.',
      '',
      'Largo viaje, adversidades y alegrías',
      'Estaré contigo incluso los días que no rías',
      'Porque para amarte he de aceptar tus espinas',
      'Aunque sangre y me lesione con ellas,',
      'ambos sabemos que mi corazón no tiene capas finas',
      '',
      'Toma mi mano, caminemos juntos',
      'Tracemos el camino que mejor nos parezca, pero unidos',
      'Seamos un equipo de apoyo sin depender uno del otro',
      'Te amo con locura, aunque a veces parezca roto',
    ]
  },

  // ══ Poema 6 ══════════════════════════════════════════════════
  {
    type:'poem',
    title:'A tu ritmo',
    lines:[
      'Yace bailando mi corazón bajo el sonido de tu respiración',
      'Yace mi respiración bailando al ritmo de tu mirada',
      'Yace mi cordura bailando a la par de tus labios',
      'Yace bailando mi razón a la par de tu ser',
      '',
      'Un nuevo nacer, he de encontrar una nueva versión de mí',
      'Por ti',
      'He de desarmarme para volver a construir lo que alguna vez fui',
      '',
      'Bello es el paisaje que forman tus curvas a tu silueta amada tuya',
      'Bello la sensación de tus labios sobre los míos',
      'Bello el recuerdo de tus caricias en pleno frío',
      'Bello es amarte, cariño mío',
      '',
      'Si te conociera de otra forma',
      'Seguro te volvería a querer',
      'Porque no hay una norma',
      'En las cosas del amor no se puede prever',
    ]
  },

  // ══ Epístola 2 ═══════════════════════════════════════════════
  {
    type:'epistle',
    title:'Epístola II',
    lines:[
      'Hola amor, esta es mi segunda carta, quizás ya te hayas dado cuenta ahora, pero esto es un poemario.',
      'En realidad, un poemario tomaría como 30 poemas y sería en forma física, pero de momento te lo daré de forma virtual. Aunque, si tú lo deseas podría brindarte un ejemplar hecho a mano.',
      '¿Solo dímelo sí? La verdad he estado pensando mucho en cómo poder darte algo invaluable, y que sea irremplazable para ti.',
      'Y creo que escribir inspirándome en ti es algo que pocas personas podrían hacer.',
      'No quiero competir con nadie, solo quiero que puedas quererme tanto como yo lo hago, y para demostrarte mi cariño pues, ¿qué mejor manera de representarte en cada verso, no?',
      'Al menos ese fue mi razonamiento, depende de ti el cómo tomas el regalo. Si te gusta dímelo y si no también dímelo.',
      'Te amo, ¿no lo dudes sí?',
    ]
  },

  {
    type:'image',
    src:'img/2.jfif',
  },

  // ══ Poema 9 ══════════════════════════════════════════════════
  {
    type:'poem',
    title:'Pequeña despedida',
    lines:[
      'Qué vacías se sienten las calles mientras vamos caminando',
      'La brisa en la cara, la luna llena, reposas en mi hombro',
      'Mientras yo hago esfuerzo de doblar mi cuello para besarte la frente',
      'Aún así, manteniéndome alerta de mi alrededor',
      'Por si algún imprevisto se aparece',
      '',
      'Subiendo de camino a tu casa te aferras a mi pierna',
      'Intento caminar sin perder el equilibrio',
      'Las risas salen naturalmente, tu risa brilla ante mis ojos',
      'Me tomo un instante para besarte',
      'Instante que quisiera sea eterno',
      '',
      'Llegando a la entrada de tu casa nos envolvemos en un abrazo',
      'Siento palpitar tu pecho, sientes palpitar el mío',
      'Mis brazos se aferran al momento, que ninguno quisiera que acabara',
      '',
      'Nos soltamos, diciéndonos te amo cada quien toma su rumbo',
      'No puedo voltear, porque si lo hago me quedaría toda la vida contigo',
      'Sea en la entrada de tu casa, en el puente, o a la orilla del río.',
    ]
  },

  // ══ Poema 10 ═════════════════════════════════════════════════
  {
    type:'poem',
    title:'Mi excepción entre excepciones',
    lines:[
      'Nada puede comprar el valor de tu ser',
      'Ni mi esfuerzo, ni regalos',
      'Ni dinero, ni carros',
      'Nada se compara a lo que eres como persona',
      '',
      'El amor que brindas, el amor que pregonas',
      'Lo voluble que eres, y a pesar de ello no abandonas',
      '',
      'Una tormenta danzando en el caos',
      'Una rosa espinada en un campo de margaritas',
      'Un cuásar entre tanto polvo de nebulosas',
      'Un arcoíris en un cielo nublado',
      '',
      'Tú eres una excepción entre excepciones',
      'La fascinación e inspiración de los llamados a mis razones',
      '',
      'Eres maravillosa por donde lo vea',
      'Te quiero solo para mí, por más egoísta que sea',
    ]
  },

  // ══ Epístola 3 ═══════════════════════════════════════════════
  {
    type:'epistle',
    title:'Epístola III',
    lines:[
      'Nuevamente soy yo amor, hola.',
      'Escribo esta carta precisamente en el trabajo, ya que me vino la inspiración de pronto. Espero que estos mesecitos de montaña rusa en nuestra relación la hayas pasado bonito.',
      'Creo que me encanta pasar tiempo contigo haciendo literalmente hasta nada.',
      'Aún no te he contado mucho de mis sueños, pero me encantaría poder hablar contigo de ellos, aunque no sé cómo lo tomarías.',
      'Hace tiempo me preguntaste quién era yo antes de conocerte, y pues, podría darte diversas respuestas. Sin embargo, espero que me hayas podido conocer mejor con el tiempo hasta ahora, esto es lo que soy.',
      'Yo por mi lado he podido conocerte mejor creo, espero me des ese mérito, y me encantas aún más.',
      'Ambos tenemos cosas que mejorar, pero sé que lo haremos con el tiempo. Tengo mucha emoción por tu futuro, quiero verte crecer, que puedas valerte por ti misma.',
      'Estoy a tu lado, para ti mi amor, te amo.',
    ]
  },

  {
    type:'image',
    src:'img/3.jfif',
  },

  // ══ Poema 11 ═════════════════════════════════════════════════
  {
    type:'poem',
    title:'Deseo',
    lines:[
      'Mis manos presionando tu cadera son para recordarte que me perteneces',
      'Soy la razón de que la temperatura de tu cuerpo se dispare',
      'Tus labios se humedecen gracias a los míos',
      'Y tus piernas ceden al paso de mi tacto',
      '',
      'Cada empuje es un recordatorio del deseo que tengo de ti',
      'Cada suspiro que sueltas es un suplicio de tu cuerpo pidiendo más',
      'Cada beso en el cuello es el nivel de lujuria que despiertas en mí',
      'Cada vez que tiro de tu cabello son las ganas de tomarte hasta verte llorar',
      '',
      'Te pones encima creyendo controlar la situación',
      'Mientras uso mi boca lamiendo aquellas que saltan mientras tú te mueves',
      'Tu cara de placer solo hace que mis manos se activen',
      '',
      'El chapoteo de nuestros cuerpos se escucha como todo un gozar',
      'Mi lengua bajando para darte placer',
      'Tus piernas se mueven en un caos de sensaciones',
      '',
      'Ingreso nuevamente en ti con el fin de culminar',
      'Aumento el ritmo mientras haces sonidos que me encantan escuchar',
      'En donde sea que lo hayas pedido espero que lo hayas podido disfrutar',
    ]
  },

  // ══ Poema 12 ═════════════════════════════════════════════════
  {
    type:'poem',
    title:'Sensaciones',
    lines:[
      'Rayos del sol atraviesan la ventana de mi oficina',
      'Un pensamiento recorre mi cabeza insistentemente',
      'Camino y la carga se disipa, música ayuda, pero no quita',
      'Me mezclo entre el tráfico y ruido de la gente',
      '',
      'Una rutina ordinaria parece avecinar siempre',
      'No me molesta, pero sí asusta la monotonía de los días',
      'Otra carga a mi cabeza se hace presente',
      'No hay respiro o calma en esta vía',
      '',
      'Las ganas de vivir están presentes, el querer crecer latente',
      'Las formas de darte un mejor futuro son suficientes',
      'Si tengo que hacerlo para poder amarte correctamente',
      'Aunque a veces me gane el peso de la mente',
      '',
      'No quiero traiciones, ni mentiras o engaños',
      'Quiero amar sin que la cabeza me coma con miedos',
      'Y por ahora vienes logrando que mi cabeza se sienta en paz',
      'Te lo agradezco en serio',
      '',
      'Encontraré la forma de darte lo mejor',
      'Lo estoy intentando ahora',
      'Si no es suficiente dímelo',
      'Antes de que se nos pasen más las horas',
      '',
      'Te amo',
    ]
  },

  // ══ Epístola 4 ═══════════════════════════════════════════════
  {
    type:'epistle',
    title:'Epístola IV',
    lines:[
      'Hola mor.',
      '¿Sabes que a las cartas también se les dice epístolas? Eso me enseñaron en secundaria, y suena bonito así que lo puse.',
      'A veces me doy cuenta que tu cabecita está hecha un caos, y sé que no es mi trabajo, pero me gustaría ayudarte a contenerte.',
      'Verte estresada, de mal humor, sé que son solo momentos, pero no quiero que te hagas daño pese a ello.',
      'Sé que tú puedes sola con todo, pero no por ello me gustaría que te autodestruyas, porque te valoro demasiado y te amo, y porque hay gente que te aprecia lo suficiente.',
      'Cuentas con nosotros amor, no estás sola. No quiero que tengas más arrepentimientos en la vida, quiero verte feliz.',
      'Te amo.',
    ]
  },

  {
    type:'image',
    src:'img/4.jfif',
  },

  // ══ Poema 14 ═════════════════════════════════════════════════
  {
    type:'poem',
    title:'Maquillada',
    lines:[
      'Rubor suave en los pómulos',
      'Labial de un rosa en tono cálido',
      'Polvo sutil para esparcir en la piel',
      'Corrector eliminando límites',
      '',
      'Peinas con delicadeza tus lacios cabellos',
      'El espejo para el delineado no puede faltar',
      'Perfume en el cuello, cuerpo y demás',
      'Mover hacia dentro tus labios para terminar de pintar',
      '',
      'Pantalón ceñido a tu sensual figura',
      'Blusa ligera combina bien',
      'Zapatillas de calzado pequeño para esos piecitos',
      'Cartera negra combina también',
      '',
      'Mujer hermosa camina en la acera',
      'Paso a paso se acerca a mí',
      'Si supiera que todo su maquillaje que lleva',
      'Mis ataques de besos los quitarían en sí',
      '',
      'Preciosidad maquillada, hermosura casual',
      'Me encantas más que nada, producida o al natural',
    ]
  },

  // ══ Poema 15 ═════════════════════════════════════════════════
  {
    type:'poem',
    title:'Tú me vienes bien',
    lines:[
      'Un café, o vino, ambos me vienen bien',
      'Pero mejor me vienen tus labios',
      'La sensación de tus abrazos',
      'El escucharte despertar',
      '',
      'El sonido de tu cuerpo al chocar',
      'Tus mordidas al caminar',
      'Tus pellizcos de improvisar',
      'El entrelazar nuestras manos al pasear',
      '',
      'El momento en el que estamos juntos al comer',
      'Las charlas de mejora, incluso las triviales',
      'El cómo te recuestas en mí al descansar',
      '',
      'Tu aroma, olor y la sensación de tu estar',
      'Tú me vienes bien, sea como sea en mi vida debes estar.',
      '',
      'Te amo.',
    ]
  },

  // ══ Epístola 5 ═══════════════════════════════════════════════
  {
    type:'epistle',
    title:'Epístola V',
    last:true,
    lines:[
      'Esta es la última carta amor, espero que te haya gustado y hayas podido entender la mayoría de poemas.',
      'Felices 3 mesecitos, gracias por aguantar a este loco por ti, haces que mis días sean más bonitos amor ♡',
      'Espero de corazón que sean muchos mesecitos más y que sigamos creciendo juntos, tanto como pareja, como personas.',
      'A pesar de los días difíciles ambos luchamos por sacar esto adelante, porque somos un equipo.',
      'Te amo mi chiquitita, y me encantas como no tienes idea.',
    ]
  },
  {
    type:'image',
    src:'img/5.jfif',
  },
];