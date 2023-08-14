function lookupUID() {
    const email = document.getElementById('email').value;
    const uidMapping = {
        'abhijeetdas80022@gmail.com': 'STB3001',
        'rohandasabhi@gmail.com': 'STB3002',
        'abhilash.guru2020@gift.edu.in': 'STB3003',
        'eee.20beec68@silicon.ac.in': 'STB3004',
        'abhisek.behera2020@gift.edu.in': 'STB3005',
        'abhisheksah2711@gmail.com': 'STB3006',
        'abhiteshojha65@gmail.com': 'STB3007',
        'abinash129d@gmail.com': 'STB3008',
        'abinash.sahoo2020@gift.edu.in': 'STB3009',
        'achyutanda.jena2020@gift.edu.in': 'STB3010',
        'adityakumarmohanty3@gmail.com': 'STB3011',
        'ab361271@gmail.com': 'STB3012',
        'beheraalisharani7@gmail.com': 'STB3013',
        'amlanpradhan0123456789@gmail.com': 'STB3014',
        'anilkumarmohanty0000@gmail.com': 'STB3015',
        'anilsethi5004@gmail.com': 'STB3016',
        'anilbehera262@gmail.com': 'STB3017',
        'babypatra55@gmail.com': 'STB3018',
        'anshuman.kh068@gmail.com': 'STB3019',
        'anshumandhal2002@gmail.com': 'STB3020',
        'anupamtarai.2023@gmail.com': 'STB3021',
        'gmonu8194@gmail.com': 'STB3022',
        'arjunbaskey655@gmail.com': 'STB3023',
        'arjyamandas2002@gmail.com': 'STB3024',
        'darjyaprangya@gmail.com': 'STB3025',
        'arunima.behera2020@gift.edu.in': 'STB3026',
        'dmparup@gmail.com': 'STB3027',
        'routa109@gmail.com': 'STB3028',
        'ashishkumarmarndi07@gmail.com': 'STB3029',
        'barikashutosh716@gmail.com': 'STB3030',
        'ashwinijena2002@gmail.com': 'STB3031',
        'asishmoharana32@gmail.com': 'STB3032',
        'software4188@gmail.com': 'STB3033',
        'avilipsa2022@gift.edu.in': 'STB3034',
        'pgavisek@gmail.com': 'STB3035',
        'badhamajhi3@gmail.com': 'STB3036',
        'balarams905@gmail.com': 'STB3037',
        'barshapriyadarshini010@gmail.com': 'STB3038',
        'bhabeshbehera410@gmail.com': 'STB3039',
        'bhupen2020@gift.edu.in': 'STB3040',
        'bibekkumarnayak770@gmail.com': 'STB3041',
        'bibhuduttbehera@gmail.com': 'STB3042',
        'bidhansarathidas2001@gmail.com': 'STB3043',
        'bijaybeheralb@gmail.com': 'STB3044',
        'bikashr281@gmail.com': 'STB3045',
        'bikashranjansethi59@gmail.com': 'STB3046',
        'bdbiswajit1234@gmail.com': 'STB3047',
        'biswajitdas51528@gmail.com': 'STB3048',
        'biswajitamajhi24@gmail.com': 'STB3049',
        'mohabiswa1@gmail.com': 'STB3050',
        'biswojitbal121@gmail.com': 'STB3051',
        'bkraghunandan55@gmail.com': 'STB3052',
        'chandanpradhan092@gmail.com': 'STB3053',
        'chandankr2255@gmail.com': 'STB3054',
        'Chandankumarn349@gmail.com': 'STB3055',
        'chinmayabhol025@gmail.com': 'STB3056',
        'chinmayaranjansahu262@gmail.com': 'STB3057',
        'barikchinmayee49@gmail.com': 'STB3058',
        'chinmayee3254@gmail.com': 'STB3059',
        'sahoodebashis476@gmail.com': 'STB3060',
        'Debasisjena658@Gmail.com': 'STB3061',
        'debasmitamahanta2803@gmail.com': 'STB3062',
        'swain50d@gmail.com': 'STB3063',
        'joblessguy.tutorial@gmail.com': 'STB3064',
        'd.rout2000@gmail.com': 'STB3065',
        'dhirajkumarrk2002@gmail.com': 'STB3066',
        'rishidigambar@gmail.com': 'STB3067',
        'dipismita66@gmail.com': 'STB3068',
        'behera46013@gmail.com': 'STB3069',
        'diptikantadas.dd45@gmail.com': 'STB3070',
        'dukhishyamamuduli12@gmail.com': 'STB3071',
        'rahmaneram178@gmail.com': 'STB3072',
        'essasahu@gmail.com': 'STB3073',
        'ganeshbhuyanganeshbhuyan25@gmail.com': 'STB3074',
        'gayatrimallick4521@gmail.com': 'STB3075',
        'govindabaka52@gmail.com': 'STB3076',
        'gurudevsethy1996@gmail.com': 'STB3077',
        'gyanabehera8598@gmail.com': 'STB3078',
        'harishpradhan31@gmail.com': 'STB3079',
        'himadripani99@gmail.com': 'STB3080',
        'hdas38068@gmail.com': 'STB3081',
        'himanshubehera73@gmail.com': 'STB3082',
        'itirekhadas444@gmail.com': 'STB3083',
        'jagadishmunda20@gmail.com': 'STB3084',
        'nayak.manishkumar14@gmail.com': 'STB3085',
        'Jkesharimajhi@gmail.com': 'STB3086',
        'jashobantakamila41@gmail.com': 'STB3087',
        'bhuyanjayaprakash355@gmail.com': 'STB3088',
        'routjharana173@gmail.com': 'STB3089',
        'ojhajyotipriyadarshini@gmail.com': 'STB3090',
        'jyotiranjan.mallik2020@gift.edu.in': 'STB3091',
        'jyotirmayeesatpathy895@gmail.com': 'STB3092',
        'tarunsai7684@gmail.com': 'STB3093',
        'kalpanasheety244@gmail.com': 'STB3094',
        'sunilsethy02@gmail.com': 'STB3095',
        'kirankumar2020@gift.edu.in': 'STB3096',
        'krushnakanta18@gmail.com': 'STB3097',
        'kumaryuvaraj7735@gmail.com': 'STB3098',
        'mrityunjay.mj.13@gmail.com': 'STB3099',
        'bitusahu511@gmail.com': 'STB3100',
        'laxmantapaswi@gmail.com': 'STB3101',
        'lisaranisamal01@gmail.com': 'STB3102',
        'mdora2022@gift.edu.in': 'STB3103',
        'madhusmitab2022@gift.edu.in': 'STB3104',
        'mahimamohanty2000@gmail.com': 'STB3105',
        'mamasahoo43442@gmail.com': 'STB3106',
        'manishakabi23@gmail.com': 'STB3107',
        'murmumanka99@gmail.com': 'STB3108',
        'manojbaral985@gmail.com': 'STB3109',
        'milanbhuyan7@gmail.com': 'STB3110',
        'mrmohitmohan2017@gmail.com': 'STB3111',
        'monalishamallick53@gmail.com': 'STB3112',
        'beheramonalisha200@gmail.com': 'STB3113',
        'monalisasahu402@gmail.com': 'STB3114',
        'mrunali2022@gift.edu.in': 'STB3115',
        'nagamanianandsagar@gmail.com': 'STB3116',
        'namita2022@gift.edu.in': 'STB3117',
        'patranibedita17@gmail.com': 'STB3118',
        'malikniharika048@gmail.com': 'STB3119',
        'nikhiljaiswal1742003@gmail.com': 'STB3120',
        'nirupama2001puhan@gmail.com': 'STB3121',
        'nitinraj0518@gmail.com': 'STB3122',
        'abhijeet.sahoo2020@gift.edu.in': 'STB3123',
        'pomm7751@gmail.com': 'STB3124',
        'pallabipriyadarshini35@gmail.com': 'STB3125',
        'pankajjenapinku41@gmail.com': 'STB3126',
        'Pankajinipatra2001@gmail.com': 'STB3127',
        'Pralipsa2021@gift.edu.in': 'STB3128',
        'pthakur2022@gift.edu.in': 'STB3129',
        'pranavraj01256@gmail.com': 'STB3130',
        'prasantofficial1585@gmail.com': 'STB3131',
        'aloith@outlook.com': 'STB3132',
        'prasantpradhan370@gmail.com': 'STB3133',
        'pratikgiriraj2002@gmail.com': 'STB3134',
        'pratyushmahal2000@gmail.com': 'STB3135',
        'pravasinidash879@gmail.com': 'STB3136',
        'chaurasia969279@gmail.com': 'STB3137',
        'pm054052@gmail.com': 'STB3138',
        'priyadarshinisahu811@gmail.com': 'STB3139',
        'paridapuspanjali22@gmail.com': 'STB3140',
        'priyadarsinirachita22@gmail.com': 'STB3141',
        'rahuldora377@gmail.com': 'STB3142',
        'rajanikanta@gift.edu.in': 'STB3143',
        'r.nayak2022@gift.edu.in': 'STB3144',
        'routrajeeb350@gmail.com': 'STB3145',
        'rajeshbarik1228@gmail.com': 'STB3146',
        'rajeswaripaik003@gmail.com': 'STB3147',
        'pandarakesh609@gmail.com': 'STB3148',
        'rakeshkuswain467@gmail.com': 'STB3149',
        'ramachandradey99@gmail.com': 'STB3150',
        'behera.ramakantait.gamail.com': 'STB3151',
        'rameswartudu8473@gmail.com': 'STB3152',
        'rinkun0143@gmail.com': 'STB3153',
        'rj7678812@gmail.com': 'STB3154',
        'rohitsatyadas143@gmail.com': 'STB3155',
        'karrojalin52@gmail.com': 'STB3156',
        'sahoo.rojalin1232002@gmail.com': 'STB3157',
        'roshnipatra41@gmail.com': 'STB3158',
        'roumya12@gmail.com': 'STB3159',
        'paridarozina@gmail.com': 'STB3160',
        'rudraprasadsaho@gmail.com': 'STB3161',
        'rudranarayanabarik123@gmail.com': 'STB3162',
        'rudrapratappadhan123@gmail.com': 'STB3163',
        'ruksarparveen2022@gmail.com': 'STB3164',
        'rushikesh2020@gift.edu.in': 'STB3165',
        'Sagarkumarb398@gmail.com': 'STB3166',
        'sagarkalia6371@gmail.com': 'STB3167',
        'Sagramhansdah304@gmail.com': 'STB3168',
        'ssbarik2022@gmail.com': 'STB3169',
        'mudulisamaresh1@gmail.com': 'STB3170',
        'sambitmishra172@gmail.com': 'STB3171',
        'cse.20bcse25@silicon.ac.in': 'STB3172',
        'sambitkumar566@gmail.com': 'STB3173',
        'samikshyaswain22@gmail.com': 'STB3174',
        'samira2021@gift.edu.in': 'STB3175',
        'sandeepmohanty1432@gmail.com': 'STB3176',
        'sangramkesharis356@gmail.com': 'STB3177',
        'sasmitagiri633@gmail.com': 'STB3178',
        'tripathysasmita887@gmail.com': 'STB3179',
        'tikun852@gmail.com': 'STB3180',
        'stranjanbehera@gmail.com': 'STB3181',
        'saubhagyamohanty9438@gmail.com': 'STB3182',
        'dashbabu1212@gmail.com': 'STB3183',
        'shasmitaswain607@gmail.com': 'STB3184',
        'shivsankarsahu152@gmail.com': 'STB3185',
        'shuvendugan@gmail.com': 'STB3186',
        'svenkatesh.g011@gmail.com': 'STB3187',
        'silonkumarrout@gmail.com': 'STB3188',
        'shaikhkahinoor@gmail.com': 'STB3189',
        'Smitanjalidhal0@gmail.com': 'STB3190',
        'beherasmruti35@gmail.com': 'STB3191',
        'smrutiranjanmishra222@gmail.com': 'STB3192',
        'smrutijayaroutray@gmail.com': 'STB3193',
        'mohantysohani2004@gmail.com': 'STB3194',
        'sonalikad07@gmail.com': 'STB3195',
        'soubhagyadash365@gmail.com': 'STB3196',
        'soumyaranjandas8963@gmail.com': 'STB3197',
        's.8342808349@gmail.com': 'STB3198',
        'soumyamaharana1433@gmail.com': 'STB3199',
        'Soumyaranjan Bal': 'STB3200',
        'sjsj31576@gmail.com': 'STB3201',
        'srabaneedebata96547@gmail.com': 'STB3202',
        'sushreedhal2020@gift.edu.in': 'STB3203',
        'subhadrakisku1@gmail.com': 'STB3204',
        'subhammaharana0000@gmail.com': 'STB3205',
        'lenkasubha2022@gift.edu.in': 'STB3206',
        'subhendubehera165@gmail.com': 'STB3207',
        'sp3960626@gmail.com': 'STB3208',
        'nayak2022@gift.edu.in': 'STB3210',
        'skbehera2022@gift.edu.in': 'STB3211',
        'suchismitasmiley11@gmail.com': 'STB3212',
        'sudhanshuojha7234@gmail.com': 'STB3213',
        'sukanyakar567@gmail.com': 'STB3214',
        'nayaksumit670@gmail.com': 'STB3215',
        'jenasumitra333@gmail.com': 'STB3216',
        'marndisunaram280@gmail.com': 'STB3217',
        'nayaksurajkumar1@gmail.com': 'STB3218',
        'sangita.behera141@gmail.com': 'STB3219',
        'sushreesudiptapanda@gmail.com': 'STB3220',
        'Swadhinkumar72797@gmail.com': 'STB3221',
        'balswagatam3542@gmail.com': 'STB3222',
        'sibudash28@gmail.com': 'STB3223',
        'swayamswain033@gmail.com': 'STB3224',
        'truturajsubudhi2003@gmail.com': 'STB3225',
        'tapanx00@gmail.com': 'STB3226',
        'tpswain2000@outlook.com': 'STB3227',
        'truptimayee4166@gmail.com': 'STB3228',
        'ujjwalraj042002@gmail.com': 'STB3229',
        'vivekanandapadhi8249@gmail.com': 'STB3230',
        'Yuvrajkumar12110@gmail.com': 'STB3231',
        'arunkumarpradhan2019@gmail.com': 'STB3232',
        'bp815385@gmail.com': 'STB3233',
        'debashismohanty2003@gmail.com': 'STB3234',
        'debashreedey80@gmail.com': 'STB3235',
        'mdebasmita601@gmail.com': 'STB3236',
        'putidillip63@gmail.com': 'STB3237',
        'himansupradhan2002@gmail.com': 'STB3238',
        'jagannathdixit16@gmail.com': 'STB3239',
        'imkamala96@gmail.com': 'STB3240',
        'koushik9853@gmail.com': 'STB3241',
        'niranjanb2022@gift.edu.in': 'STB3242',
        'nitinkabi123@gmail.com': 'STB3243',
        'parmesh2022@gift.edu.in': 'STB3244',
        'prabhupadaswain45932@gmail.com': 'STB3245',
        'pprerna898@gmail.com': 'STB3246',
        'priyankapriyadarsini440@gmail.com': 'STB3247',
        'pujapranajyoti2015@gmail.com': 'STB3248',
        'Rajeshsahu9924@gmail.com': 'STB3249',
        'rajprakashparhi987@gmail.com': 'STB3250',
        'rbarik257@gmail.com': 'STB3251',
        'rasmitaupadhyay664@gmail.com': 'STB3252',
        'Saipp121@gmail.com': 'STB3253',
        'pandasaipriya250@gmail.com': 'STB3254',
        'sameermohanta2019@gmail.com': 'STB3255',
        'skumar.k798@gmail.com': 'STB3256',
        'shrutimishra540@gmail.com': 'STB3257',
        'salonysilky@gmail.com': 'STB3258',
        'skmdsamimakhtar@gmail.com': 'STB3259',
        'sahusoumya1999@gmail.com': 'STB3260',
        'subhadrahembram1934@gmail.com': 'STB3261',
        'subratpanda600@gmail.com': 'STB3262',
        'swapnatudu27@gmail.com': 'STB3263',
        'sworajkhandual1998@gmail.com': 'STB3264',
        'tanmayshyamal2016@gmail.com': 'STB3265',
        'truptijogania@gmail.com': 'STB3266',
        'varshasinghh20@gmail.com': 'STB3267',
        'akshaykumarmundari341@gmail.com': 'STB3268',
        'anamikasahoo2002@gmail.com': 'STB3269',
        'anishasoreng321@gmail.com': 'STB3270',
        'tiwaryashutosh127@gmail.com': 'STB3271',
        'ayazrock.ak@gmail.com': 'STB3272',
        'manishapatro595@gmail.com': 'STB3273',
        'barsaranid773@gmail.com': 'STB3274',
        'beherabiswajit698@gmail.com': 'STB3275',
        'dayanidhi1010@gmail.com': 'STB3276',
        'debasmitamohanty345@gmail.com': 'STB3277',
        'dharitrimahanta042@gmail.com': 'STB3278',
        'sdiptiranjan882@gmail.com': 'STB3279',
        'dasjyotiprakash112@gmail.com': 'STB3280',
        'kishorekumar7602@gmail.com': 'STB3281',
        'majhianaik1996@gmail.com': 'STB3282',
        'manjitdash546@gmail.com': 'STB3283',
        'pallavibehera7077@gmail.com': 'STB3284',
        'parbatipatra867@gmail.com': 'STB3285',
        'pragatipradhan2210@gmail.com': 'STB3286',
        'dassameer848@gmail.com': 'STB3287',
        's.panda2022@gift.edu.in': 'STB3288',
        'samalshree.22.03@gmail.com': 'STB3289',
        'Sangita.Priyadarsini2801@gmail.com': 'STB3290',
        'smrutiparida2022@gift.edu.in': 'STB3291',
        'sahoosoumya2001.00@gmail.com': 'STB3292',
        'soumyasubaspati@gmail.com': 'STB3293',
        'sahoourmila811@gmail.com': 'STB3294',
        'viswajt2408@gmail.com': 'STB3295',
        'pratimasahu14676@gmail.com': 'STB3296',
        'abhilipsaswain16@gmail.com': 'STB3297',
        'mcaanurag2022@gmail.com': 'STB3298',
        'pradhanashutosh570@gmail.com': 'STB3299',
        'baijayantipatasani89@gmail.com': 'STB3300',
        'balrampanda72@gmail.com': 'STB3301',
        'bububiswaji@gmail.com': 'STB3302',
        'chittaranjansingha251@gmail.com': 'STB3303',
        'chhittaprajna15@gmail.com': 'STB3304',
        'debasmitamohapatra531@gmail.com': 'STB3305',
        'duryodhanm213@gmail.com': 'STB3306',
        'gitanjalibehera703@gmail.com': 'STB3307',
        'hemantasahoo909@gmail.com': 'STB3308',
        'itishree227@gmail.com': 'STB3309',
        'sahoojyotiranjan114@gmail.com': 'STB3310',
        'kismatabhijit1234@gmail.com': 'STB3311',
        'laxmipriyapadhi405@gmail.com': 'STB3312',
        'lipsamohanty325@gmail.com': 'STB3313',
        'madhusmitadasm57267@gmail.com': 'STB3314',
        'madhusmitasamal76890@gmail.com': 'STB3315',
        'choudhuryasmi@gmail.com': 'STB3316',
        'nabinbehera100@gmail.com': 'STB3317',
        'rabinarayanjena88@gmail.com': 'STB3318',
        'rajeshkumarjenarajesh1@gmail.com': 'STB3319',
        'chandrarakesh2001@gmail.com': 'STB3320',
        'rupashreenayak77@gmail.com': 'STB3321',
        'sirendripradhan@gmail.com': 'STB3322',
        'saisouravmahalik@gmail.com': 'STB3323',
        'dassampurna19@gmail.com': 'STB3324',
        'sandhyarani28mohanty@gmail.com': 'STB3325',
        'shibaprasadsahoo558@gmail.com': 'STB3326',
        'skabdulbasit23@gmail.com': 'STB3327',
        'Sonamsultana95@gmail.com': 'STB3328',
        'chainisradhalagana@gmail.com': 'STB3329',
        'sudesnasahoo74303@gmail.com': 'STB3330',
        'sudhanshupanda2000@gmail.com': 'STB3331',
        'sekharsudhanshu39@gmail.com': 'STB3332',
        'Supriyasamal111@gmail.com': 'STB3333',
        'dashswaraj02@gmail.com': 'STB3334',
        'tapansahu161@gmail.com': 'STB3335',
        'sahooaditya006@gmail.com': 'STB3336',
        'puhanalok1@gmail.com': 'STB3337',
        'anilanil91099@gmail.com': 'STB3338',
        'sahooliku2017@gmail.com': 'STB3339',
        'baishakhisamal143@gmail.com': 'STB3340',
        'bhanuprakashsahoo2001@gmail.com': 'STB3341',
        'jbharati374@gmail.com': 'STB3342',
        'bibhuprasad70776711@gmail.com': 'STB3343',
        'senbiswajit527@gmail.com': 'STB3344',
        'chandandas0038@gmail.com': 'STB3345',
        'Chiranjeevsaw32@gmail.com': 'STB3346',
        'deeptisikhamohanty@gmail.com': 'STB3347',
        'dibakarbhatra34@gmail.com': 'STB3348',
        'dipunanaik55@gmail.com': 'STB3349',
        'jyotiranjanbiswal442@gmail.com': 'STB3350',
        'liturajpradhan@gmail.com': 'STB3351',
        'digalmanashi76@gmail.com': 'STB3352',
        'manishapuhan252@gmail.com': 'STB3353',
        'meghanjanas@gmail.com': 'STB3354',
        'pradyumnakbehera1@gmail.com': 'STB3355',
        'pujarinisahu54@gmail.com': 'STB3356',
        'ranjan890ui@gmail.com': 'STB3357',
        'Rohit9937619461@gmail.com': 'STB3358',
        'roshanmeherdc@gmail.com': 'STB3359',
        'sandeepbarla792@gmail.com': 'STB3360',
        'satya09jit@gmail.com': 'STB3361',
        'sm5114690@gmail.com': 'STB3362',
        'nandasouragya@gmail.com': 'STB3363',
        'souvagyadasmohapatra@gmail.com': 'STB3364',
        'subhaswapnabhuyan@gmail.com': 'STB3365',
        'kumarsubrat1434@gmail.com': 'STB3366',
        'sudeshbhadra123@gmail.com': 'STB3367',
        'sumansahoo365@gmail.com': 'STB3368',
        'swetamohanty0000@gmail.com': 'STB3369',
        'tirtharajpradhan08@outlook.com': 'STB3370',
        'abinashsahoo4063@gmail.com': 'STB3371',
        'ashishrohanarbin@gmail.com': 'STB3372',
        'beherabijay685@gmail.com': 'STB3373',
        'fraj.skillbee@gmail.com': 'STB3374',
        'seemamahanta732@gmail.com': 'STB3375',
        'santoshku3235@gmail.com': 'STB3376',
        'piyushpanda2001@gmail.com': 'STB3377',
        'priyabrataswain8820@gmail.com': 'STB3378',
        'jpriyankapriyadarshani@gmail.com': 'STB3379',
        'rahulkaran075@gmail.com': 'STB3380',
        'rashmitaparhi10@gmail.com': 'STB3381',
        'sarisaritameher12@gmail.com': 'STB3382',
        'sb733265@gmail.com': 'STB3383',
        'maityshreyasi44@gmail.com': 'STB3384',
        'sumitramuduli123@gmail.com': 'STB3385',
        'vp5942638@gmail.com': 'STB3386',
        'Ankitkumarmishrabgp@gmail.com': 'STB3387',
        'dtudu195@gmail.com': 'STB3388',
        'imdeeptidas@gmail.com': 'STB3389',
        'giridhariraita942@gmail.com': 'STB3390',
        'etun9518@gmail.com': 'STB3391',
        'kumarprakash1636@gmail.com': 'STB3392',
        'priyankanayak9494@gmail.com': 'STB3393',
        'routrajashree933@gmail.com': 'STB3394',
        'sahooramakant38@gmail.com': 'STB3395',
        'satyaprakash51656@gmail.com': 'STB3396',
        'shekharmeher767@gmail.com': 'STB3397',
        'shyamsundarshaw069@gmail.com': 'STB3398',
        'subhamsahoo9861@gmail.com': 'STB3399',
        'surajdalei258@gmail.com': 'STB3400',
        'routswapnajit82@gmail.com': 'STB3401',
        'tahidmohammed123@gmail.com': 'STB3402',
        'pradhantapaswini789@gmail.com': 'STB3403',
        'tarunnayak5454@gmail.com': 'STB3404',
        'udayakantabhoi@gmail.com': 'STB3405',
        'abhijeetlala01@gmail.com': 'STB4001',
        'aj377359@gmail.com': 'STB4002',
        'abhijitsamal100@gmail.com': 'STB4003',
        '1234abhilipsa@gmail.com': 'STB4004',
        'abhipradapatra@gmail.com': 'STB4005',
        'abhisekmajhi5764@gmail.com': 'STB4006',
        'abhisek.pandey.1289@gmail.com': 'STB4007',
        'abhisheksrikumar1@gmail.com': 'STB4008',
        'abhishekmishra13401@gmail.com': 'STB4009',
        'giriabinash76@gmail.com': 'STB4010',
        'abinashsuman0@gmail.com': 'STB4011',
        'dash47088@gmail.com': 'STB4012',
        'meabinashsamal@gmail.com': 'STB4013',
        'abinashsethi43@gmail.com': 'STB4014',
        'adityaacharya071@gmail.com': 'STB4015',
        '22mca.aishwaryaray@gietbbsr.edu.in': 'STB4016',
        'rohitkumarsethi950@gmail.com': 'STB4017',
        'ajitamarjyotidhala6371@gmail.com': 'STB4018',
        'akashmahakud20@gmail.com': 'STB4019',
        'akipkhan456@gmail.com': 'STB4020',
        'akshayakumarguin@gmail.com': 'STB4021',
        'alekhabehera001@gmail.com': 'STB4023',
        'alekhamoharana8@gmail.com': 'STB4024',
        'amankumarnayak02@gmail.com': 'STB4025',
        'amatulwadood2003@gmail.com': 'STB4026',
        'amishasingh3067@gmail.com': 'STB4027',
        'amitbadajena2000@gmail.com': 'STB4028',
        'mishraamitlipun1431@gmail.com': 'STB4029',
        'anamprasad99@gmail.com': 'STB4030',
        'pradhanananya093@gmail.com': 'STB4031',
        'bardhanangel@gmail.com': 'STB4032',
        'panigrahianiket067@gmail.com': 'STB4033',
        'ankita30biswal@gmail.com': 'STB4034',
        'ankita.behera.pinki@gmail.com': 'STB4035',
        'adj020@nist.edu': 'STB4036',
        '22mca.annadatripathy@gietbbsr.edu.in': 'STB4037',
        'ansumanpradhan096@gmail.com': 'STB4038',
        'aradhyachhatoi571@gmail.com': 'STB4039',
        'aranyakdwibedy68@gmail.com': 'STB4040',
        'ekkaarchana1998@gmail.com': 'STB4041',
        'architadhal222@gmail.com': 'STB4042',
        'arjunsethi523@gmail.com': 'STB4043',
        'apb720@nist.edu': 'STB4044',
        'ashalaxmipanda@gmail.com': 'STB4045',
        'ashalatab645@gmail.com': 'STB4046',
        'Ashisrout454@gmail.com': 'STB4047',
        'amj020@nist.edu': 'STB4048',
        'princeashutosh90763@gmail.com': 'STB4049',
        'ashutoshsipu9908@gmail.com': 'STB4050',
        'rumashutosh@email.com': 'STB4051',
        'ashutoshsahu330@gmail.com': 'STB4052',
        'ashutoshsahu9102@gmail.com': 'STB4053',
        'asitbehera1776@gmail.com': 'STB4054',
        'aswasaninayak@gmail.com': 'STB4055',
        'nayak.asween@gmail.com': 'STB4056',
        'avilipsasenapati340@gmail.com': 'STB4057',
        'ayasakantasahoo63@gmail.com': 'STB4058',
        'bablisaw28@gmail.com': 'STB4059',
        'sethibadal725@gmail.com': 'STB4060',
        'badalbiswal76@gmail.com': 'STB4061',
        'baishnavirout190@gmail.com': 'STB4062',
        'balarambehera8099@gmail.com': 'STB4063',
        'banitabiswal468@gmail.com': 'STB4064',
        'Barsarani764056@gmail.com': 'STB4065',
        'bedanathsahu998@gmail.com': 'STB4066',
        'bholashankar19112001@gmail.com': 'STB4067',
        'ss1918787@gmail.com': 'STB4068',
        'bibeksahoo357@gmail.com': 'STB4069',
        'bijayalaxmitarai3@gmail.com': 'STB4070',
        'bijaylenka23374@gmail.com': 'STB4071',
        'swadhinn85@gmail.com': 'STB4072',
        'bikramroutofficial@gmail.com': 'STB4073',
        'mahapatrasurendra0@gmail.com': 'STB4074',
        'bbprasad2802@gmail.com': 'STB4075',
        'biswajitabarik8959@gmail.com': 'STB4076',
        'paridabiswajita5@gmail.com': 'STB4077',
        'bhutiabrahmananda@gmail.com': 'STB4078',
        'Chandanpanda726@gmail.com': 'STB4079',
        'chandan.mahakul00@gmail.com': 'STB4080',
        'chandankusahoo812@gmail.com': 'STB4081',
        'swainchandan190@gmail.com': 'STB4082',
        'Chandanu1215@gmail.com': 'STB4083',
        'Chetannayak122@gmail.com': 'STB4084',
        'chinmaykj2001@gmail.com': 'STB4085',
        'satpathychinmay02@gmail.com': 'STB4086',
        'karan05202906@gmail.com': 'STB4087',
        'chinmayahada544@gmail.com': 'STB4088',
        'sebikachinmayee@gmail.com': 'STB4089',
        'skc020@nist.edu': 'STB4090',
        'dambarudharm877@gmail.com': 'STB4091',
        'rintusamal12345@gmail.com': 'STB4092',
        'beheradebasis552@gmail.com': 'STB4093',
        'debasishpanda2036@gmail.com': 'STB4094',
        'debiprasadmishra890@gmail.com': 'STB4095',
        'Mohantydebitosh85@gmail.com': 'STB4096',
        'debojeet.bhowmickbca22-25@asbm.ac.in': 'STB4097',
        'madhuchhandaasethi22@gmail.com': 'STB4098',
        'mangarajdeepakkumar2@gmail.com': 'STB4099',
        'dhiren81147@gmail.com': 'STB4100',
        'dibyaranjan.ok@gmail.com': 'STB4101',
        'dibyaranjanbehera486@gmail.com': 'STB4102',
        'dillipkumarmoharana92@gmail.com': 'STB4103',
        'ddineshkumar0502@gmail.com': 'STB4104',
        'mohantydinesh066@gmail.com': 'STB4105',
        'diptikrishna30@gmail.com': 'STB4106',
        'duryadhanm252@gmail.com': 'STB4107',
        'sonu5dusmanta@gmail.com': 'STB4108',
        'e.devrajrao2518@gmail.com': 'STB4109',
        'Gouridharagb@gmail.com': 'STB4110',
        'goutamojha321@gmail.com': 'STB4111',
        'guruprasad9610@gmail.com': 'STB4112',
        'guruprasadgiri39@gmail.com': 'STB4113',
        'gyanabehera1997@gmail.com': 'STB4114',
        'harisankarpradhan473487503@gmail.com': 'STB4115',
        'harapriyadehury123@gmail.com': 'STB4116',
        'harsh992002@gmail.com': 'STB4117',
        'rshemanta@gmail.com': 'STB4118',
        'mohantahimadree@gmail.com': 'STB4119',
        'himansukumarmohalik2@gmail.com': 'STB4120',
        'hiteshrout108@gmail.com': 'STB4121',
        'ibw020@nist.edu': 'STB4122',
        'irout7195@gmail.com': 'STB4123',
        'ipsitasamanta4686@gmail.com': 'STB4124',
        'ishritadas@gmail.com': 'STB4125',
        'itishreebiswal29@gmail.com': 'STB4126',
        'itishreepuja5@gmail.com': 'STB4127',
        'maharanajagrut208@gmail.com': 'STB4128',
        'janmejayarout500@gmail.com': 'STB4129',
        'jayadevnath2001@gmail.com': 'STB4130',
        'sahoo.jayaprakash2299@gmail.com': 'STB4131',
        'Jayashreesahoo202@gmail.com': 'STB4132',
        'patrijeeban@gmail.com': 'STB4133',
        'jingyasamishra280@gmail.com': 'STB4134',
        'jnanaranjandas07@gmail.com': 'STB4135',
        'jkcreator12@gmail.com': 'STB4136',
        'laxmiray2000@gmail.com': 'STB4137',
        'bugibehera@gmail.com': 'STB4138',
        'jyotirmayasahu28@gmail.com': 'STB4139',
        'jyotis5689@gmail.com': 'STB4140',
        'jyotishreejena1234@gmail.com': 'STB4141',
        'rjanaki696@gmail.com': 'STB4142',
        'chinukaibarta642@gmail.com': 'STB4143',
        'kailashprasaddas66@gmail.com': 'STB4144',
        'kanhapatra286@gmail.com': 'STB4145',
        'karankumarkhuntia2@gmail.com': 'STB4146',
        'hemanthkumar36456@gmail.com': 'STB4147',
        'siddhartharvind853@gmail.com': 'STB4148',
        'kasturin497@gmail.com': 'STB4149',
        'kkumar81052@gmail.com': 'STB4150',
        'kapalrajesh2001@gmail.com': 'STB4151',
        'krishnamohanty406@gmail.com': 'STB4152',
        'kuldeepdey1@gmail.com': 'STB4153',
        'kureshpradhan04@gmail.com': 'STB4154',
        'lalajimaharana290@gmail.com': 'STB4155',
        'lalatendudas2001@gmail.com': 'STB4156',
        'nayaklalit929@gmail.com': 'STB4157',
        'pratikdeep1234@gmail.com': 'STB4158',
        'lsb020@nist.edu': 'STB4159',
        '22mca.lipsapreetiparnanayak@gietbbsr.edu.in': 'STB4160',
        'lipumallik2@gmail.com': 'STB4161',
        'lipunsahu.agl@gmail.com': 'STB4162',
        'lizaraita260@gmail.com': 'STB4163',
        'lokanathpanigrahy6@gmail.com': 'STB4164',
        'lopamudra2022@gift.edu.in': 'STB4165',
        'lopamudraroni02@gmail.com': 'STB4166',
        'mkdas1878@gmail.com': 'STB4167',
        'maheshbehera112@gmail.com': 'STB4168',
        '7327965298a@gmail.com': 'STB4169',
        'mamali569sahoo@gmail.com': 'STB4170',
        'mamatasamal90782@gmail.com': 'STB4171',
        'manishray2233@gmail.com': 'STB4172',
        'Manojbehera@1700gmail.com': 'STB4173',
        'manojkhatua7077@gmail.com': 'STB4174',
        'manomohansubudhi86@gmail.com': 'STB4175',
        'mousumipanda946@gmail.com': 'STB4176',
        'alamf015@gmail.com': 'STB4177',
        'mdkhalidsaifullah.gpbargarh@gmail.com': 'STB4178',
        'mehekkhosla@gmail.com': 'STB4179',
        'minakshichoudhury293@gmail.com': 'STB4180',
        'minibhumia8@gmail.com': 'STB4181',
        'misssminu7@gmail.com': 'STB4182',
        'johnfaizan4@gmail.com': 'STB4183',
        'mirasamal223@gmail.com': 'STB4184',
        'beheramonalisa332@gmail.com': 'STB4185',
        'manojashish2002@gmail.com': 'STB4186',
        'mrutunjayamohapatra80@gmail.com': 'STB4187',
        'mrutyunjayadas700@gmail.com': 'STB4188',
        'mukulmahapatra2204@gmail.com': 'STB4189',
        'beheratapu8144@gmail.com': 'STB4190',
        'nsatapathy05@gmail.com': 'STB4191',
        'niharikanayak891@gmail.com': 'STB4192',
        'nickykholsa@gmail.com': 'STB4193',
        'sahoonirakar864@gmail.com': 'STB4194',
        'nityanandadas727@gmail.com': 'STB4195',
        'vinodkumarnoku123@gmail.com': 'STB4196',
        'ommprakashsahoo144@gmail.com': 'STB4197',
        'omshreemuduli99@gmail.com': 'STB4198',
        'ommpatra967@gmail.com': 'STB4199',
        'sahupadmalaya173@gmail.com': 'STB4200',
        'pamalisahoo19@gmail.com': 'STB4201',
        'pandabikash567@gmail.com': 'STB4202',
        'pareshhackerparesh@gmail.com': 'STB4203',
        'agastipayal@gmail.com': 'STB4204',
        'Pinakimohanty4@gmail.com': 'STB4205',
        'prabhatswain048@gamil.com': 'STB4206',
        'prajnapanda13@gmail.com': 'STB4207',
        'pranab.dash03@gmail.com': 'STB4208',
        'sahoopranati133@gmail.com': 'STB4209',
        'pranayatibehera@gmail.com': 'STB4210',
        'mprangyaparamita956@gmail.com': 'STB4211',
        'Prapti.patra2020@gmail.com': 'STB4212',
        'prasantsahoo208@gmail.com': 'STB4213',
        'prasantam782@gmail.com': 'STB4214',
        'prativasamal6@gmail.com': 'STB4215',
        'preity.priya2001@gmail.com': 'STB4216',
        'katienaik30@gmail.com': 'STB4217',
        'pritirashmijena143@gmail.com': 'STB4218',
        'priyalipritiparnaswain376@gmail.com': 'STB4219',
        'ray601708@gmail.com': 'STB4220',
        'priyaranjansahoolipuna123@gmail.com': 'STB4221',
        'pruthwirajsahoo77@gmail.com': 'STB4222',
        'pujaranisahoo355@gmail.com': 'STB4223',
        'purnimasahoo308@gmail.com': 'STB4224',
        'rahulkumarpradhan15@gmail.com': 'STB4225',
        'rajkumarjena562@gmail.com': 'STB4226',
        'rajalaxmidas963@gmail.com': 'STB4227',
        '22mca.rajalaxmikhatai@gietbbsr.edu.in': 'STB4228',
        'rajeshmeher086@gmail.com': 'STB4229',
        '100rajeshswain@gmail.com': 'STB4230',
        'rajeswaris710@gmail.com': 'STB4231',
        'rajkumarnaik614@gmail.com': 'STB4232',
        'kumar.parida.rakeshh@gmail.com': 'STB4233',
        'ranjanbehera8144@gmail.com': 'STB4234',
        'ranjibsahoo580@gmail.com': 'STB4235',
        'rashmiprava518@gmail.com': 'STB4236',
        'bakarashmita@gmail.com': 'STB4237',
        'rasmipanda36@gmail.com': 'STB4238',
        'rasmitabhuyan878@gmail.com': 'STB4239',
        '143ratikant143@gmail.com': 'STB4240',
        'reyanshombehera@gmail.com': 'STB4241',
        'rojalinmallik12@gmail.com': 'STB4242',
        'ronia16runu@gmail.com': 'STB4243',
        'rahul10mamana15@gmail.com': 'STB4244',
        'balabantarayrupasmita@gmail.com': 'STB4245',
        'rupasmitapradhan2000@gmail.com': 'STB4246',
        'Srirangamvenugopalswamy@gmail.com': 'STB4247',
        'sachinkumarrout846@gmail.com': 'STB4248',
        'kucky495@gmail.com': 'STB4249',
        'sachinkumar07355@gmail.com': 'STB4250',
        'sadasiva775@gmail.com': 'STB4251',
        'nayaksagarkumar662@gmail.com': 'STB4252',
        'sagarmandal4000@gmail.com': 'STB4253',
        'sahejad.quadri7@gmail.com': 'STB4254',
        'sk366451@gmail.com': 'STB4255',
        'mahapatrasai9@gmail.com': 'STB4256',
        'sahoosailaxmi047@gmail.com': 'STB4257',
        'saileshdakua@gmail.com': 'STB4258',
        'samarjitpradhan1998@gmail.com': 'STB4259',
        'sameerbehera34@gmail.com': 'STB4260',
        'sameerranjanmohapatra3853@gmail.com': 'STB4261',
        'sucharitasamitasethi@gmail.com': 'STB4262',
        'sandeepbarik8144@gmail.com': 'STB4263',
        'Sangramsk7008@gmail.com': 'STB4264',
        'sangramrath2002@gmail.com': 'STB4265',
        'nandasanskar2233@gmail.com': 'STB4266',
        'santanubiswal890@gmail.com': 'STB4267',
        'santimundari4@gmail.com': 'STB4268',
        'skjena770@gmail.com': 'STB4269',
        'spradhan7656@gmail.com': 'STB4270',
        'santoshmishra9583@gmail.com': 'STB4271',
        'simasarmistha47@gmail.com': 'STB4272',
        'sarthakjena904@gmail.com': 'STB4273',
        '2001sasmita.das@gmail.com': 'STB4274',
        'sonamsasmita@gmail.com': 'STB4275',
        'satrujitswain2002@gmail.com': 'STB4276',
        'satyaprakashcool100@gmail.com': 'STB4277',
        'Satyabanpanigrahi267@gnail.com': 'STB4278',
        'satyabratakulhari91@gmail.com': 'STB4279',
        'vipersatya123@gmail.com': 'STB4280',
        'Satyadevmohanty23@gmail.com': 'STB4281',
        'swagsahil9090331047@gmail.com': 'STB4282',
        'satyajitsahoo150@gmail.com': 'STB4283',
        'satyajitrout220@gmail.com': 'STB4284',
        'satyajitsahoo3503@gmail.com': 'STB4285',
        'dassatyam56@gmail.com': 'STB4286',
        'dassatyanidhi@gmail.com': 'STB4287',
        'satyaranjanjena19992017@gmail.com': 'STB4288',
        'satyashreepatra93@gmail.com': 'STB4289',
        'Shaikhsartaz425@gmail.com': 'STB4290',
        'acharyashashikala05@gmail.com': 'STB4291',
        'shibaditya19@gmail.com': 'STB4292',
        'shiba.lucky196@gmail.com': 'STB4293',
        'samalayush003@gmail.com': 'STB4294',
        'shradhabs18432@gmail.com': 'STB4295',
        'shyamsundara1504@gmail.com': 'STB4296',
        'sibasankarsamantaray123@gmail.com': 'STB4297',
        'sibasisgouda18@gmail.com': 'STB4298',
        'Sidhantabehera460@gmail.com': 'STB4299',
        'sidhantabisoyi94@gmail.com': 'STB4300',
        'sidharthdas2023@gmail.com': 'STB4301',
        'smrutiranjaprqdhan3580@gmail.com': 'STB4302',
        'smrutirashmi98@gmail.com': 'STB4303',
        'smrutirekha753@gmail.com': 'STB4304',
        'sonusethi500@gmail.com': 'STB4305',
        'soumyaranjanp994@gmail.com': 'STB4306',
        'soumyasamal393@gmail.com': 'STB4307',
        'Soumayaransahoo8022@gmail.com': 'STB4308',
        'Soumyaranjan548645282@gmail.com': 'STB4309',
        'Soumyashreebehera874@gmail.com': 'STB4310',
        '9777238708skk@gmail.com': 'STB4311',
        'patisouravkumar384@gmail.com': 'STB4312',
        'souravsatapathy0575@gmail.com': 'STB4313',
        'swainsipun256@gmail.com': 'STB4314',
        'srutikantab@gmail.com': 'STB4315',
        'subhasumanbej984@gmail.com': 'STB4316',
        'biswalsubhalaxmi8@gmail.com': 'STB4317',
        'subhalaxmipatra323@gmail.com': 'STB4318',
        'subhalaxmis53@gmail.com': 'STB4319',
        'subhammallik51@gmail.com': 'STB4320',
        'subhashreebeherasubhashree@gmail.com': 'STB4321',
        'Subhashreesahoo9197@gmail.com': 'STB4322',
        'subhashreedas26123@gmail.com': 'STB4323',
        'subhashrees118@gmail.com': 'STB4324',
        'subashis0002@gmail.com': 'STB4325',
        'Subhasmitapanda60@gmail.com': 'STB4326',
        'sspsweety2001@gmail.com': 'STB4327',
        'routsubhransu152@gmail.com': 'STB4328',
        'skumarsahoo470@gmail.com': 'STB4329',
        'subrat6920@gmail.com': 'STB4330',
        'psubrat686@gmail.com': 'STB4331',
        'ssubratkumar75@gmail.com': 'STB4332',
        'subratswain19991@gmail.com': 'STB4333',
        'beherasucharita92@gmail.com': 'STB4334',
        'beherasuchismita961@gmail.com': 'STB4335',
        'tripathysudhansukumar@gmail.com': 'STB4336',
        'sudhansupradhan591@gmail.com': 'STB4337',
        'sudhansumohapatra952@gmail.com': 'STB4338',
        'biswalsudipta1@gmail.com': 'STB4339',
        'sahilkumar96682@gmail.com': 'STB4340',
        'sujatab312@gmail.com': 'STB4341',
        'prachichoudhury2021@gmail.com': 'STB4342',
        'sujatapalai05@gmail.com': 'STB4343',
        'sujitsipu0111@gmail.com': 'STB4344',
        'chandsumankumar0@gmail.com': 'STB4345',
        'garu.suman321@outlook.com': 'STB4346',
        'nayak123sumitra@gmail.com': 'STB4347',
        'nayaksunetra78@gmail.com': 'STB4348',
        'sunitabiswal8763@gmail.com': 'STB4349',
        'suprabha696@gmail.com': 'STB4350',
        'surendratadingi17@gmail.com': 'STB4351',
        'sahoosusanta967@gmail.com': 'STB4352',
        'chinu754218@gmail.com': 'STB4353',
        'dassushreesukanya@gmail.com': 'STB4354',
        'susmitachinmaya2021@gmail.com': 'STB4355',
        'alishaalisha42358@gmail.com': 'STB4356',
        'Suvajitadhal12@gmail.com': 'STB4357',
        'suvaranjan01@gmail.com': 'STB4358',
        'nayaksuvendu78@gmail.com': 'STB4359',
        'swagatamparida@gmail.com': 'STB4360',
        'Swapnanayak515@gmail.com': 'STB4361',
        'swapnilmaharana999@gmail.com': 'STB4362',
        'swatisagarika001@gmail.com': 'STB4363',
        'stb020@nist.edu': 'STB4364',
        'email2tapasb@gmail.com': 'STB4365',
        'mohantyk3377@gmail.com': 'STB4366',
        'tulubehera9503@gmail.com': 'STB4367',
        'turingamallick795@gmail.com': 'STB4368',
        'umasankardash010@gmail.com': 'STB4369',
        'urbashibehera732@gmail.com': 'STB4370',
        'vamsipoosarla1622@gmail.com': 'STB4371',
        'yashobantasahoo9861@gmail.com': 'STB4372',

    };

    const uidDisplay = document.getElementById('uidDisplay');
    if (uidMapping.hasOwnProperty(email)) {
        uidDisplay.textContent = `Your UID is: ${uidMapping[email]}`;
    } else {
        uidDisplay.textContent = 'UID not found for this email.';
    }
}
