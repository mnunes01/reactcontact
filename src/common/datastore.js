import ContactsStore from "../stores/contacts";

export default class dealWithData{           
    constructor(val){
        this.itemName = val;
        this.collection = undefined;
       
        this.getContactcs = this.getContactcs.bind(this);
        ContactsStore.on("change", this.getContactcs);
        
        this.getData();
    }
    getContactcs() {        
        this.collection = ContactsStore.getAll();
        this.setData(this.collection);
        //console.log(ContactsStore.getAll());        
    }        
    getData(){
        this.collection = JSON.parse(localStorage.getItem(this.itemName));
        console.log(this.collection);
    }
    setData(val){        
        localStorage.setItem(this.itemName, JSON.stringify(val) );
    }
    removeData(){
        localStorage.removeItem(this.itemName);
    }    
}