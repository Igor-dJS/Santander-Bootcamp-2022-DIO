function getAdmins(map){
    const lista = []

    for([key, value] of map){
        if(value === 'Admin'){
            lista.push(key);
        }
    }

    return lista;
}

const users = new Map();

users.set('Luiz', 'Admin');
users.set('Stephany', 'Admin');
users.set('Jorge', 'User');
users.set('Natália', 'Admin');

console.log(getAdmins(users));