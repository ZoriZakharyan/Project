/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('TemsBodies', [{
      bodyName: 'Разрешить автобусам совершать остановки по требованию',
      post: 'Пунктом 3 статьи 19 Федерального закона от 08.11.2007 № 259-ФЗ «Устав автомобильного транспорта и городского наземного электрического транспорта» регулярные перевозки пассажиров и багажа подразделяются на 2 вида: 1.С посадкой и высадкой пассажиров только в установленных остановочных пунктах (автобусы).2.С посадкой и высадкой пассажиров в любом не запрещенном ПДД месте (маршрутное такси)',
      countmin: 0,
      count: 0,
      data: true,
      tems_id: 1,
      user_id: 1,
    },
    {
      bodyName: 'Все городские автобусы оборудовать ремнями безопасности',
      post: ' Сочи. 2020 г. Российская Швейцария. И все пассажирские автобусы городских маршрутов эксплуатируются без ремней безопасности для пассажиров. И это при скорости 90-100 км/ч на объездной трассе Центр - Адлер. Что в случае ДТП грозит пассажирам такого автобуса травмами различной степени тяжести, вплоть до летального исхода. Во всех городах России, в том числе и в Москве, городской транспорт эксплуатируется с пассажирскими сиденьями, не оборудованными ремнями безопасности. Это прямая угроза безопасности, жизни и здоровью пассажиров.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 1,
      user_id: 1,
    },
    {
      bodyName: 'Краснодарские перевозчики не имеют морального права на повышение стоимости проезда',
      post: ' Произошла парадоксальная ситуация: стоимость проезда повышают прежде всего те перевозчики, которые хуже всего работают и регулярно не соблюдают условия конкурсной документации, а также не соблюдают законы - это печально известные члены Союза транспортников Кубани. Эти перевозчики не имеют никакого морального права повышать плату за проезд!',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 1,
      user_id: 1,
    },

    {
      bodyName: 'Инициатива образования в составе Российской Федерации нового субъекта',
      post: '1. Инициатива образования в составе Российской Федерации нового субъекта принадлежит субъектам Российской Федерации, на территориях которых образуется новый субъект Российской Федерации (далее - заинтересованные субъекты Российской Федерации).',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 2,
      user_id: 1,

    },
    {
      bodyName: 'Сотрудничество со школами',
      post: 'Подготовка и обучение преподавательских кадров — «Обучение преподавателей», мы следим за тем, чтобы преподаватели обладали точной и полезной информацией, соответствующей передовым методам согласно исследованиям наших специалистов профильного направления.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 2,
      user_id: 1,
    },

    {
      bodyName: 'Знания и обучение – наиболее ценные возобновляемые ресурсы, имеющиеся в распоряжении человечества. Именно они позволяют отвечать на возникающие вызовы и находить нестандартные решения. При этом образование не ограничивается реагированием на изменения, происходящие в мире, оно преображает мир.',
      post: 'Эта инициатива позволяет мобилизовать разнообразные формы бытия и познания для того, чтобы задействовать коллективный разум человечества. Основным механизмом для этого станет широкий и открытый консультативный процесс, в котором примут участие молодежь, представители педагогического сообщества, гражданского общества, правительств, деловых кругов и другие заинтересованные стороны.',
      count: 0,
      countmin: 0,
      data: false,
      tems_id: 2,
      user_id: 1,
    },
    {
      bodyName: 'Проблема финансирования',
      post: 'Создание Инициативы ACT вызвало беспрецедентную мобилизацию международной поддержки, благодаря чему ей было предоставлено 17,8 млрд долл. США, однако Инициатива ACT продолжает испытывать нехватку финансирования и до конца 2021 г. нуждается в 16,7 млрд долл. США (по данным на 9 июля 2021 г.).',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 3,
      user_id: 1,
    },
    {
      bodyName: 'Как справедливо распределить расходы',
      post: 'Чтобы ликвидировать нехватку финансирования, сопредседатели Координационного совета Инициативы ACT – министры финансов Южной Африки и Норвегии – вместе с членами Совета подготовили предложение о распределении финансовой поддержки между странами. Это поможет закрепить за каждой из 89 стран определенную долю финансирования Инициативы ACT как глобального общественного блага. Здесь можно подробнее ознакомиться с методикой проведенных расчетов. ',
      count: 0,
      countmin: 0,
      data: false,
      tems_id: 3,
      user_id: 1,
    },
    {
      bodyName: 'ВОЗ-Европа определяет 4 флагманских инициативы, которые дополнят Европейскую программу работы, в которой определены приоритеты здравоохранения на ближайшие 5 лет.',
      post: 'Эти флагманские инициативы призваны ускорить перемены, мобилизуясь вокруг важнейших вопросов, которые занимают видное место в повестке дня государств-членов и в отношении которых заметная политическая приверженность на высоком уровне может иметь решающее значение.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 3,
      user_id: 1,
    },
    {
      bodyName: 'СЗГМУ им. И.И. Мечникова участвует в инициативе «Наука рядом» в рамках проведения в России Десятилетия науки и технологий',
      post: 'В целях повышения доступности информации о достижениях и перспективах российской науки для граждан Российской Федерации в рамках инициативы «Наука рядом» Плана проведения в Российской Федерации Десятилетия науки и технологий, утверждённого распоряжением Правительства Российской Федерации от 25 июля 2022 года №2036-р, в СЗГМУ им. И.И. Мечникова размещены мобильные раздвижные стенды с портретами молодых ученых университета Евгения Трофимова и Газиса Туфатулина и описанием их научных достижений.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 4,
      user_id: 1,
    },
    {
      bodyName: 'Инициативы Десятилетия науки и технологий представят на конгрессе молодых ученых в Сириусе',
      post: 'МОСКВА, 24 ноября. /ТАСС/. Выставка проектов, разработанных в рамках реализации 18 инициатив Десятилетия науки и технологий, пройдет на II Конгрессе молодых ученых в Сириусе. Об этом сообщили в четверг в оргкомитете конгресса.',
      count: 0,
      countmin: 0,
      data: false,
      tems_id: 4,
      user_id: 1,
    },
    {
      bodyName: 'Улицы vs дороги: островки безопасности',
      post: 'Предложения по корректировке нормативных документов для изменения правил применения островков безопасности. ',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 5,
      user_id: 1,
    },
    {
      bodyName: 'Улицы vs дороги: ширина полос',
      post: 'Предложения по корректировке нормативных документов для изменения ширин полос движения на улицах различных типов и категорий',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 5,
      user_id: 1,
    },
    {
      bodyName: 'МВД попросило увеличить в два раза целевой показатель по смертности в ДТП к 2024 году',
      post: 'Вместо текущей цели на 2024 г. – 4 смерти в ДТП на 100 000 населения – МВД предлагает целевой норматив 8,4 смерти на 100 000.',
      count: 0,
      countmin: 0,
      data: false,
      tems_id: 5,
      user_id: 1,
    },
    {
      bodyName: 'ГКУ Центр социальной защиты населения по Ольховскому району',
      post: 'В соответствии с приказом комитета социальной защиты населения Волгоградской области № 629 от 31.03.2022г.  О внесении изменений в приказ № 816 от 28.04.2020 г. О дополнительных мерах по предупреждению возникновения и распространения новой коронавирусной инфекции, вызванной 2019-nCov в центрах социальной защиты населения Волгоградской области, с 01.04.2022 г. прием граждан осуществляется как по предварительной записи, так и в порядке живой очереди. ',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 6,
      user_id: 1,
    },
    {
      bodyName: 'Разрешить автобусам совершать остановки по требованию',
      post: 'Пунктом 3 статьи 19 Федерального закона от 08.11.2007 № 259-ФЗ «Устав автомобильного транспорта и городского наземного электрического транспорта» регулярные перевозки пассажиров и багажа подразделяются на 2 вида: 1.С посадкой и высадкой пассажиров только в установленных остановочных пунктах (автобусы).2.С посадкой и высадкой пассажиров в любом не запрещенном ПДД месте (маршрутное такси)',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 7,
      user_id: 1,
    },
    {
      bodyName: 'Все городские автобусы оборудовать ремнями безопасности',
      post: ' Москва. 2020 г. Российская Швейцария. И все пассажирские автобусы городских маршрутов эксплуатируются без ремней безопасности для пассажиров. И это при скорости 90-100 км/ч на объездной трассе Центр - Адлер. Что в случае ДТП грозит пассажирам такого автобуса травмами различной степени тяжести, вплоть до летального исхода. Во всех городах России, в том числе и в Москве, городской транспорт эксплуатируется с пассажирскими сиденьями, не оборудованными ремнями безопасности. Это прямая угроза безопасности, жизни и здоровью пассажиров.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 7,
      user_id: 1,
    },
    {
      bodyName: 'Знания и обучение – наиболее ценные возобновляемые ресурсы, имеющиеся в распоряжении человечества. Именно они позволяют отвечать на возникающие вызовы и находить нестандартные решения. При этом образование не ограничивается реагированием на изменения, происходящие в мире, оно преображает мир.',
      post: 'Эта инициатива позволяет мобилизовать разнообразные формы бытия и познания для того, чтобы задействовать коллективный разум человечества. Основным механизмом для этого станет широкий и открытый консультативный процесс, в котором примут участие молодежь, представители педагогического сообщества, гражданского общества, правительств, деловых кругов и другие заинтересованные стороны.',
      count: 0,
      countmin: 0,
      data: false,
      tems_id: 8,
      user_id: 1,
    },
    {
      bodyName: 'Проблема финансирования',
      post: 'Создание Инициативы ACT вызвало беспрецедентную мобилизацию международной поддержки, благодаря чему ей было предоставлено 17,8 млрд долл. США, однако Инициатива ACT продолжает испытывать нехватку финансирования и до конца 2021 г. нуждается в 16,7 млрд долл. США (по данным на 9 июля 2021 г.).',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 8,
      user_id: 1,
    },
    {
      bodyName: 'Инициатива против введения дополнительных налогов на покупки в иностранных интернет-магазинах, а также против снижения таможенного лимита в 1000 евро на покупки товаров для личных нужд',
      post: 'В настоящее время широко и резонансно обсуждается очередная законодательная инициатива: введение дополнительных налогов на покупки физических лиц в интернет-магазинах за границей и/или снижение установленного в настоящее время таможенного лимита в 1000 евро на человека в месяц на покупки для личных нужд.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 9,
      user_id: 1,
    },
    {
      bodyName: 'Порядок, сроки и формы общественного обсуждения',
      post: 'Общий порядок, сроки и формы общественного обсуждения проектов нормативных правовых актов утверждены постановлением Правительства Российской Федерации от 25 августа 2012 г. № 851 О порядке раскрытия федеральными органами исполнительной власти информации о подготовке проектов и нормативных правовых актов и результатах их общественного обсуждения.',
      count: 0,
      countmin: 0,
      data: true,
      tems_id: 9,
      user_id: 1,
    }], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('TemsBodies', null, {});
  },
};
