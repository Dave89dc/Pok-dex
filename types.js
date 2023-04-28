const urlSearchParams = new URLSearchParams(window.location.search);

const typesUrl = urlSearchParams.get('typeUrl');

PokéService.getTypes(typesUrl).then(typeObj => {
    console.log(typeObj);
});