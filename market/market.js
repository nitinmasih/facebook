

window.scroll(()=>
document.body.style.pointerEvents = 'none')

const buttons = document.querySelectorAll('svg');
const links = document.querySelectorAll('.link')
// Add click event listeners to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    buttons.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    this.classList.add('active');
  });
});
links.forEach(function(button) {
  button.addEventListener('click', function() {
    // Remove 'active' class from all buttons
    links.forEach(function(btn) {
      btn.classList.remove('active');
    });
    // Add 'active' class to the clicked button
    this.classList.add('active');
  });
});

const leftContainer = document.querySelector('.left-container')
const middleContainer = document.querySelector('.middle-container')
const rightContainer = document.querySelector('.right-container')

// leftContainer.addEventListener('scroll',(e)=>{
//   window.scrollY = "none"
//  console.log('hello')
// })


// rightContainer.addEventListener('mouseover',(e)=>{
//  disableScroll()
// })
// rightContainer.addEventListener('mouseout',()=>{
//   enableScroll()
// })

// rightContainer.addEventListener('mouseout',(e)=>{
//   document.body.style.overflow = 'auto'
// })

const body = document.body

function disableScroll() {
  // Get the current scroll position
  var scrollPosition = [
    window.self.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft,
    window.self.pageYOffset || document.documentElement.scrollTop  || document.body.scrollTop
  ];
  // Save the current scroll position
  window.onscroll = function() {
      window.scrollTo(scrollPosition[0], scrollPosition[1]);
  };
}

function enableScroll() {
  window.onscroll = null;
}
const likeButtonContainer = document.querySelectorAll('.like-button-text')

// likeButton.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv4rp6TWxXOFjUNn5FLih5w9GVIZHk3QJTFGzbwZ6_A&s" alt="" style="height: 20px;width: 20px;">`

