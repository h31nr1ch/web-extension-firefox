function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    //set the header of the panel
    var curentTabUrl = document.getElementById('header-title');
    var cookieList = document.getElementById('main_i-list');

    var text1 = document.createTextNode("Information: ");
    curentTabUrl.appendChild(text1);

    var cookk = document.createElement("Sec");
    var text2 = document.createTextNode("Cookies count:" + cookies.length);
    cookk.appendChild(text2);
    cookieList.appendChild(cookk);

  });
}

//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showCookiesForTab);
