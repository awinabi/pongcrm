from django.contrib import admin
from django.urls import path, include

from crm.views import DashboardView

urlpatterns = [
    path("", DashboardView.as_view()),
    path("accounts/", include("allauth.urls")),
    path("c/", include("crm.urls")),
    path("admin/", admin.site.urls),
]