likeButtonContainer.forEach((element)=>{
  let isToggle = false;
  element.addEventListener('click',(e)=>{
    isToggle = !isToggle
    const likeButton = element.querySelector('.like-button')
    if (isToggle) {
      likeButton.innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzv4rp6TWxXOFjUNn5FLih5w9GVIZHk3QJTFGzbwZ6_A&s" alt="" style="height: 20px;width: 20px;">`
    }else{
      likeButton.innerHTML = `<i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1"
      style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/33uRJSkrOlX.png&quot;); background-position: 0px -796px; background-size: 26px 1522px; width: 20px; height: 20px; background-repeat: no-repeat; display: inline-block;"></i>`
    }
    
  })
})

 

 const data = [
      {
        "albumId": 1,
        "id": 1,
        "title": "accusamus beatae ad facilis cum similique qui sunt",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
      },
      {
        "albumId": 1,
        "id": 2,
        "title": "reprehenderit est deserunt velit ipsam",
        "url": "https://via.placeholder.com/600/771796",
        "thumbnailUrl": "https://via.placeholder.com/150/771796"
      },
      {
        "albumId": 1,
        "id": 3,
        "title": "officia porro iure quia iusto qui ipsa ut modi",
        "url": "https://via.placeholder.com/600/24f355",
        "thumbnailUrl": "https://via.placeholder.com/150/24f355"
      },
      {
        "albumId": 1,
        "id": 4,
        "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
        "url": "https://via.placeholder.com/600/d32776",
        "thumbnailUrl": "https://via.placeholder.com/150/d32776"
      },
      {
        "albumId": 1,
        "id": 5,
        "title": "natus nisi omnis corporis facere molestiae rerum in",
        "url": "https://via.placeholder.com/600/f66b97",
        "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
      },
      {
        "albumId": 1,
        "id": 6,
        "title": "accusamus ea aliquid et amet sequi nemo",
        "url": "https://via.placeholder.com/600/56a8c2",
        "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
      },
      {
        "albumId": 1,
        "id": 7,
        "title": "officia delectus consequatur vero aut veniam explicabo molestias",
        "url": "https://via.placeholder.com/600/b0f7cc",
        "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
      },
      {
        "albumId": 1,
        "id": 8,
        "title": "aut porro officiis laborum odit ea laudantium corporis",
        "url": "https://via.placeholder.com/600/54176f",
        "thumbnailUrl": "https://via.placeholder.com/150/54176f"
      },
      {
        "albumId": 1,
        "id": 9,
        "title": "qui eius qui autem sed",
        "url": "https://via.placeholder.com/600/51aa97",
        "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
      },
      {
        "albumId": 1,
        "id": 10,
        "title": "beatae et provident et ut vel",
        "url": "https://via.placeholder.com/600/810b14",
        "thumbnailUrl": "https://via.placeholder.com/150/810b14"
      },
      {
        "albumId": 1,
        "id": 11,
        "title": "nihil at amet non hic quia qui",
        "url": "https://via.placeholder.com/600/1ee8a4",
        "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
      },
      {
        "albumId": 1,
        "id": 12,
        "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
        "url": "https://via.placeholder.com/600/66b7d2",
        "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
      },
      {
        "albumId": 1,
        "id": 13,
        "title": "repudiandae iusto deleniti rerum",
        "url": "https://via.placeholder.com/600/197d29",
        "thumbnailUrl": "https://via.placeholder.com/150/197d29"
      },
      {
        "albumId": 1,
        "id": 14,
        "title": "est necessitatibus architecto ut laborum",
        "url": "https://via.placeholder.com/600/61a65",
        "thumbnailUrl": "https://via.placeholder.com/150/61a65"
      },
      {
        "albumId": 1,
        "id": 15,
        "title": "harum dicta similique quis dolore earum ex qui",
        "url": "https://via.placeholder.com/600/f9cee5",
        "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
      },
      {
        "albumId": 1,
        "id": 16,
        "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
        "url": "https://via.placeholder.com/600/fdf73e",
        "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
      },
      {
        "albumId": 1,
        "id": 17,
        "title": "natus doloribus necessitatibus ipsa",
        "url": "https://via.placeholder.com/600/9c184f",
        "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
      },
      {
        "albumId": 1,
        "id": 18,
        "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
        "url": "https://via.placeholder.com/600/1fe46f",
        "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
      },
      {
        "albumId": 1,
        "id": 19,
        "title": "perferendis nesciunt eveniet et optio a",
        "url": "https://via.placeholder.com/600/56acb2",
        "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
      },
      {
        "albumId": 1,
        "id": 20,
        "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
        "url": "https://via.placeholder.com/600/8985dc",
        "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
      },
      {
        "albumId": 1,
        "id": 21,
        "title": "ad et natus qui",
        "url": "https://via.placeholder.com/600/5e12c6",
        "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
      },
      {
        "albumId": 1,
        "id": 22,
        "title": "et ea illo et sit voluptas animi blanditiis porro",
        "url": "https://via.placeholder.com/600/45601a",
        "thumbnailUrl": "https://via.placeholder.com/150/45601a"
      },
      {
        "albumId": 1,
        "id": 23,
        "title": "harum velit vero totam",
        "url": "https://via.placeholder.com/600/e924e6",
        "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
      },
      {
        "albumId": 1,
        "id": 24,
        "title": "beatae officiis ut aut",
        "url": "https://via.placeholder.com/600/8f209a",
        "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
      },
      {
        "albumId": 1,
        "id": 25,
        "title": "facere non quis fuga fugit vitae",
        "url": "https://via.placeholder.com/600/5e3a73",
        "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
      },
      {
        "albumId": 1,
        "id": 26,
        "title": "asperiores nobis voluptate qui",
        "url": "https://via.placeholder.com/600/474645",
        "thumbnailUrl": "https://via.placeholder.com/150/474645"
      },
      {
        "albumId": 1,
        "id": 27,
        "title": "sit asperiores est quos quis nisi veniam error",
        "url": "https://via.placeholder.com/600/c984bf",
        "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
      },
      {
        "albumId": 1,
        "id": 28,
        "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
        "url": "https://via.placeholder.com/600/392537",
        "thumbnailUrl": "https://via.placeholder.com/150/392537"
      },
      {
        "albumId": 1,
        "id": 29,
        "title": "aut ipsam quos ab placeat omnis",
        "url": "https://via.placeholder.com/600/602b9e",
        "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
      },
      {
        "albumId": 1,
        "id": 30,
        "title": "odio enim voluptatem quidem aut nihil illum",
        "url": "https://via.placeholder.com/600/372c93",
        "thumbnailUrl": "https://via.placeholder.com/150/372c93"
      },
      {
        "albumId": 1,
        "id": 31,
        "title": "voluptate voluptates sequi",
        "url": "https://via.placeholder.com/600/a7c272",
        "thumbnailUrl": "https://via.placeholder.com/150/a7c272"
      },
      {
        "albumId": 1,
        "id": 32,
        "title": "ad enim dignissimos voluptatem similique",
        "url": "https://via.placeholder.com/600/c70a4d",
        "thumbnailUrl": "https://via.placeholder.com/150/c70a4d"
      },
      {
        "albumId": 1,
        "id": 33,
        "title": "culpa ipsam nobis qui fuga magni et mollitia",
        "url": "https://via.placeholder.com/600/501fe1",
        "thumbnailUrl": "https://via.placeholder.com/150/501fe1"
      },
    ]
  const imageBox = document.getElementById('image-box')
  
    data.forEach((element)=>{
       imageBox.innerHTML += `<img src=${element.url} alt="">
       `
    })