export default {
  FB_APP_ID: process.env.NODE_ENV === 'production' ? '151696645445865' : '2065138443715070',
  //LOBBY_SOURCE: process.env.NODE_ENV === 'production' ? 'wss://clouds-against-humanity.herokuapp.com:22759' : 'localhost:8080',
  //GAME_SOURCE: process.env.NODE_ENV === 'production' ? 'wss://clouds-against-humanity.herokuapp.com:3000' : 'localhost:3000',
  LOBBY_SOURCE: 'https://cah-server-wihowjrmkb.now.sh',

  CDN_JS: [
    'https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.1.5/js/iziToast.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js'
  ],
  CDN_CSS: [
    'https://cdnjs.cloudflare.com/ajax/libs/izitoast/1.1.5/css/iziToast.min.css'
  ]
}
