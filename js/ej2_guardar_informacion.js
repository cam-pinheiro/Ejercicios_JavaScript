// Nombre de la variable empezando con minuscula
// Usar camelCase, la primera palabra minuscula y las siguientes mayuscula sin espacios
// Puede haber guiones, pero no es una buena practica
// Las variable no se inicia por numeros

// 1 - DECLARAR UNA VARIABLE
let nombre;

// 2 -  INICIAR UNA VARIABLE
// Primero declarar la variable y luego iniciarla
document.write(" ELEMPLO 1 : INICIAR UNA VARIABLE");
document.write("</br>");
let ciudad;
ciudad = "Málaga";
document.write("La variable ciudad tiene el valor: " + ciudad);
document.write("</br>");

// Declarar la variable e iniciarla a la vez
document.write("EJEMPLO 2 : CREAR UNA VARIABLE EDAD </br>");
let edad = 33;
document.write("La variable edad tiene el valor: " + edad);
document.write("</br>");

// TIPOS DE VARIABLES
// NUMERO
document.write("EJEMPLO 3 : CREAR UNA VARIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimal = 5.5
document.write("El numero sin decimales es: " + numero);
document.write("</br>");
document.write("El numero con decimales es: " + numeroDecimal);
document.write("</br>");

// CADENAS. Pueden usarse comillas simples o dobles. No las mezclas, usa solo una de ellas.
document.write("EJEMPLO 4 : CREAR UNA VARIABLE DE TIPO STRING</br>");
let saludo = "Hola Mundo!!!"
let despedida = 'Adiós';
let numeroEnTexto = "33"
document.write("</br>");
document.write("La variable texto saludo: " + saludo);
document.write("</br>");
document.write(despedida);
document.write("</br>");
document.write(numeroEnTexto);
document.write("</br>");

// BOOLEANOS - true o false. En minuscula y sin comillas
document.write("EJEMPLO 5 : CREAR UNA VARIABLE DE TIPO BOOLEANO</br>");
let estaSoleado = true;
let esDia = false;
document.write("La variable booleana esta soleado es: " + estaSoleado);
document.write("</br>");
document.write("La variable booleana es dia es: " + esDia);
document.write("</br>");

// EJERCICIOS PARA PRATICAR
document.write("</br> EJERCICIOS PARA PRACTICAR </br>")


let myName = "Camila"
let surname = "Pinheiro"
let age = 38
let height = 1.70
let city = "Vilanova i la Geltrú"
let beach = true
let mountain = true
let chocolate = true
let pet = false

document.write(" Nombre: " + myName + " " + surname)
document.write("</br>")
document.write("Edad: " + age)
document.write("</br>")
document.write("Altura: " + height)
document.write("</br>")
document.write("Ciudad: " + city)
document.write("</br>")
document.write("Te gusta la playa?: " + beach)
document.write("</br>")
document.write("Te gusta la montana?: " + mountain)
document.write("</br>")
document.write("Te gusta el chocolate?: " + chocolate)
document.write("</br>")
document.write("Tienes mascota?:" + pet)
document.write("</br>")
document.write("</br>")


document.write("Dados de outra persona")
document.write("</br>");

myName = "Marcos"
surname = "Rossi"
age = 23
height = 1.82
city = "Barcelona"
beach = true
mountain = false
chocolate = true
pet = true

document.write(" Nombre: " + myName + " " + surname)
document.write("</br>")
document.write("Edad: " + age)
document.write("</br>")
document.write("Altura: " + height)
document.write("</br>")
document.write("Ciudad: " + city)
document.write("</br>")
document.write("Te gusta la playa?: " + beach)
document.write("</br>")
document.write("Te gusta la montana?: " + mountain)
document.write("</br>")
document.write("Te gusta el chocolate?: " + chocolate)
document.write("</br>")
document.write("Tienes mascota?:" + pet)
document.write("</br>")

document.write("</br> Declara variables para guardar la siguiente información sobre un libro. </br>")

let bookTitle = "Nuncanoche"
let author = "Jay Kristoff"
let gender = "Fantasía y Mágia"
let yearPublished = "2016"
let pages = 728
let movie = false

document.write("Nombre del libro: " + bookTitle + ", autor " + author + ", género literario " + gender + ", publicado en " + yearPublished + ", tiene " + pages + " páginas.")
document.write("</br>")
document.write("Tiene pelicula?: " + movie)
document.write("</br>")
document.write("</br> Otro livro favorito </br>")

bookTitle = "Torre de Alba - Serie Trono de Cristal"
author = "Sarah J. Maas"
gender = "Fantasía y Mágia"
published = "2017"
pages = 704
movie = false
document.write("Nombre del libro: " + bookTitle + ", autor " + author + ", género literario " + gender + ", publicado en " + yearPublished + ", tiene " + pages + " páginas.")
document.write("</br>")
document.write("Tiene pelicula?: " + movie)
document.write("</br>")

document.write("</br> asígnale los valores de tu película favorita y muéstrala en tu página </br>")
let movieTitle = "Attack on Titan"
let director = "Tetsurō Araki"
let yaerRelease = "2013"
let duration = "72"
let awards = true

document.write("El anime es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " episodios.")
document.write("</br>")
document.write("Tiene premios?: " + awards)
document.write("</br>")

document.write("</br> Otra película favorita </br>")
movieTitle = "Your Name"
director = "Makoto Shinkai"
yaerRelease = "2015"
duration = "93 min"
awards = true

document.write("La película es " + movieTitle + ", el director es el " + director + ", su año de lanzamiento fue en " + yaerRelease + " y tiene " + duration + " de duración.")
document.write("</br>")
document.write("Tiene premios?: " + awards)

document.write("</br> Declara las siguientes variables o constantes según corresponda: </br>")

let destination = "Morro de Sao Paulo"
let country = "Brasil"
let weather = "Tropical"
let numberPopulation = 11.410
let places = "playas"
let coast =  true
let urban = false 
document.write("DEstino de viaje favorito fue " + destination + ", está en  " + country + ", su clima predominante es " + weather + ", tiene " + numberPopulation 
+ " habitantes y su principal atraccion son las " + places )
document.write("</br>")
document.write("Es un destino costero?: " + coast)
document.write("</br>")
document.write("Es un destino urbano?: " + urban)
document.write("</br>")


document.write("</br> Declara variables para guardar la siguiente información sobre una canción.</br>")
let music = "Pra você guardei o amor"
let singer = "Nando Reis e Ana Cañas"
let album = "Drês"
let yearLaunched = "2010"
let timeDuration = "5:51"
let video = true
document.write("</br>")
document.write("La canción es " + music + ", los artistas son " + singer + ", el album se llama " + album + ", fue publicado en "
+ yearLaunched + " y tiene " + timeDuration + " de duración.")
document.write("</br>")
document.write("Tiene videoclip?: " + video)

document.write("</br>")
document.write("</br> Otra canción.</br>")

music = "Barquinho de Papel"
singer = "AnaVitoria"
album = "Trilhas"
yearLaunched = "2022"
timeDuration = "3:48"
video = true

document.write("</br>")
document.write("La canción es " + music + ", los artistas son " + singer + ", el album se llama " + album + ", fue publicado en "
+ yearLaunched + " y tiene " + timeDuration + " de duración.")
document.write("</br>")
document.write("Tiene videoclip?: " + video)
document.write("</br>")

document.write("</br> Declara las siguientes variables o constantes según corresponda: </br>")

let months = 12
let week = 7
let population = 70.000
let ageSinger = 61
let seasons = 4
let myCity = "Vilanona i la Geltrú"
let hoursPerDay = 24
let priceGas = 2.78
let numberBooks = 40
document.write("Número de meses del año: " + months)
document.write("</br>")
document.write("Número de dás de la semana: "+  week )
document.write("</br>")
document.write("Número de habitantes en Vilanova: " + population)
document.write("</br>")
document.write("Edad de Nando Reis: " + ageSinger)
document.write("</br>")
document.write("Número de estaciones del año: " + seasons)
document.write("</br>")
document.write("EL nombre de mí ciudad es " + myCity)
document.write("</br>")
document.write("Númerod e horas del día: " + hoursPerDay)
document.write("</br>")
document.write("Predio de la gasolina: " + priceGas)
document.write("</br>")
document.write("Número de libro de que leído: " + numberBooks) 
document.write("</br>")






















