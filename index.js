(() => {
    try {
        window;
    } catch {
        console.log("This package requires a functioning document.");
        return false;
    }
    var color = { 
      brown: "#ae9a7f", 
      turqoise: "#4fe3ad", 
      orange: "#fea312", 
      pink: "#ed2a9f", 
      yellow: "#ffea21"
    },
        seperator = { 
          color: "color:", 
          background: "background:", 
          semicolon: ";", 
          none: ""
        },
        format = [
            seperator.background + color.brown,
            seperator.none,
            seperator.background + color.brown,
            seperator.none,
            seperator.background + color.brown,
            seperator.color + color.yellow + seperator.semicolon + seperator.background + color.brown,
            seperator.background + color.brown,
            seperator.none,
            seperator.background + color.brown,
            seperator.color + color.turqoise + seperator.semicolon + seperator.background + color.brown,
            seperator.color + color.orange + seperator.semicolon + seperator.background + color.brown,
            seperator.background + color.brown,
            seperator.none,
            seperator.background + color.brown,
            seperator.color + color.turqoise + seperator.semicolon + seperator.background + color.brown,
            seperator.color + color.pink + seperator.semicolon + seperator.background + color.brown,
            seperator.background + color.brown,
            seperator.none,
            seperator.background + color.brown,
        ],
        newline = "\n\t\t\t\t",
        version = "1.1.0",
        about = [`\t\t\t\t%c-------------------------%c${newline}%c|\t\t\t\t\t\t|%c${newline}%c|     %cJS Functions%c      |%c${newline}%c|  %cBy %cGuacaplushy#0001%c  |%c${newline}%c|     %cVersion %c${version}%c     |%c${newline}%c-------------------------`.replace(/-|\|/g, " ")].concat(
            format.join('","')
        );
    eval("()=>console.log(`" + about.join('`,"') + '")')();
    var Main = new (class Main {
        isNumber(number) {
            return !isNaN(number);
        };
        parseString(string) {
            return JSON.stringify(string);
        };
        parseJSON(object) {
            return JSON.parse(object);
        };
        getBool(object) {
            return !!object;
        };
        toHexColor(number) {
          var rgbLimit = 16777215;
          return (number <= rgbLimit ? number : 16777215).toString(16);
        }
    })();
    function p() {
        String.prototype.parseJSON = function () {
            return Main.parseJSON(this);
        };
        Object.prototype.parseString = function () {
            return Main.parseString(this);
        };
        Number.prototype.toHexColor = function () {
            return Main.toHexColor(this);
        }
    }
    function v() {
        window.isNumber = (object) => {
            return Main.isNumber(object);
        };
        window.getBool = (object) => {
            return Main.getBool(object);
        };
    }
    p();
    v();
    return true;
})();
