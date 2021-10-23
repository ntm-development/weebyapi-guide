import{r as e,o,c as t,a as n,e as s,F as a,b as l}from"./app.6ca70ea2.js";const r={},i=n("h1",{id:"webhooks",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#webhooks","aria-hidden":"true"},"#"),l(" Webhooks")],-1),h=l("Before you can start working with Webhooks, will need to go and visit the "),u={href:"https://weebyapi.xyz/dashboard",target:"_blank",rel:"noopener noreferrer"},d=l("Weeby API Dashboard"),c=l(". Make sure that you are accepted first into Weeby API by applying for a token using the "),b=n("code",null,"/apply",-1),p=l(" command with the Weeby API bot, or using the "),g={href:"https://weebyapi.xyz/dashboard/apply",target:"_blank",rel:"noopener noreferrer"},k=l("apply"),m=l(" page."),w=n("h3",{id:"events",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#events","aria-hidden":"true"},"#"),l(" Events")],-1),y=l("If you would like to receive updates from the API without making requests. You can setup our event webhook system to get events whenever a user votes your bot on "),f={href:"https://top.gg/",target:"_blank",rel:"noopener noreferrer"},v=l("Top.gg"),A=l(", a new punishment was added and more. To verify requests are coming from Weeby API, we will provide the Authorization header with your Webhook Authorization token. It's recommended to verify every request to ensure it is coming from Weeby API. Events sent by Weeby API must be acknowledged with a "),W=n("code",null,"200",-1),T=l(" response in order to be considered successful."),U=n("h3",{id:"setting-up-weeby-api",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up-weeby-api","aria-hidden":"true"},"#"),l(" Setting up Weeby API")],-1),q=n("p",null,"First, make sure that you have a web server, which is public and accessible by any IP Address. Scroll down to Settings, there you will find the Event Webhook section where you can start configuring the settings for event webhooks.",-1),I=n("p",null,[n("img",{src:"/assets/webhook.c04bae5f.png",alt:"Webhook page"})],-1),S=n("p",null,"The options are as listed in the section:",-1),z=n("li",null,[n("strong",null,"Webhook Authorization"),l(" - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).")],-1),B=n("strong",null,"Webhook URL",-1),L=l(" - This is the URL of your Web Server that Weeby API will send a "),P=n("code",null,"POST",-1),D=l(" request to. Localhost is not supported unless you use "),E={href:"https://ngrok.io/",target:"_blank",rel:"noopener noreferrer"},x=l("ngrok"),C=l("."),j=n("li",null,[n("strong",null,"Disable/Enable"),l(" - Toggle if you want events to be sent or not. If you are not using Event Webhooks, switch it off. Fill in the details, and then click the "),n("kbd",null,"Save"),l(" button. Now events will be sent to that URL,")],-1),K=n("h3",{id:"event-object",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#event-object","aria-hidden":"true"},"#"),l(" Event Object")],-1),F=n("p",null,"Top.gg Votes",-1),Z=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token punctuation"},"{"),l("\n    event"),n("span",{class:"token operator"},":"),l(),n("span",{class:"token string"},'"vote"'),l("\n    userID"),n("span",{class:"token operator"},":"),l(" String"),n("span",{class:"token punctuation"},","),l("\n    botID"),n("span",{class:"token operator"},":"),l(" String"),n("span",{class:"token punctuation"},","),l("\n    voteDate"),n("span",{class:"token operator"},":"),l(" Number"),n("span",{class:"token punctuation"},","),l("\n    voteExpiry"),n("span",{class:"token operator"},":"),l(" Number"),n("span",{class:"token punctuation"},","),l("\n    isWeekend"),n("span",{class:"token operator"},":"),l(" Boolean"),n("span",{class:"token punctuation"},","),l("\n"),n("span",{class:"token punctuation"},"}"),l("\n")])]),n("div",{class:"line-numbers"},[n("span",{class:"line-number"},"1"),n("br"),n("span",{class:"line-number"},"2"),n("br"),n("span",{class:"line-number"},"3"),n("br"),n("span",{class:"line-number"},"4"),n("br"),n("span",{class:"line-number"},"5"),n("br"),n("span",{class:"line-number"},"6"),n("br"),n("span",{class:"line-number"},"7"),n("br"),n("span",{class:"line-number"},"8"),n("br")])],-1),N=n("h3",{id:"top-gg-voting",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#top-gg-voting","aria-hidden":"true"},"#"),l(" Top.gg Voting")],-1),R=n("p",null,"With Weeby API's Top.gg Webhook Integration, you will easily integrate the ability to have webhook messages sent to a Discord channel whenever a user votes for your bot on Top.gg",-1),O=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"To ensure the best experience, make sure that you follow this guide, the fields to have webhooks setup correctly to avoid issues such as not providing the token, or Message Spamming.")],-1),M=n("div",{class:"custom-container danger"},[n("p",{class:"custom-container-title"},"DANGER"),n("p",null,"Do not use the Top.gg Webhook System for other bot list websites. It will not work because of the payload data, which leads to the webhook system breaking.")],-1),Y=n("h3",{id:"setting-up-the-weeby-api-webhook",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up-the-weeby-api-webhook","aria-hidden":"true"},"#"),l(" Setting up the Weeby API Webhook")],-1),J=n("p",null,[l("Scroll down to "),n("strong",null,"Settings"),l(", there you will find the "),n("strong",null,"Top.gg Webhook"),l(" section where you can start configuring Webhook functionality for your bot. You will find the following details which you should not show anybody:")],-1),V=n("p",null,[n("img",{src:"/assets/topgg-webhooks.55830ea8.png",alt:"Top.gg Webhook"})],-1),X=n("strong",null,"Webhook URL",-1),G=l(" - This is your Bot's Webhook URL where Top.gg will send "),Q=n("code",null,"POST",-1),H=l(" requests to, along with the "),_={href:"https://docs.top.gg/resources/webhooks/#bot-webhooks",target:"_blank",rel:"noopener noreferrer"},$=l("payload"),ee=l(" data."),oe=n("li",null,[n("strong",null,"Webhook Authorization"),l(" - You'll receive this upon being accepted into Weeby API, a unique Webhook Token for the Top.gg Webhook System and for our API Webhook Events system. (Don't use your API Token!).")],-1),te=n("p",null,"Now, while we are on this section. Fill in the following fields:",-1),ne=n("p",null,[n("img",{src:"/assets/webhook-fields.0b1a012a.png",alt:"Webhook fields"})],-1),se=n("h4",{id:"discord-webhook-url",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#discord-webhook-url","aria-hidden":"true"},"#"),l(" Discord Webhook URL")],-1),ae=n("p",null,"This is the Webhook URL that you can obtain by right-clicking any Channel > Edit Channel > Integrations > Webhooks. You will then need to create a Webhook, name it and provide a nice avatar for it.",-1),le=n("p",null,[n("img",{src:"/assets/webhook-discord.fba5e348.png",alt:"Discord Webhook"})],-1),re=n("p",null,[l("Then, copy the Webhook URL and paste it in the "),n("strong",null,"Discord Webhook URL"),l(" field. Do not show this to anybody because this contains the token and channel ID to make sending the content possible.")],-1),ie=n("h4",{id:"embed-code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#embed-code","aria-hidden":"true"},"#"),l(" Embed Code")],-1),he=l("This is what the message will look like when it gets sent. Neat right? Well, to guarantee and ensure that the embeds are to be sent correctly without problems, use this "),ue={href:"https://discohook.org/",target:"_blank",rel:"noopener noreferrer"},de=l("Embed Builder"),ce=l(" tool that is specialized for designing Discord Webhook messages."),be=n("p",null,[n("img",{src:"/assets/webhook-builder.45957640.png",alt:"Webhook Builder"})],-1),pe=n("p",null,[l("When you're finished designing your embed, click on "),n("strong",null,"JSON Data Editor"),l(" and copy the JSON code. Paste it into the "),n("strong",null,"Embed Code"),l(" field.")],-1),ge=n("p",null,[l("Back on the dashboard, click "),n("kbd",null,"Save"),l(" and the page will reload with the new changes (shown on the fields).")],-1),ke=n("h3",{id:"setting-up-top-gg",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#setting-up-top-gg","aria-hidden":"true"},"#"),l(" Setting Up Top.gg")],-1),me=n("p",null,"The next step involved is going to your bot's webhook page on Top.gg, visit this link:",-1),we=n("div",{class:"language-text ext-text"},[n("pre",{class:"language-text"},[n("code",null,"https://top.gg/bot/:BOTID/webhooks\n")])],-1),ye=n("p",null,[l("Replace "),n("code",null,":BOTID"),l(" with your Bot's ID.")],-1),fe=n("p",null,[l("When you are on this page, scroll down to "),n("strong",null,"Webhooks"),l(". Here you will need to fill in two fields that you have viewed on the dashboard earlier:")],-1),ve=n("ul",null,[n("li",null,"Webhook URL"),n("li",null,"Webhook Authorization")],-1),Ae=n("p",null,[n("img",{src:"/assets/topgg-webhook.d55e1ce9.png",alt:"Top.gg Webhook"})],-1),We=n("p",null,[l("Click "),n("kbd",null,"Save"),l("!")],-1),Te=n("h4",{id:"testing",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#testing","aria-hidden":"true"},"#"),l(" Testing")],-1),Ue=n("p",null,[l("We're now ready to test our webhooks, to ensure the webhooks are working, click on the "),n("kbd",null,"Send Test"),l(" button.")],-1),qe=n("p",null,[n("img",{src:"data:image/png;base64,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",alt:"Send Test"})],-1),Ie=n("p",null,"You're all done with setting up! To see that your webhook message sent, go to the channel you created the webhook in and you'll see the webhook message.",-1),Se=n("p",null,[n("img",{src:"/assets/new-vote.295d0dd1.png",alt:"New Vote"})],-1),ze=n("h3",{id:"embed-variables",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#embed-variables","aria-hidden":"true"},"#"),l(" Embed Variables")],-1),Be=l("You may use these embed variables to display certain data in the message. Variables will need to use curly braces "),Le=n("code",null,"{}",-1),Pe=l(". To guarantee for mentions to render properly, make sure both the user and bot is in the server! Also, dates are returned as a Unix Timestamp so that it can work with "),De={href:"https://discord.com/developers/docs/reference#message-formatting-timestamp-styles",target:"_blank",rel:"noopener noreferrer"},Ee=l("Discord message timestamps"),xe=l("."),Ce=n("h5",{id:"user",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#user","aria-hidden":"true"},"#"),l(" User")],-1),je=n("ul",null,[n("li",null,[n("code",null,"{userMention}"),l(" - String. The mention of the user")]),n("li",null,[n("code",null,"{userID}"),l(" - String. The ID of the user.")])],-1),Ke=n("h5",{id:"bot",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bot","aria-hidden":"true"},"#"),l(" Bot")],-1),Fe=n("ul",null,[n("li",null,[n("code",null,"{botMention}"),l(" - String. The mention of the bot")]),n("li",null,[n("code",null,"{botID}"),l(" - String. The ID of the user.")])],-1),Ze=n("h5",{id:"misc",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#misc","aria-hidden":"true"},"#"),l(" Misc.")],-1),Ne=n("ul",null,[n("li",null,[n("code",null,"{voteDate}"),l(" - Number. The date when the user voted.")])],-1),Re=n("br",null,null,-1),Oe=n("div",{class:"custom-container tip"},[n("p",{class:"custom-container-title"},"TIP"),n("p",null,"For now, these are the only supported variables. In the future we may introduce ways to fetch full user and bot data and make it 100% customisable.")],-1);r.render=function(l,r){const Me=e("OutboundLink");return o(),t(a,null,[i,n("p",null,[h,n("a",u,[d,s(Me)]),c,b,p,n("a",g,[k,s(Me)]),m]),w,n("p",null,[y,n("a",f,[v,s(Me)]),A,W,T]),U,q,I,S,n("ul",null,[z,n("li",null,[B,L,P,D,n("a",E,[x,s(Me)]),C]),j]),K,F,Z,N,R,O,M,Y,J,V,n("ul",null,[n("li",null,[X,G,Q,H,n("a",_,[$,s(Me)]),ee]),oe]),te,ne,se,ae,le,re,ie,n("p",null,[he,n("a",ue,[de,s(Me)]),ce]),be,pe,ge,ke,me,we,ye,fe,ve,Ae,We,Te,Ue,qe,Ie,Se,ze,n("p",null,[Be,Le,Pe,n("a",De,[Ee,s(Me)]),xe]),Ce,je,Ke,Fe,Ze,Ne,Re,Oe],64)};export{r as default};
