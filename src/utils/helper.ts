import swal from 'sweetalert';


const showAlert = (title:string , icon:string , buttons?:string[]) => {
    return swal({
        title:title,
        icon:icon,
        buttons:buttons
    });
}

export { showAlert };