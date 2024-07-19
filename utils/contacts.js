
const fs = require('fs');


const dirPath = './data';
const dataPath = './data/contacts.json';

if(!fs.existsSync(dirPath)){

    fs.mkdirSync(dirPath)
}


if(!fs.existsSync(dataPath)){

    fs.writeFileSync(dataPath , JSON.stringify([]) , 'utf-8');
}



const loadContact = () => {  

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer);  

    return contacts;

}

const findContact = (nama) =>{   

    const fileBuffer = fs.readFileSync('data/contacts.json', 'utf-8');

    const contacts = JSON.parse(fileBuffer); 

    // console.log(contacts);


    const cn = contacts.find((contact) => {

        // console.log(contact.nama);

        return contact.nama === nama;

    });

    return cn;

}



module.exports = {   
    loadContact , findContact
}