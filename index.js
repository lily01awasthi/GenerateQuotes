const quotes=[
    {
       "author":"Napoleon Hill",
      "quote": "if u can't do great things ,do small things in great way" 
    },
    {
      "author":"Jack Canfield",
      "quote":"Don't worry Don’t worry about failures, worry about the chances you miss when you don’t even try"
    },
    {
     "author":"Mario Andretti",
      "quote": "If things seem under control, you are just not going fast enough"
    },
   
    {
    
      "author":"Albert Einstein",
      "quote": "You can’t blame gravity for falling in love."
    },
    {
      "auathor":"John A. Shedd",
      "quote":"A ship in harbor is safe, but that is not what ships are built for"
   
    },
    {
     "author":"J.K.Rowling",
      "quote": "It is our choices that show what we truly are, far more than our abilities."
    },
    {
     "author":"Mother Teresa",
      "quote": "One of the greatest diseases is to be nobody to anybody"
    },
    {
     "author":"Abraham Lincoln",
      "quote":"Nearly all men can stand adversity, but if you want to test a man’s character, give him power"
    },
    {
      "author":"Walt Disney",
      "quote":"The Way Get Started Is To Quit Talking And Begin Doing."
    },
    {
     "author":"Stephen King",
     "quote":"Get busy living or get busy dying"
      
    },
    {
    "author":"Albert Einstein",
      "quote":"I am thankful for all of those who said NO to me. It’s because of them I’m doing it myself"
   
    },
    {
      
      "author":"Mark Caine",
      "quote":"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself"
    },
    {
      "author":"Winston Churchill",
      "quote":"We make a living by what we get, but we make a life by what we give"
    },
   
   
    {
      "author":"Billy Wilder",
      "quote":"Trust your own instinct. Your mistakes might as well be your own, instead of someone else’s."
    },
    {
      "author":"Chinese Proverb",
      "quote": "The best time to plant a tree was 20 years ago. The second best time is now."
    },
    {
     "author":"Abraham Lincoln",
      "quote": "I’m a success today because I had a friend who believed in me and I didn’t have the heart to let him down"
    },{
        "author":"Winston Churchill",
        "quote":"Success is not final, failure is not fatal: it is the courage to continue that counts."
    },
    {
        "author":"Desmond Tutu",
        "quote":"You don’t choose your family. They are God’s gift to you, as you are to them."
    }
    ,{
        "author":"Jim Morrison",
        "quote":"A friend is someone who gives you total freedom to be yourself."
    }
    ,{
        "author":"Golda Meir",
        "quote":"Don’t be so humble – you are not that great."
    }
    ,{
        "author":"steve jobs",
        "quote":"Your time is limited, so don’t waste it living someone else’s life."
    }
   ];


const quotebtn= document.getElementById('quotebtn');
const author= document.getElementById('author');
const quote= document.getElementById('quote');


quotebtn.addEventListener('click',displayquote);

function displayquote(){
    let result=Math.floor(Math.random()*quotes.length);
    console.log(result);
    author.innerHTML=quotes[result].author;
    quote.innerHTML=quotes[result].quote;
    
}






 