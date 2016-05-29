# AspNet5-Ng2-Starter
Starter based on [DeborahK](https://github.com/DeborahK) repo: [Anguler2-GettingStarted](https://github.com/DeborahK/Angular2-GettingStarted)


This starter can be edited with Visual Studio 2015 (Update 2) or Visual Studio Code.

Versions used:
* AspNet Core 1.0 (RC2)
* Angular2 (RC1)
* Node v6.2.0
* Npm v3.9.3


Under the folder `src/Ng2-Starter` run the following :

1. npm install && bower install
2. gulp ng2 (this task will copy angular dependencies from node_modules to wwwroot/lib)


If using Visual Studio Code :

1. dotnet restore
2. dotnet build
3. npm start (to watch for typescript files changes)
 
On a different command line :

4. set ASPNETCORE_ENVIRONMENT=Development
5. dotnet run (to run the app)
