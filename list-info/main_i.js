
function showCookiesForTab(tabs) {
  //get the first tab object in the array
  let tab = tabs.pop();

  //get all cookies in the domain
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    //set the header of the panel
    var curentTabUrl = document.getElementById('header-title');
    var cookieList = document.getElementById('main_i-list');

    var text1 = document.createTextNode("Beta H3O");
    curentTabUrl.appendChild(text1);

    var cookk = document.createElement("Sec");
    var text2 = document.createTextNode("Cookies count: " + cookies.length + "\n");
    cookk.appendChild(text2);
    cookieList.appendChild(cookk);

    function resolved(record) {
      console.log(record.addresses);
    }
    let resolving = browser.dns.resolve("http://www.google.com");

    var dns_d = document.getElementById('main_i-dns');
    //we will use this to extract Information
    var dns = document.createElement("thr");
    var text3 = document.createTextNode("\nDNS resolved name: " + resolving.addresses + " in "+ resolving.then(resolved)[0] + "\n");
    dns.appendChild(text3);
    dns_d.appendChild(dns);

    //proxy
    //var proxyy = document.createElement("four");
    //var text4 = document.createTextNode("Proxy" + );
    //proxyy.appendChild(text4);
    //cookieList.appendChild(proxyy);

    //new windows background
    //browser.windows.create({url:"www.google.com"});

  });
}


//get active tab to run an callback function.
//it sends to our callback an array of tab objects
function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showCookiesForTab);
