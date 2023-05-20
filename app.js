const arcticledesc = document.querySelector('.arcticledesc');

const arcticledescName = document.querySelector('.arcticledesc-wrapper-name_name'),
      arcticledescDesc = document.querySelector('.arcticledesc-wrapper-desc_desc');

const openArticledesc = (level, name, desc) =>{
    arcticledesc.style.display = 'flex';
    
    arcticledescName.innerHTML = `${level} ${name}`,
    arcticledescDesc.innerHTML = `${desc}`;

    document.querySelector('body').style.overflow = 'hidden'
}

const closeArticledesc = () =>{
    arcticledesc.style.display = 'none';

    arcticledescName.innerHTML = '',
    arcticledescDesc.innerHTML = '';

    document.querySelector('body').style.overflow = 'auto'
}


function pushArticle(level, name, title, desc, parent){

    const objArticle    = new Articles(level, name, title, desc, parent),
          elemArticle   = objArticle.articleElem;

    objArticle.render();

    elemArticle.addEventListener('click', () =>{

        closeArticledesc();
        openArticledesc(level, name, desc);

        arcticledesc.addEventListener('click', () =>{
            closeArticledesc()
        })
    })  
}

function pushCategorie(id, title, desc, parent){

    const objCategorie    = new Categories(id, title, desc, parent),
          elemCategorie   = objCategorie.categorieElem;

    objCategorie.render();
    
    const header = elemCategorie.querySelector('.wrappers-wrapper-header');

    header.addEventListener('click', () =>{
        if( header.id === 'close' ){
            objCategorie.open();
        }else if( header.id === 'open' ){
            objCategorie.close();
        }
    })  

}

function sendArticles(){
    articlesList.forEach(elem =>{
        const parent = document.querySelector(`#${elem.parent} .wrappers-wrapper-articles`)

        pushArticle(elem.level, elem.name, elem.title, elem.desc, parent);
    });
}   

function sendCategories(){
    categoriesList.forEach(elem =>{
        const parent = document.querySelector(`main.wrappers`);

        pushCategorie(elem.id, elem.title, elem.desc, parent);
    });

    sendArticles();
}

sendCategories();



// function scriptArticlesWrapper(){
//     const wrapperHeaders = document.querySelectorAll('.wrappers-wrapper-header');
//     wrapperHeaders.forEach((header) =>{
//         const wrapperParent = header.parentElement,
//               wrapperArticles = wrapperParent.querySelector('.wrappers-wrapper-articles');

//         const status = header.id;
//         const wrapperArticlesHeight = wrapperArticles.getBoundingClientRect().height;

//         const scriptArticles = new ArticlesScript(header, status, wrapperArticles, wrapperArticlesHeight);

//         header.addEventListener("click", () =>{
//             if( status === 'close' ){
//                 scriptArticles.open()
//             }else if( status === 'open' ){
//                 scriptArticles.close()
//             }
//         })
//     })
// }
