// ==UserScript==
// @name            Scribd: Bypasser
// @description     At one point in our student life we all need to google homework solutions, test preparation stuff and anything else related to subject. One of the search results is, usually, Scribd, where to download the file you either need to upload a bunch of documents, or get a monthly subscription. This extension allows you to bypass all that procedure on the Scribd, so you can download everything for free!
// @namespace       http://github.com/frddl/scribd-bypasser
// @version         1.0.0
// @author          Farid Mammadov
// @license         MIT
// @released        2016-12-11
// @updated         2016-12-11
// @match           *://*.scribd.com/document/*
// @match           *://www.scribd.com/document/*
// @run-at          document-end
// ==/UserScript==

window.onload = function () {
	document.getElementsByClassName('icon icon-globalnav_upload')[0].style.display = 'none';
	document.getElementsByClassName('icon_btn_text')[1].innerHTML = "Download";

	var URL = "http://d1.scribdassets.com/ScribdViewer.swf?";
	var document_id = "document_id=" + window.location.href.split('/')[4];

	var src = document.documentElement.innerHTML;
	var key = src.substring(src.search("key-"), src.search("\",\"is_searchable"));

	var access_key = "access_key=" + key;

	URL += document_id + "&" + access_key;
	document.getElementsByTagName('a')[16].setAttribute("href", URL);
}
