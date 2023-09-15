const contents = document.querySelectorAll(".content");
const titles = document.querySelectorAll(".title");
const navs = document.querySelectorAll(".other-label");


titles.forEach(title =>{
    title.style.opacity = "0";
})


contents.forEach(content =>{
    content.firstElementChild.style.transform = "translateX(-800px)";
    content.lastElementChild.style.transform = "translateX(800px)";
    content.style.opacity = "0";
    
})


let navContent = new Map();
let navIndex = 0;
const contentObsever = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.firstElementChild.style.transform = "";
                entry.target.lastElementChild.style.transform = "";
                entry.target.style.opacity = "100";
                /*if(!navContent.has(entry)){
                    navContent.set(entry, navs[navIndex]);
                    console.log("a");
                    navIndex++;
                }
                navContent.get(entry).style.backgroundPosition = "50% 65%";
            }else if(navContent.has(entry)){
                navContent.get(entry).style.backgroundPosition = "";*/
            }
        })
    },
    {threshold: 0.5,}
)

const titleObsever = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.style.opacity = "100";
                contentObsever.unobserve(entry.target);
            }
        })
    },
    {threshold: 1,}
)

contents.forEach(content =>{
    contentObsever.observe(content)
})

titles.forEach(title =>{
    titleObsever.observe(title)
})