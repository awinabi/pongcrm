from django.urls import path

from crm.views import DashboardView, TestView

urlpatterns = [
    path("dashboard/", DashboardView.as_view()),
    path("test/", TestView.as_view()),
]
