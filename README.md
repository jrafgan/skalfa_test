Front end Installation
------------

    first you need to have yarn.
    if you don't have it go to installation docs
    https://yarnpkg.com/lang/en/docs/install/#debian-stable

    then: run this bash script in terminal in needed repository

    #!/bin/bash

    mkdir skalfa_test
    cd skalfa_test

    git clone git@github.com:jrafgan/skalfa_test.git


    cd skalfa_test && cd skalfa_front_end
    
    yarn
    
    yarn start
    
Back end Installation
------------

    Open new CLI TAB then enter
    
    #!/bin/bash

    cd ../ && cd skalfa_back_end
    
    yarn
    
    yarn dev
    
    Now you need type in browser 
    
    http://localhost:3000/
    
    and use app

Т.З.

Нужно сделать веб приложение используя ваши навыки ООП (если знакомы с SOLID, то было бы неплохо увидеть и эти принципы тоже).
Нам нужно приложение которое позволяет регистрироваться на сайте и логиниться, после логина мы должны видеть список всех 
зарегистрированных юзеров используя постраничный вывод.
При регистрации не нужно спрашивать слишком много данных, достаточно будет логин, майл, страна (список значений всех стран - select box) и аватар.

Приложение должно быть написано с учетом паттерна MVC и сделанно на чистом  php без фреймворков 
(не нужно писать массивные части, чем меньше кода тем лучше, от Вас не требуется написать фреймворк! Мы хотим оценить ваш уровень как разработчика, а не кодописателя).
Для html или js можете использовать любые фреймворки или библиотеки.


Внимание будет уделено :

1. Юзабилити
2. Формы и их валидация
1. Безопасности (CSRF, XSS, Mysql injections)
2. Структуре таблиц в БД
3. ООП и принципам SOLID (Это не обязательно если Вы их не знаете)

PS: Ваш проект должен уметь запускаться из поддиректории (http://localhost/your-project/)
