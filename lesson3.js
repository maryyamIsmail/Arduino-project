const images = [
   'https://th.bing.com/th/id/OIP.pnCNFtiDjEqGfVDHyFmMVwHaGm?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.pnCNFtiDjEqGfVDHyFmMVwHaGm?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.r4E8Ikls458WzErV-LR9QgHaHa?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.r4E8Ikls458WzErV-LR9QgHaHa?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/R.81a025085e34a10d08a05b2f754195f5?rik=77EZAIkJw62zcA&pid=ImgRaw&r=0',
   'https://th.bing.com/th/id/R.81a025085e34a10d08a05b2f754195f5?rik=77EZAIkJw62zcA&pid=ImgRaw&r=0',
   'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25046/clueless-robot-remix-clipart-md.png',
   'https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/25046/clueless-robot-remix-clipart-md.png',
   'https://th.bing.com/th/id/OIP.bDqYi1td1DBATxf9FBc-pgHaHa?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.bDqYi1td1DBATxf9FBc-pgHaHa?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.28mcKqazTS5YcWCC6ZRMkAHaFb?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.28mcKqazTS5YcWCC6ZRMkAHaFb?pid=ImgDet&rs=1',
   'https://i1.pnghost.com/11/3/22/pngdb-blue-hand-painted-robot-cartoon-illustration-png-2wknpfUgnkEiUb0k1XekftJPP.jpg',
   'https://i1.pnghost.com/11/3/22/pngdb-blue-hand-painted-robot-cartoon-illustration-png-2wknpfUgnkEiUb0k1XekftJPP.jpg',
   'https://th.bing.com/th/id/OIP.0V1atgGEpwQA9pSqZ39-jQHaHa?pid=ImgDet&rs=1',
   'https://th.bing.com/th/id/OIP.0V1atgGEpwQA9pSqZ39-jQHaHa?pid=ImgDet&rs=1',
   'https://cdn4.iconfinder.com/data/icons/robotics-3/48/69-512.png',
   'https://cdn4.iconfinder.com/data/icons/robotics-3/48/69-512.png'
]
var shuf_images = images.sort(()=> (Math.random()> .5)? 2: -1);
for ( var i=0; i<images.lenght; i++){
    let box= document.createElement('div')
    box.className='item';
    box.innerHTML=shuf.images[i]
    document.querySelector('.game').appendChild(box);


}