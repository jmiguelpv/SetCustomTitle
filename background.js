console.log("firastr");
var title = "";
var setOfTitles = {
    "Design Element for UCSF-5134 Batch Stream LOS - Job Ran Too Long (Relative Run) - EnergyWater Product Development - ALM Confluence": "TJ RTL Design Page",
    "Getting started - Chrome Developers": "it worked",
    "Design Element for UCSF-14399 Scheduler Batch Stream Level Of Service - Stream Ran Too Long (Relative Run) - EnergyWater Product Development - ALM Confluence":"Design RTL Miguel",
    "UCSF-14619 Get Scheduler Batch Stream Runs Business Service - EnergyWater Product Development - ALM Confluence":"Joys BS",
    "[UCSF-14399] Scheduler Batch Stream Level Of Service - Stream Ran Too Long (Relative Run) - Central JIRA":"RTL mio",
    "[UCSF-5134] Batch Stream Level Of Service - Job Stream Ran Too Long (Relative Run) - Central JIRA":"RTL TJ",
    "[UCSF-14619] Get Scheduler Batch Stream Runs Business Service - Central JIRA":"BS JOY"
};



chrome.tabs.onUpdated.addListener((tabId,changeInfo,tab) => {
    if(setOfTitles.hasOwnProperty(tab.title)){
        var newTitle = setOfTitles[tab.title];
        chrome.scripting.executeScript({
            args: [newTitle],
            target:{tabId: tabId},
            func: (changeTitle) => {
                document.title = changeTitle;
            }
        });
    }
});
