const gps = require("gps-tracking")

var options = {
     'debug'                 : true,
     'port'                  : 8080,
     'device_adapter'        : "TK103"
 }
  
 var server = gps.server( options, (device,connection) => {
  
     device.on("login_request", (device_id,msg_parts) => {
  
         // Some devices sends a login request before transmitting their position
         // Do some stuff before authenticate the device... 
         
         // Accept the login request. You can set false to reject the device.
         console.log("Se acaba de enviar la petición de login al dispositivo...")
         this.login_authorized(true)
  
     })
  
  
     //PING -> When the gps sends their position  
     device.on("ping",function(data){
          console.log("El dispositivo nos envió su posición")
  
         //After the ping is received, but before the data is saved
         //console.log(data);
         return data;
  
     })
  
 })