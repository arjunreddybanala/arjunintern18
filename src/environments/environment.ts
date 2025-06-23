const webUrl = 'http://localhost:3000';
// const webUrl = location.origin.toLowerCase();
const dev = 'https://shwpdev.dhanushinfotech.com/'
// export const apiUrl = typeof window !== 'undefined' ? location.origin : 'http://localhost:3000';
const loginUrl = 'https://freeapi.miniprojectideas.com/api/User/Login'
export const environment = {
  baseUrl: webUrl.includes('localhost') ? dev : (webUrl + "/"),
  login: 'shwp/login',
  emailLogin: loginUrl
};
// baseUrl: webUrl.includes('localhost') ? dev : (webUrl + "/"),
// landing: 'shwp/dashboard/udisedata',
// dashboard: 'shwp/dashboard/landing/v2',
// thrdPwdgt: 'shwp-utility/v2/stats/getallcount',
// Barcolors: {
//   //stackBarColors:['#F0CF65','#254441','#FF6F59','#F2D0A4','#43AA8B','#EF3054'],
//   stackBarColors: ['#f0cf65', '#82a350', '#ff6f59', '#f2d0a4', '#43aa8b', '#ef3054'],
//   normalBarColors: [],
//   IndividualBarColor: ['#ef3054'],
//   donutColors: ['#f0cf65', '#82a350', '#ff6f59', '#f2d0a4', '#43aa8b', '#ef3054'],
// }
//apiapexchart
// apiapexchart: 'https://quickchart.io/apex-charts/render'
// chartUrl:'https://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly'


