const articlesList = 
[
    {
        level: '****',
        name: `Статья 6.1 (F/S/R)`,
        title: `Нанесение тяжких телесных повреждений`,
        desc: `
        Умышленное нанесение телесных повреждений. Является преступлением средней степени тяжести.
        <br>Срок лишения свободы - до 24-х месяцев
        <br>Выход под залог - возможен при уплате 75.000$ и выплате компенсации 15.000$.
        <br>Приоритет розыска - 3
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 6.1.1 (F/S/R)`,
        title: `Нанесение тяжких телесных повреждений <span>ПОТЕРЮ СОЗНАНИЯ</span>`,
        desc: `
        Умышленное нанесение тяжких телесных повреждений, повлекшие за собой потерю сознания. Является тяжким преступлением .
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - возможен при уплате 100.000$
        <br>Приоритет розыска - 4
        `,
        parent: `uk`
    },
    {
        level: '**',
        name: `Статья 6.2.1 (F/S)`,
        title: `Посягательство на жизнь человека`,
        desc: `
        <br><span>Часть 1.</span> Попытка убийства, то есть умышленное посягательство на жизнь человека, в том числе повлекшее за собой потерю сознания, совершенное с использованием холодного и/или огнестрельного оружия является тяжким преступлением с изъятием лицензии на оружие.
        <br>Срок лишения свободы - до 32-х месяцев.
        <br>Выход под залог - возможен при уплате 100.000$
        <br>Приоритет розыска - 4.
        <br><span>Часть 2.</span> То же деяние, совершенное в отношении двух или более лиц является особо тяжким преступлением с изъятием лицензии на оружие.
        <br>Срок лишения свободы - до 40-ка месяцев
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '**',
        name: `Статья 6.6 (F/S)`,
        title: `Угроза расправой над гражданским лицом`,
        desc: `
        Угроза расправой над гражданским лицом, либо угроза применения насилия или оружия в отношении его близких., является тяжким преступлением .
        <br>Срок лишения свободы - до 24 месяцев.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 7.2 (R)`,
        title: `Клевета`,
        desc: `
        Клевета, то есть распространение заведомо ложных сведений, порочащих честь и достоинство другого лица или подрывающих его репутацию, является преступлением легкой степени тяжести.
        <br>Срок лишения свободы - до 16-ти месяцев.
        <br>Выход под залог - возможен при уплате 50.000$.
        <br>Приоритет розыска - 2.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 7.4 (R)`,
        title: `Клевета в преступлении`,
        desc: `
        Клевета, соединенная с обвинением лица в совершении преступления.
        <br>Срок лишения свободы - до 16-ти месяцев.
        <br>Выход под залог - возможен при уплате 50.000$.
        <br>Приоритет розыска - 2.
        `,
        parent: `uk`
    },
    {
        level: '**',
        name: `Статья 9.5 (R)`,
        title: `Запугивание, шантаж, либо угроза убийством`,
        desc: `
        Запугивание, шантаж, либо угроза убийством, при наличии реальных оснований опасаться осуществления таких действий. Является особо тяжким преступлением .
        <br>Срок лишения свободы - до 40-ка месяцев.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 10.6 (F/R/S)`,
        title: `Неправомерное завладение автомобилем`,
        desc: `
        Неправомерное завладение автомобилем или иным транспортным средством как с целью хищения, так и без является преступлением средней степени тяжести.
        <br>Примечание: за нахождение в розыске на основании видеозаписей с камер видеонаблюдения штата с причиной “Взлом Автомобиля” ответственность наступает согласно настоящей статье.
        <br>Срок лишения свободы - до 32-х месяцев.
        <br>Выход под залог - возможен при уплате 100.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '**',
        name: `Статья 10.7 (R/F/S)`,
        title: `Умышленные повреждение или уничтожение чужого имущества`,
        desc: `
        Умышленные уничтожение или повреждение чужого имущества, совершенные из хулиганских побуждений, путем поджога, взрыва или иным способом является тяжким преступлением .
        <br>Срок лишения свободы - до 40-ка месяцев
        <br>Выход под залог - возможен при уплате 125.000$, с возмещением ущерба.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 10.8 (F/R/S)`,
        title: `Передвижение на транспортном средстве в угоне`,
        desc: `
        Передвижение на транспортном средстве находящемся в угоне.
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - возможен при уплате 100.000$.
        <br>Приоритет розыска - 4.
        <br>Примечания:
        <br>1) При отсутствии регистрационного номера и/или VIN-номера у транспортного средства, оно признается угнанным при наличии ориентировки от диспетчера и при совпадении марки и цвета данного транспортного средства с маркой и цветом транспортного средства в ориентировке.
        <br>2) Если регистрационный номер транспортного средства был изменен на другой, но имеется ориентировка от диспетчера, совпадает марка и цвет данного транспортного средства с маркой и цветом транспортного средства в ориентировке, то необходимо сравнить регистрационный номер с VIN-номером по базе данных, в том случае, если они не совпадут транспортное средство признаётся угнанным.
        <br>3) Если VIN-номер транспортного средства был изменён на другой, но имеется ориентировка от диспетчера, совпадает марка и цвет данного транспортного средства с маркой и цветом транспортного средства в ориентировке, то при обнаружении изменения VIN-номера транспортное средство считается угнанным.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 10.9 (F/R)`,
        title: `Умышленное повреждение или уничтожение государственного имущества`,
        desc: `
        Умышленное уничтожение или повреждение государственного имущества, совершенное из хулиганских побуждений, путем поджога, взрыва или иным способом. Является тяжким преступлением .
        <br>Срок лишения свободы - 32-х месяцев
        <br>Выход под залог - возможен при уплате 100.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '**',
        name: `Статья 11.3 (U)`,
        title: `Азартных играх в общественных местах`,
        desc: `
        Организация, проведение и участие в азартных играх в общественных местах, является преступлением легкой степени тяжести.
        <br>Срок лишения свободы - до 16-ти месяцев.
        <br>Выход под залог - возможен при уплате 50.000$.
        <br>Приоритет розыска - 2.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 12.4 (F/S)`,
        title: `Ложное сообщение создающих опасность гибели людей`,
        desc: `
        Заведомо ложное сообщение о готовящихся взрыве, поджоге или иных действиях, создающих опасность гибели людей, причинения значительного имущественного ущерба либо наступления иных общественно опасных последствий, является тяжким преступлением.
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - Возможен при уплате 100.000$
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 12.6 (F/R/S)`,
        title: `Незаконное нахождение на охраняемой территории ОРАНЖ`,
        desc: `
        Незаконное нахождение на охраняемой территории, а именно в желтой зоне (обозначенной на картах) в соответствии с законодательством штата San-Andreas, а именно законом “О государственных территориях” штата San Andreas. Является преступлением легкой степени тяжести.
        <br>Срок лишения свободы - до 16-ти месяцев.
        <br>Выход под залог - возможно при уплате 50.000$.
        <br>Приоритет розыска - 2.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 12.6.1 (F/R/S)`,
        title: `Незаконное проникновение на закрытую территорию`,
        desc: `
        Незаконное проникновение или нахождение на закрытой территории в соответствии с законодательством штата San-Andreas, а именно законом “О государственных территориях” штата San Andreas. Является преступлением средней степени тяжести.
        <br>Срок лишения свободы - до 24-х месяцев.
        <br>Выход под залог - возможно при уплате 50.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 12.6.2 (F/R/S)`,
        title: `Незаконное проникновение на объект особой важности`,
        desc: `
        Незаконное проникновение или нахождение на объекте особой важности в соответствии с законодательством штата San-Andreas, а именно законом “О государственных территориях” штата San Andreas. Является тяжким преступлением.
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - возможно при уплате 100.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 12.7 (F/R/S)`,
        title: `Незаконное использование или ношение любых видов оружия,боеприпасов`,
        desc: `
        Незаконные приобретение, передача, сбыт, хранение, перевозка, использование или ношение любых видов оружия, боеприпасов, взрывчатки или иных взрывчатых веществ или устройств, тяжелых бронежилетов, а также спецсредств, является особо-тяжким преступлением
        <br>Срок лишения свободы - до 32-ух месяцев.
        <br>Выход под залог - возможно при уплате 75.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 12.8 (F/S)`,
        title: `Государственное имущество`,
        desc: `
        <br><span>Часть 1.</span> Использование, хранение гражданскими лицами спец. средств государственного образца, тяжелый бронежилет, тазер, дубинка, и прочее государственное имущество, имеющие серийные номера государственного образца.
        <br>Срок лишения свободы - до 40-ка месяцев с изъятием лицензии на оружие. Является особо тяжкой преступлением.
        <br>Выход под залог - возможен при уплате - невозможен.
        <br>Приоритет розыска - 5.
        
        <br><span>Часть 2.</span> Хищение, совершенное сотрудниками государственных структур, государственных спецсредств, бронежилетов и огнестрельного оружия, комплектующих деталей к данным предметам, боеприпасов, взрывчатых веществ или взрывных устройств, изъятых в ходе служебной деятельности и/или находящихся на складе улик (вещественных доказательств) или подлежащее уничтожению, является особо тяжким преступлением.
        <br>Срок лишения свободы - до 40-ка месяцев. и изъятие лицензии на оружие.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 13.1 - 13.2 (F/R/S)`,
        title: `Хранение наркотических средств`,
        desc: `
        <br><span>13.1</span>
        <br>Незаконное приобретение, хранение, перевозка, а также сбыт наркотических средств веществ от 10 до 40 грамм, является преступлением средней степени тяжести.
        <br>Срок лишения свободы - до 24-х месяцев.
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.

        <br><span>13.2</span>
        <br>Незаконное приобретение, хранение, перевозка, а также сбыт наркотических веществ 40 грамм и более, является тяжким преступлением.
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - возможен при уплате 100.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 13.3 (F/R/S)`,
        title: `Употребление наркотических средств в общественных местах`,
        desc: `
        Употребление наркотических средств в общественных местах, является преступлением легкой степени тяжести.
        <br>Срок лишения свободы - до 16-ти месяцев.
        <br>Выход под залог - возможен при уплате 25.000$.
        <br>Приоритет розыска - 1-2.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 13.4 (F/S)`,
        title: `Употребление, приобретение наркотических средств сотрудниками гос`,
        desc: `
        Употребление, приобретение, хранение, перевозка, а также сбыт любых наркотических средств сотрудниками государственных организаций, является тяжким преступлением.
        <br>Примечание: При получении нелегальных предметов во время исполнения служебных обязанностей, лицо освобождается от ответственности при наличии обоснованных доказательств.
        <br>Срок лишения свободы - до 32-х месяцев
        <br>Выход под залог - возможен при уплате 100.000$
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `15.1 | 15.2 | 15.3 | 15.4 | 15.5 | 15.6 | 16.5 | 17.5? |`,
        title: `Сажать гос`,
        desc: `
        <a href="https://forum.majestic-rp.ru/threads/ugolovnyj-kodeks-shtata-san-andreas.19674/">ССЫЛКА</a>
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 16.9 (F/S)`,
        title: `Заведомо ложный донос о совершении преступления`,
        desc: `
        Заведомо ложный донос о совершении преступления, является преступлением средней степени тяжести.
        <br>Срок лишения свободы - до 24-ёх месяцев.
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 16.13 (F/S)`,
        title: `Сокрытие улик и/или уничтожение улик`,
        desc: `
        Сокрытие улик и/или уничтожение улик, является особо тяжким преступлением.
        <br>Срок лишения свободы - до 40-ка месяцев.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.1 (F/R/S)`,
        title: `Посягательство на жизнь сотрудника гос`,
        desc: `
        Посягательство на жизнь сотрудника государственной организации, а равно их близких, в связи с исполнением им своих должностных обязанностей либо из мести за таковые обязанности, является особо тяжким преступлением и карается изъятием лицензии на оружие .
        <br>Срок лишения свободы - до 40-ка месяцев..
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 5.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.2 (F/R/S)`,
        title: `Угроза расправой над сотрудником государственной`,
        desc: `
        Угроза расправой над сотрудником государственной организации и/или угроза применения насилия или оружия в отношении его близких в связи с исполнением им своих должностных обязанностей, является тяжким преступлением.
        <br>Срок лишения свободы - до 32-ух месяцев.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.3 (F/R/S)`,
        title: `Оскорбление сотрудника гос`,
        desc: `
        Оскорбление сотрудника (-ов) государственной структуры, при исполнении им (-и) своих служебных обязанностей. Является преступлением средней тяжести.
        <br>Срок лишения свободы - до 24-х месяцев.
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.5 (F/R/S)`,
        title: `Самоуправство`,
        desc: `
        Самоуправство, то есть самовольное, вопреки установленному законом или иным нормативным правовым актом порядку совершение каких-либо действий, является преступлением средней степени тяжести.
        <br>Срок лишения свободы - до 24-её месяцев..
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.6 (F/R)`,
        title: `Неповиновение законному требованию`,
        desc: `
        Неповиновение законному требованию или приказу, распоряжению правомочного лица обладающего такими правами согласно Законодательной Базе, является тяжким преступлением.
        <br>Срок лишения свободы - до 32 месяцев.
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 17.7 (R/U)`,
        title: `Уклонение от уплаты штрафной санкции`,
        desc: `
        Уклонение от уплаты штрафной санкции, отказ от возмещения ущерба согласно законодательству, равно как невозможность оплаты установленной Административным или Уголовным кодексом суммы такой штрафной санкции, является преступлением средней степени тяжести .
        <br>Срок лишения свободы - до 24-ти месяцев..
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.9 (F/R/S)`,
        title: `Провокация гос`,
        desc: `
        Провокация государственного служащего при исполнении, путем его отвлечения или помехи выполнения им своих служебных обязанностей, является преступлением средней тяжести.
        <br>Срок лишения свободы - до 24 месяцев..
        <br>Выход под залог - возможен при уплате 75.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.10 (F/R)`,
        title: `Попытка побега, равное побегу`,
        desc: `
        Попытка побега, равное побегу с места и/или во время задержания/ареста. Является преступлением Средней тяжести.
        <br>Срок лишения свободы - до 24 месяцев.
        <br>Выход под залог - возможен при уплате 50.000$.
        <br>Приоритет розыска - 3.
        `,
        parent: `uk`
    },
    {
        level: '***',
        name: `Статья 17.11 (F/R)`,
        title: `Помеха движению военной колонны`,
        desc: `
        Помеха движению военной колонны и/или организованного неприкосновенным лицом кортежа. Является преступлением средней степени тяжести.
        <br>Срок лишения свободы - 24-ёх месяцев.
        <br>Выход под залог - возможен при уплате 75.000 $.
        <br>Приоритет розыска - 3
        `,
        parent: `uk`
    },
    {
        level: '****',
        name: `Статья 17.12 (F/R/S)`,
        title: `Применение насилия в отношении сотрудника гос`,
        desc: `
        Применение насилия в отношении сотрудника государственной структуры, находящегося при исполнении служебных обязанностей, является тяжким преступлением.
        <br>Срок лишения свободы - до 32-ух месяцев.
        <br>Выход под залог - невозможен.
        <br>Приоритет розыска - 4.
        `,
        parent: `uk`
    },

]
// {
    //     level: '',
    //     name: ``,
    //     title: ` <span><br>Залог() <br>Розыск()</span>`,
    //     desc: `
    //     `,
    //     parent: `uk`
    // },  