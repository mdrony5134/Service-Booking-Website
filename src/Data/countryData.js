//Bangladesh all division

const bangladeshDivisions = [
  { id: 100, division_name: "Dhaka" },
  { id: 101, division_name: "Chattogram" },
  { id: 102, division_name: "Khulna" },
  { id: 103, division_name: "Rajshahi" },
  { id: 104, division_name: "Barishal" },
  { id: 105, division_name: "Sylhet" },
  { id: 106, division_name: "Rangpur" },
  { id: 107, division_name: "Mymensingh" },
];

// division with districts

const divisionsWithDistricts = [
  {
    division_id: 100,
    districts: [
      { district_id: 1001, district_name: "Dhaka" },
      { district_id: 1002, district_name: "Narayanganj" },
      { district_id: 1003, district_name: "Narsingdi" },
      { district_id: 1004, district_name: "Manikganj" },
      { district_id: 1005, district_name: "Munshiganj" },
      { district_id: 1006, district_name: "Gazipur" },
      { district_id: 1007, district_name: "Tangail" },
      { district_id: 1008, district_name: "Kishoreganj" },
      { district_id: 1009, district_name: "Shariatpur" },
      { district_id: 1010, district_name: "Madaripur" },
      { district_id: 1011, district_name: "Netrokona" },
      { district_id: 1012, district_name: "Faridpur" },
      { district_id: 1013, district_name: "Gopalganj" },
      { district_id: 1014, district_name: "Rajbari" },
    ],
  },
  {
    division_id: 101,
    districts: [
      { district_id: 1015, district_name: "Chattogram" },
      { district_id: 1016, district_name: "Cox's Bazar" },
      { district_id: 1017, district_name: "Cumilla" },
      { district_id: 1018, district_name: "Feni" },
      { district_id: 1019, district_name: "Lakshmipur" },
      { district_id: 1020, district_name: "Noakhali" },
      { district_id: 1021, district_name: "Rangamati" },
      { district_id: 1022, district_name: "Khagrachari" },
      { district_id: 1023, district_name: "Bandarban" },
      { district_id: 1024, district_name: "Brambon Bariya" },
      { district_id: 1025, district_name: "Chandpur" },
    ],
  },
  {
    division_id: 102,
    districts: [
      { district_id: 1026, district_name: "Khulna" },
      { district_id: 1027, district_name: "Bagerhat" },
      { district_id: 1028, district_name: "Chuadanga" },
      { district_id: 1029, district_name: "Jashore" },
      { district_id: 1030, district_name: "Jhenaidah" },
      { district_id: 1031, district_name: "Kushtia" },
      { district_id: 1032, district_name: "Magura" },
      { district_id: 1033, district_name: "Meherpur" },
      { district_id: 1034, district_name: "Narail" },
      { district_id: 1035, district_name: "Satkhira" },
    ],
  },
  {
    division_id: 103,
    districts: [
      { district_id: 1036, district_name: "Rajshahi" },
      { district_id: 1037, district_name: "Bogra" },
      { district_id: 1038, district_name: "Joypurhat" },
      { district_id: 1039, district_name: "Naogaon" },
      { district_id: 1040, district_name: "Natore" },
      { district_id: 1041, district_name: "Pabna" },
      { district_id: 1042, district_name: "Chapainawabganj" },
      { district_id: 1043, district_name: "Sherpur" },
    ],
  },
  {
    division_id: 104,
    districts: [
      { district_id: 1044, district_name: "Barishal" },
      { district_id: 1045, district_name: "Bhola" },
      { district_id: 1046, district_name: "Jhalokati" },
      { district_id: 1047, district_name: "Barguna" },
      { district_id: 1048, district_name: "Patuakhali" },
      { district_id: 1049, district_name: "Pirojpur" },
    ],
  },
  {
    division_id: 105,
    districts: [
      { district_id: 1050, district_name: "Sylhet" },
      { district_id: 1051, district_name: "Moulvibazar" },
      { district_id: 1052, district_name: "Habiganj" },
      { district_id: 1053, district_name: "Sunamganj" },
    ],
  },
  {
    division_id: 106,
    districts: [
      { district_id: 1054, district_name: "Rangpur" },
      { district_id: 1055, district_name: "Dinajpur" },
      { district_id: 1056, district_name: "Kurigram" },
      { district_id: 1057, district_name: "Lalmonirhat" },
      { district_id: 1058, district_name: "Nilphamari" },
      { district_id: 1059, district_name: "Panchagarh" },
      { district_id: 1060, district_name: "Thakurgaon" },
      { district_id: 1061, district_name: "Gaibandha" },
    ],
  },
  {
    division_id: 107,
    districts: [
      { district_id: 1062, district_name: "Mymensingh" },
      { district_id: 1063, district_name: "Jamalpur" },
      { district_id: 1064, district_name: "Sherpur" },
      { district_id: 1065, district_name: "Netrokona" },
    ],
  },
];

// district with  upzila

