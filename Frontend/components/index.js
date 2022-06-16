
function homeNews(){

    fetch("http://localhost:8080/homenews",{
        method: 'GET'
    }).then((result)=>{
        result.json().then((res)=>{
            console.log(res)
            showHomeNews(res)
        })
    })
}

homeNews()

function showHomeNews(res){

    res.map((e)=>{

        let div = document.createElement('div');
        div.setAttribute('id', 'homenews')

        let title = document.createElement('h4');
        title.innerText = e.title;

        let news = document.createElement('p');
        news.innerText = e.news;

        div.append(title, news);
        document.getElementById('left_div').append(div)
    })

}

async function latestNews(){

    let res = await fetch("https://get-times-backend.herokuapp.com/getTimeStories");
    let data = await res.json()
    console.log(data)
    getLatestNews(data)
}

latestNews()

function getLatestNews(arr){

    arr.map((e)=>{

        let div = document.createElement('div');
        div.setAttribute('id', 'latestnews')

        let title = document.createElement('h4');
        title.innerText = e.title;

        let link = document.createElement('a');
        link.innerText = e.link;

        let date = document.createElement('p');
        date.innerText = e.date;

        div.append(title, link, date);
        document.getElementById('right_div').append(div)
    })
}