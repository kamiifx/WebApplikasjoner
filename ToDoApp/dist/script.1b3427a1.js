parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"mpVp":[function(require,module,exports) {
var e=document.querySelector(".todoButton"),t=document.querySelector(".closBtn"),n=document.querySelector(".mainModal"),o=document.querySelector(".create"),l=3;e.onclick=function(){n.style.display="block",console.log(n.style.display)},t.onclick=function(){n.style.display="none"},o.onclick=function(){l>0?(r(),n.style.display="none",l--):alert("Only 3 ToDos allowed")};var c=document.querySelector("#descModal");function r(){var e=document.getElementById("titleModal").value,t=document.getElementById("descModal").value,o=document.getElementById("authModal").value,l=document.createElement("div");l.className="card",l.innerHTML="<h3>"+e.charAt(0).toUpperCase()+e.slice(1)+"</h3><p>"+t.charAt(0).toUpperCase()+t.slice(1)+"</p><p>"+o.charAt(0).toUpperCase()+o.slice(1)+"</p><input type=\"button\" class=\"removeC\" onclick=\"removeCard(this)\" value=\"Remove\"><input type='button' class='completeC' onclick='completeCard(this)' value='Complete'>",document.querySelector(".cards").appendChild(l),n.style.display="none"}function i(e){document.querySelector(".cards").removeChild(e.parentNode),l++}function a(e){var t=e.parentNode.firstChild.textContent,n=e.parentNode.firstChild.nextSibling.textContent,o=e.parentNode.firstChild.nextSibling.nextSibling.textContent,c=(new Date).toLocaleDateString(),r=document.createElement("div");r.className="completedInfo",r.innerHTML="<ul><li><p>"+t+"</p></li><li><p>"+n+"</p></li><li><p>"+o+"</p></li><li><p>"+c+"</p></li></ul>",document.querySelector(".TodosInfo").appendChild(r),document.querySelector(".cards").removeChild(e.parentNode),l++}function d(){document.getElementById("checkDate")}c.addEventListener("input",function(e){var t=e.currentTarget,n=t.getAttribute("maxlength"),o=t.value.length;document.querySelector("#charsLeft").innerHTML="(".concat(n-o,")")}),window.complete=a(input),window.remove=i();
},{}]},{},["mpVp"], null)
//# sourceMappingURL=/script.1b3427a1.js.map