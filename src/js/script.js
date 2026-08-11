async function loadData() {
    try {
        const response = await fetch('./src/js/posts.json');
        const data = await response.json();
        return data;       
    }
    catch(err) {
        console.log(err)
    }
}

async function doLastNewsElemention() {
    const dataJson = await loadData();
    const lastnews_parent =document.querySelector(".news-list")

    dataJson.forEach((item, index) => {
        if(index < (dataJson.length-3)) return;
        lastnews_parent.innerHTML+= `
        <li>
            <a href="./post.html?id=${item.id}">
                <h3>
                    ${item.title_short}
                </h3>
                <p>
                    ${item.short_desc}
                </p>
            </a>
        </li>
        `
    })
}

async function doBlogPostList() {
    const dataJson = await loadData()
    const post_parent = document.querySelector(".posts-list")
    
    dataJson.forEach((item) => {
        post_parent.innerHTML+= `
        <li>
            <a href="./post.html?id=${item.id}">
                <img src="${item.image_short}" alt="">
                <h2 class="section-title">
                    ${item.title_short}
                </h2>
                <p>
                    ${item.short_desc}
                </p>
            </a>
        </li>
        `
    })
}

async function  doBlogPost() {
    const dataJson = await loadData();
    const idPost = new URLSearchParams(document.location.search).get("id")
    const post = document.querySelector(".post-content")
    const post_title = document.querySelector("#home h1 p")
 
    dataJson.forEach((item) => {
        if(item.id != idPost) return;
        post_title.innerHTML = item.title
        post.innerHTML+= `
            <div class="post-image">
                <img src="${item.image_big}" alt="">
                <span>post por ${item.author}</span>
            </div>
            <p>
                ${item.description}
            </p>
        `
    })
}