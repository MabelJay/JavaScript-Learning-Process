# JavaScript-Learning-Process
9/10 homework:
  1. String.prototype.substr, String.prototype.substring and String.prototype.slice
     Please take a look at these 3 string function and try to find difference among them.
  ans:
      String.slice( begin [, end ] )
      String.substring( from [, to ] )
      String.substr( start [, length ] )
  eg:
     alert("abc".substr(1,2)); // returns "bc"
     alert("abc".substring(1,2)); // returns "b", the second parameter is the index to stop at,but not include.
  Differences:
  As you can see, the slice() and substring() methods are roughly the same; the only difference is that the slice() method can accept a negative index, relative to the end of the string. Should you try to use a negative index in substring(), it seems to be relative the beginning of the string (and therefore is out-of-bounds).
  The substr() method can use a negative index; but, rather than using a to-argument, it uses a length-argument. This can be especially useful if you know the length of the substring ahead of time and don't want to perform any superflous math to calculate the necessary indices.
     
  2. try to understand prototype at same time if possible
  
  3. amcwebportal/webcontent/scripts/ajax.js, there you could find one simple example we are using for prototype
     AjaxCritiera 
     
Helpful tools:
  codepen (https://codepen.io/)
  Netlify (https://www.netlify.com/)
  modao   (https://modao.cc/)
  brackets.io (http://brackets.io/)
  iconfinder  (https://www.iconfinder.com/)
  Flaticon    (https://www.flaticon.com/)
  htmlcolorcodes  (https://htmlcolorcodes.com/)
  Emmet     (https://emmet.io/)
  HTML5 Boilerplate (https://html5boilerplate.com/)
  gulpjs (https://gulpjs.com/docs/en/getting-started/quick-start)
