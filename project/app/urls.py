from django.urls import path
from . import views  


urlpatterns = [
    path("", views.home, name="homepage"),
    path("register/", views.register_request, name="register"),
    path("login/", views.login_request, name="login"),
    path("logout/", views.logout_request, name= "logout"),
    path("welcome/", views.after_login, name="afterLogin"),
    path("getlit/", views.get_lit, name="Get LIT"),
    path("yourgoal/", views.goal, name="Your Goal"),
]