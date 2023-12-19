class Articles{
    constructor(level, name, title, desc, parent){
        this.level = level;
        this.name = name;
        this.title = title;
        this.desc = desc;
        this.parent = parent;
    }  

    get articleElem(){
        this.article             = document.createElement('div');
        this.article.className   = 'wrappers-wrapper-articles-arcticle';
        if( this.level === '****' ){
            this.level = `<b style='background: yellow;'>${this.level}</b>`
        }else{
            this.level = `<b style='background: white;'>${this.level}</b>`
        }
        this.article.innerHTML   = `
        <div class="wrappers-wrapper-articles-arcticle-name">
            <div class="wrappers-wrapper-articles-arcticle-name_level">${this.level}</div>
            <div class="wrappers-wrapper-articles-arcticle-name_name">${this.name}</div>
        </div>
        <div class="wrappers-wrapper-articles-arcticle-title">
            <div class="wrappers-wrapper-articles-arcticle-title_title">${this.title}</div>
        </div>
        <div class="wrappers-wrapper-articles-arcticle-desc">
            <p class="wrappers-wrapper-articles-arcticle-desc_desc">${this.desc}</p>
        </div>
        `

        return this.article;
    }

    render(){
        this.parent.appendChild(this.article); 
    }
}