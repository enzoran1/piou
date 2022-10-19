const piou = {
    add : function addTwoNums( num1, num2 ) {
      return (num1 + num2) ;
    }

    , sub : function subTwoNums( num1, num2 ) {
        return (num1 - num2) ;
        }
     
    , mul : function mulTwoNums( num1, num2 ) {
        return (num1 * num2) ;
        }

    , div : function divTwoNums( num1, num2 ) {
        return (num1 / num2) ;
        }

    , mod : function modTwoNums( num1, num2 ) {
        return (num1 % num2) ;
        }

    , pow : function powTwoNums( num1, num2 ) {
        return (num1 ** num2) ;
        }

    , sqrt : function sqrtNum( num ) {
        return (Math.sqrt(num)) ;
        }

    , cbrt : function cbrtNum( num ) {
        return (Math.cbrt(num)) ;
        }

    , abs : function absNum( num ) {
        return (Math.abs(num)) ;
        }

    , ceil : function ceilNum( num ) {
        return (Math.ceil(num)) ;
        }

    , floor : function floorNum( num ) {
        return (Math.floor(num)) ;
        }

    , round : function roundNum( num ) {
        return (Math.round(num)) ;
        }

    , trunc : function truncNum( num ) {
        return (Math.trunc(num)) ;
        }

    , max : function maxNum( num1, num2 ) {
        return (Math.max(num1, num2)) ;
        }

    , min : function minNum( num1, num2 ) {
        return (Math.min(num1, num2)) ;
        }

        // fonction trie tableau
    , sort : function sortArray( array ) {
        return (array.sort()) ;
        }

        // fonction trie tableau inversé
    , sortReverse : function sortReverseArray( array ) {
        return (array.sort().reverse()) ;
        }

    // fonction retrouve la position d'un élément dans un tableau
    , find : function findElement( array, element ) {
        return (array.indexOf(element)) ;
        }

    // fonction retourne la longueur d'un tableau
    , length : function lengthArray( array ) {
        return (array.length) ;
        }

    // fonction retourne la longueur d'une chaine de caractères
    , lengthString : function lengthString( string ) {
        return (string.length) ;
        }

    // fonction retourne la longueur d'un objet
    , lengthObject : function lengthObject( object ) {
        return (Object.keys(object).length) ;
        }

    // fonction recherche un élément dans un tableau
    , search : function searchElement( array, element ) {
        return (array.includes(element)) ;
        }

    // fonction 

   

    // function factorial

    , factorial : function factorialNum( num ) {
        let i = 1 ;
        let factorial = 1 ;
        while ( i <= num ) {
            factorial *= i ;
            i++ ;
        }
        return factorial ;
        }

    // function fibonacci

    , fibonacci : function fibonacciNum( num ) {
        let i = 1 ;
        let fibonacci = 1 ;
        let fibonacci2 = 1 ;
        let fibonacci3 = 1 ;
        while ( i <= num ) {
            fibonacci3 = fibonacci + fibonacci2 ;
            fibonacci = fibonacci2 ;
            fibonacci2 = fibonacci3 ;
            i++ ;
        }
        return fibonacci3 ;
        }

    // function prime

    , prime : function primeNum( num ) {
        let i = 2 ;
        let prime = true ;
        while ( i < num ) {
            if ( num % i === 0 ) {
                prime = false ;
                break ;
            }
            i++ ;
        }
        return prime ;
        }



    



    , random : function randomNum( num1, num2 ) {
        return (Math.random(num1, num2)) ;
        }

    , randomInt : function randomIntNum( num1, num2 ) {
        return (Math.floor(Math.random() * (num2 - num1 + 1)) + num1) ;
        }

    , randomFloat : function randomFloatNum( num1, num2 ) {
        return (Math.random() * (num2 - num1) + num1) ;
        }

    , randomColor : function randomColor() {
        return ('#' + Math.floor(Math.random()*16777215).toString(16)) ;
        }

    , randomHex : function randomHex() {
        return (Math.floor(Math.random()*16777215).toString(16)) ;
        }

    , randomRGB : function randomRGB() {
        return ('rgb(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ')') ;
        }

    , randomRGBA : function randomRGBA() {
        return ('rgba(' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.floor(Math.random()*255) + ',' + Math.random() + ')') ;
        }

    , randomHSL : function randomHSL() {
        return ('hsl(' + Math.floor(Math.random()*360) + ',' + Math.floor(Math.random()*100) + '%,' + Math.floor(Math.random()*100) + '%)') ;
        }

       
    

    } ;

  
    
  module.exports = piou ;