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



    // Array functions
    // Array.prototype.push()
    ,push : function pushArray( arr, ...items ) {
        return (arr.push(...items)) ;
        }

    // Array.prototype.pop()
    , pop : function popArray( arr ) {
        return (arr.pop()) ;
        }

    // Array.prototype.shift()
    , shift : function shiftArray( arr ) {
        return (arr.shift()) ;
        }

    // Array.prototype.unshift()
    , unshift : function unshiftArray( arr, ...items ) {
        return (arr.unshift(...items)) ;
        }

    // Array.prototype.concat()
    , concat : function concatArray( arr, ...items ) {
        return (arr.concat(...items)) ;
        }

    // Array.prototype.slice()
    , slice : function sliceArray( arr, begin, end ) {
        return (arr.slice(begin, end)) ;
        }

    // Array.prototype.splice()
    , splice : function spliceArray( arr, start, deleteCount, ...items ) {
        return (arr.splice(start, deleteCount, ...items)) ;
        }

    // Array.prototype.reverse()
    , reverse : function reverseArray( arr ) {
        return (arr.reverse()) ;
        }

    // Array.prototype.sort()
    , sort : function sortArray( arr, compareFunction ) {
        return (arr.sort(compareFunction)) ;
        }

    // Array.prototype.fill()
    , fill : function fillArray( arr, value, start, end ) {
        return (arr.fill(value, start, end)) ;
        }

    // Array.prototype.copyWithin()
    , copyWithin : function copyWithinArray( arr, target, start, end ) {
        return (arr.copyWithin(target, start, end)) ;
        }

    // Array.prototype.includes()
    , includes : function includesArray( arr, searchElement, fromIndex ) {
        return (arr.includes(searchElement, fromIndex)) ;
        }

    // Array.prototype.indexOf()
    , indexOf : function indexOfArray( arr, searchElement, fromIndex ) {
        return (arr.indexOf(searchElement, fromIndex)) ;
        }

    // Array.prototype.lastIndexOf()
    , lastIndexOf : function lastIndexOfArray( arr, searchElement, fromIndex ) {
        return (arr.lastIndexOf(searchElement, fromIndex)) ;
        }

    // Array.prototype.join()
    , join : function joinArray( arr, separator ) {
        return (arr.join(separator)) ;
        }

    // Array.prototype.toString()
    , toString : function toStringArray( arr ) {
        return (arr.toString()) ;
        }

    // Array.prototype.toLocaleString()
    , toLocaleString : function toLocaleStringArray( arr, locales, options ) {
        return (arr.toLocaleString(locales, options)) ;
        }

    // Array.prototype.every()
    , every : function everyArray( arr, callback, thisArg ) {
        return (arr.every(callback, thisArg)) ;
        }

    // Array.prototype.some()
    , some : function someArray( arr, callback, thisArg ) {
        return (arr.some(callback, thisArg)) ;
        }

    // Array.prototype.forEach()
    , forEach : function forEachArray( arr, callback, thisArg ) {
        return (arr.forEach(callback, thisArg)) ;
        }

    // Array.prototype.map()
    , map : function mapArray( arr, callback, thisArg ) {
        return (arr.map(callback, thisArg)) ;
        }

    // Array.prototype.filter()
    , filter : function filterArray( arr, callback, thisArg ) {
        return (arr.filter(callback, thisArg)) ;
        }

    // Array.prototype.reduce()
    , reduce : function reduceArray( arr, callback, initialValue ) {
        return (arr.reduce(callback, initialValue)) ;
        }

    // Array.prototype.reduceRight()
    , reduceRight : function reduceRightArray( arr, callback, initialValue ) {
        return (arr.reduceRight(callback, initialValue)) ;
        }

    // Array.prototype.find()
    , find : function findArray( arr, callback, thisArg ) {
        return (arr.find(callback, thisArg)) ;
        }

    // Array.prototype.findIndex()
    , findIndex : function findIndexArray( arr, callback, thisArg ) {
        return (arr.findIndex(callback, thisArg)) ;
        }

    // Array.prototype.entries()
    , entries : function entriesArray( arr ) {
        return (arr.entries()) ;
        }

    // Array.prototype.keys()
    , keys : function keysArray( arr ) {
        return (arr.keys()) ;
        }

    // Array.prototype.values()
    , values : function valuesArray( arr ) {
        return (arr.values()) ;
        }

    // Array.prototype.flat()
    , flat : function flatArray( arr, depth ) {
        return (arr.flat(depth)) ;
        }
        
    // Array.prototype.flatMap()
    , flatMap : function flatMapArray( arr, callback, thisArg ) {
        return (arr.flatMap(callback, thisArg)) ;
        }

    // Array.prototype.from()
    , from : function fromArray( arr, mapFn, thisArg ) {
        return (Array.from(arr, mapFn, thisArg)) ;
        }

    // Array.prototype.of()
    , of : function ofArray( ...items ) {
        return (Array.of(...items)) ;
        }

    // Array.prototype.isArray()
    , isArray : function isArrayArray( arr ) {
        return (Array.isArray(arr)) ;
        }

    




    // String functions
    // String.prototype.charAt()
    ,charAt : function charAtString( str, index ) {
        return (str.charAt(index)) ;
        }

    // String.prototype.charCodeAt()
    , charCodeAt : function charCodeAtString( str, index ) {
        return (str.charCodeAt(index)) ;
        }

    // String.prototype.codePointAt()
    , codePointAt : function codePointAtString( str, index ) {
        return (str.codePointAt(index)) ;
        }

    // String.prototype.concat()
    , concat : function concatString( str, ...strings ) {
        return (str.concat(...strings)) ;
        }

    // String.prototype.endsWith()
    , endsWith : function endsWithString( str, searchString, length ) {
        return (str.endsWith(searchString, length)) ;
        }

    // String.prototype.includes()
    , includes : function includesString( str, searchString, position ) {
        return (str.includes(searchString, position)) ;
        }

    // String.prototype.indexOf()
    , indexOf : function indexOfString( str, searchString, position ) {
        return (str.indexOf(searchString, position)) ;
        }

    // String.prototype.lastIndexOf()
    , lastIndexOf : function lastIndexOfString( str, searchString, position ) {
        return (str.lastIndexOf(searchString, position)) ;
        }

    // String.prototype.localeCompare()
    , localeCompare : function localeCompareString( str, that, locales, options ) {
        return (str.localeCompare(that, locales, options)) ;
        }

    // String.prototype.match()
    , match : function matchString( str, regexp ) {
        return (str.match(regexp)) ;
        }

    // String.prototype.normalize()
    , normalize : function normalizeString( str, form ) {
        return (str.normalize(form)) ;
        }

    // String.prototype.padEnd()
    , padEnd : function padEndString( str, targetLength, padString ) {
        return (str.padEnd(targetLength, padString)) ;
        }

    // String.prototype.padStart()
    , padStart : function padStartString( str, targetLength, padString ) {
        return (str.padStart(targetLength, padString)) ;
        }

    // String.prototype.repeat()
    , repeat : function repeatString( str, count ) {
        return (str.repeat(count)) ;
        }

    // String.prototype.replace()
    , replace : function replaceString( str, searchValue, replaceValue ) {
        return (str.replace(searchValue, replaceValue)) ;
        }

    // String.prototype.search()
    , search : function searchString( str, regexp ) {
        return (str.search(regexp)) ;
        }

    // String.prototype.slice()
    , slice : function sliceString( str, beginIndex, endIndex ) {
        return (str.slice(beginIndex, endIndex)) ;
        }

    // String.prototype.split()
    , split : function splitString( str, separator, limit ) {
        return (str.split(separator, limit)) ;
        }

    // String.prototype.startsWith()
    , startsWith : function startsWithString( str, searchString, position ) {
        return (str.startsWith(searchString, position)) ;
        }

    // String.prototype.substr()
    , substr : function substrString( str, from, length ) {
        return (str.substr(from, length)) ;
        }

    // String.prototype.substring()
    , substring : function substringString( str, indexStart, indexEnd ) {
        return (str.substring(indexStart, indexEnd)) ;
        }

    // String.prototype.toLocaleLowerCase()
    , toLocaleLowerCase : function toLocaleLowerCaseString( str, locales ) {
        return (str.toLocaleLowerCase(locales)) ;
        }

    // String.prototype.toLocaleUpperCase()
    , toLocaleUpperCase : function toLocaleUpperCaseString( str, locales ) {
        return (str.toLocaleUpperCase(locales)) ;
        }

    // String.prototype.toLowerCase()
    , toLowerCase : function toLowerCaseString( str ) {
        return (str.toLowerCase()) ;
        }

    // String.prototype.toString()
    , toString : function toStringString( str ) {
        return (str.toString()) ;
        }

    // String.prototype.toUpperCase()
    , toUpperCase : function toUpperCaseString( str ) {
        return (str.toUpperCase()) ;
        }

    // String.prototype.trim()
    , trim : function trimString( str ) {
        return (str.trim()) ;
        }

    // String.prototype.trimEnd()
    , trimEnd : function trimEndString( str ) {
        return (str.trimEnd()) ;
        }

    // String.prototype.trimStart()
    , trimStart : function trimStartString( str ) {
        return (str.trimStart()) ;
        }

    // String.prototype.valueOf()
    , valueOf : function valueOfString( str ) {
        return (str.valueOf()) ;
        }

    // String.prototype.matchAll()
    , matchAll : function matchAllString( str, regexp ) {
        return (str.matchAll(regexp)) ;
        }

    // String.prototype.replaceAll()
    , replaceAll : function replaceAllString( str, searchValue, replaceValue ) {
        return (str.replaceAll(searchValue, replaceValue)) ;
        }

    // String.prototype[Symbol.iterator]()
    , iterator : function iteratorString( str ) {
        return (str[Symbol.iterator]()) ;
        }

    // String.prototype[Symbol.toPrimitive]()
    , toPrimitive : function toPrimitiveString( str, hint ) {
        return (str[Symbol.toPrimitive](hint)) ;
        }

    // String.prototype[Symbol.toStringTag]()
    , toStringTag : function toStringTagString( str ) {
        return (str[Symbol.toStringTag]) ;
        }

    // String.prototype[Symbol.unscopables]()
    , unscopables : function unscopablesString( str ) {
        return (str[Symbol.unscopables]) ;
        }

    // String.prototype[Symbol.hasInstance]()
    , hasInstance : function hasInstanceString( str, object ) {
        return (str[Symbol.hasInstance](object)) ;
        }

    // String.prototype[Symbol.isConcatSpreadable]()
    , isConcatSpreadable : function isConcatSpreadableString( str ) {
        return (str[Symbol.isConcatSpreadable]) ;
        }
   



    // for method

   ,forDefault : function forDefault(num, callback) {
        for (let i = 0; i < num; i++) {
            callback(i);
        }
    }

    , forIn : function forIn(obj, callback) {
        for (let key in obj) {
            callback(key, obj[key]);
        }
    }

    , forOf : function forOf(obj, callback) {
        for (let value of obj) {
            callback(value);
        }
    }

    , forInOf : function forInOf(obj, callback) {
        for (let [key, value] of Object.entries(obj)) {
            callback(key, value);
        }
    }


    ,for : function forString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            callback(str[i], i, str) ;
        }
    }

    // for method with break
    , forBreak : function forBreakString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                break ;
            }
        }
    }

    // for method with continue
    , forContinue : function forContinueString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                continue ;
            }
        }
    }

    // for method with return
    , forReturn : function forReturnString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                return ;
            }
        }
    }

    // for method with return value
    , forReturnValue : function forReturnValueString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                return str[i] ;
            }
        }
    }

    // for method with return index
    , forReturnIndex : function forReturnIndexString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                return i ;
            }
        }
    }

    // for method with return object
    , forReturnObject : function forReturnObjectString( str, callback ) {
        for (let i = 0; i < str.length; i++) {
            if (callback(str[i], i, str)) {
                return { value: str[i], index: i } ;
            }
        }
    }

   
    
    


    
   


    // while method

    ,whileDefault : function whileDefault(num, callback) {
        let i = 0;
        while (i < num) {
            callback(i);
            i++;
        }
    }

    , whileDo : function whileDo(num, callback) {
        let i = 0;
        do {
            callback(i);
            i++;
        } while (i < num);
    }

    , while : function whileString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            callback(str[i], i, str) ;
            i++;
        }
    }

    // while method with break
    , whileBreak : function whileBreakString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                break ;
            }
            i++;
        }
    }

    // while method with continue
    , whileContinue : function whileContinueString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                continue ;
            }
            i++;
        }
    }

    // while method with return
    , whileReturn : function whileReturnString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                return ;
            }
            i++;
        }
    }

    // while method with return value
    , whileReturnValue : function whileReturnValueString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                return str[i] ;
            }
            i++;
        }
    }

    // while method with return index
    , whileReturnIndex : function whileReturnIndexString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                return i ;
            }
            i++;
        }
    }

    // while method with return object
    , whileReturnObject : function whileReturnObjectString( str, callback ) {
        let i = 0;
        while (i < str.length) {
            if (callback(str[i], i, str)) {
                return { value: str[i], index: i } ;
            }
            i++;
        }

    }




    // JSON method

    // JSON.stringify()
    ,stringify : function stringifyString( str ) {
        return (JSON.stringify(str)) ;
        }

    // JSON.parse()
    , parse : function parseString( str ) {
        return (JSON.parse(str)) ;
        }
    


    
    // post method with fetch

    ,post : function postString( url, data, callback ) {
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error))
    }

    // get method with fetch

    , get : function getString( url, callback ) {
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
                }
                })
         
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error))
    }

    // put method with fetch

    , put : function putString( url, data, callback ) {
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error))
    }

    // delete method with fetch

    , delete : function deleteString( url, callback ) {
        fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => callback(data))
        .catch(error => console.error(error))
    }





} ;





   

    

    

  






  
  
    
  module.exports = piou;
 