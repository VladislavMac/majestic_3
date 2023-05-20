class ArticlesScript{
    constructor(header, status, elem, elemHeight){
        this.header     = header;
        this.status     = status;
        this.elem       = elem;
        this.height     = elemHeight;
    }
    open(){
        this.elem.style.height = `${this.height}px`;
        this.header.id = 'open';
    }
    close(){
        this.elem.style.height = '0px';
        this.header.id = 'close';
    }
}