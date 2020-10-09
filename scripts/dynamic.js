let content = document.getElementById("myHeader");

let button_show_All = document.getElementById("showAll") 
button_show_All.addEventListener('click', showAll) 

let flag = false;

function showAll(){
    let len=articles.length
    if (flag == false){
        flag = true;
        for (let i=len-1;i>=0;i--){
            let a=i
            if (i==0){
                a=len-1
            } 
            else{
                a=i-1;
            } 
            let inserted_data = `
            <div id=${articles[i].part}>
                <div class="${articles[i].textId}">
                    See next city: <a href="#${articles[a].part}">${articles[a].city}</a>
                    <div class=${articles[i].logo}>
                        ${articles[i].city}
                    </div>
                    <div class=${articles[i].main}>
                        ${articles[i].text}
                    </div>
                    <div class="image">
                        <div class="ImagesColumn">
                            <img src=${articles[i].imagesC[0]} style="width:${articles[i].width}%;height:45%;" >
                            <img src=${articles[i].imagesC[1]} style="width:${articles[i].width}%;height:45%;">
                        </div>
                        <div class="ImagesSpace">
                            <img src=${articles[i].imagesS[0]} style="width:60%;height:30%;">
                            <img src=${articles[i].imagesS[1]} style="width:60%;height:30%;">
                            <img src=${articles[i].imagesS[2]} style="width:60%;height:30%;">
                        </div>
                    </div>
                </div>
            </div>
        `
        content.insertAdjacentHTML('afterend', inserted_data);
        }
    } 
    else alert("All articles are shown already")
}