const isvalid = false;
let message;

const createPromise = new Promise((resolve, reject) => {
    console.log(`Is valid? ${isvalid}`);

    if(isvalid) {
        // TODO: Write Logic below for resolved state promise and sending dummy message as a resppnse
        message = 'value is true and promise is resolved';

    } else {
        // TODO: Write Logic below for rejected promisd and sending dummy message as a resppnse
        message = 'value is false and promise is rejected';

    }
});

// TODO: Write your logic below to consume the created promise and display the response sent from resolved/rejected state

