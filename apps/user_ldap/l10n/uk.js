OC.L10N.register(
    "user_ldap",
    {
    "Failed to clear the mappings." : "Не вдалося очистити мапування.",
    "Failed to delete the server configuration" : "Не вдалося вилучити конфігурацію сервера",
    "Invalid configuration: Anonymous binding is not allowed." : "Неправильна конфігурація. Анонімне приєднання не дозволено.",
    "Valid configuration, connection established!" : "Правильна конфігурація, з'єднання встановлено!",
    "Valid configuration, but binding failed. Please check the server settings and credentials." : "Правильна конфігурація, але приєднання не вдалося. Будь ласка, перевірте налаштування сервера та дані авторизації.",
    "Invalid configuration. Please have a look at the logs for further details." : "Неправильна конфігурація. Перевірте журнал для докладної інформації.",
    "No action specified" : "Ніяких дій не вказано",
    "No configuration specified" : "Немає конфігурації",
    "No data specified" : "Немає даних",
    " Could not set configuration %s" : "Не вдалося встановити конфігурацію %s",
    "Action does not exist" : "Дія не існує",
    "Renewing …" : "Оновлення...",
    "Very weak password" : "Дуже слабкий пароль",
    "Weak password" : "Слабкий пароль",
    "So-so password" : "Такий собі пароль",
    "Good password" : "Добрий пароль",
    "Strong password" : "Надійний пароль",
    "The Base DN appears to be wrong" : "Основний DN неправильний",
    "Testing configuration…" : "Тестування конфігурації...",
    "Configuration incorrect" : "Невірна конфігурація",
    "Configuration incomplete" : "Конфігурація неповна",
    "Configuration OK" : "Конфігурація OK",
    "Select groups" : "Оберіть групи",
    "Select object classes" : "Виберіть класи об'єктів",
    "Please check the credentials, they seem to be wrong." : "Перевірте дані авторизації, можливо, що вони неправильні.",
    "Please specify the port, it could not be auto-detected." : "Будь ласка, вкажіть порт, він не може бути визначений автоматично.",
    "Base DN could not be auto-detected, please revise credentials, host and port." : "Неможливо автоматично визначити базове DN, перегляньте облікові дані, хост і порт.",
    "Could not detect Base DN, please enter it manually." : "Не вдалося визначити базовий DN, введіть його вручну.",
    "{nthServer}. Server" : "{nthServer}. Сервер",
    "No object found in the given Base DN. Please revise." : "Не знайдено жодного об’єкта в даному базовому DN. Будь ласка, перегляньте.",
    "More than 1,000 directory entries available." : "Доступно понад 1000 записів каталогу.",
    "_{objectsFound} entry available within the provided Base DN_::_{objectsFound} entries available within the provided Base DN_" : ["Запис {objectsFound} доступний у межах наданого базового DN","{objectsFound} записи доступні в межах наданого базового DN","{objectsFound} записи доступні в межах наданого базового DN","{objectsFound} записи доступні в межах наданого базового DN"],
    "An error occurred. Please check the Base DN, as well as connection settings and credentials." : "Сталась помилка. Будь ласка, перевірте базове DN, а також налаштування підключення та облікові дані.",
    "Do you really want to delete the current Server Configuration?" : "Дійсно вилучити поточну конфігурацію сервера ?",
    "Confirm Deletion" : "Підтвердіть вилучення",
    "Mappings cleared successfully!" : "Мапування успішно очищено!",
    "Error while clearing the mappings." : "Помилка при очищенні відображень.",
    "Anonymous bind is not allowed. Please provide a User DN and Password." : "Анонімне прив'язування не допускається. Укажіть DN користувача та пароль.",
    "LDAP Operations error. Anonymous bind might not be allowed." : "Помилка операцій LDAP. Анонімне прив’язування може бути заборонено.",
    "Saving failed. Please make sure the database is in Operation. Reload before continuing." : "Не вдалося зберегти. Переконайтеся, що база даних працює. Перезавантажте, перш ніж продовжити.",
    "Switching the mode will enable automatic LDAP queries. Depending on your LDAP size they may take a while. Do you still want to switch the mode?" : "Перемикання режиму активує автоматичні запити LDAP. Залежно від розміру LDAP, це може зайняти деякий час. Ви все ще хочете змінити режим?",
    "Mode switch" : "Перемикач режимів",
    "Select attributes" : "Виберіть атрибути",
    "User not found. Please check your login attributes and username. Effective filter (to copy-and-paste for command-line validation): <br/>" : "Користувача не знайдено. Перевірте свої атрибути входу та ім’я користувача. Ефективний фільтр (для копіювання та вставлення для перевірки командного рядка): <br/>",
    "User found and settings verified." : "Користувача знайдено і налаштування перевірені.",
    "Consider narrowing your search, as it encompassed many users, only the first one of whom will be able to log in." : "Розгляньте можливість звузити пошук, оскільки він охоплює багато користувачів, лише перший з яких зможе ввійти.",
    "An unspecified error occurred. Please check log and settings." : "Сталася невизначена помилка. Перевірте журнал і налаштування.",
    "The search filter is invalid, probably due to syntax issues like uneven number of opened and closed brackets. Please revise." : "Фільтр пошуку недійсний, ймовірно, через синтаксичні проблеми, наприклад нерівну кількість відкритих і закритих дужок. Будь ласка, перегляньте.",
    "A connection error to LDAP/AD occurred. Please check host, port and credentials." : "Сталася помилка підключення до LDAP/AD. Перевірте хост, порт і облікові дані.",
    "The \"%uid\" placeholder is missing. It will be replaced with the login name when querying LDAP/AD." : "Заповнювач \"%uid\" відсутній. Його буде замінено ім’ям для входу під час запиту LDAP/AD.",
    "Please provide a login name to test against" : "Будь ласка, введіть ім’я для входу для перевірки",
    "The group box was disabled, because the LDAP/AD server does not support memberOf." : "Поле групи було вимкнено, оскільки сервер LDAP/AD не підтримує memberOf.",
    "Password change rejected. Hint: " : "Зміна пароля відхилена. Підказка: ",
    "Please login with the new password" : "Будь ласка, увійдіть з новим паролем",
    "LDAP User backend" : "Інтерфейс керування користувачами LDAP",
    "Your password will expire tomorrow." : "Дія вашого пароля завершується завтра.",
    "Your password will expire today." : "Дія вашого пароля завершується сьогодні.",
    "_Your password will expire within %n day._::_Your password will expire within %n days._" : ["Дія вашого пароля завершується через %n день.","Дія вашого пароля завершується через %n дні.","Дія вашого пароля завершується через %n днів.","Дія вашого пароля завершується через %n днів."],
    "LDAP/AD integration" : "Інтеграція LDAP/AD",
    "_%n group found_::_%n groups found_" : ["знайдена група %n","знайдено груп %n","знайдено груп %n","знайдено груп %n "],
    "> 1000 groups found" : "> 1000 груп знайдено",
    "> 1000 users found" : "> 1000 користувачів знайдено",
    "_%n user found_::_%n users found_" : ["знайдено користувач %n","знайдено користувачів %n","знайдено користувачів %n","знайдено користувачів %n"],
    "Could not detect user display name attribute. Please specify it yourself in advanced LDAP settings." : "Не вдалося виявити атрибут відображуваного імені користувача. Будь ласка, вкажіть це самостійно в розширених налаштуваннях LDAP.",
    "Could not find the desired feature" : "Не вдалося знайти потрібну функцію",
    "Invalid Host" : "Невірний Host",
    "LDAP user and group backend" : "Інтерфейс керування користувачами та групами LDAP",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory." : "Ця програма дозволяє адміністраторам підключати Nextcloud до каталогу користувачів на основі LDAP.",
    "This application enables administrators to connect Nextcloud to an LDAP-based user directory for authentication and provisioning users, groups and user attributes. Admins can configure this application to connect to one or more LDAP directories or Active Directories via an LDAP interface. Attributes such as user quota, email, avatar pictures, group memberships and more can be pulled into Nextcloud from a directory with the appropriate queries and filters.\n\nA user logs into Nextcloud with their LDAP or AD credentials, and is granted access based on an authentication request handled by the LDAP or AD server. Nextcloud does not store LDAP or AD passwords, rather these credentials are used to authenticate a user and then Nextcloud uses a session for the user ID. More information is available in the LDAP User and Group Backend documentation." : "Ця програма дозволяє адміністраторам підключати Nextcloud до каталогу користувачів на основі LDAP для авторизації та ініціалізації користувачів, груп і атрибутів користувачів. Адміністратори можуть налаштувати цю програму для підключення до одного або кількох каталогів LDAP або Active Directory через інтерфейс LDAP. Такі атрибути, як квота користувача, електронна пошта, зображення аватара, членство в групах тощо, можна отримати в Nextcloud із каталогу з відповідними запитами та фільтрами. \n\nКористувач входить у Nextcloud за допомогою своїх облікових даних LDAP або AD і отримує доступ на основі запиту авторизації, який обробляється сервером LDAP або AD. Nextcloud не зберігає паролі LDAP або AD, натомість ці облікові дані використовуються для авторизації користувача, а потім Nextcloud використовує сеанс для ідентифікатора користувача. Більше інформації доступно в документації користувача та групи LDAP Backend.",
    "Test Configuration" : "Тестове налаштування",
    "Help" : "Допомога",
    "Groups meeting these criteria are available in %s:" : "Групи, що відповідають цим критеріям доступні в %s:",
    "Only these object classes:" : "Тільки ці класи об'єктів:",
    "Only from these groups:" : "Лише з цих груп:",
    "Search groups" : "Пошук груп",
    "Available groups" : "Доступні групи",
    "Selected groups" : "Обрані групи",
    "Edit LDAP Query" : "Редагувати запит LDAP",
    "LDAP Filter:" : "LDAP фільтр:",
    "The filter specifies which LDAP groups shall have access to the %s instance." : "Фільтр визначає, які LDAP групи повинні мати доступ до %s сервера.",
    "Verify settings and count the groups" : "Перевірити налаштування та порахувати групи",
    "When logging in, %s will find the user based on the following attributes:" : "Під час входу в систему %s знайде користувача за такими атрибутами:",
    "LDAP/AD Username:" : "Ім'я користувача LDAP/AD:",
    "Allows login against the LDAP/AD username, which is either \"uid\" or \"sAMAccountName\" and will be detected." : "Дозволяє ввійти за допомогою імені користувача LDAP/AD, яке є \"uid\" або \"sAMAccountName\" і буде виявлено.",
    "LDAP/AD Email Address:" : "Адреса електронної пошти LDAP/AD:",
    "Allows login against an email attribute. \"mail\" and \"mailPrimaryAddress\" allowed." : "Дозволяє входити за допомогою атрибута електронної пошти. дозволено \"mail\" і \"mailPrimaryAddress\".",
    "Other Attributes:" : "Інші Атрибути:",
    "Defines the filter to apply, when login is attempted. \"%%uid\" replaces the username in the login action. Example: \"uid=%%uid\"" : "Визначає фільтр, який застосовуватиметься під час спроби входу. \"%%uid\" замінює ім'я користувача в дії входу. Приклад: \"uid=%%uid\"",
    "Test Loginname" : "Тестове ім'я при вході",
    "Verify settings" : "Перевірити налаштування",
    "%s. Server:" : "%s. Сервер:",
    "Add a new configuration" : "Додати нову конфігурацію",
    "Copy current configuration into new directory binding" : "Скопіюйте поточну конфігурацію в новий каталог",
    "Delete the current configuration" : "Вилучити поточну конфігурацію",
    "Host" : "Хост",
    "You can omit the protocol, unless you require SSL. If so, start with ldaps://" : "Ви можете не вказувати протокол, якщо вам не потрібен SSL. Якщо так, починайте з ldaps://",
    "Port" : "Порт",
    "Detect Port" : "Визначити Порт",
    "User DN" : "DN Користувача",
    "The DN of the client user with which the bind shall be done, e.g. uid=agent,dc=example,dc=com. For anonymous access, leave DN and Password empty." : "DN клієнтського користувача для прив'язки, наприклад: uid=agent,dc=example,dc=com. Для анонімного доступу, залиште DN і Пароль порожніми.",
    "Password" : "Пароль",
    "For anonymous access, leave DN and Password empty." : "Для анонімного доступу, залиште DN і Пароль порожніми.",
    "Save Credentials" : "Зберегти дані авторизації",
    "One Base DN per line" : "Один Base DN на рядок",
    "You can specify Base DN for users and groups in the Advanced tab" : "Ви можете задати Базовий DN для користувачів і груп на вкладинці Додатково",
    "Detect Base DN" : "Визначити основний DN",
    "Test Base DN" : "Тест основного DN",
    "Avoids automatic LDAP requests. Better for bigger setups, but requires some LDAP knowledge." : "Уникати автоматичні запити LDAP. Краще для великих установок, але вимагає деякого LDAP знання.",
    "Manually enter LDAP filters (recommended for large directories)" : "Вручну введіть фільтри LDAP (рекомендується для великих каталогів)",
    "Listing and searching for users is constrained by these criteria:" : "Перелік і пошук користувачів обмежені такими критеріями:",
    "The most common object classes for users are organizationalPerson, person, user, and inetOrgPerson. If you are not sure which object class to select, please consult your directory admin." : "Найпоширенішими класами об’єктів для користувачів є organizationalPerson, person, user і inetOrgPerson. Якщо ви не впевнені, який клас об’єктів вибрати, зверніться до свого адміністратора каталогу.",
    "The filter specifies which LDAP users shall have access to the %s instance." : "Фільтр визначає, які користувачі LDAP повинні мати доступ до сервера %s.",
    "Verify settings and count users" : "Перевірити налаштування та порахувати користувачів",
    "Saving" : "Збереження",
    "Back" : "Назад",
    "Continue" : "Продовжити",
    "Please renew your password." : "Будь ласка, оновіть ваш пароль.",
    "An internal error occurred." : "Виникла внутрішня помилка.",
    "Please try again or contact your administrator." : "Будь ласка, спробуйте ще раз або зверніться до адміністратора.",
    "Current password" : "Поточний пароль",
    "New password" : "Новий пароль",
    "Renew password" : "Оновити пароль",
    "Wrong password." : "Невірний пароль.",
    "Cancel" : "Скасувати",
    "Server" : "Сервер",
    "Users" : "Користувачі",
    "Login Attributes" : "Атрибуту входу",
    "Groups" : "Групи",
    "Expert" : "Експерт",
    "Advanced" : "Додатково",
    "<b>Warning:</b> The PHP LDAP module is not installed, the backend will not work. Please ask your system administrator to install it." : "<b>Увага:</ b> Потрібний модуль PHP LDAP не встановлено, базова програма працювати не буде. Будь ласка, зверніться до системного адміністратора, щоб встановити його.",
    "Connection Settings" : "Налаштування З'єднання",
    "Configuration Active" : "Налаштування активне",
    "When unchecked, this configuration will be skipped." : "Якщо \"галочка\" знята, ця конфігурація буде пропущена.",
    "Backup (Replica) Host" : "Сервер для резервних копій",
    "Give an optional backup host. It must be a replica of the main LDAP/AD server." : "Вкажіть додатковий резервний сервер. Він повинен бути копією головного LDAP/AD сервера.",
    "Backup (Replica) Port" : "Порт сервера для резервних копій",
    "Disable Main Server" : "Вимкнути Головний Сервер",
    "Only connect to the replica server." : "З'єднатися тільки із сервером реплік.",
    "Turn off SSL certificate validation." : "Вимкнути перевірку SSL сертифіката.",
    "Not recommended, use it for testing only! If connection only works with this option, import the LDAP server's SSL certificate in your %s server." : "Не рекомендується, використовувати його тільки для тестування!\nЯкщо з'єднання працює лише з цією опцією, імпортуйте SSL сертифікат LDAP сервера у ваший %s сервер.",
    "Cache Time-To-Live" : "Час актуальності Кеша",
    "in seconds. A change empties the cache." : "в секундах. Зміна очищує кеш.",
    "Directory Settings" : "Налаштування каталогу",
    "User Display Name Field" : "Поле, яке відображає Ім'я Користувача",
    "The LDAP attribute to use to generate the user's display name." : "Атрибут LDAP, який використовується для генерації імен користувачів.",
    "2nd User Display Name Field" : "2-е поле відображуваного імені користувача",
    "Optional. An LDAP attribute to be added to the display name in brackets. Results in e.g. »John Doe (john.doe@example.org)«." : "Додатково. Атрибут LDAP, який потрібно додати до відображуваного імені в дужках. Результати, напр. \"Джон Доу (john.doe@example.org)\".",
    "Base User Tree" : "Основне Дерево Користувачів",
    "One User Base DN per line" : "Один Користувач Base DN на рядок",
    "User Search Attributes" : "Пошукові атрибутів користувача",
    "Optional; one attribute per line" : "Додатково; один атрибут на рядок",
    "Group Display Name Field" : "Поле, яке відображає Ім'я Групи",
    "The LDAP attribute to use to generate the groups's display name." : "Атрибут LDAP, який використовується для генерації імен груп.",
    "Base Group Tree" : "Основне Дерево Груп",
    "One Group Base DN per line" : "Одна Група Base DN на рядок",
    "Group Search Attributes" : "Пошукові атрибути групи",
    "Group-Member association" : "Асоціація \"група-учасник\"",
    "Dynamic Group Member URL" : "URL-адреса учасника динамічної групи",
    "The LDAP attribute that on group objects contains an LDAP search URL that determines what objects belong to the group. (An empty setting disables dynamic group membership functionality.)" : "Атрибут LDAP, який об’єктів групи містить URL-адресу пошуку LDAP, яка визначає, які об’єкти належать до групи. (Пусте налаштування вимикає функцію динамічного членства в групі.)",
    "Nested Groups" : "Вкладені Групи",
    "When switched on, groups that contain groups are supported. (Only works if the group member attribute contains DNs.)" : "При включенні, групи, які містять групи підтримуються. (Працює тільки якщо атрибут учасника групи містить DN.)",
    "Paging chunksize" : "Розмір підкачки",
    "Chunksize used for paged LDAP searches that may return bulky results like user or group enumeration. (Setting it 0 disables paged LDAP searches in those situations.)" : "Підкачка використовується для сторінкових пошуків LDAP, які можуть повертати громіздкі результати кількісті користувачів або груп. (Установка його 0 відключає вивантаженя пошуку LDAP в таких ситуаціях.)",
    "Enable LDAP password changes per user" : "Дозволити зміну паролів LDAP для кожного користувача",
    "Allow LDAP users to change their password and allow Super Administrators and Group Administrators to change the password of their LDAP users. Only works when access control policies are configured accordingly on the LDAP server. As passwords are sent in plaintext to the LDAP server, transport encryption must be used and password hashing should be configured on the LDAP server." : "Дозволити користувачам LDAP змінювати свій пароль і дозволити супер (прихованим) адміністраторам і адміністраторам груп змінювати пароль своїх користувачів LDAP. Працює тільки тоді, коли політики контролю доступу налаштовані відповідним чином на LDAP сервері. Оскільки паролі відправляються на LDAP-сервер у відкритому вигляді, необхідно використовувати транспортне шифрування і налаштувати хешування паролів на LDAP-сервері. ",
    "(New password is sent as plain text to LDAP)" : "(Новий пароль надсилається як звичайний текст до LDAP)",
    "Default password policy DN" : "DN політики паролів за замовчуванням",
    "The DN of a default password policy that will be used for password expiry handling. Works only when LDAP password changes per user are enabled and is only supported by OpenLDAP. Leave empty to disable password expiry handling." : "DN типової політики паролів, що використовуватиметься для обробки терміну дії пароля. Працює лише тоді, коли ввімкнено зміну пароля LDAP для кожного користувача та підтримується лише OpenLDAP. Залиште пустим, щоб вимкнути обробку терміну дії пароля.",
    "Special Attributes" : "Спеціальні Атрибути",
    "Quota Field" : "Поле Квоти",
    "Leave empty for user's default quota. Otherwise, specify an LDAP/AD attribute." : "Залиште порожнім, щоби визначити типову квоту користувача. В іншому випадку зазначте атрибут LDAP/AD.",
    "Quota Default" : "Квота за замовчанням",
    "Override default quota for LDAP users who do not have a quota set in the Quota Field." : "Перевизначити квоту за замовчуванням для користувачів LDAP, які не мають квоти, встановленої в полі квоти.",
    "Email Field" : "Поле E-mail",
    "Set the user's email from their LDAP attribute. Leave it empty for default behaviour." : "Установіть електронну пошту користувача з його атрибута LDAP. Залиште поле порожнім для застосування типового значення.",
    "User Home Folder Naming Rule" : "Правило іменування домашнього каталогу користувача",
    "Leave empty for username (default). Otherwise, specify an LDAP/AD attribute." : "Залиште порожнім для імені користувача (за замовчуванням). В іншому випадку вкажіть атрибут LDAP/AD.",
    "\"$home\" Placeholder Field" : "Поле заповнювача \"$home\".",
    "$home in an external storage configuration will be replaced with the value of the specified attribute" : "$home у конфігурації зовнішнього сховища буде замінено на значення вказаного атрибута",
    "Internal Username" : "Внутрішня Ім'я користувача",
    "By default the internal username will be created from the UUID attribute. It makes sure that the username is unique and characters do not need to be converted. The internal username has the restriction that only these characters are allowed: [a-zA-Z0-9_.@-]. Other characters are replaced with their ASCII correspondence or simply omitted. On collisions a number will be added/increased. The internal username is used to identify a user internally. It is also the default name for the user home folder. It is also a part of remote URLs, for instance for all DAV services. With this setting, the default behavior can be overridden. Changes will have effect only on newly mapped (added) LDAP users. Leave it empty for default behavior." : "За замовчуванням внутрішнє ім’я користувача буде створено з атрибута UUID. Це гарантує, що ім’я користувача є унікальним і символи не потрібно конвертувати. Внутрішнє ім’я користувача має обмеження щодо дозволених лише таких символів: [a-zA-Z0-9_.@-]. Інші символи замінюються відповідністю ASCII або просто пропускаються. При зіткненнях число буде додано/збільшено. Внутрішнє ім’я користувача використовується для внутрішньої ідентифікації користувача. Це також назва за замовчуванням для домашнього каталогу користувача. Це також частина віддалених URL-адрес, наприклад, для всіх служб DAV. За допомогою цього параметра поведінку за замовчуванням можна змінити. Зміни діятимуть лише для нещодавно зіставлених (доданих) користувачів LDAP. Залиште поле порожнім для поведінки за замовчуванням.",
    "Internal Username Attribute:" : "Внутрішня Ім'я користувача, Атрибут:",
    "Override UUID detection" : "Перекрити вивід UUID ",
    "By default, the UUID attribute is automatically detected. The UUID attribute is used to doubtlessly identify LDAP users and groups. Also, the internal username will be created based on the UUID, if not specified otherwise above. You can override the setting and pass an attribute of your choice. You must make sure that the attribute of your choice can be fetched for both users and groups and it is unique. Leave it empty for default behavior. Changes will have effect only on newly mapped (added) LDAP users and groups." : "За замовчуванням ownCloud визначає атрибут UUID автоматично. Цей атрибут використовується для того, щоб достовірно ідентифікувати користувачів і групи LDAP. Також на підставі атрибута UUID створюється внутрішнє ім'я користувача, якщо вище не вказано інакше. Ви можете перевизначити це налаштування та вказати свій атрибут за вибором. Ви повинні упевнитися, що обраний вами атрибут може бути вибраний для користувачів і груп, а також те, що він унікальний. Залиште поле порожнім для поведінки за замовчуванням. Зміни вступлять в силу тільки для нових підключених (доданих) користувачів і груп LDAP.",
    "UUID Attribute for Users:" : "UUID Атрибут для користувачів:",
    "UUID Attribute for Groups:" : "UUID Атрибут для груп:",
    "Username-LDAP User Mapping" : "Картографія Імен користувачів-LDAP ",
    "Usernames are used to store and assign metadata. In order to precisely identify and recognize users, each LDAP user will have an internal username. This requires a mapping from username to LDAP user. The created username is mapped to the UUID of the LDAP user. Additionally the DN is cached as well to reduce LDAP interaction, but it is not used for identification. If the DN changes, the changes will be found. The internal username is used all over. Clearing the mappings will have leftovers everywhere. Clearing the mappings is not configuration sensitive, it affects all LDAP configurations! Never clear the mappings in a production environment, only in a testing or experimental stage." : "Імена користувачів використовуються для зберігання та призначення метаданих. Для точної ідентифікації та розпізнавання користувачів кожен користувач LDAP матиме внутрішнє ім’я користувача. Для цього потрібне зіставлення імені користувача з користувачем LDAP. Створене ім’я користувача зіставляється з UUID користувача LDAP. Крім того, DN також кешується, щоб зменшити взаємодію LDAP, але він не використовується для ідентифікації. Якщо DN змінюється, зміни будуть знайдені. Внутрішнє ім'я користувача використовується всюди. Очищення зіставлення залишить залишки всюди. Очищення зіставлення не залежить від конфігурації, воно впливає на всі конфігурації LDAP! Ніколи не очищайте зіставлення у продуктовому середовищі, лише на стадії тестування чи експерименту.",
    "Clear Username-LDAP User Mapping" : "Очистити картографію Імен користувачів-LDAP",
    "Clear Groupname-LDAP Group Mapping" : "Очистити картографію Імен груп-LDAP"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");