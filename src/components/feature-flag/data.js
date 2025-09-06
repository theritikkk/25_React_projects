const dummyAPIResponse = {
    showLightAndDarkMode: true,
    showRandomColorGenerator: true,
    showAccordian: true,
    showTreeView: true,
    showTabs: true
};

function featureFlagsDataServiceCall() {
    return new Promise((resolve, reject) => {
        if (dummyAPIResponse) {
            // Correctly wrap resolve in a function for setTimeout
            setTimeout(() => resolve(dummyAPIResponse), 500);
        } else {
            reject('Some error occurred! Please try again.');
        }
    });
}

export default featureFlagsDataServiceCall;
