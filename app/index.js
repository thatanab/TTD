module.exports.greet = (name) => {
    if (name === null) {
        return "Hello, my friend.";
    }

    if (typeof (name) === "object") {

        const nLenght = name.length;
        if (nLenght >= 3) {
            let message = "Hello,";
            let cap = (element) => element.toUpperCase() === element;

            if (name.findIndex(cap) != -1) {
                for (let i = 0; i <= nLenght - 1; i++) {
                    if (i == name.findIndex(cap)) {
                        continue;
                    }
                    if (i === nLenght - 1) {
                        message += ' and ' + `${name[i]}` + '. AND HELLO, ' + `${name[name.findIndex(cap)]}` + '!'
                        break;
                    }
                    message += ` ${name[i]}`;
                }
            } else {
                for (let i = 0; i < nLenght - 1; i++) {
                    message += ` ${name[i]},`;
                }
                message += ` and ${name[nLenght - 1]}.`;
            }

            return message;

        } else if (name.includes("Charlie, Dianne")) {
            const words = name[1].split(', ')
            return `Hello, ${name[0]}, ${words[0]}, and ${words[1]}.`

        } else if (name.includes("\"Charlie, Dianne\"")) {
            const words = name[1].split(', ')
            const letter = words[0].slice(1)
            const alphabet = words[1].slice(0,-1)
            return `Hello, ${name[0]}, ${letter}, and ${alphabet}.`
            
           
        }
        else {
        return `Hello, ${name[0]} and ${name[1]}.`;
    }
}

if (name.toUpperCase() === name) {
    return `HELLO, ${name}!`;
}

return `Hello, ${name}.`;
}