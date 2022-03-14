
const fullName1 = "Buldog";

const getInitials = (name) => {
    let initials = name.split(' ');

    // console.log(initials);
    // return;

    if (initials.length > 1) {
        //initials = initials.shift().charAt(0) + '.' + initials.pop().charAt(0) + '.';
        initials = initials[0].charAt(0) + '.' + initials[1].charAt(0) + '.';
    } else {
        initials = name.substring(0, 1) + '.';
    }

    return initials.toUpperCase();
}

console.log(getInitials(fullName1))
