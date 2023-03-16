const useMeals = () => {
    const meals =
        [
            {
                title: "Рибна салата с айсберг и чери домати",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Ffish-salad-cheerry4.jpg?alt=media&token=8338b099-f3cf-4a8b-8896-636eb08abd02",
                ingredients: "айсберг, чери домати, зелен лук, риба тон, гаврос, лимон, балсамов оцет, зехтин, сол",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e",
                price: 17.69
            }, {
                title: "Салата за шампиони",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fspinach-salad-blue-cheese.jpg?alt=media&token=44c90cfd-b673-4abc-b347-d28a3f6de",
                ingredients: "спанак, морков, синьо сирене, балсамов оцет, зехтин, лимонов сок, хималайска сол",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e",
                price: 9.49
            }, {
                title: "Критска салата",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fcrete-salad.jpg?alt=media&token=fb807e46-8297-419e-bc0c-70315bb165ba",
                ingredients: "микс от салати (айсберг, радичио, маруля или др.), сухари, домати, червен лук, каперси, черни маслини, сирене",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e",
                price: 10.66
            }, {
                title: "Салата спанак и рукола със запечено козе сирене",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fzapecheno-sirene-rukola.jpg?alt=media&token=90acbbb0-1a56-494e-bd73-f0ad04b9844",
                ingredients: "козе сирене, зехтин, панировка, мащерка, розмарин, рукола, спанак, семена, балсамов оцет, горчица",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 12.62
            }, {
                title: "Постна салата с макарони",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fpostna-salata-makaroni.jpg?alt=media&token=66330442-208e-4520-820c-b0d3390f81fe",
                ingredients: "паста, маруля, чери домати, печурки, лимони, тиквено семе, зехтин, черен пипер, сол",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 7.96
            }, {
                title: "Топла салата с яйца",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fsalata-qica-luk.jfif?alt=media&token=25406819-0b11-463e-93e3-09ede5754651",
                ingredients: "моркови, яйца, оцет , чесън, олио, сол, червен пипер, пресен лук",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 14.16
            }, {
                title: "Зелена салата с кейл и мангол",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fzelena-salata-spanak.jpg?alt=media&token=c5af2fd9-0f16-45bf-a103-ba239845a52d",
                ingredients: "кейл, манголд, спанак, маруля, репички, зелен лук, краставици, лимони, сол, самардала, олио",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 10.2
            }, {
                title: "Пикантна салата от яйца",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fsalataqicapikant.jfif?alt=media&token=be17b760-0660-45ab-92c4-0fe6d9db3908",
                ingredients: "яйца, краставици, майонеза, чесън, черен пипер",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 14.01
            }, {
                title: "Майонезена салата с макарони",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fmayonezena-salata-makaroni1.jpg?alt=media&token=b8f6e803-64d3-457d-9f70-6a1b89d",
                ingredients: "макарони, кисели краставички, сладка царевица, колбас, майонеза, сол",
                mealType: "salad",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 15.38
            }, {
                title: "Витаминозна салата с лимец и тахини сос",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fvitaminozna-bulgur.jpeg?alt=media&token=f2016407-be24-41d9-8412-a9b1d86deb57",
                ingredients: "къдрава салата, краставици, червено цвекло, магданоз, пресен лук, лимец, орехи, слънчогледови семки, сусам, лимонов сок, шарлан, хималайска сол, сос от нар",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 13.37
            }, {
                title: "Салата с ориз и краставица за ракия",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fsalataorizkrastavica.jfif?alt=media&token=65f09353-44cf-4a81-bfa5-406048882ff3",
                ingredients: "краставици, чесън, копър, сол, оцет, зехтин, ориз",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 15.02
            }, {
                title: "Салата с шунка и яйца",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fshunka-qica-salata.jpg?alt=media&token=f2795843-f8a6-48fd-a0ac-d4eb1e8274b6",
                ingredients: "айсберг, яйца, маслини, шунка, кашкавал, сол, зехтин, оцет",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 7.34
            }, {
                title: "Салата с кисели краставички и яйца",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fkrastavichki-qica-salata2.jpg?alt=media&token=ed56721f-9d79-411a-9cec-4bbe1fe5a",
                ingredients: "кисели краставички, яйца, чесън, майонеза, заквасена сметана, черен пипер, магданоз, копър, сол",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 18.02
            }, {
                title: "Освежаваща салата с авокадо и шафран",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Favocado-shafran.jpg?alt=media&token=86b17c5a-43ff-43f4-b4b5-e62d5e4efd52",
                ingredients: "авокадо, моркови, семена от нар, шафран, лимонов сок, зехтин, сол, орехи, магданоз",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 1.4
            }, {
                title: "Вкусна яйчена салата",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fqichenasalata.jpg?alt=media&token=c3bc70d6-03e6-4271-8a70-d623062842d8",
                ingredients: "яйца, сирене, моркови, лук, краставица, домати",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 7.75
            }, {
                title: "Салата от броколи за суровоядци",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fbroccoli-salata.jpg?alt=media&token=012391e1-136a-49db-9bf0-1d49e6a407ba",
                ingredients: "броколи, зелени ябълки, червен лук, лимони, тиквено семе, слънчогледово семе, зехтин, сол, черен пипер",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 18.91
            }, {
                title: "Здравословна салата с червено цвекло",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fgreen-salad-beet11.jpg?alt=media&token=042dfc1c-e515-474c-948f-baec7e3f52ce",
                ingredients: "червено цвекло, червено зеле, моркови, салата айсберг, слънчогледови семки, копър, магданоз",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 7.53
            }, {
                title: "Зелена салата с годжи бери и кълнове от броколи",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2Fzelena-salata-goji-beri-kalnove2.jpg?alt=media&token=9f16c816-6082-48e8-9334-c7",
                ingredients: "листа за салата, годжи бери, кълнове, чери домати, балсамов оцет, сол, зехтин",
                mealType: "salad",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 16.77
            }, {
                title: "Праз яхния с наденица",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F01praz-qhniq-nadenica.jpg?alt=media&token=16fcd598-31a9-447b-b232-a515031d1273",
                ingredients: "наденица, праз, червен пипер, домати, сол, захар, риган, босилек, брашно",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 15.96
            }, {
                title: "Гръцки Долмадес",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F02dolmades-sarmi1.jpg?alt=media&token=a041bdd7-a409-4fa5-8242-f01c3801e498",
                ingredients: "лозови листа, зехтин, лук, зелен лук, чесън, ориз, мента, копър, джоджен, магданоз, черен пипер, канела, лимони",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 8.42
            }, {
                title: "Ориз Басмати с доматен сок",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F03oriz-basmati-domati.jpg?alt=media&token=5c7421e2-debb-4495-80eb-9671145764ba",
                ingredients: "ориз басмати, зехтин, лук, моркови, доматен сок, вода, сол",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 16.81
            }, {
                title: "Оризови топчета Аранчини от Сицилия",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F04aranchini123.jpg?alt=media&token=4a8c8474-34a9-4813-a639-fec8dc62f7e9",
                ingredients: "ориз, лук, чесън, моркови, зехтин, доматено пюре, говежда кайма, зеленчуков бульон, доматен сок, замразен грах, сол, черен пипер",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 5.84
            }, {
                title: "Зелеви сарми със сос ",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F05sarmisos.jpg?alt=media&token=31e2261a-137c-458f-82a5-d5bca500f2eb",
                ingredients: "кисело зеле, кайма, ориз, олио,",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 10.89
            }, {
                title: "Черен ориз с печурки и сушени домати",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F06dark-rice-mushroom2.jpg?alt=media&token=118408cf-20bf-4b02-9d5d-fbd7ec39af0b",
                ingredients: " черен ориз, печурки, чесън, сушени домати, лимон, краве масло, зехтин, сол",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 12.34
            }, {
                title: "Постна картофена яхния с шарена сол",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F07potato-stew-carrot2.jpg?alt=media&token=e9a87efe-ed45-4d79-937e-f56fb0607d56",
                ingredients: "картофи, моркови, лук, чесън, олио, червен пипер, брашно, шарена сол",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 12.23
            }, {
                title: "Kартофен огретен",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F08klasikaogreten.jpg?alt=media&token=3d62aa1e-82ea-45d6-81c5-aa72923c8535",
                ingredients: "картофи, яйца, прясно мляко, сирене, кашкавал",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 14.79
            }, {
                title: "Пуешко с гъби и ориз",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F09oriz-gabi-pueshko1.jpg?alt=media&token=2e4bd05d-0e62-4ec8-8b2a-64a139a57412",
                ingredients: "пуешки бутчета, гъби, ориз, олио, лук, сол, черен пипер, мащерка, къри, магданоз",
                mealType: "main",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 10.47
            }, {
                title: "Кисело зеле с ориз и наденички в гювеч",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F10kiselo-zele-oriz-nadenitsa.jpg?alt=media&token=06d55872-32f6-4b0f-9aa9-d127a0196bb7",
                ingredients: "зеле кисело, ориз, олио, червен пипер, дафинов лист, наденички, зелев сок",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 10.63
            }, {
                title: "Печени червени чушки по гръцки",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F11pecheni-cherveni-chushki.jpg?alt=media&token=2194d112-2079-4b3f-84aa-0b38a2969498",
                ingredients: "червени чушки, сирене фета, кашкавал, кисело мляко, сол, черен пипер, домати, магданоз",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 12.17
            }, {
                title: "Пържени кюфтета от леща на тиган",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F12parjeni-kufteta-leshta.jpeg?alt=media&token=a00b6126-2054-440e-8a4b-bb4a5125c6e2",
                ingredients: "леща, яйца, сол, черен пипер, кимион, олио",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 18.94
            }, {
                title: "Зимна запеканка",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F13kartofi-brokoli-zapekanka.jpg?alt=media&token=5481646c-3149-4371-bca9-0c92a8e6909a",
                ingredients: "картофи, краве масло, замразени зеленчуци, зеленчуков бульон, яйца, кашкавал",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 17.04
            }, {
                title: "Яхния с картофи и чоризо",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F14chorizokartofiqhniq.jpg?alt=media&token=fbb9b597-d23b-402d-8a89-52f18856b4f1",
                ingredients: "картофи, чоризо, чесън, лук, олио, доматено пюре, брашно, магданоз",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 19.27
            }, {
                title: "Патладжан кебап",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F15patladjan-kebap1.jpg?alt=media&token=22fbc7f8-f5bf-49b1-9cc4-192023def3a3",
                ingredients: "патладжани, кайма, кромид лук, чесън, черен пипер, червен пипер, кимион, зелена пиперка, домати, сол, олио, магданоз",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 8.83
            }, {
                title: "Пълнени чушки с млечна заливка",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F16palneni-chushki-mlechna-zalivka.jpg?alt=media&token=744bfa90-6d17-4064-b02a-4000bf1ee2b6",
                ingredients: "червени чушки, телешка кайма, гъби, лук, моркови, ориз, домати, яйца, кисело мляко, царевично нишесте, сол, олио, риган, черен пипер",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 11.31
            }, {
                title: "Пълнени тиквички с кайма и ориз",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F17tikvichki-kaima-sos4.jpg?alt=media&token=68c5b376-aed8-43f5-9703-ce2d574bfa5e",
                ingredients: "тиквички, кайма, ориз, лук, чесън, доматено пюре, чубрица, сол, червен пипер, черен пипер, кимион, унисос, яйца, кисело мляко, копър, магданоз, лимонов сок, брашно, олио,",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 18.56
            }, {
                title: "Пълнен патладжан с кайма и ориз",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F18patladjan-kaima-oriz.jpg?alt=media&token=6cf9370c-fd1b-454f-b856-2c7f59187353",
                ingredients: "патладжан, кайма, ориз, доматен сок, моркови, лук, чесън, сол, черен пипер, кимион, джоджен, магданоз",
                mealType: "main",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 19.42
            }, {
                title: "Спаначена кекс торта",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F001spanachen-keks-torta.jpg?alt=media&token=13a36cc4-b3a6-4bf3-94a0-6f1edbd1be61",
                ingredients: "яйца, захар, ванилова захар, спанак, олио, прясно мляко, брашно, лимон, бакпулвер",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 18.75
            }, {
                title: "Кекс с овесени ядки и стафиди",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F002ovesen-keks-stafidi.jpg?alt=media&token=3d94fb19-7207-4007-bd84-14eac408d335",
                ingredients: "брашно, овесени ядки, стафиди, захар, сода бикарбонат, бакпулвер, канела, яйца, кисело мляко, олио, чай",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 9.45
            }, {
                title: "Кето сладолед с авокадо",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F003sladoledavocado.jpg?alt=media&token=c905a312-6db0-4aeb-a402-9e9e3f6dd88c",
                ingredients: "авокадо, лайм, сладкарска сметана, еритритол",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 16.05
            }, {
                title: "Фунийки от едно време",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F004funiiki-edno-vreme1.jpg?alt=media&token=e8fad029-bbab-47bf-8ba5-f621c614a2f6",
                ingredients: "прясно мляко, жълтъци, течна ванилия, брашно, захар, краве масло",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 5.62
            }, {
                title: "Голяма домашна торта от старите тефтери",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F005tefter-torta1.jpg?alt=media&token=a0658498-f161-425d-833e-6d16b89f2709",
                ingredients: "яйца, олио, кисело мляко, захар, бакпулвер, амонячна сода, брашно, какао",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 1.6
            }, {
                title: "Плодов сладкиш с оризово брашно",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F006sladkishorizovobrashno.jpg?alt=media&token=fa2e094a-5612-4f5e-9dae-3f3ad141c52e",
                ingredients: "яйца, захар, кисело мляко, олио, бакпулвер, ванилова захар, канела, оризово брашно",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 19.09
            }, {
                title: "Постен кекс с пудра захар",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F007posten-keks-pudra-zahar.jpg?alt=media&token=b0351c3f-bbba-4aac-89b4-96e6606a43e4",
                ingredients: "вода, захар, олио, сода бикарбонат, брашно, мармалад, пудра захар",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 1.9
            }, {
                title: "Брауни мъфини със сладки картофи",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F008muffins-chocolate-top3.jpg?alt=media&token=b9de912d-e6ea-4c8c-8391-b6e0d21b834b",
                ingredients: "сладък картоф, яйца, краве масло, сода бикарбонат, бакпулвер, сол, какао, мед, тъмен шоколад, овесени ядки, стафиди",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 6.45
            }, {
                title: "Сиропиран кокосов сладкиш с оризово брашно",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F009kokosv-sladkish-orizovo.jpg?alt=media&token=4a9d25d6-9a74-472c-9c03-e2d3dc97c060",
                ingredients: "кокосови стърготини, оризово брашно, кисело мляко, бакпулвер, ванилова захар, яйца, олио, захар",
                mealType: "desert",
                restaurantId: "b1e4d18a-ad3c-4050-b1d4-6104550aa98e", price: 17.46
            }, {
                title: "Сладки Гъбки за рожден ден",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F010sladki-gabki12.jpg?alt=media&token=f22205e5-0c38-4ca7-b27d-6832fd1a221c",
                ingredients: "масло, пудра захар, яйца, есенция лимон, бакпулвер, брашно, нишесте, какао, пудра захар",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 15.03
            }, {
                title: "Kекс с кафе",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F011kekskafe.jpg?alt=media&token=a7b53817-5deb-4176-b500-5e0d3e4a933d",
                ingredients: "яйца, захар, брашно, бакпулвер, кафе, прясно мляко, шоколадов сос",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 1.8
            }, {
                title: "Мляко с ориз и краве масло",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F012mlqkooriz12.jpg?alt=media&token=a88b19b3-a689-447f-9c73-143f9c7cfe97",
                ingredients: "прясно мляко,вода,ориз,захар,краве масло,канела",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 12.01
            }, {
                title: "Ашуре с орехи и стафиди",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F013ashure-orehi-stafidi.jpg?alt=media&token=b9137629-27fa-4891-886a-ddf18bd122e8",
                ingredients: "жито, захар, орехи, стафиди, нишесте, лимонови корички",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 5.76
            }, {
                title: "Негърче с шоколад и орехи",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F014negarche-shokolad-orehi.jpg?alt=media&token=233f4a91-8919-464e-9263-53ff0d9fea94",
                ingredients: "яйца, захар, кисело мляко, сода бикарбонат, орехи, олио, какао, течен шоколад, брашно",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 10.01
            }, {
                title: "Големи фунийки с крем",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F015funiii-krem.jpg?alt=media&token=f81cac21-1dea-43d9-897d-a61d56bf5eb6",
                ingredients: "яйца, кисело мляко, сода бикарбонат, мас, ванилова захар, захар, брашно, прясно мляко, брашно, захар, масло",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 19.62
            }, {
                title: "Домашни бисквитки с масло и нишесте",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F016biskvitidomashni.jpg?alt=media&token=76f8589f-e93a-475c-a310-66fa67e2325e",
                ingredients: "масло, захар, сол, яйца, ванилова есенция, брашно, царевично нишесте",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 12.69
            }, {
                title: "Сладък салам с кокос",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F017sladak-salam1.jpg?alt=media&token=897331ef-e340-46fe-aa7b-5925e5435383",
                ingredients: "вода, пудра захар, бисквити, какао, кокос, масло, захар, кондензирано мляко",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 16.73
            }, {
                title: "Карпачо от ананас с меден дресинг",
                imageUrl: "https://firebasestorage.googleapis.com/v0/b/menuimages-c16e0.appspot.com/o/meals%2F018carpacchio-pineapple.jpg?alt=media&token=c2fe81db-a927-4252-afdf-2d923583df97",
                ingredients: "ананас, кедрови ядки, мед, лимонов сок, черен пипер",
                mealType: "desert",
                restaurantId: "668ac358-8b0b-4962-8c4c-98006272eb6b", price: 12.73
            }
        ];

    return { meals };
}

export default useMeals;