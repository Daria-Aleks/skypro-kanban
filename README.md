# React + Vite

Пользователю предлагается ввести почту и пароль, если он уже зарегистрирован, и нажать «Войти». 
Если пользователь еще не зарегистрирован, ему необходимо нажать «Регистрируйтесь здесь»

При вводе неверных данных вылезает сообщение об ошибке, также красной обводкой отмечается то поле (или поля), к которому относится ошибка.
Кнопка «Войти» становится не активной и приобретает серый цвет.

На экране регистрации пользователь придумывает имя, почту и пароль. После этого он нажимает «Зарегистрироваться». 
Если пользователь понял, что у него уже есть аккаунт, он может нажать «Войдите здесь» и вернуться на экран «Вход».
После регистрации пользователь снова попадает на стартовый экран «Вход», где вводит логин и пароль заново.

После заполнения данных и нажатия на кнопку «Войти» пользователь попадает на главный экран канбан-доски.

Канбан состоит из карточек с задачами, которые расположены под теми колонками, в каком статусе выполнения они находятся.
Карточка задачи содержит в себе категорию, название задачи и срок ее исполнения. Также на карточке в правом верхнем углу присутствуют три точки, при нажатии на которые раскрывается подробный просмотр задачи (см. ниже).

При нажатии на кнопку «Создать новую задачу» пользователю раскрывается окно с созданием задачи. 
Задний фон с канбаном при открытии окна затемняется.

Окно создание задачи содержит в себе поля для заполнения: «Название задачи», «Описание задачи». Также есть возможность выбора категории и постановки срока исполнения.
После заполнения информации необходимо нажать на кнопку «Создать задачу» — тогда карточка с задачей падает на доску канбана.

При нажатии на карточку с задачей открывается окошко с более подробным просмотром данной задачи, где пользователь может увидеть описание задачи, срок исполнения и статус. 
Данные поля неактивны для клика и изменения , пока пользователь не нажмет «Редактировать задачу». Редактирование задачи см. ниже.
Также присутствует возможность удаления задачи. 
Если пользователь нажимает «Удалить задачу», задача исчезает с канбан-доски.
При нажатии на кнопку «Закрыть» окно с просмотром задачи закрывается, и пользователь снова видит канбан.

При нажатии на кнопку «Редактировать задачу» у пользователя появляется возможность взаимодействия с полями «Статус», «Описание задачи» и «Даты».
Объекты, которые выбраны, отображаются цветом 94A6BE.
При редактировании, в поле «Статус» появляются дополнительные статусы. При нажатии на иной (не выбранный) статус задача на канбан-доске перемещается в выбранную колонку.
Чтобы применить все изменения, необходимо нажать на кнопку «Сохранить».
Чтобы отменить изменения, необходимо нажать на кнопку «Отменить».
Чтобы закрыть окно, необходимо нажать на кнопку «Закрыть».

При нажатии на «Окошко пользователя» пользователю раскрывается окно, где отображаются его имя и почта, а также есть возможность смены темы и выхода из аккаунта.

При нажатии на «Выйти» пользователю раскрывается окно с подтверждением выхода из аккаунта. При нажатии «Да, выйти» происходит выход. При нажатии «Нет, остаться» на экране остается канбан, а окно «Выйти из аккаунта» закрывается.

Конечный срок исполнения выбирается нажатием на необходимую дату. 
Сегодняшний день выделен начертанием bold.
Например, сегодня 8.10 и мы хотим поставить срок исполнения  9.10, тогда чтобы выбрать это число, мы кликаем на него. 
Ниже календаря, где написано «Выберите срок исполнения», автоматически проставляется выбранный конечный срок по задаче.

Категория выбирается с помощью клика на необходимый выбор. Активная выбранная категория отображается ярко, а невыбранные категории имеют прозрачность.

При загрузки страницы появляется лоадер, который отображает загрузку.