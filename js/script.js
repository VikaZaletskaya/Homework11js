class User {
    constructor (obj) {
        this.data = obj;
    }
    edit(obj) {
        this.data = obj;
    }
    get() {
        return this.data;
    }
}
class Contacts {
    constructor() {
        this.data = [];
    }
    add(data) {
        let user = new User(data);
        this.data.push(user);

    }
    edit(id, obj) {
        let user = this.data.find(function(item) {
          return item.get().id === id
        });
        user.edit(obj);
    }
    remove(id) {
        this.data = this.data.filter(function(item) {
            return item.get().id !== id
        });
    }

}


let book = new Contacts();

book.add({
    id: 1,
    name: 'Саша'
});
book.add({
    id: 2,
    name: 'Паша'
});
book.add({
    id: 3,
    name: 'Коля'
});

book.remove(3);

book.edit(2, {
    id: 2,
    name: 'Василий'
})