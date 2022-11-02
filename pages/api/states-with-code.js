import Cors from "cors";
import initMiddleware from "../../lib/init-middleware";

// Initialize the cors middleware
const cors = initMiddleware(
  // You can read more about the available options here: https://github.com/expressjs/cors#configuration-options
  Cors({
    // Only allow requests with GET, POST and OPTIONS
    methods: ["GET", "POST", "OPTIONS"],
  })
);

export default async (req, res) => {
  await cors(req, res);

  let states = [];
  try {
    states = country_states.find(
      (item) => item.country === req.query.country
    )?.state;
  } catch (e) {
    console.log(e);
  }

  res.status(200).json(states);
};

const country_states = [
  {
    country: "India",
    state: [
      { stateCode: "1", stateName: "Andamans/Nicobar" },
      { stateCode: "3", stateName: "Andhra Pradesh" },
      { stateCode: "2", stateName: "Arunachal Pradesh" },
      { stateCode: "4", stateName: "Assam" },
      { stateCode: "5", stateName: "Bengal" },
      { stateCode: "6", stateName: "Bihar" },
      { stateCode: "7", stateName: "Chandigarh" },
      { stateCode: "38", stateName: "Chhattisgarh" },
      { stateCode: "27", stateName: "Dadra And Nagar Have" },
      { stateCode: "28", stateName: "Daman And Diu" },
      { stateCode: "9", stateName: "Goa" },
      { stateCode: "8", stateName: "Gujarat" },
      { stateCode: "11", stateName: "Haryana" },
      { stateCode: "10", stateName: "Himachal Pradesh" },
      { stateCode: "12", stateName: "Jammu & Kashmir" },
      { stateCode: "36", stateName: "Jharkhand" },
      { stateCode: "14", stateName: "Karnataka" },
      { stateCode: "13", stateName: "Kerala" },
      { stateCode: "15", stateName: "Ladakh" },
      { stateCode: "29", stateName: "Lakshadweep" },
      { stateCode: "30", stateName: "Madhya Pradesh" },
      { stateCode: "16", stateName: "Maharashtra" },
      { stateCode: "31", stateName: "Manipur" },
      { stateCode: "17", stateName: "Meghalaya" },
      { stateCode: "32", stateName: "Mizoram" },
      { stateCode: "19", stateName: "Nagaland" },
      { stateCode: "18", stateName: "New Delhi (Or Delhi)" },
      { stateCode: "20", stateName: "Orrisa  (Or Odisha)" },
      { stateCode: "33", stateName: "Pondicherry (Or Puducherry)" },
      { stateCode: "21", stateName: "Punjab" },
      { stateCode: "22", stateName: "Rajasthan" },
      { stateCode: "23", stateName: "Sikkim" },
      { stateCode: "24", stateName: "Tamil Nadu" },
      { stateCode: "TG", stateName: "Telangana" },
      { stateCode: "34", stateName: "Tripura" },
      { stateCode: "25", stateName: "Uttar Pradesh" },
      { stateCode: "37", stateName: "Uttarakhand" },
      { stateCode: "35", stateName: "West Bengal" },
    ],
  },
  {
    country: "United Kingdom",
    state: [
      { stateCode: "67", stateName: "Aberdeenshire" },
      { stateCode: "68", stateName: "Angus" },
      { stateCode: "69", stateName: "Antrim" },
      { stateCode: "70", stateName: "Ards" },
      { stateCode: "71", stateName: "Argyll" },
      { stateCode: "72", stateName: "Armagh" },
      { stateCode: "1", stateName: "Avon" },
      { stateCode: "73", stateName: "Ayrshire" },
      { stateCode: "74", stateName: "Ballymena" },
      { stateCode: "75", stateName: "Ballymoney" },
      { stateCode: "76", stateName: "Banbridge" },
      { stateCode: "77", stateName: "Banffshire" },
      { stateCode: "78", stateName: "Bath&Nthestsomerset" },
      { stateCode: "2", stateName: "Bedfordshire" },
      { stateCode: "79", stateName: "Belfast" },
      { stateCode: "3", stateName: "Berkshire" },
      { stateCode: "80", stateName: "Berwickshire" },
      { stateCode: "81", stateName: "Blackburn" },
      { stateCode: "82", stateName: "Blackpool" },
      { stateCode: "4", stateName: "Borders" },
      { stateCode: "83", stateName: "Bournemouth" },
      { stateCode: "84", stateName: "Bracknell Forest" },
      { stateCode: "85", stateName: "Brighton & Hove" },
      { stateCode: "86", stateName: "Bristol" },
      { stateCode: "5", stateName: "Buckinghamshire" },
      { stateCode: "87", stateName: "Caithness" },
      { stateCode: "6", stateName: "Cambridgeshire" },
      { stateCode: "88", stateName: "Carrickfergus" },
      { stateCode: "89", stateName: "Castlereagh" },
      { stateCode: "7", stateName: "Central" },
      { stateCode: "90", stateName: "Channel Islands" },
      { stateCode: "8", stateName: "Cheshire" },
      { stateCode: "91", stateName: "Clackmannanshire" },
      { stateCode: "12", stateName: "Cleveland" },
      { stateCode: "9", stateName: "Clwyd" },
      { stateCode: "92", stateName: "Coleraine" },
      { stateCode: "93", stateName: "Cookstown" },
      { stateCode: "10", stateName: "Cornwall" },
      { stateCode: "94", stateName: "Craigavon" },
      { stateCode: "11", stateName: "Cumbria" },
      { stateCode: "95", stateName: "Darlington" },
      { stateCode: "13", stateName: "Derbyshire" },
      { stateCode: "16", stateName: "Devon" },
      { stateCode: "14", stateName: "Dorset" },
      { stateCode: "96", stateName: "Down" },
      { stateCode: "97", stateName: "Dumfries A. Galloway" },
      { stateCode: "98", stateName: "Dumfriesshire" },
      { stateCode: "99", stateName: "Dunbartonshire" },
      { stateCode: "100", stateName: "Dungannon" },
      { stateCode: "15", stateName: "Durham" },
      { stateCode: "17", stateName: "Dyfed" },
      { stateCode: "101", stateName: "East Lothian" },
      { stateCode: "102", stateName: "East Riding" },
      { stateCode: "103", stateName: "East Sussex" },
      { stateCode: "18", stateName: "Essex" },
      { stateCode: "104", stateName: "Fermanagh" },
      { stateCode: "19", stateName: "Fife" },
      { stateCode: "20", stateName: "Gloucestershire" },
      { stateCode: "GB", stateName: "Gls" },
      { stateCode: "22", stateName: "Grampian" },
      { stateCode: "36", stateName: "Greater London" },
      { stateCode: "21", stateName: "Greater Manchester" },
      { stateCode: "23", stateName: "Gwent" },
      { stateCode: "24", stateName: "Gwynedd" },
      { stateCode: "105", stateName: "Halton" },
      { stateCode: "25", stateName: "Hampshire" },
      { stateCode: "106", stateName: "Hartlepool" },
      { stateCode: "29", stateName: "Hereford And Worcs." },
      { stateCode: "107", stateName: "Herefordshire" },
      { stateCode: "27", stateName: "Hertfordshire" },
      { stateCode: "108", stateName: "Highland" },
      { stateCode: "28", stateName: "Humberside" },
      { stateCode: "109", stateName: "Inverness-Shire" },
      { stateCode: "110", stateName: "Isle Of Arran" },
      { stateCode: "111", stateName: "Isle Of Barra" },
      { stateCode: "112", stateName: "Isle Of Benbecula" },
      { stateCode: "113", stateName: "Isle Of Bute" },
      { stateCode: "114", stateName: "Isle Of Canna" },
      { stateCode: "115", stateName: "Isle Of Coll" },
      { stateCode: "116", stateName: "Isle Of Colonsay" },
      { stateCode: "117", stateName: "Isle Of Cumbrae" },
      { stateCode: "118", stateName: "Isle Of Eigg" },
      { stateCode: "119", stateName: "Isle Of Gigha" },
      { stateCode: "120", stateName: "Isle Of Harris" },
      { stateCode: "121", stateName: "Isle Of Iona" },
      { stateCode: "122", stateName: "Isle Of Islay" },
      { stateCode: "123", stateName: "Isle Of Jura" },
      { stateCode: "124", stateName: "Isle Of Lewis" },
      { stateCode: "30", stateName: "Isle Of Man" },
      { stateCode: "126", stateName: "Isle Of Mull" },
      { stateCode: "127", stateName: "Isle Of North Uist" },
      { stateCode: "128", stateName: "Isle Of Rum" },
      { stateCode: "129", stateName: "Isle Of Scalpay" },
      { stateCode: "131", stateName: "Isle Of Skye" },
      { stateCode: "132", stateName: "Isle Of South Uist" },
      { stateCode: "133", stateName: "Isle Of Tiree" },
      { stateCode: "31", stateName: "Isle Of Wight" },
      { stateCode: "130", stateName: "Isles Of Scilly" },
      { stateCode: "32", stateName: "Kent" },
      { stateCode: "134", stateName: "Kincardineshire" },
      { stateCode: "135", stateName: "Kingston-Upon-Hull" },
      { stateCode: "136", stateName: "Kirkcudbrightshire" },
      { stateCode: "137", stateName: "Lanarkshire" },
      { stateCode: "33", stateName: "Lancashire" },
      { stateCode: "138", stateName: "Larne" },
      { stateCode: "139", stateName: "Leicester City" },
      { stateCode: "34", stateName: "Leicestershire" },
      { stateCode: "140", stateName: "Limavady" },
      { stateCode: "35", stateName: "Lincolnshire" },
      { stateCode: "141", stateName: "Lisburn" },
      { stateCode: "142", stateName: "London" },
      { stateCode: "143", stateName: "Londonderry" },
      { stateCode: "37", stateName: "Lothian" },
      { stateCode: "144", stateName: "Luton" },
      { stateCode: "145", stateName: "Magherafelt" },
      { stateCode: "39", stateName: "Merseyside" },
      { stateCode: "38", stateName: "Mid Glamorgan" },
      { stateCode: "146", stateName: "Middlesbrough" },
      { stateCode: "65", stateName: "Middlesex" },
      { stateCode: "147", stateName: "Midlothian" },
      { stateCode: "148", stateName: "Milton Keynes" },
      { stateCode: "149", stateName: "Morayshire" },
      { stateCode: "150", stateName: "Moyle" },
      { stateCode: "151", stateName: "Nairn" },
      { stateCode: "152", stateName: "Newbury" },
      { stateCode: "153", stateName: "Newry And Mourne" },
      { stateCode: "154", stateName: "Newtownabbey" },
      { stateCode: "41", stateName: "Norfolk" },
      { stateCode: "155", stateName: "North Down" },
      { stateCode: "156", stateName: "North Humberside" },
      { stateCode: "157", stateName: "North Lincolnshire" },
      { stateCode: "158", stateName: "North Somerset" },
      { stateCode: "62", stateName: "North Yorkshire" },
      { stateCode: "40", stateName: "Northamptonshire" },
      { stateCode: "43", stateName: "Northumberland" },
      { stateCode: "159", stateName: "Nottingham City" },
      { stateCode: "42", stateName: "Nottinghamshire" },
      { stateCode: "160", stateName: "Ntheast Lincolnshire" },
      { stateCode: "161", stateName: "Omagh" },
      { stateCode: "162", stateName: "Orkney" },
      { stateCode: "44", stateName: "Oxfordshire" },
      { stateCode: "163", stateName: "Peeblesshire" },
      { stateCode: "164", stateName: "Perthshire" },
      { stateCode: "165", stateName: "Peterborough" },
      { stateCode: "166", stateName: "Plymouth" },
      { stateCode: "167", stateName: "Poole" },
      { stateCode: "168", stateName: "Portsmouth" },
      { stateCode: "45", stateName: "Powys" },
      { stateCode: "169", stateName: "Reading" },
      { stateCode: "170", stateName: "Redcar And Cleveland" },
      { stateCode: "171", stateName: "Renfrewshire" },
      { stateCode: "172", stateName: "Rochester Up. Medway" },
      { stateCode: "173", stateName: "Ross-Shire" },
      { stateCode: "175", stateName: "Roxburghshire" },
      { stateCode: "176", stateName: "Rutland" },
      { stateCode: "26", stateName: "Scotland" },
      { stateCode: "177", stateName: "Shetland" },
      { stateCode: "48", stateName: "Shropshire" },
      { stateCode: "178", stateName: "Slough" },
      { stateCode: "50", stateName: "Somerset" },
      { stateCode: "47", stateName: "South Glamorgan" },
      { stateCode: "179", stateName: "South Humberside" },
      { stateCode: "63", stateName: "South Yorkshire" },
      { stateCode: "180", stateName: "Southampton" },
      { stateCode: "181", stateName: "Southend" },
      { stateCode: "51", stateName: "Staffordshire" },
      { stateCode: "182", stateName: "Sth. Gloucestershire" },
      { stateCode: "183", stateName: "Stirlingshire" },
      { stateCode: "184", stateName: "Stockton-On-Tees" },
      { stateCode: "185", stateName: "Strabane" },
      { stateCode: "46", stateName: "Strathclyde" },
      { stateCode: "49", stateName: "Suffolk" },
      { stateCode: "53", stateName: "Surrey" },
      { stateCode: "52", stateName: "Sussex" },
      { stateCode: "186", stateName: "Sutherland" },
      { stateCode: "54", stateName: "Tayside" },
      { stateCode: "187", stateName: "Thamesdown" },
      { stateCode: "188", stateName: "Thurrock" },
      { stateCode: "189", stateName: "Torbay" },
      { stateCode: "55", stateName: "Tyne And Wear" },
      { stateCode: "190", stateName: "Tyrone" },
      { stateCode: "191", stateName: "Warrington" },
      { stateCode: "56", stateName: "Warwickshire" },
      { stateCode: "57", stateName: "West Glamorgan" },
      { stateCode: "192", stateName: "West Lothian" },
      { stateCode: "59", stateName: "West Midlands" },
      { stateCode: "193", stateName: "West Sussex" },
      { stateCode: "64", stateName: "West Yorkshire" },
      { stateCode: "194", stateName: "Western Isles" },
      { stateCode: "195", stateName: "Wigtownshire" },
      { stateCode: "58", stateName: "Wiltshire" },
      { stateCode: "196", stateName: "Windsor & Maidenhead" },
      { stateCode: "197", stateName: "Wokingham" },
      { stateCode: "60", stateName: "Worcestershire" },
      { stateCode: "198", stateName: "Wrekin" },
      { stateCode: "199", stateName: "York" },
      { stateCode: "61", stateName: "Yorkshire" },
    ],
  },
];