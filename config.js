const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Nigeria";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349071528618";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_43_10_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDE0MixcbiAgICAgICAgODksXG4gICAgICAgIDg2LFxuICAgICAgICA2NixcbiAgICAgICAgMTgyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxLFxuICAgICAgICAxLFxuICAgICAgICA4OSxcbiAgICAgICAgODksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDkxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMTksXG4gICAgICAgIDExMSxcbiAgICAgICAgMjM4LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA2MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMTQsXG4gICAgICAgIDc1LFxuICAgICAgICAyNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM1LFxuICAgICAgICA2OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOCxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDExMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDI4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTEsXG4gICAgICAgIDM2LFxuICAgICAgICAxODMsXG4gICAgICAgIDg2LFxuICAgICAgICA0NyxcbiAgICAgICAgNjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUsXG4gICAgICAgIDAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAzMSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTY3LFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDMyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDU4LFxuICAgICAgICA4MyxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNyxcbiAgICAgICAgMjUzLFxuICAgICAgICA1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTM3LFxuICAgICAgICA2OCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDU4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY5LFxuICAgICAgICAyNTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODAsXG4gICAgICAgIDE0LFxuICAgICAgICA2MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOTksXG4gICAgICAgIDMsXG4gICAgICAgIDc4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyNixcbiAgICAgICAgOCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNzksXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDkzLFxuICAgICAgICA3MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgODlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDU5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE5LFxuICAgICAgICAyOCxcbiAgICAgICAgNDcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTE3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTgwLFxuICAgICAgICAzMCxcbiAgICAgICAgMTIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTkxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTg3LFxuICAgICAgICAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNDIsXG4gICAgICAgIDE2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJYRFBzZFdFL1RMWHZ6TVN5Kzk5N0ZDekI3NDhzUmZDd2N2YWRyS2FmVThzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzE1Mjg2MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjMyMkJFOTJFNzA4QkQxOTNEQjQxRjg4NUMyN0U3MDEzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTc2MzAxM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDkwNzE1Mjg2MThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjM2RDg4NUVENjgwOUY4QzhCOUZERTMzOTJFRDA4QjU3XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTc2MzAxNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIydG1FNjRnclNvMmtIT1NaV2lzbFhnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQ4MjcxZDQyLTczY2ItNDUyMC1hMmY4LTNmZjA5Mzc2MzJiYVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICA2NSxcbiAgICAgIDI1MixcbiAgICAgIDE1MixcbiAgICAgIDI2LFxuICAgICAgMTUxLFxuICAgICAgMTg5LFxuICAgICAgMTgxLFxuICAgICAgMTkxLFxuICAgICAgMjMwLFxuICAgICAgMTAzLFxuICAgICAgMjE3LFxuICAgICAgOTIsXG4gICAgICA1NixcbiAgICAgIDE5MCxcbiAgICAgIDQ1LFxuICAgICAgMjksXG4gICAgICAxNjYsXG4gICAgICAyNixcbiAgICAgIDY1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTcsXG4gICAgICAyMDcsXG4gICAgICAyMDMsXG4gICAgICAxOTcsXG4gICAgICAxMTQsXG4gICAgICAxODcsXG4gICAgICAxMTEsXG4gICAgICAxODQsXG4gICAgICA4OSxcbiAgICAgIDksXG4gICAgICAxMTgsXG4gICAgICAyMTAsXG4gICAgICA4NCxcbiAgICAgIDc5LFxuICAgICAgMTA0LFxuICAgICAgMTA0LFxuICAgICAgMTg5LFxuICAgICAgMTk5LFxuICAgICAgMzEsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYk4wcDBERUx5dDZMZ0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjRTR1ZUSzcrTXZEQTFDb01uRERRSlB2NVVEZWxFTlcyaGpxVG1hYm5ialk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMmFjOTdxN2lUZDU0ZVFsZnBTQUN3WitXdDhYK2k1c0thWmUxdHZock41cFNkYlFMc2RQTjkwUC9xdGg0NmRBaEZPdGtLMmtETVRudmYzRzk0UldPQVE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiR0NjVkJwNXR2YnVkYzJtVDlUYUd6V2JjVFJDT3FPakpmTndESE0rVjhQeFhTN3RnWWFRdjlDR0NRYlB5YWVIS1RYMFd1NnNnZE1VM0pZMGdKQTlGQlE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDcxNTI4NjE4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0MTYwOTQ4NDE5ODEzOTo3QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkphbWFsXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDcxNTI4NjE4OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDU0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk3NjMwMDcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMRENcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUxEQy5qc29uIjogIntcImtleURhdGFcIjpcIllFaEpxWFB1TDdRNkRxVVpWaWJxSTMvd1dzQkxVQ0Faem9EcUxrdER6RVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6ODY3NDc3MjA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjk3NjMwMTA3MDdcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
