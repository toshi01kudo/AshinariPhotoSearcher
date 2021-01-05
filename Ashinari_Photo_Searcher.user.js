// ==UserScript==
// @name         Ashinari Photo Searcher
// @namespace    Ashinari Photo Searcher
// @version      1.0
// @description  Create a search box to link Google search engine.
// @author       Toshihito Kudo
// @include      http://www.ashinari.com*
// @require      https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/UserScript==

(function() {
    'use strict';

    const preUrlStr = "https://www.google.com/search?q=";
    const postUrlStr = " site:ashinari.com";

    // 元々検索ボックスがあった箇所に検索ボックスを生成。
    $(".container-leftarea .area-search").append(
        `<label for="search" accesskey="4"></label>
<input id="search" placeholder="キーワードを入力" name="search" />
<input id="search-buttom" type="submit" value="検索" />`);
    // 検索ボタンをクリックされたらGoogleの検索へ移動。
    $(".container-leftarea .area-search #search-buttom").click(function(){
        const SchStr = $(".container-leftarea .area-search #search").val();
        //console.log(SchStr);
        const SchUrl = preUrlStr + SchStr + postUrlStr;
        //console.log(SchUrl);
        window.location.href = SchUrl;
    });
})();
