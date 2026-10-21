const users = [
    { prenom: 'Fallou', nom: 'Cisse', statut: 0, age: 10, role: 'admin' },
    { prenom: 'Samba', nom: 'Diagana', statut: 0, age: 25, role: 'admin' },
    { prenom: 'Soukeyna', nom: 'Diallo', statut: 0, age: 40, role: 'user' },
    { prenom: 'Adama', nom: 'Faye', statut: 0, age: 70, role: 'user' },
    { prenom: 'Jonh', nom: 'Lakh', statut: 0, age: 28, role: 'user' },
];
//Creer une fonction flechée nommée getadmins qui prend en parametre le tableau et retourne un tableau contenant tous les utilisateurs ayant le role admin.
//Faites l'appel de la fonction pour afficher le resultat.
const getadmins = (users) => {
    return users.filter(user => user.role === 'admin');
};
console.log(getadmins(users));

let user = { prenom: 'Fallou', nom: 'Cisse', statut: 0, age: 10, role: 'admin'};
//Recuperer le prenom, le nom et le role de l'utilisateur et l'afficher
let pnom = user.prenom;
let nom1 = user.nom;
let role1 = user.role;
console.log(pnom,nom1,role1);
//Destructuration 
const {prenom,nom,role} = user;
console.log(prenom,nom,role);
//Utilisation de map 
let usermap = users.map(({prenom,role})=>{
    return {
        p:prenom,
        r:role
    }
});
console.log(usermap);
/*
                TP A FAIRE ET A RENDRE DANS 2 JOURS
-DESTRUCTURATION                
Recuperer le premier utilisateur et le mettre dans une variable appelée user1, le 3e utilisateur dans user3 et on ignore le 2e
-SPREAD OPERATOR
Creer un autre tableau appelé equipe contenant toutes les données du premier tableau plus un nouvel utilisateur a la fin sans utiliser push
Modifiez le statut du 2e utilisateur du tableau users
*/
const [user1, , user3] = users;
console.log(user1); 
console.log(user3);

const newuser = { prenom: 'Awa', nom: 'Diop', statut: 0, age: 22, role: 'user' };
const equipe = [...users, newuser];
console.log(equipe);

const usersmodifies = users.map((user,index) =>{
    if(index === 1){
        return {...user,statut:1};
    }
    return user;
});
console.log(usersmodifies);