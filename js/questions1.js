const questions = [
    {
        text: "Керуючись яким документом, Верховна Рада прийняла Конституцію України?",
        answers: [
            "А) Актом проголошення незалежності України",
            "Б) Декларацією про державний суверенітет України",
            "В) Декларацією про національний суверенітет кримськотатарського народу",
            "Г) Законом \"Про мови в УРСР\""
        ],
        type: 'radio'
    },
    {
        text: "Хто очолив Верховну Раду України II скликання?",
        answers: [
            "А) Леонід Кравчук",
            "Б) Олександр Мороз",
            "В) Іван Плющ",
            "Г) Леонід Кучма"
        ],
        type: 'radio'
    },
    {
        text: "Якого року Україна вийшла з рублевої зони?",
        answers: [
            "А) 1990 року",
            "Б) 1991 року",
            "В) 1992 року",
            "Г) 1993 року"
        ],
        type: 'radio'
    },
    {
        text: "Яку назву має злочинне використання державними чиновниками та іншими посадовими особами своїх формальних прав із метою особистого збагачення?",
        answers: [
            "А) Корупція",
            "Б) Люстрація",
            "В) Мафія",
            "Г) Приватизація"
        ],
        type: 'radio'
    },
    {
        text: "Яку назву отримала частина економіки, яка працює поза межами державного контролю, регулювання, не сплачує обов'язкових платежів до бюджету країни?",
        answers: [
            "А) Директивна економіка",
            "Б) Ринкова економіка",
            "В) Тіньова економіка"
        ],
        type: 'radio'
    },
    {
        text: "Коли була введена в обіг ця банкнота?",
        image: "./src/grn.jpeg",
        answers: [
            "А) 1992 р.",
            "Б) 1994 р.",
            "В) 1995 р.",
            "Г) 1996 р."
        ],
        type: 'radio'
    },
    {
        text: "Установіть події у хронологічній послідовності:",
        answers: [
            "запровадження нової національної валюти гривні",
            "Переобрання Леоніда Кучми на посаді Президента України",
            "ухвалення Конституції України",
            "Підписання угоди про створення Співдружності Незалежних Держав (СНД)"
        ],
        type: "queue"
    },
    {
        text: "У 1995 - 1998 рр. здійснювалася..?",
        answers: [
            "А) сертифікатна приватизація",
            "Б) тіньова приватизація",
            "В) грошова приватизація",
            "Г) сільськогосподарська приватизація"
        ],
        type: "multi"
    },
    {
        text: "Коли втратила чинність Конституція УРСР 1978 року?",
        answers: [
            "А) 16 липня 1990 р.",
            "Б) 24 серпня 1991 р.",
            "В) 1 грудня 1991 р.",
            "Г) 28 червня 1996 р."
        ],
        type: "radio"
    },
    {
        text: "Дата ухвалення Закону України \"Про Збройні Сили України\"",
        answers: [
            "А) 16 липня 1990 р.",
            "Б) 6 грудня 1991 р.",
            "В) 28 червня 1996 р.",
            "Г) 1 грудня 1991 р."
        ],
        type: "radio"
    },
    {
        text: "Який фактор відіграв вирішальну роль у проведенні в Україні позачергових президентських виборів 1994 р.?",
        answers: [
            "А) оголошення імпічменту діючому президенту",
            "Б) загострення політичної та економічної кризи",
            "В) ухвалення нової Конституції незалежної України",
            "Г) добровільна відставка глави держави"
        ],
        type: "radio"
    },
    {
        text: "У липні 1994 р. Президентом України обрано",
        answers: [
            "./src/symonenko.png",
            "./src/kravchyk.jpg",
            "./src/chornovil.jpg",
            "./src/kuchma.png"
        ],
        type: "radio"
    },
    {
        text: "Які завдання державотворення в Україні було вирішено в першій половині 1990-х років? (3 правильні відповіді)",
        answers: [
            "А) побудовано соціально орієнтовану ринкову економіку",
            "Б) визначено державні кордони, регламентовано режим і порядок їх охорони",
            "В) інтегровано українську економіку в європейські та світові економічні структури",
            "Г) створено власні Збройні сили, організовано органи безпеки та правопорядку",
            "Ґ) прийнято Конституцію незалежної України",
            "Д) сформовано інститут громадянства, національну символіку визнано державною"
        ],
        type: "multi"
    },
    {
        text: "Який документ закріплював таке положення: «Україна є суверенна і незалежна, демократична, соціальна, правова держава. Суверенітет України поширюється на всю її територію. Україна є унітарною державою. Територія України в межах існуючого кордону є цілісною і недоторканою»?",
        answers: [
            "А) Декларація прав національностей України",
            "Б) Конституція України",
            "В) Акт проголошення незалежності України",
            "Г) Декларація про державний суверенітет України"
        ],
        type: "radio"
    },
    {
        text: "Які події суспільно-політичного життя призвели до акцій протесту «Україна без Кучми»?",
        image: "./src/image.png",
        answers: [
            "А) відмова діючого президента підписати Кгоду про асоціацію з ЄС",
            "Б) \"касетний скандал\"",
            "В) сепаратистські рухи в Криму на початку 1990-х рр.",
            "Г) економічні руднощі, інфляція"
        ],
        type: "radio"
    },
    {
        text: "Які події відбулися в період президентства Л. Кучми?",
        answers: [
            "А) визнання Голодомору 1932-1933 рр. актом геноциду українського народу, ухвалення Конституції України",
            "Б) затвердження державної символіки України, започаткування Збройних сил України",
            "В) запровадження національної валюти — гривні, вступ України до Ради Європи",
            "Г) «Революція на граніті», проголошення незалежності України"
        ],
        type: "radio"
    },
    {
        text: "Які терміни характеризують явища в економіці України в 1991 - 1994 pp.?",
        image: "./src/image 2.png",
        answers: [
            "А) ринкові відносини, номенклатура",
            "Б) мирний шлях здобуття Україною незалежності",
            "В) кризовий стан економіки й падіння виробництва",
            "Г) дефіцит товарів, гіперінфляція"
        ],
        type: "radio"
    },
    {
        text: "Які чинники сприяли зубожінню населення, збільшення заборгованості по зарплаті в Україні в 1991 - 1994 рр.?",
        answers: [
            "А) незавершеність формування української нації",
            "Б) мирний шлях здобуття Україною незалежності",
            "В) кризовий стан економіки й падіння виробництва",
            "Г) корупція й хабарництво у вищих ешелонах влади"
        ],
        type: "radio"
    },
    {
        text: "Укажіть про яке економічне явище йде мова? «Моїй колежанці, яка тоді працювала в газеті «Ратуша» набірницею, видали зарплату двома електричними м'ясорубками. Ну,.. вона продала мені другу, бо їй треба було за щось жити. Це така тоді була загальна практика.» З інтерв'ю із Наталею Космолінською для виставки фотографій Тадеуша Рольке «Завтра буде краще». Записано влітку 2016 року",
        answers: [
            "А) дефляція",
            "Б) гіперінфляція",
            "В) бартер",
            "Г) дефіцит"
        ],
        type: "radio"
    },
    {
        text: "На якій особливості становлення підприємництва в незалежній Україні акцентує увагу карикатура?",
        image: "./src/image 3.png",
        answers: [
            "А) надмірних фізичних навантаженнях на бізнесменів",
            "Б) стрімкому збільшенні прибутковості бізнесу",
            "В) недостатній фаховій підготовці підприємців для ведення бізнесу",
            "Г) значних бюрократичних обмеженнях організації та ведення бізнесу"
        ],
        type: "radio"
    },
    {
        text: "Про яке нове економічне явище 1995-1998 років свідчить зображення?",
        image: "./src/image 4.png",
        answers: [
            "А) госпрозрахунок",
            "Б) оренда",
            "В) приватизація",
            "Г) рентабельність"
        ],
        type: "radio"
    },
]

answers = ["A", "B", "C", "A", "C", "D", ["D", "B", "C", "A"], ["A", "C"], "D", "B", "B", "D", ["B", "D", "F"], "B", "B", "C", "D", "C", "C", "D", "C"];
// А, Б, В, Г, Ґ -> A, B, C, D, E еквивалентно