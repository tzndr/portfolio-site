var pointsOfInterest = [
  {
    title: 'Dell Diamond',
    location: {lat: 30.527728, lng: -97.630063},
    address: '3400 E. Palm Valley Blvd Round Rock, TX 78665',
    phone: '(512)255-2255',
    website: 'http://www.milb.com/content/page.jsp?sid=t102&ymd=20100112&content_id=7906284&vkey=team2/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'Dell, Inc',
    location: {lat:30.488386, lng: -97.670421},
    address: '1 Dell Way Round Rock, TX 78682',
    phone: '(512)338-4400',
    website: 'https://www.dell.com/en-us/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'IKEA',
    location: {lat: 30.557492, lng: -97.690038},
    address: '1 IKEA Way Round Rock, TX 78665',
    phone: '(888)888-4532',
    website: 'https://www.ikea.com/us/en/store/round_rock/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'Kalahari Resorts & Conventions',
    location: {lat: 30.519442, lng: -97.631079},
    address: '3001 Kalahari Blvd Round Rock, TX 78665',
    phone: '(877)525-2427',
    website: 'https://www.kalahariresorts.com/texas/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'Old Settler’s Association of Williamson County',
    location: {lat: 30.526414, lng: -97.634935},
    address: '3300 E. Palm Valley Blvd Round Rock, TX 78665',
    phone: '(512)388-1733',
    website: 'http://www.wcosa.org/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'The Rabb House',
    location: {lat: 30.514936, lng: -97.655259},
    address: '151 N. A.W. Grimes Blvd Round Rock, TX 78664',
    phone: '(512)218-5540',
    website: 'https://roundrockrecreation.com/rentals/rabb-house/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'Round Rock Premium Outlets',
    location: {lat: 30.566999, lng: -97.690339},
    address: '4401 N. Interstate Hwy 35 Round Rock, TX 78664',
    phone: '(512)819-0002',
    website: 'https://www.premiumoutlets.com/outlet/round-rock/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'The Williamson Museum',
    location: {lat: 30.515052, lng: -97.690065},
    address: '8 Chisholm Trail Round Rock, TX 78681',
    phone: '(512)943-1670',
    website: 'http://williamsonmuseum.org/',
    category: 'Attractions',
    markerIcon: 'static/img/poi_markers/blue_star.png'
  },
  {
    title: 'Round Rock Chamber of Commerce',
    location: {lat: 30.509257, lng: -97.677321},
    address: '212 E. Main Street Round Rock, TX 78664',
    phone: '(512)255-5805',
    website: 'https://roundrockchamber.org/',
    category: 'Chambers of Commerce',
    markerIcon: 'static/img/poi_markers/chamber.png'
  },
  {
    title: 'Central Fire Station',
    location: {lat: 30.531636, lng: -97.686294},
    address: '203 Commerce Blvd Round Rock, TX 78664',
    phone: '(512)218-5590',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 2',
    location: {lat: 30.507498, lng: -97.679865},
    address: '200 W. Bagdad Avenue Round Rock, TX 78664',
    phone: '(512)218-5591',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 3',
    location: {lat: 30.491157, lng: -97.681029},
    address: '1991 Rawhide Drive Round Rock, TX 78681',
    phone: '(512)218-5592',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 4',
    location: {lat: 30.498612, lng: -97.644701},
    address: '1301 Double Creek Drive Round Rock, TX 78665',
    phone: '(512)218-5593',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 5',
    location: {lat: 30.504686, lng: -97.700221},
    address: '350 Deep Wood Drive Round Rock, TX 78681',
    phone: '(512)218-5594',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 6',
    location: {lat: 30.524044, lng: -97.640274},
    address: '2919 Joe DiMaggio Blvd Round Rock, TX 78665',
    phone: '(512)218-5595',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 7',
    location: {lat: 30.558851, lng: -97.685293},
    address: '2811 Oakmont Blvd Round Rock, TX 78665',
    phone: '(512)218-5596',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 8',
    location: {lat: 30.504011, lng: -97.613985},
    address: '1612 Red Bud Lane Round Rock, TX 78664',
    phone: '(512)218-5597',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Fire Station 9',
    location: {lat: 30.530421, lng: -97.722724},
    address: '2721 Sam Bass Road Round Rock, TX 78681',
    phone: '(512)218-5598',
    website: 'https://www.roundrocktexas.gov/departments/fire/',
    category: 'Fire Stations',
    markerIcon: 'static/img/poi_markers/fire.png'
  },
  {
    title: 'Avery Ranch Golf Course',
    location: {lat: 30.510072, lng: -97.755018},
    address: '10500 Avery Club Drive Austin, TX 78717',
    phone: '(512)248-2442',
    website: 'https://www.averyranchgolf.com/',
    category: 'Golf Courses',
    markerIcon: 'static/img/poi_markers/golf.png'
  },
  {
    title: 'Forest Creek Golf Course',
    location: {lat: 30.517554, lng: -97.600144},
    address: '99 Twin Ridge Parkway Round Rock, TX 78664',
    phone: '(512)388-2874',
    website: 'https://forestcreek.com/',
    category: 'Golf Courses',
    markerIcon: 'static/img/poi_markers/golf.png'
  },
  {
    title: 'Teravista Golf Course',
    location: {lat: 30.575509, lng: -97.669588},
    address: '4332 Teravista Club Drive Round Rock, TX 78665',
    phone: '(512)651-9850',
    website: 'https://www.teravistagolf.com/',
    category: 'Golf Courses',
    markerIcon: 'static/img/poi_markers/golf.png'
  },
  {
    title: 'The Golf Club at Star Ranch',
    location: {lat: 30.507111, lng: -97.581813},
    address: '2500 Farm to Market 685 Hutto, TX 78634',
    phone: '(512)252-4653',
    website: 'http://www.starranchgolf.com/',
    category: 'Golf Courses',
    markerIcon: 'static/img/poi_markers/golf.png'
  },
  {
    title: 'Round Rock Public Library',
    location: {lat: 30.509531, lng: -97.677236},
    address: '216 E. Main Street Round Rock, TX 78664',
    phone: '(512)218-7001',
    website: 'https://www.roundrocktexas.gov/departments/library/',
    category: 'Libraries',
    markerIcon: 'static/img/poi_markers/library.png'
  },
  {
    title: 'Champion Park',
    location: {lat: 30.510584, lng: -97.758614},
    address: '3830 Brushy Creek Road Cedar Park, TX 78613',
    phone: '(512)246-2683',
    website: 'https://www.wilco.org/Departments/Parks-Recreation/County-Parks/Champion-Park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Clay Madsen Park',
    location: {lat: 30.497133, lng: -97.660745},
    address: '1600 Gattis School Road Round Rock, TX 78664',
    phone: '(512)218-3220',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/clay-madsen-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Henry S. McNeil Park',
    location: {lat: 30.554269, lng: -97.691891},
    address: 'McNeil Park, N Interstate 35 Frontage Rd, Round Rock, TX 78665',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/mcneil-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Kinningham Park',
    location: {lat: 30.499991, lng: -97.654719},
    address: '1000 Southcreek Drive Round Rock, TX 78664',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/kinningham-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Lake Creek Park',
    location: {lat: 30.509535, lng: -97.668439},
    address: '800 Deerfoot Drive Round Rock, TX 78664',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/lake-creek-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Luther Peterson Park',
    location: {lat: 30.54571, lng: -97.682807},
    address: '900 Luther Peterson Place Round Rock, TX 78665',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/luther-peterson-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Meadow Lake Park',
    location: {lat: 30.541989, lng: -97.664252},
    address: '2901 Settlement Drive Round Rock, TX 78665',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/meadow-lake-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Old Settler’s Park',
    location: {lat: 30.526414, lng: -97.634935},
    address: '3300 E. Palm Valley Blvd Round Rock, TX 78665',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/old-settlers-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Round Rock Dog Depot',
    location: {lat: 30.509854, lng: -97.666791},
    address: '800 Deerfoot Drive Round Rock, TX 78664',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/dog-depot-dog-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Round Rock West Park',
    location: {lat: 30.503367, lng: -97.691897},
    address: '500 Round Rock West Drive Round Rock, TX 78681',
    phone: '(512)218-5540',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/parks-trails/parks/round-rock-west-park/',
    category: 'Parks',
    markerIcon: 'static/img/poi_markers/park.png'
  },
  {
    title: 'Police Station',
    location: {lat: 30.540406, lng: -97.687185},
    address: '2701 N. Mays Street Round Rock, TX 78665',
    phone: '(512)218-5500',
    website: 'https://www.roundrocktexas.gov/departments/police/',
    category: 'Police Stations',
    markerIcon: 'static/img/poi_markers/police.png'
  },
  {
    title: 'Clay Madsen Recreation Center',
    location: {lat: 30.497133, lng: -97.660745},
    address: '1600 Gattis School Road Round Rock, TX 78664',
    phone: '(512)218-3220',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/facilities/cmrc/',
    category: 'Recreation',
    markerIcon: 'static/img/poi_markers/green_star.png'
  },
  {
    title: 'Round Rock Multipurpose Complex',
    location: {lat: 30.545241, lng: -97.630835},
    address: '2001 N. Kenney Fort Blvd Round Rock, TX 78665',
    phone: '(512)341-3125',
    website: 'https://roundrockmpc.com/',
    category: 'Recreation',
    markerIcon: 'static/img/poi_markers/green_star.png'
  },
  {
    title: 'Round Rock Sports Center',
    location: {lat: 30.539192, lng: -97.697206},
    address: '2400 Chisholm Trail Round Rock, TX 78681',
    phone: '(512)341-3125',
    website: 'https://rrsportscenter.com/',
    category: 'Recreation',
    markerIcon: 'static/img/poi_markers/green_star.png'
  },
  {
    title: 'Baca Activity Center',
    location: {lat: 30.506416, lng: -97.681209},
    address: '301 W. Bagdad Avenue Round Rock, TX 78664',
    phone: '(512)218-5499',
    website: 'https://www.roundrocktexas.gov/departments/parks-and-recreation/facilities/baca-center/',
    category: 'Public Facilities',
    markerIcon: 'static/img/poi_markers/red_star.png'
  },
  {
    title: 'City Hall /McConico Municipal Office Building',
    location: {lat: 30.508431, lng: -97.67667},
    address: '221 E. Main Street Round Rock, TX 78664',
    phone: '(512)218-5400',
    website: 'https://www.roundrocktexas.gov/',
    category: 'Public Facilities',
    markerIcon: 'static/img/poi_markers/red_star.png'
  },
  {
    title: 'Public Works',
    location: {lat: 30.531112, lng: -97.685901},
    address: '2008 Enterprise Drive Round Rock, TX 78664',
    phone: '(512)218-5555',
    website: 'https://www.roundrocktexas.gov/departments/utilities-and-environmental-services/',
    category: 'Public Facilities',
    markerIcon: 'static/img/poi_markers/red_star.png'
  },
  {
    title: 'Water Treatment Plant',
    location: {lat: 30.585871, lng: -97.663825},
    address: '2008 Westinghouse Road Round Rock, TX 78681',
    phone: '(512)218-5556',
    website: 'https://www.roundrocktexas.gov/departments/utilities-and-environmental-services/wastewater/',
    category: 'Public Facilities',
    markerIcon: 'static/img/poi_markers/red_star.png'
  },
  {
    title: 'Austin Regional Clinic',
    location: {lat: 30.484724, lng: -97.689752},
    address: '940 Hesters Crossing Road Round Rock, TX 78681',
    phone: '(512)244-9024',
    website: 'https://www.austinregionalclinic.com/clinics/arc-round-rock/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Baylor Scott & White - Univ. Medical Campus ',
    location: {lat: 30.558791, lng: -97.68101},
    address: '425 University Blvd Round Rock, TX 78665',
    phone: '(512)509-0200',
    website: 'https://www.bswhealth.com/locations/round-rock-425-university-clinic/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Encompass Health Rehabilitation Hospital',
    location: {lat: 30.48362, lng: -97.69352},
    address: '1400 Hesters Crossing Road Round Rock, TX 78681',
    phone: '(512)244-4400',
    website: 'https://www.encompasshealth.com/roundrockrehab/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Post Acute Medical Hospital',
    location: {lat: 30.563719, lng: -97.649855},
    address: '351 Seton Parkway Round Rock, TX 78665',
    phone: '(737)708-9800',
    website: 'http://postacutemedical.com/facilities/find-facility/rehabilitation-hospitals/pam-rehabilitation-hospital-round-rock/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Seton Medical Center Williamson',
    location: {lat: 30.56707, lng: -97.651251},
    address: '201 Seton Parkway Round Rock, TX 78665',
    phone: '(512)324-4000',
    website: 'https://www.seton.net/locations/seton-medical-center-williamson/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'St. David’s Round Rock Medical Center',
    location: {lat: 30.511137, lng: -97.714345},
    address: '2400 Round Rock Avenue Round Rock, TX 78681',
    phone: '(512)341-1000',
    website: 'https://stdavids.com/location/st-davids-round-rock-medical-center/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'San Gabriel Rehabilitation/Care Center ',
    location: {lat: 30.559332, lng: -97.653869},
    address: '4100 College Park Drive Round Rock, TX 78665',
    phone: '(512)334-8000',
    website: 'http://www.sangabrielrehabcenter.com/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Trinity Care Center',
    location: {lat: 30.512078, lng: -97.668002},
    address: '1000 E. Main Street Round Rock, TX 78664',
    phone: '(512)634-3000',
    website: 'https://senior-care-centers.com/find-a-community/austin-central-texas/trinity-care-center/',
    category: 'Medical Centers',
    markerIcon: 'static/img/poi_markers/medical.png'
  },
  {
    title: 'Austin Community College',
    location: {lat: 30.563281, lng: -97.65675},
    address: '4400 College Park Drive Round Rock, TX 78665',
    phone: '(512)223-0000',
    website: 'http://www.austincc.edu/campuses/round-rock-campus/',
    category: 'Universities',
    markerIcon: 'static/img/poi_markers/university.png'
  },
  {
    title: 'Texas A&M Health Science Center',
    location: {lat: 30.557353, lng: -97.647775},
    address: '3950 N. A.W. Grimes Blvd Round Rock, TX 78665',
    phone: '(512)341-4951',
    website: 'https://www.tamhsc.edu/clrc/',
    category: 'Universities',
    markerIcon: 'static/img/poi_markers/university.png'
  },
  {
    title: 'Texas State University Round Rock Campus',
    location: {lat: 30.567989, lng: -97.655153},
    address: '1555 University Blvd Round Rock, TX 78665',
    phone: '(512)716-4001',
    website: 'https://www.rrc.txstate.edu/',
    category: 'Universities',
    markerIcon: 'static/img/poi_markers/university.png'
  },
  {
    title: 'Berkman Elementary',
    location: {lat: 30.51033, lng: -97.684019},
    address: '400 West Anderson Ave Round Rock, TX 78664',
    phone: '(512)464-8250',
    website: 'https://roundrockisd.org/schools/elementary/berkman/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Blackland Prairie Elementary',
    location: {lat: 30.499562, lng: -97.622738},
    address: '2005 Via Sonoma Trail Round Rock, TX 78664',
    phone: '(512)424-8600',
    website: 'https://roundrockisd.org/schools/elementary/blackland-prairie/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Bluebonnet Elementary',
    location: {lat: 30.490246, lng: -97.691203},
    address: '1010 Chisholm Valley Dr Round Rock, TX 78681',
    phone: '(512)428-7700',
    website: 'https://roundrockisd.org/schools/elementary/bluebonnet/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Brushy Creek Elementary',
    location: {lat: 30.51133, lng: -97.737469},
    address: '3800 Stonebridge Round Rock, TX 78681',
    phone: '(512)428-3000',
    website: 'https://roundrockisd.org/schools/elementary/brushy-creek/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Cactus Ranch Elementary',
    location: {lat: 30.540375, lng: -97.722366},
    address: '2901 Golden Oak Circle Round Rock, TX 78681',
    phone: '(512)424-8000',
    website: 'https://roundrockisd.org/schools/elementary/cactus-ranch/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Caldwell Heights Elementary',
    location: {lat: 30.565242, lng: -97.66863},
    address: '4010 Eagles Nest St Round Rock, TX 78665',
    phone: '(512)428-7300',
    website: 'https://roundrockisd.org/schools/elementary/caldwell-heights/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Callison Elementary',
    location: {lat: 30.502146, lng: -97.659134},
    address: '1750 Thompson Trail Round Rock, TX 78664',
    phone: '(512)704-0700',
    website: 'https://roundrockisd.org/schools/elementary/callison/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'CD Fulkes Middle School',
    location: {lat: 30.511213, lng: -97.68207},
    address: '300 West Anderson Ave Round Rock, TX 78664',
    phone: '(512)428-3100',
    website: 'https://roundrockisd.org/schools/middle-schools/c-d-fulkes/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Cedar Ridge High School',
    location: {lat: 30.493623, lng: -97.641732},
    address: '2801 Gattis School Road Round Rock, TX 78664',
    phone: '(512)704-0100',
    website: 'https://roundrockisd.org/schools/high-schools/cedar-ridge/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Cedar Valley Middle School',
    location: {lat: 30.492628, lng: -97.734219},
    address: '8139 Racine Trail Austin, TX 78717',
    phone: '(512)428-2300',
    website: 'https://roundrockisd.org/schools/middle-schools/cedar-valley/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Chandler Oaks Elementary School',
    location: {lat: 30.55644, lng: -97.732759},
    address: '3800 Stone Oak Drive Round Rock, TX 78681',
    phone: '(512)704-0400',
    website: 'https://roundrockisd.org/schools/elementary/chandler-oaks/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Chisolm Trail Middle School',
    location: {lat: 30.502638, lng: -97.702294},
    address: '500 Oakridge Dr Round Rock, TX 78681',
    phone: '(512)428-2500',
    website: 'https://roundrockisd.org/schools/middle-schools/chisholm-trail/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Deep Wood Elementary',
    location: {lat: 30.500264, lng: -97.697124},
    address: '705 St. Williams Dr Round Rock, TX 78681',
    phone: '(512)464-4400',
    website: 'https://roundrockisd.org/schools/elementary/deep-wood/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Double File Trail Elementary',
    location: {lat: 30.534343, lng: -97.649212},
    address: '2400 Chandler Creek Blvd Round Rock, TX 78665',
    phone: '(512)428-7400',
    website: 'https://roundrockisd.org/schools/elementary/double-file-trail/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Dragon Stadium',
    location: {lat: 30.50922, lng: -97.698397},
    address: '201 Deep Wood Drive Round Rock, TX 78681',
    phone: '(512)464-6000',
    website: 'https://www.sportscapitaloftexas.com/round-rock-texas/attractions/dr-r-l-peters-jr-field-at-dragon-stadium/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Early College',
    location: {lat: 30.563281, lng: -97.65675},
    address: '4400 College Park Dr Round Rock, TX 78665',
    phone: '(512)704-1650',
    website: 'https://roundrockisd.org/schools/alternative-education/echs/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'England Elementary',
    location: {lat: 30.493691, lng: -97.750724},
    address: '8801 Pearson Ranch Road Austin, TX 78717',
    phone: '(512)704-1200',
    website: 'https://roundrockisd.org/schools/elementary/england/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Fern Bluff Elementary',
    location: {lat: 30.516706, lng: -97.720559},
    address: '17815 Park Valley Round Rock, TX 78681',
    phone: '(512)428-2100',
    website: 'https://roundrockisd.org/schools/elementary/fern-bluff/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Forest Creek Elementary',
    location: {lat: 30.508018, lng: -97.607779},
    address: '3505 Forest Creek Dr Round Rock, TX 78664',
    phone: '(512)464-5350',
    website: 'https://roundrockisd.org/schools/elementary/forest-creek/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Gattis Elementary',
    location: {lat: 30.499079, lng: -97.641564},
    address: '2920 Round Rock Ranch Rd Round Rock, TX 78665',
    phone: '(512)428-2000',
    website: 'https://roundrockisd.org/schools/elementary/gattis/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'GOALS Learning Center',
    location: {lat: 30.511404, lng: -97.696997},
    address: '1311 Round Rock Ave Round Rock, TX 78681',
    phone: '(512)464-5153',
    website: 'https://goals.roundrockisd.org/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Great Oaks Elementary',
    location: {lat: 30.495318, lng: -97.738549},
    address: '16455 Great Oaks Dr Round Rock, TX 78681',
    phone: '(512)464-6850',
    website: 'https://roundrockisd.org/schools/elementary/great-oaks/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Hernandez Middle School',
    location: {lat: 30.529719, lng: -97.666171},
    address: '1901 Sunrise Rd Round Rock, TX 78664',
    phone: '(512)424-8800',
    website: 'https://roundrockisd.org/schools/middle-schools/hernandez/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Herrington Elementary',
    location: {lat: 30.555746, lng: -97.623368},
    address: '2850 Paloma Lake Blvd Round Rock, TX 78665',
    phone: '(512)704-1900',
    website: 'https://roundrockisd.org/schools/elementary/herrington/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Hopewell Middle School',
    location: {lat: 30.552605, lng: -97.658806},
    address: '1535 Gulf Way Round Rock, TX 78664',
    phone: '(512)464-5200',
    website: 'https://roundrockisd.org/schools/middle-schools/hopewell/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Meridian World School',
    location: {lat: 30.537949, lng: -97.69005},
    address: '2555 I-35 Round Rock, TX 78664',
    phone: '(512)660-5230',
    website: 'http://www.mwschool.org/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Old Town Elementary',
    location: {lat: 30.531344, lng: -97.704442},
    address: '2200 Chaparral Dr Round Rock, TX 78681',
    phone: '(512)428-7600',
    website: 'https://roundrockisd.org/schools/elementary/old-town/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Pearson Ranch Middle School',
    location: {lat: 30.496774, lng: -97.750836},
    address: '8901 Pearson Ranch Road Austin, TX 78717',
    phone: '(512)704-1500',
    website: 'https://roundrockisd.org/schools/middle-schools/pearson-ranch-middle-school/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Ridgeview Middle School',
    location: {lat: 30.499963, lng: -97.625714},
    address: '2000 Via Sonoma Trail Round Rock, TX 78664',
    phone: '(512)424-8400',
    website: 'https://roundrockisd.org/schools/middle-schools/ridgeview/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Robertson Elementary',
    location: {lat: 30.523952, lng: -97.663274},
    address: '1415 Bayland Round Rock, TX 78664',
    phone: '(512)428-3300',
    website: 'https://roundrockisd.org/schools/elementary/robertson/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Round Rock Christian Academy',
    location: {lat: 30.509111, lng: -97.693782},
    address: '301 N. Lake Creek Drive Round Rock, TX 78681',
    phone: '(512)255-4491',
    website: 'https://www.rrca-tx.org/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Round Rock High School',
    location: {lat: 30.50922, lng: -97.698397},
    address: '201 Deep Wood Dr Round Rock, TX 78681',
    phone: '(512)464-6000',
    website: 'https://roundrockisd.org/schools/high-schools/rrhs/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Round Rock ISD Administration',
    location: {lat: 30.511404, lng: -97.696997},
    address: '1311 Round Rock Ave Round Rock, TX 78681',
    phone: '(512)464-5000',
    website: 'https://roundrockisd.org/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Round Rock Opportunity Center',
    location: {lat: 30.546898, lng: -97.675795},
    address: '931 Luther Peterson Place Round Rock, TX 78664',
    phone: '(512)428-2900',
    website: 'https://roundrockisd.org/schools/alternative-education/rroc/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Sommer Elementary',
    location: {lat: 30.504527, lng: -97.752023},
    address: '16200 Avery Ranch Blvd Austin, TX 78717',
    phone: '(512)704-0600',
    website: 'https://roundrockisd.org/schools/elementary/sommer/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Stony Point High School',
    location: {lat: 30.529999, lng: -97.661423},
    address: '1801 Tiger Trail Round Rock, TX 78664',
    phone: '(512)428-7000',
    website: 'https://roundrockisd.org/schools/high-schools/stony-point/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Success High School',
    location: {lat: 30.495544, lng: -97.671889},
    address: '500 Gattis School Road Round Rock, TX 78664',
    phone: '(512)704-1300',
    website: 'https://roundrockisd.org/schools/high-schools/success/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Technology Center',
    location: {lat: 30.490506, lng: -97.731046},
    address: '7700 Cornerwood Drive Austin, TX 78717',
    phone: '(512)464-5142',
    website: 'https://insttech.roundrockisd.org/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Teravista Elementary',
    location: {lat: 30.575791, lng: -97.662526},
    address: '4419 Teravista Club Drive Round Rock, TX 78665',
    phone: '(512)704-0500',
    website: 'https://roundrockisd.org/schools/elementary/teravista/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Union Hill Elementary',
    location: {lat: 30.554312, lng: -97.661346},
    address: '1511 Gulf Way Round Rock, TX 78665',
    phone: '(512)424-8700',
    website: 'https://roundrockisd.org/schools/elementary/union-hill/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Voigt Elementary',
    location: {lat: 30.49903, lng: -97.673872},
    address: '1201 Cushing Dr Round Rock, TX 78664',
    phone: '(512)428-7500',
    website: 'https://roundrockisd.org/schools/elementary/voigt/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  },
  {
    title: 'Walsh Middle School',
    location: {lat: 30.534952, lng: -97.734122},
    address: '3850 Walsh Ranch Road Round Rock, TX 78681',
    phone: '(512)704-0800',
    website: 'https://roundrockisd.org/schools/middle-schools/walsh/',
    category: 'Schools',
    markerIcon: 'static/img/poi_markers/school.png'
  }
]