const districtWithUpzila = [
  {
    district_id: 1001,
    upazilas: [
      { upazila_id: 5001, upazila_name: "Dhamrai" },
      { upazila_id: 5002, upazila_name: "Dohar" },
      { upazila_id: 5003, upazila_name: "Keraniganj" },
      { upazila_id: 5004, upazila_name: "Nawabganj" },
      { upazila_id: 5005, upazila_name: "Savar" },
    ],
  },
  {
    district_id: 1002,
    upazilas: [
      { upazila_id: 5006, upazila_name: "Narayanganj Sadar" },
      { upazila_id: 5007, upazila_name: "Araihazar" },
      { upazila_id: 5008, upazila_name: "Narayanganj" },
      { upazila_id: 5009, upazila_name: "Sonargaon" },
      { upazila_id: 5010, upazila_name: "Bandar" },
    ],
  },
  {
    district_id: 1003,
    upazilas: [
      { upazila_id: 5011, upazila_name: "Narsingdi Sadar" },
      { upazila_id: 5012, upazila_name: "Belabo" },
      { upazila_id: 5013, upazila_name: "Monohordi" },
      { upazila_id: 5014, upazila_name: "Shibpur" },
      { upazila_id: 5015, upazila_name: "Raipura" },
      { upazila_id: 5016, upazila_name: "Palash" },
    ],
  },
  {
    district_id: 1004,
    upazilas: [
      { upazila_id: 5017, upazila_name: "Manikganj Sadar" },
      { upazila_id: 5018, upazila_name: "Saturia" },
      { upazila_id: 5019, upazila_name: "Shivalaya" },
      { upazila_id: 5020, upazila_name: "Singair" },
      { upazila_id: 5021, upazila_name: "Harirampur" },
      { upazila_id: 5022, upazila_name: "Daulatpur" },
      { upazila_id: 5023, upazila_name: "Ghior" },
    ],
  },
  {
    district_id: 1005,
    upazilas: [
      { upazila_id: 5024, upazila_name: "Munshiganj Sadar" },
      { upazila_id: 5025, upazila_name: "Sreenagar" },
      { upazila_id: 5026, upazila_name: "Sirajdikhan" },
      { upazila_id: 5027, upazila_name: "Tongibari" },
      { upazila_id: 5028, upazila_name: "Louhajang" },
      { upazila_id: 5029, upazila_name: "Gazaria" },
    ],
  },
  {
    district_id: 1006,
    upazilas: [
      { upazila_id: 5030, upazila_name: "Gazipur Sadar" },
      { upazila_id: 5031, upazila_name: "Kaliakair" },
      { upazila_id: 5032, upazila_name: "Sreepur" },
      { upazila_id: 5033, upazila_name: "Kapasia" },
      { upazila_id: 5034, upazila_name: "Kaliganj" },
    ],
  },
  {
    district_id: 1007,
    upazilas: [
      { upazila_id: 5035, upazila_name: "Tangail Sadar" },
      { upazila_id: 5036, upazila_name: "Ghatail" },
      { upazila_id: 5037, upazila_name: "Kalihati" },
      { upazila_id: 5038, upazila_name: "Nagarpur" },
      { upazila_id: 5039, upazila_name: "Dhanbari" },
      { upazila_id: 5040, upazila_name: "Basail" },
      { upazila_id: 5041, upazila_name: "Bhuapur" },
      { upazila_id: 5042, upazila_name: "Delduar" },
      { upazila_id: 5043, upazila_name: "Gopalpur" },
      { upazila_id: 5044, upazila_name: "Madhupur" },
      { upazila_id: 5045, upazila_name: "Mirzapur" },
      { upazila_id: 5046, upazila_name: "Shakhipur" },
    ],
  },
  {
    district_id: 1008,
    upazilas: [
      { upazila_id: 5047, upazila_name: "Kishoreganj Sadar" },
      { upazila_id: 5048, upazila_name: "Nikli" },
      { upazila_id: 5049, upazila_name: "Itna" },
      { upazila_id: 5050, upazila_name: "Tarail" },
      { upazila_id: 5051, upazila_name: "Hossainpur" },
      { upazila_id: 5052, upazila_name: "Austagram" },
      { upazila_id: 5053, upazila_name: "Bajitpur" },
      { upazila_id: 5054, upazila_name: "Bhairab" },
      { upazila_id: 5055, upazila_name: "Karimganj" },
      { upazila_id: 5056, upazila_name: "Katiadi" },
      { upazila_id: 5057, upazila_name: "Kuliarchar" },
      { upazila_id: 5058, upazila_name: "Mithamoin" },
      { upazila_id: 5059, upazila_name: "Pakundia" },
    ],
  },
  {
    district_id: 1009,
    upazilas: [
      { upazila_id: 5060, upazila_name: "Shariatpur Sadar" },
      { upazila_id: 5061, upazila_name: "Naria" },
      { upazila_id: 5062, upazila_name: "Jajira" },
      { upazila_id: 5063, upazila_name: "Bhedarganj" },
      { upazila_id: 5064, upazila_name: "Gosairhat" },
      { upazila_id: 5065, upazila_name: "Damuddya" },
    ],
  },
  {
    district_id: 1010,
    upazilas: [
      { upazila_id: 5066, upazila_name: "Madaripur Sadar" },
      { upazila_id: 5067, upazila_name: "Shibchar" },
      { upazila_id: 5068, upazila_name: "Kalkini" },
      { upazila_id: 5069, upazila_name: "Rajoir" },
      { upazila_id: 5070, upazila_name: "Zajira" },
    ],
  },
  {
    district_id: 1011,
    upazilas: [
      { upazila_id: 5071, upazila_name: "Netrokona Sadar" },
      { upazila_id: 5072, upazila_name: "Barhatta" },
      { upazila_id: 5073, upazila_name: "Khaliajuri" },
      { upazila_id: 5074, upazila_name: "Durgapur" },
      { upazila_id: 5075, upazila_name: "Atpara" },
      { upazila_id: 5076, upazila_name: "Kenduli" },
      { upazila_id: 5077, upazila_name: "Purbadhala" },
      { upazila_id: 5078, upazila_name: "Mohanganj" },
      { upazila_id: 5079, upazila_name: "Netrokona" },
      { upazila_id: 5080, upazila_name: "Khaliajuri" },
    ],
  },
  {
    district_id: 1012,
    upazilas: [
      { upazila_id: 5081, upazila_name: "Faridpur Sadar" },
      { upazila_id: 5082, upazila_name: "Alfadanga" },
      { upazila_id: 5083, upazila_name: "Bhanga" },
      { upazila_id: 5084, upazila_name: "Boalmari" },
      { upazila_id: 5085, upazila_name: "Charbhadrasan" },
      { upazila_id: 5086, upazila_name: "Madhukhali" },
      { upazila_id: 5087, upazila_name: "Nagarkanda" },
      { upazila_id: 5088, upazila_name: "Sadarpur" },
      { upazila_id: 5089, upazila_name: "Saltha" },
    ],
  },
  {
    district_id: 1013,
    upazilas: [
      { upazila_id: 5090, upazila_name: "Gopalganj Sadar" },
      { upazila_id: 5091, upazila_name: "Kashiani" },
      { upazila_id: 5092, upazila_name: "Tungipara" },
      { upazila_id: 5093, upazila_name: "Kotwalipara" },
      { upazila_id: 5094, upazila_name: "Muksudpur" },
    ],
  },
  {
    district_id: 1014,
    upazilas: [
      { upazila_id: 5095, upazila_name: "Rajbari Sadar" },
      { upazila_id: 5096, upazila_name: "Kalukhali" },
      { upazila_id: 5097, upazila_name: "Goalondo" },
      { upazila_id: 5098, upazila_name: "Baliakandi" },
      { upazila_id: 5099, upazila_name: "Pangsha" },
    ],
  },

  //   chattogram divison

  {
    district_id: 1015,
    upazilas: [
      { upazila_id: 5071, upazila_name: "Chattogram Sadar" },
      { upazila_id: 5072, upazila_name: "Patiya" },
      { upazila_id: 5073, upazila_name: "Fatikchhari" },
      { upazila_id: 5074, upazila_name: "Mirsharai" },
      { upazila_id: 5075, upazila_name: "Sandwip" },
      { upazila_id: 5076, upazila_name: "Rangunia" },
      { upazila_id: 5077, upazila_name: "Sitakunda" },
      { upazila_id: 5078, upazila_name: "Banskhali" },
      { upazila_id: 5079, upazila_name: "Boalkhali" },
      { upazila_id: 5080, upazila_name: "Hathazari" },
      { upazila_id: 5081, upazila_name: "Anwara" },
      { upazila_id: 5082, upazila_name: "Fatikchhari" },
      { upazila_id: 5083, upazila_name: "Raozan" },
      { upazila_id: 5084, upazila_name: "Satkania" },
      { upazila_id: 1114, upazila_name: "Chandanish" },
      { upazila_id: 1115, upazila_name: "Karnaphuli" },
      { upazila_id: 1116, upazila_name: "Lohagara" },
    ],
  },
  {
    district_id: 1016,
    upazilas: [
      { upazila_id: 5085, upazila_name: "Cox's Bazar Sadar" },
      { upazila_id: 5086, upazila_name: "Teknaf" },
      { upazila_id: 5087, upazila_name: "Ukhiya" },
      { upazila_id: 5088, upazila_name: "Ramu" },
      { upazila_id: 5089, upazila_name: "Maheshkhali" },
      { upazila_id: 5090, upazila_name: "Kutubdia" },
      { upazila_id: 5091, upazila_name: "Chakaria" },
      { upazila_id: 1117, upazila_name: "Pekua" },
    ],
  },
  {
    district_id: 1017,
    upazilas: [
      { upazila_id: 5092, upazila_name: "Cumilla Sadar" },
      { upazila_id: 5093, upazila_name: "Titas" },
      { upazila_id: 5094, upazila_name: "Debidwar" },
      { upazila_id: 5095, upazila_name: "Muradnagar" },
      { upazila_id: 5096, upazila_name: "Barura" },
      { upazila_id: 5097, upazila_name: "Brahmanpara" },
      { upazila_id: 5098, upazila_name: "Nangalkot" },
      { upazila_id: 5099, upazila_name: "Laksam" },
      { upazila_id: 5100, upazila_name: "Homna" },
      { upazila_id: 5101, upazila_name: "Chandina" },
      { upazila_id: 5101, upazila_name: "Burichong" },
      { upazila_id: 5101, upazila_name: "Chouddagram" },
      { upazila_id: 5101, upazila_name: "Daudkandi" },
      { upazila_id: 5101, upazila_name: "Lalmai" },
      { upazila_id: 5101, upazila_name: "Meghna" },
      { upazila_id: 5101, upazila_name: "Monohorganj" },
    ],
  },
  {
    district_id: 1018,
    upazilas: [
      { upazila_id: 5102, upazila_name: "Feni Sadar" },
      { upazila_id: 5103, upazila_name: "Daganbhuiyan" },
      { upazila_id: 5104, upazila_name: "Parshuram" },
      { upazila_id: 5105, upazila_name: "Chhagalnaiya" },
      { upazila_id: 5106, upazila_name: "Fulgazi" },
      { upazila_id: 5107, upazila_name: "Sonagazi" },
    ],
  },
  {
    district_id: 1019,
    upazilas: [
      { upazila_id: 5108, upazila_name: "Lakshmipur Sadar" },
      { upazila_id: 5109, upazila_name: "Raipur" },
      { upazila_id: 5110, upazila_name: "Ramganj" },
      { upazila_id: 5111, upazila_name: "Ramgati" },
      { upazila_id: 5112, upazila_name: "Kamolnagar" },
    ],
  },
  {
    district_id: 1020,
    upazilas: [
      { upazila_id: 5113, upazila_name: "Noakhali Sadar" },
      { upazila_id: 5114, upazila_name: "Companiganj" },
      { upazila_id: 5115, upazila_name: "Chatkhil" },
      { upazila_id: 5116, upazila_name: "Sonaimuri" },
      { upazila_id: 5117, upazila_name: "Begumganj" },
      { upazila_id: 5118, upazila_name: "Subarnachar" },
      { upazila_id: 5119, upazila_name: "Hatiya" },
      { upazila_id: 5119, upazila_name: "Kabir Hat" },
      { upazila_id: 5119, upazila_name: "Senbag" },
    ],
  },
  {
    district_id: 1021,
    upazilas: [
      { upazila_id: 5120, upazila_name: "Rangamati Sadar" },
      { upazila_id: 5121, upazila_name: "Baghaichhari" },
      { upazila_id: 5122, upazila_name: "Barkal" },
      { upazila_id: 5123, upazila_name: "Kaptai" },
      { upazila_id: 5124, upazila_name: "Juraichhari" },
      { upazila_id: 5125, upazila_name: "Belaichari" },
      { upazila_id: 5126, upazila_name: "Langadu" },
      { upazila_id: 5126, upazila_name: "Kaukhali" },
      { upazila_id: 5126, upazila_name: "Nanniarchar" },
      { upazila_id: 5126, upazila_name: "Rajosthali" },
    ],
  },
  {
    district_id: 1022,
    upazilas: [
      { upazila_id: 5127, upazila_name: "Khagrachari Sadar" },
      { upazila_id: 5128, upazila_name: "Dighinala" },
      { upazila_id: 5129, upazila_name: "Lakshmichhari" },
      { upazila_id: 5130, upazila_name: "Manikchhari" },
      { upazila_id: 5131, upazila_name: "Mahalchhari" },
      { upazila_id: 5132, upazila_name: "Panchhari" },
      { upazila_id: 5132, upazila_name: "Guimara" },
      { upazila_id: 5132, upazila_name: "Matiranga" },
      { upazila_id: 5132, upazila_name: "Ramgarh" },
    ],
  },
  {
    district_id: 1023,
    upazilas: [
      { upazila_id: 5133, upazila_name: "Bandarban Sadar" },
      { upazila_id: 5134, upazila_name: "Thanchi" },
      { upazila_id: 5135, upazila_name: "Rowangchhari" },
      { upazila_id: 5136, upazila_name: "Lama" },
      { upazila_id: 5137, upazila_name: "Ruma" },
      { upazila_id: 5138, upazila_name: "Naikhongchhari" },
      { upazila_id: 5138, upazila_name: "Alikadam" },
    ],
  },
  {
    district_id: 1024,
    upazilas: [
      { upazila_id: 5139, upazila_name: "Brahmanbaria Sadar" },
      { upazila_id: 5140, upazila_name: "Ashuganj" },
      { upazila_id: 5141, upazila_name: "Sarail" },
      { upazila_id: 5142, upazila_name: "Nabinagar" },
      { upazila_id: 5143, upazila_name: "Bancharampur" },
      { upazila_id: 5144, upazila_name: "Kasba" },
      { upazila_id: 5145, upazila_name: "Akhaura" },
      { upazila_id: 5146, upazila_name: "Nasirnagar" },
    ],
  },
  {
    district_id: 1025,
    upazilas: [
      { upazila_id: 5147, upazila_name: "Chandpur Sadar" },
      { upazila_id: 5148, upazila_name: "Matlab Dakshin" },
      { upazila_id: 5149, upazila_name: "Matlab Uttar" },
      { upazila_id: 5150, upazila_name: "Haimchar" },
      { upazila_id: 5151, upazila_name: "Kachua" },
      { upazila_id: 5152, upazila_name: "Faridganj" },
      { upazila_id: 5153, upazila_name: "Shahrasti" },
    ],
  },

  //   khulna

  {
    district_id: 1026,
    upazilas: [
      { upazila_id: 5154, upazila_name: "Khulna Sadar" },
      { upazila_id: 5155, upazila_name: "Dighalia" },
      { upazila_id: 5156, upazila_name: "Koira" },
      { upazila_id: 5157, upazila_name: "Terkhida" },
      { upazila_id: 5158, upazila_name: "Dumuria" },
      { upazila_id: 5159, upazila_name: "Batiaghata" },
      { upazila_id: 5160, upazila_name: "Phultala" },
      { upazila_id: 5161, upazila_name: "Khalishpur" },
      { upazila_id: 5162, upazila_name: "Paikgacha" },
      { upazila_id: 5163, upazila_name: "Rupsa" },
    ],
  },
  {
    district_id: 1027,
    upazilas: [
      { upazila_id: 5164, upazila_name: "Bagerhat Sadar" },
      { upazila_id: 5165, upazila_name: "Mollahat" },
      { upazila_id: 5166, upazila_name: "Kachua" },
      { upazila_id: 5167, upazila_name: "Chitalmari" },
      { upazila_id: 5168, upazila_name: "Sadar" },
      { upazila_id: 5169, upazila_name: "Fakirhat" },
      { upazila_id: 5170, upazila_name: "Morrelganj" },
    ],
  },
  {
    district_id: 1028,
    upazilas: [
      { upazila_id: 5171, upazila_name: "Chuadanga Sadar" },
      { upazila_id: 5172, upazila_name: "Damurhuda" },
      { upazila_id: 5173, upazila_name: "Alamdanga" },
      { upazila_id: 5174, upazila_name: "Jibannagar" },
    ],
  },
  {
    district_id: 1029,
    upazilas: [
      { upazila_id: 5175, upazila_name: "Jashore Sadar" },
      { upazila_id: 5176, upazila_name: "Abhaynagar" },
      { upazila_id: 5177, upazila_name: "Bagherpara" },
      { upazila_id: 5178, upazila_name: "Benapole" },
      { upazila_id: 5179, upazila_name: "Sharsha" },
    ],
  },
  {
    district_id: 1030,
    upazilas: [
      { upazila_id: 5180, upazila_name: "Jhenaidah Sadar" },
      { upazila_id: 5181, upazila_name: "Shailkupa" },
      { upazila_id: 5182, upazila_name: "Kotchandpur" },
      { upazila_id: 5183, upazila_name: "Harinakundu" },
      { upazila_id: 5184, upazila_name: "Kaliganj" },
    ],
  },
  {
    district_id: 1031,
    upazilas: [
      { upazila_id: 5185, upazila_name: "Khustia Sadar" },
      { upazila_id: 5186, upazila_name: "Kumarkhali" },
      { upazila_id: 5187, upazila_name: "Shailkupa" },
      { upazila_id: 5188, upazila_name: "Daulatkur" },
    ],
  },
  {
    district_id: 1032,
    upazilas: [
      { upazila_id: 5189, upazila_name: "Magura Sadar" },
      { upazila_id: 5190, upazila_name: "Sreepur" },
      { upazila_id: 5191, upazila_name: "Mohammadpur" },
    ],
  },
  {
    district_id: 1033,
    upazilas: [
      { upazila_id: 5192, upazila_name: "Meherpur Sadar" },
      { upazila_id: 5193, upazila_name: "Mujibnagar" },
    ],
  },
  {
    district_id: 1034,
    upazilas: [
      { upazila_id: 5194, upazila_name: "Narail Sadar" },
      { upazila_id: 5195, upazila_name: "Kalia" },
    ],
  },
  {
    district_id: 1035,
    upazilas: [
      { upazila_id: 5196, upazila_name: "Satkhira Sadar" },
      { upazila_id: 5197, upazila_name: "Kaliganj" },
      { upazila_id: 5198, upazila_name: "Assasuni" },
      { upazila_id: 5199, upazila_name: "Shyamnagar" },
      { upazila_id: 5200, upazila_name: "Tala" },
    ],
  },

  // Rajshahi

  {
    district_id: 1036,
    upazilas: [
      { upazila_id: 5201, upazila_name: "Rajshahi Sadar" },
      { upazila_id: 5202, upazila_name: "Puthia" },
      { upazila_id: 5203, upazila_name: "Bagmara" },
      { upazila_id: 5204, upazila_name: "Charghat" },
      { upazila_id: 5205, upazila_name: "Durgapur" },
      { upazila_id: 5206, upazila_name: "Tanore" },
      { upazila_id: 5207, upazila_name: "Mohadevpur" },
      { upazila_id: 5208, upazila_name: "Nawabganj" },
    ],
  },
  {
    district_id: 1037,
    upazilas: [
      { upazila_id: 5209, upazila_name: "Bogra Sadar" },
      { upazila_id: 5210, upazila_name: "Sarai Akram" },
      { upazila_id: 5211, upazila_name: "Shajahanpur" },
      { upazila_id: 5212, upazila_name: "Kahaloo" },
      { upazila_id: 5213, upazila_name: "Nandigram" },
      { upazila_id: 5214, upazila_name: "Dhunat" },
      { upazila_id: 5215, upazila_name: "Sonatola" },
      { upazila_id: 5216, upazila_name: "Dupchanchia" },
      { upazila_id: 5217, upazila_name: "Sherpur" },
    ],
  },
  {
    district_id: 1038,
    upazilas: [
      { upazila_id: 5218, upazila_name: "Joypurhat Sadar" },
      { upazila_id: 5219, upazila_name: "Kahalu" },
      { upazila_id: 5220, upazila_name: "Akkelpur" },
      { upazila_id: 5221, upazila_name: "Santahar" },
      { upazila_id: 5222, upazila_name: "Kalai" },
    ],
  },
  {
    district_id: 1039,
    upazilas: [
      { upazila_id: 5223, upazila_name: "Naogaon Sadar" },
      { upazila_id: 5224, upazila_name: "Atrai" },
      { upazila_id: 5225, upazila_name: "Raninagar" },
      { upazila_id: 5226, upazila_name: "Porsha" },
      { upazila_id: 5227, upazila_name: "Manda" },
      { upazila_id: 5228, upazila_name: "Niamatpur" },
      { upazila_id: 5229, upazila_name: "Sapahar" },
    ],
  },
  {
    district_id: 1040,
    upazilas: [
      { upazila_id: 5230, upazila_name: "Natore Sadar" },
      { upazila_id: 5231, upazila_name: "Baraigram" },
      { upazila_id: 5232, upazila_name: "Lalpur" },
      { upazila_id: 5233, upazila_name: "Singra" },
      { upazila_id: 5234, upazila_name: "Gurdaspur" },
    ],
  },
  {
    district_id: 1041,
    upazilas: [
      { upazila_id: 5235, upazila_name: "Pabna Sadar" },
      { upazila_id: 5236, upazila_name: "Chatmohar" },
      { upazila_id: 5237, upazila_name: "Santhia" },
      { upazila_id: 5238, upazila_name: "Sujanagar" },
      { upazila_id: 5239, upazila_name: "Faridpur" },
      { upazila_id: 5240, upazila_name: "Atghoria" },
    ],
  },
  {
    district_id: 1042,
    upazilas: [
      { upazila_id: 5241, upazila_name: "Chapainawabganj Sadar" },
      { upazila_id: 5242, upazila_name: "Shibganj" },
      { upazila_id: 5243, upazila_name: "Gomostapur" },
      { upazila_id: 5244, upazila_name: "Niamatpur" },
      { upazila_id: 5245, upazila_name: "Bholahat" },
    ],
  },
  {
    district_id: 1043,
    upazilas: [
      { upazila_id: 5246, upazila_name: "Sherpur Sadar" },
      { upazila_id: 5247, upazila_name: "Jamalpur" },
      { upazila_id: 5248, upazila_name: "Nokla" },
      { upazila_id: 5249, upazila_name: "Sreerampur" },
    ],
  },

  // Barisal

  {
    district_id: 1044,
    upazilas: [
      { upazila_id: 5250, upazila_name: "Barishal Sadar" },
      { upazila_id: 5251, upazila_name: "Babuganj" },
      { upazila_id: 5252, upazila_name: "Muladi" },
      { upazila_id: 5253, upazila_name: "Hizla" },
      { upazila_id: 5254, upazila_name: "Banaripara" },
      { upazila_id: 5255, upazila_name: "Mehendiganj" },
      { upazila_id: 5256, upazila_name: "Wazirpur" },
    ],
  },
  {
    district_id: 1045,
    upazilas: [
      { upazila_id: 5257, upazila_name: "Bhola Sadar" },
      { upazila_id: 5258, upazila_name: "Char Fasson" },
      { upazila_id: 5259, upazila_name: "Daudkandi" },
      { upazila_id: 5260, upazila_name: "Lalmohan" },
      { upazila_id: 5261, upazila_name: "Tazumuddin" },
      { upazila_id: 5262, upazila_name: "Borhanuddin" },
      { upazila_id: 5263, upazila_name: "Monpura" },
      { upazila_id: 5264, upazila_name: "Sadar" },
    ],
  },
  {
    district_id: 1046,
    upazilas: [
      { upazila_id: 5265, upazila_name: "Jhalokati Sadar" },
      { upazila_id: 5266, upazila_name: "Kathalia" },
      { upazila_id: 5267, upazila_name: "Rajapur" },
      { upazila_id: 5268, upazila_name: "Bakerganj" },
    ],
  },
  {
    district_id: 1047,
    upazilas: [
      { upazila_id: 5269, upazila_name: "Barguna Sadar" },
      { upazila_id: 5270, upazila_name: "Amtali" },
      { upazila_id: 5271, upazila_name: "Taltali" },
      { upazila_id: 5272, upazila_name: "Bauphal" },
      { upazila_id: 5273, upazila_name: "Patuakhali" },
    ],
  },
  {
    district_id: 1048,
    upazilas: [
      { upazila_id: 5274, upazila_name: "Patuakhali Sadar" },
      { upazila_id: 5275, upazila_name: "Galachipa" },
      { upazila_id: 5276, upazila_name: "Mirzaganj" },
      { upazila_id: 5277, upazila_name: "Dashmina" },
      { upazila_id: 5278, upazila_name: "Sadar" },
    ],
  },
  {
    district_id: 1049,
    upazilas: [
      { upazila_id: 5279, upazila_name: "Pirojpur Sadar" },
      { upazila_id: 5280, upazila_name: "Bhandaria" },
      { upazila_id: 5281, upazila_name: "Kawkhali" },
      { upazila_id: 5282, upazila_name: "Mathbaria" },
      { upazila_id: 5283, upazila_name: "Zianagar" },
    ],
  },

  //Sylhet

  {
    district_id: 1050,
    upazilas: [
      { upazila_id: 5284, upazila_name: "Sylhet Sadar" },
      { upazila_id: 5285, upazila_name: "Beanibazar" },
      { upazila_id: 5286, upazila_name: "Bishwanath" },
      { upazila_id: 5287, upazila_name: "Companiganj" },
      { upazila_id: 5288, upazila_name: "Jaintiapur" },
      { upazila_id: 5289, upazila_name: "South Surma" },
      { upazila_id: 5290, upazila_name: "Gowainghat" },
      { upazila_id: 5291, upazila_name: "Fenchuganj" },
    ],
  },
  {
    district_id: 1051,
    upazilas: [
      { upazila_id: 5292, upazila_name: "Moulvibazar Sadar" },
      { upazila_id: 5293, upazila_name: "Kamalganj" },
      { upazila_id: 5294, upazila_name: "Rajnagar" },
      { upazila_id: 5295, upazila_name: "Sreemangal" },
      { upazila_id: 5296, upazila_name: "Barlekha" },
      { upazila_id: 5297, upazila_name: "Juri" },
    ],
  },
  {
    district_id: 1052,
    upazilas: [
      { upazila_id: 5298, upazila_name: "Habiganj Sadar" },
      { upazila_id: 5299, upazila_name: "Lakhai" },
      { upazila_id: 5300, upazila_name: "Madhabpur" },
      { upazila_id: 5301, upazila_name: "Nabiganj" },
      { upazila_id: 5302, upazila_name: "Bahubal" },
      { upazila_id: 5303, upazila_name: "Chunarughat" },
    ],
  },
  {
    district_id: 1053,
    upazilas: [
      { upazila_id: 5304, upazila_name: "Sunamganj Sadar" },
      { upazila_id: 5305, upazila_name: "Bishwambharpur" },
      { upazila_id: 5306, upazila_name: "Jamalganj" },
      { upazila_id: 5307, upazila_name: "Dakkhin Sunamganj" },
      { upazila_id: 5308, upazila_name: "Shalla" },
      { upazila_id: 5309, upazila_name: "Doarabazar" },
      { upazila_id: 5310, upazila_name: "Taherpur" },
    ],
  },

  // Rangpur

  {
    district_id: 1054,
    upazilas: [
      { upazila_id: 5311, upazila_name: "Rangpur Sadar" },
      { upazila_id: 5312, upazila_name: "Badarganj" },
      { upazila_id: 5313, upazila_name: "Pirgachha" },
      { upazila_id: 5314, upazila_name: "Kaunia" },
      { upazila_id: 5315, upazila_name: "Mithapukur" },
      { upazila_id: 5316, upazila_name: "Ranishankail" },
      { upazila_id: 5317, upazila_name: "Tariqul" },
    ],
  },
  {
    district_id: 1055,
    upazilas: [
      { upazila_id: 5318, upazila_name: "Dinajpur Sadar" },
      { upazila_id: 5319, upazila_name: "Kaharol" },
      { upazila_id: 5320, upazila_name: "Birampur" },
      { upazila_id: 5321, upazila_name: "Ghoraghat" },
      { upazila_id: 5322, upazila_name: "Chirirbandar" },
      { upazila_id: 5323, upazila_name: "Nawabganj" },
      { upazila_id: 5324, upazila_name: "Hili" },
    ],
  },
  {
    district_id: 1056,
    upazilas: [
      { upazila_id: 5325, upazila_name: "Kurigram Sadar" },
      { upazila_id: 5326, upazila_name: "Bhurungamari" },
      { upazila_id: 5327, upazila_name: "Nageshwari" },
      { upazila_id: 5328, upazila_name: "Rajarhat" },
      { upazila_id: 5329, upazila_name: "Char Rajibpur" },
      { upazila_id: 5330, upazila_name: "Ulipur" },
      { upazila_id: 5331, upazila_name: "Ranishankail" },
    ],
  },
  {
    district_id: 1057,
    upazilas: [
      { upazila_id: 5332, upazila_name: "Lalmonirhat Sadar" },
      { upazila_id: 5333, upazila_name: "Kaliganj" },
      { upazila_id: 5334, upazila_name: "Hatibandha" },
      { upazila_id: 5335, upazila_name: "Patgram" },
      { upazila_id: 5336, upazila_name: "Aditmari" },
    ],
  },
  {
    district_id: 1058,
    upazilas: [
      { upazila_id: 5337, upazila_name: "Nilphamari Sadar" },
      { upazila_id: 5338, upazila_name: "Domar" },
      { upazila_id: 5339, upazila_name: "Jaldhaka" },
      { upazila_id: 5340, upazila_name: "Kishoreganj" },
      { upazila_id: 5341, upazila_name: "Saidpur" },
    ],
  },
  {
    district_id: 1059,
    upazilas: [
      { upazila_id: 5342, upazila_name: "Panchagarh Sadar" },
      { upazila_id: 5343, upazila_name: "Boda" },
      { upazila_id: 5344, upazila_name: "Debiganj" },
      { upazila_id: 5345, upazila_name: "Tetulia" },
      { upazila_id: 5346, upazila_name: "Atwari" },
    ],
  },
  {
    district_id: 1060,
    upazilas: [
      { upazila_id: 5347, upazila_name: "Thakurgaon Sadar" },
      { upazila_id: 5348, upazila_name: "Pirganj" },
      { upazila_id: 5349, upazila_name: "Haripur" },
      { upazila_id: 5350, upazila_name: "Ranishankail" },
      { upazila_id: 5351, upazila_name: "Baliadangi" },
    ],
  },
  {
    district_id: 1061,
    upazilas: [
      { upazila_id: 5352, upazila_name: "Gaibandha Sadar" },
      { upazila_id: 5353, upazila_name: "Sundarganj" },
      { upazila_id: 5354, upazila_name: "Gobindaganj" },
      { upazila_id: 5355, upazila_name: "Sadullapur" },
      { upazila_id: 5356, upazila_name: "Palashbari" },
      { upazila_id: 5357, upazila_name: "Kamarjani" },
    ],
  },

  //Mymensingh

  {
    district_id: 1062,
    upazilas: [
      { upazila_id: 5358, upazila_name: "Mymensingh Sadar" },
      { upazila_id: 5359, upazila_name: "Muktagachha" },
      { upazila_id: 5360, upazila_name: "Trishal" },
      { upazila_id: 5361, upazila_name: "Gaffargaon" },
      { upazila_id: 5362, upazila_name: "Ishwarganj" },
      { upazila_id: 5363, upazila_name: "Haluaghat" },
      { upazila_id: 5364, upazila_name: "Nandail" },
    ],
  },
  {
    district_id: 1063,
    upazilas: [
      { upazila_id: 5365, upazila_name: "Jamalpur Sadar" },
      { upazila_id: 5366, upazila_name: "Sarishabari" },
      { upazila_id: 5367, upazila_name: "Islampur" },
      { upazila_id: 5368, upazila_name: "Dewanganj" },
      { upazila_id: 5369, upazila_name: "Madhura" },
      { upazila_id: 5370, upazila_name: "Bakshiganj" },
    ],
  },
  {
    district_id: 1064,
    upazilas: [
      { upazila_id: 5371, upazila_name: "Sherpur Sadar" },
      { upazila_id: 5372, upazila_name: "Nakur" },
      { upazila_id: 5373, upazila_name: "Jamalpur" },
      { upazila_id: 5374, upazila_name: "Sreerampur" },
      { upazila_id: 5375, upazila_name: "Shahjahanpur" },
    ],
  },
  {
    district_id: 1065,
    upazilas: [
      { upazila_id: 5376, upazila_name: "Netrokona Sadar" },
      { upazila_id: 5377, upazila_name: "Atpara" },
      { upazila_id: 5378, upazila_name: "Durgapur" },
      { upazila_id: 5379, upazila_name: "Khaliajuri" },
      { upazila_id: 5380, upazila_name: "Mohanganj" },
      { upazila_id: 5381, upazila_name: "Purbadhola" },
      { upazila_id: 5382, upazila_name: "Barhatta" },
    ],
  },
];

export { bangladeshDivisions, divisionsWithDistricts, districtWithUpzila };
