const LOCATIONS = [
  {
    "name": "Cape Elizabeth",
    "waveId": 44007,
    "windId": 44007,
    "shoreDirection": 135
  },
  {
    "name": "Kennebunk",
    "waveId": 44030,
    "windId": "WELM1",
    "shoreDirection": 110
  },
  {
    "name": "Hampton",
    "waveId": 44098,
    "windId": "IOSN3",
    "shoreDirection": 110
  },
  {
    "name": "Gloucester",
    "waveId": 44029,
    "windId": "IOSN3",
    "shoreDirection": 90
  },
  {
    "name": "Nantasket",
    "waveId": 44013,
    "windId": 44013,
    "shoreDirection": 65
  },
  {
    "name": "Cape Cod",
    "waveId": 44018,
    "windId": 44018,
    "shoreDirection": 75
  },
  {
    "name": "Nantucket",
    "waveId": 44097,
    "windId": "NTKM3",
    "shoreDirection": 150
  },
  {
    "name": "Marthas Vineyard",
    "waveId": 44097,
    "windId": "NTKM3",
    "shoreDirection": 180
  },
  {
    "name": "Newport RI",
    "waveId": 44097,
    "windId": "NWPR1",
    "shoreDirection": 160
  },
  {
    "name": "Block Island",
    "waveId": 44097,
    "windId": "NWPR1",
    "shoreDirection": 170
  },
  {
    "name": "Montauk",
    "waveId": 44017,
    "windId": 44017,
    "shoreDirection": 165
  },
  {
    "name": "Southampton",
    "waveId": 44017,
    "windId": 44017,
    "shoreDirection": 165
  },
  {
    "name": "Fire Island",
    "waveId": 44017,
    "windId": 44069,
    "shoreDirection": 170
  },
  {
    "name": "Long Beach",
    "waveId": 44025,
    "windId": 44065,
    "shoreDirection": 180
  },
  {
    "name": "Rockaway",
    "waveId": 44025,
    "windId": 44065,
    "shoreDirection": 155
  },
  {
    "name": "Monmouth County",
    "waveId": 44025,
    "windId": "SDHN4",
    "shoreDirection": 85
  },
  {
    "name": "Seaside Heights",
    "waveId": 44091,
    "windId": 44065,
    "shoreDirection": 100
  },
  {
    "name": "Long Beach Island",
    "waveId": 44091,
    "windId": 44065,
    "shoreDirection": 115
  },
  {
    "name": "Atlantic City",
    "waveId": 44091,
    "windId": "ACYN4",
    "shoreDirection": 140
  },
  {
    "name": "Ocean City NJ",
    "waveId": 44091,
    "windId": "ACYN4",
    "shoreDirection": 125
  },
  {
    "name": "Cape May",
    "waveId": 44009,
    "windId": "CMAN4",
    "shoreDirection": 160
  },
  {
    "name": "Delaware",
    "waveId": 44009,
    "windId": 44009,
    "shoreDirection": 85
  },
  {
    "name": "Ocean City MD",
    "waveId": 44009,
    "windId": "OCIM2",
    "shoreDirection": 105
  },
  {
    "name": "Chincoteague",
    "waveId": 44089,
    "windId": "WAHV2",
    "shoreDirection": 100
  },
  {
    "name": "Eastern Shore",
    "waveId": 44089,
    "windId": "WAHV2",
    "shoreDirection": 100
  },
  {
    "name": "Virginia Beach",
    "waveId": 44099,
    "windId": "CHYV2",
    "shoreDirection": 80
  },
  {
    "name": "Corolla",
    "waveId": 44056,
    "windId": "DUKN7",
    "shoreDirection": 80
  },
  {
    "name": "Nags Head",
    "waveId": 44095,
    "windId": "ORIN7",
    "shoreDirection": 75
  },
  {
    "name": "Rodanthe",
    "waveId": 44095,
    "windId": "ORIN7",
    "shoreDirection": 95
  },
  {
    "name": "Buxton",
    "waveId": 44095,
    "windId": "HCGN7",
    "shoreDirection": 95
  },
  {
    "name": "Frisco",
    "waveId": 44095,
    "windId": "HCGN7",
    "shoreDirection": 165
  },
  {
    "name": "Cape Lookout",
    "waveId": 41159,
    "windId": "CLKN7",
    "shoreDirection": 110
  },
  {
    "name": "Emerald Isle",
    "waveId": 41159,
    "windId": "BFTN7",
    "shoreDirection": 170
  },
  {
    "name": "Surf City",
    "waveId": 41159,
    "windId": "JMPN7",
    "shoreDirection": 135
  },
  {
    "name": "Wrightsville Beach",
    "waveId": 41110,
    "windId": "JMPN7",
    "shoreDirection": 120
  },
  {
    "name": "Carolina Beach",
    "waveId": 41110,
    "windId": "JMPN7",
    "shoreDirection": 110
  },
  {
    "name": "Holden Beach",
    "waveId": "SSBN7",
    "windId": 41024,
    "shoreDirection": 175
  },
  {
    "name": "Myrtle Beach",
    "waveId": "SSBN7",
    "windId": "NIWS1",
    "shoreDirection": 120
  },
  {
    "name": "Pawleys Island",
    "waveId": "SSBN7",
    "windId": "NIWS1",
    "shoreDirection": 100
  },
  {
    "name": "Folly Beach",
    "waveId": 41004,
    "windId": "FBIS1",
    "shoreDirection": 155
  },
  {
    "name": "Edisto Beach",
    "waveId": 41004,
    "windId": "ACXS1",
    "shoreDirection": 140
  },
  {
    "name": "Hilton Head",
    "waveId": 41004,
    "windId": "ACXS1",
    "shoreDirection": 135
  },
  {
    "name": "Tybee Island",
    "waveId": 41008,
    "windId": "FPKG1",
    "shoreDirection": 95
  },
  {
    "name": "St Catherines Island",
    "waveId": 41008,
    "windId": 41008,
    "shoreDirection": 95
  },
  {
    "name": "Brunswick",
    "waveId": 41112,
    "windId": "SAXG1",
    "shoreDirection": 105
  },
  {
    "name": "Jacksonville Beach",
    "waveId": 41112,
    "windId": "MYPF1",
    "shoreDirection": 85
  },
  {
    "name": "St Augustine",
    "waveId": 41117,
    "windId": "SAUF1",
    "shoreDirection": 85
  },
  {
    "name": "Flagler Beach",
    "waveId": 41117,
    "windId": "GTXF1",
    "shoreDirection": 75
  },
  {
    "name": "New Smyrna",
    "waveId": 41117,
    "windId": "GTXF1",
    "shoreDirection": 70
  },
  {
    "name": "Cape Canaveral",
    "waveId": 41113,
    "windId": "TRDF1",
    "shoreDirection": 115
  },
  {
    "name": "Cocoa Beach",
    "waveId": 41113,
    "windId": "TRDF1",
    "shoreDirection": 90
  },
  {
    "name": "Indialantic",
    "waveId": 41113,
    "windId": "SIPF1",
    "shoreDirection": 70
  },
  {
    "name": "Sebastian",
    "waveId": 41114,
    "windId": "SIPF1",
    "shoreDirection": 70
  },
  {
    "name": "Fort Pierce",
    "waveId": 41114,
    "windId": "SIPF1",
    "shoreDirection": 75
  },
  {
    "name": "Jupiter",
    "waveId": 41114,
    "windId": "SIPF1",
    "shoreDirection": 80
  },
  {
    "name": "Palm Beach",
    "waveId": 41114,
    "windId": "PVGF1",
    "shoreDirection": 90
  },
  {
    "name": "Delray",
    "waveId": 41114,
    "windId": "PVGF1",
    "shoreDirection": 100
  },
  {
    "name": "Deerfield Beach",
    "waveId": 41114,
    "windId": "PVGF1",
    "shoreDirection": 100
  },
  {
    "name": "Fort Lauderdale",
    "waveId": 41114,
    "windId": "PVGF1",
    "shoreDirection": 90
  },
  {
    "name": "Miami Beach",
    "waveId": 41114,
    "windId": "VAKF1",
    "shoreDirection": 105
  },
  {
    "name": "Gulf Shores",
    "waveId": 42039,
    "windId": 42012,
    "shoreDirection": 160
  },
  {
    "name": "Pensacola",
    "waveId": 42039,
    "windId": "PCLF1",
    "shoreDirection": 170
  },
  {
    "name": "Destin",
    "waveId": 42039,
    "windId": "PCBF1",
    "shoreDirection": 180
  },
  {
    "name": "Panama City",
    "waveId": 42039,
    "windId": "PCBF1",
    "shoreDirection": 225
  },
  {
    "name": "Cape San Blas",
    "waveId": 42039,
    "windId": "APCF1",
    "shoreDirection": 255
  },
  {
    "name": "St George Island",
    "waveId": 42039,
    "windId": "APCF1",
    "shoreDirection": 140
  },
  {
    "name": "Cedar Key",
    "waveId": 42099,
    "windId": "CDRF1",
    "shoreDirection": 225
  },
  {
    "name": "Clearwater",
    "waveId": 42098,
    "windId": "CWBF1",
    "shoreDirection": 280
  },
  {
    "name": "St Petersburg",
    "waveId": 42098,
    "windId": "CLBF1",
    "shoreDirection": 220
  },
  {
    "name": "Bradenton",
    "waveId": 42098,
    "windId": "MTBF1",
    "shoreDirection": 255
  },
  {
    "name": "Venice",
    "waveId": 42098,
    "windId": "VENF1",
    "shoreDirection": 240
  },
  {
    "name": "Sanibel Island",
    "waveId": 42098,
    "windId": "FMRF1",
    "shoreDirection": 190
  },
  {
    "name": "Naples",
    "waveId": 42098,
    "windId": "FMRF1",
    "shoreDirection": 265
  },
  {
    "name": "Galveston",
    "waveId": 42019,
    "windId": "GNJT2",
    "shoreDirection": 135
  },
  {
    "name": "Surfside",
    "waveId": 42019,
    "windId": "FCGT2",
    "shoreDirection": 135
  },
  {
    "name": "Matagorda",
    "waveId": 42019,
    "windId": "MBET2",
    "shoreDirection": 140
  },
  {
    "name": "Corpus Christi",
    "waveId": 42019,
    "windId": "MQTT2",
    "shoreDirection": 125
  },
  {
    "name": "South Padre Island",
    "waveId": 42019,
    "windId": "BZST2",
    "shoreDirection": 80
  },
  {
    "name": "La Push",
    "waveId": 46029,
    "windId": "LAPW1",
    "shoreDirection": 250
  },
  {
    "name": "Westport",
    "waveId": 46029,
    "windId": "WPTW1",
    "shoreDirection": 265
  },
  {
    "name": "Long Beach",
    "waveId": 46243,
    "windId": 46029,
    "shoreDirection": 280
  },
  {
    "name": "Seaside",
    "waveId": 46243,
    "windId": 46029,
    "shoreDirection": 280
  },
  {
    "name": "Rockaway Beach",
    "waveId": 46243,
    "windId": 46029,
    "shoreDirection": 280
  },
  {
    "name": "Newport OR",
    "waveId": 46229,
    "windId": "NWPO3",
    "shoreDirection": 280
  },
  {
    "name": "Florence",
    "waveId": 46229,
    "windId": "CHAO3",
    "shoreDirection": 280
  },
  {
    "name": "Port Orford",
    "waveId": 46229,
    "windId": "PORO3",
    "shoreDirection": 170
  },
  {
    "name": "Gold Beach ",
    "waveId": 46027,
    "windId": 46027,
    "shoreDirection": 270
  },
  {
    "name": "Brookings",
    "waveId": 46027,
    "windId": 46027,
    "shoreDirection": 225
  },
  {
    "name": "Crescent City",
    "waveId": 46027,
    "windId": "CECC1",
    "shoreDirection": 230
  },
  {
    "name": "Eureka",
    "waveId": 46244,
    "windId": "HBYC1",
    "shoreDirection": 310
  },
  {
    "name": "Fort Bragg",
    "waveId": 46263,
    "windId": 46014,
    "shoreDirection": 285
  },
  {
    "name": "Sea Ranch",
    "waveId": 46214,
    "windId": 46013,
    "shoreDirection": 230
  },
  {
    "name": "Sonoma County",
    "waveId": 46263,
    "windId": 46013,
    "shoreDirection": 245
  },
  {
    "name": "Marin County",
    "waveId": 46237,
    "windId": 46026,
    "shoreDirection": 230
  },
  {
    "name": "Ocean Beach",
    "waveId": 46237,
    "windId": 46026,
    "shoreDirection": 265
  },
  {
    "name": "Half Moon Bay",
    "waveId": 46237,
    "windId": 46026,
    "shoreDirection": 260
  },
  {
    "name": "Pescadero",
    "waveId": 46012,
    "windId": 46012,
    "shoreDirection": 270
  },
  {
    "name": "Davenport",
    "waveId": 46042,
    "windId": 46092,
    "shoreDirection": 215
  },
  {
    "name": "Santa Cruz",
    "waveId": 46042,
    "windId": 46092,
    "shoreDirection": 185
  },
  {
    "name": "Moss Landing",
    "waveId": 46042,
    "windId": 46092,
    "shoreDirection": 255
  },
  {
    "name": "Monterey",
    "waveId": 46042,
    "windId": 46092,
    "shoreDirection": 315
  },
  {
    "name": "Big Sur",
    "waveId": 46239,
    "windId": 46092,
    "shoreDirection": 220
  },
  {
    "name": "San Simeon",
    "waveId": 46028,
    "windId": 46011,
    "shoreDirection": 210
  },
  {
    "name": "Morro Bay",
    "waveId": 46028,
    "windId": 46011,
    "shoreDirection": 265
  },
  {
    "name": "Pismo Beach",
    "waveId": 46011,
    "windId": "CPXC1",
    "shoreDirection": 255
  },
  {
    "name": "Santa Barbara",
    "waveId": 46053,
    "windId": "NTBC1",
    "shoreDirection": 170
  },
  {
    "name": "Ventura County",
    "waveId": 46217,
    "windId": "NTBC1",
    "shoreDirection": 230
  },
  {
    "name": "North LA County",
    "waveId": 46221,
    "windId": "ICAC1",
    "shoreDirection": 240
  },
  {
    "name": "South LA County",
    "waveId": 46221,
    "windId": "ICAC1",
    "shoreDirection": 260
  },
  {
    "name": "North Orange County",
    "waveId": 46222,
    "windId": "PFXC1",
    "shoreDirection": 220
  },
  {
    "name": "South Orange County",
    "waveId": 46253,
    "windId": "PFXC1",
    "shoreDirection": 210
  },
  {
    "name": "North SD County",
    "waveId": 46242,
    "windId": 46225,
    "shoreDirection": 235
  },
  {
    "name": "South SD County",
    "waveId": 46254,
    "windId": "LJPC1",
    "shoreDirection": 260
  },
  {
    "name": "Northeast",
    "waveId": 51206,
    "windId": "ILOH1",
    "shoreDirection": 50
  },
  {
    "name": "Northwest",
    "waveId": 51003,
    "windId": "KWHH1",
    "shoreDirection": 310
  },
  {
    "name": "West",
    "waveId": 51003,
    "windId": "KWHH1",
    "shoreDirection": 0
  },
  {
    "name": "Southeast",
    "waveId": 51206,
    "windId": "ILOH1",
    "shoreDirection": 145
  },
  {
    "name": "North(Hookipa)",
    "waveId": 51205,
    "windId": "KLIH1",
    "shoreDirection": 340
  },
  {
    "name": "North(Waiehu)",
    "waveId": 51205,
    "windId": "KLIH1",
    "shoreDirection": 70
  },
  {
    "name": "Upper West(Honolua)",
    "waveId": 51205,
    "windId": "KLIH1",
    "shoreDirection": 315
  },
  {
    "name": "Hana",
    "waveId": 51205,
    "windId": "KLIH1",
    "shoreDirection": 60
  },
  {
    "name": "North Shore",
    "waveId": 51210,
    "windId": "MOKH1",
    "shoreDirection": 315
  },
  {
    "name": "South Shore",
    "waveId": 51211,
    "windId": "OOUH1",
    "shoreDirection": 210
  },
  {
    "name": "Sandy Beach",
    "waveId": 51202,
    "windId": "OOUH1",
    "shoreDirection": 140
  },
  {
    "name": "Ewa Beach",
    "waveId": 51211,
    "windId": "OOUH1",
    "shoreDirection": 165
  },
  {
    "name": "West Side",
    "waveId": 51212,
    "windId": "OOUH1",
    "shoreDirection": 235
  },
  {
    "name": "East Side",
    "waveId": 51207,
    "windId": "MOKH1",
    "shoreDirection": 60
  },
];

module.exports = LOCATIONS;