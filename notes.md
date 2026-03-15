user :

fullname:string,required
email:strin uniqe required
password required string
posts:[] - ref Post arr of posts
role :admin|user enum default user



posts:


author:ref User
content string required


7 mins

2 models user and posts 

with routes and contorllers empty without logic 