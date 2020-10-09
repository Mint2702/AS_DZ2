let content = document.getElementById("myHeader");

let button_show_All = document.getElementById("showAll") 
button_show_All.addEventListener('click', showAll) 

let button_show_One = document.getElementById("showOne") 
button_show_One.addEventListener('click', showOne) 

let flag = false;
let count = 0
let len=articles.length

function showOne(){
    if(count<len){
        let a=count
            if (count==len-1){
                a=0
            } 
            else{
                a=count+1;
            } 
            let inserted_data = `
                <div id=${articles[count].part}>
                    <div class="${articles[count].textId}">
                        See another city: <a href="#${articles[a].part}">${articles[a].city}</a>
                        <div class=${articles[count].logo}>
                            ${articles[count].city}
                        </div>
                        <div class=${articles[count].main}>
                            ${articles[count].text}
                        </div>
                        <div class="image">
                            <div class="ImagesColumn">
                                <img src=${articles[count].imagesC[0]} style="width:${articles[count].width}%;height:45%;" >
                                <img src=${articles[count].imagesC[1]} style="width:${articles[count].width}%;height:45%;">
                            </div>
                            <div class="ImagesSpace">
                                <img src=${articles[count].imagesS[0]} style="width:60%;height:30%;">
                                <img src=${articles[count].imagesS[1]} style="width:60%;height:30%;">
                                <img src=${articles[count].imagesS[2]} style="width:60%;height:30%;">
                            </div>
                        </div>
                    </div>
                </div>
            `
        content.insertAdjacentHTML('beforebegin', inserted_data);
        count++
    }
    else alert("All articles are shown already")
    
}

function showAll(){
    if (flag == false){
        flag = true;
        for (let i=count;i<len;i++){
            let a=i
            if (i==len-1){
                a=0
            } 
            else{
                a=i+1;
            } 
            let inserted_data = `
            <div id=${articles[i].part}>
                <div class="${articles[i].textId}">
                    See another city: <a href="#${articles[a].part}">${articles[a].city}</a>
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
        content.insertAdjacentHTML('beforebegin', inserted_data);
        count=i+1
        }
    } 
    else alert("All articles are shown already")
}