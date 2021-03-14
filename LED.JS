
/*

██╗░░░░░███████╗██████╗░░░░░░░░░██╗░██████╗
██║░░░░░██╔════╝██╔══██╗░░░░░░░░██║██╔════╝
██║░░░░░█████╗░░██║░░██║░░░░░░░░██║╚█████╗░
██║░░░░░██╔══╝░░██║░░██║░░░██╗░░██║░╚═══██╗
███████╗███████╗██████╔╝██╗╚█████╔╝██████╔╝
╚══════╝╚══════╝╚═════╝░╚═╝░╚════╝░╚═════╝░

Made by HxKprogram.
*/

// Pretty simple script. Needs to be normal JS

function animateBg(i) 
{
  document.body.style.backgroundColor = 'hsl(' + i + ', 255%, 40%)';
  setTimeout(function() 
  {  
    animateBg(++i)
  }, 3); // Adjust LED Color Change Speed here
}
animateBg(1); // Change Repeat speed here (same as line 19)
