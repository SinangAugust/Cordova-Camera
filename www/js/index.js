    document.addEventListener('deviceready', onDeviceReady, false);
    let isDeviceReady = false;
    function btnTouchStart(btn ){
        btn.classList.add("touchStart" ); }
    function btnTouchEnd(btn ){
        btn.classList.remove("touchStart" ); }
    function onDeviceReady( ) {
        isDeviceReady = true ; }
    function exampleOneClicked(img ){   
        /* Front Camera , disable save to phone ,
            data url , quality 60 . */
        if(isDeviceReady ){
            let pictureOptions = {
                cameraDirection: Camera.Direction.FRONT,
                saveToPhotoAlbum: true,
                destinationType: Camera.DestinationType.DATA_URL,
                quality: 60 };
    function fctSuccess(image ){
                img.src = `data:image/jpeg;base64,${image }`; }
    function fctFailure(errorMsg ){
                console.log(errorMsg ); }
    navigator
                .camera
                .getPicture(fctSuccess , 
                            fctFailure , 
                            pictureOptions ); }}
    