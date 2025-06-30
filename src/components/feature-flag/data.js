
const dummyAPIResponse = {
    showLightAndDarkMode : true,
    showRandomColorGenerator : true,
    showAccordian : true,
    showTreeView : true,
    showTabs : true
    
}

function featureFlagsDataServiceCall() {

    return new Promise((resolve, reject) => {
        if(dummyAPIResponse) setTimeout(resolve(dummyAPIResponse), 500);
        else reject(' Some error occured ! Please try again. ')
    })
}

export default featureFlagsDataServiceCall;

