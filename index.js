const input = document.querySelector( "#message_input" );
// decode the string 
const { hash } = window.location;
if ( hash ) {
    const message = atob( hash.replace( "#", "" ) );
    document.querySelector( "#message_form" ).classList.add( "hide" );
    document.querySelector( "#message_show" ).classList.remove( "hide" );
    document.querySelector( "h2" ).innerHTML = message

}

document.querySelector( "form" ).addEventListener( "submit", ( e ) => {
    e.preventDefault();
    document.querySelector( "#message_form" ).classList.add( "hide" );
    document.querySelector( "#link_form" ).classList.remove( "hide" );
    const encryptedString = btoa( input.value );
    let url = `${window.location}#${encryptedString}`;
    const linkInput = document.querySelector( "#link_input" );
    linkInput.value = url;
    linkInput.select()





} )