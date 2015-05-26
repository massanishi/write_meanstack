var app=angular.module("app",["ngRoute"]);angular.module("app").controller("ApplicationCtrl",["$scope",function(o){o.$on("login",function(t,n){o.currentUser=n})}]),angular.module("app").controller("LoginCtrl",["$scope","UserSvc",function(o,t){o.login=function(n,e){t.login(n,e).then(function(t){console.log("logged in"),o.$emit("login",t.data)},function(o){console.log(o)})}}]),app.controller("PostsCtrl",["$scope","PostsSvc",function(o,t){t.fetch().success(function(t){console.log(t),o.posts=t}),o.addPost=function(){o.postBody&&t.create({username:"dickeyxxx",body:o.postBody}).success(function(t){o.postBody=null})},o.$on("ws:new_post",function(t,n){o.$apply(function(){o.posts.unshift(n)})})}]),app.service("PostsSvc",["$http",function(o){this.fetch=function(){return o.get("/api/posts")},this.create=function(t){return o.post("/api/posts",t)}}]),angular.module("app").config(["$routeProvider",function(o){o.when("/",{controller:"PostsCtrl",templateUrl:"posts.html"}).when("/register",{controller:"RegisterCtrl",templateUrl:"register.html"}).when("/login",{controller:"LoginCtrl",templateUrl:"login.html"})}]),angular.module("app").service("UserSvc",["$http",function(o){var t=this;t.getUser=function(){return o.get("api/users")},t.login=function(n,e){return o.post("/api/sessions",{username:n,password:e}).then(function(n){return t.token=n.data,o.defaults.headers.common["X-Auth"]=n.data,t.getUser()})}}]),angular.module("app").run(["$rootScope","$timeout",function(o,t){!function n(){var e="ws://localhost:3000",s=new WebSocket(e);s.onclose=function(o){console.log("Websocket closed. Reconnecting..."),t(n,1e4)},s.onmessage=function(t){console.log(t);var n=JSON.parse(t.data);o.$broadcast("ws:"+n.topic,n.data)}}()}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImFwcGxpY2F0aW9uLmN0cmwuanMiLCJsb2dpbi5jdHJsLmpzIiwicG9zdHMuY3RybC5qcyIsInBvc3RzLnN2Yy5qcyIsInJvdXRlcy5qcyIsInVzZXIuc3ZjLmpzIiwid2Vic29ja2V0cy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29udHJvbGxlciIsIiRzY29wZSIsIiRvbiIsIl8iLCJ1c2VyIiwiY3VycmVudFVzZXIiLCJVc2VyU3ZjIiwibG9naW4iLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIiRlbWl0IiwiZGF0YSIsImVycm9yIiwiUG9zdHNTdmMiLCJmZXRjaCIsInN1Y2Nlc3MiLCJwb3N0cyIsImFkZFBvc3QiLCJwb3N0Qm9keSIsImNyZWF0ZSIsImJvZHkiLCJwb3N0IiwiJGFwcGx5IiwidW5zaGlmdCIsInNlcnZpY2UiLCIkaHR0cCIsInRoaXMiLCJnZXQiLCJjb25maWciLCIkcm91dGVQcm92aWRlciIsIndoZW4iLCJ0ZW1wbGF0ZVVybCIsInN2YyIsImdldFVzZXIiLCJ2YWwiLCJ0b2tlbiIsImRlZmF1bHRzIiwiaGVhZGVycyIsImNvbW1vbiIsInJ1biIsIiRyb290U2NvcGUiLCIkdGltZW91dCIsImNvbm5lY3QiLCJ1cmwiLCJjb25uZWN0aW9uIiwiV2ViU29ja2V0Iiwib25jbG9zZSIsImUiLCJvbm1lc3NhZ2UiLCJwYXlsb2FkIiwiSlNPTiIsInBhcnNlIiwiJGJyb2FkY2FzdCIsInRvcGljIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQUEsV0NBQUQsU0FBQUMsT0FBQSxPQUNBQyxXQUFBLG1CQUFBLFNBQUEsU0FBQUMsR0FDQUEsRUFBQUMsSUFBQSxRQUFBLFNBQUFDLEVBQUFDLEdBQ0FILEVBQUFJLFlBQUFELE9DSEFOLFFBQUFDLE9BQUEsT0FDQUMsV0FBQSxhQUFBLFNBQUEsVUFBQSxTQUFBQyxFQUFBSyxHQUNBTCxFQUFBTSxNQUFBLFNBQUFDLEVBQUFDLEdBQ0FILEVBQUFDLE1BQUFDLEVBQUFDLEdBQ0FDLEtBQUEsU0FBQUMsR0FDQUMsUUFBQUMsSUFBQSxhQUNBWixFQUFBYSxNQUFBLFFBQUFILEVBQUFJLE9BQ0EsU0FBQUMsR0FDQUosUUFBQUMsSUFBQUcsU0NQQW5CLElBQUFHLFdBQUEsYUFBQSxTQUFBLFdBQUEsU0FBQUMsRUFBQWdCLEdBRUFBLEVBQUFDLFFBQUFDLFFBQUEsU0FBQUMsR0FDQVIsUUFBQUMsSUFBQU8sR0FDQW5CLEVBQUFtQixNQUFBQSxJQUdBbkIsRUFBQW9CLFFBQUEsV0FDQXBCLEVBQUFxQixVQUNBTCxFQUFBTSxRQUNBZixTQUFBLFlBQ0FnQixLQUFBdkIsRUFBQXFCLFdBQ0FILFFBQUEsU0FBQU0sR0FFQXhCLEVBQUFxQixTQUFBLFFBS0FyQixFQUFBQyxJQUFBLGNBQUEsU0FBQUMsRUFBQXNCLEdBQ0F4QixFQUFBeUIsT0FBQSxXQUNBekIsRUFBQW1CLE1BQUFPLFFBQUFGLFVDdEJBNUIsSUFBQStCLFFBQUEsWUFBQSxRQUFBLFNBQUFDLEdBQ0FDLEtBQUFaLE1BQUEsV0FDQSxNQUFBVyxHQUFBRSxJQUFBLGVBR0FELEtBQUFQLE9BQUEsU0FBQUUsR0FDQSxNQUFBSSxHQUFBSixLQUFBLGFBQUFBLE9DTkEzQixRQUFBQyxPQUFBLE9BQ0FpQyxRQUFBLGlCQUFBLFNBQUFDLEdBRUFBLEVBQ0FDLEtBQUEsS0FDQWxDLFdBQUEsWUFDQW1DLFlBQUEsZUFFQUQsS0FBQSxhQUNBbEMsV0FBQSxlQUNBbUMsWUFBQSxrQkFFQUQsS0FBQSxVQUNBbEMsV0FBQSxZQUNBbUMsWUFBQSxrQkNkQXJDLFFBQUFDLE9BQUEsT0FDQTZCLFFBQUEsV0FBQSxRQUFBLFNBQUFDLEdBQ0EsR0FBQU8sR0FBQU4sSUFDQU0sR0FBQUMsUUFBQSxXQUNBLE1BQUFSLEdBQUFFLElBQUEsY0FHQUssRUFBQTdCLE1BQUEsU0FBQUMsRUFBQUMsR0FDQSxNQUFBb0IsR0FBQUosS0FBQSxpQkFDQWpCLFNBQUFBLEVBQ0FDLFNBQUFBLElBQ0FDLEtBQUEsU0FBQTRCLEdBR0EsTUFGQUYsR0FBQUcsTUFBQUQsRUFBQXZCLEtBQ0FjLEVBQUFXLFNBQUFDLFFBQUFDLE9BQUEsVUFBQUosRUFBQXZCLEtBQ0FxQixFQUFBQyxnQkNkQXZDLFFBQUFDLE9BQUEsT0FDQTRDLEtBQUEsYUFBQSxXQUFBLFNBQUFDLEVBQUFDLElBQ0EsUUFBQUMsS0FDQSxHQUFBQyxHQUFBLHNCQUNBQyxFQUFBLEdBQUFDLFdBQUFGLEVBQ0FDLEdBQUFFLFFBQUEsU0FBQUMsR0FDQXZDLFFBQUFDLElBQUEscUNBQ0FnQyxFQUFBQyxFQUFBLE1BU0FFLEVBQUFJLFVBQUEsU0FBQUQsR0FDQXZDLFFBQUFDLElBQUFzQyxFQUNBLElBQUFFLEdBQUFDLEtBQUFDLE1BQUFKLEVBQUFwQyxLQUNBNkIsR0FBQVksV0FBQSxNQUFBSCxFQUFBSSxNQUFBSixFQUFBdEMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCdhcHAnLCBbJ25nUm91dGUnXSk7IiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29udHJvbGxlcignQXBwbGljYXRpb25DdHJsJywgZnVuY3Rpb24oJHNjb3BlKXtcblx0JHNjb3BlLiRvbignbG9naW4nLCBmdW5jdGlvbihfLCB1c2VyKXtcblx0XHQkc2NvcGUuY3VycmVudFVzZXIgPSB1c2VyO1xuXHR9KVxufSkiLCJhbmd1bGFyLm1vZHVsZSgnYXBwJylcbi5jb250cm9sbGVyKCdMb2dpbkN0cmwnLCBmdW5jdGlvbigkc2NvcGUsIFVzZXJTdmMpe1xuXHQkc2NvcGUubG9naW4gPSBmdW5jdGlvbih1c2VybmFtZSwgcGFzc3dvcmQpe1xuXHRcdFVzZXJTdmMubG9naW4odXNlcm5hbWUsIHBhc3N3b3JkKVxuXHRcdC50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcblx0XHRcdGNvbnNvbGUubG9nKCdsb2dnZWQgaW4nKTtcblx0XHRcdCRzY29wZS4kZW1pdCgnbG9naW4nLCByZXNwb25zZS5kYXRhKVxuXHRcdH0sIGZ1bmN0aW9uKGVycm9yKXtcblx0XHRcdGNvbnNvbGUubG9nKGVycm9yKTtcblx0XHR9KVxuXHR9XG59KSIsIlxuYXBwLmNvbnRyb2xsZXIoJ1Bvc3RzQ3RybCcsIGZ1bmN0aW9uKCRzY29wZSwgUG9zdHNTdmMpIHtcblxuICAgIFBvc3RzU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbihwb3N0cykge1xuICAgICAgICBjb25zb2xlLmxvZyhwb3N0cyk7XG4gICAgICAgICRzY29wZS5wb3N0cyA9IHBvc3RzO1xuICAgIH0pXG5cbiAgICAkc2NvcGUuYWRkUG9zdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJHNjb3BlLnBvc3RCb2R5KSB7XG4gICAgICAgICAgICBQb3N0c1N2Yy5jcmVhdGUoe1xuICAgICAgICAgICAgICAgIHVzZXJuYW1lOiAnZGlja2V5eHh4JyxcbiAgICAgICAgICAgICAgICBib2R5OiAkc2NvcGUucG9zdEJvZHlcbiAgICAgICAgICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24ocG9zdCkge1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLnBvc3RCb2R5ID0gbnVsbDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAkc2NvcGUuJG9uKCd3czpuZXdfcG9zdCcsIGZ1bmN0aW9uKF8sIHBvc3Qpe1xuICAgICAgICAkc2NvcGUuJGFwcGx5KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkc2NvcGUucG9zdHMudW5zaGlmdChwb3N0KTtcbiAgICAgICAgfSlcbiAgICB9KVxufSkiLCJhcHAuc2VydmljZSgnUG9zdHNTdmMnLCBmdW5jdGlvbigkaHR0cCkge1xuICAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICRodHRwLmdldCgnL2FwaS9wb3N0cycpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRlID0gZnVuY3Rpb24ocG9zdCl7XG4gICAgICAgIHJldHVybiAkaHR0cC5wb3N0KCcvYXBpL3Bvc3RzJywgcG9zdClcbiAgICB9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uY29uZmlnKGZ1bmN0aW9uKCRyb3V0ZVByb3ZpZGVyKSB7XG5cbiAgICAkcm91dGVQcm92aWRlclxuICAgICAgICAud2hlbignLycsIHtcbiAgICAgICAgICAgIGNvbnRyb2xsZXI6ICdQb3N0c0N0cmwnLFxuICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdwb3N0cy5odG1sJ1xuICAgICAgICB9KVxuICAgICAgICAud2hlbignL3JlZ2lzdGVyJywge1xuICAgICAgICAgICAgY29udHJvbGxlcjogJ1JlZ2lzdGVyQ3RybCcsXG4gICAgICAgICAgICB0ZW1wbGF0ZVVybDogJ3JlZ2lzdGVyLmh0bWwnXG4gICAgICAgIH0pXG4gICAgICAgIC53aGVuKCcvbG9naW4nLCB7XG4gICAgICAgICAgICBjb250cm9sbGVyOiAnTG9naW5DdHJsJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnbG9naW4uaHRtbCdcbiAgICAgICAgfSlcbn0pIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4uc2VydmljZSgnVXNlclN2YycsIGZ1bmN0aW9uKCRodHRwKXtcblx0dmFyIHN2YyA9IHRoaXM7XG5cdHN2Yy5nZXRVc2VyID0gZnVuY3Rpb24oKXtcblx0XHRyZXR1cm4gJGh0dHAuZ2V0KCdhcGkvdXNlcnMnKVxuXHR9XG5cblx0c3ZjLmxvZ2luID0gZnVuY3Rpb24odXNlcm5hbWUsIHBhc3N3b3JkKXtcblx0XHRyZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9zZXNzaW9ucycsIHtcblx0XHRcdHVzZXJuYW1lOiB1c2VybmFtZSxcblx0XHRcdHBhc3N3b3JkOiBwYXNzd29yZFxuXHRcdH0pLnRoZW4oZnVuY3Rpb24odmFsKXtcblx0XHRcdHN2Yy50b2tlbiA9IHZhbC5kYXRhO1xuXHRcdFx0JGh0dHAuZGVmYXVsdHMuaGVhZGVycy5jb21tb25bJ1gtQXV0aCddID0gdmFsLmRhdGE7XG5cdFx0XHRyZXR1cm4gc3ZjLmdldFVzZXIoKTtcblx0XHR9KVxuXHR9XG59KVxuIiwiYW5ndWxhci5tb2R1bGUoJ2FwcCcpXG4gICAgLnJ1bihmdW5jdGlvbigkcm9vdFNjb3BlLCAkdGltZW91dCkge1xuICAgICAgICAoZnVuY3Rpb24gY29ubmVjdCgpIHtcbiAgICAgICAgICAgIHZhciB1cmwgPSAnd3M6Ly9sb2NhbGhvc3Q6MzAwMCc7XG4gICAgICAgICAgICB2YXIgY29ubmVjdGlvbiA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ub25jbG9zZSA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnV2Vic29ja2V0IGNsb3NlZC4gUmVjb25uZWN0aW5nLi4uJyk7XG4gICAgICAgICAgICAgICAgJHRpbWVvdXQoY29ubmVjdCwgMTAgKiAxMDAwKTtcbiAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIC8vIGNvbm5lY3Rpb24ub25vcGVuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coJ1dlYlNvY2tldCBjb25uZWN0ZWQnKTtcbiAgICAgICAgICAgIC8vIH1cblxuICAgICAgICAgICAgY29ubmVjdGlvbi5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdmFyIHBheWxvYWQgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICAgICAgJHJvb3RTY29wZS4kYnJvYWRjYXN0KCd3czonICsgcGF5bG9hZC50b3BpYywgcGF5bG9hZC5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKVxuICAgIH0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9