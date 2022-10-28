# U21-Grupo11-OmegaPetShop
MinTic proyect ciclo 4  

* Install dependencies from file definition package.json  
npm install  

* Install dependency  
npm install bcrypt-nodejs --save  

* Install multiple dependencies  
npm i connect-multiparty jwt-simple moment mongoose mongoose-paginaction  

* Install dependency in dev eviroment  
npm install nodemon --save-dev  

* Init project  
npm install  
npm run dev  


Definicion Carpetas:  
- routes/  
      Se especifica que se va hacer cuando se consulta una ruta de la pagigna: ejem pagina.com/usarios -> usuarios.js  
    Se encarga de decidir para que pagina va  
    La mejor practiva es crear un archivo por cada ruta:  
        eje: productos.js, usuarios.js ....  
- controlllers/  
    Se encarga de conectarse a la base de datos  

Lo que se hacia en Java en el service en el dao van a ir al controlador en NodeJS-Express  


React hace la solicitud como lo hace postman
  
Mongoose libreria para trabajar con express y mongodb  
  
Swagger: Para documentar las rutas 
  
  
JSON Web Tokens 
Para manejo de sesiones 
Fuente: https://jwt.io/libraries 
npm install jsonwebtoken 
  