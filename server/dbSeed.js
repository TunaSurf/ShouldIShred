const locationArr = [
  "Cape Elizabeth",
  "Kennebunk",
  "Hampton",
  "Gloucester",
  "Nantasket",
  "Cape Cod",
  "Nantucket",
  "Marthas Vineyard",
  "Newport",
  "Block Island",
  "Montauk",
  "Southampton",
  "Fire Island",
  "Long Beach",
  "Rockaway",
  "Monmouth County",
  "Seaside Heights",
  "Long Beach Island",
  "Atlantic City",
  "Ocean City NJ",
  "Cape May",
  "Delaware",
  "Ocean City MD",
  "Chincoteague",
  "Eastern Shore",
  "Virginia Beach",
  "Corolla",
  "Nags Head",
  "Rodanthe",
  "Buxton",
  "Frisco",
  "Cape Lookout",
  "Emerald Isle",
  "Surf City",
  "Wrightsville Beach",
  "Carolina Beach",
  "Holden Beach",
  "Myrtle Beach",
  "Pawleys Island",
  "Folly Beach",
  "Edisto Beach",
  "Hilton Head",
  "Tybee Island",
  "St Catherines Island",
  "Brunswick",
  "Jacksonville Beach",
  "St Augustine",
  "Flagler Beach",
  "New Smyrna",
  "Cape Canaveral",
  "Cocoa Beach",
  "Indialantic",
  "Sebastian",
  "Fort Pierce",
  "Jupiter",
  "Palm Beach",
  "Delray",
  "Deerfield Beach",
  "Fort Lauderdale",
  "Miami Beach",
  "Gulf Shores",
  "Pensacola",
  "Destin",
  "Panama City",
  "Cape San Blas",
  "St George Island",
  "Cedar Key",
  "Clearwater",
  "St Petersburg",
  "Bradenton",
  "Venice",
  "Sanibel Island",
  "Naples",
  "Galveston",
  "Surfside",
  "Matagorda",
  "Corpus Christi",
  "South Padre Island",
  "La Push",
  "Westport",
  "Long Beach",
  "Seaside",
  "Rockaway Beach",
  "Newport",
  "Florence",
  "Port Orford",
  "Gold Beach ",
  "Brookings",
  "Crescent City",
  "Eureka",
  "Fort Bragg",
  "Sea Ranch",
  "Sonoma County",
  "Marin County",
  "Ocean Beach",
  "Half Moon Bay",
  "Pescadero",
  "Davenport",
  "Santa Cruz",
  "Moss Landing",
  "Monterey",
  "Big Sur",
  "San Simeon",
  "Morro Bay",
  "Pismo Beach",
  "Santa Barbara",
  "Ventura County",
  "North LA County",
  "South LA County",
  "North Orange County",
  "South Orange County",
  "North SD County",
  "South SD County",
  "Northeast",
  "Northwest",
  "West",
  "Southeast",
  "North(Hookipa)",
  "North(Waiehu)",
  "Upper West(Honolua)",
  "Lahaina",
  "Kihei",
  "Makena",
  "Hana",
  "North Shore",
  "South Shore",
  "Sandy Beach",
  "Ewa Beach",
  "West Side",
  "East Side"
];

locationArr.forEach(function(location) {
  new Location({
    time: new Date().toISOString(),
    key: location.replace(/\s+/g, '-').toLowerCase(),
    locationName: location,
    swellHeight: 3,
    swellDirection: 3,
    swellPeriod: 3,
    windSpeed: 3,
    windDirection: 3,
    previousTide: new Date().toISOString(),
    nextTide: new Date().toISOString(),
    shoreDirection: 3
  })
  .save(function(err, location) {
    if(err) {
      console.log(err);
    } else {
      console.log('location added to db:', location);
    }
  })
})