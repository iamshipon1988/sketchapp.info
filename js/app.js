(function() {

    var BrowserDetect = {
        init: function() {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function(data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1) return data[i].identity;
                } else if (dataProp) return data[i].identity;
            }
        },
        searchVersion: function(dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1) return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, { // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, { // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]

    };

    BrowserDetect.init();

    window.$.client = {
        os: BrowserDetect.OS,
        browser: BrowserDetect.browser
    };

})();

$(document).ready(function(){
  $('body').addClass($.client.os);
  $('body').addClass($.client.browser);
  $('#browserName').text($.client.browser);
  $('#osName').text($.client.os);
});


/* @license minigrid v1.6.0 - minimal cascading grid layout http://alves.im/minigrid */
!function(t){"use strict";function e(t,e,n,o,r){var i=Array.prototype.forEach,f=t instanceof Node?t:document.querySelector(t);if(!f)return!1;var s=f.querySelectorAll(e);if(0===s.length)return!1;n="number"==typeof n&&isFinite(n)&&Math.floor(n)===n?n:6,f.style.width="";var u=f.getBoundingClientRect().width,l=s[0].getBoundingClientRect().width+n,a=Math.max(Math.floor((u-n)/l),1),c=0;u=l*a+n+"px",f.style.width=u,f.style.position="relative";for(var d=[],p=[],h=0;a>h;h++)p.push(h*l+n),d.push(n);i.call(s,function(t){var e=d.slice(0).sort(function(t,e){return t-e}).shift();e=d.indexOf(e);var r=p[e],f=d[e],s=["webkitTransform","MozTransform","msTransform","OTransform","transform"];return t.style.position="absolute",o||i.call(s,function(e){t.style[e]="translate("+r+"px,"+f+"px)"}),d[e]+=t.getBoundingClientRect().height+n,c+=1,o?o(t,r,f,c):void 0});var m=d.slice(0).sort(function(t,e){return t-e}).pop();f.style.height=m+"px","function"==typeof r&&r(s)}"function"==typeof define&&define.amd?define(function(){return e}):"undefined"!=typeof module&&module.exports?module.exports=e:t.minigrid=e}(this);

(function(){
        minigrid('.row', '.col');

        window.addEventListener('resize', function(){
          minigrid('.col', '.col');
        });
      })();
