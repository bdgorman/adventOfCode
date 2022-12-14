//save

class Directory {
    constructor(name) {
        this.name = name;
        this.descendants = [];
    }
}

class File {
    constructor(name){
        this.name = name;
        this.parent = '';
    }
}