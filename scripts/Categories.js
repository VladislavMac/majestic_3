class Categories{
    constructor(id, title, desc, parent){
        this.id     = id;
        this.title  = title;
        this.desc   = desc;
        this.parent = parent;
        this.height;
        this.articles;
        this.header;
    }

    get categorieElem(){
        this.categorie             = document.createElement('div');
        this.categorie.id          = this.id
        this.categorie.className   = 'wrappers-wrapper';
        this.categorie.innerHTML   = `

            <header id="open" class="wrappers-wrapper-header">
                <div class="wrappers-wrapper-header-title">
                    <h1 class="wrappers-wrapper-header-title_title">
                        ${this.title}
                    </h1>
                </div>
            </header>



            <div class="wrappers-wrapper-articles">
            </div>
        `
        // <div class="wrappers-wrapper-desc">
        //     <div class="wrappers-wrapper-desc-desc">
        //         <p class="wrappers-wrapper-desc-desc_desc">
        //             ${this.desc}
        //         </p>
        //     </div>
        // </div>
        
        this.articles = this.categorie.querySelector('.wrappers-wrapper-articles');
        this.header   = this.categorie.querySelector('.wrappers-wrapper-header');

        this.articles.style.transition = '300ms';

        return this.categorie
    }

    open(){
        this.articles.style.height = `${this.height}px`
        
        this.header.id = 'open'
    }

    close(){
        this.height   = this.articles.getBoundingClientRect().height;
        this.articles.style.height = '0px';

        this.header.id = 'close';
    }

    render(){
        this.parent.appendChild(this.categorie); 
    }
}