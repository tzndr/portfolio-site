var locations = [
  {
    title: 'Seton Medical Center Williamson',
    location: {lat:30.56707, lng:-97.651251},
    address: '201 Seton Pkwy Round Rock, TX 78665',
    phone: '(512)324-5989',
    website: 'https://www.seton.net/locations/seton-medical-center-williamson/',
    category: 'Medical',
    logo: 'static/img/logos/seton_medical.png',
    markerIcon: 'static/img/marker_logos/seton_medical.png',
    ad: 'static/img/standard_ads/seton_med_williamson.png',
    premium: true
  },
  {
    title: 'University Federal Credit Union',
    location: {lat:30.517898, lng:-97.652095},
    address: '120 Palm Valley Cove Round Rock, TX 78664',
    phone: '(512)467-8080',
    website: 'https://www.ufcu.org/',
    category: 'Financial',
    logo: 'static/img/logos/ufcu.png',
    markerIcon: 'static/img/marker_logos/ufcu.png',
    ad: 'static/img/standard_ads/UFCU.png',
    premium: true
  },
  {
    title: "Angie's Discount Groceries",
    location: {lat:30.524905, lng:-97.687182},
    address: '206 W. Bowman Rd Round Rock, TX 78664',
    phone: '(512)502-5286',
    website: 'https://angiesdiscountgrocery.com/',
    category: 'Food & Drink',
    logo: 'static/img/logos/angies.png',
    markerIcon: 'static/img/marker_logos/angies.png',
    ad: 'static/img/standard_ads/angies.png',
    premium: false
  },
  {
    title: 'Austin Regional Clinic - Round Rock',
    location: {lat:30.484627, lng:-97.689532},
    address: '940 Hesters Crossing Road Round Rock, TX 78681',
    phone: '(512)421-4811',
    website: 'https://www.austinregionalclinic.com/clinics/arc-round-rock/',
    category: 'Medical',
    logo: 'static/img/logos/austin_regional.png',
    markerIcon: 'static/img/marker_logos/austin_regional.png',
    ad: 'static/img/standard_ads/ARC.png',
    premium: false
  },
  {
    title: 'Austin Regional Clinic - Sendero Springs',
    location: {lat:30.549894, lng:-97.737161},
    address: '1025 Sendero Springs Dr., Ste 120 Round Rock, TX 78681',
    phone: '(512)421-4811',
    website: 'https://www.austinregionalclinic.com/clinics/arc-round-rock/',
    category: 'Medical',
    logo: 'static/img/logos/austin_regional.png',
    markerIcon: 'static/img/marker_logos/austin_regional.png',
    ad: 'static/img/standard_ads/arc.png',
    premium: false
  },
  {
    title: 'Best Western Round Rock',
    location: {lat:30.526396, lng:-97.689058},
    address: '1851 N. IH 35 Round Rock, TX 78664',
    phone: '(512)255-3222',
    webpage: 'https://www.bestwestern.com/en_US/book/hotels-in-round-rock/best-western-executive-inn/propertyCode.44429.html/',
    category: 'Lodging',
    logo: 'static/img/logos/best_western.png',
    markerIcon: 'static/img/marker_logos/best_western.png',
    ad: 'static/img/standard_ads/best_western.png',
    premium: false
  },
  {
    title: 'Celebration Church',
    location: {lat:30.580562, lng:-97.681973},
    address: '601 Westinghouse Road Georgetown, TX 78626',
    phone: '(512)763-3000',
    webpage: 'https://celebration.church/',
    category: 'Religious',
    logo: 'static/img/logos/celebration_church.png',
    markerIcon: 'static/img/marker_logos/celebration_church.png',
    ad: 'static/img/standard_ads/celebration_church.png',
    premium: false
  },
  {
    title: 'Central Texas Regional Mobility Authority',
    location: {lat:30.291213, lng:-97.722768},
    address: '3300 N. IH35 #300 Austin, TX 78705',
    phone: '(512-996-9778',
    webpage: 'https://www.mobilityauthority.com/',
    category: 'Government',
    logo: 'static/img/logos/central_texas_mobility.png',
    markerIcon: 'static/img/marker_logos/central_texas_mobility.png',
    ad: 'static/img/standard_ads/CTRMA.png',
    premium: false
  },
  {
    title: 'Christian Brothers Automotive',
    location: {lat:30.481342, lng:-97.662827},
    address: '413 Louis Henna Blvd Round Rock, TX 78664',
    phone: '(512)248-1000',
    webpage: 'https://www.cbac.com/round-rock/',
    category: 'Service',
    logo: 'static/img/logos/christian_brothers.png',
    markerIcon: 'static/img/marker_logos/christian_brothers.png',
    ad: 'static/img/standard_ads/christian_bros.png',
    premium: false
  },
  {
    title: 'City of Round Rock',
    location: {lat:30.508431, lng:-97.67667},
    address: '221 E. Main Street, 3rd floor Round Rock, TX 78664',
    phone: '(512)218-5447',
    webpage: 'https://www.roundrocktexas.gov/',
    category: 'Government',
    logo: 'static/img/logos/city_round_rock.png',
    markerIcon: 'static/img/marker_logos/city_round_rock.png',
    ad: 'static/img/standard_ads/city_of_round_rock.png',
    premium: false
  },
  {
    title: 'COJO Unlimited Catering',
    location: {lat:30.48873, lng:-97.694983},
    address: '1310 Chisolm Valley Dr. # 408 Round Rock, TX 78681',
    phone: '(512)459-9560',
    webpage: 'https://www.cojocatering.com/',
    category: 'Food & Drink',
    logo: 'static/img/logos/cojo.png',
    markerIcon: 'static/img/marker_logos/cojo.png',
    ad: 'static/img/standard_ads/cojo.png',
    premium: false
  },
  {
    title: 'Cynergy Data Texas',
    location: {lat:30.508457, lng:-97.680322},
    address: '206 W. Main St. # 112 Round Rock, TX 78664',
    phone: '(512)250-2380',
    webpage: 'http://cynergydatatexas.com/',
    category: 'Service',
    logo: 'static/img/logos/cynergy_data.png',
    markerIcon: 'static/img/marker_logos/cynergy_data.png',
    ad: 'static/img/standard_ads/cynergy_data.png',
    premium: false
  },
  {
    title: 'Holiday Inn',
    location: {lat:30.538196, lng:-97.695978},
    address: '2370 Chisholm Trail Round Rock, TX 78681',
    phone: '(512)246-7000',
    webpage: 'https://www.holidayinn.com/hotels/us/en/find-hotels/hotel/list?qDest=Round%20Rock,%20TX,%20United%20States&qCiMy=12019&qCiD=21&qCoMy=12019&qCoD=22&qAdlt=1&qChld=0&qRms=1&qRtP=6CBARC&qIta=99504425&qAkamaiCC=US&qSrt=sBR&qBrs=re.ic.in.vn.cp.vx.hi.ex.rs.cv.sb.cw.ma.ul.ki.va&srb_u=1&setPMCookies=true&glat=SEAR&qRad=30&qRdU=mi',
    category: 'Lodging',
    logo: 'static/img/logos/holiday_inn.png',
    markerIcon: 'static/img/marker_logos/holiday_inn.png',
    ad: 'static/img/standard_ads/holiday_inn.png',
    premium: false
  },
  {
    title: 'Meridian World School',
    location: {lat:30.537949, lng:-97.69005},
    address: '2555 N. IH-35 Round Rock, TX 78664',
    phone: '(512)660-5230',
    webpage: 'https://www.mwschool.org/',
    category: 'Education',
    logo: 'static/img/logos/meridian_school.png',
    markerIcon: 'static/img/marker_logos/meridian_school.png',
    ad: 'static/img/standard_ads/meridian.png',
    premium: false
  },
  {
    title: 'Novak Brothers',
    location: {lat: 30.649497, lng:-97.687673},
    address: '1500 Rivery Blvd. Georgetown, TX 78628',
    phone: '(512)-943-4703',
    webpage: 'https://novakbros.com/',
    category: 'Real Estate',
    logo: 'static/img/logos/novak.png',
    markerIcon: 'static/img/marker_logos/novak.png',
    ad: 'static/img/standard_ads/novak_bros.png',
    premium: false
  },
  {
    title: 'OCPD Cleaning Service',
    location: {lat:30.454031, lng:-97.587916},
    address: '18012 Crimson Apple Way Pflugerville, TX 78660',
    phone: '(737)202-9095',
    webpage: 'https://www.homeadvisor.com/rated.OCPDCleaningWith.70997242.html/',
    category: 'Service',
    logo: 'static/img/logos/ocpd.png',
    markerIcon: 'static/img/marker_logos/ocpd.png',
    ad: 'static/img/standard_ads/ocpd.png',
    premium: false
  },
  {
    title: 'Physicians Premier',
    location: {lat:30.517629, lng:-97.653582},
    address: '2105 E. Palm Valley Blvd Round Rock, TX 78665',
    phone: '(512)825-8808',
    webpage: 'https://mdpremier.com/round-rock-emergency-room/',
    category: 'Medical',
    logo: 'static/img/logos/physician_premier.png',
    markerIcon: 'static/img/marker_logos/physician_premier.png',
    ad: 'static/img/standard_ads/physicians_premier.png',
    premium: false
  },
  {
    title: 'Pie Jacked',
    location: {lat:30.497925, lng:-97.675469},
    address: '1105 S. Mays St. Suite 200 Round Rock, TX 78664',
    phone: '(512)815-7959',
    webpage: 'http://piejacked.wixsite.com/glutenfreepies/menu/',
    category: 'Food & Drink',
    logo: 'static/img/logos/pie_jacked.png',
    markerIcon: 'static/img/marker_logos/pie_jacked.png',
    ad: 'static/img/standard_ads/pie_jacked.png',
    premium: false
  },
  {
    title: 'Quality Inn',
    location: {lat:30.493679, lng:-97.679253},
    address: '1802 South IH-35 Round Rock, TX 78681',
    phone: '(512)246-0055',
    webpage: 'https://www.choicehotels.com/texas/round-rock/quality-inn-hotels/tx705?mc=smgogousqil&cid=Search%7CQuality_Inn%7CUS%7CTexas%7CExact%7CCPC%7CDesktop%7CEN%7CB_G&ag=US%7CTX%7CRound%20Rock&pmf=GOOGLE&kw=quality%20inn%20round%20rock&gclid=Cj0KCQiAtbnjBRDBARIsAO3zDl8jLz8i90pXS54s9g-UoCj5yoFLxBllLFQXT1I-gmJ8RheYxXraU2YaAklzEALw_wcB&gclsrc=aw.ds',
    category: 'Lodging',
    logo: 'static/img/logos/quality_inn.png',
    markerIcon: 'static/img/marker_logos/quality_inn.png',
    ad: 'static/img/standard_ads/quality_inn.png',
    premium: false
  },
  {
    title: 'IKEA',
    location: {lat:30.557492, lng:-97.690038},
    address: '1 IKEA Way Round Rock, TX 78665',
    phone: '(512)310-8027',
    webpage: 'https://www.ikea.com/us/en/store/round_rock/',
    category: 'Retail',
    logo: 'static/img/logos/ikea.png',
    markerIcon: 'static/img/marker_logos/ikea.png',
    ad: 'static/img/standard_ads/ikea.png',
    premium: false
  },
  {
    title: 'Karavel Shoes',
    location: {lat:30.330706, lng:-97.739672},
    address: '5501 Burnet Rd. Austin, TX 78756',
    phone: '(512)610-3990',
    webpage: 'https://karavelshoes.com/',
    category: 'Retail',
    logo: 'static/img/logos/karavel.png',
    markerIcon: 'static/img/marker_logos/karavel.png',
    ad: 'static/img/standard_ads/karavel.png',
    premium: false
  },
  {
    title: 'Keller Williams - Tara Knight',
    location: {lat:30.535411, lng:-97.680237},
    address: '2300 Greenhill Drive, Suite 200 Round Rock, TX 78664',
    phone: '(512)751-4834',
    webpage: 'https://www.kw.com/kw/GetAgent.action?personId=132558/',
    category: 'Real Estate',
    logo: 'static/img/logos/keller_williams.png',
    markerIcon: 'static/img/marker_logos/keller_williams.png',
    ad: 'static/img/standard_ads/KW_tara.png',
    premium: false
  },
  {
    title: 'La Frontera Property Owners Association',
    location: {lat:30.274498, lng:-97.749955},
    address: '808 West 10th Street Austin, TX 78701',
    phone: '(512)469-0925',
    webpage: 'http://www.graniteproperties.com/',
    category: 'Real Estate',
    logo: 'static/img/logos/la_frontera.png',
    markerIcon: 'static/img/marker_logos/la_frontera.png',
    ad: 'static/img/standard_ads/la_frontera.png',
    premium: false
  },
  {
    title: 'Local Plumbing Service',
    location: {lat:30.520144, lng:-97.692841},
    address: '1003 S. Industrial Blvd Round Rock, TX 78681',
    phone: '(512)837-8034',
    webpage: 'https://www.localplumbingservice.org/',
    category: 'Service',
    logo: 'static/img/logos/local_plumbing.png',
    markerIcon: 'static/img/marker_logos/local_plumbing.png',
    ad: 'static/img/standard_ads/local_plumbing.png',
    premium: false
  },
  {
    title: 'RE/MAX - Cathy Kinney',
    location: {lat:30.520224, lng:-97.775756},
    address: '305 Denali Pass Dr Suite C Cedar Park, TX 78613',
    phone: '(713)823-5896',
    webpage: 'https://www.remax.com/realestateagentoffice/cedarpark-tx-78613-cathykinney-id28973375.html/',
    category: 'Real Estate',
    logo: 'static/img/logos/remax_cathy.png',
    markerIcon: 'static/img/marker_logos/remax_cathy.png',
    ad: 'static/img/standard_ads/remax_cathy.png',
    premium: false
  },
  {
    title: 'Realty Texas',
    location: {lat:30.488482, lng:-97.680077},
    address: '2000 South I.H. 35 Suite E-1 Round Rock, TX 78681',
    phone: '(512)590-1833',
    webpage: 'https://www.realtytexas.homes/',
    category: 'Real Estate',
    logo: 'static/img/logos/realty_texas.png',
    markerIcon: 'static/img/marker_logos/realty_texas.png',
    ad: 'static/img/standard_ads/realty_texas.png',
    premium: false
  },
  {
    title: 'RejuviYouth Health & Wellness Spa',
    location: {lat:30.565535, lng:-97.662907},
    address: '1101 Satellite View # 504 Round Rock, TX 78665',
    phone: '(512)645-0823',
    webpage: 'http://www.rejuviyouth.com/',
    category: 'Health & Wellness',
    logo: 'static/img/logos/rejuvi.png',
    markerIcon: 'static/img/marker_logos/rejuvi.png',
    ad: 'static/img/standard_ads/rejuvi.png',
    premium: false
  },
  {
    title: 'Round Rock Chamber of Commerce',
    location: {lat:30.50922, lng:-97.677319},
    address: '212 E. Main Street Round Rock, TX 78664',
    phone: '(512)255-5805',
    webpage: 'https://roundrockchamber.org/',
    category: 'Government',
    logo: 'static/img/logos/round_rock_chamber.png',
    markerIcon: 'static/img/marker_logos/round_rock_chamber.png',
    ad: 'static/img/standard_ads/chamber.png',
    premium: false
  },
  {
    title: 'Round Rock Christian Academy',
    location: {lat:30.50922, lng:-97.693747},
    address: '301-A North Lake Creek Drive Round Rock, TX 78681',
    phone: '(512)255-4491',
    webpage: 'https://www.rrca-tx.org/',
    category: 'Education',
    logo: 'static/img/logos/round_rock_christian.png',
    markerIcon: 'static/img/marker_logos/round_rock_christian.png',
    ad: 'static/img/standard_ads/round_rock_christian.png',
    premium: false
  },
  {
    title: 'Rush Automotive',
    location: {lat:30.489136, lng:-97.695894},
    address: '2211 County Road 172 Round Rock, TX 78681',
    phone: '(512)733-7874',
    webpage: 'https://www.myrushauto.com/',
    category: 'Service',
    logo: 'static/img/logos/rush_auto.png',
    markerIcon: 'static/img/marker_logos/rush_auto.png',
    ad: 'static/img/standard_ads/rush_auto.png',
    premium: false
  },
  {
    title: 'Senior Care/Trinity Care Center',
    location: {lat:30.512078, lng:-97.668002},
    address: '1000 E. Main Street Round Rock, TX 78664',
    phone: '(512)634-3003',
    webpage: 'https://senior-care-centers.com/find-a-community/austin-central-texas/trinity-care-center/',
    category: 'Medical',
    logo: 'static/img/logos/senior_care.png',
    markerIcon: 'static/img/marker_logos/senior_care.png',
    ad: 'static/img/standard_ads/trinity_care.png',
    premium: false
  },
  {
    title: 'Skinny Bobs Billiards',
    location: {lat:30.487963, lng:-97.680257},
    address: '300 Hesters Crossing #A1 Round Rock, TX 78681',
    phone: '(512)733-1111',
    webpage: 'https://skinnybobs.com/',
    category: 'Entertainment',
    logo: 'static/img/logos/skinny_bobs.png',
    markerIcon: 'static/img/marker_logos/skinny_bobs.png',
    ad: 'static/img/standard_ads/skinny_bobs.png',
    premium: false
  },
  {
    title: 'Speed Pro Imaging',
    location: {lat:30.550942, lng:-97.674045},
    address: '6 Indian Meadows #610 Round Rock, TX 78665',
    phone: '(512)640-1052',
    webpage: 'https://www.speedpro.com/solutions-tx/',
    category: 'Service',
    logo: 'static/img/logos/speed_pro.png',
    markerIcon: 'static/img/marker_logos/speed_pro.png',
    ad: 'static/img/standard_ads/speed_pro.png',
    premium: false
  },
  {
    title: 'Teriyaki Madness',
    location: {lat:30.481515, lng:-97.677657},
    address: '2800 IH-35 Suite 140 Round Rock, TX 78641',
    phone: '(512)359-5449',
    webpage: 'https://teriyakimadness.com/locations/roundrock/',
    category: 'Food & Drink',
    logo: 'static/img/logos/teriyaki.png',
    markerIcon: 'static/img/marker_logos/teriyaki.png',
    ad: 'static/img/standard_ads/teriyaki_madness.png',
    premium: false
  },
  {
    title: 'Texas Spanish Academy',
    location: {lat:30.507029, lng:-97.679588},
    address: '201 W. Bagdad Ave Round Rock, TX 78664',
    phone: '(512)589-2931',
    webpage: 'http://www.txspanishacademy.com/',
    category: 'Education',
    logo: 'static/img/logos/tx_spanish_school.png',
    markerIcon: 'static/img/marker_logos/tx_spanish_school.png',
    ad: 'static/img/standard_ads/tx_spanish_academy.png',
    premium: false
  },
  {
    title: 'The Brass Tap',
    location: {lat:30.509098, lng:-97.677515},
    address: '204 E. Main St Round Rock, TX 78664',
    phone: '512-954-7177',
    webpage: 'https://www.brasstapbeerbar.com/RoundRock',
    category: 'Food & Drink',
    logo: 'static/img/logos/brass_tap.png',
    markerIcon: 'static/img/marker_logos/brass_tap.png',
    ad: 'static/img/standard_ads/brass_tap.png',
    premium: false
  },
  {
    title: 'The UPS Store #1394',
    location: {lat:30.51868, lng:-97.685081},
    address: '402 A West Palm Valley Blvd Round Rock, TX 78664',
    phone: '(512)218-0311',
    webpage: 'https://locations.theupsstore.com/tx/round-rock/402-a-west-palm-valley-blvd/',
    category: 'Service',
    logo: 'static/img/logos/ups.png',
    markerIcon: 'static/img/marker_logos/ups.png',
    ad: 'static/img/standard_ads/ups_1394.png',
    premium: false
  },
  {
    title: 'The Williamson Museum',
    location: {lat:30.636829, lng:-97.678169},
    address: '716 South Austin Ave Georgetown, TX 78626',
    phone: '(512)943-1647',
    webpage: 'http://williamsonmuseum.org/',
    category: 'Education',
    logo: 'static/img/logos/williamson.png',
    markerIcon: 'static/img/marker_logos/williamson.png',
    ad: 'static/img/standard_ads/williamson_museum.png',
    premium: false
  },
  {
    title: 'TNT Asset Management',
    location: {lat:30.508414, lng:-97.67836},
    address: '105 East Main St. Round Rock, TX 78664',
    phone: '(512)-255-1600',
    webpage: 'http://www.tntfinancial.com/',
    category: 'Financial',
    logo: 'static/img/logos/tnt.png',
    markerIcon: 'static/img/marker_logos/tnt.png',
    ad: 'static/img/standard_ads/tnt.png',
    premium: false
  },
  {
    title: 'U.B.E.O. Business Services',
    location: {lat:30.381387, lng:-97.716105},
    address: '2112 Rutland Drive, Suite 140 Austin, TX 78758',
    phone: '512-672-4431',
    webpage: 'https://ubeo.com/',
    category: 'Service',
    logo: 'static/img/logos/ubeo.png',
    markerIcon: 'static/img/marker_logos/ubeo.png',
    ad: 'static/img/standard_ads/ubeo.png',
    premium: false
  },
  {
    title: 'United Heritage Credit Union',
    location: {lat:30.41525, lng:-97.707459},
    address: '12208 N. Mopac Expressway Austin, TX 78758',
    phone: '(512)435-4545',
    webpage: 'https://www.uhcu.org/',
    category: 'Financial',
    logo: 'static/img/logos/united_heritage.png',
    markerIcon: 'static/img/marker_logos/united_heritage.png',
    ad: 'static/img/standard_ads/united_heritage.png',
    premium: false
  },
  {
    title: 'US Health Advisors - Round Rock',
    location: {lat:30.524287, lng:-97.641818},
    address: '2851 Joe Dimaggio Blvd Round Rock, TX 78665',
    phone: '(512)576-6800',
    webpage: 'https://www.ushagent.com/JimmyWeaver/',
    category: 'Medical',
    logo: 'static/img/logos/us_health.png',
    markerIcon: 'static/img/marker_logos/us_health.png',
    ad: 'static/img/standard_ads/us_health_advisors.png',
    premium: false
  },
  {
    title: 'Van Houten & Associates',
    location: {lat:30.516942, lng:-97.661532},
    address: '1517 E. Palm Valley Blvd Round Rock, TX 78664',
    phone: '(512)310-9277',
    webpage: 'https://vhacpa.com/',
    category: 'Service',
    logo: 'static/img/logos/van_houten.png',
    markerIcon: 'static/img/marker_logos/van_houten.png',
    ad: 'static/img/standard_ads/van_houten.png',
    premium: false
  },
  {
    title: 'Walmart Store 5480',
    location: {lat:30.533668, lng:-97.612124},
    address: '4700 E. Palm Valley Blvd Round Rock, TX 78664',
    phone: '(512)218-1018',
    webpage: 'https://www.walmart.com/store/5480/round-rock-tx/details/',
    category: 'Retail',
    logo: 'static/img/logos/walmart.png',
    markerIcon: 'static/img/marker_logos/walmart.png',
    ad: 'static/img/standard_ads/walmart.png',
    premium: false
  },
  {
    title: 'Webre-Sherrill Insurance Advisors',
    location: {lat:30.546296, lng:-97.755489},
    address: '3401 Royal Vista, Ste B100 Round Rock, TX 78681',
    phone: '(512)255-1015',
    webpage: 'http://webreins.com/',
    category: 'Service',
    logo: 'static/img/logos/webre.png',
    markerIcon: 'static/img/marker_logos/webre.png',
    ad: 'static/img/standard_ads/webre.png',
    premium: false
  },
  {
    title: 'Wingate By Wyndham',
    location: {lat:30.519104, lng:-97.687385},
    address: '1209 N. IH-35 Round Rock, TX 78664',
    phone: '(512)636-9106',
    webpage: 'https://www.wyndhamhotels.com/wingate/round-rock-texas/wingate-by-wyndham-round-rock/overview?CID=LC:WG::GGL:RIO:National:09220&iata=00065402/',
    category: 'Lodging',
    logo: 'static/img/logos/wingate.png',
    markerIcon: 'static/img/marker_logos/wingate.png',
    ad: 'static/img/standard_ads/wingate.png',
    premium: false
  }
];