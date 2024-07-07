const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="Benjaminmusau8707@gmail.com"
global.location="Kampala,Uganda."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kampala/Uganda";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "256785191109";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_24_07_07_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTA4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODMsXG4gICAgICAgIDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAzMyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyNixcbiAgICAgICAgNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxODUsXG4gICAgICAgIDM0LFxuICAgICAgICA1MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTc4LFxuICAgICAgICA4NCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxODUsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxNTksXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDExMixcbiAgICAgICAgMjIzLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE5NixcbiAgICAgICAgODIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDczLFxuICAgICAgICAzMixcbiAgICAgICAgMTgxLFxuICAgICAgICAzMyxcbiAgICAgICAgODcsXG4gICAgICAgIDI1LFxuICAgICAgICAxODQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTAsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYzLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICA2NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzUsXG4gICAgICAgIDcxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzMsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDM4LFxuICAgICAgICA4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEzLFxuICAgICAgICA2NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxLFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTAwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTI2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNixcbiAgICAgICAgNTIsXG4gICAgICAgIDgxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDUsXG4gICAgICAgIDE2LFxuICAgICAgICAzOSxcbiAgICAgICAgODUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMjI2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIzLFxuICAgICAgICAwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAzNixcbiAgICAgICAgMTI3LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTI4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNjAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWhvOVBmOERWSzlNNVZUZU9UYlBnMk1qZVVsUzBmdWwwWldDRVMxVDV2Zz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwia0U0cENFMlRUaEdDZ01EdVBNXzJrd1wiLFxuICBcInBob25lSWRcIjogXCJjNTQwMjRiMC02MDA4LTQwOWItYjMzNC1mYTA3MDQyZTkxMzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTAsXG4gICAgICAyMzIsXG4gICAgICA2MCxcbiAgICAgIDk4LFxuICAgICAgMTcxLFxuICAgICAgMjA3LFxuICAgICAgNzMsXG4gICAgICAzMCxcbiAgICAgIDY4LFxuICAgICAgMTMzLFxuICAgICAgMjEsXG4gICAgICAxNixcbiAgICAgIDczLFxuICAgICAgNDIsXG4gICAgICAyNDEsXG4gICAgICAxMDIsXG4gICAgICAxOTEsXG4gICAgICAxNjMsXG4gICAgICAyMzEsXG4gICAgICAzNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTQsXG4gICAgICA4MixcbiAgICAgIDIzNSxcbiAgICAgIDIsXG4gICAgICAyNDUsXG4gICAgICAyNDksXG4gICAgICAyMzQsXG4gICAgICA5MCxcbiAgICAgIDIxOCxcbiAgICAgIDIzNixcbiAgICAgIDIzMCxcbiAgICAgIDEwOCxcbiAgICAgIDE5NCxcbiAgICAgIDM5LFxuICAgICAgMTcyLFxuICAgICAgNDYsXG4gICAgICAxMzcsXG4gICAgICAxMSxcbiAgICAgIDE4OCxcbiAgICAgIDUwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlBIRzkyN1c0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTY3ODUxOTExMDk6NTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCIjUmFyZV9TcGVjaWVzMTAwLjElXCIsXG4gICAgXCJsaWRcIjogXCIxNTE1Mjk0NjY1MTI0NTo1MEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQRGM1ZkFHRU1DOXFiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImJXeEtsR0QwQkJsTVZVTW1FaTNjUjNMREpicHVQN0o2NExXaFcwZEUvbkU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidGswcmt6RDZNMUhwMm54SnVGNFFqeDd4RS9PcU5WRFhwcmZjeEgrNGVDcnV0WjZWeDdzamdIbklYT3RmMDBCTFptMjAzODBQQklwZDM0TzdPOGxlQnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlB5elVSY3ZtZkFmSWNQL2M2QVJrS1FIcnhWU3JIb2Zqb3c4SGJRdWZmWWZBQ1V3WWdra2wrdkJyc0dnYXlmbDdyM0lDbzJzbjVNekZYVEl0SGxOalE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU2Nzg1MTkxMTA5OjUwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDM0NDI2MCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQVA5U1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBUDlTLmpzb24iOiAie1wia2V5RGF0YVwiOlwia2RWemNMMDFEYnc0RUR3MmI5OVZ0NEV5MUxhZVdsTm5WUit0Mk05d093TT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODQ3MTYwNDMyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjAzNDQyNjQ1MDNcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Musau MD bot",
  ownername:process.env.OWNER_NAME|| "Rare Species",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
