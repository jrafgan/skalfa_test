const mongoose = require('mongoose');
const config = require('./config');
const User = require('./models/User');
const nanoid = require('nanoid');

const run = async () => {
    await mongoose.connect(config.dbUrl, config.mongoOptions);

    const connection = mongoose.connection;

    const collections = await connection.db.collections();

    for (let collection of collections) {
        await collection.drop();
    }

    await User.create(
        {
            username: 'soph',
            country: 'Latvia',
            e_mail: 'sopg@mail.ru',
            password: '123',
            token: nanoid(),
            image: 'sophia.jpeg'
        },
        {
            username: 'margaret',
            country: 'Russia',
            e_mail: "gfgffgf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'margaret.jpeg'
        },
        {
            username: 'beyonce',
            country: 'Algeria',
            e_mail: "gfgfjhjf@mail.ru",
            password: '123',
            token: nanoid(),
            image: '543190650-kt4D--621x414@LiveMint.jpg'
        },
        {
            username: 'jlo',
            country: 'USA',
            e_mail: "gfgfjhf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'dorothy.jpeg'
        },
        {
            username: 'abella',
            country: 'Puerto-Rico',
            e_mail: "gfyuyujhf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'IMG_20181108_172825.jpg'
        },
        {
            username: 'johny',
            country: 'Hawaii',
            e_mail: "gfyuyjhhf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'IMG_20181108_172828.jpg'
        },
        {
            username: 'bony',
            country: 'Ireland',
            e_mail: "gfyuhhf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'iphone360_530.jpg'
        },
        {
            username: 'lola',
            country: 'UK',
            e_mail: "gfyuhhgjhf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'maxresdefault.jpg'
        },
        {
            username: 'aika',
            country: 'New Zeland',
            e_mail: "gfyuhhgj454hf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'maxresdefault (1).jpg'
        },
        {
            username: 'don',
            country: 'New Paragwai',
            e_mail: "gfy4hf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'microvawe.jpg'
        },
        {
            username: 'shakira',
            country: 'Mexico',
            e_mail: "gfy4hshakaf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'no_sidebar.png'
        },
        {
            username: 'rihana',
            country: 'Mexico',
            e_mail: "gfy4hshrihanaakaf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'notebook.jpg'
        },
        {
            username: 'dan',
            country: 'Canada',
            e_mail: "gfy4anaakaf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'photo5431579989901420903.jpg'
        },
        {
            username: 'sama',
            country: 'Kazakhstan',
            e_mail: "gfy4ankzkaf@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'photo5431579989901420904.jpg'
        },
        {
            username: 'max',
            country: 'Kyrgyzstan',
            e_mail: "gfy4ankzkkg@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'photo5431579989901420905.jpg'
        },
        {
            username: 'mark',
            country: 'Kyrgyz Republic',
            e_mail: "viwifvw@mail.ru",
            password: '123',
            token: nanoid(),
            image: 'mark.jpeg'
        }
    );

    return connection.close();
};

run().catch(error => {
    console.error('Something went wrong!', error);
});