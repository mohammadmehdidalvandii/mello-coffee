import swal from 'sweetalert';


const showAlert = (title:string , icon:string , buttons:string[]|string|boolean) => {
    return swal({
        title:title,
        icon:icon,
        buttons:buttons
    });
}

export { showAlert };