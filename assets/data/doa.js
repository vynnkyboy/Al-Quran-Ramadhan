const doa = [
	{
		nama : "Buka Puasa",
		arab : "اَللّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ بِرَحْمَتِكَ يَا اَرْحَمَ الرَّحِمِيْنَ",
		latin : "Allahumma laka shumtu wa bika amantu wa'ala rizqika afthartu. Birrahmatika yaa arhamar roohimin.",
		indo : "Ya Allah, untuk Mu aku berpuasa, dan kepada Mu aku beriman, dan dengan rezeki Mu aku berbuka. Dengan rahmat Mu wahai yang Maha Pengasih dan Penyayang.",
		warna : 1
	},
	{
		nama : "Sebelum Makan",
		arab : "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
		latin : "Alloohumma barik lanaa fiimaa razatanaa waqinaa 'adzaa bannar",
		indo : "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka",
		warna : 4
	},
	{
		nama : "Sesudah Makan",
		arab : "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
		latin : "Alhamdu lillaahil ladzii ath'amanaa wa saqoonaa wa ja'alnaa muslimiin",
		indo : "Segala puji bagi Allah yang telah memberi makan kami dan minuman kami, serta menjadikan kami sebagai orang-orang islam",
		warna : 3
	},
	{
		nama : "Ketika Makan Lupa Membaca Doa",
		arab : "بِسْمِ اللهِ فِىِ أَوَّلِهِ وَآخِرِهِ",
		latin : "Bismillaahi fii awwalihi wa aakhirihi",
		indo : "Dengan menyebut nama Allah pada awal dan akhirnya",
		warna: 4
	},
	{
		nama : "Sebelum Tidur",
		arab : "بِسْمِكَ اللّٰهُمَّ اَحْيَا وَاَمُوْتُ",
		latin : "Bismikallohumma ahya wa amuutu",
		indo : "Dengan menyebut nama-Mu ya Allah, aku hidup dan aku mati",
		warna : 5
	},
	{
		nama : "Masuk Kamar Mandi Atau Toilet",
		arab : "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
		latin : "Alloohumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
		indo : "Ya Allah, aku berlindung pada-Mu dari godaan syetan  laki-laki dan setan perempuan",
		warna : 2
	},
	{
		nama : " Ketika Bercermin",
		arab : "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",
		latin : "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
		indo : "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku",
		warna : 3
	},
	{
		nama : "Keluar Rumah",
		arab : "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
		latin : "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
		indo :  "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah.",
		warna : 2
	},
	{
		nama : " Masuk Rumah",
		arab : "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
		latin : "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
		indo :  "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal",
		warna : 5
	},
	{
		nama : "  Memohon Ilmu Yang Bermanfaat",
		arab : "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
		latin : "Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
		indo :  "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima",
		warna : 1
	},
	{
		nama : " Sebelum Belajar",
		arab : "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
		latin : "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
		indo :  "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman",
		warna : 2
	},
	{
		nama : "  Sebelum Wudhu",
		arab : "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
		latin : "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
		indo :  "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala",
		warna : 3
	},
	{
		nama : "  Setelah Wudhu ",
		arab : "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
		latin : "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",
		indo :  "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh",
		warna : 3
	},

];