//All locations featured on the map including supporting info.
var locations = [
  {
    title: 'Apple',
    location: {lat:37.332584, lng: -122.030337},
    address: 'Apple Campus, Cupertino, CA 95014',
    category: 'Computers',
    logo: 'img/company_logos/apple.png',
    markerIcon: 'img/markericons/apple.png',
    premium: false
  },
  {
    title: 'AMD',
    location: {lat:37.3829254, lng: -121.9703842},
    address: '2485 Augustine Dr, Santa Clara, CA 95054',
    category: 'Computers',
    logo: 'img/company_logos/amd.png',
    markerIcon: 'img/markericons/amd.png',
    premium: false
  },
  {
    title: 'Lockheed Martin',
    location: {lat:37.415918, lng: -122.0358779},
    address: '1111 Lockheed Martin Way, Sunnyvale, CA 94089',
    category: 'Military',
    logo: 'img/company_logos/lockheed_martin.png',
    markerIcon: 'img/markericons/lockheed_martin.png',
    premium: false
  },
  {
    title: 'Hewlett Packard',
    location: {lat:37.3820152, lng: -121.9813847},
    address: '3333 Scott Blvd, Santa Clara, CA 95054',
    category: 'Computers',
    logo: 'img/company_logos/hp.png',
    markerIcon: 'img/markericons/hp.png',
    premium: false
  },
  {
    title: 'Electronic Arts',
    location: {lat:37.5232794, lng: -122.2541438},
    address: '209 Redwood Shores Pkwy, Redwood City, CA 94065',
    category: 'Games',
    logo: 'img/company_logos/ea.png',
    markerIcon: 'img/markericons/ea.png',
    premium: false
  },
  {
    title: 'Cisco',
    location: {lat:37.4084383, lng: -121.9539644},
    address: '170 W Tasman Dr, San Jose, CA 95134',
    category: 'IT',
    logo: 'img/company_logos/cisco.png',
    markerIcon: 'img/markericons/cisco.png',
    premium: false
  },
  {
    title: 'Google',
    location: {lat:37.4218419, lng: -122.0840568},
    address: '1600 Amphitheatre Pkwy, Mountain View, CA 94043',
    category: 'Internet',
    logo: 'img/company_logos/google.png',
    markerIcon: 'img/markericons/google.png',
    premium: false
  },
  {
    title: 'Nvidia',
    location: {lat:37.370654, lng: -121.968295},
    address: '2788 San Tomas Expy, Santa Clara, CA 9505',
    category: 'Computers',
    logo: 'img/company_logos/nvidia.png',
    markerIcon: 'img/markericons/nvidia.png',
    premium: false
  },
  {
    title: 'Netflix',
    location: {lat:37.259585, lng: -121.962695},
    address: '100 Winchester Cir, Los Gatos, CA 95032',
    category: 'Entertainment',
    logo: 'img/company_logos/netflix.png',
    markerIcon: 'img/markericons/netflix.png',
    premium: false
  },
  {
    title: 'Facebook',
    location: {lat:37.484377, lng: -122.148304},
    address: '1 Hacker Way, Menlo Park, CA 94025',
    category: 'Internet',
    logo: 'img/company_logos/facebook.png',
    markerIcon: 'img/markericons/facebook.png',
    premium: false
  },
  {
    title: 'Oracle',
    location: {lat:37.528581, lng: -122.2646347},
    address: '100 Oracle Pkwy, Redwood City, CA 94065',
    category: 'IT',
    logo: 'img/company_logos/oracle.png',
    markerIcon: 'img/markericons/oracle.png',
    premium: false
  },
  {
    title: 'Tesla',
    location: {lat:37.394706, lng: -122.150325},
    address: '3500 Deer Creek Rd, Palo Alto, CA 94304',
    category: 'Transportation',
    logo: 'img/company_logos/tesla.png',
    markerIcon: 'img/markericons/tesla.png',
    premium: false
  },
  {
    title: 'Symantec',
    location: {lat: 37.3981961, lng: -122.0544663},
    address: '350 Ellis St, Mountain View, CA 94043',
    category: 'Computers',
    logo: 'img/company_logos/symantec.png',
    markerIcon: 'img/markericons/symantec.png',
    premium: false
  },
  {
    title: 'Intel',
    location: {lat: 37.387591, lng: -121.963787},
    address: '2200 Mission College Blvd, Santa Clara, CA 95054',
    category: 'Computers',
    logo: 'img/company_logos/intel.png',
    markerIcon: 'img/markericons/intel.png',
    premium: false
  },
  {
    title: 'Riverbed Technology',
    location: {lat:37.3977072 , lng: -122.0300751},
    address: '525 Almanor Ave, Sunnyvale, CA 94085',
    category: 'IT',
    logo: 'img/company_logos/riverbed.png',
    markerIcon: 'img/markericons/riverbed.png',
    premium: false
  },
  {
    title: 'Agilent Technology',
    location: {lat:37.3248859 , lng: -121.998857},
    address: '5301 Stevens Creek Blvd, Santa Clara, CA 95051',
    category: 'Science',
    logo: 'img/company_logos/agilent.png',
    markerIcon: 'img/markericons/agilent.png',
    premium: false
  },
  {
    title: 'Visa',
    location: {lat: 37.4262136, lng: -122.1431343},
    address: '385 Sherman Ave, Palo Alto, CA 94306',
    category: 'Payments',
    logo: 'img/company_logos/visa.png',
    markerIcon: 'img/markericons/visa.png',
    premium: false
  },
  {
    title: 'Uber',
    location: {lat: 37.399017, lng: -122.138028},
    address: '900 Arastradero Rd, Palo Alto, CA 94304',
    category: 'Transportation',
    logo: 'img/company_logos/uber.png',
    markerIcon: 'img/markericons/uber.png',
    premium: false
  }
];
