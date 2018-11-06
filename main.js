var students = [
    {
        nis: '170700757',
        name: 'Muhammad Ridwan',
        avatar: 'img/finish.jpg'
    },
    {
        nis: '170700758',
        name: 'Syukriatul Zandri',
        avatar: 'img/zandri.jpg'
    },
    {
        nis: '170700759',
        name: 'Wendi Hermawan',
        avatar: 'img/Wendi H.jpg'
    },
    {
        nis: '170700760',
        name: 'Qolbiatul Adriyen',
        avatar: 'img/Qolbiatul A.jpg'
    },
    {
        nis: '170700761',
        name: 'M.Farid',
        avatar: 'img/Farid.jpg'
    },
    {
        nis: '170700762',
        name: 'Muhammad Andika',
        avatar: 'img/Andika.jpg'
    },
    {
        nis: '170700763',
        name: 'Khairul Mustafa',
        avatar: 'img/Khairul Mustafa.jpg'
    },
    {
        nis: '170700764',
        name: 'Akhdanatul Wafy',
        avatar: 'img/Wafy.jpg'
    },
    {
        nis: '170700765',
        name: 'Azim',
        avatar: 'img/Azim.jpg'
    },
    {
        nis: '170700766',
        name: 'M.Rehan',
        avatar: 'img/Rehan.jpg'
    },
    {
        nis: '170700767',
        name: 'Ahmad Fuadi',
        avatar: 'img/Ahmad.jpg'
    },
    {
        nis: '170700768',
        name: 'gia',
        avatar: 'img/gia.jpg'
    },
    {
        nis: '170700769',
        name: 'Satria Ramadhanol',
        avatar: 'img/Satria.jpg'
    },
    {
        nis: '170700770',
        name: 'Rizki Ananda',
        avatar: 'img/Rizki.jpg'
    },
    {
        nis: '170700771',
        name: 'M.lutfy',
        avatar: 'img/Lutfy.jpg'
    },
    {
        nis: '170700772',
        name: 'Hamizan',
        avatar: 'img/Mizan.jpg'
    },
    {
        nis: '170700773',
        name: 'Revan',
        avatar: 'img/Revan.jpg'
    },
    {
        nis: '170700774',
        name: 'Yogi',
        avatar: 'img/Yogi.jpg'
    },
    {
        nis: '170700775',
        name: 'Rizki Fauzan',
        avatar: 'img/Fauzan.jpg'
    },
    {
        nis: '170700776',
        name: 'Arif Habibie',
        avatar: 'img/habibie.jpg'
    },
    {
        nis: '170700777',
        name: 'Augustio Fernando',
        avatar: 'img/Agus.jpg'
    },
    {
        nis: '170700778',
        name: 'Widian Sandiki',
        avatar: 'img/Widian.jpg'
    }
       
]


    //ini untuk proses pencaria data 
    //ketika tombol di tekan
function cari(){
    var ketik = document.getElementById('search').value
    for(var i = 0; i < students.length; i = i + 1){
        if (students[i].nis == ketik){
            document.getElementById('tampil').textContent = students[i].name
            document.getElementById('gbr').setAttribute("src",students[i].avatar)       
            
        }
    }
    
}