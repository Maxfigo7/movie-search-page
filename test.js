async function fetch_movies (search_term) {
    const response = await fetch(`http://www.omdbapi.com/?s=${search_term}&apikey=79e520a4`) 
    const movies = await response.json()
    console.log(movies.Search );
    return movies.Search
} 

 
const input = document.getElementById("input");
const btn = document.getElementById("btn");
const body = document.querySelector('body')
const section = document.querySelector('section')



const title = document.createElement('h4')
title.classList.add('title')
const details = document.createElement('p')
details.classList.add('details')



title.innerText = 'batman'
details.innerText = ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo cum sunt quidem possimus rerum excepturi nulla sed dicta sit! Eius a libero nemo nostrum. Recusandae voluptates corrupti exercitationem consectetur dignissimos'



btn.addEventListener("click",()=>{
    let search = input.value;

    async function fetch_plot (search_term) {
        const response = await fetch(`http://www.omdbapi.com/?t=${search_term}&apikey=79e520a4`) 
        const movie = await response.json()
        return movie.Plot
    } 

    
    // const [ movies.plot ,movies.Genre] = fetch_plot(search).then
    // console.log( typeof plot);


    
    console.log(search);
    try{
        const div = document.querySelectorAll('div');
        for (const item of div) {
            item.remove();
        }
    }catch(err) {
        console.log(err);
      };



    fetch_movies(search).then(movies=>{ 
        let cl= 0
        movies.forEach(element => {



            if (body.getElementsByClassName(cl).length == 0){

               




                
                const mystyle = document.createElement('div')
                mystyle.classList.add('.mystyle')
                const info = document.createElement('div')
                info.classList.add('info')
                const title = document.createElement('h4')
                title.classList.add('title')
                const details = document.createElement('p')
                details.classList.add('details')

                mystyle.appendChild(info)
                section.appendChild(mystyle)
                info.appendChild(title)
                info.appendChild(details)


                fetch_plot(element.Title).then(plot=>{
                    details.innerText = plot

               })
                mystyle.style.backgroundImage = `url(${element.Poster})`
                mystyle.className = cl
                cl++
                title.innerText = element.Title

                
                search = ''
                mystyle.classList.add("mystyle");

                console.log(element);
                console.log(search);
            }
        
            
    });})
})
